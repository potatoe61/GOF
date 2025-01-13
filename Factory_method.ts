// Проще всего взять пример создания пользаков
// Интерфейс пользователя
interface User {
  getRole(): string;
}

// Реализация пользователей
class RegularUser implements User {
  getRole(): string {
    return "Обычный пользователь";
  }
}

class AdminUser implements User {
  getRole(): string {
    return "Администратор";
  }
}

// Фабричный метод для создания пользователей
class UserFactory {
  static createUser(type: string): User {
    switch (type) {
      case "Regular":
        return new RegularUser();
      case "Admin":
        return new AdminUser();
      default:
        throw new Error("Неправильный тип пользователя");
    }
  }
}

// Пример использования
const user1 = UserFactory.createUser("Regular");
console.log(user1.getRole()); // Обычный пользователь

const user2 = UserFactory.createUser("Admin");
console.log(user2.getRole()); // Администратор