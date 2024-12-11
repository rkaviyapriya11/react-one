
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Certify.css';
// import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function Certify() {
    const [Name, setName] = useState('')
    const [Course, setCourse] = useState('')
    const [Certifynum, setCertifynum] = useState('')

    // const { id } = useParams()
    function send() {
        const data = {
            Name: Name,
            Course: Course,
            Certifynum: Certifynum,
        }

        axios.post('https://back-6tn1.onrender.com/add', data)
            .then(alert("success"))
            .catch(err => console.log(err))
             window.location.href='/'
    }
    // get
    const [view, setview] = useState([])
    useEffect(() => {
        axios.get('https://back-6tn1.onrender.com/find')
            .then(res => setview(res.data))
            .catch(err => console.log(err))
    })
    return (
        <div>
            <h1>Student Certificate</h1>
            <br />
            <button type="button" variant="contained" class="btn btn-danger text-align-center" id='addcertifybtn' data-bs-toggle="modal" data-bs-target="#exampleModal">
                ADD CERTIFICATES
            </button>
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
                            <input type="Number" placeholder='CERTIFICATE NUMBER'
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
            <br /> <br />
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
                                    <td>{item.Certifynum}</td>
                                    <td>
                                        <Link to={`/update/${item._id}`} className='btn btn-success'>edit</Link>
                                        <button className='btn btn-danger' onClick={() => {
                                            axios.delete(`https://back-6tn1.onrender.com/remove/${item._id}`)
                                                .then(alert("data is deleted"))
                                                .catch(err => console.log(err)
                                                )
                                        }}>Delete</button>
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


