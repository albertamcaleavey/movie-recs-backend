import { Router } from 'express'
import * as authCtrl from '../controllers/auth.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.get('/')
router.post('/')
router.delete('/:id')
router.put('/:id')

export { router }