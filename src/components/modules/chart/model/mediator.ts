import { IPriceSocket } from '@/requests/prices/interfaces'
import Vuex from '@/store'
import { initPricesListener } from '@/requests/prices/pricesSocket'

export const subscribePriceChanges = (
  actionName: string,
  markets: string
): WebSocket => {
  const listener = async (priceEvent: MessageEvent): Promise<void> => {
    const marketHash: IPriceSocket = JSON.parse(priceEvent.data)
    await Vuex.dispatch(actionName, marketHash)
  }
  return initPricesListener(listener, markets)
}

export const upDownAnimate = (id: string, upOrDown: 'up' | 'down'): boolean => {
  const baseTableClassRow = 'ui-table__row'
  const elementById = document.querySelector(`.${baseTableClassRow}_${id}`)
  if (!elementById) {
    console.error(`element by id ${id} not found in table`)
    return false
  }
  const pusher = (elm: Element, subClass: string) => {
    const generatedClass = `${baseTableClassRow}_${subClass}`
    elm.classList.add(generatedClass)
    setTimeout(() => elm.classList.remove(generatedClass), 350)
  }
  pusher(elementById, upOrDown)
  return true
}
