const html=
`<view>
<text>{{username}}</text>
</view>
`;
let username='唐唐';
// {{}}
// 在模板中查找{{key}}  ，key代表任何意思
// 替换成username 变量的值  方法是 replace（允许你查找并且·替换
function compile(html){
    return html;
}
const compileHTML=compile(html);

