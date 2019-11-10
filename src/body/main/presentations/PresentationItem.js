import React from 'react';
import PropTypes from 'prop-types';
import {Header, Icon, Image} from 'semantic-ui-react';

import Duration from '../../../utils/Duration';
import ResponsivePlayer from '../../../utils/ResponsivePlayer';
import Tripartite from '../../../utils/Tripartite';

/**
 * A tripartite representation of a single presentation given.
 * {@link https://github.com/BenDMyers/portfolio/tree/master/docs/body/main/presentations/PresentationsContent.md#PresentationItem}
 */
const PresentationItem = (props) => {
	const duration = props.date && <Duration endDate={props.date} />;
	const description = props.description && (
		<p className="pres-description">{props.description}</p>
	);
	const bullets = props.bullets && (
		<ul>
			{props.bullets.map((bullet, index) => (
				<li key={index}>{bullet}</li>
			))}
		</ul>
	);
	const player = props.videoUrl && <ResponsivePlayer url={props.videoUrl} />;

	let rows = [
		{
			center: (
				<>
					<Header as="h3" className="pres-title">
						{props.name}
					</Header>
					<p className="pres-organization">
						{props.organization}
						{duration && (
							<span className="pres-duration right-substitute">
								{' '}
								· {duration}
							</span>
						)}
					</p>
					{description}
					{bullets}
					{props.links && (
						<div className="right-substitute">
							{generateLinks(props.links, props.name, true)}
						</div>
					)}
				</>
			),
			right: (
				<>
					{duration && <p className="pres-duration">{duration}</p>}
					{props.links && (
						<div>{generateLinks(props.links, props.name)}</div>
					)}
				</>
			)
		},
		{
			center: player
		}
	];

	return (
		<Tripartite
			className="pres-item"
			left={<Image src={props.logo} alt={`${props.organization} logo`} />}
			rows={rows}
			alignRight={true}
		/>
	);
};

function generateLinks(links, name, mobile = false) {
	let linkItems = [];

	if (links.slides) {
		linkItems.push(
			<p key={`${name} slides`} className="pres-link">
				<Icon
					aria-hidden="true"
					name="arrow alternate circle right"
					style={{color: '#f31455'}}
				/>
				<a href={links.slides}>
					<span className="screenreader">Slides for {name}</span>
					<span aria-hidden="true">Slides</span>
				</a>
			</p>
		);
	}

	if (mobile) {
		linkItems = linkItems.reduce((newList, link, index) => {
			newList.push(link);
			if (index < linkItems.length - 1) {
				newList.push(
					<span key={`link${index}`} className="pres-links-bullet">
						·
					</span>
				);
			}
			return newList;
		}, []);
	}

	return linkItems;
}

PresentationItem.propTypes = {
	bullets: PropTypes.arrayOf(PropTypes.string),
	date: PropTypes.instanceOf(Date),
	description: PropTypes.string,
	logo: PropTypes.string,
	name: PropTypes.string.isRequired,
	organization: PropTypes.string.isRequired,
	videoUrl: PropTypes.string
};

export default PresentationItem;
