from django.contrib import admin
from .models import WorkoutPlan, Client


# Register your models here.
class WorkoutPlanInline(admin.StackedInline):
    model = WorkoutPlan


class ClientAdmin(admin.ModelAdmin):
    inlines = [WorkoutPlanInline]


admin.site.register(Client, ClientAdmin)
