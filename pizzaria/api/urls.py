from django.urls import path, include
from rest_framework import routers

from pizzaria.api.viewsets import  SaboresViewset, PedidoViewset, PizzaViewset

router = routers.DefaultRouter()
router.register('sabores', SaboresViewset, basename='sabores')
router.register('pizza', PizzaViewset, basename='pizza')
router.register('pedidos', PedidoViewset, basename='pedidos')


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]