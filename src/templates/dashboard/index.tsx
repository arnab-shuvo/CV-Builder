import React, { useState, useEffect } from 'react';
import { WrapperDiv, Container, ToolbarDiv } from './styled';
import Toolbar from './toolbar';
import Page from '../../components/Page';

const Dashboard = () => {
	const [layout, setLayout] = useState<string[]>([]);
	const preventDefault = (e) => {
		e.preventDefault();
	};

	const drop = (e) => {
		preventDefault(e);
		let a: string = '';
		a = e.dataTransfer.getData('component_name');
		if (a === 'Page') {
			setLayout((state) => [a, ...state]);
		}
	};
	return (
		<Container container direction={'row'} spacing={10}>
			<ToolbarDiv color={'red'} item md={2} xs={12}>
				<Toolbar />
			</ToolbarDiv>
			<WrapperDiv
				color={'green'}
				item
				container
				justify={'center'}
				alignContent={'center'}
				direction={'column'}
				spacing={1}
				md={10}
				xs={12}
				onDrop={drop}
				onDragOver={preventDefault}>
				{layout.map((element) => {
					return <Page />;
				})}
			</WrapperDiv>
		</Container>
	);
};

export default Dashboard;
