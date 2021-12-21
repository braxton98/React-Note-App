import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is the first note",
      date: "20 / 12 / 2021",
    },
    {
      id: nanoid(),
      text: "this is the second note",
      date: "20 / 12 / 2021",
    },
    {
      id: nanoid(),
      text: "this is the third note",
      date: "20 / 12 / 2021",
    },
  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const [searchText, setSearchText] = useState("");
  return (
    <div className="container">
      <Search handleSearch={setSearchText}></Search>
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        deleteThatNote={deleteNote}
      ></NotesList>
    </div>
  );
};

export default App;
