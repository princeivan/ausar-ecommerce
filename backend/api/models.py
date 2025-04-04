from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Categories(models.Model):
    name = models.CharField(max_length=250)
    
    def __str__(self):
        return self.name
    
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='users')
    title = models.CharField(max_length=250)
    image = models.ImageField(null=True, blank=True)
    brand = models.CharField(max_length=200, null=True, blank=True)
    category = models.ForeignKey(Categories, on_delete=models.SET_NULL, null=True, related_name="categories")
    description = models.TextField(null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    Date_added = models.DateTimeField(auto_now_add=True)
    new_price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    old_price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    specs = models.JSONField(null=True, blank=True)
    best_seller = models.BooleanField(default=False)
    flash_sale = models.BooleanField(default=False)
    flash_sale_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    flash_sale_end = models.DateTimeField(null=True, blank=True)
    
    def __str__(self):
        return self.title 
    
    class Meta:
        ordering =['-Date_added']
        
    def get_image_url(self):
        return self.image.url if self.image else '/path/to/default/noavatar.png'
        
class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="reviews")
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment=models.TextField(null=True, blank=True)
    
    def __str__(self):
        return str(self.rating)
class ShippingAddress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    fullname = models.CharField(max_length=250, null=True, blank=True)
    phone = models.IntegerField()
    address =models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField()
    Town = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    
    def __str__(self):
        return self.address   
class Order(models.Model):
    user= models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="orders")
    paymentmethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt= models.DateTimeField(auto_now_add=False, null=True, blank=True)
    shippingAddress = models.ForeignKey(ShippingAddress, on_delete=models.SET_NULL, null=True, related_name="addresses" )
    status = models.CharField(max_length=200, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deleveredAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True, null=True, blank=True)
    
    
    def __str__(self):
        return str(self.createdAt)
    
class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='items', on_delete=models.CASCADE, null = True)
    product = models.ForeignKey('Product', on_delete=models.CASCADE) 
    quantity = models.PositiveIntegerField(default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, default=0)

    def __str__(self):
        return f'{self.product.title} (x{self.quantity}'
    

 
class SliderData(models.Model):
    title = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return self.title 
    
