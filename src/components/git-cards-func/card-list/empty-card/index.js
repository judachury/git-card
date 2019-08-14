import React from "react";

const EmptyCard = (props) => {
    return (
        <div className="empty-card" style={{textAlign: 'center', padding: 10}}>
            {props.message}
        </div>
    );
};

export default EmptyCard;