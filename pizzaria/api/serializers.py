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


    def create(self, validated_data):
        pizza_instance = models.Pizza.objects.create(**validated_data)
        return pizza_instance



class PedidoSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Pedido
        fields = ['pizza', 'horario', 'user', 'status']

    def get_count(self,obj):
        request = self.context.get("request")
        user_id = request.user.id

        return



