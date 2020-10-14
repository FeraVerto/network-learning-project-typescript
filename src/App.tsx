import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="" alt=""/>
            </header>

            <nav className='nav'>
                <ul>
                    <li><a>Profile</a></li>
                    <li><a>Messages</a></li>
                    <li><a>News</a></li>
                    <li><a>Music</a></li>
                    <li><a>Settings</a></li>
                </ul>
            </nav>

            <main className='main'>
                <div>
                    <img className='main-img'
                         src="https://www.meme-arsenal.com/memes/0e09ef79001e05420d2cf37ae1f246c3.jpg" alt="Инженер"/>
                </div>
                <div>
                    ava + descriptions
                </div>
                <div>
                    My posts
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>
            </main>

        </div>
    );
}

export default App;
