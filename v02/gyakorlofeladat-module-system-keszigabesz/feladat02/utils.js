const generateUserList = (array) => {
    /* const newArray = [];
    array.forEach(item => {
        const object = new Object;
        item.age < 18 ? object.isAdult = false : object.isAdult = true;
        object.fullName = `${item.firstName} ${item.lastName}`;
        newArray.push(object);
    });
    return newArray; */

    array.map(item => {
        item.age < 18 ? item.isAdult = false : item.isAdult = true;
        item.fullName = `${item.firstName} ${item.lastName}`;
        delete item.age;
        delete item.firstName;
        delete item.lastName;
    } );
    return array
}

const getUserNames = (array) => {
    let stringOfNames='';
    array.forEach(item => {
        stringOfNames = `${stringOfNames}, ${item.firstName} ${item.lastName}`;
      });
    return stringOfNames;
}

module.exports = Object.freeze({
    generateUserList,
    getUserNames
})