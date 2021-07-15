require('./db/connection');
const {
    connection
} = require('mongoose');
const yargs = require('yargs')
const command = process.argv[2];
const titleInput = yargs.argv.title;
const actorInput = yargs.argv.actor;
const {
    add,
    list,
    update,
    remove
} = require('./utils')
//add, list, modify, delete function
const app = () => {
   if (command === "add") {
        if (actorInput) {
            add({
                title: titleInput,
                actor: actorInput
            })
        } else {
            add({
                title: titleInput
            })
        }
    } else if (command === "list") {
        list()
    } else if (command === "update") {
        update(titleInput)
    } else if (command === "remove") {
        remove(titleInput)
    }
    
}

app()