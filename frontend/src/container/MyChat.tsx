import { useState } from "react";

type Role = "user" | "bot";

interface Message {
    role: Role;
    text: string;
}

const MyChat = (): JSX.Element => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { role: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);

        try {
            const res = await fetch("http://localhost:8080/api/v1/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ prompt: input }),
            });

            const data = await res.json();
            const parsedResponse = JSON.parse(data.response);

            const botMessage: Message = {
                role: "bot",
                text: parsedResponse.response ?? "Sorry, I didn't get that.",
            };

            setMessages((prev) => [...prev, botMessage]);
        } catch (err) {
            console.error(err);
            setMessages((prev) => [
                ...prev,
                { role: "bot", text: "Oops! Something went wrong." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-bbSky to-bbPink flex flex-col items-center px-4 py-8">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
                <div className="bg-indigo-600 text-white px-6 py-4 text-lg font-semibold flex justify-between items-center">
                    <span>BlueBrain Chat Bot 💬</span>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[70vh]">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`max-w-[75%] p-3 rounded-xl ${
                                msg.role === "user"
                                    ? "bg-blue-100 self-end ml-auto"
                                    : "bg-gray-200 self-start"
                            }`}
                        >
                            <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                        </div>
                    ))}
                    {loading && (
                        <div className="bg-gray-200 rounded-xl p-3 text-sm text-gray-500 w-fit">
                            Typing...
                        </div>
                    )}
                </div>

                <div className="flex gap-2 border-t p-4">
                    <input
                        type="text"
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
                        placeholder="Type your thoughts..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 disabled:opacity-50"
                        disabled={loading}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyChat;
