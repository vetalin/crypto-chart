import { IPriceSocket } from '@/requests/prices/interfaces'
import Vuex from '@/store'
import { initPricesListener } from '@/requests/prices/pricesSocket'

export const subscribePriceChanges = (
  actionName: string,
  markets: string
): void => {
  const listener = async (priceEvent: MessageEvent): Promise<void> => {
    const marketHash: IPriceSocket = JSON.parse(priceEvent.data)
    await Vuex.dispatch(actionName, marketHash)
  }
  initPricesListener(listener, markets)
}