from django.db import models


# Create your models here.

class Books(models.Model):
    name = models.CharField(max_length=255)
    genre = models.CharField(max_length=255)


class Authors(models.Model):
    name = models.CharField(max_length=255)
    books = models.ForeignKey(Books, on_delete=models.CASCADE, related_name="the_books")


