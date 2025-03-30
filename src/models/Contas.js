import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Conta = conn.define("contas", {
    conta_id: { //id --> discord
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    nome_convite: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome_servidor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    link_servidor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tempo_nitro: { // Em mêses
        type: DataTypes.STRING,
        allowNull: false,
    },
    nivel_nitro: { // Adicionar sistema pra ir aumentando o tempo e o nitro ir mudando
        type: DataTypes.STRING,
        allowNull: false,
    },
    ultima_atualizacao: { // A primeira vai ser quando adicionado
        type: DataTypes.DATE,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true,
    }
},
    {
        timestamps: true
    });

export default Conta