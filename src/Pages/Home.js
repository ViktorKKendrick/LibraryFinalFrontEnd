import React from 'react';
// import MyCarousel from '../Components/Carousel.js';
import BooksList from '../Components/BooksList.js';
// import { Container, Form } from 'react-bootstrap';
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
