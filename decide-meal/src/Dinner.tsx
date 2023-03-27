function Dinner(){
    const dinnerFoods: any[] = ["Steak and Asparagus","Spagatti and Meatballs","Tacos","Salmon and Brocolli","Lasagna"]
    function decideDinner() {
        alert(dinnerFoods[Math.floor(Math.random()* dinnerFoods.length)]);
      }
    return (
        <button onClick={decideDinner}>Dinner</button>
    )
}

export default Dinner