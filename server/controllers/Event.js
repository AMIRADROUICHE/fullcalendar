/*const mongoose=requir("mongoose");
const EventSchema=mongoose.Schema({
    start:Date,
    end:Date,
    title:string

})
const Event=mongoose.model(name:"Event",EventShema);
module.exports=Event;*/

const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  start: Date,
  end: Date,
  title: String
});

const Event = mongoose.model("Event", EventSchema);  // Correction : Utilisation de "EventSchema" plutôt que "EventShema"

module.exports = Event;
