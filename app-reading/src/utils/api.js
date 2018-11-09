
const api = "http://localhost:3001"

const headers = {
  'Accept': 'application/json',
  'Authorization': 'any',
  "Content-Type": "application/json"
}

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())

export const setPost = (post) =>
  fetch(`${api}/posts`, {
      method: 'POST',
      headers,
      body: JSON.stringify(post) 
    })
    .then(res => res.json())
    .catch(error => error)

export const updatePost = (post) =>
  fetch(`${api}/posts/${post.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(post)
  })
  .then(res => res.json())
  .catch(error => error)

export const deletePost = (postId) =>
  fetch(`${api}/posts/${id}`, {
      method: 'DELETE',
      headers
    })
    .then(res => res.json())
    .catch(error => error)

export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
