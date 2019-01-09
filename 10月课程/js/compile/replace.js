// // var str='Visit Microsoft';
// // console.log(str.replace('Microsoft','alibaba'));
// // var money='$zvvxcvcxvx$';
// // console.log(money.replace(/\$/g,'人民币'));

// let html = `abc{{username}}edfcccc`;
// let reg = /\{\{(.*)\}\}/gm;//括号分组
// console.log(reg.test(html), RegExp.$1); //正则表达式test方法测试
// let obj={
//     'username':'唐唐'
// }
// function compile(html)
// {
//    if(/\{\{(.*)\}\}/.test(html))
//    {
//        let key=RegExp.$1;
//        html.replace(/\{\{(.*)\}\}/gm,obj[key]);
//    } 

// }
const html = `
  <view>
    <text>{{username}}</text>
  </view>
`;
let obj = {
  'username': '唐唐'
};

function compile(html) {
  
  if (/\{\{(.*)\}\}/.test(html)) {
    let key = RegExp.$1;
    html = html.replace(/\{\{(.*)\}\}/gm, obj[key]);
  }
  return html;
}

const compiledHTML = compile(html);
console.log(compiledHTML);
