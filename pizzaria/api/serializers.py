from django.contrib.auth.models import User

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
        fields = ['id', 'imagem','nome', 'preco', 'sabores']

    def create(self, validated_data):
        sabores_dados = validated_data.pop('sabores')
        pizza = models.Pizza.objects.create(**validated_data)

        for sabor in sabores_dados:
            sabor, created = models.Sabores.objects.get_or_create(nome=sabor['nome'])
            pizza.sabores.add(sabor)
        return pizza

class PizzaInterfaceSerializer(PizzaSerialiazer):
    class Meta:
        model = models.Pizza
        fields = ['id','nome', 'preco', 'sabores']

class BebidaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.Bebida
        fields = '__all__'

class PizzaPedidoSerializer(serializers.ModelSerializer):
    pizza = PizzaInterfaceSerializer()
    class Meta:
        model = models.PizzaPedido
        fields = ['pizza', 'massa']

class CarrinhoSerializer(serializers.ModelSerializer):
    pizzas = PizzaPedidoSerializer(many=True)
    bebidas = BebidaSerializer(many=True)

    preco = serializers.ReadOnlyField(source='total')
    class Meta:
        model = models.Carrinho
        fields = ['id', 'user', 'pizzas', 'bebidas', 'preco']

class PedidoSerializer(serializers.ModelSerializer):
    pedido = CarrinhoSerializer()
    class Meta:
        model = models.Pedido
        fields = ['horario', 'user', 'status', 'pedido']

    def create(self, validated_data):
        pedido_dados = validated_data.pop('pizza')
        pedido = models.Pedido.objects.create(**validated_data)
        for pizza in pedido_dados:
            pizza, created = models.Pizza.objects.get_or_create(nome=pizza['pizza'])
            pedido.pizza.add(pizza)
        return pedido