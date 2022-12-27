from django.urls import path, include
from rest_framework import routers

from pizzaria.api import  viewsets

router = routers.DefaultRouter()
router.register('sabores', viewsets.SaboresViewset, basename='sabores')
router.register('pizza', viewsets.PizzaViewset, basename='pizza')
router.register('pedidos', viewsets.PedidoViewset, basename='pedidos')
router.register('bebidas', viewsets.BebidaViewset, basename='bebidas')
router.register('pizza-pedido', viewsets.PizzaPedidoViewset, basename='pizza pedido')
router.register('carrinho', viewsets.CarrinhoViewset, basename='carrinho')

urlpatterns = [
    path('', include(router.urls)),
    path('autorizacao/', include('autorizacao.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]