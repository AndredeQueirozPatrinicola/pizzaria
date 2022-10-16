from django.contrib import admin
from pizzaria import models 

# Register your models here.

@admin.register(models.Pizza)
class PizzaAdmin(admin.ModelAdmin):
    list_display = ('id','nome', 'preco')

@admin.register(models.Pedido)
class PedidoAdmin(admin.ModelAdmin):
    list_display = ('id', 'pizza', 'horario', 'user')

@admin.register(models.Sabores)
class SaboresAdmin(admin.ModelAdmin):
    list_display = ('id','nome')
