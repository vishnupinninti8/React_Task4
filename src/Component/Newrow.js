import React from 'react'

const Newrow = (props) => {

    let { id, image, firstName, lastName, email, username, university, domain, ip, gender } = props;

    return (
        <>
            <tr>
                <td>{id}</td>
                <td><img style={{height: '30px', width:'30px' }} src={image} alt="" /></td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{gender}</td>
                <td>{email}</td>
                <td>{username}</td>
                <td>{domain}</td>
                <td>{ip}</td>
                <td>{university}</td>
            </tr>
        </>
    )
}

export default Newrow
