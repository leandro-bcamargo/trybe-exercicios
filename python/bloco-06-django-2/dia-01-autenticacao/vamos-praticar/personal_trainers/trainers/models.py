from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Client(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class WorkoutPlan(models.Model):
    client = models.OneToOneField(
        Client, on_delete=models.CASCADE, related_name="workout_plan"
    )
    personal_trainer = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="workout_plans"
    )
    workout = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.client.name}'s Workout Plan"
