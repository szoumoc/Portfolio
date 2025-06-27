from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import AboutSection, Project

@api_view(['GET'])
def api_about(request):
    about = AboutSection.objects.all()
    about_sections = AboutSection.objects.all()
    data = []
    try:
        for about in about_sections:
            data.append({
                'heading': about.heading,
                'body': about.body,
                'image': request.build_absolute_uri(about.image.url) if about.image else None,
                # 'updated_at': about.updated_at.isoformat(),
            })

        return Response(data)
    except AboutSection.DoesNotExist:
        return Response({"error": "No about section found"}, status=404)

@api_view(['GET'])
def api_projects(request):
    projects = Project.objects.all().order_by('-created_at')
    data = [
        {
            "title": project.title,
            "description": project.description,
            "tech_stack": project.tech_stack,
            "github_link": project.github_link or "",
            "live_demo": project.live_demo or "",
            "created_at": project.created_at.isoformat(),
            "image": request.build_absolute_uri(project.image.url) if project.image else None,
            "image_alt": project.title  # Optional: fallback alt text
        }
        for project in projects
    ]
    return Response(data)
