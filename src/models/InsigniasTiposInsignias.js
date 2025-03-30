import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

import TiposInsignias from "./TiposInsignias.js";
import Insignias from "./Insignias.js";

const InsigniaTiposInsignia = conn.define("insignias_tipos_insignias", {
    insignia_tipos_insignia_id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
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
    through: InsigniaTiposInsignia,
    foreignKey: "insignia_id",
    otherKey: "tipo_insignia_id"
});

TiposInsignias.belongsToMany(Insignias, {
    through: InsigniaTiposInsignia,
    foreignKey: "tipo_insignia_id",
    otherKey: "insignia_id"
})

export default InsigniaTiposInsignia;