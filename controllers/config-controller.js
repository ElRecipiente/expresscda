import Config from "../models/config.js";

const configController = {
    findAll: async (req, res) => {

        try {
            const result = await Config.find();
            res.send({ "config": result })

        } catch (error) {
            console.error("Erreur lors de la récupération des données.", error);
            res.status(500).json({ message: "Erreur lors de la récupération des données." })
        }
    }
}

export default configController;