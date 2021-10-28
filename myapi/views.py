from django.shortcuts import render
from django.views import View
from rest_framework import viewsets
from .models import Author, Card
from .serializers import AuthorSerializer, CardSerializer


class HomeView(View):
    def get(self, request):
        return render(request, 'index.html')


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.order_by('?').all()
    serializer_class = CardSerializer
