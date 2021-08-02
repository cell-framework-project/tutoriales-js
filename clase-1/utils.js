function getValues(input1Id,input2Id) {
  
  return { 
    number1 : parseFloat(document.getElementById(input1Id).value),
    number2 : parseFloat(document.getElementById(input2Id).value)
  }

}

function addition(numbers) {
  
  return {
    number1:numbers.number1,
    number2:numbers.number2,
    operation:'addition',
    result:numbers.number1+numbers.number2
  }

}

function printTable(tableId,data){

  const table = document.getElementById(tableId);

  let layout = '';

  data.forEach(line => {
    
    console.log(line);

    const row = 
    `<tr>
      <td>${line.number1}</td>
      <td>${line.number2}</td>
      <td>${line.operation}</td>
      <td>${line.result}</td>
    <tr>`;

    layout+=row;

  });

  table.innerHTML = layout;

}
