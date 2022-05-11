import api from './api'

export const getOffers = () => api.get('/offer')

export const subscribe = (body) => api.post('/subscription', body)
