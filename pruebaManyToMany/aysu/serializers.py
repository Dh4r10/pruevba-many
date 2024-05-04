from .models import TipoUsuario, Modulos, Permisos
from rest_framework import serializers

class TipoUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoUsuario
        fields = '__all__'

class ModulosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Modulos
        fields = '__all__'

class PermisosSerializer(serializers.ModelSerializer):

    id_tipo_usuario = serializers.PrimaryKeyRelatedField(queryset=TipoUsuario.objects.all(), write_only=True)
    tipo_usuario = TipoUsuarioSerializer(source='id_tipo_usuario', read_only=True)
    id_modulos = serializers.PrimaryKeyRelatedField(queryset=Modulos.objects.all(), write_only=True)
    modulos = ModulosSerializer(source='id_modulos', read_only=True)

    class Meta:
        model = Permisos
        fields = '__all__'