let recipeList;
async function fetchrecipe()
{
    let res=await fetch("https://dummyjson.com/recipes")
    const recipes=await res.json();
    recipeList= recipes.recipes;
    console.log(recipes)
    display(recipeList)
}
fetchrecipe()

function display(recipes)
{
    const newdiv=document.getElementById('r1');
    newdiv.innerHTML= ''; //Clear previous results
    //to visit each and every recipe
    recipes.forEach(function (show){
        const divv=document.createElement("div");
        divv.classList.add('info');
        const name=document.createElement("p");
        name.textContent=show.name;
        name.classList.add('name')
        const exdiv=document.createElement("div");
        exdiv.classList.add('exdiv');
        const cuisine=document.createElement('p')
        cuisine.textContent='Cuisine : '+show.cuisine;
        const cooktime=document.createElement('p')
        cooktime.textContent='Time Taken : '+show.cookTimeMinutes + 'mins';
        if(show.cookTimeMinutes === 0)
            cooktime.textContent='Time Taken : 5mins';
        else
            cooktime.textContent='Time Taken : '+show.cookTimeMinutes + 'mins';
        //create button
        const button=document.createElement('button')
        button.textContent="View Recipe"
        button.classList.add('click')
        //create img element in new div
        const pic=document.createElement("img");
        pic.src=show.image;
        pic.alt=show.name;
        //create divtwo 
        const divtwo=document.createElement("div");
        divtwo.classList.add('divtwo');
        //create modal
        const container=document.createElement('div')
        container.classList.add('container')
        const modal=document.createElement('div')
        modal.classList.add('modal')
        modal.style.display='none';
        //creating data in modal
        const closemodal= document.createElement('button') //<button onclick="closewindow()">Close</button>
        closemodal.textContent="❌"
        closemodal.classList.add('close')
        //close functalionality
        closemodal.onclick= () =>{
            container.style.display='none'
        };
        const names=document.createElement('h1');
        names.textContent=show.name;
        const head=document.createElement('h3');     //adds head
        head.textContent = 'REQUIRED INGREDIENTS:';
        //create ingredients list
        const inglist = document.createElement('ul')   //adds ingredients
        show.ingredients.forEach(function (ingredient){
            const lis=document.createElement('li')
            lis.textContent=ingredient;
            inglist.appendChild(lis)
        })
        //create instructions list
        const heading=document.createElement('h3');     //adds head
        heading.textContent = 'INSTRUCTIONS: ';
        const inlis = document.createElement('ul')   //adds ingredients
        show.instructions.forEach(function (instruction){
            const ins=document.createElement('li')
            ins.textContent=instruction;
            inlis.appendChild(ins)
        })
        //NOTE
        const note=document.createElement('h2');     //adds head
        note.textContent = '" Lick your fingures..! Enjoy your tasty food...😋🤤"';
        note.classList.add('note')
        //to display the modal
        modal.append( closemodal, names,head, inglist, heading, inlis, note)
        container.appendChild(modal)
        document.body.appendChild(container)
        //after clicking view recipe button functionality
        function see()
        {
            if(modal.style.display==='block')
            {
                modal.style.display='none';
                container.style.display='none';
            }
            else
            {
                modal.style.display='block';
                container.style.display='block';
            }
        }
        button.addEventListener('click',see)
        container.addEventListener('click',see)
        exdiv.append(cuisine,cooktime,button)
        divtwo.append(exdiv,pic)
        divv.append(name,divtwo)
        newdiv.append(divv) 
    });
}
//Searching functalionality
const searchinput=document.getElementById('search')
searchinput.addEventListener("input",function (event){
    let searchText = event.target.value;
    let searchedRecipe = recipeList.filter(function(recipe) {
        return recipe.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(searchedRecipe)
    display(searchedRecipe);
    if(searchedRecipe == ''){
        alert('no data found')
    }
    document.querySelector('#foot').style.display = 'none';
}); 
//select option functionality
const option=document.getElementById('opt')
option.addEventListener("input",function (event){
    let text = event.target.value;
    let options = recipeList.filter(function(select) {
        return select.mealType.includes(text);
    });
    console.log(options)
    display(options);
    document.querySelector('#foot').style.display = 'none';
}); 