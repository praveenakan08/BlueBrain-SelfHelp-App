import { useState } from 'react';

interface NoteProps {
  id: string;
  title: string;
  content: string;
  date: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, updatedNote: { title: string; content: string }) => void;
}

export default function Note({ id, title, content, date, onDelete, onEdit }: NoteProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);
  const [editContent, setEditContent] = useState(content);

  const handleSave = () => {
    onEdit(id, { title: editTitle, content: editContent });
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-100 border border-gray-300 rounded-xl p-5 shadow-md hover:shadow-lg transition-all space-y-3">
      {isEditing ? (
        <>
          <input
            className="w-full p-2 rounded-md border border-gray-300 shadow-sm"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            className="w-full p-2 h-24 rounded-md border border-gray-300 shadow-sm"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <div className="flex justify-between mt-2">
            <button
              onClick={handleSave}
              className="bg-sky-300 text-white hover:shadow-inner shadow-lg px-4 py-1 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white hover:bg-gray-500 px-4 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-700 whitespace-pre-line">{content}</p>
          <div className="text-xs text-gray-500">🕒 {date}</div>
          <div className="flex justify-end space-x-4 mt-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-blue-700 font-medium hover:underline text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(id)}
              className="text-red-600 font-medium hover:underline text-sm"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
