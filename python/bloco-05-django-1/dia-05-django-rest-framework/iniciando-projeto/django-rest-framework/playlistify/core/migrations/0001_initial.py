# Generated by Django 4.2.4 on 2023-08-23 02:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Music",
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
                ("title", models.CharField(max_length=50)),
                ("recorded_at", models.DateField()),
                ("length_in_seconds", models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name="Singer",
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
                ("name", models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name="Playlist",
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
                ("name", models.CharField(max_length=50)),
                ("is_active", models.BooleanField(default=False)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "musics",
                    models.ManyToManyField(related_name="playlists", to="core.music"),
                ),
            ],
        ),
        migrations.AddField(
            model_name="music",
            name="singer",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="musics",
                to="core.singer",
            ),
        ),
    ]
