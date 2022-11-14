export default {
  title: 'Call to action',
  name: 'cta',
  type: 'object',
  
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Is External Link',
      name: 'isExternal',
      type: 'boolean'
    },
    {
      title: 'External link',
      name: 'externalLink',
      type: 'url',
      description: 'Example: https://www.sanity.io',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }),
      hidden: ({ parent }) => !parent.isExternal
    },
    {
      title: 'Internal link',
      name: 'internalLink',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true,
          relativeOnly: true,
          scheme: ['http', 'https']
        }),
      description: 'Example: /about',
      hidden: ({ parent }) => parent.isExternal
    },
    {
      title: 'Kind',
      name: 'kind',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['button', 'link']
      }
    },
    {
      name: "linkType",
      title: "Link Type",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Tertiary", value: "tertiary" },
        ],
      },
    }
  ],
  preview: {
    select: {
      title: 'title',
      landingPage: 'landingPageRoute.slug.current',
      route: 'route',
      link: 'link'
    },
    prepare ({title, landingPage, route, link}) {
      let subtitle = 'Not set'
      if (landingPage) {
        subtitle = `Route: /${landingPage}`
      }
      if (route) {
        subtitle = `Route: ${route}`
      }
      if (link) {
        subtitle = `External: ${link}`
      }
      return {
        title,
        subtitle
      }
    }
  }
}
