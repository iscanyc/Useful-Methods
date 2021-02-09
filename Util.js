Array.prototype.unique = function () {
    return this.filter((v, i, selfArr) => selfArr.indexOf(v) === i);
}
Array.prototype.uniqueObjectArray = function (key) {
    if (!key) return this;
    this.forEach((v, i, selfArr) => {
        if (selfArr.some((value, index) => value[key] === selfArr[i][key] && i !== index)) {
            delete selfArr[i];
        }
    });
    return this.filter((v) => v != null);
}
Array.prototype.min = function () {
    return Math.min(...this);
}
Array.prototype.max = function () {
    return Math.max(...this);
}
Array.prototype.shuffle = function () {
    return this.sort(() => Math.random() - Math.random())
}
Array.prototype.random = function () {
    return this[Math.randomInteger(1, this.length)]
}
Array.prototype.without = function (array) {
    return this.filter((value) => array.indexOf(value) === -1);

}
String.prototype.format = function (variables) {
    if (!variables) return this;
    let str = this;
    Object.keys(variables).forEach((key) => {
        const regex = new RegExp(`#&${key}#`, "g")
        str = str.replace(regex, variables[key])
    });
    return str;
}
Math.randomInteger = function (min = 1, max = 10) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}