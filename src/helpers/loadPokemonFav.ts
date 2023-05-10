import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadPokemonFav = async(uid = '') => {
    if( !uid ) throw new Error('El UID del usuario no existe');

    try {
        const collectionRef = collection( FirebaseDB, `${ uid }/info/favPkm`);
        const { docs }= await getDocs( collectionRef );
        const data = docs.map( doc => doc.data());
    
        return data[0].pkms
        
    } catch (error) {
        //no tiene pokemones fav registrados
        return []
    }
}