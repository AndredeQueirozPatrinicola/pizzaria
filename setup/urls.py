from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include('pizzaria.api.urls')),
    
    path('autorizacao', include('autorizacao.urls')),

    path('', include('pizzaria.urls')),

    path('__debug__/', include('debug_toolbar.urls')),
    
]