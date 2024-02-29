
const tags = new Set([]);

const district_data = require('./data/dist.json')
const district_keys = (Object.keys(district_data));

district_keys.forEach((k) => {
    const district = district_data[k]
    const dist_tags = district.tags
    dist_tags.forEach((t) => {
        if (t != '') {
            tags.add(t)
        }
    })
})

// console.log(tags)

const stories_data = require('./data/new-stories.json')

stories_data.forEach((s) => {
    t = s.tags
    t.forEach((_t) => {
        if (_t != '') {
            tags.add(_t)
        }
    })
})

// console.log(tags)

const ngo_data = require('./data/ngo_list.json')

ngo_data.forEach((n) => {
    t = n.tags
    t.forEach((_t) => {
        if (_t != '') {
            tags.add(_t)
        }
    })
})

// console.log(tags)

// tags.forEach(async (t) => {
//     try {
//         const req = await fetch('http://localhost:3000/api/tags', {
//             method: "POST",
//             credentials: "include",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 name: t
//             }),
//         })
//         const data = await req.json()
//     } catch (err) {
//         console.log(err)
//     }
// })

console.log(JSON.stringify({ name: 'hello' }))


// TODO: turn off rate limiter and run this thing

const run = async () => {
    try {
        const req = await fetch('http://localhost:3000/api/tags', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: tags[0]
            }),
        })
        console.log('before parsing data')
        const data = await req.text()
        console.log(data)
        console.log('after parsing data')
    } catch (err) {
        console.log("ERROR!!!")
        console.log(err)
    }
}

run()
