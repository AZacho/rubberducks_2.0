function openEvent() {
    let show = document.getElementById('openEvent');
    show.classList.remove('d-none');
    show.innerHTML = `
    <div class="eventPopupBackground">
        <h2>Training am Montag <br>
            06. März 2023 <br>
            15:30 - 17:00 Uhr    
        </h2>
        <h2>
            Sporthalle am Gymnasium Kaltenkirchen
        </h2>
        <img src="img/own.jpg" alt="">
    </div>
    `;
    
}

function closeEvent() {
    let close = document.getElementById('eventPopup');
    show.classList.add('d-none');
}