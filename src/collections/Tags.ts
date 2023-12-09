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
    ],
}

export default Tags