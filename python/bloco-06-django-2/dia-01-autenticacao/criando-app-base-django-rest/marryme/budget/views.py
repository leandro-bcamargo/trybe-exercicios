from rest_framework import viewsets
from .models import Vendor, Marriage, Budget
from .serializers import (
    VendorSerializer,
    MarriageSerializer,
    BudgetSerializer,
    AdminVendorSerializer,
)
from .permissions import IsOwnerOrAdmin

# Code snippet from views.py


# Create your views here.
class VendorViewSet(viewsets.ModelViewSet):
    queryset = Vendor.objects.all()
    serializer_class = AdminVendorSerializer

    def get_serializer_class(self):
        if self.action in ("create", "destroy", "update"):
            return AdminVendorSerializer
        return VendorSerializer


class MarriageViewSet(viewsets.ModelViewSet):
    queryset = Marriage.objects.all()
    serializer_class = MarriageSerializer

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Marriage.objects.all()
        return Marriage.objects.filter(user=self.request.user)


class BudgetViewSet(viewsets.ModelViewSet):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer
    permission_classes = [IsOwnerOrAdmin]

    def get_queryset(self):
        if self.request.user.is_superuser:
            return Budget.objects.all()
        return Budget.objects.filter(user=self.request.user)
