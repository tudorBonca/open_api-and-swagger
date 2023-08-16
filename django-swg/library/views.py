from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet

from library.models import Books, Authors
from library.serializers import BookSerializer, AuthorSerializer


class BookViewSet(ModelViewSet):
    queryset = Books.objects.all()
    serializer_class = BookSerializer


class AuthorViewSet(ModelViewSet):
    queryset = Authors.objects.all()
    serializer_class = AuthorSerializer
