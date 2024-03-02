P12 - 
    Building a simple API
    - ${__dirname}/.../.../
    - JSON.parse()

P13 - HTML Template -> {%NAME%}

P14 - 
    Filling the Templates
        - 
        const replaceTemplate = (temp, product) => {
            // use regular expression /g to replaced all the placeholders 
            let output = temp.replace('{%NAME%}'/g, product.productName);

            return output
        }
        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);