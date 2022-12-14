//Variables
const tableBody = document.getElementById('tableBody');

let description = document.getElementById('description');
let calories = document.getElementById('calories');
let carbs = document.getElementById('carbs');
let protein = document.getElementById('protein');
let submitBtn = document.getElementById('submit');
let totalCalories = document.getElementById('totalCalories');
let totalCarbs = document.getElementById('totalCarbs');
let totalProtein = document.getElementById('totalProtein');

let list = [];

//Reusable Functions

const removeClassOnKeypress = (element, clase) => {
    element.addEventListener('keypress', () => {
        element.classList.remove(clase) 
    });
};

const cleanInputsValue = (input) => {
    input.value = '';
}

//Validate Inputs

removeClassOnKeypress(description, 'border-red-500' );
removeClassOnKeypress(calories, 'border-red-500' );
removeClassOnKeypress(carbs, 'border-red-500' );
removeClassOnKeypress(protein, 'border-red-500' );

const validateInputs = () => {
    description.value ? '' : description.classList.add('border-red-500') 
    calories.value ? '' : calories.classList.add('border-red-500') 
    carbs.value ? '' : carbs.classList.add('border-red-500') 
    protein.value ? '' : protein.classList.add('border-red-500')

    if(description.value && calories.value && carbs.value && protein.value) {
        addToList();
        cleanInputsValue(description);
        cleanInputsValue(calories);
        cleanInputsValue(carbs);
        cleanInputsValue(protein);
        updateTotals();
    }
}

// Update Total

const updateTotals = () => {
    let calories = 0, carbs = 0, protein = 0;

    list.map(item => {
        calories += item.calories,
        carbs += item.carbs,
        protein += item.protein
    });

    totalCalories.innerText = calories;
    totalCarbs.innerText = carbs;
    totalProtein.innerText = protein;
}

//Add Item to the List

const addToList = () => {
    const newItem = {
        description: description.value,
        calories: parseInt(calories.value),
        carbs: parseInt(carbs.value),
        protein: parseInt(protein.value),
    }
    list.push(newItem);
    renderItems();
}

//Remove Item

const removeItem = (index) => {
    list.shift(index);
    renderItems();
}


//Render Items

const renderItems = () => {
    tableBody.innerHTML = '';

    list.map((item, index ) => {
        tableBody.innerHTML += `
            <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${item.description}</th>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${item.calories}</th>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${item.carbs}</th>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">${item.protein}</th>
                <td>
                    <button onclick="removeItem(${index})" id="submit" type="button" data-mdb-ripple="true" data-mdb-ripple-color="light"
                    class="inline-block p-2 bg-red-600 text-white text-2xl leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    type="submit">
                    -
                    </button>
                </th>

            </tr>
        `;
    });
    
    updateTotals();
}