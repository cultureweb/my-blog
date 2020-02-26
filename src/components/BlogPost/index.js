import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/data.json';

const BlogPost = props => {
    
    const [post, setPost] = useState({
        id:"",
        blogCategory:"",
        blogTitle : "",
        slug: "",
        postedOn: "",
        author: "",
        blogImage: "",
        blogText: ""
    });
    const [postId, setPostId] = useState("");

useEffect(()=>{
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post => post.id == postId);
    console.log(post)
    setPost(post);
    setPostId(postId)

}, [post, props.match.params.postId]);

    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span> 
                        <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted on {post.postedOn} by {post.author} Blogging tips</span>
                </div>
                <div className="postImageContainer">
                    <img src={post && post.blogImage ? require(`../../blogPostImages/${post.blogImage}`) : null} alt="Post Image"/>
                </div>
                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                </div>
            </Card>
        </div>
    )
}


export default BlogPost;
