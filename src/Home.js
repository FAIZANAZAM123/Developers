import React from 'react'
import { Link } from 'react-router-dom'
function Home(props) {
    return (
        <>
            <div className="header h-500 d-flex align-items-center">
                <div className="container-fluid nav_bg   " >
                    <div className="row">
                        <div className="col-10 mx-auto mt-4 d-flex align-items-center flex-column ">
                            <h1 className='px-5'>Grow Your Business</h1>
                            <h2 className="my-3 ">We are the Talented Developers Team</h2>
                            <div>

                                
                                <img className='my-4' src="https://source.unsplash.com/500x500/?laptop" alt="" />
                            </div>
                            <div className='mb-4' >
                               <Link to='/Services' className='bg-primary text-white' >
                                <button >GetStarted</button>
                               </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
