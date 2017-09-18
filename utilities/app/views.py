from django.shortcuts import render
from django.views import generic
from . import models


class Index(generic.ListView):
    queryset = models.Entry.objects.published()
    template_name = "index.html"
    paginate_by = 2
