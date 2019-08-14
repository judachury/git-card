import React from "react";
import CardList from "./cardlist";
import Form from "./form";
import './index.css';

//// gaearon, sophiebits, sebmarkbage, bvaughn

class App extends React.Component {
    /* constructor(props) {
        super(props);
        this.state = {
            profiles: testData
        };
    } */
    
    //future syntax
    state = {
        profiles: [],
    };

    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles: [...prevState.profiles, profileData],
        }));
    };

    render () {
        return (
            <div>
                <Form onSubmit={this.addNewProfile} />
                <div className="header">{this.props.title}</div>
                <CardList profiles={this.state.profiles} />
            </div>
        );
    };    
};

export default App;