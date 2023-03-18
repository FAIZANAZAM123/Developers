import React, { useState } from 'react'

function Contact() {
    const [data, setdata] = useState({
        fname:'',lname:'',pass:'',email:''
    })
    const lets =(event) => {
      let name=event.target.name;
      let value=event.target.value;

            setdata((value)=>{




                return{
                    ...value,
                    [name]:value     
                           }
            })





    }
    
    
    return (
        <>
            <div className="my-5">

                <h1 className='text-center'>ContactUS</h1>


            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 col-6 mx-auto">
                        <div class="form-floating mb-3">
                            <input  onChange={lets} name='fname' type="text" class="form-control" id="floatingInput" placeholder="Firstname" />
                            <label for="floatingInput">First Name</label>
                        </div>
                        <div class="form-floating">
                            <input  onChange={lets} name='lname' type="text" class="form-control" id="floatingPassword" placeholder="Last Name" />
                            <label for="floatingPassword">Last Name</label>
                        </div>
                        <br />
                        <div class="form-floating mb-3">
                            <input  onChange={lets} name='email' type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div class="form-floating">
                            <input  onChange={lets} name='pass' type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
