# Generated by Django 4.1.2 on 2022-12-26 23:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pizzaria', '0007_pizza_borda_alter_sabores_nome'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pizza',
            old_name='borda',
            new_name='massa',
        ),
    ]
