import React from 'react';
import "./Contact.css"

interface IProps {
    name: string,
    email?: string,
    images: string,
    age : number,
    positon: string
    handleRemove: (email: string) => void

}

const Contact = ({ name, images, positon, age, email = "N/A", handleRemove }: IProps) => {
    return (

        <div className="container">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-sm-5">
                        <img className="card-img PlayerImage mb-2" src={images} alt="Player Image" />
                        <h6 className="card-title">Name: {name}</h6>
                    </div>
                    <div className="col-sm-7">
                        <div className="card-body">
                            <p>Email : {email}</p>
                            <p>Age : {age}</p>
                            <p>Positon : {positon}</p>
                            <a href="#" onClick={() => handleRemove(email)} className="btn btn-danger">Remove</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;