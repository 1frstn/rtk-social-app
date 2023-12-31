import { useSelector } from "react-redux"
import { getPostsError, getPostsStatus, selectAllPosts} from "./postsSlice";
import PostsExpert from "./PostsExpert";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)
    
   


   let content ;
   if(postsStatus === 'loading'){
    content = <p>Loading...</p>;
   } else if (postsStatus === 'succeeded'){
        const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
        content = orderedPosts.map((post) => <PostsExpert key={post.id} post={post} />)
   } else if (postsStatus === 'failed'){
        content = <p>{error}</p>
   }

    return (
      <section>
        <h2>Posts</h2>
        {content}
      </section>
    )
}

export default PostsList