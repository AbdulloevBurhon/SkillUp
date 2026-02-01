function Profile() {
  // Для примера, пусть будет статичное имя и email
  const user = {
    name: "Иван Иванов",
    email: "test@mail.com",
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Профиль</h1>
      <div>
        <p>
          <strong>Имя:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>

      {/* Здесь могут быть кнопки для редактирования профиля или выхода */}
      <button className="mt-4 p-2 bg-blue-500 text-white rounded">
        Редактировать
      </button>
    </div>
  );
}

export default Profile;
