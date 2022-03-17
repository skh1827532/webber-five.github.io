//Getting the class of items
let items = document.querySelector(".items");
let navBar = document.querySelector(".navbar");
// let afterLg=document.querySelector(".afterLg")
let hamburger = document.querySelector(".hamburger");
let clickEvent=document.getElementById('clickEvent')
let searchElem=document.getElementById('searchId')
let myClassElem=document.querySelector(".myClass")
let getStarted=document.querySelector(".getStarted");
let emailAddress=document.querySelector(".emailAddress")

emailAddress.addEventListener("click",()=>{
  let newElem=document.createElement("input")
  newElem.setAttribute("type","text")
  newElem.setAttribute("placeholder","Enter your email")

  emailAddress.replaceWith(newElem)
})

getStarted.addEventListener("mouseover",()=>{
  getStarted.classList.add("otherGradientProperty")
  getStarted.classList.remove("gradientProperty")
})


getStarted.addEventListener("mouseleave",()=>{
  getStarted.classList.remove("otherGradientProperty")
  getStarted.classList.add("gradientProperty")  
})

clickEvent.addEventListener('click',()=>{
  searchElem.classList.toggle("hidden")
  searchElem.focus();

})

hamburger.addEventListener("click", () => {

  
  
  items.classList.toggle("hidden");
  // items.classList.toggle("hide")
  navBar.classList.toggle("flex-col");
  // document.querySelector('.ulClassBtn').classList.toggle("hidden");
  document.querySelector(".myClassForDiv").classList.toggle("hidden");
  document.querySelector(".open").classList.toggle("hidden");
  document.querySelector(".close").classList.toggle("hidden");

  
  //   document.querySelector(".navbar").classList.toggle("w-full");
  // document.querySelector('.search').classList.toggle('self-end')
  document.querySelector(".myMargin").classList.toggle("w-full");
  
  resizeChecker();
  
  // document.querySelector('.myMargin').classList.toggle('')
});
window.addEventListener("resize", resizeChecker);
//Getting the hamburger icon

function resizeChecker() {
    if (
        window.innerWidth < 768 &&
        items.classList.contains("hidden") === false
        ) {
            navBar.classList.add("flex-col");
            // items.classList.add('hidden');
            navBar.classList.remove("justify-center");
            document.querySelector(".myMargin").classList.add("justify-between");
            console.log("Inside second inner width");
            // document.querySelector(".items").classList.add("justify-between");
            
            //  console.log("Inside second inner width")
  } 
  else if (window.innerWidth > 768 ) {
      navBar.classList.remove("flex-col");
      // navBar.classList.add("w-full")
      // navBar.classList.add("flex-row");
      // navBar.classList.add("justify-center");
      // navBar.classList.add('');
      console.log("Inside inner width");
      document.querySelector(".myClassForDiv").classList.remove("hidden");
      // document.querySelector(".myClassForDiv").classList.remove("hidden");
    document.querySelector(".myMargin").classList.remove("w-full");
    console.log(window.innerWidth);
  }

 
}


// window.addEventListener("resize",myFunc1);

// function myFunc1(){
//   console.log('How are you')
//   if(window.innerWidth>1100){
//     afterLg.classList.remove("ml-[150px]")
//     afterLg.classList.add("mr-[115px]")

  
  
// }
// else{
//   afterLg.classList.add("ml-[150px]")

// }

// }
// myFunc1();

