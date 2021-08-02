const additionButton = document.getElementById('addition-button');

let dataTable = [];

additionButton.addEventListener('click',()=>{

  const numbers = getValues('number-1-input','number-2-input');
  const additionResult = addition(numbers);
  dataTable.push(additionResult);
  console.log(dataTable);

  printTable('table-results',dataTable);

});



