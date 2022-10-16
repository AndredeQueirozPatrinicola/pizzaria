from rest_framework import serializers

from pizzaria import models




class SaboresSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = models.Sabores
        fields = ['id', 'nome']


class PizzaSerialiazer(serializers.ModelSerializer):
    sabores = SaboresSerialiazer(many=True, read_only=True)
    class Meta:
        model = models.Pizza
        fields = ['id', 'nome', 'sabores', 'preco', 'sabores']


class PedidoSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Pedido
        fields = ['pizza', 'horario', 'user', 'status']


