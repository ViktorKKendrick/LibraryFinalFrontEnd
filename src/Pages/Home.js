import React from 'react';
import BooksList from '../Components/BooksList.js';
import Search from '../Components/Search.js';
import NavigationBar from '../Components/NavigationBar.js'

export default function Home() {
    
    return (
        <div>
            <NavigationBar />
            <Search/>
            <BooksList />

        </div>
    )
}
