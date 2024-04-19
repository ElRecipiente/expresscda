import Appointment from "../models/appointment.js";


const appointmentController = {
    findAll: async (req, res) => {

        try {
            const result = await Appointment.find();
            res.send({ "appointment": result })

        } catch (error) {
            console.error("Erreur lors de la récupération des données.", error);
            res.status(500).json({ message: "Erreur lors de la récupération des données." })
        }
    },

    test: async (req, res) => {

        try {
            console.log("test")
            res.status(200).json({message: "TEST"})

        } catch (error) {
            console.error("Échec du test.", error);
            res.status(500).json({ message: `Échec du test : ${error}` });
        }
    },

    create: async (req, res) => {

        try {
            console.log(req.body);
            // Create new object with request body
            const newAppointment = new Appointment(req.body);
            // Save it in database
            const result = await newAppointment.save();
            res.status(201).json(result);

        } catch (error) {
            console.error("Erreur lors de la création d'un rendez-vous :", error);
            res.status(500).json({ message: `Erreur lors de la création d'un rendez-vous` });
        }
    }
}

export default appointmentController;