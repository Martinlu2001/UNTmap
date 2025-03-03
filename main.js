
import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import{auth}from  './firebase.js'
//import {loginCheck} from './loginCheck.js'
import './firebase.js'
import './googleLogin.js'
import './facebookLogin.js'
import './logout.js'
// const loggetout=document.querySelectorAll('.loggedout')
// const loggetin=document.querySelectorAll('.loggedin')
// const contenido=document.querySelector('#contenido')

// onAuthStateChanged(auth,async (user)=>{
   
//      if(user){
//         loggetin.forEach(link => link.style.display='block')
//         loggetout.forEach(link => link.style.display='none')
//         contenido.innerHTML=`<iframe src="paginamapa.html" id="frame" class="mapa" style="height: 100vh; width: 100%;"></iframe> `
        
       
        
//         console.log('supuestamente ya entre')
       
//     }else{
//       loggetin.forEach(link => link.style.display='none')
//       loggetout.forEach(link => link.style.display='block')
//       contenido.innerHTML=`<iframe src="paginabienvenida.html" id="frame" class="mapa" style="height: 100vh; width: 100%;"></iframe> `

//       }
//  });
//dentro de if
//document.getElementById("frame").src = "paginamapa.html";
   //window.location.href="paginamapa.html"
      //      loginCheck(user)
//dentro de else
//document.getElementById("frameinicio").src= "holamundo.html";
        //window.location.href="index.html"
    //     loginCheck(user)

