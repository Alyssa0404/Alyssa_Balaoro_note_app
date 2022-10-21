const read = require('./read')
const add = require('./add')
const present = require('./present')
const remove = require('./remove')
const update = require('./update') 

    const data = process.argv
    var note = {}

    if(data[2] == 'add') {
    note = { 
        id: data[3],
        title: data[4],
        body: data[5]
}
    var oldNote = read()
    add(note, oldNote)
}
    if(data[2] == 'read') {

    present(read()) 
}
    if (data[2] == 'delete') {
    let id = data [3]
    let oldNote = read()

    remove (id,oldNote)
    console.log(read())
}

    if (data[2] == 'update') { 
    let note = { 
        id : data [3],
        title: data[4],
        body: data[5]
}
    var oldNote = read()
    update(note,oldNote)

}