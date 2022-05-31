import React from 'react'
import { Spinner } from 'reactstrap'
import "assets/css/dataLoading.css"

const DataLoading = () => {
    return (
        <div className='loading-frame'>
            <Spinner size="20" color='secondary'></Spinner>
        </div>
    )
}

export default DataLoading