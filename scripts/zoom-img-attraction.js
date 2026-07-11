document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.image-gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    if (!lightbox || !lightboxImg) {
        return;
    }

    galleryImages.forEach(function (image) {
        image.addEventListener('click', function () {
            lightboxImg.src = image.src;
            lightboxImg.alt = image.alt;
            lightbox.classList.add('show');
        });
    });

    lightboxImg.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    if (!lightbox || !lightboxImg) {
        return;
    }

    lightbox.classList.remove('show');
    lightboxImg.src = '';
}
