from django.db import models
from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.core.fields import StreamField
from streams import blocks
from wagtail.images.blocks import ImageChooserBlock


class BasicPage(Page):

    template = 'basic/basic_page.html'

    subtitle = models.CharField(max_length=100, null=True, blank=True)
    info = models.TextField(max_length=1000, null=True, blank=True)
    info2 = models.TextField(max_length=1000, null=True, blank=True)
    info3 = models.TextField(max_length=1000, null=True, blank=True)
    
    
    content_panels = Page.content_panels + [
        FieldPanel("subtitle"),
        FieldPanel("info"),
        FieldPanel("info2"),
        FieldPanel("info3"),
     
    ]

    class Meta:  #noqa
        verbose_name = "Базовая страница"
        verbose_name_plural = 'Базовая страница'