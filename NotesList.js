import Note from "./Note";
import AddNote from "./Addnote";
import "./Note.css";
const NotesList = ({ notes, handleAddNote, deleteThatNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          deleteThatNote={deleteThatNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
