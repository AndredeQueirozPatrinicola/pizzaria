from django.contrib.auth.models import User

from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser

from pizzaria import models
from pizzaria.api import serializers

class SaboresViewset(viewsets.ModelViewSet):
    queryset = models.Sabores.objects.all()
    serializer_class = serializers.SaboresSerialiazer
    http_method_names = ['get','post','retrieve','put','patch']

class PizzaViewset(viewsets.ModelViewSet):
    queryset = models.Pizza.objects.prefetch_related('sabores')
    serializer_class = serializers.PizzaSerialiazer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    http_method_names = ['get','post','retrieve','put','patch']

class PedidoViewset(viewsets.ModelViewSet):
    queryset = models.Pedido.objects.select_related('pedido', 'user')
    serializer_class = serializers.PedidoSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    http_method_names = ['get','post','retrieve','put','patch']

class BebidaViewset(viewsets.ModelViewSet):
    queryset = models.Bebida.objects.all()
    serializer_class = serializers.BebidaSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    http_method_names = ['get','post','retrieve','put','patch']

class PizzaPedidoViewset(viewsets.ModelViewSet):
    queryset = models.PizzaPedido.objects.prefetch_related('pizza')
    serializer_class = serializers.PizzaPedidoSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    http_method_names = ['get','post','retrieve','put','patch']

class CarrinhoViewset(viewsets.ModelViewSet):
    queryset = models.Carrinho.objects.prefetch_related('pizzas__pizza', 'bebidas')
    serializer_class = serializers.CarrinhoSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    http_method_names = ['get','post','retrieve','put','patch']