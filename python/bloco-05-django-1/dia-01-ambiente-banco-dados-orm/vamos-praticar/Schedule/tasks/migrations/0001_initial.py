# Generated by Django 4.2.4 on 2023-08-16 20:20

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Task",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("description", models.TextField()),
                ("due_date", models.DateField()),
                ("completed", models.BooleanField(default=False)),
                (
                    "priority",
                    models.IntegerField(
                        choices=[(1, "Low"), (2, "Medium"), (3, "High")], default=1
                    ),
                ),
                ("created_at", models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
