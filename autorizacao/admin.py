from django.contrib import admin
from autorizacao import models

# Register your models here.

@admin.register(models.Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('id', 'telefone', 'rua', 'numero', 'bairro')
