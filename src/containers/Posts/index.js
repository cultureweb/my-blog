import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import Sidebar from '../../components/Sidebar';



const Posts = props => {
    return (
        <section className="container">
            <BlogPost />
            <Sidebar />     
        </section>
    )
}



export default Posts;
