
import ProductData from "../Data/data1.js";
let product_array = ProductData;

function renderDom(data){

    let box1 = document.getElementById("box1");
    box1.innerHTML = null;

    let box2 = document.getElementById("box2");
    box2.innerHTML = null;
    let booking = document.getElementById("container")
    booking.innerHTML = null;

 
    data.forEach((el) => {

    let card = document.createElement("div");
     card.setAttribute("id","parent");

    let btn_card = document.createElement("div");
    btn_card.setAttribute("id","text");

    let image =  document.createElement("img");
    image.src = el.Image;
    image.style.cursor = "pointer";

    let ref = document.createElement("p");
    ref.innerText = ` Ref Id - ${el.id}`;
    ref.style.marginTop ="20px"

    let title =  document.createElement("h4");
    title.innerText = el.Title;
    title.style.marginTop ="20px"
    title.style.color = "black";
    title.style.cursor = "pointer";

    title.onclick=()=>{

    linktonext(id)

    }
   
 
    let place = document.createElement("p");
    place.innerText = el.place;
    place.style.marginTop ="20px";
    place.style.cursor = "pointer";

    let btn_1 = document.createElement("button");
    btn_1.innerText = el.btn_1;
    btn_1.style.padding ="0 15px";
    btn_1.style.lineHeight = "28px";
    btn_1.style.fontSize = ".875rem";
    btn_1.style.cursor = "pointer";
    btn_1.style.marginRight ="20px";
    btn_1.style.backgroundColor ="transparent";
    btn_1.style.color = "#333";
    btn_1.style.border ="1px solid #e5e5e5";
  



    let btn_2 = document.createElement("button");
    btn_2.innerText = el.btn_2;
    btn_2.style.padding ="0 15px";
    btn_2.style.lineHeight = "28px";
    btn_2.style.fontSize = ".875rem";
    btn_2.style.cursor = "pointer";
    btn_2.style.marginRight ="20px";
    btn_2.style.backgroundColor ="transparent";
    btn_2.style.color = "#333";
    btn_2.style.border ="1px solid #e5e5e5";



    let btn_3 = document.createElement("button");
    btn_3.innerText = el.btn_3
    btn_3.style.padding ="0 15px";
    btn_3.style.lineHeight = "28px";
    btn_3.style.fontSize = ".875rem";
    btn_3.style.cursor = "pointer";
    btn_3.style.marginRight ="20px";
    btn_3.style.backgroundColor ="transparent";
    btn_3.style.color = "#333";
    btn_3.style.border ="1px solid #e5e5e5";
 


    let btn_4 = document.createElement("button");
    btn_4.innerText = el.btn_4;
    btn_4.style.padding ="0 15px";
    btn_4.style.lineHeight = "28px";
    btn_4.style.fontSize = ".875rem";
    btn_4.style.cursor = "pointer";
    btn_4.style.marginRight ="20px";
    btn_4.style.backgroundColor ="transparent";
    btn_4.style.color = "#333";
    btn_4.style.border ="1px solid #e5e5e5";
    


    let price = document.createElement("h4");
    price.innerText = `${el.price}- for 2 Nights`;
    price.style.marginTop ="20px";
    price.style.color = "black";
    price.style.cursor = "pointer";

     
    card.append(image)
    
    box1.append(card)
     btn_card.append(ref,title,place,btn_1,btn_2,btn_3,btn_4,price)
    box2.append(btn_card);
    booking.append(card,btn_card)
    
    })
    
    }
    
     renderDom(product_array)
    
    
    // let userData =JSON.parse(localStorage.getItem("check")) || []
    // function next(el){
    
    //     let checkout = [];
    //     let loginarr=JSON.parse(localStorage.getItem("logindetails"))
     
    //     if(loginarr===null){
    
    //         alert("Login First")
    
    //     }else{
    //     window.location.href="checkout.html";
    //     checkout.push(el)
    //     localStorage.setItem("check",JSON.stringify(checkout))
      
    
    //     }
    
    // }
    
    // function sortLtoH(){
    // let userData =JSON.parse(localStorage.getItem("shalu")) 
    
    // userData.sort((a,b)=>
    
    // a.Price - b.Price
    
    // )
    // localStorage.setItem("shalu",JSON.stringify(userData))
    // renderDom(userData)
    
    // }
    
    // function sortHtoL(){
    //     let userData =JSON.parse(localStorage.getItem("shalu")) 
        
    //     userData.sort((a,b)=>
        
    //    b.Price - a.Price
        
    //     )
    //     localStorage.setItem("shalu",JSON.stringify(userData))
    //     renderDom(userData)
        
    //     }
    
    //     document.getElementById("filter_ac").addEventListener("click",shalini)
    
    //      function shalini(){
    //         console.log(data)
    //         let f1=data.hotels.filter(function(el){
    //             return el.Ac==true;
    //         })
    //       renderDom(f1)
    //     }
    
    
    //     document.getElementById("filter_nonac").addEventListener("click",sha)
    
    //     function sha(){
    //        console.log(data)
    //        let f1=data.hotels.filter(function(el){
    //            return el.Ac==false;
    //        })
    //      renderDom(f1)
    //    }