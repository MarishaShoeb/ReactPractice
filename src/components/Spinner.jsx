import React from 'react'
import BarLoader from "react-spinners/BarLoader"

const override = {
    display: 'block',
    margin: '100px auto',
}
const Spinner = ({ loading }) => {
    return (
        <div>
            <BarLoader
                loading={loading}
                cssOverride={override}
                size={150}
                color='#4338ca'
            />
        </div>
    )
}

export default Spinner
