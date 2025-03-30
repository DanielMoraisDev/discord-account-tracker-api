import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const ClassificacaoDecoracao = conn.define("classificacao_decoracoes", {
    classificacao_decoracao_id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    valor: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    timestamps: false
});

export default ClassificacaoDecoracao;