from django.contrib import admin
from pizzaria import models 

# Register your models here.

@admin.register(models.Pizza)
class PizzaAdmin(admin.ModelAdmin):
    list_display = ('id','nome', 'preco')

@admin.register(models.Bebida)
class BebidaAdmin(admin.ModelAdmin):
    list_display= ('id', 'nome', 'volume', 'preco', 'descricao')

@admin.register(models.PizzaPedido)
class PizzaPedidoAdmin(admin.ModelAdmin):
    list_display=('massa',)

@admin.register(models.Carrinho)
class CarrinhoAdmin(admin.ModelAdmin):
    list_display = ('user', )

@admin.register(models.Pedido)
class PedidoAdmin(admin.ModelAdmin):
    list_display = ('id', 'pedido', 'horario', 'user')

@admin.register(models.Sabores)
class SaboresAdmin(admin.ModelAdmin):
    list_display = ('id','nome')
