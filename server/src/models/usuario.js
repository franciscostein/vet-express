const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    cpf: {
        type: Number,
        required: true,
        trim: true
    },
    nascimento: {
        type: Date,
        required: true
    },
    telefone: {
        type: Number
    },
    cnh: {
        numero: {
            type: Number
        },
        validade: {
            type: Date
        },
        categoria: {
            type: [String],
            maxlength: 1
        }
    },
    endereco: {
        cep: {
            type: Number
        },
        logradouro: {
            type: String,
            trim: true
        },
        numero: {
            type: Number
        },
        bairro: {
            type: String,
            trim: true
        },
        cidade: {
            type: String,
            trim: true
        },
        estado: {
            type: String,
            maxlength: 2
        }
    },
    acesso: {
        email: {
            type: String,
            unique: true,
            required: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email inválido');
                }
            }
        },
        senha: {
            type: String,
            required: true,
            minlenght: 7,
            trim: true,
            validate(value) {
                if (value.toLowerCase().includes('senha')) {
                    throw new Error('Senha inválida, não utilize "senha"');
                }
            }
        },
        administrador: {
            type: Boolean,
            required: true
        }
    }
}, {
    timestamps: true
});

usuarioSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.acesso.senha;
    
    return userObject;
}

usuarioSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Não foi possível realizar o login');
    }

    const isMatch = await bcrypt.compare(password, user.acesso.senha);

    if (!isMatch) {
        throw new Error('Não foi possível realizar o login');
    }

    return user;
}

// Hash the plain text password before saving
usuarioSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.acesso.senha = await bcrypt.hash(user.acesso.senha, 8);
    }

    next();
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;