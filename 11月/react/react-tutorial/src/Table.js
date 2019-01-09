import React,{Component} from 'react';
class Table extends Component{
render(){
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Eileen</th>
                    <th>Engineer</th>
                </tr>
                <tr>
                    <th>Eila</th>
                    <th>doctor</th>
                </tr>
                <tr>
                    <th>Json</th>
                    <th>Engineer</th>
                </tr>
            </tbody>
        </table>
    );
}
}
export default Table;