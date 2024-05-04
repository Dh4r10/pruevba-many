from rest_framework import routers
from .views import TipoUsuarioViewSet, ModulosViewSet, PermisosViewSet
from django.urls import path, include

router = routers.DefaultRouter()

router.register('tipo_usuario', TipoUsuarioViewSet, basename="tipo_usuario")
router.register('modulos', ModulosViewSet, basename="modulos")
router.register('permisos', PermisosViewSet, basename="permisos")

urlpatterns = [
    path('api/', include(router.urls))
]
