import Info from "../models/info.js";

const infoController = {
    findAll: async (req, res) => {

        try {
            const result = await Info.find();
            res.send({ "info": result })

        } catch (error) {
            console.error("Erreur lors de la récupération des données.", error);
            res.status(500).json({ message: "Erreur lors de la récupération des données.", error })
        }
    }
}

export default infoController;