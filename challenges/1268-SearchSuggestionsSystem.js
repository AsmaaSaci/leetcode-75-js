var suggestedProducts = function(products, searchWord) {
    products.sort();
    let result = [];
    let prefix = '';
    
    for (let char of searchWord) {
        prefix += char;
        let temp = [];
        for (let product of products) {
            if (product.startsWith(prefix)) {
                temp.push(product);
            }
            if (temp.length === 3) break;
        }
        result.push(temp);
    }
    
    return result;
};
