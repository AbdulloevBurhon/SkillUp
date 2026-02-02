function Profile() {
  const user = {
    name: "Иван Иванов",
    email: "test@mail.com",
  };

  return (
    <div className="flex items-center justify-center min-h-full">
      <div className="w-full max-w-xl bg-white/90 dark:bg-gray-800/90 rounded-3xl p-8 shadow-xl text-center">
        {/* Avatar */}
        <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
          {user.name[0]}
        </div>

        <h2 className="text-2xl font-bold mb-2">{user.name}</h2>

        <p className="text-gray-400 mb-6">{user.email}</p>

        <button className="px-6 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600">
          Редактировать
        </button>
      </div>
    </div>
  );
}

export default Profile;
