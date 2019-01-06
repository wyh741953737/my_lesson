import {MemberEntity} from '../../model';
import {members} from './mockData';


//组件划分的粒度，循环，都可以做一个组件 
// 函数式组件 <props>({member})
const baseURL = 'https://api.github.com/orgs/lemoncode';

// 既然是异步请求数据 生命周期中可以then()的函数
const fetchMembers = ():Promise<MemberEntity[]> => {
    return Promise.resolve(members);
}

const fetchMembersAsync = ():Promise<MemberEntity[]>=>{
    const membersURL = `${baseURL}/members`;
    return fetch(membersURL)
            .then(response => response.json())
            .then(mapToMembers);
}
const mapToMembers = (githubMembers:any[]):MemberEntity[] => {
    return githubMembers.map(mapToMember);
}

const mapToMember =(githubMember):MemberEntity => {
    return {
        id:githubMember.id,
        login:githubMember.login,
        avatar_url:githubMember.avatar_url
    }
}

const saveMember = (member:MemberEntity):Promise<boolean>=>{
    // insertMember(member);
    return Promise.resolve(true);
}

// const insertMember = (member:MemberEntity) => {
//     member.id = members.length
//     mockMembers = [...members,member]
// }

export const memberAPI = {
    fetchMembers,
    fetchMembersAsync,
    saveMember
}