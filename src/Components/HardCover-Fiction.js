import React from 'react'
import BookItem from './BookItem.js';
export default function HardCoverFiction() {
    return (
        <div class='container-fluid bg-light'>
            <h2 class='bg-light'>HardCover</h2>
                <div className={'row bg-light'}>
                    <div className='col-lg-3 text-center mb-5 mb-lg-0 border-right'>
                        <BookItem
                            url="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kezp8EBRqSYDAOEGW2vKoKJxNl0ny0up"
                            value={'$2.50'}
                            ind={0}
                        />
                    </div>
                    <div className='col-lg-3 text-center mb-5 mb-lg-0 border-right'>
                        <BookItem
                            // url="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kwbFp1dnzGkGK0nRL2bdPGqfmZEPTYB5"
                            value={'$2.50'}
                            ind={1}
                        />
                    </div>
                    <div className='col-lg-3 text-center mb-5 mb-lg-0 border-right'>
                        <BookItem
                            // url="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kwbFp1dnzGkGK0nRL2bdPGqfmZEPTYB5"
                            value={'$2.50'}
                            ind={2}
                        />
                    </div>
                    <div className='col-lg-3 text-center mb-5 mb-lg-0'>
                        <BookItem
                            // url="https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kwbFp1dnzGkGK0nRL2bdPGqfmZEPTYB5"
                            value={'$2.50'}
                            ind={3}
                        />
                    </div>
                </div>
            </div>
    )
}
