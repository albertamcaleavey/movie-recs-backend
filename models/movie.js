import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
  name: {type: String, required: true},
}, {
  timestamps: true
})


const Task = mongoose.model('Movie', movieSchema)

export { Movie }
