import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Decoracao = conn.define ("decoracoes", {
    decoracao_id: { 
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
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true 
    }
},
{
    timestamps: false
});

export default Decoracao;