import React, { useState } from 'react';
import Contact from './Contact';

interface IContact {
    name: string,
    email: string,
    age: number,
    position: string,
    images: string
}

const Contacts = () => {
    const [contact, setContact] = useState<IContact>({} as IContact)
    const [contactList, setContactList] = useState<IContact[]>([])
    const onClick = () => {
        setContactList([...contactList, contact])
        setContact({
            name: "",
            email: "",
            position: "",
            age: 0,
            images: ""
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }
    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(c => c.email !== email)
        setContactList(newContactList)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 d-block m-auto">
                    <h2 className="m-5 text-center">Player List</h2>
                    <div className="player-field">
                        <input
                            value={contact.name}
                            onChange={onChange}
                            type="text"
                            name="name"
                            className="form-control mb-2"
                            placeholder="Contact Name"

                        />
                        <input
                            value={contact.email}
                            onChange={onChange}
                            type="text"
                            name="email"
                            className="form-control mb-2"
                            placeholder="Contact Email"

                        />
                        <input
                            value={contact.age}
                            onChange={onChange}
                            type="text"
                            name="age"
                            className="form-control mb-2"
                            placeholder="Your Age"
                        />
                        <input
                            value={contact.position}
                            onChange={onChange}
                            type="text"
                            name="position"
                            className="form-control mb-2"
                            placeholder="Your Position"
                        />
                        <input
                            value={contact.images}
                            onChange={onChange}
                            type="text"
                            name="images"
                            className="form-control"
                            placeholder="Images URL"
                        />
                    </div>
                    <br />
                    <p className="text-center"><button onClick={onClick} type="button" className="btn btn-primary mb-2">Add Player</button></p>
                    {
                        contactList.map((con) => <Contact positon={con.position} age={con.age} images={con.images} name={con.name} key={con.name} email={con.email} handleRemove={handleRemove} />)
                    }
                </div>
            </div>
        </div>

    );
};

export default Contacts;