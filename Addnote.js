import React, { useState } from "react";
import "./Note.css";

const Addnote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const charLimit = 50;
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        placeholder="Type to add a note"
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small> {charLimit - noteText.length} remaining</small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default Addnote;
