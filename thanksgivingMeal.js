const thanksgivingMeal = {

    starter : { 
        fruit: "honeydew melon",
        wine: "moscato",
        calories: 180
    },
    entree : {
        meat: "Turkey",
        alt: "Stuffed green peppers",
        vegetables : {
            potatoes: "Creamed mashed potatoes",
            greens: "French beans",
            salad: "Radacchio"
            },
        sides : {
            bread: "garlic bread rolls",
            pasta: "Macaroni and Cheese"
            },
        calories: 450
        },
    
    dessert : {
        ice_cream: "pumpkin-vanilla",
        cake: "frosted pumpkin pie",
        calories: 300
    },
    total_cost : 25.0,
    senior_discount: .10,

    prettyPrint : function(){

 let menuStr = console.log(thanksgivingMeal);

    },
    totalPrice(isSenior) {
        isSenior = true;
        let focusedAttribute= "";
        if (isSenior){
            focusedAttribute = totalcost*.9
            console.log("Your discounted price is:" + focusedAttribute)
        }
        else 
            focusedAttribute = console.log("You are not avaliable for a Senior Discount");
        
    },

    totalCalories : function() {
        return (this.starter.calories + this.entree.calories + this.dessert.calories) },

    caloriesFrom: function(indicator) {
        return (" (Starter " + this.starter.calories + " Entree " + this.entree.calories + " Dessert " + this.dessert.calories);
    } 

};

var fullMeal = document.querySelector(".fullMeal");
fullMeal.textContent = "Welcome! There are so many great options here today. Start your meal off with some honeydew & a glass of moscato. After this, go ahead and get yourself to Turkey or Stuffed green peppers. Pair your main entree with creamy mashed potatoes, french beans, or a racdacchio salad! We have also have sides such as garlic bread roles or mac n' cheese! Lastly, before you go, grab a choice of dessert, either pumpkin-vanillas ice cream or frosted pumpkin pie cake! The variety of eat's is endless today! Happy Thanksgiving!"
let price = document.querySelector(".priceInfo");
price.textContent = "Senior's get a discount! Show that you are atleast 65 years old and you will receive a 10% discount on your Thanksgiving Meal! Adults: 25.00, Seniors: 22.50"; 
let calorieInfo = document.querySelector(".calorieInfo");
calorieInfo.textContent = "P.S. if you are wondering about how many calories there are, the total amount is : " + thanksgivingMeal.totalCalories() + thanksgivingMeal.caloriesFrom() + ")";

