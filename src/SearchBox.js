import React from 'react';

const SearchBox = ({searchfield, onInput}) => {
    return (
        <div>
            <input 
            style={{borderRadius:'5px'}}
            type='search' 
            placeholder='Search character' 
            onChange = {onInput}
            />
        </div>
    )
}

export default SearchBox;