import React from 'react';
// import MyCarousel from '../Components/Carousel.js';
import BooksList from '../Components/BooksList.js';
import { Container, Form } from 'react-bootstrap';
import Search from '../Components/Search.js';

export default function Home() {
    return (
        <div>
            <Search/>
            {/* <MyCarousel/> */}
            <BooksList />

        </div>
    )
}
