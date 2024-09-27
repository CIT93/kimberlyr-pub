const TBL = document.getElementById("tab-data");

function renderTblHeading() {
    const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
  headingTextArr.forEach(function(text){
      const th = document.createElement("th");
      th.textContent = text;
      tr.appendChild(th);
      console.log(tr)
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table
}


function renderTbl(data){
  const table = renderTblHeading();
  const tbody = document.createElement("tbody");
  const tr = document.createElement("tr");

  data.forEach(function(obj){
      
      const Name = document.createElement("td");
      const total = document.createElement("td");
      Name.textContent = obj.firstname;
      total.textContent = obj.cfpTotal;
      tr.appendChild(Name);
      tr.appendChild(total);
      // const trTextArr = ["kimberly", 3, "Large", 20,];
      // const td = document.createElement("td");
      // td.textContent = text;
      // tr.appendChild(td);
      // I'm using this code but changing the vaule adn adding new code to fit with the data input
  }); 

// const td = document.createElement("td");
// const btnEdit = document.createElement("button");
// const btnDel = document.createElement("button");
// btnEdit.textContent = "Edit";
// btnDel.textContent = "Del";
// td.appendChild(btnEdit);
// td.appendChild(btnDel);
// tr.appendChild(td);
tbody.appendChild(tr);
table.appendChild(tbody);
console.log(table);
TBL.appendChild(table);
}

export {renderTbl, renderTblHeading};