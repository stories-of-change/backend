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
        }
        // Email added by default
        // Add more fields as needed
    ],
}

export default Districts