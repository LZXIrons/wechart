//=================================
//                                                                                    ||
//                                                                                    ||
const status = true;  //是否关闭控制台打印
//                                     true 开启                                ||
//                                     false 关闭                               ||
//=================================


const assert = status?console.assert:()=>{};
const clear = status?console.clear:()=>{};
const count = status?console.count:()=>{};
const debug = status?console.debug:()=>{};
const dir = status?console.dir:()=>{};
const dirxml = status?console.dirxml:()=>{};
const error = status?console.error:()=>{};
const group = status?console.group:()=>{};
const groupCollapsed = status?console.groupCollapsed:()=>{};
const groupEnd = status?console.groupEnd:()=>{};
const info = status?console.info:()=>{};
const log = status?console.log:()=>{};
const memory = status?console.memory:()=>{};
const profile = status?console.profile:()=>{};
const profileEnd = status?console.profileEnd:()=>{};
const table = status?console.table:()=>{};
const time = status?console.time:()=>{};
const timeEnd = status?console.timeEnd:()=>{};
const timeStamp = status?console.timeStamp:()=>{};
const trace = status?console.trace:()=>{};
const warn = status?console.warn:()=>{};



// 链接  http://caibaojian.com/console.html
// 链接  https://blog.csdn.net/fxss5201/article/details/64967817
module.exports = {
    log:log,                       //控制台打印
    info:info,                     //控制台提示打印
    error:error,                 //控制台报错打印
    warn:warn,                 //控制台警告打印
    dir:dir,                        //显示一个对象所有的属性和方法。
    table:table,                //在控制台打印对象，以表格的形式呈现打印的内容；展现的更完美；
    time:time,                  //计时开始
    timeEnd:timeEnd,     //计时结束
    memory:memory,     //来查看当前的堆的使用情况。
    count:count,              //统计代码被执行的次数
    debug:debug,          //控制台报错信息
    group:group,            //分组打印开始
    groupEnd:groupEnd,  //分组打印结束
    groupCollapsed:groupCollapsed,  //和console.group()相似 不同点是嵌套的输出内容是折叠状态，在有大段内容输出的时候使用这个方法可以使输出版面不至于太长。。。吧
    dirxml:dirxml,  //用来显示网页的某个节点（node）所包含的html/xml代码。
    assert:assert,  //用来判断一个表达式或变量是否为真。如果结果为否，则在控制台输出一条相应信息，并且抛出一个异常。
    trace:trace,  //用来追踪函数的调用轨迹
    profile:profile,  //性能分析开始
    profileEnd:profileEnd,  //性能分析结束
    clear:clear,  //清除控制台上所有信息
    timeStamp:timeStamp,  //实现一个时间戳。
}