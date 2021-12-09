import React from 'react'
import HardCoverFiction from './HardCover-Fiction.js';
export default function API2() {
    return (
        <div>
            <div class='container-fluid bg-light'>
            <h2 class='bg-light'>Mass Market Paperback</h2>
            <div class='row'>
            <HardCoverFiction
            url='https://api.nytimes.com/svc/books/v3/lists/current/mass-market-paperback.json?api-key=eY5EDXQ8U2bCccZj0cqaIwHMOmDeGDR7'
            ind={0}
            />
            </div>
            <h2 class='bg-light'>Hardcover Advice</h2>
            <div class='row'>
            <HardCoverFiction
                url='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-advice.json?api-key=eY5EDXQ8U2bCccZj0cqaIwHMOmDeGDR7'
                ind={0}
                />
            </div>
            <h2 class='bg-light'>Paperback Advice</h2>
            <div class='row'>
                <HardCoverFiction
                url='https://api.nytimes.com/svc/books/v3/lists/current/paperback-advice.json?api-key=eY5EDXQ8U2bCccZj0cqaIwHMOmDeGDR7'
                ind={0}
                />
            </div>
            <h2 class='bg-light'>Advice How-To and Miscellaneous</h2>
            <div class='row'>
            <HardCoverFiction
                url='https://api.nytimes.com/svc/books/v3/lists/current/advice-how-to-and-miscellaneous.json?api-key=eY5EDXQ8U2bCccZj0cqaIwHMOmDeGDR7'
                ind={0}
                />
            </div>
        </div>
        </div>
    )
}