import { func, instanceOf } from "prop-types";

const Pagination = ({ setPagination, pagination }) => {
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        Showing page {pagination?.page + 1}
      </div>
      <div className="flex-1 flex justify-end sm:hidden">
        <button
          href="."
          onClick={(e) => {
            e.preventDefault();
            setPagination({ ...pagination, page: pagination?.page - 1 });
          }}
          disabled={pagination?.page < 1}
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
            pagination?.page < 1 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Previous
        </button>
        <button
          href="."
          onClick={(e) => {
            e.preventDefault();
            setPagination({ ...pagination, page: pagination?.page + 1 });
          }}
          disabled={!pagination?.hasMore}
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ${
            pagination?.hasMore ? "cursor-pointer" : "cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  setPagination: func.isRequired,
  pagination: instanceOf(Object).isRequired,
};

export default Pagination;
