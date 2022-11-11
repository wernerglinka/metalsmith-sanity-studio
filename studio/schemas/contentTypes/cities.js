import {FiGlobe} from "react-icons/fi";

export default {
  name: 'cities',
  title: 'Cities',
  type: 'document',
  icon: FiGlobe,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    { 
      name: 'size',
      title: 'Size',
      type: 'number'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc) => `cities/${doc.name}`,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: 'image',
      title: 'Image',
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
      name: 'logo',
      title: 'City Logo',
      type: 'image',
    },
    {
      name: 'wappen',
      title: 'City Wappen',
      type: 'image',
    },
    {
      name: 'websiteLink',
      title: 'Website Link',
      type: 'link',
    },
    {
      name: 'wikiLink',
      title: 'Wiki Link',
      type: 'link',
    },
    
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
