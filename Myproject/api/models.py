from django.db import models
from django.contrib.auth.models import AbstractUser ,User
# Create your models here.
class User(AbstractUser):
    is_creator = models.BooleanField(default=False)
    is_customer = models.BooleanField(default=False)

class Recipe(models.Model):
    creator = models.ForeignKey(User, related_name='creator', on_delete=models.CASCADE, null=True, blank=True)
    recipe_name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    instructions = models.TextField()
    prep_time = models.IntegerField()
    cook_time = models.IntegerField()
    servings = models.IntegerField()
    image=models.ImageField(upload_to='api/images/',blank=True,null=True)
    category=models.CharField(max_length=255)
    ingredient_name = models.CharField(max_length=255,blank=True, null=True)
    nutritions=models.TextField()
    ingredient_quantity = models.DecimalField(max_digits=5, decimal_places=2)
    quantity_unit = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.recipe_name} - {self.ingredient_name}"
