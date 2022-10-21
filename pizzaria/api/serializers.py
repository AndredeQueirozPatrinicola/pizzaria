from rest_framework import serializers

from pizzaria import models




class SaboresSerialiazer(serializers.ModelSerializer):
    class Meta:
        model = models.Sabores
        fields = ['id', 'nome']


class PizzaSerialiazer(serializers.ModelSerializer):
    sabores = SaboresSerialiazer(many=True)
    class Meta:
        model = models.Pizza
        fields = ['id', 'nome', 'sabores', 'preco', 'sabores']


class PedidoSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Pedido
        fields = ['pizza', 'horario', 'user', 'status']

class Pizza2erialiazer(serializers.ModelSerializer):
    class Meta:
        model = models.Pizza
        fields = ['id', 'nome', 'sabores', 'preco', 'sabores']
    
class Pizza3Serialiazer(Pizza2erialiazer):
    sabores = SaboresSerialiazer(many=True)

