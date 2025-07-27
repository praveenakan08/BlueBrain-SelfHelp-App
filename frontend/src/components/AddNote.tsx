import { useState } from 'react';

interface AddNoteProps {
  onAdd: (note: { title: string; content: string }) => void;
}

export default function AddNote({ onAdd }: AddNoteProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Write a new note</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="What's on your mind?"
        className="w-full p-2 h-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        type="submit"
        className="btn bg-sky-300 text-white hover:shadow-inner shadow-lg w-full py-2 rounded"

      >
        Add Note
      </button>
    </form>
  );
}
