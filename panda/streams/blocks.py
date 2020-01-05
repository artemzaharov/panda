from wagtail.images.blocks import ImageChooserBlock
from wagtail.core import blocks



# class TitleAndTextBlock(blocks.StructBlock):
#     '''Информация о продукте'''
#     name = blocks.CharBlock(required=True, help_text='Product Name Title')
#     info = blocks.TextBlock(required=True, help_text='Information About Title')
    

    
#     class Meta:
#         template = 'streams/title_and_text_block.html'
#         icon = 'edit'
#         label = 'Title & Text'

class CardBlock(blocks.StructBlock):
    # title = blocks.CharBlock(required=False, help_text="Enter your title.")
 
    # cards = blocks.ListBlock(
    #     blocks.StructBlock(
    #         [
    #             ('image', ImageChooserBlock(required=False)),
    #             ('title', blocks.CharBlock(required=False, max_length=100)),
    #             ('subtitle', blocks.TextBlock(required=False, max_length=100)),
    #             ('text', blocks.TextBlock(required=False, max_length=200)),
    #             ('button_page', blocks.PageChooserBlock(required=False)),
    #             ('button_url', blocks.URLBlock(required=False,
    #                                            help_text='If button above is selected, it will be used first.')),
    #         ]
    #     )
    # )
    name = blocks.CharBlock()
    weight = blocks.CharBlock()
    photo = ImageChooserBlock(required=False)
    price = blocks.RichTextBlock()
    class Meta:
          template = 'streams/title_and_text_block.html'
          icon = 'edit'
          label = 'Продукты'