import { useState } from "react";

const usePagination = (options) => {
  const defaultOptions = {
    page: 0,
    hasMore: false,
  };
  const [pagination, setPagination] = useState({
    ...defaultOptions,
    ...options,
  });

  const toggleHasMore = (hasMore) => {
    setPagination({ ...pagination, hasMore });
  };

  return {
    pagination,
    setPagination,
    toggleHasMore,
  };
};

export default usePagination;
