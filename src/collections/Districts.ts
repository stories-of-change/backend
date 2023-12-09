import { CollectionConfig } from 'payload/types'

const Districts: CollectionConfig = {
    slug: 'districts',
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
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true
        }
    ],
}

export default Districts