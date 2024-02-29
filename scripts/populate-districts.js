// fetch the values from districts and populate them
// const district_data = require('./data/dist.json')
// const district_keys = (Object.keys(district_data));

// district_keys.forEach((k) => {
//     const district = district_data[k]
//     const dist_tags = district.tags
//     dist_tags.forEach((t) => {

//     })
// })


const create_db_entry = async () => {
    try {
        const req = await fetch('http://localhost:3000/api/districts', {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "New crop",
                description: "Here is some content",
                tags: ["65e0dbbd5362e7b17285b03e", "65e0dbbd5362e7b17285b042"]
            }),
        })
        const data = await req.json()
    } catch (err) {
        console.log(err)
    }
}

create_db_entry();