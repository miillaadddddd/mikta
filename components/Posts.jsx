import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "milad Hasani",
    userImg: "/image/profile.png",
    img: "/image/profile.png",
    caption: "instagram is best",
  },
  {
    id: "123",
    username: "milad Hasani",
    userImg: "/image/profile.png",
    img: "/image/profile.png",
    caption: "instagram is best",
  },
  {
    id: "123",
    username: "milad Hasani",
    userImg: "/image/profile.png",
    img: "/image/profile.png",
    caption: "instagram is best",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
