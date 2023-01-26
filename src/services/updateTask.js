export async function updateTask({ done, id }) {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done }),
    });
    const json = await response.json();
    return json;
  } catch (err) {
    return console.log(err);
  }
}
