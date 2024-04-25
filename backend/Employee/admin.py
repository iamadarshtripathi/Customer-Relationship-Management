from django.contrib import admin
from .models import Employees

model_list = [Employees]

admin.site.register(model_list)
# Register your models here.

