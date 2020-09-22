const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    date: {
      type:Date,

    },
    exercises: [
      {
        type:{
          type: String,
          trim:true,
          required:"Please enter the type of exercise."
        },
        name:{
          type:String,
          trim:true,
          rquired:"Please enter the name of the exerise."
        },
        duration:{
          type:Number,
          required:"Please enter the duration of the exercise."
        },
        weight:{
          type:Number
        },
        reps: {
          type:Number
        },
        sets:{
          type: Number
        },
        distance: {
          type:Number
        }
      }
    ]
  
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
