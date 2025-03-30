import { Sequelize } from "sequelize";
import ContaModel from "../../models/Contas.js";

const templateConta = async (req, res) => {
    try {
        const contas = [
            {
                nome_convite: "morais_daxj",
                conta_id: "794531697081188362",
                nome_servidor: "Desyne | Community",
                link_servidor: "https://discord.gg/QpQ8XqT2",
                tempo_nitro: "0",
                nivel_nitro: "0",
                ultima_atualizacao: new Date(),
                token: null
            },
            {
                nome_convite: "silva_kyzr",
                conta_id: "123456789012345678",
                nome_servidor: "Tech Hub",
                link_servidor: "https://discord.gg/Tech123",
                tempo_nitro: "1",
                nivel_nitro: "1",
                ultima_atualizacao: new Date(),
                token: null
            },
            {
                nome_convite: "lima_xpto",
                conta_id: "987654321098765432",
                nome_servidor: "Gamers United",
                link_servidor: "https://discord.gg/GamersUnite",
                tempo_nitro: "3",
                nivel_nitro: "2",
                ultima_atualizacao: new Date(),
                token: null
            },
            {
                nome_convite: "oliveira_rtn",
                conta_id: "112233445566778899",
                nome_servidor: "Music Lovers",
                link_servidor: "https://discord.gg/MusicLover",
                tempo_nitro: "6",
                nivel_nitro: "2",
                ultima_atualizacao: new Date(),
                token: null
            },
            {
                nome_convite: "santos_fgh",
                conta_id: "998877665544332211",
                nome_servidor: "Code Wizards",
                link_servidor: "https://discord.gg/CodeWiz",
                tempo_nitro: "12",
                nivel_nitro: "3",
                ultima_atualizacao: new Date(),
                token: null
            },
            {
                nome_convite: "rodrigues_zxq",
                conta_id: "554433221100998877",
                nome_servidor: "Design Club",
                link_servidor: "https://discord.gg/DesignClub",
                tempo_nitro: "24",
                nivel_nitro: "3",
                ultima_atualizacao: new Date(),
                token: null
            }
        ]

        contas.map(async (e, i) => {
            await ContaModel.create(e)
            console.log({ message: `Conta adicionada: ${e.nome_convite}` })
        })

        return res.status(201).json({message: "Template de contas adicionado com sucesso" })
    } catch (error) {
        console.log('[CONTAS TEMPLATE] Error: ' + error)
    }
}

export default templateConta;