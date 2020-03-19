import React from "react";
import ReactDOM from "react-dom";
import Example from './pages/exmaple/exmaple';
import route from './router/router';
import './global.less';

// const App = () => {
//   return (
//     <div>
//       <p>hello wtjos orld</p>
//       <Example/>
//     </div>
//   );
// };
// export default App;
ReactDOM.render(route(), document.getElementById("app"));