// REACT
import React, { lazy, Suspense } from 'react'

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// STRINGS
import Strings from 'Lang/Strings.json'

// CONTEXTO
import MainContext from 'Context/MainContext'

// PAGINAS
const Index = lazy(() => import('Pages/Index'))

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
			<Suspense fallback={<span>loading ...</span>}>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Index} />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</MainContext.Provider>
	)
}

export default App
