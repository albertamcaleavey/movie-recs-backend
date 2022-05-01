import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  description: {type: String, required: true}
}, {
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  email: {type: String, required: true, lowercase: true, unique: true},
  name: String,
  tasks: [taskSchema]
},{
    timestamps: true,
})


const Profile = mongoose.model('Profile', profileSchema)

export {Profile}
