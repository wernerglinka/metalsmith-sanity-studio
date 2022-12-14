export default {
  name: 'imageSliderBlock',
  title: 'Image Slider Block',
  type: 'object',
  fields: [
    {
      name: 'slides',
      type: 'array',
      title: 'Slides',
      description: 'Add, edit, and reorder image slides',
      of: [
        { type: 'imageSlide' },
      ]
    },
  ],
}