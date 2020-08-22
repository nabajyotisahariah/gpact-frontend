import React from 'react';

function Title() {

    console.log("Render.Title")
    return (
        <div>
            <h2>Callback Hooks</h2>
        </div>
    );
}

export default React.memo(Title);