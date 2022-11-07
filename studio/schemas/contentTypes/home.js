import {FiHome} from "react-icons/fi";

export default {
  name: 'home',
  title: 'Home',
  icon: FiHome,
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fieldsets: [
    { 
      name: 'metadata', 
      title: 'Page Meta Data',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true // Defines if the fieldset should be collapsed by default or not
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
      title: 'Body Classes',
      name: 'bodyClasses',
      type: 'string',
      description: 'Add classes to the body tag - add only if you know what you are doing',
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
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  }
}
