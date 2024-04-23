# from rest_framework.views import APIView
# from .serializers import EmployeesSerializer
# from django.http.response import JsonResponse

# class EmployeesView(APIView):
    
#     def post(self , request):
#         data = request.data
#         serializer = EmployeesSerializer(data=data)

#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse("Employee Created Successfully" , safe = False)
#         return JsonResponse("Failed to add Employee" , safe = False)


from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import EmployeesSerializer
from .models import Employees
from django.http.response import Http404
from django.http.response import JsonResponse

class EmployeesView(APIView):
    
    def get_Employees(self,pk):
        try:
            employees = Employees.objects.get(empId=pk)
            return employees
        except:
            raise Response("Employee Does not Exist")
        

    def get(self, request, pk=None):
        if pk:
            data = self.get_Employees(pk)
            serializer = EmployeesSerializer(data)   
        else:
            data = Employees.objects.all()
            serializer = EmployeesSerializer(data, many=True)   
        return Response(serializer.data)   



    def post(self, request):
        serializer = EmployeesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Employee Created Successfully", status=201)
        return Response(serializer.errors, status=400)



    def put(self , request , pk=None):
        employees_to_update = Employees.objects.get(empId=pk)
        serializer = EmployeesSerializer(instance=employees_to_update, data=request.data, partial=True)   

        if serializer.is_valid():
            serializer.save()
            return Response("Employee updated Successfully", status=201)
        return Response(serializer.errors, status=400)
    


    def delete(self, request , pk=None):
        employee_to_delete = Employees.objects.get(empId=pk)
        employee_to_delete.delete()
        return Response("Employee deleted Successfully", status=201)

