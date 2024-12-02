from django.contrib import admin

from .models import User, Recipe

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'is_creator', 'is_customer']
    search_fields = ['username', 'email']

@admin.register(Recipe)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['recipe_name', 'ingredient_name', 'ingredient_quantity', 'quantity_unit', 'creator', 'category']
    search_fields = ['recipe_name', 'ingredient_name', 'user__username']
    list_filter = ['recipe_name','ingredient_name']
