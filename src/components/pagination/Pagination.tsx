import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss'

type PaginationProps = {
  onChangePage: (page: number) => void;
  currentPage: number;
}

const Pagination:React.FC<PaginationProps> = ({onChangePage, currentPage}) => {
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
      />
    </div>
  );
};

export default Pagination;
