from django.contrib import admin
from .models import Categories,Product, Order , OrderItem, ShippingAddress, SliderData

admin.site.register(Categories)
admin.site.register(Product)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(ShippingAddress)
admin.site.register(SliderData)