from django.db import models

# Create your models here.

class TipoUsuario(models.Model):
    nombre = models.CharField(max_length=30, unique=True, null=False, default=None)
    descripcion = models.CharField(max_length=255, null=False, default=None)
    estado = models.BooleanField(null=False, default=True)

    def __str__(self) -> str:
        return f"{self.id}. {self.nombre}"

    class Meta:
        db_table = "tipo_usuario"

class Modulos(models.Model):
    nombre = models.CharField(max_length=30, unique=True, null=False, default=None)
    descripcion = models.CharField(max_length=255, null=False, default=None)
    estado = models.BooleanField(null=False, default=True)

    def __str__(self) -> str:
        return f"{self.id}. {self.nombre}"

    class Meta:
        db_table = "modulos"

class Permisos(models.Model):
    id_tipo_usuario = models.ForeignKey(TipoUsuario, db_column="id_tipo_usuario", on_delete=models.CASCADE, null=False, default=None)
    id_modulos = models.ForeignKey(Modulos, db_column="id_modulos", on_delete=models.CASCADE, null=False, default=None)
    estado = models.BooleanField(null=False, default=True)

    def __str__(self) -> str:
        return f"{self.id}. {self.nombre}"

    class Meta:
        db_table = "permisos"
