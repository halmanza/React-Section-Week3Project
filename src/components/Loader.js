import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

//Will display well Fetching from API

const Loader = ({dataLoading}) => {
    
    const spinnerAction=()=>{
        return <FontAwesomeIcon icon={faSun} spin size="2x"/>
    }
    return (
        <div>
            {spinnerAction()}
        </div>
    )
}

export default Loader
