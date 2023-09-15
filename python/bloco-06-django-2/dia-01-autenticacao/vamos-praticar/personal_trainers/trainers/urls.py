from django.urls import path
from django.urls import include
from rest_framework import routers
from .views import ClientViewSet

router = routers.DefaultRouter()
router.register(r"clients", ClientViewSet)

urlpatterns = [
    path("api/", include(router.urls)),
]
