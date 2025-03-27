window.generateUserID = function() {
    const min = 1000;
    const max = 999999;
    const randomID = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("userID").value = randomID;
    return false;
};

document.addEventListener('DOMContentLoaded', function () {
    // Elemen toggle
    const customServerSwitch = document.getElementById('customServerSwitch');
    const bypassAgeverify = document.getElementById('bypassAgeverify');
    const THRChecker = document.getElementById('THRChecker');
    const openHouseDetect = document.getElementById('openHouseDetect');

    // Elemen options
    const customServerOptions = document.getElementById('customServerOptions');
    const bypassAgeverifyOptions = document.getElementById('bypassAgeverifyOptions');
    const THRCheckerOptions = document.getElementById('THRCheckerOptions');
    const openHouseOptions = document.getElementById('openHouseOptions');

    // Elemen lainnya
    const welkam = document.getElementById('welkam');
    const main = document.getElementById('main');
    const cheatForm = document.getElementById('cheatForm');
    const ageInput = document.getElementById('age');
    const THRminInput = document.getElementById('THRmin');
    const THRmaxInput = document.getElementById('THRmax');

    // Fungsi untuk mengupdate atribut required
    function updateRequiredFields() {
        // Field usia hanya required jika bypassAgeverify aktif
        ageInput.required = bypassAgeverify.checked;

        // Field THR hanya required jika THRChecker aktif
        THRminInput.required = THRChecker.checked;
        THRmaxInput.required = THRChecker.checked;
    }

    // Event listeners untuk toggle
    customServerSwitch.addEventListener('change', function() {
        customServerOptions.style.display = this.checked ? 'block' : 'none';
    });

    bypassAgeverify.addEventListener('change', function() {
        bypassAgeverifyOptions.style.display = this.checked ? 'block' : 'none';
        updateRequiredFields();
    });

    THRChecker.addEventListener('change', function() {
        THRCheckerOptions.style.display = this.checked ? 'block' : 'none';
        updateRequiredFields();
    });

    openHouseDetect.addEventListener('change', function() {
        openHouseOptions.style.display = this.checked ? 'block' : 'none';
    });

    // Inisialisasi awal
    updateRequiredFields();

    const learnMoreButton = document.getElementById('learnMore');
    learnMoreButton.addEventListener('click', function() {
        window.open('https://wir.mbeek.my.id');
    });

    cheatForm.addEventListener('submit', function(event) {
        // Validasi form sebelum submit
        if (!this.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();

            // Fokus ke field pertama yang error
            const invalidFields = this.querySelectorAll(':invalid');
            if (invalidFields.length > 0) {
                invalidFields[0].focus();
            }
        } else {
            const nama = document.getElementById('nama').value;
            const userID = document.getElementById('userID').value;
            const message = `Wahai ${nama} dengan ID ${userID}, cheat telah selesai dikonfigurasi`;
            alert(message);
        }

        this.classList.add('was-validated');
    });

    welkam.addEventListener('click', function() {
        welkam.style.display = 'none';
        main.style.display = 'block';
        const bgMusic = document.getElementById('bgMusic');
        bgMusic.play().catch(e => console.log("Autoplay prevented: ", e));
    });

    document.querySelectorAll('.switch input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            console.log(`${this.id} is now ${this.checked ? 'on' : 'off'}`);
        });
    });
});
