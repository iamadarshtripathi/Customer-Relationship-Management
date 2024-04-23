from rest_framework import serializers
from .models import Employees

class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model =  Employees
        fields = ('empId' ,
            'first_name' ,
            'last_name' ,
            'gender' ,
            'contact_no' ,
            'email' ,
            'address' ,
            'position' ,
            'salary' ,
            'department' )