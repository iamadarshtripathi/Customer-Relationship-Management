from rest_framework.views import APIView
from .serializers import EmployeesSerializer
from django.http.response import JsonResponse

class EmployeesView(APIView):
    
    def post(self , request):
        data = request.data
        serializer = EmployeesSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Employee Created Successfully" , safe = False)
        return JsonResponse("Failed to add Employee" , safe = False)

