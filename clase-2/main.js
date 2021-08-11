const additionButton = document.getElementById('addition-button');
const substractionButton = document.getElementById('substraction-button');
const undoButtonLast = document.getElementById('undo-button-last');
const undoButtonFirst = document.getElementById('undo-button-first');


let dataTable = [];

additionButton.addEventListener('click',()=>{

  const numbers = getValues('number-1-input','number-2-input');
  const additionResult = addition(numbers);
  dataTable.push(additionResult);
  printTable('table-results',dataTable);
  clearDeleted('deleted');

});


substractionButton.addEventListener('click',()=>{

  const numbers = getValues('number-1-input','number-2-input');
  const substractionResult = substraction(numbers);
  dataTable.push(substractionResult);
  printTable('table-results',dataTable);
  clearDeleted('deleted');

});

undoButtonFirst.addEventListener('click',()=>{
  const first = dataTable.shift();
  console.log(first);
  printTable('table-results',dataTable);
  printDeleted('deleted',first);
});

undoButtonLast.addEventListener('click',()=>{
  const last = dataTable.pop();
  console.log(last);
  printTable('table-results',dataTable);
  printDeleted('deleted',last);
});




