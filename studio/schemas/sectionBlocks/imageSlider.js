export default {
  name: 'imageSlider',
  title: 'Image Slider',
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