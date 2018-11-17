import {hot} from "imhotep";
import React from "react";
import OverScroll, {progressable} from "react-over-scroll";
import {Inner, Pagers, themes} from "react-over-scroll/lib/src/styled";
import styled, {ThemeProvider, createGlobalStyle} from "styled-components";

const pages = [
	"Welcome to my github page         ",
	"My name is Gregor Adams         ",
	"You might know me as Pixelass         ",
	"I like to develop software         "
];

const colors = ["blue", "purple", "red", "orange"];

const fillText = (text: string, progress: number) =>
	text.substr(0, Math.round(text.length * progress));

const Content = styled.div`
	position: relative;
	z-index: 1;
	height: 100%;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	margin: auto;
	overflow: hidden;
`;
const Headline = styled.h1`
	font-weight: bolder;
	font-size: 8vmax;
	margin: 0;
`;

const Row = styled.div`
	height: 50vh;
	flex: 0 0 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	align-content: flex-start;
	margin: auto;
	overflow: hidden;
`;

const Cat = styled.svg`
	width: 100%;
	height: 60%;
	transform: translate3d(calc(-150% + var(--progress, 0) * 300%), 0, 0);
`;

const StyledStars = styled.svg`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

const Path = styled.path``;

const Stars = () => (
	<StyledStars viewBox="0 0 1386 872">
		<g fill="#FFF" fillRule="evenodd">
			<path d="M66 110h5v10h-5v-10zm0 24h5v10h-5v-10zm-15-9h10v5H51v-5zm24 0h10v5H75v-5zm-9 0h5v5h-5v-5zM68 253h5v10h-5v-10zm0 24h5v10h-5v-10zm-15-9h10v5H53v-5zm24 0h10v5H77v-5zm-9 0h5v5h-5v-5zM378 296h5v10h-5v-10zm0 24h5v10h-5v-10zm-15-9h10v5h-10v-5zm24 0h10v5h-10v-5zm-9 0h5v5h-5v-5zM443 391h5v10h-5v-10zm0 24h5v10h-5v-10zm-15-9h10v5h-10v-5zm24 0h10v5h-10v-5zm-9 0h5v5h-5v-5zM332 697h5v10h-5v-10zm0 24h5v10h-5v-10zm-15-9h10v5h-10v-5zm24 0h10v5h-10v-5zm-9 0h5v5h-5v-5zM540 816h5v10h-5v-10zm0 24h5v10h-5v-10zm-15-9h10v5h-10v-5zm24 0h10v5h-10v-5zm-9 0h5v5h-5v-5zM628 736h5v10h-5v-10zm0 24h5v10h-5v-10zm-15-9h10v5h-10v-5zm24 0h10v5h-10v-5zm-9 0h5v5h-5v-5zM836 0h5v10h-5V0zm0 24h5v10h-5V24zm-15-9h10v5h-10v-5zm24 0h10v5h-10v-5zm-9 0h5v5h-5v-5zM1182 113h5v10h-5v-10zm0 24h5v10h-5v-10zm-15-9h10v5h-10v-5zm24 0h10v5h-10v-5zm-9 0h5v5h-5v-5zM1346 453h5v10h-5v-10zm0 24h5v10h-5v-10zm-15-9h10v5h-10v-5zm24 0h10v5h-10v-5zm-9 0h5v5h-5v-5zM106 816h5v10h-5v-10zm0 24h5v10h-5v-10zm-15-9h10v5H91v-5zm24 0h10v5h-10v-5zm-9 0h5v5h-5v-5zM477 34h5v10h-5V34zm0 24h5v10h-5V58zm-15-9h10v5h-10v-5zm24 0h10v5h-10v-5zm-9 0h5v5h-5v-5zM168 24h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM338 105h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM193 275h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM243 418h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM184 727h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM459 768h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM489 644h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM753 757h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM1180 745h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM1222 391h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM1307 135h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM961 23h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM791 250h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5zM245 198h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM432 200h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM855 158h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM1103 34h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM1359 58h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM1259 117h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM1342 323h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM1377 576h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM1258 660h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM959 684h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM817 684h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM101 686h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM242 653v9h-5v-9h-10v-5h10v4h4v-4h-4v-10h5v10h9v5h-9zM608 303v9h-5v-9h-10v-5h10v4h4v-4h-4v-10h5v10h9v5h-9zM685 206v9h-5v-9h-10v-5h10v4h4v-4h-4v-10h5v10h9v5h-9zM958 253v9h-5v-9h-10v-5h10v4h4v-4h-4v-10h5v10h9v5h-9zM1052 149v9h-5v-9h-10v-5h10v4h4v-4h-4v-10h5v10h9v5h-9zM958 499v9h-5v-9h-10v-5h10v4h4v-4h-4v-10h5v10h9v5h-9zM1134 504v9h-5v-9h-10v-5h10v4h4v-4h-4v-10h5v10h9v5h-9zM1281 564v9h-5v-9h-10v-5h10v4h4v-4h-4v-10h5v10h9v5h-9zM1365 757v9h-5v-9h-10v-5h10v4h4v-4h-4v-10h5v10h9v5h-9zM1131 855v9h-5v-9h-10v-5h10v4h4v-4h-4v-10h5v10h9v5h-9zM900 807v9h-5v-9h-10v-5h10v4h4v-4h-4v-10h5v10h9v5h-9zM721 672v9h-5v-9h-10v-5h10v4h4v-4h-4v-10h5v10h9v5h-9zM642 72h5v5h-5v-5zm9 5h5v5h-5v-5zm5 10h5v5h-5v-5zm-5 9h5v5h-5v-5zm-9 5h5v5h-5v-5zm-10-5h5v5h-5v-5zm-5-9h5v5h-5v-5zm5-10h5v5h-5v-5zM1178 278h5v5h-5v-5zm9 5h5v5h-5v-5zm5 10h5v5h-5v-5zm-5 9h5v5h-5v-5zm-9 5h5v5h-5v-5zm-10-5h5v5h-5v-5zm-5-9h5v5h-5v-5zm5-10h5v5h-5v-5zM1140 626h5v5h-5v-5zm9 5h5v5h-5v-5zm5 10h5v5h-5v-5zm-5 9h5v5h-5v-5zm-9 5h5v5h-5v-5zm-10-5h5v5h-5v-5zm-5-9h5v5h-5v-5zm5-10h5v5h-5v-5zM5 673v9H0v-9h-10v-5H0v4h4v-4H0v-10h5v10h9v5H5zM863 372h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM1017 376h-5v-5h5v4h4v-4h-4v-5h5v5h4v5h-4v4h-5v-4zM1288 852h5v5h-5v-5zm0 29h5v5h-5v-5zm-15-14h5v5h-5v-5zm29 0h5v5h-5v-5z"/>
		</g>
	</StyledStars>
)

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: "Comic Sans MS", "Comic Sans";
		background: hsl(0, 0%, 10%);
		color: white;
	}
	* {
		box-sizing: border-box;
	}
`;

