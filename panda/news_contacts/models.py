from django.db import models
from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel

from wagtail.images.blocks import ImageChooserBlock

class NewsContacts(Page):


    template = 'contacts/newscontakts.html'

    subtitle = models.CharField(max_length=100, null=True, blank=True)
    info = models.TextField(max_length=1000, null=True, blank=True)
    mail = models.CharField(max_length=100, null=True, blank=True)
    adress = models.CharField(max_length=100, null=True, blank=True)
    
    
    content_panels = Page.content_panels + [
        FieldPanel("subtitle"),
        FieldPanel("info"),
        FieldPanel("mail"),
        FieldPanel("adress"),
     
    ]

    class Meta:  #noqa
        verbose_name = "Контакты"
        verbose_name_plural = 'Контакты'
