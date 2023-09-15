from django.db import models


# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    due_date = models.DateField()
    completed = models.BooleanField(default=False)
    priority = models.IntegerField(
        choices=[(1, "Low"), (2, "Medium"), (3, "High")], default=1
    )
    created_at = models.DateTimeField(auto_now_add=True)
