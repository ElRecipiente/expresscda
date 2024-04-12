const appointmentController = {
    findAll: (req, res) => {
        res.status(200).json({ message: "ALL" })
    },

    findById: (req, res) => {
        res.status(200).json({ message: "brouette" })
    },

    create: (req, res) => {
        res.status(201).json({ message: req.body })
    }
}

export default appointmentController;