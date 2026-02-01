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

  const handleRegister = () => {
    setError("");

    if (!name || !age || !email || !password || !confirm) {
      setError("Заполните все поля");
      return;
    }

    if (+age < 12) {
      setError("Минимум 12 лет");
      return;
    }

    if (password !== confirm) {
      setError("Пароли не совпадают");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Регистрация успешна 🎉");
    }, 1500);
  };

  return (
    <div
      className="
        min-h-[calc(100vh-80px)]
        w-full

        flex
        justify-center
        items-center

        px-4
        py-10

        bg-gradient-to-br
        from-green-100
        via-blue-100
        to-purple-100
        dark:from-gray-900
        dark:via-gray-800
        dark:to-gray-900
      "
    >
      {/* Card */}
      <div
        className="
          w-full max-w-sm

          p-6 sm:p-8
          rounded-3xl

          bg-white/90
          dark:bg-gray-800/90

          backdrop-blur-xl
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
        <div className="space-y-4 mb-5">
          {/* Name */}
          <div>
            <Label htmlFor="name">Имя</Label>

            <Input
              id="name"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              leftIcon={<User size={18} />}
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
              disabled={loading}
            />
          </div>

          {/* Confirm */}
          <div>
            <Label htmlFor="confirm">Повторите пароль</Label>

            <Input
              id="confirm"
              type="password"
              placeholder="Повторите пароль"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              showToggle
              leftIcon={<Lock size={18} />}
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
