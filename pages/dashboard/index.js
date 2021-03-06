/* eslint-disable @next/next/no-img-element */

import { Chart } from "@common/Chart";
import Loading from "@common/Loading";
import Pagination from "@common/Pagination";
import useFetch from "@hooks/useFetch";
import usePagination from "@hooks/usePagination";
import endpoints from "@services/api";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const { pagination, setPagination, toggleHasMore } = usePagination();
  const [loader, setLoader] = useState(false);
  const products = useFetch(
    endpoints.products.getProducts(5, pagination.page),
    setLoader
  );

  useEffect(() => {
    if (pagination.hasMore !== products?.length > 0)
      toggleHasMore(products?.length > 0);
  }, [products, toggleHasMore, pagination]);

  const categoryNames = products?.map((product) => product.category.name);

  const countOcurrences = (arr) =>
    arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  const data = {
    datasets: [
      {
        label: "Categories",
        data: countOcurrences(categoryNames),
        borderWidth: 2,
        backgroundColor: [
          "#ffbb11",
          "#c0c0c0",
          "%50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
      },
    ],
  };

  return (
    <>
      {loader && <Loading />}
      <Chart className="mb-8 mt-2" chartData={data} />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Id
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={`Product-item-${product.id}`}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={
                                product.images?.length > 0
                                  ? product.images[0]
                                  : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                              }
                              alt="avatar"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {product.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.category.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {new Intl.NumberFormat("es-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(product.price)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a
                          href="/edit"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {pagination && setPagination && (
                <Pagination
                  pagination={pagination}
                  setPagination={setPagination}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
