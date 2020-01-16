type FetchMethod = 'GET' | 'POST'

export const fetchDecorator = async (
  url: string,
  method: FetchMethod = 'GET'
) => {
  const fetchResult = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  return fetchResult.json()
}
