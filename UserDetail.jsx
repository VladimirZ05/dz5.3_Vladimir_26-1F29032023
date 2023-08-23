import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then(resp => resp.json())
      .then(data => setUser(data));

    fetch(`https://dummyjson.com/users/${userId}/posts`)
      .then(resp => resp.json())
      .then(data => setPosts(data));

    fetch(`https://dummyjson.com/users/${userId}/todos`)
      .then(resp => resp.json())
      .then(data => setTodos(data));
  }, [userId]);

  return (
    <div>
      {user && (
        <div>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <button onClick={() => setPosts([])}>Show Posts</button>
          <button onClick={() => setTodos([])}>Show Todos</button>
          <h2>Posts:</h2>
          <ul>
            {posts.map(post => (
              <li key={post.id}>{posts.title}</li>
            ))}
          </ul>
          <h2>Todos:</h2>
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>{todos.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
