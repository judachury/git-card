import React from "react";
import CardList from "./card-list";
import Form from "./form";
import '../git-cards/index.css';

const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook", id: 1},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu", id: 2},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook", id: 3},
];


const GitCards = (props) => {

    const [state, setState] = React.useState({
        profiles: []
    });
    
    const addGitCard = (profileData) => {
        setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }));
    };

    return (
        <div>
            <Form onSubmit={addGitCard}/>
            <div className="header">{props.title}</div>
            <CardList profiles={state.profiles} message={props.emptyMessage} />
        </div>
    );
};

export default GitCards;