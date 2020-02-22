import React from 'react';
import './style.css';
import Card from '../UI/Card';

const BlogPost = props => {
    return (
        <div className="blogPostContainer">
            <Card>
                <div className="blogPostHeader">
                    <span className="blogCategory">Remote Jobs & Work from home jobs</span> 
                        <h1 className="postTitle">Remote work is on the rise</h1>
                    <span className="postedBy">posted on February 21,2020 by cedric Blogging tips</span>
                </div>
                <div className="postImageContainer">
                    <img src={require('../../blogPostImages/workspace.jpg')}alt="Post Image"/>
                </div>
            </Card>
        </div>
    )
}


export default BlogPost;
