from django.db import models
from playlists.validators import validate_song_length


# Create your models here.


class Singer(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name


class Song(models.Model):
    name = models.CharField(max_length=50)
    recorded_at = models.DateTimeField(auto_now_add=True)
    length_in_seconds = models.IntegerField(validators=[validate_song_length])
    singer = models.ForeignKey(
        # Singer.songs.all() acessa todas as songs
        # Song.singer acessa o Singer do Song
        Singer,
        on_delete=models.CASCADE,
        related_name="songs",
        default=2,
    )


class Playlist(models.Model):
    name = models.CharField(max_length=50)
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    songs = models.ManyToManyField("Song", related_name="playlists")

    def add_song(self, song: Song) -> None:
        self.songs.add(song)
        self.save()

    def remove_song(self, song: Song) -> None:
        self.songs.remove(song)
        self.save()

    def __str__(self) -> str:
        return self.name

    def __str__(self) -> str:
        return self.name
