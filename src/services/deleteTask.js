export async function deleteTask({ id }) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
    method: "DELETE",
  });
  return response;
}
