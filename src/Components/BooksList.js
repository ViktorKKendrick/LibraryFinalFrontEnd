import React from 'react'
import HardCoverFiction from './HardCover-Fiction.js';

export default function BooksList(amount) {
    return(
        <div class='container-fluid bg-light'>
            <div class='row'>
            <HardCoverFiction/>
            </div>
            <div class='row'>
            {/* <HardCoverFiction/> */}
            </div>
            <div class='row'>
            {/* <HardCoverFiction/> */}
            </div>
        </div>
    )
}
