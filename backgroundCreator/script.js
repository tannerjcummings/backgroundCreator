const body = document.body;
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');
const radios = document.getElementsByName('bgType');
const mainElement = document.querySelector('main');
const labels = document.getElementsByName('label-btn')



const resetLabelStyles= () => {
        // Reset styles for all labels
        labels.forEach(label => {
            label.style.backgroundColor = ''; // Set to original background color
            label.style.color = ''; // Set to original text color
            // Add any other style properties that need to be reset
        });
    }

const updateBackground = () => {
    resetLabelStyles();
    if (radios[0].checked) {
        mainElement.style.background = color1.value;
        color1.style.visibility = 'visible';
        color2.style.visibility = 'hidden';
        color3.style.visibility = 'hidden';
        color4.style.visibility = 'hidden';
        labels[0].style.backgroundColor = '#333';
        labels[0].style.color = '#fff'

    } else if (radios[1].checked) {
        mainElement.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value}, ${color4.value})`;
        color1.style.visibility = 'visible';
        color2.style.visibility = 'visible';
        color3.style.visibility = 'visible';
        color4.style.visibility = 'visible';
        labels[1].style.backgroundColor = '#333';
        labels[1].style.color = '#fff'
    } else if (radios[2].checked) {
        mainElement.style.background = `radial-gradient(circle at center, ${color1.value}, ${color2.value}, ${color3.value})`;
        color1.style.visibility = 'visible';
        color2.style.visibility = 'visible';
        color3.style.visibility = 'visible';
        color4.style.visibility = 'visible';
        labels[2].style.backgroundColor = '#333';
        labels[2].style.color = '#fff'
    } else {
        color1.style.visibility = 'hidden';
        color2.style.visibility = 'hidden';
        color3.style.visibility = 'hidden';
        color4.style.visibility = 'hidden';
    }
}

radios.forEach(radio => radio.addEventListener('change', updateBackground));
color1.addEventListener('input', updateBackground);
color2.addEventListener('input', updateBackground);
color3.addEventListener('input', updateBackground);
color4.addEventListener('input', updateBackground);


// Initialize with solid color
updateBackground();
