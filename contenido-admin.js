// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, addDoc,getDocs,getDoc,GeoPoint, deleteDoc,doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBgLXP2SyWAhE6bifLID1idvxthwtg49Z0",
    authDomain: "loginuntweb.firebaseapp.com",
    projectId: "loginuntweb",
    storageBucket: "loginuntweb.appspot.com",
    messagingSenderId: "927214404214",
    appId: "1:927214404214:web:035fabec9d3920bd599557"
};
document.getElementById("editar").style.visibility = "hidden";
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// const fs=firebase.firestore();
const fs = getFirestore(app);

// const querySnapshot = await getDocs(collection(db, "1"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data(nombre_lugar)}`);
// });
const postlist=document.querySelector('.posts');


const setupPosts=(data)=>{
    if(data.length){
        let html='';
        
        data.forEach(doc=>{
            const post=doc.data();
            const task=doc.data();
            task.id=doc.id;
            const li=`
            <li class="list-group-item list-group-item-action">
                <h3>Lugar:</h3>
                <h4>${post.nombre}</h4>
                <br>
                <h3>Ubicacion:</h3>
                <p>Latitud: ${post.coordenadas.latitude}, Longitud: ${post.coordenadas.longitude}</p>
                <br>
                <button type="submit" id="delete-place" class="delete-place" data-id="${task.id}">Eliminar</button>
                <button type="submit" id="update-place" class="update-place" data-id="${task.id}">Editar</button>
                <br>
            </li>`;
            html+=li;
        })
        postlist.innerHTML=html;
    }else{
        postlist.innerHTML='<p> logea </p>';
    }
}
/* <h3>Puntos para dibujar el area del lugar:</h3> */
                // <ul>
                //     ${post.cuadro.map((punto) => `<li>Latitud:${punto.latitude},  Longitud: ${punto.longitude}</li>`).join('')}
                // </ul>
    //MOSTRAR
    try {
        const querySnapshot =await getDocs(collection(fs, "lugares"));
        setupPosts(querySnapshot.docs);
      } catch (error) {
        console.log(error)
      }
      //AÑADIR
      const addplace = document.querySelector('#add-place');
      addplace.addEventListener("submit", async (e) => {
        
        const clickedButtonId = event.submitter.id; // Obtener el ID del botón que se hizo clic

        if (clickedButtonId === "agregar") {
           const nombre = addplace["nombrelugar"].value;
        const latitud = parseFloat(addplace["latitudlugar"].value);
        const longitud = parseFloat(addplace["longitudlugar"].value);
        
        //const fs = firebase.firestore();
        
        try {
            const docRef = await addDoc(collection(fs, "lugares"), {
              nombre: nombre,
              coordenadas: new GeoPoint(latitud, longitud),
              //timestamp: serverTimestamp()
            });
            console.log("Lugar agregado correctamente, ID:", docRef.id);
            alert("Se ha añadido exitosamente")
            // Resto de tu código después de guardar los datos
          } catch (error) {
            console.error("Error al agregar el lugar:", error);
          }
          e.preventDefault();
        } else if (clickedButtonId === "editar") {
         
        }
        // const nombre = addplace["nombrelugar"].value;
        // const latitud = parseFloat(addplace["latitudlugar"].value);
        // const longitud = parseFloat(addplace["longitudlugar"].value);
        
        // //const fs = firebase.firestore();
        
        // try {
        //     const docRef = await addDoc(collection(fs, "lugares"), {
        //       nombre: nombre,
        //       coordenadas: new GeoPoint(latitud, longitud),
        //       //timestamp: serverTimestamp()
        //     });
        //     console.log("Lugar agregado correctamente, ID:", docRef.id);
        //     alert("Se ha añadido exitosamente")
        //     // Resto de tu código después de guardar los datos
        //   } catch (error) {
        //     console.error("Error al agregar el lugar:", error);
        //   }
        //   e.preventDefault();
    })
    //ELIMINAR
    const deleteTask = (id) => deleteDoc(doc(fs, "lugares", id));
    //const deleteTask=id=>fs.collection('lugares').doc(id).delete();
    const btnsDelete = document.querySelectorAll("#delete-place");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async ({ target: { dataset } }) => {

        try {
           await deleteTask(dataset.id);
           alert("Eliminacion exitosa")
        } catch (error) {
          console.log(error);
        }
      })
    );
    //EDITAR
    let editStatus = false;
    let id = "";
    const getTask = (id) => getDoc(doc(fs, "lugares", id));
    //const tasks=document.getElementById("tasks-container");
    const btnsEdit=document.querySelectorAll("#update-place");
    console.log("mierda")
    btnsEdit.forEach((btn) => 
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        console.log("pasa")
        try {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();
          addplace["nombrelugar"].value = task.nombre;
          addplace["latitudlugar"].value = task.coordenadas.latitude;
          addplace["longitudlugar"].value = task.coordenadas.longitude;

          editStatus = true;
          id = doc.id;
          document.getElementById("agregar").style.visibility = "hidden";
          document.getElementById("editar").style.visibility = "visible";
        } catch (error) {
          console.log(error);
        }
      })
    );
    const updateTask = (id, newFields) =>
    updateDoc(doc(fs, "lugares", id), newFields);

    const saveTask = (nombre, latitud, longitud) =>
    addDoc(collection(fs, "lugares"), { nombre, coordenadas: new GeoPoint(latitud, longitud) });

      const updateplace=document.querySelector('#add-place')
      updateplace.addEventListener("submit", async (event) => {
      event.preventDefault();

      const clickedButtonId = event.submitter.id;
      if (clickedButtonId === "agregar") {
  
      } else if (clickedButtonId === "editar") {
        const nombre = addplace["nombrelugar"].value;
       const latitud = parseFloat(addplace["latitudlugar"].value);
       const longitud = parseFloat(addplace["longitudlugar"].value);
        try {
          if (!editStatus) {
            console.log("entra if")
             await saveTask(nombre, latitud, longitud);
          } else {
            console.log("entra else")
            await updateTask(id, {
              nombre: nombre,
              coordenadas: new GeoPoint(latitud, longitud)
            });
            alert('Se ha actualizado exitosamente')
            
            editStatus = false;
            id = "";
            console.log("debe cambiar texto")
            document.getElementById("editar").style.visibility = "hidden";
            document.getElementById("agregar").style.visibility = "visible";
            // addplace["agregar"].innerText = "Save";
          }
          console.log("cuando llega aqui")
          updateplace.reset();
          nombre.focus();
          location.reload();
        } catch (error) {
          console.log(error);
        }
      }
      // const nombre = addplace["nombrelugar"].value;
      // const latitud = parseFloat(addplace["latitudlugar"].value);
      // const longitud = parseFloat(addplace["longitudlugar"].value);
        
      // try {
      //   if (!editStatus) {
      //     console.log("entra if")
      //      await saveTask(nombre, latitud, longitud);
      //   } else {
      //     console.log("entra else")
      //     await updateTask(id, {
      //       nombre: nombre,
      //       coordenadas: new GeoPoint(latitud, longitud)
      //     });
    
      //     editStatus = false;
      //     id = "";
      //     console.log("debe cambiar texto")
      //     document.getElementById("editar").style.visibility = "hidden";
      //     document.getElementById("agregar").style.visibility = "visible";
      //     // addplace["agregar"].innerText = "Save";
      //   }
      //   console.log("cuando llega aqui")
      //   updateplace.reset();
      //   nombre.focus();
      // } catch (error) {
      //   console.log(error);
      // }
    });
    // const deleteplace=document.querySelector('#delete-place');
    // deleteplace.forEach(btn=>{
    //     btn.addEventListener("click", async (e) => {
    //         //e.preventDefault();
    //         await deleteTask(e.target.dataset.id);
    //     })
    // })
    
    

