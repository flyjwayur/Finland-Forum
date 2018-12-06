import React from "react";

export default ({ editable, post, ...props }) => {
  console.log(editable);
  if (editable) {
    return <Edit post={post} {...props} />;
  }
  return (
    <div>
      <div {...props}>Title: {post.title}</div>
      <div {...props}>Category: {post.category}</div>
      <div {...props}>{post.body}</div>
    </div>
  );
};

const Edit = ({ post, ...props }) => (
  <div {...props}>
    <div {...props}> edit : Title: {post.title}</div>
    <div {...props}> edit : Category: {post.category}</div>
    <div {...props}> edit : {post.body}</div>
  </div>
);
