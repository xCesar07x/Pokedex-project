import React from 'react';

const Pagination = ({ listPerPage, totalList }) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalList / listPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
        <div>
            <ul>
                {
                    pageNumbers.map( number => (
                        <li key={number}>
                            <a href="!#">
                                {number}
                            </a>

                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;