from django.urls import path, include
from rest_framework import routers

from autorizacao.api.viewsets import UserViewSet, ClienteViewSet 

router = routers.DefaultRouter()
router.register('usuarios', UserViewSet, basename='usuarios')
router.register('clientes', ClienteViewSet, basename='clientes')

urlpatterns = [
    path('', include(router.urls)),
]