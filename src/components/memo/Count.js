import React from 'react';

function Count(props) {

    console.log("Redering.Count ",props)
    return (
        <div>
            {props.text} -{props.value}
        </div>
    );
}

export default React.memo(Count);