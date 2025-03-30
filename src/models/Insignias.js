import { DataTypes } from "sequelize";
import conn from "../config/conn.js";
import ClassificacaoInsignia from "./ClassificacaoInsignias.js";

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
    classificacao_insignia_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: "classificacao_insignias",
            key: "classificacao_insignia_id"
        }
    },
    valor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
},
{
    timestamps: false
});

// Cada insignia pertece a uma classificacao de insignia
Insignia.belongsTo(ClassificacaoInsignia, {
    foreignKey: "classificacao_insignia_id",
    as: "classificacao_insignias"
});

// Uma classificacao de insignia pode ter muitas insignias
ClassificacaoInsignia.hasMany(Insignia, {
    foreignKey: "classificacao_insignia_id",
    as: "insignias"
})

export default Insignia;