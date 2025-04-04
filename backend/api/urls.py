from django.urls import path
from .import views  

urlpatterns = [
    path('products/', views.getProducts, name='products'),
    path('products/<str:pk>/', views.getProduct, name='product'),
    path('flash-sales/', views.getFlashSales, name='flash-sales'),
    path('best-sellers/', views.getBestSellers, name='best-sellers'),
    
    path('categories/', views.getCategories, name='categories'),
]
