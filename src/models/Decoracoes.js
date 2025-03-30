import { DataTypes } from "sequelize";
import conn from "../config/conn.js";
import ClassificacaoDecoracao from "./ClassificacaoDecoracoes.js";

const Decoracao = conn.define("decoracoes", {
    decoracao_id: { 
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
    classificacao_decoracao_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: "classificacao_decoracoes",
            key: "classificacao_decoracao_id"
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

// Cada decoracao pertece a um tipo de decoracao
Decoracao.belongsTo(ClassificacaoDecoracao, {
    foreignKey: "classificacao_decoracao_id",
    as: "classificacao_decoracoes"
});

// Um tipo de decoracao pode ter muitas decoracoes
ClassificacaoDecoracao.hasMany(Decoracao, {
    foreignKey: "classificacao_decoracao_id",
    as: "decoracoes"
})

export default Decoracao;