import { CollectionConfig } from 'payload/types'

const Organizations: CollectionConfig = {
    slug: 'organizations',
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
            type: 'textarea'
        },
        {
            name: 'location',
            type: 'relationship',
            relationTo: 'districts',
            hasMany: false
        },
        {
            name: 'basedIn',
            type: 'text'
        },
        {
            name: 'website',
            type: 'text'
        },
        {
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true
        }
    ],
    upload: {
        staticURL: '/media',
        staticDir: 'media',
        mimeTypes: ['image/*'],
    },
}

export default Organizations