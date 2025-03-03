import{signOut}from 'https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js'
import {auth} from './firebase.js'

const loggetout=document.querySelectorAll('.loggedout')
const loggetin=document.querySelectorAll('.loggedin')
const contenido=document.querySelector('#contenido')

 const logout=document.querySelector('#logout');
    logout.addEventListener('click', async ()=>{
        try{
            await signOut(auth)
            console.log('user salio de verdad')
            //window.location.replace("index.html")
            //window.location.href="index.html"
            contenido.innerHTML=`<iframe src="paginabienvenida.html" id="frame" class="mapa" style="height: 100vh; width: 100%;"></iframe> `
            loggetin.forEach(link => link.style.display = 'none')
            loggetout.forEach(link => link.style.display = 'block')
            console.log('es ovbio que salio')
        }catch(error){
            console.log(error)
        }
    })