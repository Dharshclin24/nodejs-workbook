// Write your Recipe CRUD App code here!

// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------

// importing our Node modules
import express from "express"; // the framework we use to build a web server
import fs from "fs/promises"; // the File System module that lets us read files

// Creating an instance of the express module so that we can use all of its superpowers, including its functions, properties, etc.
const app = express();

// Define which port our server should listen to receive requests
const port = 3000;

// say that we're using JSON data type
// Our server will receive data as JSON, and respond with JSON
app.use(express.json());

// run the function that turns on the server to listen for requests on the port
app.listen(port, () => {
  console.log(`My server is listening on port ${port}!`);
});

// --------------------------

// ---------------------------------
// Helper Functions
// --------------------------------

// helper function that will get the recipes data from data.json file
async function getAllRecipes() {
 
 // this syntax uses async /await 
  const data = await fs.readFile("../data.json", "utf8");
  return JSON.parse(data);
}
   async function getOneRecipe(recipeIndex) {
     const data = await fs.readFile("../data.json", "utf8");
     const parsedData = JSON.parse(data);
     const parsedRecipe = parsedData[recipeIndex];
     return parsedRecipe;
   }

// ---------------------------------
// API Endpoints
// ---------------------------------
// TODO: API Endpoint for handling GET requests to /get-all-recipes
app.get("/get-all-recipes", async (req, res) => {
  const allRecipes = await getAllRecipes();

  // send the recipes data as JSON in the response
  res.send(JSON.stringify(recipes));
});

// TODO: API Endpoint for handling GET requests to /get-one-recipe/:index
// getting one recipe by its index
app.get("/get-one-recipe/:index", async (req, res) => {
  const recipeIndex = req.params.index;

  // we need to get the recipe from the data.json
  const recipe = await getOneRecipe(recipeIndex);

  // then send the recipe  back in the response
  res.send(JSON.stringify(recipe));

  console.log(`The user is trying to get the recipe at index ${recipeIndex}`);
});

// TODO: API Endpoint for handling POST requests to /add-one-recipeIndex}`);

// TODO: API Endpoint for handling GET requests to /delete-one-recipe/:index

// TODO: API Endpoint for handling GET requests to /update-one-recipe-name/:index/:newName
