from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)  # Use ImageField for product images
    description = models.TextField(null=True, blank=True)
    dessert = models.CharField(max_length=200, null=True, blank=True)
    dessertImage = models.ImageField(null=True, blank=True)
    soupOption1 = models.CharField(max_length=200, null=True, blank=True)
    soupOption1image = models.ImageField(null=True, blank=True)
    soupOption2 = models.CharField(max_length=200, null=True, blank=True)
    soupOption2image = models.ImageField(null=True, blank=True)
    mainFoodOption1 = models.CharField(max_length=200, null=True, blank=True)
    mainFoodOption1image = models.ImageField(null=True, blank=True)
    mainFoodOption2 = models.CharField(max_length=200, null=True, blank=True)
    mainFoodOption2image = models.ImageField(null=True, blank=True)
    secondaryFood1 = models.CharField(max_length=200, null=True, blank=True)
    secondaryFood2 = models.CharField(max_length=200, null=True, blank=True)
    secondaryFood3 = models.CharField(max_length=200, null=True, blank=True)
    waterOption1 = models.CharField(max_length=200, null=True, blank=True)
    waterOption2 = models.CharField(max_length=200, null=True, blank=True)
    createAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):  
        return self.name
    
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)
    
class OrderItem(models.Model): 
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    
    def __str__(self):
        return str(self.name)
    