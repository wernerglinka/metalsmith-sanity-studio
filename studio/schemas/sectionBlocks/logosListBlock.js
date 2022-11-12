export default {
  name: 'logosListBlock',
  title: 'Logos List Block',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subTitle',
      title: 'Sub Title',
      type: 'string'
    },
    {
      title: 'Logos',
      name: 'logos',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'cities' }
          ]
        }
      ]
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'cta'
    }
  ],
}