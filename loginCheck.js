const loggetout=document.querySelectorAll('.loggedout')
const loggetin=document.querySelectorAll('.loggedin')
const hola=document.querySelectorAll('.mapa')
export const loginCheck=user=>{
     if(user){//si el usuario existe
      loggetin.forEach(link => link.style.display='block')
      loggetout.forEach(link => link.style.display='none')

      // document.getElementById("frame").src = "paginamapa.html";
               
      console.log('supuestamente ya entre')
      //window.location.replace("paginamapa.html")

        //window.location.href="paginamapa.html"
        //window.location.href="index.html"
        //window.location.replace("index.html")
        //console.log('sigodentro')

    }else{
      
      loggetin.forEach(link => link.style.display='none')
      loggetout.forEach(link => link.style.display='block')
      //$('#frame').hide();
      //hola.forEach(link => link.style.display='block')
      // document.getElementById("frameinicio").src= "index.html";
                

      //si el usuario no existe
        //console.log('supuestamente ya sali')
         window.location.replace("index.html")
        //window.location.href="paginamapa.html"
        //window.location.href="index.html"
    }
 }