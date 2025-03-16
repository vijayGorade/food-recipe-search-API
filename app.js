



const input=document.querySelector(".input");

const searchBtn=document.querySelector("#searchBtn");
const mainDiv=document.querySelector(".mainRecipeDiv");
searchBtn .addEventListener("click",()=>{

 
    [...mainDiv.getElementsByTagName("div")].forEach((eachDiv)=>{
eachDiv.remove();
    })
   

    if(input.value==='')
        {
    alert("please Enter the valid info ");
    return
        }
        mainDiv.innerText="Searching Please Wait..";
  
    fetchData();


})




async function fetchData (){
    const recipeAllData=fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);
    const response=(await recipeAllData).json();  
    const mainData=(await response);
    
    mainDiv.innerHTML=""
    if(mainData.meals===null)
    {
        mainDiv.innerText="Data is not Found"
        return
    }
    console.log(mainData.meals[5]);
     mainData.meals.forEach((EachRecipe)=>{

const recipeParentConteiner=document.createElement("div");
recipeParentConteiner.className="card";

const  image=document.createElement("img");
image.src=EachRecipe.strMealThumb;

const recipeName=document.createElement("h2");
recipeName.innerText=EachRecipe.strMeal;

const paraType=document.createElement("p");
paraType.innerHTML=`Type : ${EachRecipe.strCategory}`;

const viewBtn=document.createElement("button");
viewBtn.innerText="View Recipe";

recipeParentConteiner.appendChild(image);
recipeParentConteiner.appendChild(recipeName);
recipeParentConteiner.appendChild(paraType);
recipeParentConteiner.appendChild(viewBtn);
mainDiv.appendChild(recipeParentConteiner)
     })

}











