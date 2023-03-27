function Lunch(){
    const lunchFoods: any[] = ["Turkey Sandwich","Pizza","Chicken with Brocolli","Pad thai","Chicken Ceaser Salad"]
    function decideLunch() {
        alert(lunchFoods[Math.floor(Math.random()* lunchFoods.length)]);
      }
    return (
        <button onClick={decideLunch}>Lunch</button>
    )
}

export default Lunch
