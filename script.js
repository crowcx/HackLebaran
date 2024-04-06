document.addEventListener('DOMContentLoaded', function () {
    const customServerSwitch = document.getElementById('customServerSwitch');
    const customServerOptions = document.getElementById('customServerOptions');
    const bypassAgeverify = document.getElementById('bypassAgeverify');
    const bypassAgeverifyOptions = document.getElementById('bypassAgeverifyOptions');
    const THRChecker = document.getElementById('THRChecker');
    const THRCheckerOptions = document.getElementById('THRCheckerOptions');
    const openHouseDetect = document.getElementById('openHouseDetect');
    const openHouseOptions = document.getElementById('openHouseOptions');

    customServerSwitch.addEventListener('change', function () {
        customServerOptions.style.display = customServerSwitch.checked ? 'block' : 'none';
    });

    bypassAgeverify.addEventListener('change', function () {
        bypassAgeverifyOptions.style.display = bypassAgeverify.checked ? 'block' : 'none';
    });

    THRChecker.addEventListener('change', function () {
        THRCheckerOptions.style.display = THRChecker.checked ? 'block' : 'none';
    });

    openHouseDetect.addEventListener('change', function () {
        openHouseOptions.style.display = openHouseDetect.checked ? 'block' : 'none';
    });

    const learnMoreButton = document.getElementById('learnMore');
    learnMoreButton.addEventListener('click', function () {
        window.open('https://wir.mbeek.my.id');
    });

    const cheatForm = document.getElementById('cheatForm');
    cheatForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const nama = document.getElementById('nama').value;
        const userID = document.getElementById('userID').value;
        const message = `Wahai ${nama} dengan ID ${userID}, cheat telah selesai dikonfigurasi`;
        alert(message);
    });
});