import TodayMoodAnalyticsChart from "./TodayMoodAnalyticsChart";

interface TodayMoodTrackModalType {
  open: boolean;
  onClose: () => void;
}

const TodayMoodTrackerModal = ({
  open,
  onClose,
}: TodayMoodTrackModalType): JSX.Element => {
  return (
    <div
      onClick={onClose}
      className={`flex fixed inset-0 justify-center items-center transition-colors ${
        open ? "visible bg-black/20" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all max-w-md w-full mx-4
                    ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        {/* title and close button */}
        <div className="flex justify-between items-center mb-4">
          <p className="font-bold text-lg">Today's Mood Analytics</p>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-gray-400 hover:bg-gray-50 hover:text-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* today analytics graph */}
        <TodayMoodAnalyticsChart />
      </div>
    </div>
  );
};

export default TodayMoodTrackerModal;
