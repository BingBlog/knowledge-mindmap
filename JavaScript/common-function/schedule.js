//JS实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多有两个。完善代码中Scheduler类，使得以下程序能正确输出
class Scheduler {
    add(promiseCreator) { ... }
    // ...
}

const timeout = (time) => new Promise(resolve => {
    setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
    scheduler.add(() => timeout(time))
        .then(() => console.log(order))
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// output: 2 3 1 4

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4

作者：Weismann
链接：https://juejin.cn/post/6844903895957766151
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

class Scheduler {
    constructor(maxQueSize) {
        // 所有的任务队列，存放的是函数
        this.allQue = []
        // 正在执行的任务队列,存放的是Promise
        this.curQue = []
        this.maxQueSize = maxQueSize;
    }

    /**
     *
     * @param {*} promiseCreator () => timeout(time)).then(() => console.log(order)
     */
    // 接受一个函数，执行之后是得到一个Promise，并且本身也返回一个Promise
    add(promiseCreator) {
        this.allQue.push(promiseCreator)
        return this.run(promiseCreator)
    }

    run(promiseCreator) {
        if (typeof promiseCreator !== 'function') {
            return
        }
        if (this.curQue.length >= this.maxQueSize) {
            return new Promise((rs, reject) => {
                promiseCreator.resolve = rs
            });
        } else {
            let p = promiseCreator()
            this.curQue.push(promiseCreator)
            return p.then((res) => {
                promiseCreator.resolve && promiseCreator.resolve(res)
                return res
            }).finally(() => {
                let curQueIndex = this.curQue.indexOf(promiseCreator)
                let curAllQueIndex = this.allQue.indexOf(promiseCreator)
                let nextPromiseCreator
                // 待执行任务队列
                if (curAllQueIndex !== -1) {
                    // this.allQue.splice(curAllQueIndex, 1)
                    nextPromiseCreator = this.allQue[curAllQueIndex + 1]
                }
                // 正在执行的任务队列
                if (curQueIndex !== -1) {
                    // 执行完后出队列，并进行下一个任务
                    this.curQue.splice(curQueIndex, 1)
                    if (nextPromiseCreator) {
                        this.run(nextPromiseCreator)
                    }
                }
            })
        }
    }
}
