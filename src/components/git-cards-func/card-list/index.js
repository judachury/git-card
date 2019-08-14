import React from "react";
import Card from "./card";
import EmptyCard from "./empty-card";

const display = (props) => {
    if (props.profiles.length > 0) {
        return ( props.profiles.map(profile => <Card key={profile.id} {...profile} />) );
    }
    return ( <EmptyCard message={props.message} /> );
};

const CardList = (props) => {

    return (
        <div>
            {display(props)}
        </div>
    );
};

export default CardList;