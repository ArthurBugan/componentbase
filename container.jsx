import React from 'react';
import Loadable from 'react-loadable';
import Loader from 'Components/Loader';


const LoadableContainer = Loadable({
	loader: () => import('./content'),
	loading: Loader,
});

window.onload = () => LoadableContainer.preload();

const Container = function() {
	return (
		<LoadableContainer />
	);
};

export default Container;
