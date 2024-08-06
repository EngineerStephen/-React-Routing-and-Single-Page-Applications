import React from "react";
// import NavigationBar from "./NavigationBar";
import "./App.css"; 

export function Home(){
    return (
        <div className="home-page">
        <NavigationBar />
        <h1>Welcome to ComicVerse: Your Ultimate Comic Book Library Management System</h1>
        <p>Dive into a world where comic book management meets cutting-edge technology. ComicVerse is designed to streamline and enhance your comic book collection experience, whether you're a casual reader, an avid collector, or a comic book store owner.</p>

        <h2>Features</h2>
        <ul>
            <li>Manage your comic book collection with ease</li>
            <li>Track your comic book inventory</li>
            <li>Keep tabs on your favorite comic book series</li>
            <li>Stay updated on the latest comic book releases</li>
            <li>Connect with fellow comic book enthusiasts</li>
        </ul>
        <h2>Get Started</h2>
        <p>Ready to embark on your comic book journey? Sign up for a free account and start exploring the world of ComicVerse
        </p>

        <h2>Sign Up</h2>
        <p>Sign up for a free account and start managing your comic book collection today.</p>
        <button>Sign Up</button>
        
        </div>
    )
    }

    export default Home;