import { fetchDecorator } from '../fetchDecorator'
import { IRatesResponse } from './interfaces'

export const getRates = (): Promise<IRatesResponse> =>
  fetchDecorator('https://api.coincap.io/v2/rates')
