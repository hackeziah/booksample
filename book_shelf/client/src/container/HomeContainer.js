import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getBooks } from '../actions';
import BookItem from '../widgetUI/bookitem'
export class HomeContainer extends Component {
    componentWillMount() {
        this.props.dispatch(getBooks(1, 0, 'desc'))
    }

    renderItem = (books) => {
        books.list ?
            books.list.map(item => {
                <BookItem {...item} key={item._id} />
            })
            : null
    }

    loadmore = () => {
        let count = this.props.books.list.length; //count the item
        this.props.dispatch(getBooks(3, count, 'desc', this.props.list))
    }


    render() {
        // console.log(this.props)

        return (
            <div>
                {this.renderItem(this.props.books)}
                <div className="loadmore"
                    onClick={this.loadmore}
                > Load More</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}


export default connect(mapStateToProps)(HomeContainer)
