// 实现函数 keys(o, level)，能够获取指定层次的键。

// 示例：
// let o = {
//   x: { a: 1, b: 2 },
//   y: 3
// }
// keys(o, 2) // 返回 ['a', 'b']
// keys(o, 1) // 返回 ['x', 'y']
// keys(o, 3) // 返回 []


function keys(obj, deep) {
    let cache = {};
    let currentDeep = 1;
    walk(obj, currentDeep);
    return cache[deep] || [];

    function walk(obj, currentDeep) {
        Object.keys(obj).forEach((key) => {
            if (!cache[currentDeep]) {
                cache[currentDeep] = [];
            }
            cache[currentDeep].push(key);
            
            if (currentDeep >= deep) {
                return;
            }

            if (typeof obj[key] === 'object') {
                walk(obj[key], currentDeep + 1);
            }
        });
    }
}


let o = {
  x: { 
      a: 1, 
      b: 2 
    },
  y: 3
}

console.log(keys(o, 1));

console.log(keys(o, 2));

console.log(keys(o, 3));