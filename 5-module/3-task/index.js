function initCarousel() {
  // ваш код...

  let carousel__inner = document.querySelector('.carousel__inner');
  let carousel = document.querySelector('.carousel');
  let button_right = document.querySelector('.carousel__arrow_right');
  let button_left = document.querySelector('.carousel__arrow_left');
  let widthOfCarousel = carousel__inner.offsetWidth;
 
//ОБРАБОТЧИК   

carousel.onclick = function(event) {

  let target = event.target; 

  if (target.classList.contains('carousel__arrow_right') || target.closest('.carousel__arrow_right')){ 
  moveRigth();
  };

  if (target.classList.contains('carousel__arrow_left') || target.closest('.carousel__arrow_left')){ 
  moveLeft();
  };
};

let currentSlide = 1;
button_left.style.display = 'none'; 

function moveRigth(){
  button_left.style.display = '';  
  if (currentSlide < 4){    
  carousel__inner.style.transform = `translateX(-${widthOfCarousel * currentSlide}px)`;   
  currentSlide += 1;
  }
  if (currentSlide == 4){
    button_right.style.display = 'none';      
  };
};


function moveLeft(){
  button_right.style.display = '';  
  
  if (currentSlide == 1){
    return;
  }
  if (currentSlide == 2){
    carousel__inner.style.transform = `translateX(-${widthOfCarousel * (currentSlide - 2)}px)`;
    currentSlide -= 1;
    button_left.style.display = 'none'; 
  }
  if (currentSlide == 3 || currentSlide == 4){          
    carousel__inner.style.transform = `translateX(-${widthOfCarousel * (currentSlide - 2)}px)`; 
    currentSlide -= 1;
  }

};
}






