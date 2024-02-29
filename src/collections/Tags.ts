import { CollectionConfig } from 'payload/types'
import { isInMaintenance } from '../utils/isInMaintenance'

const Tags: CollectionConfig = {
    slug: 'tags',
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
        }
    ],
}

export default Tags