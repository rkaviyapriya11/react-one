
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Certify.css';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function Certify() {
    const [name, setName] = useState('')
    const [course, setCourse] = useState('')
    const [coursenumber, setNumber] = useState('')
    const [choosefile, setChoosefile] = useState('')
    const { id } = useParams()


    function send() {
        const data = {
            Name: name,
            Course: course,
            Number: coursenumber,
            Choosefile: choosefile
        }

        axios.post('https://66fa5902afc569e13a9b5b81.mockapi.io/id', data)
            .then(alert("success"))
            .catch(err => console.log(err))
    }
    // get
    const [view, setview] = useState([])
    useEffect(() => {
        axios.get('https://66fa5902afc569e13a9b5b81.mockapi.io/id')
            .then(res => setview(res.data))
            .catch(err => console.log(err))
    })
    // post

    useEffect(() => {
        axios.get('https://66fa5902afc569e13a9b5b81.mockapi.io/id/' + id)
            .then(res => {
                setName(res.data.name)
                setCourse(res.data.course)
                setNumber(res.data.coursenumber)
                setChoosefile(res.data.choosefile)


            }).catch((err) => console.log(err))
    }, [id])

    function update() {

        axios.put('https://66fa5902afc569e13a9b5b81.mockapi.io/id' + id, {
            Name: name,
            Course: course,
            Number: coursenumber,
            Choosefile: choosefile

        })
            .then(() => {
                alert("inserted")
                window.location = '/certify'
            }).catch((err) => console.log(err))
    }


    // 
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
                            <input type="number" placeholder='CERTIFICATE NUMBER'
                                onChange={(e) => setNumber(e.target.value)}
                            /> <br /> <br />
                            <input type="text" placeholder='CHOOSE FILE'
                                onChange={(e) => setChoosefile(e.target.value)}
                                /><br /> <br />
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
                        <th>File</th>
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
                                    <td>{item.Number}</td>
                                    <td>{item.Choosefile}</td>
                                    <td>
                                        <Link to={`/update/${item.id}`} className='btn btn-success'></Link>
                                        
                                        <button className='btn btn-danger' onClick={() => {
                                            axios.delete(`https://66fa5902afc569e13a9b5b81.mockapi.io/id/${item.id}`)
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


