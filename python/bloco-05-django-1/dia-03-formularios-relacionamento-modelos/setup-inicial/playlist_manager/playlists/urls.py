from django.urls import path
from .views import song, new_singer, index

urlpatterns = [
    path("songs/", song, name="song"),
    path("singers/", new_singer, name="singer"),
    path("", index, name="home"),
]
