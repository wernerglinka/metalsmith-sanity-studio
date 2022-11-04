import {FiFileText} from "react-icons/fi";

export default {
  name: 'blog',
  title: 'Blog Posts',
  type: 'document',
  icon: FiFileText,
  fieldsets: [
    { 
      name: 'metadata', 
      title: 'Page Meta Data',
      options: {
        collapsible: true,
        collapsed: true
      }
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      fieldset: 'metadata',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Page Description',
      fieldset: 'metadata',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Page Image',
      description: 'This image will be used when sharing the page on social media',
      fieldset: 'metadata',
    },
    {
      name: 'canonicalUrl',
      type: 'url',
      title: 'Canonical URL',
      description: 'The canonical URL of the page',
      fieldset: 'metadata',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      title: 'Authors List',
      name: 'authorsList',
      type: 'array',
      of: [
        { 
          type: 'reference', 
          to: {type: 'authors'}
        },
      ],
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      fields: [
        {
          title: 'Alternative Text',
          name: 'alt',
          type: 'string'
        },
        {
          title: 'Caption',
          name: 'caption',
          type: 'string'
        },
        {
          name: 'credits',
          type: 'string',
          title: 'Credits',
        }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'categories',
      type: 'string',
      title: 'Post Categories',
      options: {
        list: [
          { title: "Apple", value: "apple" },
          { title: "Orange", value: "orange" },
          { title: "Cherry", value: "cherry" },
        ],
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'section' },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      author0: `authorsList.0.name`,
      author1: `authorsList.1.name`,
      media: 'mainImage'
    },
    prepare(selection) {
      const {author0, author1, author2} = selection
      return Object.assign({}, selection, {
        subtitle: author0 && `by ${author0} ${author1 ? `,et al.` : ''}`
      })
    }
  }
}
