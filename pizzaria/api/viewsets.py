from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status

from pizzaria.models import Pedido, Pizza, Sabores
from pizzaria.api.serializers import PedidoSerializer, SaboresSerialiazer, PizzaSerialiazer, Pizza2erialiazer, Pizza3Serialiazer




class SaboresViewset(viewsets.ModelViewSet):
    queryset = Sabores.objects.all()
    serializer_class = SaboresSerialiazer


class PizzaViewset(viewsets.ModelViewSet):
    queryset = Pizza.objects.prefetch_related('sabores')
    serializer_class = PizzaSerialiazer

    def create(self, request):
        sabores = get_object_or_404(Sabores, sabores=request.data.get('nome'))


        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(subject=sabores)
        headers = self.get_success_headers(serializer.data)

        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class PedidoViewset(viewsets.ModelViewSet):
    queryset = Pedido.objects.select_related('pizza', 'user')
    # queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer


