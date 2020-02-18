from django.db import models
from home.models import *
from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.images.edit_handlers import ImageChooserPanel
from wagtail.core.fields import StreamField
from streams import blocks
from wagtail.images.blocks import ImageChooserBlock

class FlexPage(Page):


    template = 'flex/flex_page.html'

    subtitle = models.CharField(max_length=100, null=True, blank=True)
    info = models.TextField(max_length=1000, null=True, blank=True)
    photopanda = models.ForeignKey(
        "wagtailimages.Image",
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+',
    )
    content = StreamField(
        [
            # ("title_and_text", blocks.TitleAndTextBlock()),
            ('card_and_block', blocks.CardBlock()),
        ],
        null=True,
        blank=True,
    )

    content_panels = Page.content_panels + [
        FieldPanel("subtitle"),
        FieldPanel("info"),
        FieldPanel("photopanda"),
        StreamFieldPanel('content'),
    ]

    class Meta:  #noqa
        verbose_name = "Список Tоваров"
        verbose_name_plural = 'Tовары'

    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
    

        context['menuitems'] = self.get_children().filter(
            live=True, show_in_menus=True)

        return context