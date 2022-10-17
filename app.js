const read = require('./read')
const add = require('./add')
const write = require('./write')

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

    const present = require('./present')
    present(read()) }
if (data[2] == 'delete') {
    let id = data [3]
    let oldNote = read()

    let remove = require('./remove')
    remove (id,oldNote)
    console.log(read())
}
var note = {}
let update = require('./update') 
if (data[2] == 'update') { 
   let note = { 
        id : data [3],
        title: data[4],
        body: data[5]
    }
    
 
 var oldNote = read()

 update(note,oldNote)

}