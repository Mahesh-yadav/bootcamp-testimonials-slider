let currentImageIndex = 0;

const slides = document.querySelectorAll('.card');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');


function getNextIndex(currentIndex){
    return (currentIndex + 1) % slides.length;
}

function getPrevIndex(currentIndex){
    return currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
}

prevBtn.addEventListener('click', () => {
    const prevImageIndex = getPrevIndex(currentImageIndex);

    slides[currentImageIndex].style.display = 'none';
    slides[prevImageIndex].style.display = 'flex';

    currentImageIndex = prevImageIndex;
});

nextBtn.addEventListener('click', () => {
    const nextImageIndex = getNextIndex(currentImageIndex);
    
    slides[currentImageIndex].style.display = 'none';
    slides[nextImageIndex].style.display = 'flex';

    currentImageIndex = nextImageIndex;
});