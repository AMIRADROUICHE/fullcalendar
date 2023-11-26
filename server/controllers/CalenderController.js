/*const moment=require("moment");
const router=require("express").Router();
const moment = require("moment/moment");
const Event=require("../Models/Event");
router.post(path:"/create-event",handlers:asyanc(req:Request<p,ResBody,ReqBody ,ReqQuery >,res:Reponse<ResBody>=>{
const event =Event(req.body);
await.event.save();
res.sendStatus(code:201);});
router.get(path:"/get-events",asyanc(req:Request<p,ResBody,ReqBody ,ReqQuery >,res:Reponse<ResBody>=>{
    const event =await Event.find({
        start:{$gte:moment(req.query.start).toDate()},
        end{$lte:moment()},

});
module.exports=router;*/
const moment = require("moment");
const router = require("express").Router();
const Event = require("../Models/Event");

router.post("/create-event", async (req, res) => {  // Correction : Suppression des annotations inutiles
  const event = new Event(req.body);  // Correction : Utilisation de "new" pour créer une nouvelle instance d'Event
  await event.save();  // Correction : Utilisation de "await" pour attendre que la sauvegarde soit terminée
  res.sendStatus(201);  // Correction : Utilisation de "res.sendStatus" pour envoyer le statut 201
});

router.get("/get-events", async (req, res) => {  // Correction : Suppression des annotations inutiles
  try {
    const events = await Event.find({
      start: { $gte: moment(req.query.start).toDate() },
      end: { $lte: moment(req.query.start).toDate() } , // Correction : Ajout de ".toDate()" pour obtenir une date valide
    });
    res.send(events);  // Correction : Utilisation de "res.json" pour envoyer les données au format JSON
  } catch (error) {
    console.error(error);
    res.sendStatus(500);  // Correction : Envoi d'une réponse de statut 500 en cas d'erreur
  }
});

module.exports = router;
