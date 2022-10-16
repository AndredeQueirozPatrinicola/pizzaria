from django.db import models
from autorizacao.models import Cliente

# Create your models here.


class Sabores(models.Model):
    nome = models.CharField(max_length=255)

    def __str__(self):
        return self.nome

class Pizza(models.Model):
    nome = models.CharField(max_length=255)
    sabores = models.ManyToManyField(Sabores)
    preco = models.FloatField()

    def __str__(self):
        return self.nome

class Pedido(models.Model):
    pizza = models.ForeignKey(Pizza, on_delete=models.SET_DEFAULT, default='Pizza deletada')
    horario = models.TimeField(auto_now=True)
    user = models.ForeignKey(Cliente, on_delete=models.SET_DEFAULT, default='Cliente excluido')
    status = models.CharField(max_length=255)

    def __str__(self):
        return self.user