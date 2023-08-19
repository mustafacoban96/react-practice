import { useEffect, useState } from "react"



export const Post = () =>{
    
    const [posts,setPosts] = useState([]);

    useEffect(() =>{
        let isCancelled = false;
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) =>{
            if(!isCancelled) {
                alert("post are ready");
                setPosts(data);
                console.log(data);
            }
        });
        
        return () =>{
            isCancelled=true;
        }
    },[]);

    return (
        <div>
            {posts?.map((p) => (
                <p key={p.id}>{p.title}</p>
            ))}
        </div>
    )
}