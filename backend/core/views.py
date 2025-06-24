from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import AboutSection, Project

@api_view(['GET'])
def api_about(request):
    about = AboutSection.objects.last()
    if about:
        return Response({
            'heading': about.heading,
            'body': about.body,
            'updated_at': about.updated_at,
        })
    return Response({"error": "No about section found"}, status=404)

@api_view(['GET'])
def api_projects(request):
    projects = Project.objects.all().order_by('-created_at')
    data = [
        {
            "title": project.title,
            "description": project.description,
            "tech_stack": project.tech_stack,
            "github_link": project.github_link,
            "live_demo": project.live_demo,
            "created_at": project.created_at,
        }
        for project in projects
    ]
    return Response(data)
