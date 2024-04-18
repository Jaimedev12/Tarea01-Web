import { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = "http://localhost:3001/api/notes";

const AddNotesForm = ({addNote, newNote, handleNoteChange}) => {
    return (
        <form onSubmit={addNote}>
            <input style={{
                height: "30px",
                margin: "0px 20px 0px 0px",
            }} value={newNote} onChange={handleNoteChange} />
            <button type="submit">SAVE</button>
        </form>
    );
}

export default AddNotesForm;