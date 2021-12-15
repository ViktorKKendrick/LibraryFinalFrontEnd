import React from 'react'
import HardCoverFiction from './HardCover-Fiction.js';
export default function API1() {
    return (
        <div>
            <div className='container-fluid bg-light'>
                <h2 className='bg-light'>HardCover Fiction</h2>
                <div className='row'>
                    <HardCoverFiction
                        url='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kezp8EBRqSYDAOEGW2vKoKJxNl0ny0up'
                        ind={0}
                    />
                </div>
                <h2 className='bg-light'>Trade Fiction Paperback</h2>
                <div className='row'>
                    <HardCoverFiction
                        url='https://api.nytimes.com/svc/books/v3/lists/current/trade-fiction-paperback.json?api-key=kezp8EBRqSYDAOEGW2vKoKJxNl0ny0up'
                        ind={0}
                    />
                </div>
                <h2 className='bg-light'>HardCover Nonfiction</h2>
                <div className='row'>
                    <HardCoverFiction
                        url='https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=kezp8EBRqSYDAOEGW2vKoKJxNl0ny0up'
                        ind={0}
                    />
                </div>
                <h2 className='bg-light'>Paperback Nonfiction</h2>
                <div className='row'>
                    <HardCoverFiction
                        url='https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=kezp8EBRqSYDAOEGW2vKoKJxNl0ny0up'
                        ind={0}
                    />
                </div>
            </div>
        </div>
    )
}
