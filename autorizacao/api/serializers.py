from django.contrib.auth.models import User

from rest_framework import serializers

from autorizacao import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserClienteInterfaceSerializer(UserSerializer):
    class Meta:
        model = User
        fields = ["username","first_name","last_name","email"]

class ClienteSerializer(serializers.ModelSerializer):
    user = UserClienteInterfaceSerializer()
    class Meta:
        model = models.Cliente
        fields = ['telefone', 'rua', 'numero', 'bairro', 'user']