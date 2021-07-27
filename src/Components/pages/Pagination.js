import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = []
    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number =>(
                    <li key={number} className="page-item ">
                        <a onClick={() =>paginate(number)} className="page-link" href="">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
export default  Pagination;
