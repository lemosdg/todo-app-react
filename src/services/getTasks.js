const API_URL = import.meta.env.VITE_API_URL

export async function getTasks (filterBy = '') {
  const response = await fetch(`${API_URL}?filter=${filterBy}`, {
    method: 'GET'
  })
  const json = await response.json()
  return json
}
