import React from "react";
import Axios from "axios";
//https://api.github.com/users/gaearon
class Form extends React.Component {
    //ref attribute
    //userNameInput = React.createRef();
    state = {
        userName: ''
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        //access value when using ref
        //console.log(this.userNameInput.current.value);

        //access value when using state
        //console.log(this.state.userName);

        const resp = await
        Axios.get(`https://api.github.com/users/${this.state.userName}`);

        this.props.onSubmit(resp.data);
        this.setState({ userName: '' });

    };

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* Using ref here */}
                {/* <input type="text" placeholder="GitHub username" ref={this.userNameInput} /> */}
                <input type="text" value={this.state.userName} onChange={ event => this.setState({userName:event.target.value}) } placeholder="GitHub username" />
                <button>Add card</button>
            </form>
        );
    };
}

export default Form;