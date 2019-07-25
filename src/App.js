import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container py-3">
                    <div className="d-inline-block font-weight-bold float-left">Logo</div>
                    <div className="float-right menu">
                        <a onClick={(e)=>{e.preventDefault()}} href="#" className="btn btn-outline-dark ml-1">Upload CV</a>
                        <a onClick={(e)=>{e.preventDefault()}} href="#" className="btn btn-outline-dark ml-1">Preview the upload CV's</a>
                        <a onClick={(e)=>{e.preventDefault()}} href="#" className="btn btn-outline-dark ml-1">About Us</a>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </header>
            <div className="container">
                <div className="row mt-4 mb-3">Upload CV</div>
                <form>
                    <div className="row">
                        <input className="col-sm-12 col-md-4 form-control" placeholder="First Name"/>
                        <input className="col-sm-12 col-md-4 offset-md-4 form-control" placeholder="Last Name"/>
                    </div>
                    <div className="row my-1">
                        <input className="col-sm-12 col-md-4 form-control" placeholder="University"/>
                        <input className="col-sm-12 col-md-4 offset-md-4 form-control" placeholder="Major"/>
                    </div>
                    <div className="row my-4">
                        <button className="btn btn-outline-dark ml-auto mr-auto" onClick={(e) => {
                            e.preventDefault()
                        }}>Browse Files
                        </button>
                    </div>

                    <div className="row my-2">
                        <button className="btn btn-primary ml-auto mr-auto" onClick={(e) => {
                            e.preventDefault()
                        }}>Submit your CV
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;