from django.shortcuts import render, redirect
from playlists.forms import CreateMusicModelForm, CreateSingerForm
from .models import Song, Singer

# Create your views here.


def song(request):
    form = CreateMusicModelForm()
    if request.method == "POST":
        form = CreateMusicModelForm(request.POST)

        if form.is_valid():
            Song.objects.create(**form.cleaned_data)
            return redirect("home")

    context = {"form": form}
    return render(request, "song.html", context)


def new_singer(request):
    form = CreateSingerForm()
    if request.method == "POST":
        form = CreateSingerForm(request.POST)

        if form.is_valid():
            Singer.objects.create(**form.cleaned_data)

            return redirect("home")

    context = {"form": form}
    return render(request, "singer.html", context)


def index(request):
    context = {"songs": Song.objects.all(), "singers": Singer.objects.all()}
    return render(request, "home.html", context)
