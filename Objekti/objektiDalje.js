const arr = {
    length: 0,
    push (value) {
        this[this.length] = value;
        this.length += 1;
    },
};

arr.push(1);
arr.push(2);
arr.push(3);

console.table(arr);