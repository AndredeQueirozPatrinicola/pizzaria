from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status

from pizzaria.models import Pedido, Pizza, Sabores
from pizzaria.api.serializers import PedidoSerializer, SaboresSerialiazer, PizzaSerialiazer




class SaboresViewset(viewsets.ModelViewSet):
    queryset = Sabores.objects.all()
    serializer_class = SaboresSerialiazer


class PizzaViewset(viewsets.ModelViewSet):
    queryset = Pizza.objects.prefetch_related('sabores')
    serializer_class = PizzaSerialiazer
    http_method_names = ['get','post','retrieve','put','patch']


class PedidoViewset(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()#select_related('pizza', 'user')
    serializer_class = PedidoSerializer
    http_method_names = ['get','post','retrieve','put','patch']
