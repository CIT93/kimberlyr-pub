import { DecisionMaker } from './decision.js';
import { saveLS } from './storage.js';

export const renderTable = (userDataArray) => {
    const tableH = document.querySelector('#tableHolder');
    tableH.innerHTML = ''; 

    if (userDataArray.length > 0) {
        const table = document.createElement('table');
        table.id = 'routineTable';
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['Energy Level', 'Time Available', 'Motivation', 'Advice', 'Actions'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        userDataArray.forEach((userData, index) => {
            const row = tbody.insertRow();

            const energyCell = row.insertCell(0);
            const timeCell = row.insertCell(1);
            const motivationCell = row.insertCell(2);
            const adviceCell = row.insertCell(3);
            const actionsCell = row.insertCell(4);

            energyCell.textContent = userData.energyLevel;
            timeCell.textContent = userData.timeAvailable;
            motivationCell.textContent = userData.hasMotivation ? 'Yes' : 'No';
            const decisionMaker = new DecisionMaker(userData.energyLevel, userData.timeAvailable, userData.hasMotivation);
            adviceCell.textContent = decisionMaker.getAdvice();

            const editRow = (index) => {
                const userData = userDataArray[index];
                document.querySelector('#energyLevel').value = userData.energyLevel;
                document.querySelector('#timeAvailable').value = userData.timeAvailable;
                document.querySelector('#hasMotivation').value = userData.hasMotivation ? 'true' : 'false';
                userDataArray.splice(index, 1);
                saveLS(userDataArray);
                renderTable(userDataArray);
            };

            const deleteRow = (index) => {
                userDataArray.splice(index, 1);
                saveLS(userDataArray);
                renderTable(userDataArray);
            };

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = () => editRow(index);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteRow(index);

            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
        });
        table.appendChild(tbody);
        tableH.appendChild(table);
    }
};