export default {
  name: 'navigation.section',
  type: 'object',
  title: 'Section',
  fields: [
    {
      type: 'reference',
      name: 'target',
      title: 'Target Page',
      to: [{ type: 'page' }],
      // _weak: true // enable if you don't want reference integrity checks
    },
    {
      title: "Icon",
      name: "icon",
      type: "iconPicker",
      options: {
          providers: ["fi"]
      }
    },
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'string',
      name: 'linkClass',
      title: 'Link Class',
    },
    {
      type: 'boolean',
      name: 'hasChildren',
      title: 'Has Children',
    },
    {
      type: 'array',
      name: 'links',
      title: 'Links',
      of: [{ type: 'navigation.link' }],
      hidden: ({ parent }) => !parent?.hasChildren,
    },
  ],
}