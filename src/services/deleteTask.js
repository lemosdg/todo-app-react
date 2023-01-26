export function deleteTask ({ id }) {
  return fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
    method: 'DELETE'
  }).then((response) => response)
}
