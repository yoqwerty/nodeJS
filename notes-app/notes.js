const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicate = notes.find(note => note.title === title);
    
    if(!duplicate){
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(notes);
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}
const loadNotes = () => {
    try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}
const removeNote = (title) => {
    const notes = loadNotes();
    const notesTokeep = notes.filter(note => note.title !== title);
    
    if (notesTokeep.length < notes.length){
        console.log(chalk.green.inverse("Note removed"));
        saveNotes(notesTokeep);
    }
    else
        console.log(chalk.red.inverse("No note found"));
}

const listNotes = () => {
    console.log(chalk.yellow.inverse("Your notes"));
    const notes = loadNotes();
    if (notes.length) {
        notes.forEach(element => {
            console.log(element.title);
        });
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    debugger
    const selectedNote = notes.find(note => note.title === title);
    if(selectedNote) {
        console.log("Title- ", selectedNote.title);
        console.log("Body- ", selectedNote.body);
    } else {
        console.log(chalk.red.inverse("No note found"));
    }
}
module.exports = {
    addNote,
    removeNote,
    listNotes,
    readNote
}