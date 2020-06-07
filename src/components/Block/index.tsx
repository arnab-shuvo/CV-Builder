import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { BlockGrid } from './styled';
import GridLayout from '../Layout/index';

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
const Block: React.FC<Grid> = (props) => {
	const [childComponent, setChildComponent] = useState<string[]>([]);
	const preventDefault = (e) => {
		e.preventDefault();
	};
	const drop = (e) => {
		preventDefault(e);
		let a: string = e.dataTransfer.getData('component_name');
		if (a === 'Layout') {
			setChildComponent((state) => [a, ...state]);
		}
	};

	return (
		<BlockGrid
			onDrop={drop}
			onDragOver={preventDefault}
			container
			md={props.size ?? 12}
			direction={'row'}
			justify={props.justify}>
			{childComponent.map((element) => {
				return <GridLayout />;
			})}
		</BlockGrid>
	);
};
export default Block;
