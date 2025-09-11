type User = {
    id : string;
    name : string;
    email? : string;
};

export const draft: Partial<User> = { name: "Mario" };
console.log('Draft Partial:', draft);

const user: Readonly<User> = { id: "1", name: "Anna", email: "anna@example.com" };
console.log('Readonly User:', user);

const userPreview: Pick<User, 'id' | 'name'> = { id: "2", name: "Luca" };
console.log('Pick User (id, name):', userPreview);