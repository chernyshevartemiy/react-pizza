import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss'


const Pagination = ({onChangePage, currentPage}) => {
  return (
    <div>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        forcePage={currentPage - 1}
        pageCount={3}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
