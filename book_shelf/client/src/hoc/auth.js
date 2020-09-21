import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../actions'


export default function (CompossedClass, reload) { //this function will return a Class base 
    class AuthenticationCheck extends Component {
        state = {
            loading: true
        }

        componentWillMount() {
            this.props.dispatch(auth())
        }

        componentWillReceiveProps(nextProps) {
            this.setState({ loading: false })

            if (!nextProps.user.login.isAuth) {
                if (reload === true) {
                    this.props.history.push('/login')
                }
            } else {
                if (reload === false) {
                    this.props.history.push('/user')
                }

                // 
            }

        }

        render() {

            if (this.state.loading) {
                return <div className="loader">loading..</div>
            }
            return (
                <div className="">
                    <CompossedClass {...this.props} user={this.props} />
                </div>
            )
        }
    }
    function mapStateoProps(state) {
        return {
            user: state.user
        }

    }

    return connect(mapStateoProps)(AuthenticationCheck)
} 
