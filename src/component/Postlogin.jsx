import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Postlogin() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [paw, setpaw] = useState('')
    
    function send() {
        const data = {
            Name: name,
            Email: email,
            Password: paw
        }
        axios.post('https://66fa5902afc569e13a9b5b81.mockapi.io/id', data)
            .then(alert("success"))
            .catch(err => console.log(err)
            )
    }

    // get 
    const [view, setview] = useState([])

    useEffect(() => {
        axios.get('https://66fa5902afc569e13a9b5b81.mockapi.io/id')
            .then((res) => setview(res.data))
            .catch(err => console.log(err)
            )
    })

    return (
        <div>
            <h1>Post Login Page</h1>
            <label>Enter Your Name</label>
            <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} />
            <br /> <br />
            <label >Enter Your Email Id</label>
            <input type="email" name="" id="" value={email} onChange={(e) => { setemail(e.target.value) }} />
            <br /> <br />
            <label >Enter Your Password</label>
            <input type="password" name="" id="" value={paw} onChange={(e) => { setpaw(e.target.value) }} />
            <br /> <br />
            <button onClick={send}>Submit</button>

            {/* get */}
            <table className='table'>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        view.map((item, index) => {

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Password}</td>
                                    <td>
                                        <Link to={`/update/${item.id}`} className='btn btn-success'>edit</Link>
                                        <button className='btn btn-danger' onClick={() => {
                                            axios.delete(`https://66fa5902afc569e13a9b5b81.mockapi.io/id/${item.id}`)
                                                .then(alert("data is deleted"))
                                                .catch(err => console.log(err)
                                                )
                                        }}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}
