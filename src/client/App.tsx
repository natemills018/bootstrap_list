import React, { useState, useEffect } from 'react';
import { BrowserRouter, Router, Routes, Route} from 'react-router-dom';
import Annoucements from './Components/Annoucements';
import AddTodo from './Components/AddTodo';
import Home from './Views/Home';
import List from './Views/List';
interface AppProps {}

const App = (props: AppProps) => {
	
	return (
		<BrowserRouter>

		<Routes>

			
			<Route
				path='/todos/new'
				element={<AddTodo />}
			/>
			<Route
				path='/'
			element={<Home />}
			/>
			<Route
				path='/todos'
				element={<List />}
			/>
			<Route
				path='/'
				// element={Home}
			/>
			<Route
				path='/'
				// element={Home}
			/>
			<Route
				path='/'
				// element={Home}
			/>

		</Routes>


		</BrowserRouter>
	);
};

export default App;