let data_num = {

    '1':{
        '1-1':{},
        '1-2':{}
    },

    '2':{

        '2-1':{
            '2-1-1':{},
            '2-1-2':{
                '2-1-2-1':{}
            }
        },

        '2-2':{}
    },
};

let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };

// console.log(data['1']);

const container = document.querySelector('.container');

const createTree = function(container, data) {
    // Object.keys(data)
    //     .forEach((k) => {
    //         console.log(k);
    //     })

    for (const key in data) {
        console.log(key);
        console.log(Object.keys(data[key]));
        console.log(Object.keys(data[key]).length);
        if (!Object.keys(data[key]).length) {
            let li = document.createElement('li');
            li.innerHTML = key;
            container.append(li);
            console.log(li);
            continue;
        }
        let li = document.createElement('li');
        let ul = document.createElement('ul');
        container.append(li);
        li.append(key, ul);
        createTree(ul, data[key]);
    }
}
createTree(container, data);

// first cycle
// data => Fish
// <div class='container'><li>Fish <ul></ul> </li></div>

// Fish => trout
// <ul><li>trout</li></ul>
// Fish => salmon
// <ul><li>trout</li><li>salmon</li></ul>