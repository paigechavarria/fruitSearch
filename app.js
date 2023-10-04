const input = document.querySelector('input'); //the name of input
const suggestions = document.querySelector('.suggestions ul'); //the ul inside the div class 'suggestions'


const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


//filtering string through fruits
function search(str) {
    let toLowerCase = str.toLowerCase(); //making input lowerCased so it will work if you use uppercase
	let results = [];

        for(let fruit of fruits){
            let lowFruit = fruit.toLowerCase(); //making fruits lowerCased so that it works with the search bar
            if(lowFruit.includes(toLowerCase)){ //if the iterated fruit includes the input string
                results.push(fruit);
            }
        } 
    return showSuggestions(results);
}


//
function hover(e){
    const li = e.target; //selects the li when hover
    li.style.background = 'rgba(250, 250, 250, .2)';
    li.style.color = 'orangered';
    setTimeout( () => {}, li.addEventListener('mouseout', () => { //instead of adding a delay, I added an event listener so that when the mouse is off of the target the effects go away
        li.style.background = 'none';
        li.style.color = 'black';
    }));
}


function searchHandler(e) {
    suggestions.innerHTML = ''; //this prevents the fruit options from repeating
	search(input.value); 
    if(input.value === ''){ //if there is nothing as the input value
        suggestions.innerHTML = ''; //have nothing in the suggestions 
    }
}

//styling li's
function style(eachFruit){
    eachFruit.style.marginTop = '10px';
    eachFruit.style.marginBottom = '10px';
    eachFruit.style.padding = '8px';
}


//adding the results to the body 
function showSuggestions(results) {
    for(let fruit of results){
        const newLi = document.createElement('li');
        newLi.append(fruit); //adding each matching fruit to a new Ul 
        suggestions.append(newLi);
        newLi.addEventListener('mouseover', hover); //adding the event listener inside function so that I have acces to the newLi variable
        style(newLi);
    }
}

//initializing input values and setting ul to have an empty value
function useSuggestion(e) {
	input.value = e.target.innerText;
    suggestions.innerHTML = '';
}

suggestions.addEventListener('click', useSuggestion);
input.addEventListener('keyup', searchHandler);
