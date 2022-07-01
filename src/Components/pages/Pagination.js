// import React from 'react'
// import "../../App.css";

// const Pagination = ({postsPerPage, totalPosts, paginate}) => {
//     const pageNumbers = []
//     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//         pageNumbers.push(i)
//     }

//     return (
//         <nav aria-label="Page navigation">
//             <ul className="pagination justify-content-center">
//                 {pageNumbers.map(number => (
//                     <li key={number} className="page-item ">
//                         <a onClick={(e) => paginate(e, number)} className="page-link" href="">{number}</a>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     )
// }
// export default Pagination;
import React from "react";
import ReactPaginate from "react-paginate";
import { useHistory, useParams } from "react-router-dom";

function Pagination({ page }) {
  // const router = useRouter()
  // const {pathname, query} = router
  const history = useHistory();
  let { params } = useParams();
  // console.log(params);

  const handlePageClick = (event) => {
    if (event.selected + 1 != (page.num_pages < 2 ? 1 : 2 || 1)) {
      //   history.push({ pathname, query: { ...query, page : event.selected + 1} })
      let pathname = window.location.pathname;
      // returns path: '/app/books'
      let searchParams = new URLSearchParams(window.location.search);
      // returns the existing query string: '?type=fiction&author=fahid'
      searchParams.set();
      history.push({
        pathname: pathname,
        search: searchParams.toString(),
      });
    }
  };
  return (
    <div className="mt-5">
      <ReactPaginate
        breakLabel={"..."}
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={3}
        pageCount={page.num_pages}
        previousLabel="<<"
        initialPage={page.num_pages < 2 ? 0 : (2 || 1) - 1}
        renderOnZeroPageCount={null}
        //   containerClassName={"flex"}
        //   pageClassName={" px-3 py-0 flex items-center rounded-sm"}
        //   pageLinkClassName={"text-black-300"}
        //   previousClassName={"text-blue-400 p-2 flex items-center rounded-sm"}
        //   nextClassName={"text-blue-400 p-2 flex items-center rounded-sm"}
        //   activeClassName={"bg-blue-600 text-white"}
      />
    </div>
  );
}

export default Pagination;
