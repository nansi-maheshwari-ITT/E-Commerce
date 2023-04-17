import { useEffect, useState } from "react";
import { NotificationProps } from "./NotificationInterface";
import { NotificationWrapper } from "./NotificationStyle";

const Notification: React.FC<NotificationProps> = ({ text }) => {
  const [notificationVisibiltiy, setNotificationVisibiltiy] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setNotificationVisibiltiy(false);
    }, 2000);
  }, []);

  return <NotificationWrapper  show={notificationVisibiltiy}>{text}</NotificationWrapper>;
};

export default Notification;
