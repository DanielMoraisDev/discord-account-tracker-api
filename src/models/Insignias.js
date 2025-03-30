import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

const Insignia = conn.define("insignias", {
    insignia_id: { 
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
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    valor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    }
},
{
    timestamps: false
});

export default Insignia;