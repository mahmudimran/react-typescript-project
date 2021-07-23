import React, { useState } from 'react';
import Contact from './Contact';

const Contacts = () => {
const [contact , setContact] = useState("")
const [contactList, setContactList] = useState <string[]>([])

console.log("contact", contact)

const onClick = () =>{
    setContactList ([...contactList, contact])
    setContact("")
}
console.log('contactList', contactList)
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-5 d-block m-auto">
                    <h2 className="m-3">Contact List</h2>
                    <div className="form-group BS">
                        <input
                            value= {contact}
                            onChange = {(e)=> setContact (e.target.value)}
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Contact Name"

                        />
                        
                        <button onClick={onClick} type="button" className="btn btn-primary mb-2">ADD</button>
                    </div>
                    {
                        contactList.map((contactName) => <Contact name={contactName} key={contactName}/>)
                    }

                    {/* <Contact name="Imran Mahmud" email="miahimran75@gmail.com" />
                    <Contact name="Someone" email="someone@gmail.com" />
                    <Contact name="Someone" /> */}
                </div>
            </div>
        </div>

    );
};

export default Contacts;