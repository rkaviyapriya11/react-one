import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Updatelogin() {
    const [Name, setName] = useState('')
    const [Course, setCourse] = useState('')
    const [Certifynum, setNumber] = useState('')
    const {id} = useParams()

    useEffect(() => {
        axios.get(`https://back-6tn1.onrender.com/find/${id}`)
            .then(res => {
                setName(res.data.Name)
                setCourse(res.data.Course)
                setNumber(res.data.Certifynum)
           
            }).catch((err) => console.log(err))
    },[id])

    function update(){
        axios.put('https://back-6tn1.onrender.com/changes/'+id,{
            Name: Name,
            Course: Course,
            Certifynum: Certifynum,
          
        })
        .then(() => {
            alert("inserted")
            window.location ='/certify'
        }).catch((err) => console.log(err))
    }
    return (
       <>

                            <input type="text"
                                placeholder='STUDENT NAME'
                                value={Name}
                                onChange={(e) => setName(e.target.value)}
                            /> <br /> <br />
                            <input type="text"
                                placeholder=' COURSE'
                                value={Course}
                                onChange={(e) => setCourse(e.target.value)}
                            /> <br /> <br />
                            <input type="number" 
                            placeholder='CERTIFICATE NUMBER'
                            value={Certifynum}
                                onChange={(e) => setNumber(e.target.value)}
                            /> <br /> <br />
                            <button onClick={update}>Submit</button>
              
       </>
    )
}
