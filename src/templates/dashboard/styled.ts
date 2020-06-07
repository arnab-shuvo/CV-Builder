import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const WrapperDiv = styled(Grid)`
	background: ${(props) => props.color ?? '#fff'};
	min-height: 100vh;
`;
export const ToolbarDiv = styled(Grid)`
	background: ${(props) => props.color ?? '#fff'};
	height: 100vh;
	overflow-y: scroll;
`;
export const Container = styled(Grid)`
	width: 100% !important;
	max-width: 100%;
	margin: 0 !important;
`;
