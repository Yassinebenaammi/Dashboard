const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 30
    },
    img:{
        type:String
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password:{
      type:String,
      reqiured:true
    },
    encadrant:{
      type:String
    },
    groupe:{
      type:String
    },
    isLeader: {
      type: Boolean,
      default: false
    },
    isStudent: {
      type: Boolean,
      default: true
    }
  }, {
    timestamps: true 
  });

  const teamSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    leader: {
      type: String,
      reqiured:true
    },
    
    groupe:{
        type:String
    }

  }, {
    timestamps: true
  });
  
export const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);
export const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
