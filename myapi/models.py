from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=50, blank=True, null=True, verbose_name='name')
    image = models.ImageField(blank=True, null=True, verbose_name='image')

    def __str__(self):
        return self.name


class Card(models.Model):
    title = models.CharField(max_length=120, blank=True, null=True, verbose_name='title')
    body = models.TextField(blank=True, null=True, verbose_name='body')
    image = models.ImageField(blank=True, null=True, verbose_name='image')
    author = models.ForeignKey(Author, on_delete=models.CASCADE, blank=True, null=True, verbose_name='author')
    date = models.DateTimeField(auto_now_add=True, blank=True, null=True, verbose_name='date')

    def __str__(self):
        return self.title[:20]
