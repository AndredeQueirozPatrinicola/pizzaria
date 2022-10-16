from xml.etree.ElementInclude import include
from django.urls import path
from rest_framework import routers

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    router.register('survey', )  
]