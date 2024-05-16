from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from categories.views import CategoryViewSet
from products.views import ProductViewSet

# Create a router and register viewsets
router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'products', ProductViewSet)

# Define urlpatterns including router's URLs
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', include('categories.urls')),
    path('', include('products.urls')),
]

# Add URL pattern to serve media files during development
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
