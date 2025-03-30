import { DataTypes } from "sequelize";
import conn from "../config/conn.js";
import TipoInsignia from "./TiposInsignias.js";

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
    tipo_insignia_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: "tipo_insignias",
            key: "tipo_insignia_id"
        }
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

// Cada insignia pertece a um tipo de insignia
Insignia.belongsTo(TipoInsignia, {
    foreignKey: "tipo_insignia_id",
    as: "tipo_insignias"
});

// Um tipo de insignia pode ter muitas insignias
TipoInsignia.hasMany(Insignia, {
    foreignKey: "tipo_insignia_id",
    as: "insignias"
})

export default Insignia;