import { CollectionConfig } from 'payload/types'
import { isInMaintenance } from '../utils/isInMaintenance'
import Tags from './Tags'
import { afterChangingStories } from '../hooks/afterChangingStories'

const Stories: CollectionConfig = {
    slug: 'stories',
    access: {
        create: isInMaintenance,
        read: () => true,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'title',
            type: 'text'
        },
        {
            name: 'description',
            type: 'text'
        },
        {
            name: 'location',
            type: 'relationship',
            relationTo: 'districts',
            hasMany: false
        },
        {
            name: 'url',
            type: 'text'
        },
        {
            name: 'affiliatedOrganization',
            type: 'relationship',
            relationTo: 'organizations',
            hasMany: true
        },
        {
            name: 'affiliatedInitiatives',
            type: 'relationship',
            relationTo: 'initiatives',
            hasMany: true
        },
        { // this needs to change into a sort of list kinda
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true
        }
    ],
    hooks: {
        afterChange: [afterChangingStories],
    }
}

export default Stories
