function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    { onClick: () => setIsClicked(true) },
    isClicked ? 'Clicked!' : 'Click here!'
  )
}

// ReactDOM의 render 함수를 사용해서
// react component를 domContainer에 rendering하는 code
// 이 코드가 필요한 이유? => script tag를 사용해 component를 가져왔다 해도, 
// component가 화면에 보이는 것이 아니기 때문이다. 
const domContainer = document.querySelector('#root')
ReactDOM.render(React.createElement(MyButton), domContainer)