import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./styles";


const Posts = ({setCurrentId}) => {

  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log("get All Posts", posts);

  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid className={classes.container} alignItems="stretch" spacing={3} direction='reverse'>
          {posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )}



      {/* Posts
      <Post/>
      <Post/> */}
    </>
  );
};

export default Posts;
