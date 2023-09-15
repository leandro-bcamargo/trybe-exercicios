from django.urls import path
from . import views

urlpatterns = [
    path("", views.recipes_list, name="recipes_list"),
    path("recipe/<int:id>/", views.recipe_details, name="recipe_details"),
    path("recipe/<int:id>/delete/", views.delete_recipe, name="delete_recipe"),
]
