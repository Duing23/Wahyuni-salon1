// script.js

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const close = document.getElementsByClassName('close')[0];

    // Ambil semua gambar di galeri
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src; // Tampilkan gambar yang diklik di modal
            captionText.textContent = this.alt; // Tampilkan teks alternatif sebagai caption
        });
    });

    // Tutup modal saat diklik di luar gambar atau pada tombol close
    close.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.classList.add('hidden');
    } else {
        // Scrolling up
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollingText = document.querySelector('.scrolling-text p');

    // Ensure the animation starts when the page loads
    scrollingText.classList.add('animate');

    // Optional: Add event listeners to control the animation (e.g., on hover)
    scrollingText.addEventListener('mouseover', () => {
        scrollingText.style.animationPlayState = 'paused'; // Pause on hover
    });

    scrollingText.addEventListener('mouseout', () => {
        scrollingText.style.animationPlayState = 'running';
    });
});


