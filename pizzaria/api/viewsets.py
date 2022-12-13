from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser

from pizzaria.models import Pedido, Pizza, Sabores
from pizzaria.api.serializers import PedidoSerializer, SaboresSerialiazer, PizzaSerialiazer




class SaboresViewset(viewsets.ModelViewSet):
    queryset = Sabores.objects.all()
    serializer_class = SaboresSerialiazer
    http_method_names = ['get','post','retrieve','put','patch']

class PizzaViewset(viewsets.ModelViewSet):
    queryset = Pizza.objects.prefetch_related('sabores')
    serializer_class = PizzaSerialiazer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly]
    http_method_names = ['get','post','retrieve','put','patch']


class PedidoViewset(viewsets.ModelViewSet):
    queryset = Pedido.objects.select_related('pizza', 'user', 'status')
    serializer_class = PedidoSerializer
    parser_classes = (MultiPartParser, FormParser)
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly]
    http_method_names = ['get','post','retrieve','put','patch']
