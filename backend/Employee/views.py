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

class EmployeesView(APIView):
    def post(self, request):
        serializer = EmployeesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response("Employee Created Successfully", status=201)
        return Response(serializer.errors, status=400)


