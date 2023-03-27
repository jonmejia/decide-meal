function Dinner(){
    const dinnerFoods: any[] = ["Steak and Asparagus","Spagatti and Meatballs","Tacos","Salmon and Brocolli","Lasagna"]
    return dinnerFoods[Math.floor(Math.random()* dinnerFoods.length)]
}

export default Dinner