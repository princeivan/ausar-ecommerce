import base64
import requests
from datetime import datetime
from django.conf import settings
import json
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.utils.dateparse import parse_datetime
import logging
from django.shortcuts import render
from rest_framework.response import Response 
from django.utils.timezone import now
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth.models import User
from rest_framework import generics
from django.db.models import Q
from api.pagination import CustomPagination

logger = logging.getLogger(__name__)
from .models import Categories, Product, Order, ShippingAddress, SliderData
from .serializers import UserSerializer, CategorySerializer, ProductSerializer, OrderSerializer, OrderItemSerializer, ShippingAddressSerializer, SliderDataSerializer

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer 
    permission_classes = [AllowAny]
    
@api_view(['GET','POST'])
@permission_classes([AllowAny])
def getProducts(request):
    
    if request.method == 'GET':
        query = request.GET.get('query')
        
        if query is None:
            query = ''
        products = Product.objects.filter(Q(title__icontains=query)| Q(category__name__icontains=query))
        
        paginator = CustomPagination()
        paginated_products = paginator.paginate_queryset(products, request)
        serializer = ProductSerializer(paginated_products, many=True, context={'request': request})
        
        return paginator.get_paginated_response(serializer.data)
    
    if request.method == 'POST':
        serializer = ProductSerializer(data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','PUT', 'DELETE'])
@permission_classes([AllowAny])
def getProduct(request, pk):
    try:
        product = Product.objects.get(id=pk)
    except Product.DoesNotExist:
        raise NotFound(detail="Product not found")
    
    if request.method == 'GET':
        serializer = ProductSerializer(product, many=False, context={'request': request})
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
@api_view(['GET'])
def getFlashSales(request):
    flash_sales = Product.objects.filter(flash_sale=True, flash_sale_end__gt=now())
    paginator = CustomPagination()
    paginated_products = paginator.paginate_queryset(flash_sales,request)
    serializer = ProductSerializer(paginated_products, many=True, context={'request': request})
    return paginator.get_paginated_response(serializer.data)

@api_view(['GET'])
def getBestSellers(request):
    best_sellers = Product.objects.filter(best_seller=True).order_by('-numReviews')
    paginator = CustomPagination()
    paginated_products = paginator.paginate_queryset(best_sellers, request)
    serializer = ProductSerializer(paginated_products, many=True, context={'request': request})
    return paginator.get_paginated_response(serializer.data)

@api_view(['GET'])
def getCategories(request):
    cats = Categories.objects.all()
    serializer = CategorySerializer(cats, many=True)
    return Response(serializer.data)
        