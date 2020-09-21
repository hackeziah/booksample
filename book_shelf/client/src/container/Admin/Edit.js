import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBook, updateBook, deleteBook, clearBook } from '../../actions'
class EditBook extends Component {

    state = {
        formdata: {
            _id: this.props.match.params.id,
            name: '',
            author: '',
            review: '',
            pages: '',
            rating: '',
            price: ''
        }
    }
    componentDidMount(user) {
        this.props.dispatch(getBook(this.state.props.match.params.id))
    }

    handleInput = (event, name) => {
        const newFormData = {
            ...this.state.formdata
        }
        newFormData['name'] = event.target.value
        this.setState({
            formdata: newFormData
        })
    }


    submitForm = (e) => {
        e.preventDefault()
        this.props.dispatch(updateBook(this.state.formdata))
    }

    componentWillReceiveProps(nextProps) {
        let book = nextProps.books.book

        this.setState({
            formdata = {
                _id: book.id,
                name: book.name,
                author: book.author,
                review: book.review,
                pages: book.pages,
                rating: book.rating,
                price: book.price
            }
        })
    }
    deleteBook = () => {
        this.props.dispatch(deleteBook(this.props.params.match.id))
    }

    componentWillUnmount() {
        this.props.dispatch(clearBook())
    }

    redirectUser = () => {
        setTimeout(() => {
            this.props.history.push('/user/user-reviews')
        }, 1000);
    }

    render() {

        {
            books.updateBook ? //pag meron laman
                <div className="edit_confirm">
                    Post updated , <Link to={`/books/${books.book._id}`}>
                        Click here to see your post
                        </Link>
                </div>
                : null
        }
        {
            books.postDeleted ? //pa meron action
                <div className="red_tag">
                    Post Deleted
                        {this.redirectUser()}
                </div>
                : null
        }

        <div>
            <div className="rl_container article">
                <form onSubmit={this.submitForm}>
                    <h2>Edit review</h2>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={this.state.formdata.name}
                            onChange={(event) => this.handleInput(event, 'name')}
                        />
                    </div>

                    <div className="form_element">
                        <input
                            type="text"
                            placeholder="Enter author"
                            value={this.state.formdata.author}
                            onChange={(event) => this.handleInput(event, 'author')}
                        />
                    </div>

                    <textarea
                        value={this.state.formdata.review}
                        onChange={(event) => this.handleInput(event, 'review')}
                    />

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter pages"
                            value={this.state.formdata.pages}
                            onChange={(event) => this.handleInput(event, 'pages')}
                        />
                    </div>

                    <div className="form_element">
                        <select
                            value={this.state.formdata.rating}
                            onChange={(event) => this.handleInput(event, 'rating')}
                        >
                            <option val="1">1</option>
                            <option val="2">2</option>
                            <option val="3">3</option>
                            <option val="4">4</option>
                            <option val="5">5</option>
                        </select>
                    </div>

                    <div className="form_element">
                        <input
                            type="number"
                            placeholder="Enter Price"
                            value={this.state.formdata.price}
                            onChange={(event) => this.handleInput(event, 'price')}
                        />
                    </div>

                    <button type="submit">Edit review</button>
                    <button type="submit" onClick={this.deleteBook}> Delete review</button>
                </form>
            </div>
        </div>


    }
}
function mapStateToProps(state) {
    books: state.books
}

export default connect(mapStateToProps)(EditBook)
