from typing import Any, Dict, Mapping, Optional, Type, Union
from django import forms
from django.core.files.base import File
from django.db.models.base import Model
from django.forms.utils import ErrorList
from playlists.validators import (
    validate_song_length,
    validate_singer_name,
)
from .models import Song, Singer


class CreateSongForm(forms.Form):
    name = forms.CharField(
        max_length=50,
        label="Nome da música:",
        help_text="Testando help text",
    )
    recorded_at = forms.DateTimeField(
        label="Data de gravação:",
        initial="2023-07-06",
        widget=forms.DateInput(attrs={"type": "date"}),
    )
    length_in_seconds = forms.IntegerField(
        validators=[validate_song_length], label="Duração (em segundos):"
    )


class CreatePlaylistForm(forms.Form):
    name = forms.CharField(max_length=50)
    is_active = forms.BooleanField()


class CreateSingerForm(forms.Form):
    name = forms.CharField(max_length=50, validators=[validate_singer_name])


# music/forms.py
class CreateMusicModelForm(forms.ModelForm):
    class Meta:
        model = Song
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["name"].label = "Nome da música"
        self.fields["recorded_at"].label = "Data de gravação"
        self.fields["recorded_at"].widget = forms.DateInput(
            attrs={"type": "date"}
        )
        self.fields["recorded_at"].initial = "2023-07-06"
        self.fields["length_in_seconds"].label = "Duração em segundos"
        self.fields["singer"].label = "Artista"
        self.fields["singer"].widget = forms.Select(
            choices=[
                (singer.id, singer.name)
                for singer in Singer.objects.filter(name__contains="a")
            ]
        )
