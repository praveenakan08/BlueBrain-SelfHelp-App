import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="text-indigo-600 hover:text-indigo-800 font-medium mt-4 inline-flex items-center"
    >
      ← Back to Dashboard
    </button>
  );
}
