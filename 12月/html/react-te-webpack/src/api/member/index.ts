import {MemberEntity} from '../../model';
import {members} from './mockData';

// 既然是异步请求数据 生命周期中可以then()的函数
const fetchMembers = ():Promise<MemberEntity[]> => {
    return Promise.resolve(members);
}

export const memberAPI = {
    fetchMembers
}