from django.urls import path
from .views import EmployeesView

urlpatterns = [
    path("Employee/", EmployeesView.as_view()),
    path("Employee/<int:pk>/", EmployeesView.as_view())
]
