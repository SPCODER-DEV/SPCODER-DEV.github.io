const navMenu = document.querySelector('.menu-btn')
const mobileNav = document.querySelector('.mobile-nav')
const body = document.getElementsByTagName("body")
const images = document.getElementById("#works")



function closeNav(btn){
   btn.parentElement.classList.add("hidden")
   navMenu.classList.remove("hidden")
}

function showNav(){
    document.querySelector('.mobile-nav').classList.remove("hidden");
    navMenu.classList.add("hidden")

}





    let currentImageIndex = 0;
    const imagesList = [
      
    ];
    for (let i = 0;i < images.children.length;i++){
        imagesList.push( images.children[i].children[0].src)
    }
        
    
    

    function openGallery(index) {
        currentImageIndex = index - 1;
        showImage();
        document.getElementById('galleryModal').classList.remove('hidden');
    }

    function showImage() {
        const imageUrl = imagesList[currentImageIndex];
        document.getElementById('galleryImage').src = imageUrl;
    }

    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % imagesList.length;
        showImage();
    }

    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + imagesList.length) % imagesList.length;
        showImage();
    }

    function closeGallery() {
        document.getElementById('galleryModal').classList.add('hidden');
    }
// </script>