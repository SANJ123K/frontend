import React, { useState } from 'react';
import axios from 'axios';

function Note() {
  const [note, setNote] = useState('');

  const saveNote = async () => {
    try {
      await axios.post('http://localhost:5000/api/notes', { note });
      alert('Note saved!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} />
      <button onClick={saveNote}>Save Note</button>
    </div>
  );
}

export default Note;
