# Generated by Django 5.0.4 on 2024-05-04 19:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Modulos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=30, unique=True)),
                ('descripcion', models.CharField(blank=True, max_length=255)),
                ('estado', models.BooleanField(default=True)),
            ],
            options={
                'db_table': 'modulos',
            },
        ),
        migrations.CreateModel(
            name='TipoUsuario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=30, unique=True)),
                ('descripcion', models.CharField(blank=True, max_length=255)),
                ('estado', models.BooleanField(default=True)),
            ],
            options={
                'db_table': 'tipo_usuario',
            },
        ),
        migrations.CreateModel(
            name='Permisos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=30, unique=True)),
                ('descripcion', models.CharField(blank=True, max_length=255)),
                ('estado', models.BooleanField(default=True)),
                ('id_modulos', models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, to='aysu.modulos')),
                ('id_tipo_usuario', models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, to='aysu.tipousuario')),
            ],
            options={
                'db_table': 'permisos',
            },
        ),
    ]
