document.addEventListener('DOMContentLoaded', function() {
    const nappi = document.getElementById('nappi');

    nappi.addEventListener('click', function() {
        const vastaukset = document.querySelectorAll('.vastaus');

      
        const ensimmainen = vastaukset[0];
        const onkoPiilossa = window.getComputedStyle(ensimmainen).display === 'none';

        vastaukset.forEach(function(vastaus) {
            if (onkoPiilossa) {
                vastaus.style.display = 'block';
            } else {
                vastaus.style.display = 'none';
            }
        });

    
        nappi.textContent = onkoPiilossa ? 'Piilota vastaukset' : 'Näytä vastaukset';
    });
});