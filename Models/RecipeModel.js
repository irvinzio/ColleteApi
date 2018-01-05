var mongose = require('mongoose');

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


var recipe = mongoose.Schema({
    url: { type:String },
    idRestaurant: { type:Number },
    name: { type:String },
    prepareTime: { type:Number },
    diners: { type:Number },
    ingredients : [recipeIngredient],
    procedure : [recipeProcedure],
    nutritionFacts : recipeNutritionFacts,
});

module.exports = mongoose.model('Recepi', recipe);


// {
//     "recepi": 
//     {
//       "url": "fake path",
//       "idRestaurant": 1,
//       "name": "a",
//       "prepareTime": 1,
//       "diners": 3,
//       "ingredients" : [
//         {
//           "qty": 2,
//           "idUnit": 0,
//           "idIngredient": 0
//         }
//       ],
//       "procedure" : [
//         {
//           "description": "qweqwe",
//           "orderNo": 1
//         }
//       ],
//       "nutritionFacts" : {
//         "portion": 4,
//         "protein": 4.4,
//         "carbohydrates": 8.6,
//         "fiber": 7.2,
//         "saturatedAG": 0,
//         "monoAG": 0,
//         "poliAG": 0,
//         "cholesterol": 0,
//         "vitaminA": 621.8,
//         "ascorbicAcid": 59,
//         "folicAcid": 29.6,
//         "calcium": 0,
//         "iron": 5,
//         "sodium": 0,
//         "potassium": 1499.6,
//         "sugarG": 0,
//         "selenium": 0,
//         "energeticContent": 44,
//         "totalFats": 0.2,
//         "idUnit": 0,
//         "transAG": 0
//       }
//     }
// }