const saveLS = (advData) => {
    const serializedArr = JSON.stringify(advData);
    localStorage.setItem("adv", serializedArr);
};

const getLS = () => {
    const retrievedArr = localStorage.getItem("adv");
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
};

const advData = getLS();

export { advData, saveLS, getLS };