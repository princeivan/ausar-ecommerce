from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, SerializerMethodField
from  .models import Categories, Product, Order, OrderItem, ShippingAddress, SliderData
from django.contrib.auth.models import User 
import requests
from django.core.files.base import ContentFile

class UserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)
    class Meta:
        model = User 
        fields = ["id", "username","email","password", "confirm_password"]
        extra_kwargs = {"password":{"write_only":True}}
        
        
        def validate(self, data):
            if data['password'] != data['confirm_password']:
                raise serializers.ValidationError({"password":"Password do not match"})
            return data
        
        def create(self, validated_data):
            validated_data.pop("confirm_password")
            user = User.objects.create_user(**validated_data)
            return user 
        
class CategorySerializer(ModelSerializer):
    image_url = serializers.SerializerMethodField()
    image_url = serializers.URLField(write_only=True, required=False)
    
    class Meta:
        model = Categories 
        fields = '__all__'
        
    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and hasattr(obj.image, 'url'):
            return request.build_absolute_uri(obj.image_url)
        
        return None
    
class ProductSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    image_url = serializers.URLField(write_only=True, required=False)
    category= CategorySerializer()
    
    class Meta:
        model =Product 
        fields = '__all__'
        
    def create(self, validated_data):
        image_url = validated_data.pop("image_url", None)
        instance = super().create(validated_data)
        
        if image_url:
            response = requests.get(image_url)
            if response.status_code == 200:
                instance.image.save("image.jpg", ContentFile(response.content), save=True)
             
        return instance 
    
    def get_image_url(self, obj):
        request = self.Context.get('request')
        if obj.image and hasattr(obj.image, 'url'):
            return request.build_absolute_uri(obj.image.url)
        return None 
    
class OrderItemSerializer(serializers.ModelSerializer):
    product = serializers.PrimaryKeyRelatedField(queryset=Product.objects.all())
    
    class Meta:
        model = OrderItem
        fields = ['id','order', 'product', 'quantity', 'price']      

        
class OrderSerializer(serializers.ModelSerializer):
    
    items =  OrderItemSerializer(many=True)
    class Meta:
        model = Order 
        fields = ['id', 'paymentmethod', 'taxPrice', 'shippingPrice', 'totalPrice', 'isPaid', 'paidAt', 'status', 'isDelivered', 'deleveredAt', 'createdAt', 'items']
        extra_kwargs = {"user":{"read-only":True}}
        
    def create(self, validated_data):
        items_data = validated_data.pop('items')
        order = Order.objects.create(**validated_data)
        for item_data in items_data:
            OrderItem.objects.create(order=order, **item_data)
        return order
    
class ShippingAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShippingAddress
        fields = '__all__'
        
class SliderDataSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    image_url = serializers.URLField(write_only=True, required=False)
    class Meta:
        model = SliderData 
        fields = '__all__' 
        
    def create(self, validated_data):
        image_url = validated_data.pop('image_url', None)
        instance = super().create(validated_data)

        if image_url:
            response = requests.get(image_url)
            if response.status_code == 200:
                instance.image.save('image.jpg', ContentFile(response.content), save=True)
        
        return instance
    
    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and hasattr(obj.image, 'url'):
            return request.build_absolute_uri(obj.image.url)
        return None
    
        

    