let database=document.querySelector('.database');
let button=document.querySelector('button');
let evenTitle=document.querySelector('#evenTitle');
let agenda=document.querySelector('#agendaInput');
let num=0;
button.addEventListener('click',createTable);
function createTable(){
  let myTable=document.createElement('table')
  database.appendChild(myTable);
  if(evenTitle.value.length==0||agenda.value.length==0)
  alert("Important fields not filled");
  if(num==0){
    num=1;
    let tableHead=document.createElement('thead');
    myTable.appendChild(tableHead);
    let col1Name=document.createElement('th');
    col1Name.textContent='Event Title';
    tableHead.appendChild(col1Name);
    let col2Name=document.createElement('th');
    col2Name.textContent='Agenda';
    tableHead.appendChild(col2Name);
  }
    row=document.createElement('tr');
    myTable.appendChild(row);
    let col1=document.createElement('td');
    col1.textContent=evenTitle.value;
    row.appendChild(col1);
    let col2=document.createElement('td');
    col2.textContent=agenda.value;
    row.appendChild(col2);
}
