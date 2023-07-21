import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3002",
});

export async function postBook(data) {
  const response = await api.post("/books", data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return response.data;
}
export async function getBooks() {
  const books = await api.get("/books");
  return books;
}

export async function deleteBook(id) {
  await api.delete(`/books/${id}`);
  return id;
}

export async function updateBook(bookId, data) {
  const response = await api.put(`/books/${bookId}`, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  return response.data;
}
