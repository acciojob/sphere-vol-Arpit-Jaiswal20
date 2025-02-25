window.onload = function() {
    document.getElementById('MyForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents page reload
        volume_sphere();
    });
};

function volume_sphere() {
    let radiusInput = document.getElementById('radius').value;
    let radius = parseFloat(radiusInput);
    let volumeField = document.getElementById('volume');

    if (isNaN(radius) || radius < 0) {
        volumeField.value = 'NaN';
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeField.value = volume.toFixed(4);
}
