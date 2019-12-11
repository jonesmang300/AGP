# Generated by Django 2.2.7 on 2019-12-10 15:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DrawType',
            fields=[
                ('pk_draw_typeid', models.AutoField(primary_key=True, serialize=False)),
                ('draw_type', models.CharField(max_length=45)),
            ],
            options={
                'db_table': 'draw_type',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Field',
            fields=[
                ('pk_fieldid', models.AutoField(primary_key=True, serialize=False)),
                ('field_type', models.CharField(max_length=3)),
            ],
            options={
                'db_table': 'field',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Information',
            fields=[
                ('pk_informationid', models.AutoField(primary_key=True, serialize=False)),
                ('info', models.TextField()),
            ],
            options={
                'db_table': 'information',
                'managed': False,
            },
        ),
        migrations.DeleteModel(
            name='Activity',
        ),
        migrations.DeleteModel(
            name='EventDay',
        ),
        migrations.AlterModelTable(
            name='handcap',
            table='handicap',
        ),
    ]
