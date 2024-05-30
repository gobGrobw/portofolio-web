import Section from './Section';
import { backEnd, frontEnd, misc } from '@/javascript/variables';

export default function SkillsSection() {
	return (
		<section className="flex flex-wrap justify-center gap-15">
			{/* Front end */}
			<Section title={'Front-End'}>
				<ul className="flex flex-wrap items-center gap-y-5">
					{frontEnd.map((skill) => {
						return (
							<li className="flex flex-col items-center basis-4/12">
								<skill.component size={20} />
								{skill.name}
							</li>
						);
					})}
				</ul>
			</Section>

			{/* Back end */}
			<Section title={'Back-End'}>
				<ul className="flex flex-wrap justify-center items-center gap-y-5">
					{backEnd.map((skill) => {
						return (
							<li className="flex flex-col items-center basis-4/12">
								<skill.component size={20} />
								{skill.name}
							</li>
						);
					})}
				</ul>
			</Section>

			{/* Misc */}
			<Section title={'Miscellaneous'}>
				<ul className="flex flex-wrap justify-center items-center gap-y-5">
					{misc.map((skill) => {
						return (
							<li className="flex flex-col items-center basis-4/12">
								<skill.component size={20} />
								{skill.name}
							</li>
						);
					})}
				</ul>
			</Section>
		</section>
	);
}

