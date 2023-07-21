import { useDispatch, useSelector } from "react-redux"
import {fetchPosts, getPostsError, getPostsStatus, selectAllPosts} from "./postsSlice";
import { useEffect } from "react";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)
    
    const dispatch = useDispatch();

    useEffect(() =>{
      if(postsStatus === 'idle'){
        dispatch(fetchPosts())
      }
    },[postsStatus,dispatch])


    const orederedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
 
    const renderPosts = orederedPost.map(post => (
      
    ))

    return (
      <section>
        <h2>Posts</h2>
        {renderPosts}
      </section>
    )
}

export default PostsList