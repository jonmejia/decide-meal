function Lunch(){
    const lunchFoods: any[] = ["Turkey Sandwich","Pizza","Chicken with Brocolli","Pad thai","Chicken Ceaser Salad"]
    return lunchFoods[Math.floor(Math.random()* lunchFoods.length)]
}

export default Lunch 