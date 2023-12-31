import React from "react";

// JSX 문법을 사용했을 때
function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`}</h2>
    </div>
  );
}

// JSX 문법을 사용하지 않았을 때
// function Book(props) {
//   return React.createElement(
//     'div',
//     null,
//     [
//       React.createElement(
//         'h1',
//         null,
//         `이 책의 이름은 ${props.name}입니다.`
//       ),
//       React.createElement(
//         'h2',
//         null,
//         `이 책은 총 ${props.numOfPage}페이지로 이뤄져 있습니다.`
//       )
//     ]
//   )
// }

export default Book;
