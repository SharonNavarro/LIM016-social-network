import { templateNotifications, templateNotificationHeart, templateNotificationStar, templateNotificationComent } from "./templates/templateNotifications.js";

export default () => {

    const viewNotification = templateNotifications;
    const divElemt = document.createElement('section');
    divElemt.classList.add('classViewNotifications')
    divElemt.innerHTML = viewNotification;

    const containerGeneralNotifications = divElemt.querySelector('.containerGeneralNotifications');
    containerGeneralNotifications.innerHTML = templateNotificationHeart;
    containerGeneralNotifications.innerHTML = templateNotificationStar;
    containerGeneralNotifications.innerHTML = templateNotificationComent;

    return divElemt;
};