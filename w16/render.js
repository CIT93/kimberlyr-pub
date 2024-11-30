
import { FORM, TBL} from "./global.js";
import { saveLS } from "./storage.js";

const renderTblHeading = () =>{
    const table = document.createElement("table");
    table.setAttribute("id", "table-id")
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["First", "Last", "Footprint Total", "Actions"];
  headingTextArr.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table
}

const onUpdate = (index, data) => {
  data.splice(index, 1);
  renderTbl(data);
  saveLS(data)
}

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  btnDel.addEventListener('click', () => {
    onUpdate(index, data);

  })
  btnEdit.addEventListener('click', () => {
    // FORM[1].value = obj.first;
    // FORM[2].value = obj.last;
    // FORM[3].value = obj.houseMembers;
    // FORM[4].value = obj.houseSize;
    // FORM[5].value = obj.foodChoices;
    // FORM[6].value = obj.foodSource;
    // FORM[7].value = obj.water;
    FORM.firstName.value = obj.first;
    FORM.lastName.value = obj.last;
    FORM.housemember.value = obj.houseMembers;
    FORM.houses.value = obj.houseSize;
    FORM.food.value = obj.foodChoices;
    FORM.foodSource.value = obj.foodSource;
    FORM.water.value = obj.waterConsumePoints.toString();
    FORM.dishAndWash.checked = obj.dishAndWash;
    onUpdate(index, data);
  })
  return td;
}

const renderTblBody = data => {
  const tbody = document.createElement("tbody");
  data.forEach((obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["first", "last","total"]
      keys.forEach(key => {
        const td = document.createElement("td");
        td.textContent = obj[key];
        tr.appendChild(td);
      })
    const td = renderTblBtn(obj, index, data);
    tr.appendChild(td);
    tbody.appendChild(tr); 
  }); 
  return tbody;
} 

const renderTbl = (data) => {
  TBL.innerHTML = "";
  if(data.length !== 0) {
  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
  calculateAvg(data);
   }
}

const calculateAvg = (data) => {
  const totalReduce = data.reduce ((sum, ea) => sum + ea.total, 0)
  let tableRef = document.getElementById("table-id");
  let newTR = tableRef.insertRow(-1);
  let newTD = newTR.insertCell(0);
  let newTD_1 = newTR.insertCell(0);
  let newTD_2 = newTR.insertCell(0);
  // let newTD_3 = newTR.insertCell(0);
  // let newTD_4 = newTR.insertCell(0);
  let newLabl = document.createTextNode(`Averge Footprint `)
  let newText = document.createTextNode(`${Math.floor(totalReduce/data.length)}`);
  newTD_1.appendChild(newLabl);
  newTD.appendChild(newText);
}

export {renderTbl};