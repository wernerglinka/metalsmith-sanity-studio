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