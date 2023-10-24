import React, { useEffect, useState } from 'react'
import './Details.css'
import Newrow from './Newrow';

const Details = () => {

    const [data, setData] = useState([]);

    const url = "https://dummyjson.com/users"

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data1 = await response.json();
            setData(data1.users)
        } catch (error) {
            console.log("You got an error while fetching the page");
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-9">
                    <h1 className='my-4'>Dummy Data</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Sno</th>
                                <th>Profile Pic</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Domain</th>
                                <th>IP</th>
                                <th>University</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">


                            {data.map((element) => {
                                return <Newrow image={element.image} email={element.email} username={element.username} university={element.university} domain={element.domain} ip={element.ip} gender={element.gender} id={element.id} firstName={element.firstName} lastName={element.lastName} />
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Details
