export default function initializeSVGIcons() {
    const svgFiles = [
        '/images/icons/delivery.svg',
        '/images/icons/gear.svg',
        '/images/icons/check100.svg',
        '/images/icons/handsholding.svg',
        '/images/icons/certificate1.svg',
    ];
    
    const svgContainers = document.querySelectorAll('.svg-container');
    
    svgContainers.forEach((container, index) => {
        if (!svgFiles[index]) {
            console.error(`No SVG file defined for container at index ${index}`);
            return;
        }
    
        fetch(svgFiles[index])
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${svgFiles[index]}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(svgContent => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = svgContent.trim();
    
                const svgElement = tempDiv.querySelector('svg');
                if (svgElement) {
                    container.innerHTML = '';
                    container.appendChild(svgElement);
                    svgElement.classList.add('w-16', 'h-16', 'group-hover:fill-white');
                } else {
                    console.error(`No <svg> found in content of ${svgFiles[index]}`);
                }
            })
            .catch(error => console.error(`Error loading SVG for container at index ${index}:`, error));
    });
    
}