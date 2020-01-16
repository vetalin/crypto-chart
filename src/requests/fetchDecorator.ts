type FetchMethod = 'GET' | 'POST'
interface FetchParams {
  method?: FetchMethod
  body?: any
}

export const fetchDecorator = async (url: string, params: FetchParams = {}) => {
  const fetchResult = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    ...params,
    ...(() => {
      if (!params.method || params.method !== 'POST') return {}
      return { body: JSON.stringify(params.body || {}) }
    })()
  })
  return fetchResult.json()
}
