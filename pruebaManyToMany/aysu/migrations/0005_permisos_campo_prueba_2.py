# Generated by Django 5.0.4 on 2024-05-04 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aysu', '0004_permisos_campo_prueba_alter_permisos_descripcion'),
    ]

    operations = [
        migrations.AddField(
            model_name='permisos',
            name='campo_prueba_2',
            field=models.CharField(default=None, max_length=10),
        ),
    ]
