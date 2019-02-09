import React from "react";
import { connect } from "react-redux";
import Pagination from "react-js-pagination";
import { CHANGE_PAGE } from "../../constants/actionTypes";
import ReactTable from "react-table";

import 'bootstrap/dist/css/bootstrap.css';
import "react-table/react-table.css";

const mapStateToProps = state => ({
    ...state.common
});

const mapDispatchToProps = dispatch => ({
    onPageChange: value => dispatch({ type: CHANGE_PAGE, value })
});

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        this.props.onPageChange(pageNumber);
    }

    render() {
        if (this.props.data) {

            const columns = [{
                Header: d => <b>Movie Title</b>,
                accessor: 'movie_title',
                filterable: false,
                sortable: false,
                minWidth: 300
              }, {
                Header: 'Director Name',
                accessor: 'director_name',
                filterable: false,
                sortable: false,
                minWidth: 180
              }, {
                Header: 'Actor I',
                accessor: 'actor_1_name',
                filterable: false,
                sortable: false,
                minWidth: 180
              }, {
                Header: 'Actor II',
                accessor: 'actor_2_name',
                filterable: false,
                sortable: false,
                minWidth: 180
              }, {
                Header: 'Genres',
                accessor: 'genres',
                minWidth: 200
              }, {
                Header: 'Language',
                accessor: 'language'
              }, {
                Header: 'Country',
                accessor: 'country'
              }, {
                Header: 'Content Rating',
                accessor: 'content_rating',
                filterable: false,
                sortable: false
              }, {
                Header: 'Budget',
                accessor: 'budget',
                minWidth: 130
              }, {
                Header: 'Title Year',
                accessor: 'title_year'
              }, {
                Header: 'Plot Keywords',
                accessor: 'plot_keywords',
                filterable: false,
                sortable: false,
                minWidth: 200
              }, {
                id: 'movieIMDBLink', // Required because our accessor is not a string
                Header: 'Movie IMDB Link',
                accessor: d => <a rel="noopener noreferrer" href={d.movie_imdb_link} target="_blank">{d.movie_imdb_link}</a>,
                filterable: false,
                sortable: false,
                minWidth: 200
              }];

            const data = this.props.data;
            const moviesLength = data.length;
            const page = this.props.activePage - 1;
            let value = page * 10;
            let dataToDisplay = data.slice(value, value + 10);

            return (
                <section>
                    <div className="container">
                        <div className="feed-boxes">
                            <h3 className="subtitle title">Movies - Sweeten</h3>
                        </div>
                        <ReactTable 
                            data={dataToDisplay} 
                            columns={columns}
                            defaultPageSize={10}
                            filterable={true}
                            className="-striped -highlight react-t"
                            showPagination={false}
                        />
                        <Pagination
                          activePage={this.props.activePage}
                          itemsCountPerPage={10}
                          totalItemsCount={moviesLength}
                          pageRangeDisplayed={5}
                          onChange={this.handlePageChange}
                        />
                        <h5>Notes</h5>
                        <p>* Click on the Column Header (Title) to SORT.</p>
                        <p>* Search and Sort using <b>Genres, Language, Country, Budget & Title Year.</b></p>
                    </div>
                </section>
            );
        } else {
            return <div />;
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);