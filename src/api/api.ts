export async function getFilteredData(filterBy: string) {
  const response = await fetch(`/search?filter=${filterBy}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    return await response.json();
  }

  return Promise.reject(response);
}
