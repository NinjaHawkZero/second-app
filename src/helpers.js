function choice(items) {
    let idx = Math.floor(Math.random() * items.length);
    return items[idx];
}


function remove(item, items) {
 return items.filter(function(foods) {return foods !== item})
}


export {choice, remove};


