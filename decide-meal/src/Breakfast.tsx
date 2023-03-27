function Breakfast(){
    const breakfastFoods: any[] = ["oatmeal","waffles with turkey bacon","cereal","yogurt","bagel with cream cheese"]
    return breakfastFoods[Math.floor(Math.random()* breakfastFoods.length)]
}

export default Breakfast