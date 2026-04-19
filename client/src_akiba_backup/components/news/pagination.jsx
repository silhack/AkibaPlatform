import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Pagination({ newsPerPage, totalNews, paginate, currentPage }) {
  const totalPages = Math.ceil(totalNews / newsPerPage);

  const generatePageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 10;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      let start = Math.max(currentPage - 2, 2);
      let end = Math.min(currentPage + 2, totalPages - 1);

      if (start > 2) {
        pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  const handleClick = (number) => {
    if (number !== "...") paginate(number);
  };

  const handlePrevious = () => {
    if (currentPage > 1) paginate(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) paginate(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-8">
      <nav className="inline-flex items-center space-x-1">
        <button
          onClick={handlePrevious}
          className="px-2 py-2 text-gray-600 hover:bg-gray-100 border rounded-l"
        >
          <IoIosArrowBack />
        </button>

        {generatePageNumbers().map((number, index) => (
          <button
            key={index}
            onClick={() => handleClick(number)}
            disabled={number === "..."}
            className={`px-4 py-2 text-sm border ${
              number === currentPage
                ? "bg-normal-blue text-white"
                : "text-gray-700 bg-white hover:bg-gray-100"
            }`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={handleNext}
          className="px-2 py-2 text-gray-600 hover:bg-gray-100 border rounded-r"
        >
          <IoIosArrowForward />
        </button>
      </nav>
    </div>
  );
}
