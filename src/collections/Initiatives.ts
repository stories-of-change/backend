import { CollectionConfig } from 'payload/types'

const Initiatives: CollectionConfig = {
    slug: 'initiatives',
    access: {
        read: ({ req: { user } }) => { return true },
    },
    admin: {
        useAsTitle: 'name',
    },
    upload: true,
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
            name: 'website',
            type: 'text'
        },
        {
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: "initiatives"
        }
    ],
}

export default Initiatives