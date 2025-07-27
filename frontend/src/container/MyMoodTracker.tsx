import { useState } from "react";
import EmotionButton from "../components/EmotionButton";
import TodayMoodTrackerModal from "../components/TodayMoodTrackerModal";

const MyMoodTracker = (): JSX.Element => {
  const [emotion, setEmotion] = useState('');
  const [open, setOpen] = useState(false);

  const handleEmotion = (inputEmotion: string) => {
    setEmotion(inputEmotion);
  };

  const saveEmotionWithTime = () => {
    const timeInput = document.getElementById('timeInput') as HTMLInputElement;
    const selectedTime = timeInput?.value || '';

    // TODO - add API call to save the selected data into db
    console.log("saved emotion to db " + emotion + " " + selectedTime);

    alert("Today's mood successfully saved!");
    setOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-t from-bbPink to-bbSky flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-gray-300 rounded-xl p-8 shadow-lg space-y-8">
        <h1 className="text-2xl font-bold text-indigo-700 text-center select-none">
          How are you feeling today?
        </h1>

        {/* Emoji buttons */}
        <ul className="flex flex-wrap justify-center gap-4">
          {[
            { emotion: "happy", emojiUrl: "/images/happy.png" },
            { emotion: "sad", emojiUrl: "/images/sad.png" },
            { emotion: "excited", emojiUrl: "/images/excited.png" },
            { emotion: "lonely", emojiUrl: "/images/lonely.png" },
            { emotion: "stressed", emojiUrl: "/images/stressed.png" },
            { emotion: "content", emojiUrl: "/images/content.png" },
          ].map(({ emotion: emo, emojiUrl }) => (
            <li key={emo} className={emotion === emo ? "selected" : ""}>
              <EmotionButton emotion={emo} handleEmotion={handleEmotion} emojiUrl={emojiUrl} />
            </li>
          ))}
        </ul>

        {/* Time picker */}
        <div>
          <input
            type="time"
            id="timeInput"
            className="block w-full p-3 rounded-md border border-gray-500 bg-gray-300 font-semibold text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Save button */}
        <button
          className="w-full bg-sky-400 hover:bg-sky-500 text-white font-bold py-3 rounded shadow transition-shadow"
          onClick={saveEmotionWithTime}
        >
          SAVE
        </button>

        {/* Modal */}
        <TodayMoodTrackerModal open={open} onClose={() => setOpen(false)} />
      </div>
    </div>
  );
};

export default MyMoodTracker;
