from django.shortcuts import render, redirect
import os
from django.http import Http404, FileResponse
from django.conf import settings
from django.urls import path
from .models import AboutSection, Project

# core/views.py
# This file contains the views for the core application of the Django project.
def base(request):
    return render(request, 'core/base.html')

def home(request):
    return render(request, 'core/home.html')

def about(request):
    about_data = AboutSection.objects.last()
    return render(request, 'core/about.html', {'about': about_data})

def projects(request):
    project_list = Project.objects.all().order_by('-created_at')
    return render(request, 'core/projects.html', {'projects': project_list})

def cv(request):
    return render(request, 'core/cv.html')

def base(request):
    return render(request, 'core/base.html')