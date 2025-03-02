document.getElementById('color-wheel').addEventListener('click', function(event) {
    // const color = getHexColorCode();
    const color = getRGBAColorCode();

    document.getElementById('body').style.backgroundColor = color;
})