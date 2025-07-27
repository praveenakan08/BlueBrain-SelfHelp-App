import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-bbPink to-bbSky flex flex-col items-center px-6 py-12 relative">
      {/* Top right menu container */}
      <div className="w-full max-w-3xl flex justify-end gap-3 mb-6">
        <Link
          to="/profile"
          className="bg-sky-300 text-white px-3 py-1 rounded hover:bg-sky-400 shadow-md text-sm"
        >
          View Profile
        </Link>
        <button
          onClick={() => {
            // logout logic here
            console.log("Logging out...");
          }}
          className="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-500 shadow-md text-sm"
        >
          Logout
        </button>
      </div>

      {/* Main dashboard card */}
      <div className="w-full max-w-3xl bg-gray-300 rounded-xl p-8 shadow-lg space-y-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 select-none">
          Welcome to BlueBrain 💙
        </h1>
        <p className="text-center text-gray-700 text-lg">
          A self-help space for your mental well-being.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          <Card
            title="📝 My Journal"
            link="/journal"
            description="Write, reflect, and track your thoughts."
          />
          <Card
            title="😊 Mood Tracker"
            link="/mood-tracker"
            description="Track how you feel day-to-day."
          />
          <Card
            title="📺 Media Hub"
            link="/media"
            description="Helpful content based on how you feel."
          />
          <Card
            title="💬 Chat Bot"
            link="/chat"
            description="Vent to a mental-health-focused companion."
          />
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link to={link}>
      <div className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg shadow-md hover:shadow-lg p-5 cursor-pointer border border-gray-300">
        <h2 className="text-xl font-semibold text-indigo-700">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
