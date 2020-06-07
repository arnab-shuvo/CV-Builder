import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const PageWrapper = styled.div`
	background-color: #fff;
	height: 842px;
	width: 595px;
	margin: 20px;
	padding: 30px;
	transition: all 0.5s ease;
	transform: ${(props: { zoom: number }) => `scale(${props.zoom})`};
`;
