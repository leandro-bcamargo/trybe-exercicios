from django.shortcuts import render, get_object_or_404, redirect
from .models import Recipe


# Create your views here.
def recipes_list(request):
    context = {"recipes": Recipe.objects.all()}

    return render(request, "menu/templates/recipes_list.html", context)


def recipe_details(request, id):
    context = {"recipe": get_object_or_404(Recipe, id=id)}

    return render(request, "menu/templates/recipe_details.html", context)


def delete_recipe(request, id):
    recipe = get_object_or_404(Recipe, id=id)
    recipe.delete()
    context = {"recipes": Recipe.objects.all()}

    return redirect("recipes_list")
