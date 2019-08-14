import React from "react";
import Axios from "axios";

const Form = (props) => {
    const [state, setState] = React.useState({
        userName: ''
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        //access value when using ref
        //console.log(this.userNameInput.current.value);

        //access value when using state
        //console.log(this.state.userName);

        const resp = await
        Axios.get(`https://api.github.com/users/${state.userName}`);
        //console.log(resp);

        props.onSubmit(resp.data);
        setState({ userName: '' });

    };
    return (
        <form onSubmit={handleSubmit}>
            {/* Using ref here */}
            {/* <input type="text" placeholder="GitHub username" ref={this.userNameInput} /> */}
            <input type="text" value={state.userName || ''} onChange={ event => setState({userName: event.target.value}) } placeholder="GitHub username" />
            <button>Add card</button>
        </form>
    );
};

export default Form;