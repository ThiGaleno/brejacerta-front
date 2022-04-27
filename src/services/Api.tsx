import axios from 'axios';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3RcL2FwaVwvbG9naW4iLCJpYXQiOjE2Mjg3MjkzMDEsImV4cCI6MTYyODczMjkwMSwibmJmIjoxNjI4NzI5MzAxLCJqdGkiOiJxd20yUkwwY3psODFyYVAzIiwic3ViIjoxNiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.Hf6C_PrqxBW1gZe47QzgknurXCU8OzYkEmC5KoSYSJA';

export const Api = axios.create({
  baseURL: 'http://localhost/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Methods': '*',
    Authorization: `Bearer ${token}`,
  },
});
