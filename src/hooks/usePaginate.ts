import { useEffect, useState } from "react";

interface IPagination {
  currentItems: any[];
  totalPages: number;
  currentPage: number;
  nextPage: () => void;
  previousPage: () => void;
  paginate: (pageNumber: number) => void;
  pageNumbers: number[];
  firstVisiblePage: number;
  lastVisiblePage: number;
  visiblePageNumbers: { number: number; isVisible: boolean }[];
  hasPrevPages: boolean;
  hasNextPages: boolean;
}

function usePaginate(
  itemsPerPage: number,
  pageLimit: number,
  fetchData: (pageNumber: number) => any[],
  totalSize: number,
): IPagination {
  // function usePaginate(itemsPerPage: number, pageLimit: number, fetchData: (pageNumber: number) => Promise<any[]>, totalSize: number): IPagination {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState<any[]>([]);
  const totalPages = Math.ceil(totalSize / itemsPerPage);

  useEffect(() => {
    const data = fetchData(currentPage);
    // fetchData(currentPage).then(data => {
    // })
    setCurrentItems(data);
  }, [currentPage, fetchData, itemsPerPage]);

  const paginate = (pageNumber: number): void => {
    const page = Math.max(1, pageNumber);
    setCurrentPage(() => Math.min(page, totalPages));
  };

  const nextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage((activePage) => activePage + 1);
    }
  };

  const previousPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage((activePage) => activePage - 1);
    }
  };

  const getVisiblePages = (currentPage: number, pageLimit: number) => {
    let firstVisiblePage,
      lastVisiblePage,
      visiblePageNumbers = [];
    let hasPrevPages = false;
    let hasNextPages = false;

    if (totalPages <= pageLimit) {
      firstVisiblePage = 1;
      lastVisiblePage = totalPages;
    } else {
      if (currentPage <= Math.ceil(pageLimit / 2)) {
        firstVisiblePage = 1;
        lastVisiblePage = pageLimit;
        hasNextPages = true;
      } else if (currentPage + Math.floor(pageLimit / 2) >= totalPages) {
        firstVisiblePage = totalPages - (pageLimit - 1);
        lastVisiblePage = totalPages;
        hasPrevPages = true;
      } else {
        firstVisiblePage = currentPage - Math.floor(pageLimit / 2);
        lastVisiblePage = currentPage + Math.floor(pageLimit / 2);
        hasPrevPages = true;
        hasNextPages = true;
      }
    }

    for (let i = firstVisiblePage; i <= lastVisiblePage; i++) {
      visiblePageNumbers.push({ number: i, isVisible: true });
    }

    return {
      firstVisiblePage,
      lastVisiblePage,
      visiblePageNumbers,
      hasPrevPages,
      hasNextPages,
    };
  };

  const {
    firstVisiblePage,
    lastVisiblePage,
    visiblePageNumbers,
    hasPrevPages,
    hasNextPages,
  } = getVisiblePages(currentPage, pageLimit);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSize / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return {
    currentItems,
    totalPages,
    currentPage,
    nextPage,
    previousPage,
    paginate,
    pageNumbers,
    firstVisiblePage,
    lastVisiblePage,
    visiblePageNumbers,
    hasPrevPages,
    hasNextPages,
  };
}

export default usePaginate;
