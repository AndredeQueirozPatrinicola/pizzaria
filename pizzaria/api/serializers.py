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
        sabores_dados = validated_data.pop('sabores')
        pizza = models.Pizza.objects.create(**validated_data)

        for sabor in sabores_dados:
            sabor, created = models.Sabores.objects.get_or_create(nome=sabor['nome'])
            pizza.sabores.add(sabor)
        return pizza



class PedidoSerializer(serializers.ModelSerializer):
    pizza = PizzaSerialiazer()
    class Meta:
        model = models.Pedido
        fields = ['horario', 'user', 'status', 'pizza']

    def get_count(self,obj):
        request = self.context.get("request")
        user_id = request.user.id

        return

    def create(self, validated_data):
        pedido_dados = validated_data.pop('pizza')
        pedido = models.Pedido.objects.create(**validated_data)

        for pizza in pedido_dados:
            pizza, created = models.Pizza.objects.get_or_create(nome=pizza['pizza'])
            pedido.pizza.add(pizza)
        return pedido



