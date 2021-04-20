import { Params, Router } from 'tiny-request-router'
import {
  getLatestNews,
  getMalaysiaNews,
  getWorldNews,
} from './controller/NewsController'
import { handleOptionsPreflight } from './controller/PreflightController'
import { Handler } from './types'

const router = new Router<Handler>()

router.get('/', async () => {
  return new Response('Sensasi RSS API')
})

router.get('/latest', getLatestNews)
router.get('/malaysia', getMalaysiaNews)
router.get('/world', getWorldNews)
router.options('*', handleOptionsPreflight)

export default router
