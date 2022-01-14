export const templateNotifications = `

<div class="content" > 

    <h2>Notificaciones</h2>

    <div class="containerGeneralNotifications"> </div>

</div>

`;

export const templateNotificationHeart  = (userName, urlPhoto, id) => `      

<div class="containerNotificationHeart"> 
    <div class="userProfileNotification">
        <img src= ${urlPhoto} >
    </div>
    <div class="userDescriptionNotification">
        <p class="">A <bold> ${userName}</bold> le a gustado tu publicación.</p>
    </div>
</div>

`;

export const templateNotificationStar  = (userName, urlPhoto, id) => `      

<div class="containerNotificationHeart"> 
    <div class="userProfileNotification">
        <img src= ${urlPhoto} >
    </div>
    <div class="userDescriptionNotification">
        <p class=""><bold> ${userName}</bold> añadió tu publicación a <bold>Favoritos</bold>.</p>
    </div>
</div>

`;

export const templateNotificationComent  = (userName, urlPhoto, id) => `      

<div class="containerNotificationHeart"> 
    <div class="userProfileNotification">
        <img src= ${urlPhoto} >
    </div>
    <div class="userDescriptionNotification">
        <p class=""><bold> ${userName}</bold> comentó tu publicación.</p>
    </div>
</div>

`;