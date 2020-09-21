import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../../actions'
class LoginContainer extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        succcess: false
    }

    handleInputEmail = (event) => {
        this.setState({ email: event.taget.value })
    }
    handleInputPassword = (event) => {
        this.setState({ password: event.taget.value })
    }
    // handleInputEmail = () => {
    //     this.setState({ password: event.target.value })
    // }
    submitForm = (e) => {
        e.preventDefault();
        this.props.dispatch(loginUser(this.state))
    }

    componentWillReceiveProps(nextProps) { //when we get a props and you can use it as a verification
        if (nextProps.user.login.isAuth) {
            this.props.history.path('/user') //redict method
        }


    }

    render() {
        let user = this.props.user;
        return (
            <div className="rl_container">
                <form onSumbit={this.submitForm}>

                    <div className="form_element">
                        <input
                            type="email"
                            placeholder="Enter your mail"
                            value={this.state.email}
                            onChange={this.handleInputEmail}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={this.state.password}
                            onChange={this.handleInputPassword}
                        />
                    </div>

                    <button type="submit">Log In</button>
                    <div className="error">
                        {
                            user.login ?
                                <div>{user.login.message}</div>
                                : null
                        }
                    </div>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(LoginContainer);
