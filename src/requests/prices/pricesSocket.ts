type ListenerFun = (this: WebSocket, ev: MessageEvent) => any

export const initPricesListener = (
  listener: ListenerFun,
  markets: string = 'ALL'
): WebSocket => {
  const pricesWS = new WebSocket(`wss://ws.coincap.io/prices?assets=${markets}`)
  pricesWS.onmessage = listener
  return pricesWS
}
