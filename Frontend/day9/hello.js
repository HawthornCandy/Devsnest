const obj1 = {
    obj: function (a = 0, b = 1) {
        console.log(this.objName, a, b);
    }
}

const obj2 = {
    objName: "this is a second object"
};

// Call
obj1.obj.call(obj2);

// Apply
obj1.obj.apply(obj2, [3, 5]);

// Bind
const ab = obj1.obj.bind(obj2, 7, 8);
ab()
