import { CollectionConfig } from 'payload/types'

const Tags: CollectionConfig = {
    slug: 'tags',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text'
        }
        // Email added by default
        // Add more fields as needed
    ],
}

export default Tags