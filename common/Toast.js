import { oneOf, string } from "prop-types";
import DangerToast from "./Toast/Danger";
import ErrorToast from "./Toast/Error";
import InfoToast from "./Toast/Info";
import SuccessToast from "./Toast/Success";

const toastTypes = {
  info: (...props) => <InfoToast {...props} />,
  success: (...props) => <SuccessToast {...props} />,
  danger: (...props) => <DangerToast {...props} />,
  error: ({ message, time, title }) => (
    <ErrorToast message={message} title={title} time={time} />
  ),
};

/**
 * Random Component
 * @augments {Component<Props, State>}
 */
const Toast = ({ type, message, time, title }) => (
  <div className="flex flex-col justify-center">
    {toastTypes[type]({ message, time, title })}
  </div>
);

Toast.propTypes = {
  time: string.isRequired,
  title: string.isRequired,
  message: string.isRequired,
  /**Types: success | error | info | danger */
  type: oneOf(["success", "info", "error", "danger"]),
};

export default Toast;
