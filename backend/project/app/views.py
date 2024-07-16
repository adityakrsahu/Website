from django.shortcuts import render
from .models import *
from rest_framework import generics
from .serializers import *

# Create your views here.

class contact(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = contactSerializer
