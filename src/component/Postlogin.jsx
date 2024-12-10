import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Postlogin() {
    const [Name, setName] = useState('')
    const [Course, setCourse] = useState('')
    const [Certifynum, setCertifynum] = useState('')
    

    function send() {
        const data = {
            Name: Name,
            Course: Course,
            Certifynum: Certifynum,
        }

        axios.post('http://localhost:2301', data)
            .then(alert("success"))
            .catch(err => console.log(err)
            )
    }

    // get 
    const [view, setview] = useState([])

    useEffect(() => {
        axios.get('http://localhost:2301/find')
            .then((res) => setview(res.data))
            .catch(err => console.log(err)
            )
    })

    return (
        <div>
            <h1>Post Page</h1>
           <div class="modal fade ms-5 " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content w-75 ms-5">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">ADD CERTIFICATE</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text"
                                placeholder='STUDENT NAME'
                                onChange={(e) => setName(e.target.value)}
                            /> <br /> <br />
                            <input type="text"
                                placeholder=' COURSE'
                                onChange={(e) => setCourse(e.target.value)}

                            /> <br /> <br />
                            <input type="number" placeholder='CERTIFICATE NUMBER'
                                onChange={(e) => setCertifynum(e.target.value)}
                            /> <br /> <br />

                        </div>
                        <div class="modal-footer ">
                            <button onClick={send} type="button" class="btn btn-danger">Add</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />

            {/* get */}
            <table className='table'>
                <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Certificate Number</th>
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
                                    <td>{item.Course}</td>
                                    <th>{item.Certifynum}</th>
                                    
                                    <td>
                                        <Link to={`/update/${item._id}`} className='btn btn-success'>Edit</Link>
                                        <button className='btn btn-danger' onClick={() => {
                                            axios.delete(`http://localhost:2301/remove/${item._id}`)
                                                .then(()=>{
                                                    alert("data is deleted by kaviya")
                                                    window.location.reload()
                                                })
                                                .catch(err=>console.log(err))
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
