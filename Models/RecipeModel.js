var mongose = require('mongoose');

var recipe = mongoose.Schema({
    url: { type:String },
    idRestaurant: { type:Number },
    name: { type:String },
    prepareTime: { type:Number },
    diners: { type:Number },
    ingredients : [recipeIngredient],
    Procedure : [recipeProcedure],
    nutritionFacts : recipeNutritionFacts,
});
var recipeIngredient = mongoose.Schema({
    qty: { type:Number },
    idUnit: { type:Number },
    idIngredient: { type:Number }
});
var recipeProcedure = mongoose.Schema({
    description: { type:String },
    orderNo: { type:Number }
});
var recipeNutritionFacts= mongoose.Schema({
    portion: { type:Number },
    protein: { type:Number },
    carbohydrates: { type:Number },
    fiber: { type:Number },
    saturatedAG: { type:Number },
    monoAG: { type:Number },
    poliAG: { type:Number },
    cholesterol: { type:Number },
    vitaminA: { type:Number },
    ascorbicAcid: { type:Number },
    folicAcid: { type:Number },
    calcium: { type:Number },
    iron: { type:Number },
    sodium: { type:Number },
    potassium: { type:Number },
    sugarG: { type:Number },
    selenium: { type:Number },
    energeticContent: { type:Number },
    totalFats: { type:Number },
    idUnit: { type:Number },
    transAG: { type:Number }
});
var recipeNutritional= mongoose.Schema({
    qty: { type:Number },
    idUnit: { type:Number }
});

mongoose.model('Recipe', recipe);