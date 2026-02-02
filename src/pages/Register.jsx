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

    if (+age < 12) {
      setError("Вам должно быть не менее 12 лет");
      setFieldError((p) => ({ ...p, age: true }));
      triggerShake();
      return;
    }

    if (password !== confirm) {
      setError("Пароли не совпадают");

      setFieldError({
        password: true,
        confirm: true,
      });

      triggerShake();
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Регистрация успешна 🎉");
    }, 1500);
  };

  return (
    <main
      className="
        w-full
        px-1
      

        min-h-[calc(100vh-64px)]

        flex
        items-center
        justify-center

        py-3 sm: sm:py-6

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
          animate-authIn
    
           max-w-sm
          px-3
           py-6
          sm:px-8
         

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
        <h2 className="text-3xl font-bold mb-6 text-center text-black dark:text-white">
          Регистрация
        </h2>

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
    </main>
  );
}

export default Register;
