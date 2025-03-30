import { DataTypes } from "sequelize";
import conn from "../config/conn.js";

import Contas from "./Contas.js";
import Decoracoes from "./Decoracoes.js";

const Conta_Decoracao = conn.define ("contas_decoracoes", {
    conta_decoracao_id: { 
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
    decoracao_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: "decoracoes",
            key: "decoracao_id"
        }
    }
},
{
    timestamps: false
});

Contas.belongsToMany(Decoracoes, {
    through: Conta_Decoracao,
    foreignKey: "conta_id",
    otherKey: "decoracao_id"
});

Decoracoes.belongsToMany(Contas, {
    through: Conta_Decoracao,
    foreignKey: "decoracao_id",
    otherKey: "conta_id"
})

export default Conta_Decoracao;