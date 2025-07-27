import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Password from "../components/Password";
import { registerUser } from "../api/register";

const Registration = (): JSX.Element => {
  const navigate = useNavigate();

  // Controlled form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisible = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !age || !gender || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    if (Number(age) <= 0 || isNaN(Number(age))) {
      alert("Please enter a valid age.");
      return;
    }

    handleRegister();
  };

  const handleRegister = async () => {
    try {
      const data = await registerUser({ firstName, lastName, email, password, age, gender });
      localStorage.setItem("token", data.accessToken);
      navigate("/dashboard");
    } catch (err: any) {
      alert("Registration failed: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="bg-gradient-to-t from-bbPink to-bbSky min-h-screen flex justify-center items-center p-6">
      <div className="bg-gray-300 w-full max-w-md p-8 rounded-lg shadow-lg overflow-hidden">
        {/* logo image and title */}
        <div className="flex flex-col items-center mb-8">
          <img
            className="w-32 h-auto mb-4 drop-shadow-2xl"
            src="/images/logo.png"
            alt="LOGO"
          />
          <div className="text-xl font-bold">blue brain</div>
        </div>

        {/* Form */}
        <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
          <input
            id="firstName"
            className="input shadow"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            id="lastName"
            className="input shadow"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <div className="flex gap-4">
            <input
              id="age"
              type="number"
              className="input shadow w-1/2"
              placeholder="Age"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
              min={1}
            />
            <input
              id="gender"
              className="input shadow w-1/2"
              placeholder="Gender"
              required
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          <input
            type="email"
            id="email"
            className="input shadow"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex flex-col gap-4">
              <Password
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
              <Password
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
          </div>

          <button
            type="submit"
            className="btn bg-sky-300 text-white hover:bg-sky-400 shadow-lg py-2 rounded mt-4"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
