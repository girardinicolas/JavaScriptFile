function descrivi(obj) {
    if ('role' in obj) {
      console.log(`Admin con id ${obj.id} e ruolo ${obj.role}`);
    } else {
      console.log(`User con id ${obj.id} e email ${obj.email}`);
    }
  }
  
  const admin = { id: 1, role: 'admin' };
  const user = { id: 2, email: 'user@example.com' };
  
  descrivi(admin);
  descrivi(user);
  