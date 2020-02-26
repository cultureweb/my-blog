import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/data.json';
//import Posts from '../../containers/Posts';

const Sidebar = props => {

    const [posts, setPosts] = useState([]);

useEffect(()=>{
    const posts = blogPost.data;;
    setPosts(posts);
}, [posts]);

    return (
        <div className="sidebarContainer">
            <Card style={{marginBottom:'20px', padding:'20px', boxsizing:'border-box'}}>
                <div className="cardHeader">
                    <span>About Me</span>
                </div>
                <div className="profileImageContainer">
                    <img 
                        src={require('../../assets/images/profil.jpg')} 
                        alt="profil image" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Cédric Milius. I am a junior frontend and backend developer specialization React js and node js.</p>
                </div>
            </Card>

            <Card style={{marginBottom:'20px', padding:'20px', boxsizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>
            <Card style={{marginBottom:'20px', padding:'20px', boxsizing:'border-box'}}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                <div className="recentPosts">
                    { posts.map(post => {
                        
                            return (
                                    <NavLink key={post.id} to={`/post/${post.id}`}>      
                                        <div className="recentPost">
                                            <h3 className="recentPostTitle">{post.blogTitle}</h3>
                                            <span>{post.postedOn}</span>
                                        </div>
                                    </NavLink>
                            );
                        })                  
                    }
                </div>
            </Card>
        </div>
        
    )
}

export default Sidebar;
