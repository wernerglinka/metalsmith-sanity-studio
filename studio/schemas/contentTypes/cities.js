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
      name: 'description',
      title: 'Description',
      type: 'textBlock'
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
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
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
