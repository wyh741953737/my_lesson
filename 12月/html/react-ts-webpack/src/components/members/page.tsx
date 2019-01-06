import * as React from 'react';
import {MemberEntity} from '../../model';
import {memberAPI} from '../../api/member';
import {MemberHeader} from './memberHeader';
import {MemberRow} from './memberRow';
// import {Link} from 'react-router-dom';



interface State{
    members: MemberEntity[]
}
interface Props{

}

export class MembersPage extends React.Component<Props,State>{
    constructor(props){
        super(props);
        this.state={
            members:[]
        };
    };
    public componentDidMount(){
        memberAPI.fetchMembersAsync()
          .then(members=>{
              this.setState({
                  members
              })
          })
    };
    public render () {
        // console.log(this.state.members);
        return (
          <div className="row">
            <h2>Members Page</h2>
            <table className="table">
              <thead>
                <MemberHeader />
              </thead>
              <tbody>
              {
                this.state.members.map((member) => (
                  <MemberRow 
                    key={member.id}
                    member={member}/>
                ))
              }
              </tbody>
            </table>
          </div>
    
        )
    }
    
} 

// const MemberHeader = () =>{
//     return(
//         <tr>
//             <td>Avatar</td>
//             <td>Id</td>
//             <td>Name</td>
//         </tr>
//     )
// }

// const MemberRow = (member:MemberEntity) => {
//     return(
//         <tr key={member.id}>
//             <td><img src={member.avatar_url} className="avatar"/></td>
//             <td><span>{member.id}</span></td>
//             <td><span>{member.login}</span></td>
//         </tr>
//     )
// }
   