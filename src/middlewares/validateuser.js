function validateUser(req, res, next) {
    console.log('Validando usuário...');
    console.log('Body recebido:', req.body);
    
    if (!req.body || !req.body.nome || req.body.nome.trim() === '') {
        console.log('Nome inválido ou não fornecido');
        return res.status(400).json({ error: 'Nome é obrigatório' })
    }
    next();

}

module.exports = validateUser;
