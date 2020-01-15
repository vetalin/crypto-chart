type ListenerFun = (this: WebSocket, ev: MessageEvent) => any

export const initPricesListener = (listener: ListenerFun) => {
    const pricesWS = new WebSocket('wss://ws.coincap.io/prices?assets=ALL')
    pricesWS.onmessage = listener
}