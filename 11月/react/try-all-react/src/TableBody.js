import React from 'react';
const TableBody = props => {
  // console.log(props);
  // 函数式组件 纯函数
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <a
            className="btn btn-primary"
            href="javascript:;"
            onClick={() => props.removeCharacter(index)}
          >删除</a>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};
export default TableBody;