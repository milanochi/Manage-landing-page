// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Comments from './Comments';
import MyTasks from './MyTasks';

import Header from './Header';
import HeroSection from './HeroSection';
import About from './About';
import Testimonials from './Testimonials';
import MoreInfo from './MoreInfo';
import Footer from './Footer';

export const UserContext = React.createContext();
export const UserName = React.createContext();
 
const App = ({ name }) => {
const [task, setTask] = useState([{
  id: 1,
  message: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  createdAt: "1 month ago"

},
{
  id: 2,
  message:  "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
  createdAt: "2 weeks ago"
}
])

//Add task;
const addTask = (values) => {
  let id = Math.floor(Math.random() * 10000) + 1;
  let newTask = {id, ...values};
  setTask([...task, newTask]);
}

  return (
    <div >
      
          <Header />
          <HeroSection />
          <About />
          <Testimonials />
          <MoreInfo />
          <Footer />
       {/* <MyTasks tasks={task} />
       <Comments onAdd={addTask} /> */}
      
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }