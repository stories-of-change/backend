import { CollectionConfig } from 'payload/types'
import { isInMaintenance } from '../utils/isInMaintenance'

const Districts: CollectionConfig = {
    slug: 'districts',
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
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true
        }
    ],
}

export default Districts