import { Routes, Route } from "react-router-dom";
import Login from "./container/Login";
import Home from "./container/Home";
import Dashboard from "./container/Dashboard";
import Registration from "./container/Registration";
import MyJournal from "./container/MyJournal";
import MyMoodTracker from "./container/MyMoodTracker";
import MyMedia from "./container/MyMedia";
import MyChat from "./container/MyChat";

export default function App() {
  return (
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/journal" element={<MyJournal />} />
        <Route path="/mood-tracker" element={<MyMoodTracker />} />
        <Route path="/media" element={<MyMedia />} />
        <Route path="/chat" element={<MyChat />} />
        <Route path="/*" element={<Registration />} />
      </Routes>
  );
}
