import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

import Contas from "./Contas.js";
import Insignias from "./Insignias.js";

const ContaInsignia = conn.define ("contas_insignias", {
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
    through: ContaInsignia,
    foreignKey: "conta_id",
    otherKey: "insignia_id"
});

Insignias.belongsToMany(Contas, {
    through: ContaInsignia,
    foreignKey: "insignia_id",
    otherKey: "conta_id"
})

export default ContaInsignia;