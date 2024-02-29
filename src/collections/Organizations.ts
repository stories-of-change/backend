import { CollectionConfig } from 'payload/types'
import { isInMaintenance } from '../utils/isInMaintenance'

const Organizations: CollectionConfig = {
    slug: 'organizations',
    access: {
        create: isInMaintenance,
        read: () => true,
    },
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