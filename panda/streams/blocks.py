from wagtail.images.blocks import ImageChooserBlock
from wagtail.core import blocks

class CardBlock(blocks.StructBlock):#каталог продукции

    name = blocks.CharBlock(required=False)
    weight = blocks.CharBlock(required=False)
    photo = ImageChooserBlock(required=False)
 
    urlpage = blocks.PageChooserBlock(required=False)
    price = blocks.RichTextBlock()
    class Meta:
          template = 'streams/title_and_text_block.html'
          icon = 'edit'
          label = 'Продукты'


class RichTextBlock(blocks.StructBlock):

    
    photo = ImageChooserBlock(required=False)
    information_right = blocks.RichTextBlock()
    information_left = blocks.RichTextBlock()
    
    class Meta: #noqa
        template = 'streams/richtext_block.html'
        icon = 'edit'
        label = 'Full Rich Text'