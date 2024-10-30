from django.urls import path
from .views import contact_view  # Import your view
from . import views

urlpatterns = [
    path('contactme/', views.contact_view, name='contact'),  # URL pattern for the contact form
    path('' , views.index_view , name="index"),
    path('success/' , views.success , name="success")
]
