import { fetchDecorator } from './fetchDecorator'

export const getRates = () => fetchDecorator('https://api.coincap.io/v2/rates')
