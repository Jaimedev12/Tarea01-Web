const NotesList = ({ notes }) => {
    return (
        <ul style={{
            listStyle: "none",
            padding: "0px",
            margin: "10px 30px 30px 10px",
        }}>
            {notes.map((note) => (
                <li key={note.id}>{note.content}</li>
            ))}
        </ul>
    );
};

export default NotesList;
