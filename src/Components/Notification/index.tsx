import { useEffect, useState } from "react";
import { NotificationProps } from "./NotificationInterface";
import { NotificationWrapper } from "./NotificationStyle";

const Notification: React.FC<NotificationProps> = ({ text }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);

  return <NotificationWrapper show={show}>{text}</NotificationWrapper>;
};

export default Notification;
