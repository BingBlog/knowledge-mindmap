/**
 * 输出以下代码运行结果，为什么？如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法
 * 
 * https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/389
 */

const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res)
  })
}
test()


