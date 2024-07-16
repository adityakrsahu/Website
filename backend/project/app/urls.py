from django.urls import path
from .views import *

urlpatterns = [
    path('contact/', contact.as_view(), name="contact"),

]