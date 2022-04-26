import { XCircleIcon } from "@heroicons/react/solid";
import { func } from "prop-types";
import { instanceOf } from "prop-types";

const alertColors = {
  success: "green-100",
  error: "red-100",
};

const Alert = ({ alert, handleClose }) => {
  if (alert && alert?.autoClose) {
    setTimeout(() => {
      handleClose();
    }, 9000);
  }

  return (
    <>
      {alert?.active && (
        <div
          className={`bg-${alertColors[alert.type]} p-5 w-full rounded mb-8`}
        >
          <div className="flex space-x-3">
            <div className="flex-1 leading-tight text-sm text-black font-medium">
              {alert.message}
            </div>
            <button type="button">
              <XCircleIcon
                className="w-6 h-6 text-gray-600"
                onClick={handleClose}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Alert.propTypes = {
  alert: instanceOf(Object).isRequired,
  handleClose: func.isRequired,
};

export default Alert;
