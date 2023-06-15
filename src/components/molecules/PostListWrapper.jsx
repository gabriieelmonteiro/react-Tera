import React from "react";
import PostItemList from "./PostItemList";

export default function PostListWrapper(props) {
  return (
    <div className="user-blog__posts">
      {props.posts.map((post) => (
        <PostItemList key={post.id} post={post} />
      ))}
    </div>
  );
}
