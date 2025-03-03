import {GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import{auth} from './firebase.js'
const googleButton=document.querySelector('#googleLogin')
googleButton.addEventListener('click',async ()=>{
    const provider=new GoogleAuthProvider()
    try{
        const credentials =await signInWithPopup(auth,provider)
        const modal=bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()
    }catch(error){
        console.log(error)
    }
    
       
})