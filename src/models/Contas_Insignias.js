import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

import Contas from "./Contas.js";
import Insignias from "./Insignias.js";

const Conta_Insignia = conn.define ("contas_insignias", {
    conta_insignias_id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    conta_id: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        references: {
            model: "contas",
            key: "conta_id"
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

Contas.belongsToMany(Insignias, {
    through: Conta_Insignia,
    foreignKey: "conta_id",
    otherKey: "decoracao_id"
});

Insignias.belongsToMany(Contas, {
    through: Conta_Insignia,
    foreignKey: "insignia_id",
    otherKey: "conta_id"
})

export default Conta_Insignia;