// 假定数组 M 中每个元素都代表一个模块，其结构为 { id: 1, deps: [ 2, 3 ] }，id 即模块的唯一标识，deps 包含该模块所依赖模块的 id。要求对 M 进行排序，结果中任何元素都出现在它的依赖模块之后。

// 输入：

// [ { id: 4, deps: [1] }, { id: 3, deps: [2] }, { id: 2, deps:[] }, { id: 1, deps: [2, 3]} ]

// 输出：

// [ { id: 2, deps:[] }, { id: 3, deps: [2] }, { id: 1, deps: [2, 3]}, { id: 4, deps: [1] }]

/**
 * 
 * @param {*} dependences 
 */
function dependenceSort(dependences) {
    let cache = {};
    let result = [];

    let length = dependences.length;

    while (result.length < length ) {
        for (let i = 0; i < length; i++) {
            let current = dependences[i];
            // 已经入队，不用处理
            if (cache[current.id]) {
                continue;
            }

            // 没有入队，且依赖为空，直接入队
            if (current.deps.length === 0) {
                result.push(current);
                cache[current.id] = true;
            }
            // 没有入队，且有依赖
            else {
                // 如果依赖，已经全部入队，则可以入队
                if (!hasOtherDep(current.deps)) {
                    result.push(current);
                    cache[current.id] = true;
                }
            }
        }
    }

    return result;

    function hasOtherDep(deps) {
        const length = deps.length;
        for (let i = 0; i < length; i++) {
            if (!cache[deps[i]]) {
                return true;
            }
        }
        return false;
    }

}

const deps = [ { id: 4, deps: [1] }, { id: 3, deps: [2] }, { id: 2, deps:[] }, { id: 1, deps: [2, 3]} ];
console.log(dependenceSort(deps));