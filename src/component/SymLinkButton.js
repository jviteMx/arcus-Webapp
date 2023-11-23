import React from 'react';

const SymLinkButton = (props) => {
    return (
        <div>
            <button
                name={props.name}
                text={props.text}
                action={props.action}

            />
        </div>
    );
};

export default SymLinkButton;