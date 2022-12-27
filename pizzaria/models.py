from django.db import models
from django.db.models import Sum

from autorizacao.models import Cliente

# Create your models here.

class Bebida(models.Model):
    nome = models.CharField(max_length=255, unique=True)
    volume = models.FloatField()
    preco = models.FloatField()
    descricao = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.nome

class Sabores(models.Model):
    nome = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.nome

class Pizza(models.Model):
    nome = models.CharField(max_length=255)
    imagem = models.ImageField(upload_to='images/', null=True)
    sabores = models.ManyToManyField(Sabores, related_name='sabores')
    preco = models.FloatField()

    def __str__(self):
        return self.nome

class PizzaPedido(models.Model):
    OPCOES = (
        ('F', 'Fina'),
        ('M', 'Média'),
        ('G', 'Grande'),
        ('I', 'Integral'),
    )

    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)
    massa = models.TextField(max_length=1, default='M', choices=OPCOES)

    def __str__(self):
        return str(self.pizza)

class Carrinho(models.Model):
    user = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    pizzas = models.ManyToManyField(PizzaPedido, related_name='pizzas')
    bebidas = models.ManyToManyField(Bebida, related_name='bebidas')

    def __str__(self):
        return str(self.user)

    def total(self):
        total_pizzas = self.pizzas.aggregate(Sum('pizza__preco'))['pizza__preco__sum']
        total_bebidas = self.bebidas.aggregate(Sum('preco'))['preco__sum']
        return total_pizzas + total_bebidas

class Pedido(models.Model):
    OPCOES = (
        ('R', 'Realizado'),
        ('P', 'Em preparo'),
        ('S', 'Saiu para entrega'),
        ('F', 'Finalizado'),
        ('C', 'Cancelado')
    )

    pedido = models.ForeignKey(Carrinho, on_delete=models.CASCADE, related_name='pizza')
    horario = models.TimeField(auto_now=True)
    user = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='user_name')
    status = models.CharField(choices=OPCOES, max_length=1)

    def __str__(self):
        return str(self.user)

