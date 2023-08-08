import style from './App.module.css'; // i change css file name as App.css -> App.module.css 'style is like object'

function App() {
  
  return (
    <div className={style.App}>
       <h1 className={style.name}>Mustafa</h1>
    </div>
  );
}

//------------------------------------------------
// // js function
// const getName = () =>{
//   return 'emir';
// }

// // react component
// const GetNameComponent = () =>{
//   return <h1>Emir</h1>
// }

//---------------------------------------

// const User = (props) =>{
//   return (
//     <div>
//         <h1>{props.name}</h1>
//         <h2>{props.age}</h2>
//         <h1>{props.email}</h1>
//     </div>
//   )
// }

//------------------------------------
// const Job = (props) =>{
//   return (
//     <div>
//       <h3>{props.salary}</h3>
//       <h4>{props.position}</h4>
//       <h5>{props.company}</h5>
//     </div>
//   )
// }
// App component inside.....
// <Job salary={1000} position="Senior SDE" company="Amazon"/>
// <Job salary={3000} position="Junior SDE" company="Google"/>
// <Job salary={4000} position="Project Manager" company="Netflix"/>

//---------------------------------------

export default App;
