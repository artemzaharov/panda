from django.db import models

from wagtail.core.models import Page
from wagtail.core.fields import RichTextField
from wagtail.admin.edit_handlers import FieldPanel, PageChooserPanel
from wagtail.images.edit_handlers import ImageChooserPanel

class HomePage(Page):
    templates = 'home/home_page.html'
    max_count = 1
    
    company_info = RichTextField(features=['bold','italic'])
    some_image = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=False,
        on_delete=models.SET_NULL,
        related_name='+'

    )

    #some link to another page
    some_link_meat = models.ForeignKey(
        'wagtailcore.Page',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+"

    )
    some_link_cheese = models.ForeignKey(
        'wagtailcore.Page',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="+"
    )
    content_panels = Page.content_panels + [
        FieldPanel('company_info'),
        ImageChooserPanel('some_image'),
        PageChooserPanel('some_link_meat'),
        PageChooserPanel('some_link_cheese'),
    ]