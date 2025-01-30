import React, {useState} from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import styles from './App.module.css'
import CardOne from "./CardOne.jsx";
import Header from './Header.jsx';
import Introduction from "./Introduction.jsx";
import CardTwo from "./CardTwo.jsx";
import Wrapper from "./Wrapper.jsx";
import CardThree from "./CardThree.jsx";
import Navbar from './Navbar.jsx';



function App() {
    const [textInput, setTextInput] = useState("");
    const [job, setJob] = React.useState('None Chosen');
    const [modeToggle, setModeToggle] = useState(true);
    const handleChange = (event) => {
        setJob(event.target.value);
    };
    const appModeToggleFunction = () => {
        setModeToggle(prevModeToggle => !prevModeToggle);
        console.log(modeToggle);
    }

    return (
        <>
            <Navbar modeToggle={modeToggle} setModeToggleFunction={appModeToggleFunction} />
            <div className={modeToggle ? styles.appBodyDark : styles.appBodyLight}>
                <Header headingTitle={"Profile App"}/>
                <Introduction introductionTitle={"About"} introductionDescription={"\n" +
                    "\n" +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non suscipit nulla, " +
                    "at ultrices lectus. Nam at malesuada neque. Nunc lobortis dignissim turpis, sit amet " +
                    "malesuada justo mattis facilisis. Sed in dignissim risus. Aliquam eget ante tincidunt, " +
                    "ullamcorper risus gravida, tempor ante. Nunc sed elit quis mi pretium tempus in tincidunt " +
                    "arcu. Duis eget varius mauris, sed elementum odio. Donec magna nulla, imperdiet sed " +
                    "fringilla nec, elementum tempor metus. Sed cursus rhoncus purus, nec tincidunt nibh. " +
                    "Suspendisse sed turpis nulla. Mauris egestas efficitur enim. Phasellus porta interdum sem, " +
                    "id vestibulum enim luctus dignissim. Sed venenatis nisl sed justo vulputate ultricies. " +
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "}/>

                <Wrapper>
                    <h4>Options</h4>
                    <p>Below, you can give this individual a name, and choose the background color behind them.</p>
                </Wrapper>

                <label>Choose Job:</label>
                <select value={job} onChange={handleChange}>
                    <option value="None Chosen">None Chosen</option>
                    <option value="Builder">Builder</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Teacher">Teacher</option>
                </select>
                <label>What is their name?</label>
                <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                />
                <button onClick={
                        () => {setTextInput("");setJob("None Chosen");}
                }>Reset</button>
                <div className={modeToggle ? styles.darkCardDisplayArea : styles.lightCardDisplayArea}>
                    <CardOne textFilter={textInput} job={job}/>
                    <CardTwo textFilter={textInput} job={job}/>
                    <CardThree textFilter={textInput} job={job}/>
                </div>
            </div>
            </>
            )
            }

            export default App
