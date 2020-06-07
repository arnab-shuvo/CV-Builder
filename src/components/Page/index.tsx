import React, { useState } from 'react';
import { PageWrapper } from './styled';
import GridLayout from '../Layout/index';
import Block from '../Block';

type Page = {
	ParentCompProps?: ParentCompProps;
};
const Page: React.FC<Page> = (props) => {
	const [childComponent, setChildComponent] = useState<string[]>([]);
	const [zoom, setZoom] = useState<number>(1);
	const preventDefault = (e) => {
		e.preventDefault();
	};
	const drop = (e) => {
		preventDefault(e);
		let layoutName: string = e.dataTransfer.getData('component_name');
		if (layoutName === 'Block') {
			setChildComponent((state) => [layoutName, ...state]);
		}
	};
	const handleWheel = (e) => {
		document.addEventListener(
			'wheel',
			(e) => {
				e.preventDefault();
				if (e.deltaY < 0) {
					if (zoom > 1) {
						let zoomVal = zoom - 0.1;
						setZoom(zoomVal);
					}
				} else {
					if (zoom < 2.3) {
						let zoomVal = zoom + 0.1;
						setZoom(zoomVal);
					}
				}
			},
			{ passive: false },
		);
	};
	return (
		<PageWrapper
			onDrop={drop}
			onDragOver={preventDefault}
			zoom={zoom}
			onWheel={handleWheel}>
			{childComponent.map((element) => {
				return <Block />;
			})}
		</PageWrapper>
	);
};

export default Page;
