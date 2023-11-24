// Declaring Variables
let input = document.getElementById("hexInput")
let btnCon = document.getElementById("convert")
let result = document.getElementById("display")

// Selecting button and Onclick + Function + Condition 
document.getElementById('convert').addEventListener('click', function() {
    let hex = document.getElementById('hexInput').value;
    let rgb = hexToRgb(hex);

    if (rgb) {
        document.getElementById('display').textContent = `RGB: ${rgb.r}, ${rgb.g}, ${rgb.b}`;
    } else {
        document.getElementById('display').textContent = 'Invalid Hex color code';
    }
});

function hexToRgb(hex) {
    // regular expression for hexadicimal code
    // exec used to perform code matching 
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}