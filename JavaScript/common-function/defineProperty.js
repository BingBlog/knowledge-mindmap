// export function proxy (target: Object, sourceKey: string, key: string) {
//     sharedPropertyDefinition.get = function proxyGetter () {
//       return this[sourceKey][key]
//     }
//     sharedPropertyDefinition.set = function proxySetter (val) {
//       this[sourceKey][key] = val
//     }
//     Object.defineProperty(target, key, sharedPropertyDefinition)
//   }

//   // ... 忽略无关代码
//   proxy(vm, `_data`, key)



/**
 * Created by d on 2021/2/14.
 */

/*******Object.defineProperty 方式实现观察联动***********/
/**
 * 监控对象
 */
 const monitorObj = {
    name:''
  }
  //
  // 观察者，在监控对象name值发生修改时执行逻辑
  function observer(oldVal, newVal) {
    console.info('name属性的值从 '+ oldVal +' 改变为 ' + newVal);
  }
  // 观察者，在监控对象name值发生修改时执行逻辑
  function observerAge(oldVal, newVal) {
    console.info('age属性的值从 '+ (oldVal||0) +' 改变为 ' + newVal);
  }
  
  // 定义name属性及其set和get方法
  Object.defineProperty(monitorObj, 'name', {
    enumerable: true,
    configurable: true,
    get: function() {
      return this.name;
    },
    set: function(val) {
      //调用处理函数
      observer(this.name, val)
      this.name = val;
    }
  });
  
  monitorObj.name = '爱钱的大傻憨'
  
  /**************set 实现观察联动******************/
  class Monitor {
    constructor(name) {
      this.name = name;
    }
    /**set 监控联动**/
    set name(val) {
      observer(name, val);
      name = val;
    }
  }
  
  const monitorEntity = new Monitor('爱钱的大傻憨');
  
  /*************Reflect和Proxy***********************/
  const observerProxy = new Proxy(monitorEntity, {
    set(target, property, value, reciever) {
      if (property === 'age') {
        observerAge(target[property], value);
      }
  
      Reflect.set(target, property, value, reciever);
    }
  });
  
  observerProxy.age = '18';