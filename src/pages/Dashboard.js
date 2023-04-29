import React from 'react'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div class="m-5 p-5">
        <div class="row m-5">
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            Special Treatment Title
                        </div>
                        <p class="card-text">
                            With Supporting text below as a natural lead-in to additional content
                        </p>
                        {/* User page Link */}
                        <Link to="/" className="btn btn-primary">Go to User Login Page</Link>
                    </div>
                </div>
            </div>

            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            Special Treatment Title
                        </div>
                        <p class="card-text">
                            With Supporting text below as a natural lead-in to additional content
                        </p>
                        {/* Hospital/dashboard 2 Link */}
                        <Link to="/dashboard2" className="btn btn-primary">Go to Hospitals</Link>
                    </div>
                </div>
            </div>

        </div>
    
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
    </div>



    


  )
}

export default Dashboard