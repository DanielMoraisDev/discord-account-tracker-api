import { Sequelize } from "sequelize";
import ContaModel from "../../models/Contas.js";

const createConta = async (req, res) => {
    try {
        const {conta_id, nome_convite, nome_servidor, link_servidor, tempo_nitro, nivel_nitro, token} = req.body

        const ultima_atualizacao = new Date();

        if (!conta_id) {
            return res.status(400).json({ message: "O id da conta é necessário" });
        }

        if (!nome_convite) {
            return res.status(400).json({ message: "O nome de convite é necessário" });
        }

        if (!nome_servidor) {
            return res.status(400).json({ message: "O nome do servidor é necessário" });
        }

        if (!link_servidor) {
            return res.status(400).json({ message: "O link de convite do servidor é necessário" });
        }

        if (!tempo_nitro) {
            return res.status(400).json({ message: "O tempo de nitro da conta é necessário" });
        }

        if (!nivel_nitro) {
            return res.status(400).json({ message: "O nível de nitro da conta é necessário" });
        }

        const conta = {
            conta_id: conta_id,
            nome_convite: nome_convite,
            nome_servidor: nome_servidor,
            link_servidor: link_servidor,
            tempo_nitro: tempo_nitro,
            nivel_nitro: nivel_nitro,
            ultima_atualizacao: ultima_atualizacao,
            token: token
        }

        const contaExist = await ContaModel.findByPk(conta.conta_id);

        if (contaExist) {
            return res.status(409).json({ error: "Essa conta já está registrada!" })
        }

        const createConta = await ContaModel.create(conta)

        if (!createConta) {
            return res.status(500).json({ error: "Essa conta já está registrada!" })
        }

        return res.status(201).json({createConta, message: "Conta registrada com sucesso" })
    } catch (error) {
        console.log('[CONTROLLER CONTA CREATE] Error: ' + error)
    }
}

export default createConta;