from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Cliente(models.Model):
    telefone = models.CharField(max_length=255)
    rua = models.CharField(max_length=255)
    numero = models.CharField(max_length=255)
    bairro = models.CharField(max_length=255)
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.user)