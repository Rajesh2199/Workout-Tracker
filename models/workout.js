const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Add documents in our collection.
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: new Date

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
    ],
    totalDuration: {
      type:Number,
      default:0
    }
  
});
// Coverting workoutSchema into a Model so we can work with it.
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
