from django.shortcuts import render
from django.http import HttpResponse

def index(request):
   return HttpResponse("We did it!")
   # return render(request, "index.html")
