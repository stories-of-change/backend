import { CollectionConfig } from 'payload/types'

const Initiatives: CollectionConfig = {
    slug: 'initiatives',
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

export default Initiatives