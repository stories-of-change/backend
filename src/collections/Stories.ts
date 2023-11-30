import { CollectionConfig } from 'payload/types'
import Tags from './Tags'

const Stories: CollectionConfig = {
    slug: 'stories',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text'
        },
        {
            name: 'description',
            type: 'text'
        },
        {
            name: 'location',
            type: 'text'
        },
        {
            name: 'basedIn',
            type: 'text'
        },
        {
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true
        }
    ],
}

export default Stories
