# Generated by Django 4.1.2 on 2022-10-16 21:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizzaria', '0002_pedido_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pizza',
            name='sabores',
            field=models.ManyToManyField(related_name='sabores', to='pizzaria.sabores'),
        ),
    ]