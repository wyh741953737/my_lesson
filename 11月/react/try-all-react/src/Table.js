import React,{Component} from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Form from './Form';
class Table extends Component{
    render(){
        console.log(this.props);
        const {characterData,removeCharacter}=this.props
        console.log(characterData)
        return(
            <table  className="table table-striped">
            <TableHeader></TableHeader>
            <TableBody characterData={characterData}
            removeCharacter={removeCharacter}></TableBody>
            </table>
        );

    }
}

export default Table;