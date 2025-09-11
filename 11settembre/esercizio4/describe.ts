type Admin = {
    id: number;
    role: 'admin';
  };
  
  type User = {
    id: number;
    email: string;
  };
  
  type AdminOrUser = Admin | User;
  
  export function descrivi(obj: AdminOrUser): void {
    if ('role' in obj) {
      // Caso Admin
      console.log(`Admin con id ${obj.id} e ruolo ${obj.role}`);
    } else {
      // Caso User
      console.log(`User con id ${obj.id} e email ${obj.email}`);
    }
  }
  
  // Esempi di uso
  const admin: Admin = { id: 1, role: 'admin' };
  const user: User = { id: 2, email: 'user@example.com' };
  
  descrivi(admin);
  descrivi(user);
  