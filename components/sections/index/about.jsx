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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a diverse skill set that includes UX design, UI design, full stack development, operational architecture, systems design, photography, and branding, I am a well-rounded digital professional."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/family-photo.jpeg" alt="Nelson family photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Valuable Soft Skills that Enhance My Abilities"
							containerClass={about.container}
							iconClass={about.icon}
							icon='ear-listen'
							copy="In addition to my proficiency in development and technical skills, I possess strong leadership, time management, and multitasking abilities, which I have refined through my roles as a Co-Founder at Habilios and as a Vice President within an educational organization. Outside of my professional life, I maintain an active lifestyle by participating in sports such as swimming and martial arts. I am confident in my capability to infuse passion and deliver value to every project I undertake."
						/>
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'faSeedling', 		name: 'User Research', 		type: 'fad' },
	{ key: 'faQrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'faWindowRestore', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'faCube', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'faLayerGroup', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'faSolarPanel', 		name: 'Operations', 		type: 'fad' },
]