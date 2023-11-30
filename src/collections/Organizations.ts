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
        }
        // Email added by default
        // Add more fields as needed
    ],
}

export default Organizations
