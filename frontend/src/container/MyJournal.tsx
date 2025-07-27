import { useEffect, useState } from "react";
import AddNote from "../components/AddNote";
import Note from "../components/Note";
import BackButton from "../components/BackButton";

interface NoteType {
  id: string;
  title: string;
  content: string;
  date: string;
}

export default function MyJournal() {
  const [notes, setNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("notes");
    if (saved) {
      setNotes(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note: { title: string; content: string }) => {
    const newNote: NoteType = {
      id: crypto.randomUUID(),
      title: note.title,
      content: note.content,
      date: new Date().toLocaleString(),
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (id: string) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  const editNote = (id: string, updatedNote: { title: string; content: string }) => {
    const updated = notes.map((note) =>
      note.id === id ? { ...note, ...updatedNote } : note
    );
    setNotes(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-bbPink to-bbSky flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl bg-gray-300 rounded-xl p-8 shadow-lg space-y-8">
        <BackButton />
        <h1 className="text-3xl font-bold text-center text-indigo-700 select-none">
          📝 My Journal
        </h1>
        <p className="text-center text-gray-700 text-lg">
          Write, reflect, and track your thoughts.
        </p>

        {/* Add Note Form */}
        <AddNote onAdd={addNote} />

        {/* Notes List */}
        <div className="grid gap-4 sm:grid-cols-2 mt-4">
          {notes.length === 0 ? (
            <p className="text-center text-gray-500 col-span-full">
              No notes yet. Start by writing something 💬
            </p>
          ) : (
            notes.map((note) => (
              <Note key={note.id} {...note} onDelete={deleteNote} onEdit={editNote} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
