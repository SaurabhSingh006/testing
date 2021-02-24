// FORM
let currentSlide = 0;
let slide = document.querySelectorAll('.form__slide');
let steps = document.querySelectorAll(".form__step");
const showSlide = (n) => {
  slide[n].style.display = "block";

  //Button hidding
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (slide.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next"; 
  }

  //Progress Bar
  //let steps = document.querySelectorAll(".form__step--number");

  for(let m = 0; m <=n; m++) {
    steps[m].style.backgroundColor = "var(--green)";
  }
}


const nextPrev = (n) => { 
  
  //Validate Form
  console.log(validateForm());
  //if (n == 1 && !validateForm()) return false; 
  
  //Hiding the current Slide
  slide[currentSlide].style.display = null;
  if(n == -1) {
    steps[currentSlide].style.backgroundColor = "var(--white)";
  }

  //Implement prev and next logic
  currentSlide = currentSlide + n;
  if (currentSlide >= slide.length) { 
    //...the form gets submitted:
    document.querySelector(".form").submit();
    alert("Confirm form Submission");   
    return false;
  }
  showSlide(currentSlide);

  

}

const validateForm = () => {
  const childInput = slide[currentSlide].querySelectorAll('.form__input');
  const arrayInput = Array.prototype.slice.call(childInput);
  let valid = true;
  arrayInput.map((input) => {
  valid = input.checkValidity();
  });
  return valid;
  //console.log(valid);

  // const input = document.querySelectorAll('.form__input');
  // const arr = Array.prototype.slice.call(input)
  // const zz = arr.filter((x)=> {
  //   return x.style.display = "block"; 
  // });
  // console.log(zz);
}

showSlide(currentSlide); 

console.log(slide[0].querySelectorAll('.form__input'));
