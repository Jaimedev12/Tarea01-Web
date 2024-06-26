import { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";
import NotesList from "./NotesList";
import AddNotesForm from "./AddNotesForm";

const Notes = () => {
    const [newNote, setNewNote] = useState("");
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        console.log("effect");
        axios.get(baseUrl).then((response) => {
            setNotes(response.data);
        });
    }, []);

    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value);
    };

    const addNote = (event) => {
        event.preventDefault();
        const noteObject = {
            content: newNote,
            important: Math.random() < 0.5,
            date: new Date().toISOString(), // Formato ISO para compatibilidad con SQL
        };

        axios.post(baseUrl, noteObject).then((response) => {
            console.log(response);
            setNotes(notes.concat(response.data));
            setNewNote("");
        });
    };

    return (
        <div
            style={{
                padding: "0px 30px 30px 30px",
                border: "3px solid black",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // Sí, no lo pude centrar a la pantalla, una disculpa
            }}
        >
            <h1>Notes</h1>
            <NotesList notes={notes}/>
            <AddNotesForm
                addNote={addNote}
                newNote={newNote}
                handleNoteChange={handleNoteChange}
            />
        </div>
    );
};

export default Notes;
