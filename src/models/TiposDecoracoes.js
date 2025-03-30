import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const TipoDecoracao = conn.define("tipo_decoracoes", {
    tipo_decoracao_id: { 
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

export default TipoDecoracao;