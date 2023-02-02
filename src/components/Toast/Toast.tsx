// viewed
import React, { useCallback, useEffect, useRef } from "react";
import { alertVariants } from "../Alerts";
import { CSSTransition } from "react-transition-group";
import { ToastProps, types } from "./types";
import Alert from "../Alerts/Alert";

const alertTypeMap = {
  [types.INFO]: alertVariants.INFO,
  [types.SUCCESS]: alertVariants.SUCCESS,
  [types.DANGER]: alertVariants.DANGER,
  [types.WARNING]: alertVariants.WARNING,
};

const Toast: React.FC<ToastProps> = ({
  toast,
  onRemove,
  style,
  delay,
  ...props
}) => {
  const timer = useRef<number>();
  const ref = useRef<HTMLDivElement>(null);
  const removeHandler = useRef(onRemove);
  const { id, title, description, type } = toast;

  const handleRemove = useCallback(
    () => removeHandler.current(id),
    [id, removeHandler]
  );

  const handleMouseEnter = () => {
    clearTimeout(timer.current);
  };

  const handleMouseLeave = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      handleRemove();
    }, delay);
  };

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      handleRemove();
    }, delay);

    return () => {
      clearTimeout(timer.current);
    };
  }, [timer, delay, handleRemove]);

  return (
    <CSSTransition nodeRef={ref} timeout={250} style={style} {...props}>
      <Alert
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        title={title}
        type={alertTypeMap[type]}
        onClick={handleRemove}
      >
        {description}
      </Alert>
    </CSSTransition>
  );
};

export default Toast;
