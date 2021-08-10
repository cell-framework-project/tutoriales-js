const additionButton = document.getElementById('addition-button');
const substractionButton = document.getElementById('substraction-button');
const undoButton = document.getElementById('undo-button');

let dataTable = [];

additionButton.addEventListener('click',()=>{

  const numbers = getValues('number-1-input','number-2-input');
  const additionResult = addition(numbers);
  dataTable.push(additionResult);
  console.log(dataTable);

  printTable('table-results',dataTable);

});


substractionButton.addEventListener('click',()=>{

  const numbers = getValues('number-1-input','number-2-input');
  const substractionResult = substraction(numbers);
  dataTable.push(substractionResult);
  console.log(dataTable);

  printTable('table-results',dataTable);

});

undoButton.addEventListener('click',()=>{

  const first = dataTable.shift();
  console.log(first);
  printTable('table-results',dataTable);

});




