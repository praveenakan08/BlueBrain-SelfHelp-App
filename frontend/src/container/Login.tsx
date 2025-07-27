import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Password from "../components/Password";
import { loginUser } from "../api/login";

const Login = (): JSX.Element => {
  const navigate = useNavigate();

  // Controlled inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    callLoginApi();

    if (email && password) {
      navigate("/dashboard");
    }
  };

  const callLoginApi = async () => {
   try {
    const data = await loginUser({ email, password });
    localStorage.setItem("token", data.token);
    navigate("/dashboard");
    } catch (err: any) {
      alert("Login failed: " + err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="grid md:grid-cols-3 bg-gradient-to-t from-bbPink to-bbSky h-screen">
      <div className="col-span-1"></div>

      <div className="flex justify-center items-center flex-col bg-gray-300 h-screen col-span-1 px-6">
        {/* logo image and title */}
        <div className="flex items-center flex-col m-6">
          <img
            className="drop-shadow-2xl m-2"
            src="/images/logo.png"
            alt="LOGO"
          />
          <div className="logo text-2xl font-bold select-none">blue brain</div>
        </div>

        {/* Login form */}
        <form onSubmit={handleLogin} className="w-full max-w-md flex flex-col items-center gap-6">
          {/* email address */}
          <input
            type="email"
            id="email"
            className="input shadow w-full"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          {/* password */}
          <Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* forgot password */}
          <div className="w-full flex justify-end">
            <Link to="/forgot-password" className="text-xs font-bold underline text-blue-700 hover:text-blue-900">
              Forgot Password?
            </Link>
          </div>

          {/* log-in button */}
          <button
            type="submit"
            className="btn bg-sky-300 text-white hover:shadow-inner shadow-lg w-full py-2 rounded"
            disabled={!email || !password}
          >
            Log in
          </button>

          {/* navigate to sign up page */}
          <div className="text-xs font-bold mt-2">
            First Time User?{" "}
            <Link to="/signup" className="underline text-blue-700 hover:text-blue-900">
              Sign Up Here
            </Link>
          </div>
        </form>
      </div>

      <div className="col-span-1"></div>
    </div>
  );
};

export default Login;
