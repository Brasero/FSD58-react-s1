import {useState} from "react";
import "./counter.css";

const Counter = () => {
 
 //Ici, count est initialisé à 0 et error est initialisé à une chaîne vide.
 // setCount et setError sont des fonctions permettant de mettre à jour ces états respectifs.
 const [count, setCount] = useState(0)
 const [error, setError] = useState("")
 
 //La fonction increment augmente la valeur de count de 1 et réinitialise le message d'erreur.
 const increment = () => {
  setCount(count + 1)
  setError("")
 }
 
 //La fonction decrement diminue la valeur de count de 1 si count est supérieur à 0. Si count est déjà à 0,
 // elle met à jour le message d'erreur pour indiquer qu'il est impossible de décrémenter en dessous de 0.
 const decrement = () => {
  if (count > 0) {
   setCount(count - 1)
   setError("")
  } else {
   setError("Impossible de décrémenter en dessous de 0");
  }
 }
 
 
 // Le rendu du composant inclut deux boutons pour incrémenter et décrémenter le compteur, ainsi qu'un affichage de la valeur actuelle de count.
 // Si une erreur est présente, elle est affichée en rouge.
 return (
  <>
   <div className={"counter"}>
    <button onClick={decrement} disabled={error}>-1</button>
    {/* Le bouton de décrémentation est désactivé si une erreur est présente, (disabled={error})
    empêchant ainsi toute interaction supplémentaire jusqu'à ce que l'erreur soit résolue.*/}
    <span>{count}</span>
    <button onClick={increment}>+1</button>
   </div>
   {
    error && <span style={{color: "red"}}>{error}</span>
   }
  </>
 )
}

export default Counter