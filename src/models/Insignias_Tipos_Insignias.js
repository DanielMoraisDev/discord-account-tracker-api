import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

import TiposInsignias from "./Tipos_Insignias.js";
import Insignias from "./Insignias.js";

const Insignia_Tipos_Insignia = conn.define("insignias_tipos_insignias", {
    insignia_tipos_insignia_id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    tipos_insignias_id: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        references: {
            model: "tipos_insignias",
            key: "tipo_insignia_id"
        }
    },
    insignia_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: "insignias",
            key: "insignia_id"
        }
    }
},
{
    timestamps: false
});

Insignias.belongsToMany(TiposInsignias, {
    through: Insignia_Tipos_Insignia,
    foreignKey: "insignia_id",
    otherKey: "tipo_insignia_id"
});

TiposInsignias.belongsToMany(Insignias, {
    through: Insignia_Tipos_Insignia,
    foreignKey: "tipo_insignia_id",
    otherKey: "insignia_id"
})

export default Insignia_Tipos_Insignia;