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
      title: 'Desctiption',
      name: 'description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          lists: [{title: 'Bullet', value: 'bullet'}],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [{title: 'Strong', value: 'strong'}, {title: 'Emphasis', value: 'em'}],
            // Annotations can be any object structure – e.g. a link or a footnote.
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
      name: "listSource",
      title: "List Source",
      type: "string",
      options: {
        list: [
          { title: "Football Clubs", value: "footballClubs" },
          { title: "Cities", value: "cities" },
        ],
      },
    },
    {
      title: 'Logo Width',
      name: 'logoWidth',
      type: 'number',
      description: 'Width of the logo in pixels',
    },
    {
      name: "scope",
      title: "Scope",
      type: "string",
      options: {
        list: [
          { title: "All", value: "all" },
          { title: "Selections", value: "selections" },
        ],
      },
    },
    {
      title: 'City Logos',
      name: 'logosCity',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'cities' }
          ]
        }
      ],
      hidden: ({ parent }) => parent?.listSource !== 'cities'
    },
    {
      title: 'Football Club Logos',
      name: 'logosFootballClub',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'footballClubs' }
          ]
        }
      ],
      hidden: ({ parent }) => parent?.listSource !== 'footballClubs'
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'cta'
    }
  ],
}