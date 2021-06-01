function objectCreate(origin) {
    var f = function () {}
    f.prototype = origin;
    return new f();
}


var origin = {
    name: 'zhangsan',
    walk: function() {
        console.log(this.name + 'walk');
    }
};

var pOrigin = Object.create(origin);
console.log(pOrigin);

var p = objectCreate(origin);
console.log(p);3455