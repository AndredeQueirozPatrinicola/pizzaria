from django.urls import path
from autorizacao import views

urlpatterns = [
    path('', views.login),  
]