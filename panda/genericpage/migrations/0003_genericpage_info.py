# Generated by Django 2.2.9 on 2020-01-11 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('genericpage', '0002_genericpage_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='genericpage',
            name='info',
            field=models.TextField(blank=True, max_length=1000, null=True),
        ),
    ]