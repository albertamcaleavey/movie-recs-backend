import { Task } from '../models/movie.js'

function index(req, res) {
  Task.find({})
  .then(tasks => res.json(tasks))
  .catch(err => res.json(err))
}

function create (req, res) {
  Task.create(req.body)
  .then(task => res.json(task))
  .catch(err => res.json(err))
}


export {
  index,
  create,
}