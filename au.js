import { auth, signInWithEmailAndPassword, getFirestore, collection, getDocs, setDoc, doc, getDoc, fs } from './firebase.js';


const botonregresar = document.getElementById('regresar');
botonregresar.addEventListener('click', () => {
    location.replace('./IO.html')
})
const iniciosession = document.getElementById('acceso');
iniciosession.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = document.querySelector('#codigo').value;
    const password = document.querySelector('#password').value;
    console.log('sdf');
    const usuario = await getDoc(doc(fs, 'usuarios', `${user}`));

    try{
        if(usuario){
            if(usuario.data().contra == password){
                const img = usuario.data().img
                console.log('Acceso si')
               location.replace(`./Study/${img}.png`)
            }
            else{
                console.log('Acceso no')
            }
        }     
    } catch{
        console.log('Usuario no existente')
    }
})