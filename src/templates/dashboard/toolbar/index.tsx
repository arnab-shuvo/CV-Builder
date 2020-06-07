import React from 'react';
import Page from '../../../components/Page';

type d = (T: React.DragEvent<HTMLDivElement>, d: string) => void;

const Toolbar: React.FC = () => {
	const handleDrag: d = (ev, component): void => {
		ev.dataTransfer.setData('component_name', component);
	};
	return (
		<>
			Toolbar
			<div
				style={{
					background: '#fff',
					cursor: 'pointer',
					width: '100px',
					height: '100px',
					marginBottom: '10px',
				}}
				draggable={true}
				onDragStart={(e) => handleDrag(e, 'Page')}>
				Page
			</div>
			<div
				style={{
					background: '#fff',
					cursor: 'pointer',
					width: '100px',
					height: '100px',
					marginBottom: '10px',
				}}
				draggable={true}
				onDragStart={(e) => handleDrag(e, 'Layout')}>
				Layout
			</div>
			<div
				style={{
					background: '#fff',
					cursor: 'pointer',
					width: '100px',
					height: '100px',
					marginBottom: '10px',
				}}
				draggable={true}
				onDragStart={(e) => handleDrag(e, 'Block')}>
				Block
			</div>
			<div
				style={{
					background: '#fff',
					cursor: 'pointer',
					width: '100px',
					height: '100px',
					marginBottom: '10px',
				}}
				draggable={true}
				onDragStart={(e) => handleDrag(e, 'Paragraph')}>
				Paragraph
			</div>
		</>
	);
};
export default Toolbar;
