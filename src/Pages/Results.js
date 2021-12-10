import React from 'react'
// import {Row} from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.js';
import Search from '../Components/Search.js';
import NavigationBar from '../Components/NavigationBar.js'
export default function Results() {
    
    const res = JSON.parse(localStorage.getItem('Results'))
    if(res.length === 0){
        console.log('no results')
        return (
            <>
            <NavigationBar/>
            <Search val={1}/>
            <h1> </h1>
            <h1 className='text-center'>No Results Found!</h1>
            </>
        )
    }
    console.log(res[0])
    // console.log('outside of the map function')
    // res.map(x => {
    //     return (

    //     )
    // })
    return (
        <>
        <NavigationBar/>
        <div className='container container-fluid'>
            <div className='row'>
            {/* <Row> */}
            {res.map((x, y) => {
                // console.log('in the map function')
                if(res[y].book_image === undefined){
                    // eslint-disable-next-line jsx-a11y/img-redundant-alt
                    res[y].book_image = '../Img/NIMG.jpg'
                }
                
                return (
                    <div className='pad col-lg-4 text-center mb-5 mb-lg-0 border-right'>
                        <div className={"card h-100 text-center my-auto"}>
                            <div className='row'>
                                <div className='col-lg-4 text-center mb-5 mb-lg-0' />
                                <div className='col-lg-4 text-center mb-5 mb-lg-0' visibility='hidden' >
                                    <img src={res[y].book_image} className="imRszin card-img-top image-fluid" alt="Book" />
                                </div>
                                <div className='col-lg-4 text-center mb-5 mb-lg-0 ' visibility='hidden' />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">{res[y].book_title}</h5>
                                <h5 className="card-title">  By {res[y].book_author}</h5>
                                <p className="card-text">{res[y].summary}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            {/* </Row> */}
            </div>
        </div>
        </>
    )


}
/* <div className='col-lg-3 text-center mb-5 mb-lg-0 border-right'>
                    <div className={"card h-100 text-center my-auto"}>
                        <div className='row'>
                            <div className='col-lg-4 text-center mb-5 mb-lg-0' />
                            <div className='col-lg-4 text-center mb-5 mb-lg-0' visibility='hidden' >
                                <img src={this.state.data.book_image} className="card-img-top image-fluid mh-50" alt="Book" />
                            </div>
                            <div className='col-lg-4 text-center mb-5 mb-lg-0 ' visibility='hidden' />
                        </div>

                        <div className="card-body">
                            <h5 className="card-title">{this.state.data.title}</h5>
                            <h5 className="card-title">  By {this.state.data.author}</h5>
                            <p className="card-text">{this.state.data.description}</p>
                        </div>
                    </div>
                </div> */
                