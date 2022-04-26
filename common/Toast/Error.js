import { string } from "prop-types";

const ErrorToast = ({ message, title }) => (
  <div
    className="bg-red-600 shadow-lg mx-auto w-full max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
    id="static-example"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-mdb-autohide="false"
  >
    <div className="bg-red-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-red-500 rounded-t-lg">
      <p className="font-bold text-white flex items-center">
        {title != null ? title : "MDBootstrap"}
      </p>
    </div>
    <div className="p-3 bg-red-600 rounded-b-lg break-words text-white">
      {message != null ? message : "Hello, world! This is a toast message."}
    </div>
  </div>
);

ErrorToast.propTypes = {
  title: string.isRequired,
  message: string.isRequired,
};

export default ErrorToast;
