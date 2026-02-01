import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../components/ui/button/Button";
import Input from "../components/ui/input/Input";
import Label from "../components/ui/label/Label";

import { Mail, Lock, User, Calendar } from "lucide-react";

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const [fieldError, setFieldError] = useState({
    name: false,
    age: false,
    email: false,
    password: false,
    confirm: false,
  });

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  };

  const handleRegister = () => {
    setError("");
    setFieldError({
      name: false,
      age: false,
      email: false,
      password: false,
      confirm: false,
    });

    // ❌ Пустые поля
    if (!name || !age || !email || !password || !confirm) {
      setError("Пожалуйста, заполните все поля");

      setFieldError({
        name: !name,
        age: !age,
        email: !email,
        password: !password,
        confirm: !confirm,
      });

      triggerShake();
      return;
    }

    // ❌ Возраст
    if (+age < 12) {
      setError("Вам должно быть не менее 12 лет");
      setFieldError((prev) => ({ ...prev, age: true }));
      triggerShake();
      return;
    }

    // ❌ Пароли не совпадают
    if (password !== confirm) {
      setError("Пароли не совпадают");

      setFieldError({
        password: true,
        confirm: true,
      });

      triggerShake();
      return;
    }

    // Загрузка
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      alert("Регистрация успешна 🎉");

      console.log({
        name,
        age,
        email,
        password,
      });
    }, 1500);
  };

  return (
    <div
      className="
    min-h-screen
    w-full
    overflow-hidden
    grid place-items-center
    relative
    bg-gradient-to-br
    from-green-100
    via-blue-100
    to-purple-100
    dark:from-gray-900
    dark:via-gray-800
    dark:to-gray-900
  "
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-green-400/25 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[28rem] h-[28rem] bg-purple-400/25 rounded-full blur-[120px]" />

      {/* Card */}
      <div
        className="
          relative z-10
             animate-authIn
             -translate-y-15 sm:-translate-y-6
         w-[90%] max-w-xs sm:max-w-sm
         p-4 sm:p-8
          rounded-3xl
          bg-white/90
          dark:bg-gray-800/90
          backdrop-blur-2xl
          border border-gray-200/40
          dark:border-gray-700/40
          shadow-xl
        "
      >
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-center">Регистрация</h2>

        {/* Error */}
        {error && (
          <p className="mb-4 text-sm text-center text-red-500">{error}</p>
        )}

        {/* Inputs */}
        <div className="space-y-4 mb-4">
          {/* Name */}
          <div>
            <Label htmlFor="name">Имя</Label>

            <Input
              id="name"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              leftIcon={<User size={18} />}
              error={fieldError.name}
              className={shake && fieldError.name ? "animate-shake" : ""}
              disabled={loading}
            />
          </div>

          {/* Age */}
          <div>
            <Label htmlFor="age">Возраст</Label>

            <Input
              id="age"
              type="number"
              placeholder="Ваш возраст"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              leftIcon={<Calendar size={18} />}
              error={fieldError.age}
              className={shake && fieldError.age ? "animate-shake" : ""}
              disabled={loading}
            />
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email">Email</Label>

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

          {/* Password */}
          <div>
            <Label htmlFor="password">Пароль</Label>

            <Input
              id="password"
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              showToggle
              leftIcon={<Lock size={18} />}
              error={fieldError.password}
              className={shake && fieldError.password ? "animate-shake" : ""}
              disabled={loading}
            />
          </div>

          {/* Confirm */}
          <div>
            <Label htmlFor="confirm">Подтвердите пароль</Label>

            <Input
              id="confirm"
              type="password"
              placeholder="Повторите пароль"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              showToggle
              leftIcon={<Lock size={18} />}
              error={fieldError.confirm}
              className={shake && fieldError.confirm ? "animate-shake" : ""}
              disabled={loading}
            />
          </div>
        </div>

        {/* Button */}
        <Button onClick={handleRegister} loading={loading} disabled={loading}>
          {loading ? "Создание..." : "Создать аккаунт"}
        </Button>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          Уже есть аккаунт?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline font-medium"
          >
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
