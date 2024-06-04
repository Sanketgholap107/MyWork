const slides = document.querySelectorAll(".slide")

var counter=0;

slides.forEach((slide, index)=>{
    slide.style.left=`${index*100}%`;
})

const onPrev=()=>{
    counter--;
    if(counter<0){
        counter=slides.length-1;
    }
    slideTest();
}

const onNext=()=>{
    counter++;
    if(counter>=slides.length){
        counter=0;
    }
    slideTest();
}

const slideTest=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`;
    })
}