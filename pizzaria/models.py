from django.db import models
from autorizacao.models import Cliente

# Create your models here.


class Sabores(models.Model):
    nome = models.CharField(max_length=255)

    def __str__(self):
        return self.nome

class Pizza(models.Model):
    nome = models.CharField(max_length=255)
    imagem = models.ImageField(upload_to='images/', null=True)
    sabores = models.ManyToManyField(Sabores, related_name='sabores')
    preco = models.FloatField()

    def __str__(self):
        return self.nome

class Status(models.Model):
    OPCOES = (
        ('R', 'Realizado'),
        ('P', 'Em preparo'),
        ('S', 'Saiu para entrega'),
        ('F', 'Finalizado'),
        ('C', 'Cancelado')
    )

    status = models.CharField(choices=OPCOES, max_length=1)

    def __str__(self):
        return self.status

class Pedido(models.Model):
    pizza = models.ForeignKey(Pizza, on_delete=models.SET_DEFAULT, default='Pizza deletada', related_name='pizza')
    horario = models.TimeField(auto_now=True)
    user = models.ForeignKey(Cliente, on_delete=models.SET_DEFAULT, default='Cliente excluido', related_name='user_name')
    status = models.ForeignKey(Status, on_delete=models.SET_DEFAULT, default=None, related_name='status_pedido')

    def __str__(self):
        return self.user

