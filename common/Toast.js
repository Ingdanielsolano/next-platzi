import { oneOf, string } from "prop-types";
import DangerToast from "./Toast/Danger";
import ErrorToast from "./Toast/Error";
import InfoToast from "./Toast/Info";
import SuccessToast from "./Toast/Success";

const toastTypes = {
  info: (...props) => <InfoToast {...props} />,
  success: (...props) => <SuccessToast {...props} />,
  danger: (...props) => <DangerToast {...props} />,
  error: ({ message, title }) => <ErrorToast message={message} title={title} />,
};

/**
 * Random Component
 * @augments {Component<Props, State>}
 */
const Toast = ({ type, message, title }) => (
  <div className="flex flex-col justify-center">
    {toastTypes[type]({ message, title })}
  </div>
);

Toast.propTypes = {
  title: string.isRequired,
  message: string.isRequired,
  /**Types: success | error | info | danger */
  type: oneOf(["success", "info", "error", "danger"]),
};

export default Toast;
