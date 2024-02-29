import { CollectionAfterChangeHook } from 'payload/types'

export const afterChangingStories: CollectionAfterChangeHook = async ({
    doc, // full document data
    req, // full express request
    previousDoc, // document data before updating the collection
    operation, // name of the operation ie. 'create', 'update'
}) => {
    // TODO: check if title, description etc is available.
    // if not, fetch them using the OG thingy
    // else just return the doc and ignore
    return doc
}