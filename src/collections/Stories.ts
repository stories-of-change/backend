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
            type: 'relationship',
            relationTo: 'districts',
            hasMany: false
        },
        {
            name: 'url',
            type: 'text'
        },
        {
            name: 'affiliatedOrganization',
            type: 'relationship',
            relationTo: 'organizations',
            hasMany: true
        },
        {
            name: 'affiliatedInitiatives',
            type: 'relationship',
            relationTo: 'initiatives',
            hasMany: true
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
