import { Params } from 'tiny-request-router'

type Handler = (params: Params) => Promise<Response>
