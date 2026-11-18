export type ProcessStep = {
	title: string;
	body: string;
	image: string;
	alt: string;
};

export const processIntro = {
	title: 'Our Creative Process',
	body: 'From the first idea through launch and ongoing support — how we take immersive AR VR projects from concept to production.',
};

export const processSteps: ProcessStep[] = [
	{
		title: 'Ideation / Experience Mapping',
		body: 'We start with ideation and experience mapping, where the concept, user experience, and immersive goals are delineated. The design of meaningful AR VR experiences to address real problems and provide quantifiable value is analyzed before taking action based on business goals, audience behavior, and technology opportunities.',
		image: '/process/experience-mapping.webp',
		alt: 'Experience mapping for an immersive AR VR concept',
	},
	{
		title: 'Storyboarding',
		body: 'Storyboarding is a visual representation that translates into a visual depiction of the immersive concept of the scenes and interactions. Our team maps environments, actions of users, and the flow of experience to demonstrate how the AR VR application will work. The step can streamline both the designers and developers, as well as the stakeholders, and make the immersive narrative, usability, and technical viability clearly understood and clearly defined before the development starts.',
		image: '/process/storyboarding.webp',
		alt: 'Storyboarding an AR VR experience flow',
	},
	{
		title: 'Prototyping',
		body: 'Prototyping facilitates the stakeholders’ familiarization with the idea prior to its full development. Interactive prototypes add to the test of spatial design, interactions with users, and functionality. This step checks the viability of ideas at an early stage, discovers the possible improvements, and makes sure the immersive experience can be effective throughout the AR and VR devices and platforms, once production begins.',
		image: '/process/prototyping.webp',
		alt: 'Prototyping immersive interactions in VR',
	},
	{
		title: 'Design & Development',
		body: 'In design and development, our team develops 3D settings, resources, and immersive interfaces and constructs the AR VR application through technologies such as Unity, Unreal Engine, and WebXR. We combine interactions, AI systems, and real-time capabilities to make the experience seamlessly work between devices and platforms.',
		image: '/process/design-development.webp',
		alt: 'Design and development of a 3D immersive scene',
	},
	{
		title: 'Testing & Optimization',
		body: 'The AR VR experience is tested and optimized to ensure that it will run smoothly. Our group tests usability, frame rates, device compatibility, and quality of interaction. The applied performance improvements would avoid motion discomfort and improve realism, offering a consistent immersive experience that is both stable and reliable to enterprise users and viewers.',
		image: '/process/testing-optimization.webp',
		alt: 'Testing and optimizing an AR VR build',
	},
	{
		title: 'Deployment & Training',
		body: 'We support the implementation and training of organizations after the preparation for deployment. Teams get to know how to use, run, and sustain the immersive solution successfully. This step will help businesses to be assured that they can integrate the AR VR technologies into their processes and make the most out of the immersive platform as far as engagement, productivity, and long-term value are concerned.',
		image: '/process/deployment-training.webp',
		alt: 'Deployment and training for an immersive solution',
	},
	{
		title: 'Maintenance & Support',
		body: 'The immersive solution is continuously maintained and supported to make it optimized and secure. Our team supports performance and technical assistance with the development of technology. Continuous monitoring is necessary to help keep the AR VR experience current with new devices and platforms, as well as to help preserve the reliability, scalability, and performance, which are known to be consistently reliable to enterprise users.',
		image: '/process/maintenance-support.webp',
		alt: 'Maintenance and support for XR systems',
	},
];
