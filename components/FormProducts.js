/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
import Toast from "@common/Toast";
import { addProduct } from "@services/api/products";
import { func } from "prop-types";
import { useRef, useState } from "react";

const FormProduct = ({ setAlert, setOpen }) => {
  const [formErrors, setFormErrors] = useState([]);
  const formRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageValue, setImageValue] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      title: formData.get("title"),
      price: parseInt(formData.get("price")),
      description: formData.get("description"),
      categoryId: parseInt(formData.get("category")),
      images: [imageValue.name],
    };
    const actualErrors = [];
    if (!data.title || data.title === "")
      actualErrors.push("Title is required");
    if (!data.price || data.price === 0) actualErrors.push("Title is required");
    if (!data.description || data.description === "")
      actualErrors.push("Description is required");
    if (!data.images.length === 0 || data.images[0] === "")
      actualErrors.push("Image is required");

    if (actualErrors.length > 0) return setFormErrors(actualErrors);

    addProduct(data)
      .then((response) => {
        console.log({ response });
        setAlert({
          active: true,
          message: "Product saved",
          type: "success",
          autoClose: true,
        });
        setOpen(false);
      })
      .catch((error) => {
        setAlert({
          active: true,
          message: error.message,
          type: "error",
          autoClose: true,
        });
        setOpen(false);
      });

    console.log(data);
  };

  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="overflow-hidden">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("The title is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  required
                  min={1}
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "The price is required and must be greater than 0"
                    )
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  autoComplete="category-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="1">Clothes</option>
                  <option value="2">Electronics</option>
                  <option value="3">Furniture</option>
                  <option value="4">Toys</option>
                  <option value="5">Others</option>
                </select>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  autoComplete="description"
                  rows="3"
                  className="form-textarea mt-1 block w-full mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  required
                  onInvalid={(e) =>
                    e.target.setCustomValidity("The description is required")
                  }
                  onInput={(e) => e.target.setCustomValidity("")}
                />
              </div>
              <div className="col-span-6">
                <div>
                  <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="images"
                  >
                    Cover photo
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    {!imagePreview && (
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="images"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="images"
                              name="images"
                              type="file"
                              className="sr-only"
                              onChange={(event) => {
                                setImagePreview(
                                  URL.createObjectURL(event.target.files[0])
                                );
                                setImageValue(event.target.files[0]);
                              }}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    )}
                    {imagePreview && (
                      <div className="flex flex-col justify-center items-center">
                        <div>
                          <label
                            htmlFor="images"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Update image</span>
                            <input
                              id="images"
                              name="images"
                              type="file"
                              className="sr-only"
                              onChange={(event) =>
                                setImagePreview(
                                  URL.createObjectURL(event.target.files[0])
                                )
                              }
                            />
                          </label>
                        </div>

                        <div>
                          <img src={imagePreview} alt="Preview image" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      {formErrors.map((error, i) => (
        <Toast
          key={`Error-key-${i}`}
          message={error}
          title="Error validating form"
          type="error"
        />
      ))}
    </>
  );
};

FormProduct.propTypes = {
  setOpen: func.isRequired,
  setAlert: func.isRequired,
};

export default FormProduct;
