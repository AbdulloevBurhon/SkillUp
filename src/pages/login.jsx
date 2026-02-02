import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/ui/button/Button";
import Input from "../components/ui/input/Input";
import { Mail, Lock } from "lucide-react";
import Label from "../components/ui/label/Label";

function Login() {
  const navigate = useNavigate(); // Хук для навигации
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const [fieldError, setFieldError] = useState({
    email: false,
    password: false,
  });

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  const handleLogin = () => {
    setError("");
    setFieldError({ email: false, password: false });

    // Проверка пустых полей
    if (!email || !password) {
      setError("Пожалуйста, заполните все поля");
      setFieldError({ email: !email, password: !password });
      triggerShake();
      return;
    }

    // Базовая проверка email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Введите корректный email");
      setFieldError({ email: true, password: false });
      triggerShake();
      return;
    }

    setLoading(true);

    setTimeout(() => {
      // Симуляция проверки логина
      if (email !== "test@mail.com" || password !== "123456") {
        setError("Неверный логин или пароль");
        setFieldError({ email: true, password: true });
        triggerShake();
        setLoading(false);
        return;
      }

      // Успех → сохранение токена и переход в профиль
      localStorage.setItem("auth_token", "your-token-here");
      setLoading(false);
      navigate("/profile"); // Переход на страницу профиля
    }, 1500);
  };

  return (
    <div className="h-screen w-full grid place-items-center bg-white dark:bg-gray-900 overflow-hidden">
      {/* Card */}
      <div
        className="
    relative z-10
    animate-authIn

    w-[90%] max-w-sm
    p-8 rounded-3xl

    bg-white dark:bg-gray-800
    backdrop-blur-2xl
    border border-gray-200/40 dark:border-gray-700/40
    shadow-[0_20px_60px_rgba(0,0,0,0.15)]

    transition-all

    -translate-y-15   // 👈 ВАЖНО
  "
      >
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
          Вход
        </h2>

        {/* Error message */}
        {error && (
          <p className="mb-4 text-sm text-center text-red-500">{error}</p>
        )}

        {/* Inputs */}
        <div className="space-y-4 mb-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="email">Логин</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail size={18} />}
              error={fieldError.email}
              className={shake && fieldError.email ? "animate-shake" : ""}
              disabled={loading}
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="password">Пароль</Label>
            <Input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showToggle
              leftIcon={<Lock size={18} />}
              error={fieldError.password}
              className={shake && fieldError.password ? "animate-shake" : ""}
              disabled={loading}
              id="password"
            />
          </div>
        </div>

        {/* Button */}
        <Button onClick={handleLogin} loading={loading} disabled={loading}>
          {loading ? "Вход..." : "Войти"}
        </Button>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-gray-300/70 dark:bg-gray-600/70" />
          <span className="text-sm text-gray-500">или</span>
          <div className="flex-1 h-px bg-gray-300/70 dark:bg-gray-600/70" />
        </div>

        {/* Register */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Нет аккаунта?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:underline font-medium"
          >
            Регистрация
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
