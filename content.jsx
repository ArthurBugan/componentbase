import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './dashboard';


const Content = function() {
	return (
		<div>
			<Switch>
				<Route
					path="/outro"
					render={props => (
						<Dashboard {...props} />
					)}
				/>
			</Switch>
		</div>
	);
};

export default Content;
