//COMMON COMMANDS/NOTES - 
// node app.js : runs that file 
// npm init: creates package.json
// node has experimental support for import statements currently. 
// But u will need to add type: "module" in package.json
// npm install : to reinstall modules mentioned in package.json
// to install any module globally : add -g (i.e npm install nodemon -g)
// node inspect app.js - will attach a debugger and then go to chrome://inspect which will take u to developer tools 

const yargs = require('yargs');
const notes = require('./notes');

//CREATES A NEW COMMAND
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: String
        },
        body: {
            describe: 'Actual body of note',
            demandOption: false,
            type: String
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: String
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists the notes',
    handler: () => {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Title of note',
            demandOption: true,
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title);
    }
})

yargs.parse();









// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'This file was created by Node.js!')
// fs.appendFileSync('notes.txt', ' I am happyyyyy!!')

// const getNotesFunc = require('./notes.js');
// console.log(getNotesFunc());

// const validator = require('validator')
// console.log(validator.isEmail('dadda@gmail.com'))

// const chalk = require('chalk')
// console.log(chalk.green("HELLOO MISS!!"))

//const command = process.argv[2];