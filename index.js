// slideshow
{
    var imgLinkArr = ["url('./assets/images/hero-background/img1.jpg')", "url('./assets/images/hero-background/img2.jpg')", "url('./assets/images/hero-background/img3.jpg')", "url('./assets/images/hero-background/img4.jpg')", "url('./assets/images/hero-background/img5.jpg')"];
    var ind = 0;
    var repeat = setInterval(headerBackgroundSlider, 3333);


    function headerBackgroundSlider() {
        if (ind == 5) { ind = 0; }
        document.querySelector('.hero').style.backgroundImage = imgLinkArr[ind++];

    }


    // jump to the backgroundImage clicked

    function jumpToSlide(slideIndex) {
        ind = slideIndex;
    }
}


// change navbar background on scroll
{
    const header = document.querySelector(".main-header");

    window.addEventListener('scroll', () => {
        const scrollpos = window.scrollY;

        if (scrollpos > 15) {
            header.classList.add('scrolled');
        }
        else {
            header.classList.remove('scrolled');
        }

    })
}

//Set Zippy team member's profile as background of the div
{
    const memberImgArray = ["url('./assets/images/team-members/member4.jpeg')", "url('./assets/images/team-members/member2.jpeg')", "url('./assets/images/team-members/member3.jpeg')", "url('./assets/images/team-members/member5.jpeg')", "url('./assets/images/team-members/member6.jpeg')", "url('./assets/images/team-members/member1.jpeg')"];

    const memberdiv = document.querySelector(".team").children;

    [...memberdiv].forEach((div, ind) => {
        div.style.backgroundImage = memberImgArray[ind];
    });
}

//change the focused thumbnail img
{
    const lifeImageArray = [...document.querySelector(".gallery").children];
    const lifeThumbnail = document.querySelector(".life-wrapper .banner img");

    function lifeImageFocus(ind) {
        lifeThumbnail.src = lifeImageArray[ind].src;
    }

    const leftArrow = document.querySelector(".left-arrow")
    const rightArrow = document.querySelector(".right-arrow")
    const gallery = document.querySelector(".gallery");

    leftArrow.addEventListener('click', () => {
        gallery.scrollLeft -= 150;

    })
    rightArrow.addEventListener('click', () => {
        gallery.scrollLeft += 150;

    })
}