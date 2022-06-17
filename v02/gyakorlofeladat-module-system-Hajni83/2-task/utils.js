const fullName = (element) =>{
    return element.firstName + ' ' + element.lastName;
}

const generateUserList = (arr) => {
    const isAdult = (age) => {
        if (age >= 18) {
          return true;
        }
        return false;
      };

    newArr = [];
    arr.forEach(element => {
        newElement = {};
        newElement.isAdult = isAdult(element.age);
        newElement.fullName = fullName(element);
        newArr.push(newElement);
    });
    return newArr;
};

const getUserNames=(arr)=>arr.map(item => fullName(item) + ',');

module.exports=Object.freeze({
    generateUserList,
    getUserNames
});