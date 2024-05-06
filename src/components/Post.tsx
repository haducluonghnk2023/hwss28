import React from 'react';
interface PostProps {
    post: {
      id: number;
      title: string;
      content: string;
      author: string;
    };
  }
const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      {/* Hiển thị thông tin của bài viết */}
      <h3>{post.title}</h3>
    </div>
  );
}

export default Post;
