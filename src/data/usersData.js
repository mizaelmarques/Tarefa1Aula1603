// Dados compartilhados entre rotas e controladores
let users = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' }
];
let nextId = 3;

module.exports = {
    users,
    getUsers: () => users,
    getUserById: (id) => users.find(u => u.id === parseInt(id)),
    createUser: (nome) => {
        const novoUsuario = { id: nextId++, nome };
        users.push(novoUsuario);
        return novoUsuario;
    },
    updateUser: (id, nome) => {
        const user = users.find(u => u.id === parseInt(id));
        if (user) {
            user.nome = nome;
        }
        return user;
    },
    deleteUser: (id) => {
        const index = users.findIndex(u => u.id === parseInt(id));
        if (index !== -1) {
            users.splice(index, 1);
            return true;
        }
        return false;
    }
};
