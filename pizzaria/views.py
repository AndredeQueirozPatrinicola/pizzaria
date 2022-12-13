from django.shortcuts import render
from django.views.generic import ListView
from django.http.response import HttpResponse

# Create your views here.


# class Index(ListView):

def index(request, buffer):
    return render(request, 'index.html')
