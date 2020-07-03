// REACT
import React from 'react'

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// ESTILOS
import 'Icons/Icons.css'

// STRINGS
import Strings from 'Lang/Strings.json'

// PAGINAS
import Index from 'Pages/Index/Index'

// CONTEXTO
import MainContext from 'Context/MainContext'

// ESTADO
interface AppState {
	langCode: string
	lang: ILangPackage
}

// ESTADO POR DEFECTO
const DefState: AppState = {
	langCode: 'ES',
	lang: Strings.es,
}

const App: React.FC = () => {
	return (
		<MainContext.Provider value={{ ...DefState }}>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Index} />
				</Switch>
			</BrowserRouter>
		</MainContext.Provider>
	)
}

export default App
