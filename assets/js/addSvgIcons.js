const svgContainer = document.querySelectorAll('.svg-container');

svgContainer.forEach((container, index) => {

    const svgFiles = [
        '/assets/images/icons/delivery.svg',
        '/assets/images/icons/gear.svg',
        '/assets/images/icons/check100.svg',
        '/assets/images/icons/handsholding.svg',
        '/assets/images/icons/certificate1.svg',
    ]

    if(svgFiles[index]) {
        fetch(svgFiles[index])
        .then(response => response.text())
        .then(svgContent => {
            container.innerHTML = svgContent;
            container.querySelector('svg').classList.add('w-16', 'h-16', 'group-hover:fill-white')
        })
        .catch(error => console.error('Error loading SVG:', error));
    }
})