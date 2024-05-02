function chunkArrayInGroups(arr, size) {

    var groups = [];
    while (arr.length > 0) {
        groups.push(arr.splice(0, size));
    }
    return groups;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);




function bouncer(arr) {
    return arr.filter(function(elem) {
        return elem;
    });
}

bouncer([7, "ate", "", false, 9, "hey", undefined]);