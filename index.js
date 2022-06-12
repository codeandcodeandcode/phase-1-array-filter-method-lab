function findMatching(arr, str) {
    let newArr = arr.filter(i=>i.toLowerCase()==str.toLowerCase());
    return newArr;
}

