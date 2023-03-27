function Breakfast(){
    const breakfastFoods: any[] = ["oatmeal","waffles with turkey bacon","cereal","yogurt","bagel with cream cheese"]
    function decideBreakfast() {
        alert(breakfastFoods[Math.floor(Math.random()* breakfastFoods.length)]);
      }
    return (
        <button onClick={decideBreakfast}>Breakfast</button>
    )
}

export default Breakfast