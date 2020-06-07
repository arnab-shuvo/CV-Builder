import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Paragraph from '../Typography';

type Grid = {
	ParentCompProps?: ParentCompProps;
	size?:
		| boolean
		| 'auto'
		| 1
		| 2
		| 3
		| 4
		| 5
		| 6
		| 7
		| 8
		| 9
		| 10
		| 11
		| 12
		| undefined;
	justify?:
		| 'center'
		| 'flex-start'
		| 'flex-end'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
		| undefined;
};
const GridLayout: React.FC<Grid> = (props) => {
	const [childComponent, setChildComponent] = useState<string[]>([]);
	const preventDefault = (e) => {
		e.preventDefault();
	};
	const drop = (e) => {
		preventDefault(e);
		let a: string = e.dataTransfer.getData('component_name');
		if (a === 'Paragraph') {
			setChildComponent((state) => [a, ...state]);
		}
	};
	return (
		<Grid
			style={{ background: 'red', padding: '5px' }}
			item
			onDrop={drop}
			onDragOver={preventDefault}
			spacing={2}
			md={props.size ?? 6}
			justify={props.justify}>
			{childComponent.map((element) => {
				return <Paragraph />;
			})}
		</Grid>
	);
};
export default GridLayout;
