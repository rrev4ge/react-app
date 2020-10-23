import React from 'react';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';
import { fetchUsers } from './../UserList/FetchUsers/index';

export function pagination(pages, component) {

  return (
    <div id='react-paginate'>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={(data) => fetchUsers(component, data.selected + 1)}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={"active"}
      />
    </div>
  );
}
