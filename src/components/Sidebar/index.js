import React from 'react';
import './style.css';
import Card from '../UI/Card';

const Sidebar = props => {
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
                    <div className="recentPost">
                        <h3 className="recentPostTitle">Post Title</h3>
                     <span>February 22, 2020</span>
                    </div> 
                </div>
            </Card>
        </div>
        
    )
}

export default Sidebar;
