let input_bar=document.querySelector("#search-bar");
let search_bar_open=document.querySelector("#search-bar-open");
let search_bar_close=document.querySelector("#search-bar-close");
search_bar_close.style.display="none";
import {product} from "./data.js";
// console.log(product);

input_bar.addEventListener("focus",()=>{
    search_bar_open.style.display="none";
    search_bar_close.style.display="flex";
})
let cross=document.querySelector("#cross");
cross.addEventListener("click",()=>{
    search_bar_open.style.display="flex";
    search_bar_close.style.display="none";

})
let btn=document.querySelectorAll("#btn");
btn[0].addEventListener("click",function(){
    btn[1].classList.remove("border-2");
    btn[1].classList.remove("border-black");
    btn[0].classList.add("border-2");
    btn[0].classList.add("border-black");


});
btn[1].addEventListener("click",()=>{
    btn[0].classList.remove("border-2");
    btn[0].classList.remove("border-black");
    btn[1].classList.add("border-2");
    btn[1].classList.add("border-black");
});


function slideImages(arr,left,right,img){
    let index=1;
    left.addEventListener("click",()=>{
        if (index<0){
            index=arr.length-1;
        }
        img.src=arr[index];
        index--;
    });
    right.addEventListener("click",()=>{
        if (index>=arr.length){
            index=0;
        }
        img.src=arr[index];
        index++;
    })
    
}
let caraousel_div = document.querySelector("#caraousel-div");
product.map((val,index)=>{
    caraousel_div.insertAdjacentHTML(
      "beforeend",
      `<div id="product-${index}" class="w-[300px] h-fit new_shadow">
            <!-- Image div -->
            <div id="image-div" class="max-w-full relative select-none cursor-pointer	">
                <img  class="object-contain w-full max-h-[300px] transition duration-200 ease-in"
                    src=${val.images[0]} 
                    alt="">
                <!-- Arrow Div -->
                <div id="arrow-div" class="absolute -z-1 inset-y-1/2 w-full h-fit flex flex-row justify-between items-center">
                    <div id="left-arrow" class="w-[40px] flex justify-center items-center opacity-50 hover:opacity-100 aspect-square border bg-stone-50 rotate-180 hover:bg-white transition duration-150 ease-in cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class=""><path d="M5.12359 12L10.1236 6.99999L5.12359 2L3.88477 3.23883L7.64593 6.99999L3.88477 10.7612L5.12359 12Z"></path></svg>
                    </div>
                    <div id="right-arrow" class="w-[40px] flex justify-center items-center opacity-50 hover:opacity-100 aspect-square border bg-stone-50 hover:bg-white transition duration-150 ease-in cursor-pointer ">
                        <svg width="20" height="20" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class=""><path d="M5.12359 12L10.1236 6.99999L5.12359 2L3.88477 3.23883L7.64593 6.99999L3.88477 10.7612L5.12359 12Z"></path></svg>
                    </div>
                </div>
                <div class="absolute -z-1 right-3 top-3 cursor-pointer"><svg width="24" height="24" viewBox="0 0 21 19"  xmlns="http://www.w3.org/2000/svg" class="fill-transparent stroke-black hover:fill-black"><path d="M9.82693 3.24001C10.2086 3.5878 10.7923 3.5878 11.174 3.24001C12.2616 2.24895 13.4219 1.50391 14.4965 1.50391C15.8043 1.50391 17.0455 2.01805 17.9985 2.96516C19.9655 4.94321 19.9621 8.00504 18.0004 9.9668L10.5854 17.3818C10.551 17.4162 10.5191 17.453 10.4901 17.492C10.4888 17.4938 10.4875 17.4954 10.4863 17.4967C10.4862 17.4967 10.4862 17.4967 10.4861 17.4967C10.4434 17.4246 10.3919 17.3581 10.3326 17.2988L3.00058 9.9668L3.00043 9.96665C1.03829 8.00535 1.03502 4.94267 2.99839 2.9692C3.95576 2.01771 5.19709 1.50391 6.50447 1.50391C7.57992 1.50391 8.73921 2.24884 9.82693 3.24001Z" stroke-width="2" stroke-linejoin="round"></path></svg></div>
                <div class="absolute -z-1 bottom-3 right-3 cursor-pointer"><svg width="23" height="16" viewBox="0 0 23 16" xmlns="http://www.w3.org/2000/svg" fill="#1D1F1C" ><path d="M 11.4998 5 C 12.3286 5 13.1235 5.3161 13.7095 5.8787 C 14.2956 6.4413 14.6248 7.2043 14.6248 8 C 14.6248 8.7957 14.2956 9.5587 13.7095 10.1213 C 13.1235 10.6839 12.3286 11 11.4998 11 C 10.671 11 9.8762 10.6839 9.2901 10.1213 C 8.7041 9.5587 8.3748 8.7957 8.3748 8 C 8.3748 7.2043 8.7041 6.4413 9.2901 5.8787 C 9.8762 5.3161 10.671 5 11.4998 5 Z M 11.4998 0.5 C 16.7082 0.5 21.1561 3.61 22.9582 8 C 21.1561 12.39 16.7082 15.5 11.4998 15.5 C 6.2915 15.5 1.8436 12.39 0.0415 8 C 1.8436 3.61 6.2915 0.5 11.4998 0.5 Z M 1.75 8 C 4 12.5 7 13.5 11.5 14 C 16 13.5 19 12.5 21.25 8 C 19 3.5 16 2.5 11.5 2 C 7 2.5 4 3.5 1.75 8 Z"></path></svg></div>
            </div>
            <!-- Product Details Div  -->
            <div id="product-detail_div" class="w-full mx-4 cursor-pointer">
                <p class="h-fit text-sm capitalize font-sans font-semibold" id="product-name">${val.name.toLowerCase()}</p>
                <p class="text-xs font-sans text-zinc-600 my-1 mt-4 ">Installment available from <span class="text-xs text-black font-bold" id="product-emi-value">AED ${
                  val.emi_price
                } / month</span> </p>
                <span class="text-sm font-semibold underline">Learn more</span>
                <div class="flex flex-row items-center gap-x-4">
                    <p class="text-[#C64739] text-lg font-bold">AED <span id="product-price">${
                      val.final_price.value
                    }</span></p>
                    <span class="line-through text-zinc-500" id="product-original-price">AED ${
                      val.original_price
                    }</span>
                    <p class="font-semibold ml-4 text-zinc-800"><span id="product-discount">${
                      val.discount
                    }</span>% OFF</p>
                </div>
                <button class="w-11/12 mx-auto bg-black text-white font-bold font-sans px-1 py-3 my-1 text-sm
                 hover:bg-slate-800 transition duration-150 ease-in">ADD T0 CART</button>
            </div>
    </div>`
    );
    let product_div=document.querySelector(`#product-${index}`);
    let arrow_div = product_div.children[0].children[1];
    let image_div = product_div.children[0].children[0];
    let button = product_div.children[1].children[4];
    let product_detail_div = product_div.children[1];
    
    arrow_div.style.opacity = 0;
    button.style.opacity=0;
    image_div.addEventListener("mouseover",()=>{
            arrow_div.style.opacity = 100;
    })
    image_div.addEventListener("mouseout",()=>{
            arrow_div.style.opacity = 0;
    })
    arrow_div.addEventListener("mouseover", () => {
      arrow_div.style.opacity = 100;
    });
    product_detail_div.addEventListener("mouseover",()=>{
        button.style.opacity=100;
    })
    product_detail_div.addEventListener("mouseout",()=>{
        button.style.opacity=0;
    })
    slideImages(val.images, arrow_div.children[0], arrow_div.children[1],image_div);
})


// accordian
let items = document.querySelectorAll("#accordian .item");
items.forEach((item) => {  
  item.children[0].addEventListener("click", (e) => {
    e.currentTarget.closest(".item").classList.toggle("active");
    let content=item.children[1];
    content.style.height = "0px";
    if (item.classList.contains("active")){
        content.style.height=content.scrollHeight+'px';
    }else{
        content.style.height ='0px';
    }
  });
});


import { FlipDown } from "./flipdown.js";
document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to
  var twoDaysFromNow = new Date().getTime() / 1000 + 86400 * 2 + 1;

  // Set up FlipDown
  var flipdown = new FlipDown(twoDaysFromNow)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log("The countdown has ended!");
    });

  // Toggle theme
  var interval = setInterval(() => {
    let body = document.body;
    body.classList.toggle("light-theme");
  }, 5000);
});