// Definizione type alias Admin e User
type Admin = {
    id: number;
    role: 'admin';
  };
  
  type User = {
    id: number;
    email: string;
  };
  
  // Tipo intersezione AdminUser
  type AdminUser = Admin & User;
  
  // Oggetto valido di tipo AdminUser
 export const adminUser: AdminUser = {
    id: 1,
    role: 'admin',
    email: 'admin@example.com'
  };
  