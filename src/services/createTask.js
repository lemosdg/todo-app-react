export async function createTask ({ description, done }) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description, done })
    })
    const json = await response.json()
    return json
  } catch (err) {
    return console.log(err)
  }
}
