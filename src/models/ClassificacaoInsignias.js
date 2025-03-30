import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const ClassificacaoInsignia = conn.define("classificacao_insignias", {
    classificacao_insignia_id: { 
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

export default ClassificacaoInsignia;