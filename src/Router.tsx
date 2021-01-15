import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import EditorRoutes from 'constants/EditorRoutes'
import Editor from 'components/shared/Editor'
import Home from 'pages/Home'

const Router: React.FC = () => (
	<Switch>
		<Route path="/" exact>
			<Home />
		</Route>

		{EditorRoutes.map((route) => (
			<Route key={route.path} path={route.path} exact>
				<Editor {...route} />
			</Route>
		))}
		<Redirect from="*" to="/page-not-found" />
	</Switch>
)

export default Router
