const DangerToast = () => (
  <div
    className="bg-yellow-500 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
    id="static-example"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-mdb-autohide="false"
  >
    <div className="bg-yellow-500 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-yellow-400 rounded-t-lg">
      <p className="font-bold text-white flex items-center">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="exclamation-triangle"
          className="w-4 h-4 mr-2 fill-current"
          role="img"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
          ></path>
        </svg>
        MDBootstrap
      </p>
      <div className="flex items-center">
        <p className="text-white opacity-90 text-xs">11 mins ago</p>
        <button
          type="button"
          className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
          data-mdb-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
    <div className="p-3 bg-yellow-500 rounded-b-lg break-words text-white">
      Hello, world! This is a toast message.
    </div>
  </div>
);

export default DangerToast;
