from django.urls import path, re_path
from pizzaria import views

urlpatterns = [
    re_path(r".*", views.index),
    
]
