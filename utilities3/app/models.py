from __future__ import unicode_literals

from django.db import models


class EntryQuerySet(models.QuerySet):
    def published(self):
        return self.filter(publish=True)


class EntryManager(models.Manager):
    def create_entry(self, name):
        entry = self.create(name=name)
        return entry


class Entry(models.Model):
    name = models.CharField(max_length=100, null=True)
    publish = models.BooleanField(default=True)
    objects = EntryQuerySet.as_manager()
    creater = EntryManager()

    class Meta:
        verbose_name = "Blog Entry"
        verbose_name_plural = "Blog Entries"
