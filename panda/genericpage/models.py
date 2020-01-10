from django.db import models

from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.core.models import Page
from django.conf import settings
from wagtail.core.fields import StreamField
from streams import blocks
# Create your models here.

class GenericPage(Page):

    template = "generic/generic_page.html"

    subtitle = models.CharField(max_length=100, null=True, blank=True)

    content = StreamField(
         [
            # ("title_and_text", blocks.TitleAndTextBlock()),
            ('full_richtext', blocks.RichTextBlock()),
        ],
        null=True,
        blank=True,
    )

    content_panels = Page.content_panels + [
        FieldPanel('subtitle'),
        StreamFieldPanel('content'),
    ]

    class Meta: #noqa
        verbose_name = 'Generic Page'
        verbose_name_plural = "Generic Pages"

