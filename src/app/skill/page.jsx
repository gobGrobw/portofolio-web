import Header from '@/components/Header';
import Section from '@/components/Section';
import { frontEnd, backEnd, misc } from '@/javascript/variables';

export default function SkillPage() {
	return (
		<div>
			<Header title={'My Skills'} />
			<section className="flex flex-wrap justify-center gap-15 tablet:flex-nowrap tablet:flex-col tablet:items-center">
				{/* Front end */}
				<Section title={'Front-End'}>
					<ul className="flex flex-wrap justify-center items-center gap-y-5">
						{frontEnd.map((skill, i) => {
							return (
								<li
									key={i}
									className="flex flex-col items-center basis-4/12"
								>
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
						{backEnd.map((skill, i) => {
							return (
								<li
									key={i}
									className="flex flex-col items-center basis-4/12"
								>
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
						{misc.map((skill, i) => {
							return (
								<li
									key={i}
									className="flex flex-col items-center basis-4/12"
								>
									<skill.component size={20} />
									{skill.name}
								</li>
							);
						})}
					</ul>
				</Section>
			</section>
		</div>
	);
}

