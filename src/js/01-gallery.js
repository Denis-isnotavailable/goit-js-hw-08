// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.append(...createGallery(galleryItems));

function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description, }) => {
        const linkEl = document.createElement('a');
        linkEl.classList.add('gallery__link');
        linkEl.href = original;        

        const imgEl = document.createElement('img');
        imgEl.classList.add('gallery__image');
        imgEl.src = preview;        
        imgEl.alt = description;        

        linkEl.append(imgEl);        

        return linkEl;
    });
}


let gallery = new SimpleLightbox('.gallery a');

gallery.options.captionsData = 'alt';
gallery.options.captionDelay = 250;