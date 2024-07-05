import { useSelector } from "react-redux";
import { getPostsError, getPostsStatus, selectAllPosts } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
    const posts = useSelector(selectAllPosts) 
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
   


    // useEffect(() =>{
    //     if(postStatus ==='idle'){
          
    //         dispatch(fetchPosts())
    //     }
    // },[postStatus,dispatch])

    let content;
    if(postStatus === 'loading'){
        content = <p>"Loading..."</p>
    } else if (postStatus === 'succeeded'){
        const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
        //console.log(orderedPosts)
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post}/>)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    // const renderedPosts = orderedPosts.map(post => (
    //     <article key={post.id}>
    //         <h3>{post.title}</h3>
    //         <p>{post.content.substring(0, 100)}</p>
    //         <p className="postCredit">
    //             <PostAuthor userId={post.userId} />
    //             <TimeAgo timestamp={post.date} />
    //         </p>
    //         <ReactionButtons post={post} />
    //     </article>
    // ))

    return (
        <section>
            <h2>Posts</h2>
            {/* {renderedPosts} */}
            {content}
        </section>
    )
}
export default PostsList