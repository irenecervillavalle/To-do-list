import React, {useState} from "react";

//create your first component

const Home = () => {
	const [inputValue,setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
	const validateInput = () => {if(inputValue === "") alert("No hay tareas, añadir tareas")};
	return (
	<div className="container">
		<h1 className="h1">todos</h1>
		<ul>
			<li>
				<input className="input"
				type="text"
				onChange={(e) => setInputValue(e.target.value)}
				value={inputValue}
				onKeyDown={(e) => { 
					if (e.key === "Enter") {setTodos(todos.concat(inputValue));
				}
			}
		}
				placeholder="What´s needs to be done?"></input>
				
			</li>	
			{todos.map((item, index) => (
			<li>
				 {item} {" "}
				 <i 
				 className="fa-solid fa-x" 
				 onClick= {() => 
					setTodos(
						todos.filter(
							(t,currentIndex) => 
							index != currentIndex)
					)
						}></i>
							
			</li>
			))}
		
</ul>
<div className="items">{todos.length} items left</div>

</div>
	);
};

export default Home;
