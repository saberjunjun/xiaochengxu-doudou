import Mock from './mock'

function ajax(data, fn) {
    // 模拟数据
    var res = Mock.mock({
      'data|10': [{
        'id|+1': 1,
        'img': "@Image(125x125)",
        'title': '@ctitle(8,18)',
        'num': '@integer(1,20)',   
        'text': '@cparagraph(1)',
        'star': '@integer(0,5)'
      }]
    })
    fn(res);
}

module.exports = {
  ajax,
}