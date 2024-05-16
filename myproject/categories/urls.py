from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router and register viewsets
router = DefaultRouter()
router.register(r'categories', views.CategoryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]