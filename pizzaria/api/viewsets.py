from rest_framework import viewsets

from pizzaria.models import Pedido, Pizza, Sabores
from pizzaria.api.serializers import PedidoSerializer, SaboresSerialiazer, PizzaSerialiazer

class SaboresViewset(viewsets.ModelViewSet):
    queryset = Sabores.objects.all()
    serializer_class = SaboresSerialiazer


class PizzaViewset(viewsets.ModelViewSet):
    queryset = Pizza.objects.prefetch_related('sabores')
    serializer_class = PizzaSerialiazer


class PedidoViewset(viewsets.ModelViewSet):
    queryset = Pedido.objects.select_related('pizza', 'user')
    # queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer


