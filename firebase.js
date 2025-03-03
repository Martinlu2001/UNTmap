// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
//"firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgLXP2SyWAhE6bifLID1idvxthwtg49Z0",
    authDomain: "loginuntweb.firebaseapp.com",
    projectId: "loginuntweb",
    storageBucket: "loginuntweb.appspot.com",
    messagingSenderId: "927214404214",
    appId: "1:927214404214:web:035fabec9d3920bd599557"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//js
//OPERACION REGISTRARSE
const signupform = document.querySelector('#signup-form');
const verificationform=document.querySelector('#verification-form');

const loggetout=document.querySelectorAll('.loggedout')
const loggetin=document.querySelectorAll('.loggedin')
const contenido=document.querySelector('#contenido')
contenido.innerHTML=`<iframe src="paginabienvenida.html" id="frame" class="mapa" style="height: 100vh; width: 100%;"></iframe> `
loggetin.forEach(link => link.style.display = 'none')
loggetout.forEach(link => link.style.display = 'block')
var verifi=[];
signupform.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    var hola=0;
    const email = signupform["signup-email"].value;//document.querySelector('#signup-email').value;
    const password = signupform["signup-password"].value;//document.querySelector('#signup-password').value;
    const myModalEl = document.querySelector('#signupModal')
    const modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
    verifi.push(email);
    for(var contador=0; contador<verifi.length; contador++){
        if(verifi[contador]!=email){
            hola=1;
        }else{
            
            hola=0;
            for(contador=contador+1;contador<verifi.length;contador++){
                if(verifi[contador]==email){
                    hola=1;
                }
            }
            break;
        }
    }
    

    try{
       if(hola===0){
        let otp_val=Math.floor(Math.random()*10000);
        let email_body=`<h1>Estas a un paso de registrarte en la aplicacion</h1> <br>
        <h2>tu codigo es </h2>${otp_val}`
        ;
        Email.send({
            SecureToken : "9f7b21f4-c0dc-42e2-8442-a7043e95e20c",
            To : email,
            From : "untmapeirl@gmail.com",
            Subject : "Codigo de verificacion de registro de la aplicacion",
            Body : email_body
        }).then(
        message => alert("Se ha enviado un codigo de verifcacion a tu correo")
        );    
        // const myModalEl = document.querySelector('#signupModal')
        // const modal = bootstrap.Modal.getInstance(myModalEl)
        // modal.hide();
        verificationform.addEventListener("submit", async (a)=>{
            a.preventDefault();
            const codigo=verificationform["entradacodigo"].value;
    
            if(otp_val==codigo){
                console.log("logrado")
    
                try{
                    await createUserWithEmailAndPassword(auth, email, password)
                    const user = auth.currentUser;
                    await sendEmailVerification(user);
                    alert("Se ha enviado un correo de verificacion exitosa a tu direccion de correo")
    
                    signupform.reset();
                    verificationform.reset();
    
                    loggetin.forEach(link => link.style.display = 'block')
                    loggetout.forEach(link => link.style.display = 'none')
                    contenido.innerHTML = `<iframe src="paginamapa.html" id="frame" class="mapa" style="height: 100vh; width: 100%;"></iframe> `
                    
                    console.log('ya');
                }catch(error){
                    console.log(error.message)
                    console.log(error.code)
                   if (error.code == 'auth/email-already-in-use') {
                       alert('El correo ya esta en uso')
                   }
                   else if (error.code === 'auth/invalid-email') {
                       alert('Email no valido')
                   } else if (error.code === 'auth/weak-password') {
                       alert('La contraseña debe ser como minimo 6 digitos')
                   } else if (error.code) {
                       alert('Ups algo anda mal')
                   }
                }
                    
            }
            else {
                console.log('no logrado')
            }
        })
       }
       else{
        await createUserWithEmailAndPassword(auth, email, password)

       }
    }catch(error){
        console.log(error.message)
        console.log(error.code)
       if (error.code == 'auth/email-already-in-use') {
           alert('El correo ya esta en uso')
       }
       else if (error.code === 'auth/invalid-email') {
           alert('Email no valido')
       } else if (error.code === 'auth/weak-password') {
           alert('La contraseña debe ser como minimo 6 digitos')
       } else if (error.code) {
           alert('Ups algo anda mal')
       }
    }
    // let otp_val=Math.floor(Math.random()*10000);
    // let email_body=`<h1>Estas a un paso de registrarte en la aplicacion</h1> <br>
    // <h2>tu codigo es </h2>${otp_val}`
    // ;
    // Email.send({
    //     SecureToken : "9f7b21f4-c0dc-42e2-8442-a7043e95e20c",
    //     To : email,
    //     From : "untmapeirl@gmail.com",
    //     Subject : "Codigo de verificacion de registro de la aplicacion",
    //     Body : email_body
    // }).then(
    // message => alert("Se ha enviado un codigo de verifcacion a tu correo")
    // );    
    // const myModalEl = document.querySelector('#signupModal')
    // const modal = bootstrap.Modal.getInstance(myModalEl)
    // modal.hide();
    //OPERACION VALIDAR CODIGO
    
    // verificationform.addEventListener("submit", async (a)=>{
    //     a.preventDefault();
    //     const codigo=verificationform["entradacodigo"].value;

    //     if(otp_val==codigo){
    //         console.log("logrado")

            
    //             await createUserWithEmailAndPassword(auth, email, password)
    //             const user = auth.currentUser;
    //             await sendEmailVerification(user);
    //             alert("Se ha enviado un correo de verificacion exitosa a tu direccion de correo")

    //             signupform.reset();
    //             verificationform.reset();

                //  const modalverification=document.querySelector('#verificationModal')
                //  const modalver=bootstrap.Modal.getInstance(modalverification)
                //  modalver.hide();

                // loggetin.forEach(link => link.style.display = 'block')
                // loggetout.forEach(link => link.style.display = 'none')
                // contenido.innerHTML = `<iframe src="paginamapa.html" id="frame" class="mapa" style="height: 100vh; width: 100%;"></iframe> `
                
                // console.log('ya');
            //catch (error) {
            //     console.log(error.message)
            //     console.log(error.code)
            //     if (error.code == 'auth/email-already-in-use') {
            //         alert('El correo ya esta en uso')
            //     }
            //     else if (error.code === 'auth/invalid-email') {
            //         alert('Email no valido')
            //     } else if (error.code === 'auth/weak-password') {
            //         alert('La contraseña debe ser como minimo 6 digitos')
            //     } else if (error.code) {
            //         alert('Ups algo anda mal')
            //     }
            // }
    //     }
    //     else {
    //         console.log('no logrado')
    //     }
    // })
})
//  verificationform.addEventListener("submit", async (a)=>{
//         a.preventDefault();
//         const codigo=document.querySelector('#entradacodigo').value;

