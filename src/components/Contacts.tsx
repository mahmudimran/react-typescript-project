import React, { useState } from 'react';
import Contact from './Contact';

interface IContact {
    name: string,
    email: string,

}

const Contacts = () => {
    const [contact, setContact] = useState<IContact>({} as IContact)
    const [contactList, setContactList] = useState<IContact[]>([])

    console.log("contact", contact)

    const onClick = () => {
        setContactList([...contactList, contact])
        setContact({
            name: "",
            email: ""
        })
    }

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setContact({...contact, [e.target.name]: e.target.value})
    }
    const handleRemove = (email: string) =>{
        const newContactList = contactList.filter(c=>c.email !== email)
        setContactList(newContactList)
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-5 d-block m-auto">
                    <h2 className="m-3">Contact List</h2>
                    <div className="form-group BS">
                        <input
                            value={contact.name}
                            onChange={onChange}
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Contact Name"

                        />
                        <input
                            value={contact.email}
                            onChange={onChange}
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Contact Email"

                        />
                    
                        <button onClick={onClick} type="button" className="btn btn-primary mb-2">ADD</button>
                    </div>
                    {
                        contactList.map((con) => <Contact name={con.name} key={con.name} email ={con.email} handleRemove={handleRemove}/>)
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