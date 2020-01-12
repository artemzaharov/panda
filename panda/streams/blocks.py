from wagtail.images.blocks import ImageChooserBlock
from wagtail.core import blocks

class CardBlock(blocks.StructBlock):

    name = blocks.CharBlock()
    weight = blocks.CharBlock()
    photo = ImageChooserBlock(required=False)
    price = blocks.RichTextBlock()
    class Meta:
          template = 'streams/title_and_text_block.html'
          icon = 'edit'
          label = 'Продукты'


class RichTextBlock(blocks.StructBlock):

    
    photo = ImageChooserBlock(required=False)
    
    class Meta: #noqa
        template = 'streams/richtext_block.html'
        icon = 'edit'
        label = 'Full Rich Text'