//         if(otp_val==codigo){

//             try {
//                 await createUserWithEmailAndPassword(auth, email, password)
//                 const user = auth.currentUser;
//                 await sendEmailVerification(user);
//                 alert("Se ha enviado un correo de verificacion exitosa a tu direccion de correo")

//                 signupform.reset();
//                 verificationform.reset();

//                 const myModalEl = document.querySelector('#signupModal')
//                 const modal = bootstrap.Modal.getInstance(myModalEl)
//                 modal.hide();

//                 const modalverification=document.querySelector('#verificationModal')
//                 const modalver=bootstrap.Modal.getInstance(modalverification)
//                 modalver.hide();
        
//                 console.log('ya');
//             } catch (error) {
//                 console.log(error.message)
//                 console.log(error.code)
//                 if (error.code == 'auth/email-already-in-use') {
//                     alert('El correo ya esta en uso')
//                 }
//                 else if (error.code === 'auth/invalid-email') {
//                     alert('Email no valido')
//                 } else if (error.code === 'auth/weak-password') {
//                     alert('La contraseña debe ser como minimo 6 digitos')
//                 } else if (error.code) {
//                     alert('Ups algo anda mal')
//                 }
//             }
//          }
//         else{
//              console.log('no logrado')
//          }
//  })

//login
const loginform = document.querySelector('#login-form');

// const loggetout=document.querySelectorAll('.loggedout')
// const loggetin=document.querySelectorAll('.loggedin')
// const contenido=document.querySelector('#contenido')
// contenido.innerHTML=`<iframe src="paginabienvenida.html" id="frame" class="mapa" style="height: 100vh; width: 100%;"></iframe> `
// loggetin.forEach(link => link.style.display = 'none')
// loggetout.forEach(link => link.style.display = 'block')

loginform.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginform["login-email"].value;//document.querySelector('#login-email').value;
    const password = loginform["login-password"].value;//document.querySelector('#login-password').value;
    //console.log('ya entre');
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        //.then((userCredential)=>{
        loginform.reset();
        //isNewUser=false;
        //para cerrar el modal
        const myModal = document.querySelector('#signinModal')
        const modal1 = bootstrap.Modal.getInstance(myModal)
        modal1.hide();
        console.log('verificado');
        alert("Inicio de sesión exitoso")
        if(email=="fabriciomarluna123@gmail.com"){
            loggetin.forEach(link => link.style.display = 'block')
            loggetout.forEach(link => link.style.display = 'none')
            contenido.innerHTML = `<iframe src="contenido-admin.html" id="frame" class="mapa" style="height: 100vh; width: 100%;"></iframe> `

        }
        else{
            loggetin.forEach(link => link.style.display = 'block')
            loggetout.forEach(link => link.style.display = 'none')
            contenido.innerHTML = `<iframe src="paginamapa.html" id="frame" class="mapa" style="height: 100vh; width: 100%;"></iframe> `
        }
       
        //})
    } catch (error) {
        console.log(error.message)
        console.log(error.code)
        if (error.code == 'auth/user-not-found') {
            alert('Usaurio no valido')
        } else if (error.code == 'auth/wrong-password') {
            alert('Contraseña incorrecta')
        }
    }

})


