# Generated by Django 2.2.9 on 2020-02-13 21:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('flex', '0013_auto_20200213_2113'),
    ]

    operations = [
        migrations.AlterField(
            model_name='flexpage',
            name='photopanda',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
    ]