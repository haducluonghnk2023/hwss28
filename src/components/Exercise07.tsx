// File: ListPost.js
import React, { useState } from 'react';
import Post from './Post';

const ListPost = () => {
  // Sử dụng state để lưu trữ danh sách bài viết
  const [posts, setPosts] = useState([
    { id: 1, title: "Bài viết 1", content: "Nội dung bài viết 1", author: "Tác giả 1" },
    { id: 2, title: "Bài viết 2", content: "Nội dung bài viết 2", author: "Tác giả 2" },
    { id: 3, title: "Bài viết 3", content: "Nội dung bài viết 3", author: "Tác giả 3" }
  ]);

  return (
    <div>
      {/* Hiển thị danh sách bài viết */}
      <h2>Exercise07:</h2>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default ListPost;
