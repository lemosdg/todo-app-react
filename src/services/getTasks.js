export async function getTasks () {
  const response = await fetch(import.meta.env.VITE_API_URL, {
    method: 'GET'
  })
  const json = await response.json()
  return json
}
