from rest_framework import serializers
from .models import Vendor, Budget, Marriage


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = ["id", "name", "price"]


class AdminVendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = "__all__"

    def create(self, validated_data):
        request = self.context.get("request")
        if request.user.is_superuser:
            return super().create(validated_data)
        raise serializers.ValidationError(
            "Você não tem permissão para criar fornecedores."
        )


class BudgetSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        read_only=True, default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Budget
        fields = ["id", "marriage", "vendors", "user"]


class NestedBudgetSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(
        read_only=True, default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Budget
        fields = ["id", "vendors", "user"]

    def create(self, validated_data):
        current_user = self.context.get("request").user
        budget_data = validated_data.pop("budget")
        budget_data["user"] = current_user
        validated_data["user"] = current_user

        budget_data["marriage"] = Marriage.objects.create(**validated_data)
        BudgetSerializer().create(validated_data=budget_data)

        return budget_data["marriage"]


class MarriageSerializer(serializers.ModelSerializer):
    budget = NestedBudgetSerializer()

    class Meta:
        model = Marriage
        fields = ["id", "marriage", "vendors", "budget"]

    def create(self, validated_data):
        budget_data = validated_data.pop("budget")
        budget_data["marriage"] = Marriage.objects.create(**validated_data)
        BudgetSerializer().create(validated_data=budget_data)

        return budget_data["marriage"]
