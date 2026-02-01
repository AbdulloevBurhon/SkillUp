function Login() {
  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div
        className="
          w-full max-w-sm
          p-6
          rounded-xl
          shadow-lg
          bg-white
          dark:bg-gray-800
        "
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded-lg"
        />

        <button
          className="
            w-full py-2
            bg-blue-500 hover:bg-blue-600
            text-white rounded-lg
          "
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
