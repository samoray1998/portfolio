// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a creative technologist, I craft intuitive digital experiences using a diverse set of tools and languages."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Polymath foundations"
							
							icon="faDiagramProject"
							copy="With a strong foundation in both design and development, I bring a unique perspective to every project and am constantly learning and evolving to stay up-to-date with the latest industry trends."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Software I love to work with" 
							copy="With over 4 years of experience creating mobile apps, I have a deep and intuitive understanding of how the interfaces of the best software products in the world are designed. This is just some of the software I have used over that time."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							
							icon="faTableCells"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I love to build with" 
							copy="I deeply enjoy solving problems through code. From the front end all the way to the back end and the APIs in-between. No project is too challenging for me."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							//<FontAwesomeIcon icon={faLaptopCode} />
							icon="faLaptopCode"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'illustrator', 	name: 'Illustrator', 		type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'fas' },
	{ key: 'computer-mouse',name: 'Click Up', 			type: 'fas' },
	{ key: 'xcode',	name: 'xCode', 			type: 'devicon' },
	{ key: 'androidstudio',	name: 'Android Studio', 		type: 'devicon' },
	{ key: 'intellij',	name: 'intellij', 		type: 'devicon' },
	{ key: 'slack',	name: 'Slack', 		type: 'devicon' },
	{ key: 'jira',	name: 'Jira', 		type: 'devicon' },
]

const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'jquery', 		name: 'jQuery', 			type: 'devicon' },
	{ key: 'typescript', 			name: 'Typescript', 				type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
	{ key: 'graphql', 	name: 'Graphql', 		type: 'devicon' },
	{ key: "google",		name: "GA4/GTM", 			type: "devicon" },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
	{ key: 'flutter', 		name: 'Flutter', 			type: 'devicon' },
	{ key: 'docker', 		name: 'Docker', 			type: 'devicon' },
	{ key: 'kotlin', 		name: 'Kotlin', 			type: 'devicon' },
	{ key: 'java', 		name: 'Java', 			type: 'devicon' },
	{ key: 'postgresql', 		name: 'Postgresql', 			type: 'devicon' },
	{ key: 'go', 		name: 'Go', 			type: 'devicon' },
	{ key: 'dotnetcore', 		name: '.Net core', 			type: 'devicon' },
	{ key: 'csharp', 		name: 'C#', 			type: 'devicon' },
	{ key: 'dart', 		name: 'dart', 			type: 'devicon' },
	{ key: 'redis', 		name: 'redis', 			type: 'devicon' },

]
//csharp