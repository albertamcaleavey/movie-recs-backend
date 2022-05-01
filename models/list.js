import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  description: {type: String, required: true}
}, {
  timestamps: true
})

const listSchema = new mongoose.Schema({
  tasks: [taskSchema]
},{
    timestamps: true,
})


const List = mongoose.model('List', listSchema)

export {List}
