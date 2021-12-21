import { MdDeleteForever } from "react-icons/md";
import "./Note.css";
const Note = ({ id, text, date, deleteThatNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => deleteThatNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