const theme = (page: number) => ({
	pagerSize: "2rem",
	markerSize: "4px",
	strokeWidth: "4px",
	hue: 210,
	saturation: "100%",
	lightness: "20%"
});

const NyanCat = (props: {progress: number}) => progressable(
			<Cat viewBox="0 0 893 228">
				<g fill="none" fillRule="evenodd">
					<g transform={`rotate(${180 * Math.round(props.progress * 50)} 300 130)`}>
						<path
							fill="red"
							d="M512 142h-48v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4H80v4H32v-4H0v-16h32v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h27v12h21v4h-48v-4z"
						/>
					</g>
					<g transform={`rotate(${180 * Math.round(props.progress * 50)} 300 146)`}>
						<path
							fill="#F90"
							d="M512 158h-48v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4H80v4H32v-4H0v-16h32v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h77v12h-29v4h-48v-4z"
						/>
					</g>
					<g transform={`rotate(${180 * Math.round(props.progress * 50)} 300 162)`}>
						<path
							fill="#FF0"
							d="M560 174v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4H80v4H32v-4H0v-16h32v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h-9v12h-39z"
						/>
					</g>
					<g transform={`rotate(${180 * Math.round(props.progress * 50)} 300 178)`}>
						<path
							fill="#3F0"
							d="M560 190v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4H80v4H32v-4H0v-16h32v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h-9v12h-39z"
						/>
					</g>
					<g transform={`rotate(${180 * Math.round(props.progress * 50)} 300 194)`}>
						<path
							fill="#09F"
							d="M592 206h-32v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4H80v4H32v-4H0v-16h32v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h-9v12h41v4h-48v-4z"
						/>
					</g>
					<g transform={`rotate(${180 * Math.round(props.progress * 50)} 300 210)`}>
						<path
							fill="#63F"
							d="M657 222v4h-48v-4h-49v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4h-48v4h-48v-4H80v4H32v-4H0v-16h32v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h48v-4h48v4h49v-4h48v16h-48z"
						/>
					</g>
					<g>
						<path fill="#FC9" d="M607 182h-10V22h10V12h196v10h10v160h-80v12H607v-12z" />
						<path
							fill="#F9F"
							d="M631 172h-12v-12h-12V46h12V34h12V22h148v12h12v12h12v44h-24v92H631v-10z"
						/>
						<path
							fill="#F39"
							d="M767 58h12v10h-12V58zm-44-24h10v12h-10V34zm-36 0h12v12h-12V34zm-56 12h12v12h-12V46zm46 34h10v12h-10V80zm-34 22h10v12h-10v-12zm44 12h12v12h-12v-12zm-22 34h12v12h-12v-12zm-34 12h12v12h-12v-12zm-12-34h12v12h-12v-12z"
						/>
						<path
							fill="#999"
							d="M883 148v22h-12v12h-12v12H745v-12h-12v-12h-10v-56h10V68h24v10h12v12h10v12h46V90h12V78h12V68h22v46h12v34zm-34 10h-12v12h-24v-12h-10v12h-24v-12h-11v24h81v-24zm-286-20h-24v-12h-11v-22h23v22h34v24h-22v-12zm22 56h22v22h-22v-22zm56 12h24v10h-24v-10zm114 0h24v10h-24v-10zm58-2h22v12h-22v-12z"
						/>
						<path
							fill="#000"
							d="M803 170v-12h10v12h24v-12h12v24h-81v-24h11v12h24zm-34-22h-12v-12h12v-12h10v24h-10zm80 0h-12v-12h12v-12h10v24h-10zm-264 2v-23h-34v-23h12v11h22V22h12v160h10v12h-22v-34h-22v-10h22zm-12 66v-22h12v22h22v12h-34v-12zm92 12h-24v-12h24v-10h-24v10h-10v-10h-12v10h-12v-22h126v-12h12v12h114v10h-12v24h-34v-12h22v-12h-22v12h-12v-10h-10v22h-36v-12h24v-10h-24v10h-10v-10h-70v22h-10zM813 90V22h12v56h12v12h-12v12h-46V90h34zM597 12h10v10h-10V12zm10-12h196v12H607V0zm196 12h10v10h-10V12zm34 56h12v10h-12V68zm12-12h22v12h-22V56zm22 12h12v46h-12V68zm12 46h10v56h-10v-56zm-12 56h12v12h-12v-12zm-12 12h12v12h-12v-12zM769 78h10v12h-10V78zm-12-10h12v10h-12V68zm-24-12h24v12h-24V56zm-10 12h10v46h-10V68zm-12 46h12v56h-12v-56zm12 56h10v12h-10v-12zM529 92h22v12h-22V92zm-12 12h12v22h-12v-22zm12 22h10v12h-10v-12zm10 12h24v12h-24v-12zm274-2h12v12h-12v-12z"
						/>
						<path fill="#F99" d="M733 148h24v22h-24v-22zm126 0h24v22h-24v-22z" />
						<path fill="#FFF" d="M757 124h12v12h-12v-12zm80 0h12v12h-12v-12z" />
					</g>
				</g>
			</Cat>,
			props.progress
);
class App extends React.Component {
	public render() {
		return (
			<React.Fragment>
				<GlobalStyle />
				<OverScroll slides={pages.length} anchors="!/page">
					{({page, progress}) => (
						<ThemeProvider theme={theme(page)}>
							<Inner>
								<Stars/>
								<Content>
									<Row><Headline>{"> "}{fillText(pages[page], progress)}</Headline></Row>
									<Row><NyanCat progress={progress} /></Row>
								</Content>
							</Inner>
						</ThemeProvider>
					)}
				</OverScroll>
			</React.Fragment>
		);
	}
}

export default hot(module)(App);
