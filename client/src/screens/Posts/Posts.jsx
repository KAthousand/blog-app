import React, { useState, useEffect } from "react";
import "./Posts.css";

import Post from "../../components/Post/Post";
import Search from "../../components/Search/Search";
import Layout from "../../components/shared/Layout/Layout";
import { getPosts } from "../../services/posts";

const Posts = (props) => {
  const [allPosts, setAllPosts] = useState([]);
  const [queriedPosts, setQueriedPosts] = useState([]);
  // const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setAllPosts(posts);
      setQueriedPosts(posts);
    };
    fetchPosts();
  }, []);

  // const handleSort = (type) => {
  //   setSortType(type);
  //   switch (type) {
  //     case "name-ascending":
  //       setQueriedPosts(AZ(queriedPosts));
  //       break;
  //     case "name-descending":
  //       setQueriedPosts(ZA(queriedPosts));
  //       break;
  //     case "price-ascending":
  //       setQueriedPosts(lowestFirst(queriedPosts));
  //       break;
  //     case "price-descending":
  //       setQueriedPosts(highestFirst(queriedPosts));
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const handleSearch = (event) => {
    const newQueriedPosts = allPosts.filter((post) =>
      post.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedPosts(newQueriedPosts);
  };

  const handleSubmit = (event) => event.preventDefault();

  const postsJSX = queriedPosts.map((post, index) => (
    <Post
      _id={post._id}
      name={post.name}
      imgURL={post.imgURL}
      price={post.price}
      key={index}
    />
  ));

  return (
    <Layout>
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      {/* <Sort onSubmit={handleSubmit} onChange={handleSort} /> */}
      <div className="posts">{postsJSX}</div>
    </Layout>
  );
};

export default Posts;
