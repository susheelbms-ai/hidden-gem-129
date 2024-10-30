# views.py
from django.shortcuts import render
from django.core.mail import send_mail
from django.conf import settings
from django.http import HttpResponse , HttpResponseRedirect
from django.urls import reverse


def contact_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        # Construct the email
        subject = f"New Contact Form Submission from {name}"
        body = f"Name: {name}\nEmail: {email}\nMessage:\n{message}"
        from_email = email  # Use the user's email
        to_email = [settings.EMAIL_HOST_USER]  # Your email

        # Send the email
        send_mail(subject, body, from_email, to_email)

        # Redirect or render a success message
        return HttpResponseRedirect(reverse('success'))

    return render(request, 'contact/index.html')  # Render the form again if not POST






def index_view(request):
    return render(request, 'contact/index.html')


def success(request):
    return render(request , 'contact/success.html')
