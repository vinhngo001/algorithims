// Data Set
// One top level list aff 
const list_aff = [
    {
        aff_id: 1,
        parent_aff_id: null
    },
    {
        aff_id: 2,
        parent_aff_id: 1
    },
    {
        aff_id: 3,
        parent_aff_id: 1
    },
    {
        aff_id: 4,
        parent_aff_id: 2
    },
    {
        aff_id: 5,
        parent_aff_id: 2
    },
    {
        aff_id: 6,
        parent_aff_id: 2
    },
    {
        aff_id: 7,
        parent_aff_id: 2
    },
    // {
    //     aff_id: 10,
    //     parent_aff_id: null
    // },
    // {
    //     aff_id: 11,
    //     parent_aff_id: 10
    // },
    // {
    //     aff_id: 12,
    //     parent_aff_id: 13
    // },
    // {
    //     aff_id: 13,
    //     parent_aff_id: 14
    // },
    // {
    //     aff_id: 14,
    //     parent_aff_id: 10
    // },
];

const recursionListToTree = (items, aff_id = null, link = 'parent_aff_id') =>
    items
        .filter(item => item[link] === aff_id)
        .map(item => ({ ...item, children: recursionListToTree(items, item.aff_id) }));


function doEnhanceListToTree(list) {
    var map = {}, node, roots = [], i;

    for (i = 0; i < list.length; i += 1) {
        map[list[i].aff_id] = i; // initialize the map
        list[i].children = []; // initialize the children
    }

    for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parent_aff_id !== null) {
            list[map[node.parent_aff_id]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}

const new_arr = doEnhanceListToTree(list_aff);
console.log(new_arr)