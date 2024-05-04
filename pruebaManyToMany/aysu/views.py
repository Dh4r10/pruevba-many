from django.shortcuts import render
from .models import TipoUsuario, Modulos, Permisos
from .serializers import TipoUsuarioSerializer, ModulosSerializer, PermisosSerializer
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.exceptions import APIException

# Create your views here.

class TipoUsuarioViewSet(viewsets.ModelViewSet):
    queryset = TipoUsuario.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = TipoUsuarioSerializer

class ModulosViewSet(viewsets.ModelViewSet):
    queryset = Modulos.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = ModulosSerializer

class PermisosViewSet(viewsets.ModelViewSet):
    queryset = Permisos.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = PermisosSerializer

    