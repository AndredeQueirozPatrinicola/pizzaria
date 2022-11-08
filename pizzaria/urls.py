from django.urls import path
from pizzaria import views

urlpatterns = [
    path('', views.index),
    
]
