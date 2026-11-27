import type { MarketingPage } from './types';

export const servicePages: MarketingPage[] = [
	{
		slug: 'services/ai-chatbot-development-services',
		kind: 'service',
		h1: 'AI Chatbot Development Services',
		title: 'AI Chatbot Development Services for Teams | EuphoriaXR',
		description:
			'EuphoriaXR builds AI chatbot development services that answer from your content, hand off to people, and fit the channels your customers already use.',
		summary: 'Chatbots grounded in your content, with a clear handoff to a person.',
		navLabel: 'AI chatbot development',
		eyebrow: 'AI / Conversation / Support',
		serviceType: 'AI chatbot development',
		image: 'ai',
		intro: [
			'EuphoriaXR designs AI chatbot development services for teams that have outgrown a scripted widget. We write the jobs the bot is allowed to do, connect it to sources you trust, and leave a clean path to a person when the question is sensitive.',
			'The result is a conversation people can finish: a booking, a cited answer, or a trained next step. We measure it against real transcripts, not a demo script.',
		],
		benefits: [
			{ title: 'Answers from your sources', body: 'Responses cite approved pages, policies, and product data so the bot does not invent a policy you do not have.' },
			{ title: 'A handoff with context', body: 'When the bot stops, the person who picks up sees the question, the sources, and what was already tried.' },
			{ title: 'The channel you already use', body: 'Web, in-app, or an internal desk. We start where the conversation already happens.' },
			{ title: 'A score you can read', body: 'Containment, escalation, and failed questions are visible from the first release, not after a quarter of guesswork.' },
		],
		process: [
			{ title: 'Name the jobs', body: 'We list the questions worth automating and the ones that must reach a person, with examples from your team.' },
			{ title: 'Design the talk', body: 'Tone, limits, and fallbacks are written before a model is wired in, so the bot has a job description.' },
			{ title: 'Connect and test', body: 'We attach retrieval, tools, and an evaluation set drawn from real tickets or sales calls.' },
			{ title: 'Release and revise', body: 'After launch we review misses weekly and tighten sources, prompts, and routing.' },
		],
		useCases: [
			{ title: 'Support that cites the manual', body: 'Customers get an answer with a link to the paragraph it came from, and a person when the case is new.' },
			{ title: 'Product onboarding', body: 'A new user asks how to finish setup and the bot walks the steps that match their plan.' },
			{ title: 'Internal knowledge', body: 'Sales and field teams ask the same bot your customers do, against a wider internal library.' },
		],
		deliverables: [
			{ title: 'Conversation map', body: 'Intents, limits, and the lines that always escalate.' },
			{ title: 'Retrieval and guardrails', body: 'Source connectors, refusal rules, and logging.' },
			{ title: 'Channel build', body: 'The web or in-product surface, plus the handoff inbox.' },
			{ title: 'Evaluation set', body: 'A scored list of questions you can rerun after every change.' },
		],
		faqs: [
			{ question: 'What do AI chatbot development services include?', answer: 'Discovery, conversation design, a grounded answering pipeline, the channel your users already open, and an evaluation set your team can rerun. We stay through the first revisions after launch.' },
			{ question: 'Can the chatbot use our existing help center?', answer: 'Yes. We connect approved sources first and keep a list of topics the bot must refuse or escalate. If the source is missing, the bot says so.' },
			{ question: 'How do you keep answers from drifting?', answer: 'Every release is checked against a fixed question set. We log uncited answers and either add a source or narrow the bot’s job.' },
			{ question: 'Which teams usually start here?', answer: 'Support, success, and product teams that already have content and a queue of repeated questions. If you need software around the bot, see our AI software work.' },
		],
		related: ['services/ai-software-development', 'services/ai-integration-services', 'services/ai-agent-development-company'],
		keywords: { primary: 'ai chatbot development services', secondary: [] },
	},
	{
		slug: 'services/ai-software-development',
		kind: 'service',
		h1: 'AI Software Development Companies',
		title: 'AI Software Development Companies to Know | EuphoriaXR',
		description:
			'Compare how EuphoriaXR approaches AI software development: custom products, integrations, and delivery for teams that need software they can own.',
		summary: 'Custom AI software your team can own, from the first workflow to release.',
		navLabel: 'AI software development',
		eyebrow: 'AI / Product / Software',
		serviceType: 'AI software development',
		image: 'ai',
		intro: [
			'Teams searching AI software development companies usually need a product, not a slide of model names. EuphoriaXR designs and builds the software around the model: the workflow, the data boundary, the interface, and the way a person stays in control.',
			'We ship in small releases you can put in front of users. You keep the repository, the prompts, and the decision log.',
		],
		benefits: [
			{ title: 'Software you can operate', body: 'The codebase, infrastructure notes, and evaluation live with your team when the engagement ends.' },
			{ title: 'A workflow, not a chat box', body: 'We design the screens and states around the job, including review, edit, and reject.' },
			{ title: 'Clear data boundaries', body: 'What the system may read, store, and send to a model is written down before build.' },
			{ title: 'Releases you can judge', body: 'Each slice has a user, a task, and a pass or fail, so progress is visible.' },
		],
		process: [
			{ title: 'Frame the product', body: 'We write the user, the job, and the decision the software must support.' },
			{ title: 'Prove the thin path', body: 'A narrow version runs on real data before we widen the surface.' },
			{ title: 'Build the system', body: 'Interface, services, auth, and model calls land in one codebase with tests.' },
			{ title: 'Hand over cleanly', body: 'Your team gets the repo, runbooks, and the evaluation set.' },
		],
		useCases: [
			{ title: 'An internal tool with review', body: 'Analysts draft with a model, then approve what is allowed to leave the building.' },
			{ title: 'A customer-facing feature', body: 'The AI step sits inside your product, with the same account and design system.' },
			{ title: 'A service desk product', body: 'Routing, suggested replies, and a full audit of what was sent.' },
		],
		deliverables: [
			{ title: 'Product brief', body: 'Users, jobs, risks, and the first release cut.' },
			{ title: 'Application code', body: 'Interface, API, and model integration in your repository.' },
			{ title: 'Data and access rules', body: 'What is stored, for how long, and who can see it.' },
			{ title: 'Handover pack', body: 'Runbooks, evaluation, and a backlog for the next quarter.' },
		],
		faqs: [
			{ question: 'How do AI software development companies differ from a model vendor?', answer: 'A model vendor sells access to a model. We design and build the software around it: workflow, interface, permissions, and the way you measure quality.' },
			{ question: 'Do we own the code?', answer: 'Yes. Work is committed to a repository you control, with a written handover. Third-party model terms stay with that provider and are called out in the plan.' },
			{ question: 'Can you work beside our engineers?', answer: 'That is the usual shape. We pair on the thin path, then your team runs the system with us on call for the first releases.' },
			{ question: 'What if we only need a chatbot?', answer: 'Start with AI chatbot development services. If the bot needs its own product surface, this engagement is the right next step.' },
		],
		related: ['services/ai-chatbot-development-services', 'services/ai-development-company', 'services/artificial-intelligence-company-and-consulting-services'],
		keywords: { primary: 'ai software development companies', secondary: [] },
	},
	{
		slug: 'services/ai-integration-services',
		kind: 'service',
		h1: 'AI Integration Services',
		title: 'AI Integration Services for Existing Products | EuphoriaXR',
		description:
			'EuphoriaXR provides AI integration services that connect models to your product, data, and workflows without a risky rip-and-replace project.',
		summary: 'Connect models to the product and data you already run.',
		navLabel: 'AI integration services',
		eyebrow: 'AI / Systems / Integration',
		serviceType: 'AI integration',
		image: 'ai',
		intro: [
			'AI integration services are how a model becomes part of a system you already operate. EuphoriaXR connects it to your product, files, and tickets so a person still approves what matters.',
			'We avoid a rip-and-replace. The first integration is a single workflow with a logged input, a logged output, and a way to turn it off.',
		],
		benefits: [
			{ title: 'Fits the stack you have', body: 'We integrate through the APIs and permissions you already trust.' },
			{ title: 'A kill switch', body: 'Every integration can be paused without taking the rest of the product down.' },
			{ title: 'Traceable calls', body: 'You can see what was sent to a model and what came back.' },
			{ title: 'A human gate', body: 'High-impact actions stay behind a person until the evaluation says otherwise.' },
		],
		process: [
			{ title: 'Map the workflow', body: 'We pick one path, the system of record, and the action that is allowed to change.' },
			{ title: 'Define the contract', body: 'Inputs, outputs, timeouts, and what happens when the model fails.' },
			{ title: 'Integrate', body: 'The call lands behind your auth, with logging and a feature flag.' },
			{ title: 'Watch the first weeks', body: 'We review failures and either widen the path or keep the gate.' },
		],
		useCases: [
			{ title: 'CRM next-step notes', body: 'A seller gets a draft follow-up from the last call, and edits it before it sends.' },
			{ title: 'Search over private files', body: 'Staff ask a question and receive passages from the library they are allowed to see.' },
			{ title: 'Support triage', body: 'New tickets are tagged and routed, with a person confirming the edge cases.' },
		],
		deliverables: [
			{ title: 'Integration map', body: 'Systems, data, and the single first workflow.' },
			{ title: 'Logged connector', body: 'Auth, retries, and a record of each call.' },
			{ title: 'Review UI or hook', body: 'The place a person approves, edits, or rejects.' },
			{ title: 'Operating notes', body: 'How to pause, rotate keys, and read the logs.' },
		],
		faqs: [
			{ question: 'What are AI integration services in practice?', answer: 'They connect a model to an existing product or back office: authentication, data access, logging, and a person in the loop. The first delivery is one workflow, not a platform rewrite.' },
			{ question: 'Will this replace our current software?', answer: 'No. The point is to add a measured step inside the tools you already run, with a way to switch that step off.' },
			{ question: 'How do you handle private data?', answer: 'We write what may leave your network, minimize the payload, and keep an audit. Vendor terms are part of the plan before build.' },
			{ question: 'When is an agent a better fit?', answer: 'If the work is multi-step and needs tools called in sequence, look at our AI agent development company practice. A single call belongs here.' },
		],
		related: ['services/ai-chatbot-development-services', 'services/ai-agent-development-company', 'services/ai-software-development'],
		keywords: { primary: 'ai integration services', secondary: [] },
	},
	{
		slug: 'services/ai-agent-development-company',
		kind: 'service',
		h1: 'AI Agent Development Company',
		title: 'AI Agent Development Company for Operations | EuphoriaXR',
		description:
			'Hire an AI agent development company to design agents that complete multi-step work, call your tools, and stay inside clear operating limits.',
		summary: 'Agents that finish multi-step work inside limits you set.',
		navLabel: 'AI agent development',
		eyebrow: 'AI / Agents / Operations',
		serviceType: 'AI agent development',
		image: 'ai',
		intro: [
			'An AI agent development company should be able to say what the agent will not do. EuphoriaXR designs agents that complete a multi-step job, call the tools you approve, and stop when the case leaves that job.',
			'We start with one operation: a research pass, a case prep, or a content check. The agent’s tools, memory, and stop rules are explicit.',
		],
		benefits: [
			{ title: 'A written job', body: 'The agent has a goal, a tool list, and a stop condition. It does not roam.' },
			{ title: 'Tools, not guesses', body: 'Actions go through your APIs, so the agent cannot invent a record.' },
			{ title: 'Visible steps', body: 'Operators can read the path the agent took and replay a failure.' },
			{ title: 'A person at the edge', body: 'Money, customers, and safety stay behind approval until you widen the job.' },
		],
		process: [
			{ title: 'Pick one operation', body: 'We choose a repeated, multi-step task with a clear done state.' },
			{ title: 'List tools and stops', body: 'Each tool has an owner. Each stop has a reason the agent must halt.' },
			{ title: 'Build and shadow', body: 'The agent runs beside a person before it is allowed to act alone.' },
			{ title: 'Widen only on evidence', body: 'New tools are added when the evaluation, not a demo, says the job is stable.' },
		],
		useCases: [
			{ title: 'Case preparation', body: 'The agent gathers files, drafts a brief, and waits for a reviewer.' },
			{ title: 'Catalog upkeep', body: 'It proposes product copy from approved facts and flags missing fields.' },
			{ title: 'Research desk', body: 'It searches allowed sources, cites them, and packages a short brief.' },
		],
		deliverables: [
			{ title: 'Agent spec', body: 'Goal, tools, memory, and stop rules.' },
			{ title: 'Tool adapters', body: 'The approved APIs, with logging and limits.' },
			{ title: 'Operator view', body: 'A trace of steps and a way to take over.' },
			{ title: 'Evaluation', body: 'Tasks the agent must pass before the next tool is added.' },
		],
		faqs: [
			{ question: 'What does an AI agent development company deliver?', answer: 'A specified agent: its job, the tools it may call, the trace an operator can read, and the evaluation that decides whether it may act. We do not ship an open-ended assistant and hope.' },
			{ question: 'How is an agent different from a chatbot?', answer: 'A chatbot answers. An agent takes a sequence of steps with tools. If you only need answers, start with AI chatbot development services.' },
			{ question: 'Can the agent change customer records?', answer: 'Only through a tool you approve, and usually behind a person at first. The spec says which writes are allowed.' },
			{ question: 'Do you integrate with our stack?', answer: 'Yes. Agents sit on the same integration practice: your auth, your logs, and a way to pause the agent.' },
		],
		related: ['services/ai-chatbot-development-services', 'services/ai-integration-services', 'services/ai-software-development'],
		keywords: { primary: 'ai agent development company', secondary: [] },
	},
	{
		slug: 'services/artificial-intelligence-company-and-consulting-services',
		kind: 'service',
		h1: 'Machine Learning Development Services',
		title: 'Machine Learning Development Services | EuphoriaXR',
		description:
			'Machine learning development services from EuphoriaXR cover model selection, data pipelines, and consulting for products that must keep learning.',
		summary: 'Machine learning consulting, pipelines, and a model your team can run.',
		navLabel: 'Machine learning development',
		eyebrow: 'ML / Consulting / Data',
		serviceType: 'Machine learning development',
		image: 'lab',
		intro: [
			'Machine learning development services are the right call when a product has to learn from your data, not only call a general model. EuphoriaXR acts as a machine learning development company for teams that need a pipeline, a baseline, and advice they can defend.',
			'We also deliver ML development services alongside product work: the dataset, the training path, the evaluation, and the way the model is served inside software a person can use.',
		],
		benefits: [
			{ title: 'A baseline before a promise', body: 'We measure a simple approach first so a custom model has to earn its place.' },
			{ title: 'Data you can explain', body: 'Sources, labels, and known gaps are documented with the model.' },
			{ title: 'Consulting that names a decision', body: 'Recommendations say what to build, what to buy, and what to leave.' },
			{ title: 'A path into the product', body: 'The model is served where the workflow already is, with a fallback.' },
		],
		process: [
			{ title: 'Frame the decision', body: 'We write the prediction or classification, the cost of a miss, and the data you actually have.' },
			{ title: 'Build the baseline', body: 'A simple model or ruleset sets the number a later model must beat.' },
			{ title: 'Train and evaluate', body: 'We hold out data, report errors by segment, and stop if the data cannot support the claim.' },
			{ title: 'Serve and watch', body: 'The model ships with monitoring and a fallback to the baseline.' },
		],
		useCases: [
			{ title: 'Quality checks on content', body: 'A model flags likely errors for a reviewer instead of publishing on its own.' },
			{ title: 'Demand or risk scoring', body: 'Scores sit next to the human decision, with the factors written in plain language.' },
			{ title: 'Vision for training media', body: 'Models help label or review immersive training footage your instructors already capture.' },
		],
		deliverables: [
			{ title: 'Decision brief', body: 'The question, the cost of error, and the data inventory.' },
			{ title: 'Pipeline', body: 'Repeatable preparation, training, and evaluation.' },
			{ title: 'Model report', body: 'Metrics by segment and the cases it fails.' },
			{ title: 'Serving notes', body: 'How it runs in the product and how you roll it back.' },
		],
		faqs: [
			{ question: 'Are you a machine learning development company or a consulting shop?', answer: 'Both, on purpose. Machine learning development services here include the pipeline and the model, and the consulting that decides whether a model is the right tool.' },
			{ question: 'What do your ML development services cover?', answer: 'Problem framing, data review, a baseline, training, evaluation by segment, and a way to serve the model inside a product with a fallback.' },
			{ question: 'Do you only use large general models?', answer: 'No. If your data and the cost of a mistake call for a smaller supervised model, that is what we build. A general model is used when it wins the baseline.' },
			{ question: 'Can this sit inside a larger AI product?', answer: 'Yes. Many teams pair this work with AI software development so the model has a real interface and an owner.' },
		],
		related: ['services/ai-software-development', 'services/ai-development-company', 'services/ai-integration-services'],
		keywords: {
			primary: 'machine learning development services',
			secondary: ['machine learning development company', 'ml development services'],
		},
	},
	{
		slug: 'services/ai-development-company',
		kind: 'service',
		h1: 'Best AI Development Companies',
		title: 'Best AI Development Companies to Partner With | EuphoriaXR',
		description:
			'See why teams shortlisting the best AI development companies look at EuphoriaXR for AR, VR, and applied AI built as one delivery practice. Start here.',
		summary: 'Applied AI, AR, and VR delivered as one studio practice.',
		navLabel: 'AI development company',
		eyebrow: 'AI / Studio / Delivery',
		serviceType: 'AI development',
		image: 'ai',
		intro: [
			'Lists of the best AI development companies are crowded with firms that only wrap a model. EuphoriaXR is the studio teams call when the work also has to be seen, trained, or tried: applied AI together with AR, VR, and 3D.',
			'We staff a project with design, engineering, and a producer. You get a release plan, not a stack diagram.',
		],
		benefits: [
			{ title: 'One team for AI and immersive', body: 'Chat, vision, and spatial interfaces are planned together when the product needs both.' },
			{ title: 'A producer on the work', body: 'Scope, risk, and the next demo are owned, not implied.' },
			{ title: 'Build and advise', body: 'We will say when a smaller tool beats a custom build.' },
			{ title: 'Work you can show', body: 'Stakeholders get a usable slice early, in the browser or a headset.' },
		],
		process: [
			{ title: 'Listen for the outcome', body: 'We write the user and the change you need, before tools are chosen.' },
			{ title: 'Choose the lightest build', body: 'Buy, configure, or custom. The choice is written down.' },
			{ title: 'Ship a slice', body: 'A real user can try the first release in weeks, not a reveal at the end.' },
			{ title: 'Leave you able to run it', body: 'Docs, access, and a backlog stay with your team.' },
		],
		useCases: [
			{ title: 'A brand experience with intelligence', body: 'A spatial story that answers questions from approved product facts.' },
			{ title: 'Training that adapts', body: 'A lesson that changes the next step from how the learner performed.' },
			{ title: 'A product team’s first AI feature', body: 'A scoped feature inside software you already ship.' },
		],
		deliverables: [
			{ title: 'Opportunity brief', body: 'Outcome, users, and the lightest credible approach.' },
			{ title: 'Working slice', body: 'Something a stakeholder can use, not only watch.' },
			{ title: 'Build plan', body: 'Team, risks, and the releases after the slice.' },
			{ title: 'Handover', body: 'Access, evaluation, and operating notes.' },
		],
		faqs: [
			{ question: 'Why do teams include EuphoriaXR among the best AI development companies?', answer: 'Because the work is delivered, not only advised. We build applied AI and, when the product needs it, the AR or VR experience around it, with a producer and a handover.' },
			{ question: 'Do you only build chatbots?', answer: 'No. Chat is one service. This page is the studio view: software, agents, integrations, and immersive products as one practice.' },
			{ question: 'Where are you able to work?', answer: 'We work with teams remotely and on site when a headset, a stage, or a workshop needs us there. The contact page is the way to start.' },
			{ question: 'How do we compare you with a larger consultancy?', answer: 'Ask who writes the code and who attends the reviews. On our projects, the people who design the slice are in the room.' },
		],
		related: ['services/ai-software-development', 'services/ai-integration-services', 'services/ai-agent-development-company'],
		keywords: { primary: 'best ai development companies', secondary: [] },
	},
	{
		slug: 'services/webar-development',
		kind: 'service',
		h1: 'Augmented Reality QR Code Experiences',
		title: 'Augmented Reality QR Code Experiences | EuphoriaXR',
		description:
			'Launch an augmented reality QR code that opens a WebAR scene in the browser. EuphoriaXR designs, builds, and measures AR QR code campaigns today.',
		summary: 'WebAR scenes that open from a printed QR code in the phone browser.',
		navLabel: 'AR QR code and WebAR',
		eyebrow: 'WebAR / QR / Campaigns',
		serviceType: 'WebAR development',
		image: 'ar',
		intro: [
			'An augmented reality QR code should open in the browser the person already has. EuphoriaXR builds WebAR scenes for packaging, print, and posters so a scan becomes a product, a place, or a short story without an app install.',
			'We design the marker, the scene, and the fallback for phones that struggle, then measure scans through to the action you care about.',
		],
		benefits: [
			{ title: 'No app store', body: 'The scene loads from a link. The QR code is just the front door.' },
			{ title: 'Print that stays useful', body: 'Update the scene without reprinting the code when the story changes.' },
			{ title: 'A measured path', body: 'Scans, plays, and clicks are tracked to the campaign, not lost in a demo.' },
			{ title: 'A graceful fallback', body: 'If the device cannot run the scene, the person still gets the offer or the film.' },
		],
		process: [
			{ title: 'Define the scan', body: 'Where the code lives, what the person should do, and how long they will stand there.' },
			{ title: 'Prototype on a phone', body: 'We test the real device, the real light, and the real distance.' },
			{ title: 'Build the scene', body: 'Models, interaction, and the page around the experience.' },
			{ title: 'Launch and read', body: 'You get the code, the link, and a simple report of what people did.' },
		],
		useCases: [
			{ title: 'Packaging', body: 'A carton opens a how-to, a try-on, or a film about the product inside.' },
			{ title: 'Posters and print ads', body: 'A street poster starts a scene that a flat ad cannot hold.' },
			{ title: 'Events', body: 'A badge or standee launches a demo without asking guests to install software.' },
		],
		deliverables: [
			{ title: 'QR and link plan', body: 'Codes, destinations, and the UTM or campaign IDs you need.' },
			{ title: 'WebAR scene', body: 'Optimized models and interaction that run in the browser.' },
			{ title: 'Fallback page', body: 'The non-AR version so nobody hits a dead end.' },
			{ title: 'Launch kit', body: 'Print specs, test notes, and how to swap the scene later.' },
		],
		faqs: [
			{ question: 'What is an augmented reality QR code?', answer: 'It is a printed code that opens a WebAR scene in the phone browser. The person scans, allows the camera if needed, and sees the experience on the marker or in the space in front of them.' },
			{ question: 'How is an AR QR code different from a normal QR code?', answer: 'A normal code opens a web page. An AR QR code opens that page into a spatial scene. We still give you a normal page as the fallback.' },
			{ question: 'Do users need an app?', answer: 'No. WebAR runs from the browser. We test the devices your audience actually carries and design around the ones that struggle.' },
			{ question: 'Can the same code power a business card?', answer: 'Yes. An AR business card is a focused version of this work. We can start there or with a wider campaign.' },
		],
		related: ['services/webar-business-card', 'services/branded-ar-filters', 'ar-vr-media-and-marketing'],
		keywords: { primary: 'augmented reality qr code', secondary: ['ar qr code'] },
	},
	{
		slug: 'services/webar-business-card',
		kind: 'service',
		h1: 'AR Business Card Design',
		title: 'AR Business Card Design for Modern Brands | EuphoriaXR',
		description:
			'An AR business card from EuphoriaXR turns a printed card into a spatial intro, portfolio, or product story that opens in the phone browser in AR.',
		summary: 'A printed card that opens a spatial introduction in the browser.',
		navLabel: 'AR business cards',
		eyebrow: 'WebAR / Identity / Print',
		serviceType: 'AR business card',
		image: 'ar',
		intro: [
			'An AR business card keeps the print object people still hand over and adds the introduction that will not fit on the card. EuphoriaXR designs the card and the WebAR scene: a portfolio, a product, or a short hello from the person whose name is on the front.',
			'The scan opens in the browser. There is no app to install in the middle of a handshake.',
		],
		benefits: [
			{ title: 'Print worth keeping', body: 'The card is designed as an object, not a sticker on a template.' },
			{ title: 'A scene you can update', body: 'Change the reel or the offer without reprinting every card.' },
			{ title: 'Works at a table', body: 'We test the distance and the light of a real meeting, not a studio rig.' },
			{ title: 'A fallback link', body: 'If AR fails, the same code opens the profile or reel on the web.' },
		],
		process: [
			{ title: 'Decide the hello', body: 'What should be in the room after the scan: a person, a product, or a reel.' },
			{ title: 'Design card and scene together', body: 'Marker, type, and the first frame of the experience are one design.' },
			{ title: 'Build and test in hand', body: 'We print a proof and run it on the phones your clients carry.' },
			{ title: 'Deliver files and the link', body: 'Print-ready art, the live scene, and notes for the next update.' },
		],
		useCases: [
			{ title: 'Founders and studios', body: 'The card plays a 20-second reel and a way to book a call.' },
			{ title: 'Product sales', body: 'A sample configuration or material appears on the card during a meeting.' },
			{ title: 'Events', body: 'Staff cards open the booth story so a queue still gets the pitch.' },
		],
		deliverables: [
			{ title: 'Card design', body: 'Print-ready fronts and backs, with a marker that tracks.' },
			{ title: 'WebAR scene', body: 'The introduction, sized for a hand and a table.' },
			{ title: 'Fallback profile', body: 'The page that opens when AR is unavailable.' },
			{ title: 'Update guide', body: 'How to swap video or links without a new print run.' },
		],
		faqs: [
			{ question: 'What is an AR business card?', answer: 'A printed card with a code or marker that opens a WebAR scene in the browser: a reel, a product, or a short introduction. The card still works as a card if nobody scans it.' },
			{ question: 'Can we use our existing brand system?', answer: 'Yes. We design inside your type, color, and logo rules, and we test that the marker still tracks.' },
			{ question: 'How many cards can share one scene?', answer: 'As many as you want. One scene can serve a whole team, or each person can have a name and a reel.' },
			{ question: 'Is this the same as a campaign QR code?', answer: 'The technology is related. An AR business card is designed for a handoff. A wider augmented reality QR code campaign is planned for the street, a pack, or a poster.' },
		],
		related: ['services/webar-development', 'services/branded-ar-filters', 'ar-vr-media-and-marketing'],
		keywords: { primary: 'ar business card', secondary: [] },
	},
	{
		slug: 'services/product-configurator',
		kind: 'service',
		h1: '3D Product Configurator Development',
		title: '3D Product Configurator Development Services | EuphoriaXR',
		description:
			'EuphoriaXR builds a 3D product configurator shoppers can use in the browser, with accurate materials, real options, and a clear path to checkout.',
		summary: 'A browser 3D configurator with real options and accurate materials.',
		navLabel: '3D product configurators',
		eyebrow: '3D / Commerce / Web',
		serviceType: '3D product configurator',
		image: 'city',
		intro: [
			'A 3D product configurator lets someone build the variant they actually want and see it before they buy. EuphoriaXR models the product, wires the real options, and puts the scene in the browser.',
			'A 3D configurator only helps if the options match the SKU. We connect materials, sizes, and rules to the catalog so the picture and the cart agree.',
		],
		benefits: [
			{ title: 'Options that match the catalog', body: 'If it cannot be ordered, it cannot be configured.' },
			{ title: 'Materials you can trust', body: 'Metals, fabrics, and finishes are reviewed against the physical sample.' },
			{ title: 'Fast on a phone', body: 'Models are budgeted for the devices your shoppers use.' },
			{ title: 'A path to buy', body: 'The chosen configuration can be added to the cart or sent to sales.' },
		],
		process: [
			{ title: 'List the rules', body: 'SKUs, exclusions, and the finishes that must be visually distinct.' },
			{ title: 'Model and look-dev', body: 'We build the asset and review it next to the sample.' },
			{ title: 'Configure in the browser', body: 'The UI, the rules, and the scene ship together.' },
			{ title: 'Connect commerce', body: 'The selection writes the right variant, quote, or lead.' },
		],
		useCases: [
			{ title: 'Furniture and finishes', body: 'Shoppers swap materials and see scale in the room they have.' },
			{ title: 'Jewelry and small goods', body: 'Metals and stones read clearly before a virtual try on or a purchase.' },
			{ title: 'Equipment', body: 'Buyers assemble a valid configuration and send it to a quote.' },
		],
		deliverables: [
			{ title: 'Rule map', body: 'Valid combinations and the ones the UI must block.' },
			{ title: 'Optimized 3D asset', body: 'A model budgeted for web, with reviewed materials.' },
			{ title: 'Configurator UI', body: 'The controls, the scene, and the summary of the choice.' },
			{ title: 'Commerce hook', body: 'Variant, quote, or lead written back to your system.' },
		],
		faqs: [
			{ question: 'What is a 3D product configurator?', answer: 'It is a browser experience where a shopper changes real product options and sees the result in 3D. The choices map to variants you can sell or quote.' },
			{ question: 'How is a 3D configurator different from a 3D viewer?', answer: 'A viewer spins one model. A configurator changes materials, parts, and rules, and records a valid product at the end.' },
			{ question: 'Can it live on our current site?', answer: 'Yes. We embed it in the product page or a sales tool and pass the selection to the cart or CRM you already use.' },
			{ question: 'Do you also build virtual try-on?', answer: 'For apparel and jewelry, pair this with our retail work. Try-on shows the piece on a person. The configurator shows the exact variant.' },
		],
		related: ['ar-vr-fashion-retail', 'services/webar-development', 'services/augmented-reality-development-company'],
		keywords: { primary: '3d product configurator', secondary: ['3d configurator'] },
	},
	{
		slug: 'services/virtual-reality-training',
		kind: 'service',
		h1: 'VR Training Simulation',
		title: 'VR Training Simulation for Real-World Skills | EuphoriaXR',
		description:
			'VR training simulation from EuphoriaXR lets people practice high-stakes tasks in a headset before they face the real equipment or a live customer.',
		summary: 'Headset practice for procedures people must get right the first time.',
		navLabel: 'VR training simulation',
		eyebrow: 'VR / Training / Simulation',
		serviceType: 'VR training simulation',
		image: 'vr',
		intro: [
			'VR training simulation gives people a place to practice a task that is expensive, rare, or unsafe to rehearse live. EuphoriaXR builds the scenario, the scoring, and the instructor view.',
			'We write the procedure with your experts, then put the learner in it. Mistakes are visible, repeatable, and safe.',
		],
		benefits: [
			{ title: 'Practice before the real thing', body: 'Learners meet the task in a headset before they meet the equipment or the customer.' },
			{ title: 'Scoring an instructor can use', body: 'Steps, timing, and errors are recorded for the debrief, not buried in a game score.' },
			{ title: 'The same lesson everywhere', body: 'A cohort in another city runs the same scenario your lead instructor signed off.' },
			{ title: 'A scenario you can revise', body: 'When the procedure changes, the lesson changes without rebuilding the world.' },
		],
		process: [
			{ title: 'Write the procedure', body: 'Experts mark the steps, the faults, and what “good” looks like.' },
			{ title: 'Block the lesson', body: 'We prototype the interaction in graybox before art is spent.' },
			{ title: 'Build and score', body: 'The scenario, the faults, and the instructor report ship together.' },
			{ title: 'Pilot with a cohort', body: 'Real learners run it. We fix what the debrief cannot explain.' },
		],
		useCases: [
			{ title: 'Equipment procedures', body: 'Start-up, shut-down, and the faults that are hard to stage on the floor.' },
			{ title: 'Soft skills under pressure', body: 'A conversation with a customer or a patient, with branching that instructors wrote.' },
			{ title: 'Onboarding at scale', body: 'New hires reach the same baseline before they shadow a senior.' },
		],
		deliverables: [
			{ title: 'Learning design', body: 'Objectives, steps, faults, and the debrief questions.' },
			{ title: 'Headset scenario', body: 'The simulation, tuned for the devices you deploy.' },
			{ title: 'Instructor tools', body: 'Scores, replays, and a way to reset a learner.' },
			{ title: 'Pilot report', body: 'What the first cohort did, and what we changed.' },
		],
		faqs: [
			{ question: 'What is a VR training simulation?', answer: 'It is a headset scenario where a learner practices a real procedure or conversation. The system records the steps and gives an instructor something concrete to debrief.' },
			{ question: 'Which headsets do you target?', answer: 'We build for the devices you will actually deploy and test on those devices. If you have not chosen one, we help you pick from how the lesson has to be run.' },
			{ question: 'Can instructors author new faults later?', answer: 'We separate content that should change often from the world that should not. The handover says which parts your team can edit.' },
			{ question: 'Is this useful for schools as well as companies?', answer: 'Yes. See VR for education when the learner is a student and the room is a classroom, and this page when the goal is a job skill.' },
		],
		related: ['ar-vr-training-education', 'services/vr-simulators', 'services/virtual-reality-development-company'],
		keywords: { primary: 'vr training simulation', secondary: [] },
	},
	{
		slug: 'services/vr-simulators',
		kind: 'service',
		h1: 'VR Welding Simulator',
		title: 'VR Welding Simulator Development Services | EuphoriaXR',
		description:
			'A VR welding simulator from EuphoriaXR trains torch angle, travel speed, and safety in a headset, with scoring instructors can review after each pass.',
		summary: 'A welding simulator that scores torch work instructors can review.',
		navLabel: 'VR welding simulator',
		eyebrow: 'VR / Simulators / Trades',
		serviceType: 'VR simulator',
		image: 'vr',
		intro: [
			'A VR welding simulator lets a learner run beads and learn torch angle, travel speed, and safety before they strike a live arc. EuphoriaXR builds the booth, the scoring, and the instructor review.',
			'The same simulator practice covers other hands-on skills when you need more than a single weld coupon: we start from the task your instructors already grade.',
		],
		benefits: [
			{ title: 'Booth time without the booth', body: 'Learners get repetitions before they use gas, metal, and a bay.' },
			{ title: 'Scores that match the rubric', body: 'Angle, speed, and path are graded the way your instructors already talk about them.' },
			{ title: 'Safety in the lesson', body: 'Setup and shut-down are part of the pass, not a poster on the wall.' },
			{ title: 'A record of the pass', body: 'Instructors can replay a bead and point at the moment it failed.' },
		],
		process: [
			{ title: 'Sit with the rubric', body: 'We translate how you grade a coupon into signals the simulator can read.' },
			{ title: 'Prototype the torch', body: 'Feel and feedback are tested with an instructor before the booth is dressed.' },
			{ title: 'Build the booth', body: 'Coupons, positions, and the faults you want learners to meet.' },
			{ title: 'Run a class', body: 'A real cohort uses it. We adjust scoring where it disagrees with the instructor.' },
		],
		useCases: [
			{ title: 'Trade schools', body: 'Students get more repetitions than the bay schedule allows.' },
			{ title: 'Apprenticeships', body: 'A standard first assessment before live work.' },
			{ title: 'Refresher drills', body: 'Experienced welders rehearse a position they rarely see.' },
		],
		deliverables: [
			{ title: 'Scoring model', body: 'The measures and the tolerances your instructors accept.' },
			{ title: 'Simulator build', body: 'Booth, coupons, and feedback on the target headset.' },
			{ title: 'Instructor review', body: 'Replay and a simple class report.' },
			{ title: 'Class pilot', body: 'Notes from the first group and the scoring changes we made.' },
		],
		faqs: [
			{ question: 'What does a VR welding simulator train?', answer: 'Torch angle, travel speed, path, and the safety steps around the weld. Instructors get a replay and a score they can compare with a live coupon later.' },
			{ question: 'Will it replace booth time?', answer: 'No. It adds repetitions and a shared standard before live arc time. Instructors still sign off on real metal.' },
			{ question: 'Can you simulate other trades?', answer: 'Yes. Welding is the focused offer on this page. The same team builds other procedure simulators when the rubric is clear.' },
			{ question: 'How does this relate to broader VR training?', answer: 'A welding simulator is a specific VR training simulation. If your lesson is a wider procedure or a conversation, start with that service and we will scope the simulator you need.' },
		],
		related: ['services/virtual-reality-training', 'ar-vr-training-education', 'ar-vr-development-solutions-for-government-agencies'],
		keywords: { primary: 'vr welding simulator', secondary: [] },
	},
	{
		slug: 'services/augmented-reality-development-company',
		kind: 'service',
		h1: 'Augmented Reality Development Company',
		title: 'Augmented Reality Development Company | EuphoriaXR',
		description:
			'EuphoriaXR creates custom augmented reality apps, WebAR experiences, and product visualizations that make real-world interactions more engaging.',
		summary: 'Bring products, stories, and digital experiences into the real world with custom augmented reality solutions.',
		navLabel: 'Augmented reality development',
		eyebrow: 'AR / Apps / WebAR',
		serviceType: 'Augmented reality development',
		image: 'ar',
		intro: [
			'EuphoriaXR is an augmented reality development company connecting digital and physical worlds through interactive AR applications. We develop AR experiences that people can access, explore, and interact with in their everyday surroundings.',
			'As an AR app development company and an augmented reality app development company, we also work as an AR development company for teams that need mobile apps, WebAR, virtual try-ons, and interactive brand campaigns. Our team handles experience design, 3D production, development, and deployment around your audience, business objectives, and technical requirements.',
		],
		benefits: [
			{ title: 'Prototype on real devices', body: 'Tracking, lighting, and interactions are proven on target phones, browsers, and glasses before production.' },
			{ title: 'App or WebAR, chosen on purpose', body: 'We recommend WebAR or a native app from the job, audience, and distribution path—not from habit.' },
			{ title: 'Brand in the scene', body: 'The experience follows your design system, including type, materials, motion, and campaign voice.' },
			{ title: 'A release you can run', body: 'Store listings, QR links, analytics, and handover docs are part of delivery—not an afterthought.' },
			{ title: 'Commerce-ready AR', body: 'Product configurators, try-on, and visualization flows that support discovery and conversion.' },
			{ title: 'Ongoing support', body: 'Post-launch updates for content, compatibility, and campaign refreshes when you need them.' },
		],
		process: [
			{
				title: 'AR Product Configurator',
				body: 'We create interactive AR configurators that let customers customize product colors, materials, and features while viewing their selections in real-world surroundings.',
			},
			{
				title: 'AR Product Visualization',
				body: 'We develop AR visualization solutions that allow customers to examine realistic 3D products, understand their dimensions, and preview them in physical spaces.',
			},
			{
				title: 'Branded AR Filters',
				body: 'We design custom AR filters and camera effects for branded campaigns, allowing audiences to interact with digital characters, animations, and promotional content.',
			},
			{
				title: 'AR Glasses Development',
				body: 'We develop applications for compatible AR glasses and spatial devices, bringing contextual information, interactive 3D content, and hands-free visual guidance into view.',
			},
			{
				title: 'Custom AR App Development',
				body: 'We build augmented reality applications for iOS and Android, incorporating spatial tracking, interactive 3D models, and features tailored to specific business requirements.',
			},
			{
				title: 'WebAR Development',
				body: 'We create browser-based augmented reality experiences that users can access through links or QR codes without downloading a separate mobile application.',
			},
			{
				title: 'WebAR Business Cards',
				body: 'We transform traditional business cards into interactive digital introductions featuring 3D content, company information, videos, and clickable contact options.',
			},
			{
				title: 'AR Virtual Try-On',
				body: 'We develop virtual try-on experiences that let shoppers preview eyewear, accessories, cosmetics, and other products using compatible smartphone cameras.',
			},
			{
				title: 'Interactive AR Packaging',
				body: 'We turn physical packaging into interactive experiences where customers can discover product information, watch animations, explore instructions, and access branded content.',
			},
			{
				title: 'Location-Based AR Experiences',
				body: 'We create AR applications that reveal digital stories, interactive objects, and contextual information when users explore designated physical locations.',
			},
			{
				title: 'AR Navigation & Wayfinding',
				body: 'We develop AR navigation experiences that display directional guidance and location information within supported environments, helping visitors find destinations more intuitively.',
			},
			{
				title: 'AR Event Activations',
				body: 'We create interactive AR experiences for exhibitions, trade shows, and promotional events, allowing visitors to engage with products, digital characters, and branded activities.',
			},
		],
		useCases: [
			{ title: 'Product visualization', body: 'See a product in the room, at the right scale, before a purchase.' },
			{ title: 'Campaigns', body: 'A filter or a scan that carries a launch further than a film.' },
			{ title: 'Guided work', body: 'Steps anchored to a machine or a kit for a technician in the field.' },
		],
		deliverables: [
			{ title: 'Experience brief', body: 'Device list, the moment, and the success metric.' },
			{ title: 'Prototype', body: 'A build that proves tracking and the core interaction.' },
			{ title: 'Production app or WebAR', body: 'The released experience and its fallback.' },
			{ title: 'Launch pack', body: 'Store assets or links, analytics, and update notes.' },
		],
		faqs: [
			{
				question: 'How much does it cost to develop a custom augmented reality application?',
				answer:
					'AR development costs depend on project complexity, 3D assets, tracking features, supported devices, and integrations. EuphoriaXR provides custom estimates based on your requirements and project scope.',
			},
			{
				question: 'Should my business choose WebAR or a native AR application?',
				answer:
					'Choose WebAR for quick browser access without downloads. Native AR applications are better for advanced interactions, deeper device integration, and offline functionality. The right choice depends on your audience and technical requirements.',
			},
			{
				question: 'How long does it take to launch a branded WebAR campaign?',
				answer:
					'A straightforward WebAR campaign may take several weeks. Projects requiring custom 3D assets, advanced tracking, multiple interactions, or integrations can take longer.',
			},
			{
				question: 'Can customers view our products in their actual size using AR?',
				answer:
					'Yes. AR product visualization can display accurately scaled 3D products in physical spaces. Placement accuracy depends on model dimensions, device tracking, and environmental conditions.',
			},
			{
				question: 'Can an AR product configurator connect with our existing product catalog?',
				answer:
					'Yes. AR configurators can integrate with compatible product databases and e-commerce systems through APIs, allowing customers to explore available colors, materials, configurations, and product information.',
			},
			{
				question: 'Can we add AR product previews to our existing Shopify or e-commerce website?',
				answer:
					'Yes. AR product previews can be integrated into Shopify and other compatible e-commerce platforms using optimized 3D models and supported technologies. Advanced configurations may require custom development.',
			},
			{
				question: 'How accurate are AR virtual try-on experiences?',
				answer:
					'Accuracy depends on tracking technology, product dimensions, 3D model quality, and device capabilities. Virtual try-on can provide realistic previews, but it may not guarantee exact physical fit.',
			},
			{
				question: 'Can users access our AR experience by scanning a QR code?',
				answer:
					'Yes. QR codes can open WebAR experiences directly in compatible mobile browsers, making them suitable for packaging, advertisements, retail displays, and events without requiring app downloads.',
			},
			{
				question: 'Can augmented reality work on both iPhones and Android devices?',
				answer:
					'Yes. EuphoriaXR develops AR experiences for compatible iOS and Android devices. Available features and performance depend on device capabilities, operating systems, and browser support.',
			},
			{
				question: 'Can our AR application work without an internet connection?',
				answer:
					'Yes. Native AR applications can support offline functionality when essential assets are stored locally. WebAR typically requires internet access for initial loading, while cloud-connected features need connectivity.',
			},
			{
				question: 'Can AR applications recognize our existing product packaging or printed materials?',
				answer:
					'Yes. Image-tracking AR can recognize suitable packaging, posters, brochures, and printed graphics to display linked 3D content, animations, or product information. Recognition quality depends on image features and environmental conditions.',
			},
			{
				question: 'Can we use our existing CAD files and 3D product models for AR development?',
				answer:
					'Yes. Existing CAD files and 3D models can often be reused after format conversion, geometry optimization, and material adjustments to meet AR performance and compatibility requirements.',
			},
			{
				question: 'Can AR applications show step-by-step instructions on physical equipment?',
				answer:
					'Yes. AR can overlay instructions, labels, and animated guidance onto equipment using appropriate tracking methods. Applications can support assembly, maintenance, inspections, and operational guidance.',
			},
			{
				question: 'Will our company own the AR application, 3D assets, and source code after development?',
				answer:
					'Ownership depends on the project agreement. Custom code, 3D assets, and deliverables can be addressed in the contract, while third-party tools and licensed components remain subject to their terms.',
			},
			{
				question: 'Does EuphoriaXR provide maintenance and support after an AR application launches?',
				answer:
					'Yes. EuphoriaXR offers post-launch support based on project requirements, including bug fixes, performance improvements, content updates, device compatibility, and technical maintenance.',
			},
		],
		related: ['services/webar-development', 'services/branded-ar-filters', 'ar-vr-media-and-marketing'],
		keywords: {
			primary: 'augmented reality development company',
			secondary: ['ar app development company', 'augmented reality app development company', 'ar development company'],
		},
	},
	{
		slug: 'services/mixed-reality-development-company',
		kind: 'service',
		h1: 'Mixed Reality Development Company',
		title: 'Top Mixed Reality Development Company | EuphoriaXR',
		description:
			'EuphoriaXR builds enterprise mixed reality apps for training, digital twins, guided work, and spatial collaboration across leading MR headsets.',
		summary: 'Building world-class enterprise mixed reality applications for real workflows and devices.',
		navLabel: 'Mixed reality development',
		eyebrow: 'MR / Spatial / Enterprise',
		serviceType: 'Mixed reality development',
		image: 'vr',
		intro: [
			'EuphoriaXR is a mixed reality development company that designs and builds immersive applications for enterprises operating across complex physical environments. We connect digital systems with real spaces through anchoring, occlusion, and environment-aware interaction.',
			'As an MR development company and mixed reality app development studio, we handle strategy, spatial design, 3D content, software engineering, and deployment across optical see-through and passthrough headsets.',
		],
		benefits: [
			{ title: 'Use-case first', body: 'We define the physical environment, device class, and workflow before production art or engineering scales up.' },
			{ title: 'Spatial UX that holds up', body: 'Interfaces stay readable under motion, with stable anchors and comfortable interaction patterns.' },
			{ title: 'Enterprise integrations', body: 'MR apps can connect to ERP, PLM, CRM, LMS, and analytics systems when the workflow needs them.' },
			{ title: 'Headset fleets that fit', body: 'We validate on the devices your teams will wear—Quest, Vision Pro, HoloLens, Magic Leap, Varjo, and more.' },
			{ title: 'Full IP path', body: 'Custom code and assets are structured for client ownership and internal scale.' },
			{ title: 'Support after launch', body: 'Platform updates, compatibility, and performance work continue as SDKs and fleets evolve.' },
		],
		process: [
			{
				title: 'Strategy & Planning',
				body: 'We define the mixed reality use case, physical environment constraints, device class, and system architecture before committing to production—including feasibility across optical see-through devices, passthrough MR headsets, and hybrid XR strategies.',
			},
			{
				title: 'Product Design',
				body: 'Product design defines how the mixed reality system fits into real workflows and how digital content behaves inside physical space—accounting for movement, safety, field of view, and environmental variability.',
			},
			{
				title: 'UX/UI Design',
				body: 'Mixed reality UX focuses on spatial legibility, persistent anchoring, comfortable interaction patterns, and interface stability under motion so MR interfaces stay usable during real-world tasks.',
			},
			{
				title: 'Content Creation',
				body: 'We create optimized 3D assets, spatial UI elements, animations, and digital twins engineered for real-time rendering inside mixed reality environments.',
			},
			{
				title: 'Software Engineering',
				body: 'Our mixed reality software development uses Unity, Unreal Engine where required, and native SDKs to build high-performance MR systems with stable tracking, reliable spatial anchors, and enterprise integrations.',
			},
			{
				title: 'Deployment',
				body: 'We support enterprise distribution, managed device fleets, headset configuration, security compliance, and rollout across operational environments.',
			},
			{
				title: 'Support & Maintenance',
				body: 'Post-launch support includes platform updates, device compatibility, SDK changes, performance optimization, and long-term mixed reality system evolution.',
			},
		],
		useCases: [
			{ title: 'Spatial design reviews', body: 'Walk around 1:1 digital twins anchored in real rooms.' },
			{ title: 'Guided assembly', body: 'Occlusion-aware instructions that match real part geometry.' },
			{ title: 'Remote assistance', body: 'Annotations locked to physical objects for field teams.' },
		],
		deliverables: [
			{ title: 'MR experience brief', body: 'Devices, environment, workflow, and success metrics.' },
			{ title: 'Spatial prototype', body: 'A build that proves tracking, anchors, and core interaction.' },
			{ title: 'Production MR app', body: 'The released experience on agreed headsets.' },
			{ title: 'Launch & support pack', body: 'Deployment notes, fleet guidance, and update plan.' },
		],
		faqs: [
			{
				question: 'What is mixed reality?',
				answer:
					'Mixed reality blends digital content with the physical world so virtual objects can anchor to and interact with real environments using depth, surfaces, and room geometry.',
			},
			{
				question: 'What does a mixed reality development company do?',
				answer:
					'A mixed reality development company designs and builds custom spatial computing applications—from strategy and spatial UX to 3D optimization, engineering, headset deployment, and support.',
			},
			{
				question: 'What is the difference between AR and mixed reality?',
				answer:
					'AR overlays digital content onto the real world. Mixed reality goes further with anchoring, occlusion, and environment-aware interaction so digital objects behave inside physical space.',
			},
			{
				question: 'Which headsets do you support?',
				answer:
					'We build for leading optical and passthrough platforms including Apple Vision Pro, Meta Quest, Samsung Galaxy XR, Microsoft HoloLens 2, Magic Leap 2, Varjo XR-4, XREAL, and Pico XR.',
			},
			{
				question: 'How long does mixed reality app development take?',
				answer:
					'Pilots often take about three months. Standard applications may take three to six months. Enterprise deployments with integrations can take six to twelve months in phases.',
			},
			{
				question: 'Can MR apps integrate with enterprise systems?',
				answer:
					'Yes. Mixed reality applications can integrate with ERP, PLM, CRM, LMS, and analytics systems so spatial computing fits existing workflows.',
			},
			{
				question: 'Do we own the IP?',
				answer:
					'Ownership depends on the agreement. EuphoriaXR structures enterprise projects so clients can retain ownership of custom code, assets, and systems.',
			},
			{
				question: 'What industries use mixed reality?',
				answer:
					'Manufacturing, automotive, aerospace, healthcare, construction, energy, education, logistics, defense, retail, and events—anywhere spatial clarity improves safety or performance.',
			},
			{
				question: 'What tools do you use for mixed reality development?',
				answer:
					'Typically Unity, Unreal Engine where required, native SDKs, and 3D tooling such as Blender, with C# or C++ depending on the platform.',
			},
			{
				question: 'Do you provide post-launch support?',
				answer:
					'Yes. Support can include platform updates, device compatibility, SDK changes, performance work, and content improvements as fleets evolve.',
			},
			{
				question: 'What is industrial mixed reality?',
				answer:
					'Industrial mixed reality deploys MR in manufacturing and operations to guide workflows, reduce errors, and improve safety with spatially anchored digital instructions.',
			},
			{
				question: 'How is mixed reality used in healthcare?',
				answer:
					'Healthcare MR supports surgical planning, anatomical visualization, medical education, and clinical simulation with spatially aligned 3D models.',
			},
			{
				question: 'Can mixed reality work outdoors?',
				answer:
					'It depends on the headset and environment. Devices like Magic Leap 2 are stronger for outdoor brightness, while passthrough headsets need careful lighting and tracking validation on site.',
			},
			{
				question: 'What is mixed reality training?',
				answer:
					'Mixed reality training blends real-world context with digital simulation to improve retention, reduce risk, and accelerate skill acquisition versus classroom-only methods.',
			},
			{
				question: 'How do we start an MR project with EuphoriaXR?',
				answer:
					'Start with a discovery call. We map the workflow, environment, devices, and success metrics, then recommend a pilot scope before full production.',
			},
		],
		related: [
			'services/augmented-reality-development-company',
			'services/virtual-reality-development-company',
			'ar-vr-training-education',
		],
		keywords: {
			primary: 'mixed reality development company',
			secondary: ['mr development company', 'mixed reality app development', 'mixed reality development'],
		},
	},
	{
		slug: 'services/virtual-reality-development-company',
		kind: 'service',
		h1: 'Virtual Reality Development Company',
		title: 'Top Virtual Reality Development Company | EuphoriaXR',
		description:
			'10+ years. 300+ projects. Explore EuphoriaXR, a virtual reality development company trusted by brands including Ducati, PepsiCo, and Nestlé.',
		summary:
			'Building world-class VR applications for startups, enterprises, government organizations, and creative agencies.',
		navLabel: 'Virtual reality development',
		eyebrow: 'VR / DEVELOPMENT / Top Virtual Reality Development Services',
		serviceType: 'Virtual reality development',
		image: 'vr',
		intro: [
			'Great VR starts with what people need to do, not just what they see. Our virtual reality development services turn that purpose into interactive, headset-ready applications for your teams.',
			'EuphoriaXR provides custom virtual reality development for businesses, building immersive apps for real business needs.',
		],
		benefits: [
			{ title: 'VR built around goals', body: 'Every build starts with the outcome your teams need in the headset.' },
			{ title: 'A clear project scope', body: 'Discovery locks the users, devices, and constraints before production begins.' },
			{ title: 'The headsets your users need', body: 'We design for the hardware your audience will actually wear and deploy.' },
			{ title: 'Help when VR goes live', body: 'Launch includes configuration support, guidance, and updates as requirements change.' },
		],
		process: [
			{
				title: 'Virtual Reality Training',
				body: 'We create VR lessons with clear tasks, safe practice, and feedback that fit your team, tools, and learning goals.',
			},
			{
				title: 'Virtual Reality Simulators',
				body: 'Teams practice key steps in VR, with safe drills, clear actions, and scenes built for the task at hand.',
			},
			{
				title: 'VR 360 Video Production',
				body: 'We film and edit 360 VR video for tours, events, and learning, with clear scenes, sound, and playback options.',
			},
			{
				title: 'VR Rental Services For Events',
				body: 'We rent VR headsets for events and help with setup, guest flow, playback, and on-site support during each session.',
			},
			{
				title: 'Custom VR Application Development',
				body: 'We build custom VR applications with interactive environments, intuitive interfaces, system integrations, and optimized performance across supported virtual reality headsets and platforms.',
			},
			{
				title: 'VR Game Development',
				body: 'We create immersive VR games and gamified experiences with interactive environments, responsive controls, and gameplay designed for entertainment, education, and branded engagement.',
			},
			{
				title: 'VR Product Visualization & Virtual Showrooms',
				body: 'We develop interactive VR showrooms and product demonstrations that let customers explore 3D models, examine features, and compare product configurations.',
			},
			{
				title: 'VR Tours & Walkthroughs',
				body: 'We create immersive VR tours and walkthroughs for real estate, architecture, museums, and tourism, allowing users to explore spaces remotely.',
			},
			{
				title: 'VR Application Maintenance & Support',
				body: 'We provide post-launch support for VR applications, including bug fixes, headset compatibility updates, performance improvements, and content changes as requirements evolve.',
			},
		],
		useCases: [
			{ title: 'Skills training', body: 'A procedure or conversation scored for an instructor.' },
			{ title: 'Design review', body: 'A space or product at full scale before it is built.' },
			{ title: 'Brand worlds', body: 'A short, hosted experience for a launch or a show.' },
		],
		deliverables: [
			{ title: 'Session design', body: 'Duration, controls, comfort limits, and the goal.' },
			{ title: 'Headset build', body: 'The experience on the agreed devices.' },
			{ title: 'Review captures', body: 'Video and a spectator mode for stakeholders.' },
			{ title: 'Pilot notes', body: 'What users did and what we will change.' },
		],
		faqs: [
			{
				question: 'What does a virtual reality development company do?',
				answer:
					'A virtual reality development company designs and builds immersive applications, including VR training, simulations, product demonstrations, and interactive experiences. Services cover 3D design, software development, testing, and deployment.',
			},
			{
				question: 'What VR development services does EuphoriaXR offer?',
				answer:
					'EuphoriaXR offers custom VR training, virtual reality simulators, 360° video production, and VR headset rentals for events, alongside experience design, 3D development, and deployment support.',
			},
			{
				question: 'What types of VR applications can businesses develop?',
				answer:
					'Businesses can develop VR training simulations, virtual showrooms, product demonstrations, medical visualizations, architectural walkthroughs, educational experiences, and immersive brand activations based on their objectives.',
			},
			{
				question: 'Which industries use virtual reality development services?',
				answer:
					'VR is used in healthcare, education, manufacturing, construction, real estate, government, retail, and entertainment for training, simulation, visualization, and interactive experiences.',
			},
			{
				question: 'How much does custom virtual reality development cost?',
				answer:
					'VR development costs depend on project complexity, 3D assets, interactive features, supported devices, and integrations. EuphoriaXR provides custom quotes based on project requirements.',
			},
			{
				question: 'How long does it take to develop a VR application?',
				answer:
					'Development timelines depend on application complexity, content requirements, features, and hardware. Simple prototypes take less time than enterprise simulations with advanced interactions and integrations.',
			},
			{
				question: 'What is the virtual reality development process?',
				answer:
					'The VR development process includes discovery, experience design, prototyping, 3D production, application development, headset testing, optimization, and deployment, followed by ongoing support when required.',
			},
			{
				question: 'Which VR headsets and platforms do you develop for?',
				answer:
					'EuphoriaXR works with platforms including Meta Quest, HTC Vive, and Pico. Device compatibility and deployment requirements are evaluated during project planning.',
			},
			{
				question: 'What technologies are used for VR application development?',
				answer:
					'VR development commonly uses Unity, Unreal Engine, 3D modeling tools, platform SDKs, and real-time rendering technologies. The technology stack depends on project requirements.',
			},
			{
				question: 'What is the difference between VR applications and 360° VR videos?',
				answer:
					'VR applications support interactive environments, object manipulation, and task-based experiences. 360° VR videos provide immersive viewing of recorded environments with limited interaction.',
			},
			{
				question: 'Can existing 3D models or CAD files be used in VR?',
				answer:
					'Yes. Existing 3D models, CAD files, and animations can often be reused after conversion and optimization for VR hardware and performance requirements.',
			},
			{
				question: 'Can VR applications integrate with existing business systems?',
				answer:
					'Yes. Custom VR applications can integrate with learning management systems, analytics platforms, databases, and enterprise software, depending on API availability and security requirements.',
			},
			{
				question: 'How can businesses measure VR training effectiveness?',
				answer:
					'Businesses can measure task completion, assessment scores, error rates, training progress, and user feedback against predefined learning objectives.',
			},
			{
				question: 'Is virtual reality worth investing in for businesses?',
				answer:
					'VR can deliver value through repeatable training, immersive product demonstrations, and interactive visualization. Its suitability depends on business goals, implementation costs, and measurable outcomes.',
			},
			{
				question: 'How do I choose the best virtual reality development company?',
				answer: 'Evaluate relevant projects, technical expertise, supported hardware, and client reviews.',
			},
		],
		related: ['services/virtual-reality-training', 'services/vr-simulators', 'ar-vr-training-education'],
		keywords: { primary: 'virtual reality development', secondary: ['virtual reality development company', 'vr development services'] },
	},
	{
		slug: 'services/nft-makers-metaverse-development-company',
		kind: 'service',
		h1: 'NFT Marketplace Development Company',
		title: 'Hire an NFT Marketplace Development Company | EuphoriaXR',
		description:
			'EuphoriaXR is an NFT marketplace development company for brands that need minting, trading, and a community space tied to a real product or membership.',
		summary: 'Marketplace, mint, and membership experiences tied to a real product.',
		navLabel: 'NFT and metaverse development',
		eyebrow: 'Web3 / Marketplace / Worlds',
		serviceType: 'NFT marketplace development',
		image: 'cosmos',
		intro: [
			'An NFT marketplace development company should be able to say what the token is for. EuphoriaXR builds mint, trade, and membership flows that connect to a product, an event, or a community you already have.',
			'NFT marketplace development here includes the sober parts: wallets, fees, metadata, and a front door a non-crypto customer can understand. If a persistent world is part of the brief, we scope that as its own release.',
		],
		benefits: [
			{ title: 'A reason for the token', body: 'Access, proof, or a collectible tied to something you sell or host.' },
			{ title: 'A front door for newcomers', body: 'People can participate without already speaking wallet jargon.' },
			{ title: 'Metadata you control', body: 'Art, traits, and updates have an owner and a backup.' },
			{ title: 'A staged release', body: 'Mint first. Trading and a world only if the first release earns them.' },
		],
		process: [
			{ title: 'Name the utility', body: 'What holding the token lets someone do in the real product or event.' },
			{ title: 'Design the path', body: 'Discover, mint, and return. Fees and failures included.' },
			{ title: 'Build the marketplace', body: 'Contracts reviewed for the chain you chose, plus the web app.' },
			{ title: 'Launch with support', body: 'The first drop has a staffed window and a written incident plan.' },
		],
		useCases: [
			{ title: 'Membership', body: 'A token that opens content, a drop, or an event tier.' },
			{ title: 'Product proof', body: 'A digital record that travels with a physical item.' },
			{ title: 'Community drops', body: 'A small, scheduled release with a clear secondary market or none at all.' },
		],
		deliverables: [
			{ title: 'Utility brief', body: 'What the token does, and what it deliberately does not do.' },
			{ title: 'Marketplace app', body: 'Mint, list, and the account path for new buyers.' },
			{ title: 'Metadata pipeline', body: 'Art, traits, and how an update is published.' },
			{ title: 'Launch plan', body: 'Timing, support, and how you pause a drop.' },
		],
		faqs: [
			{ question: 'What does an NFT marketplace development company build?', answer: 'The mint and trade experience, the metadata, the wallet path, and the page that explains the utility. We scope a world or a game only after that core is clear.' },
			{ question: 'Is NFT marketplace development still worth it?', answer: 'When the token is an access pass or a proof attached to a product you already operate, yes. We will say no when the token has no job.' },
			{ question: 'Which chains do you use?', answer: 'We choose with you from fees, audience, and who has to custody what. The choice is in the brief before contracts are written.' },
			{ question: 'Can our agency lead the brand?', answer: 'Yes. We often build while a creative agency leads the story. The immersive agency page describes that split.' },
		],
		related: ['services/augmented-reality-development-company', 'ar-vr-media-and-marketing', 'ar-vr-development-solutions-for-creative-agencies'],
		keywords: {
			primary: 'nft marketplace development company',
			secondary: ['nft marketplace development'],
		},
	},
	{
		slug: 'services/branded-ar-filters',
		kind: 'service',
		h1: 'Branded AR Filters',
		title: 'Branded AR Filters for Campaigns and Retail | EuphoriaXR',
		description:
			'Branded AR filters from EuphoriaXR put your product on faces, spaces, and packaging for social channels and your own WebAR link. Built for brand teams.',
		summary: 'Face, world, and product filters for social and your own link.',
		navLabel: 'Branded AR filters',
		eyebrow: 'AR / Social / Brand',
		serviceType: 'Branded AR filters',
		image: 'abstract',
		intro: [
			'Branded AR filters put your product on a face, in a room, or on a pack, and give people a reason to share it. EuphoriaXR designs the effect, builds it for the channel, and keeps a version you can open from your own site.',
			'We treat the filter as a campaign asset: a start date, an end date, and a count of people who used it, not a one-off file in a folder.',
		],
		benefits: [
			{ title: 'On-brand, not a template', body: 'Materials, type, and the product itself are matched to the shoot or the sample.' },
			{ title: 'Social and owned', body: 'The same idea can run as a platform effect and as WebAR you host.' },
			{ title: 'Light enough to finish', body: 'Effects are budgeted so they open on the phones your audience has.' },
			{ title: 'A readout', body: 'Opens, captures, and clicks back to the product are part of the launch.' },
		],
		process: [
			{ title: 'Pick the gesture', body: 'Try-on, a world effect, or a pack that comes alive. One primary gesture.' },
			{ title: 'Design frames', body: 'Still frames approved before the effect is built, so review is about the idea.' },
			{ title: 'Build and submit', body: 'We produce the effect and handle the channel requirements.' },
			{ title: 'Measure the flight', body: 'You see use during the campaign and a note on what to repeat.' },
		],
		useCases: [
			{ title: 'Beauty and accessories', body: 'A try-on that matches the shade or the piece in the campaign.' },
			{ title: 'Launches', body: 'A world effect tied to a film, with a path back to the product.' },
			{ title: 'Retail theatre', body: 'An in-store screen or a pack code that uses the same asset as social.' },
		],
		deliverables: [
			{ title: 'Effect design', body: 'Frames, the gesture, and the end card or link.' },
			{ title: 'Channel build', body: 'The filter submitted for the platforms you chose.' },
			{ title: 'Owned WebAR', body: 'A link on your domain when you want to keep the experience.' },
			{ title: 'Flight notes', body: 'What was used, and what to change next time.' },
		],
		faqs: [
			{ question: 'What are branded AR filters?', answer: 'They are camera effects, try-ons, or world effects made for your brand and published to a social platform or your own WebAR link. They are designed for a campaign window, with a way to measure use.' },
			{ question: 'Which platforms can you publish to?', answer: 'We build for the major social effect platforms and for WebAR you host. The brief names the channels before production so the asset fits their rules.' },
			{ question: 'Can a filter match a real product color?', answer: 'We match from a sample or a graded reference and test on more than one phone. Exact print color and a screen will never be identical, and we will show you the difference.' },
			{ question: 'How does this connect to an AR QR code?', answer: 'The filter can be the scene behind an augmented reality QR code on a pack or a poster, so social and print tell the same story.' },
		],
		related: ['services/webar-development', 'ar-vr-media-and-marketing', 'ar-vr-fashion-retail'],
		keywords: { primary: 'branded ar filters', secondary: [] },
	},
	{
		slug: 'services/apple-vision-pro-development',
		kind: 'service',
		h1: 'Apple Vision Pro Development Company',
		title: 'Top Apple Vision Pro Development Company | EuphoriaXR',
		description:
			'EuphoriaXR offers custom Apple Vision Pro development, from visionOS solutions and spatial computing to enterprise training and 3D visualization.',
		summary:
			'Custom visionOS applications for enterprise training, product visualization, spatial collaboration, and immersive digital experiences.',
		navLabel: 'Apple Vision Pro development',
		eyebrow: 'visionOS / Spatial / Enterprise',
		serviceType: 'Apple Vision Pro development',
		image: 'vr',
		intro: [
			'EuphoriaXR is an Apple Vision Pro development company that designs and builds native visionOS applications for enterprise training, product visualization, and spatial collaboration.',
			'Our visionOS app development and Apple Vision Pro app development practice covers spatial computing development, RealityKit content, SwiftUI engineering, integrations, and App Store or MDM deployment.',
		],
		benefits: [
			{ title: 'Native visionOS first', body: 'We build for eyes, hands, and voice with RealityKit and SwiftUI—not flat ports of phone layouts.' },
			{ title: 'Hardware-validated pilots', body: 'Prototypes run on real Apple Vision Pro devices before large content and integration budgets commit.' },
			{ title: 'Enterprise integrations', body: 'ERP, PLM, CRM, EHR/DICOM, and analytics connections when the workflow needs them.' },
			{ title: 'SharePlay when it matters', body: 'Shared spatial sessions for co-review, training, and distributed collaboration.' },
			{ title: 'Client IP ownership', body: 'Custom code, scenes, and assets structured for your ownership and internal scale.' },
			{ title: 'Support after launch', body: 'SDK updates, performance work, and roadmap evolution as visionOS grows.' },
		],
		process: [
			{
				title: 'Discovery & Opportunity',
				body: 'Align on goals, users, immersion model, systems, and success metrics before production begins.',
			},
			{
				title: 'Spatial Design & Prototype',
				body: 'Define visionOS product and UX, then validate interaction and performance on real hardware.',
			},
			{
				title: 'Build & Integrate',
				body: 'SwiftUI and RealityKit engineering, content production, enterprise integrations, and on-device QA.',
			},
			{
				title: 'Launch & Scale',
				body: 'TestFlight, App Store or MDM deployment, fleet configuration, documentation, and handover.',
			},
			{
				title: 'Support & Evolve',
				body: 'SDK updates, performance tuning, new capabilities, and multi-year partnership as visionOS evolves.',
			},
		],
		useCases: [
			{ title: 'Product visualization', body: 'Life-size review with accurate materials, scale, and room-aware placement.' },
			{ title: 'Spatial training', body: 'Step-by-step instruction layered into real or simulated workspaces.' },
			{ title: 'Collaborative design review', body: 'SharePlay sessions for distributed teams reviewing models together.' },
		],
		deliverables: [
			{ title: 'Spatial experience brief', body: 'Immersion model, devices, systems, and success metrics.' },
			{ title: 'Hardware prototype', body: 'A visionOS build that proves interaction and performance on device.' },
			{ title: 'Production application', body: 'The released Apple Vision Pro experience on App Store or MDM.' },
			{ title: 'Launch & support pack', body: 'Deployment notes, fleet guidance, and update plan.' },
		],
		faqs: [
			{
				question: 'What does an Apple Vision Pro development company do?',
				answer:
					'We design and build custom visionOS applications—from spatial productivity and training to immersive visualization—covering discovery, spatial UX, 3D content, RealityKit/SwiftUI engineering, integrations, and deployment.',
			},
			{
				question: 'What is visionOS app development?',
				answer:
					'visionOS app development means building native spatial applications for Apple Vision Pro using SwiftUI, RealityKit, ARKit, and related Apple frameworks—designed for eyes, hands, and voice in shared or immersive space.',
			},
			{
				question: 'Do you offer Apple Vision Pro app development for enterprise?',
				answer:
					'Yes. We build enterprise-ready Vision Pro apps with integrations, MDM paths, and managed fleet deployment alongside App Store distribution when needed.',
			},
			{
				question: 'What is spatial computing development?',
				answer:
					'Spatial computing development places digital content in physical space with depth, anchors, and spatial interaction. On Vision Pro that typically means native visionOS experiences; we also connect programs to AR, VR, and MR when scale requires it.',
			},
			{
				question: 'Which frameworks do you use?',
				answer:
					'SwiftUI, RealityKit, ARKit, Reality Composer Pro, Metal when needed, and Unity PolySpatial for existing Unity content.',
			},
			{
				question: 'How long does Apple Vision Pro development take?',
				answer:
					'Hardware prototypes often take several weeks. Production applications typically span months depending on content and integrations. Enterprise programs are often phased.',
			},
			{
				question: 'How much does Apple Vision Pro development cost?',
				answer:
					'Cost varies by immersion depth, 3D content, integrations, and deployment model. EuphoriaXR provides a custom estimate after discovery.',
			},
			{
				question: 'Can existing iOS apps run on Vision Pro?',
				answer:
					'Compatible iOS/iPadOS apps can run in a 2D compatibility window, but they do not use spatial interaction. We help decide between compatibility, spatial adaptation, or a native visionOS build.',
			},
			{
				question: 'Do you support MDM and enterprise fleets?',
				answer:
					'Yes. We plan for Apple Business Manager and major MDM platforms so pilots and rollouts work on managed Vision Pro devices.',
			},
			{
				question: 'Can you build Unity apps for Apple Vision Pro?',
				answer:
					'Yes. Unity PolySpatial enables visionOS deployment from Unity projects. We manage the port, shared-space constraints, and visionOS interaction design.',
			},
			{
				question: 'Who owns the IP?',
				answer:
					'Ownership is defined in the contract. We structure enterprise work so clients can retain ownership of custom code, scenes, and assets.',
			},
			{
				question: 'How do we start?',
				answer:
					'Book a discovery call. We map the use case, immersion model, systems, and success metrics, then recommend a pilot scope.',
			},
		],
		related: [
			'services/augmented-reality-development-company',
			'services/virtual-reality-development-company',
			'services/mixed-reality-development-company',
		],
		keywords: {
			primary: 'apple vision pro development company',
			secondary: ['visionos app development', 'apple vision pro app development', 'spatial computing development'],
		},
	},
	{
		slug: 'services/meta-quest-development',
		kind: 'service',
		h1: 'Meta Quest Development Company',
		title: 'Top Meta Quest App Development Company | EuphoriaXR',
		description:
			'EuphoriaXR builds Meta Quest apps for VR training, mixed reality, immersive games, and enterprise fleets with Unity, Unreal, and Meta XR SDKs.',
		summary: 'Custom Meta Quest apps for VR training, mixed reality workflows, immersive games, and scalable enterprise deployment.',
		navLabel: 'Meta Quest development',
		eyebrow: 'Quest / VR / Mixed Reality',
		serviceType: 'Meta Quest development',
		image: 'vr',
		intro: [
			'EuphoriaXR is a Meta Quest development company that designs and builds custom Quest applications for VR training, mixed reality workflows, immersive games, and enterprise deployment.',
			'Our Meta Quest app development and Quest VR development practice covers strategy, VR/MR UX, 3D content, Unity and Unreal engineering, integrations, and Meta Horizon Store or MDM distribution—plus Meta Quest mixed reality development when programs need color passthrough.',
		],
		benefits: [
			{ title: 'Quest-first delivery', body: 'We design for Quest performance, comfort, and interaction—not desktop ports squeezed onto a headset.' },
			{ title: 'Hardware-validated pilots', body: 'Prototypes run on real Meta Quest devices before large content and integration budgets commit.' },
			{ title: 'Enterprise integrations', body: 'LMS, ERP, CRM, analytics, and internal API connections when the workflow needs them.' },
			{ title: 'VR and mixed reality', body: 'Full immersion or color passthrough—chosen to match the task and the room.' },
			{ title: 'Client IP ownership', body: 'Custom code, scenes, and assets structured for your ownership and internal scale.' },
			{ title: 'Support after launch', body: 'OS and SDK updates, performance work, and roadmap evolution as your Quest program grows.' },
		],
		process: [
			{
				title: 'Discovery & Opportunity',
				body: 'Align on goals, users, device choice, systems, and success metrics before production begins.',
			},
			{
				title: 'UX Design & Prototype',
				body: 'Define the VR/MR product and validate interaction and performance on real Quest hardware.',
			},
			{
				title: 'Build & Integrate',
				body: 'Unity or Unreal engineering, content production, enterprise integrations, and on-device QA.',
			},
			{
				title: 'Launch & Scale',
				body: 'Horizon Store or MDM deployment, fleet guidance, documentation, and handover.',
			},
			{
				title: 'Support & Evolve',
				body: 'Platform updates, performance tuning, new capabilities, and partnership as your program grows.',
			},
		],
		useCases: [
			{ title: 'Workforce training', body: 'Practice procedures and soft skills in safe, repeatable Quest modules.' },
			{ title: 'Safety simulation', body: 'Rehearse high-risk scenarios without putting people or equipment at risk.' },
			{ title: 'Product visualization', body: 'Explore products and spaces at scale with controllers or hand tracking.' },
		],
		deliverables: [
			{ title: 'Experience brief', body: 'Device choice, immersion model, systems, and success metrics.' },
			{ title: 'Hardware prototype', body: 'A Quest build that proves interaction and performance on device.' },
			{ title: 'Production application', body: 'The released Meta Quest experience on store or MDM.' },
			{ title: 'Launch & support pack', body: 'Deployment notes, fleet guidance, and update plan.' },
		],
		faqs: [
			{
				question: 'What does a Meta Quest development company do?',
				answer:
					'We design and build custom Meta Quest applications—from VR training and mixed reality workflows to immersive games—covering discovery, UX, 3D content, Unity/Unreal engineering, integrations, and deployment.',
			},
			{
				question: 'Which Quest devices do you support?',
				answer:
					'Meta Quest 3, Quest 3S, and Quest Pro, with interaction design for controllers and hand tracking as required.',
			},
			{
				question: 'Do you offer Meta Quest app development for enterprise?',
				answer:
					'Yes. We build enterprise-ready Quest apps with integrations, MDM paths, and managed fleet deployment alongside Horizon Store distribution when needed.',
			},
			{
				question: 'Which engines do you use?',
				answer: 'Unity and Unreal with Meta XR SDK / OpenXR, plus optimized 3D pipelines for Quest performance budgets.',
			},
			{
				question: 'How long does Meta Quest development take?',
				answer:
					'Hardware prototypes often take several weeks. Production applications typically span months depending on content and integrations. Enterprise programs are often phased.',
			},
			{
				question: 'How much does Meta Quest development cost?',
				answer:
					'Cost varies by immersion depth, 3D content, integrations, and deployment model. EuphoriaXR provides a custom estimate after discovery.',
			},
			{
				question: 'Can you build mixed reality apps on Quest?',
				answer:
					'Yes. We build color passthrough experiences that place digital content in the physical room for training, demos, and spatial workflows.',
			},
			{
				question: 'Do you publish to the Meta Horizon Store?',
				answer:
					'Yes. We plan platform requirements, testing, and submission for store distribution—or MDM/enterprise distribution when fleets need managed installs.',
			},
			{
				question: 'Who owns the IP?',
				answer:
					'Ownership is defined in the contract. We structure enterprise work so clients can retain ownership of custom code, scenes, and assets.',
			},
			{
				question: 'How do we start?',
				answer:
					'Book a discovery call. We map the use case, device choice, systems, and success metrics, then recommend a pilot scope.',
			},
		],
		related: [
			'services/virtual-reality-development-company',
			'services/mixed-reality-development-company',
			'services/apple-vision-pro-development',
		],
		keywords: {
			primary: 'meta quest development company',
			secondary: ['meta quest app development', 'quest vr development', 'meta quest mixed reality development'],
		},
	},
	{
		slug: 'services/samsung-galaxy-xr-development',
		kind: 'service',
		h1: 'Samsung Galaxy XR Development Company',
		title: 'Samsung Galaxy XR Development Company | EuphoriaXR',
		description:
			'Build custom Samsung Galaxy XR apps, immersive 3D experiences and enterprise mixed reality solutions with EuphoriaXR Android XR development.',
		summary:
			'Build spatial applications, immersive 3D experiences and mixed reality solutions for Samsung Galaxy XR.',
		navLabel: 'Samsung Galaxy XR development',
		eyebrow: 'Android XR / Spatial / Enterprise',
		serviceType: 'Samsung Galaxy XR development',
		image: 'vr',
		intro: [
			'EuphoriaXR is a Samsung Galaxy XR development company that builds spatial applications, immersive 3D experiences and mixed reality solutions for Android XR.',
			'Our Android XR development and Galaxy XR app development practice covers Jetpack XR SDK, spatial UI, Unity and Unreal engineering, integrations and Google Play or enterprise distribution.',
		],
		benefits: [
			{ title: 'Android XR first', body: 'Native Jetpack XR paths and immersive 3D engines chosen to fit the product—not forced into one stack.' },
			{ title: 'Hardware-validated pilots', body: 'Prototypes run on real Galaxy XR hardware before large content and integration budgets commit.' },
			{ title: 'Spatialize existing Android', body: 'Evaluate compatible apps and adapt layouts, input and content for headset use.' },
			{ title: 'Enterprise workflows', body: 'Training, collaboration, visualization and productivity designed around real team needs.' },
			{ title: 'Client IP ownership', body: 'Custom code, scenes and assets structured for your ownership and internal scale.' },
			{ title: 'Support after launch', body: 'SDK updates, performance work and roadmap evolution as Android XR grows.' },
		],
		process: [
			{
				title: 'Discovery & Opportunity',
				body: 'Align on goals, users, device access, systems and success metrics before production begins.',
			},
			{
				title: 'Spatial Design & Prototype',
				body: 'Define Android XR product and UX, then validate interaction and performance on device.',
			},
			{
				title: 'Build & Integrate',
				body: 'Jetpack XR, Unity or Unreal engineering, content production, integrations and on-device QA.',
			},
			{
				title: 'Launch & Scale',
				body: 'Google Play or enterprise distribution, documentation and handover.',
			},
			{
				title: 'Support & Evolve',
				body: 'SDK updates, performance tuning and partnership as Android XR evolves.',
			},
		],
		useCases: [
			{ title: 'Spatial productivity', body: 'Adapt Android workflows into larger spatial panel layouts.' },
			{ title: 'Training & simulation', body: 'Repeatable learning scenarios with guided interactions.' },
			{ title: '3D visualization', body: 'Explore products, spaces and data as interactive spatial content.' },
		],
		deliverables: [
			{ title: 'Experience brief', body: 'Device access, immersion model, systems and success metrics.' },
			{ title: 'Hardware prototype', body: 'A Galaxy XR build that proves interaction and performance on device.' },
			{ title: 'Production application', body: 'The released Samsung Galaxy XR experience on the agreed channel.' },
			{ title: 'Launch & support pack', body: 'Deployment notes, device guidance and update plan.' },
		],
		faqs: [
			{
				question: 'What is Samsung Galaxy XR development?',
				answer:
					'It is the process of creating spatial applications, interactive 3D experiences and immersive software for Samsung Galaxy XR, which runs Android XR.',
			},
			{
				question: 'What is Android XR development?',
				answer:
					'Android XR development builds spatial and immersive applications for headsets running Google’s Android XR platform, including Galaxy XR.',
			},
			{
				question: 'Do you offer Galaxy XR app development for enterprise?',
				answer:
					'Yes. We build enterprise-ready Galaxy XR apps with integrations, testing plans and distribution options suited to managed fleets.',
			},
			{
				question: 'What is the Jetpack XR SDK?',
				answer:
					'Jetpack XR SDK is a set of Android libraries for spatial interfaces, 3D content and supported perception features.',
			},
			{
				question: 'How long does Samsung Galaxy XR development take?',
				answer:
					'Timelines vary by complexity, asset readiness, integrations and testing. A focused prototype usually requires less work than a complete enterprise application.',
			},
			{
				question: 'How much does Samsung Galaxy XR development cost?',
				answer:
					'Cost depends on functionality, 3D content, spatial interaction design, integrations, testing and distribution. EuphoriaXR provides a scoped estimate after discovery.',
			},
			{
				question: 'Can existing Android apps run on Galaxy XR?',
				answer:
					'Many compatible Android apps can run as panels on Android XR. Spatial features typically need additional development and device testing.',
			},
			{
				question: 'Should I use Jetpack XR, Unity or Unreal?',
				answer:
					'Jetpack XR fits native Android interfaces. Unity or Unreal often suit real-time 3D games and immersive environments. We choose based on requirements and team context.',
			},
			{
				question: 'Who owns the IP?',
				answer:
					'Ownership is defined in the contract. We structure enterprise work so clients can retain ownership of custom code, scenes and assets.',
			},
			{
				question: 'How do we start?',
				answer:
					'Book a discovery call. We map the use case, device access, systems and success metrics, then recommend a pilot scope.',
			},
		],
		related: [
			'services/apple-vision-pro-development',
			'services/meta-quest-development',
			'services/augmented-reality-development-company',
		],
		keywords: {
			primary: 'samsung galaxy xr development company',
			secondary: ['android xr development', 'galaxy xr app development', 'jetpack xr sdk'],
		},
	},
	{
		slug: 'services/extended-reality-development',
		kind: 'service',
		h1: 'Extended Reality (XR) Development Company',
		title: 'Extended Reality (XR) Development Company | Euphoria XR',
		description:
			"Build immersive digital experiences with Euphoria XR's extended reality development services, including custom AR, VR, MR, WebXR and enterprise XR solutions.",
		summary:
			'Build immersive digital experiences that connect people, products and environments with custom AR, VR, MR and WebXR solutions.',
		navLabel: 'Extended Reality development',
		eyebrow: 'AR / VR / MR / WebXR',
		serviceType: 'Extended Reality development',
		image: 'vr',
		intro: [
			'EuphoriaXR is an Extended Reality (XR) Development Company that designs and builds custom AR, VR, MR and WebXR solutions for businesses.',
			'Our XR development services cover immersive experience design, custom XR application development, enterprise XR solutions, 3D content and post-launch support.',
		],
		benefits: [
			{ title: 'Experience-led design', body: 'We start with the audience, interaction requirements and the purpose of the immersive experience.' },
			{ title: 'Custom technical solutions', body: 'We combine immersive design and development across relevant technologies and target platforms.' },
			{ title: 'Practical delivery', body: 'We consider feasibility, performance, usability and deployment throughout the project.' },
			{ title: 'Collaborative process', body: 'We work with stakeholders from concept planning to agreed launch and support activities.' },
			{ title: 'Multi-platform XR', body: 'AR, VR, MR and WebXR selected to match users, devices and business goals.' },
			{ title: 'Support after launch', body: 'Maintenance, updates and technical support can be included in the agreed project scope.' },
		],
		process: [
			{ title: 'Discovery & XR Strategy', body: 'Define the business objective, audience, success criteria and technical feasibility.' },
			{ title: 'Concept & Experience Design', body: 'Map user journeys, storyboards, spatial interactions and content requirements.' },
			{ title: 'Prototyping & Validation', body: 'Build an interactive prototype to test the concept, comfort and core functionality.' },
			{ title: 'XR Application Development', body: 'Develop the application, 3D assets, interaction logic and agreed integrations.' },
			{ title: 'Testing, Launch & Support', body: 'Validate performance, prepare deployment and plan ongoing updates under the agreed scope.' },
		],
		useCases: [
			{ title: 'XR Training & Simulation', body: 'Rehearse procedures, equipment operation and decision-making through interactive scenarios.' },
			{ title: 'XR Product Visualization', body: 'Present products in 3D and let users explore features, configurations and scale.' },
			{ title: 'Immersive Brand Experiences', body: 'Build interactive campaigns and experiential activations that invite audiences to participate.' },
		],
		deliverables: [
			{ title: 'XR strategy brief', body: 'Business goals, audience, technology choice and success criteria.' },
			{ title: 'Interactive prototype', body: 'A testable experience that validates comfort, interaction and core functionality.' },
			{ title: 'Production XR application', body: 'Application builds, 3D assets, integrations and deployment materials.' },
			{ title: 'Support plan', body: 'Updates, fixes and technical support aligned to the agreed scope.' },
		],
		faqs: [
			{
				question: 'What is extended reality (XR) development?',
				answer:
					'XR development is the design and engineering of immersive applications that use augmented reality, virtual reality or mixed reality to connect people with digital environments and experiences.',
			},
			{
				question: 'What is the difference between AR, VR, MR and XR?',
				answer:
					'XR is the umbrella term. AR adds digital content to real surroundings, VR creates a fully virtual environment, and MR allows digital elements to interact with the physical environment.',
			},
			{
				question: 'How much does XR development cost?',
				answer:
					'The cost depends on application complexity, 3D content, target devices, integrations, testing and deployment. A defined project scope is needed for a reliable estimate.',
			},
		],
		related: [
			'services/augmented-reality-development-company',
			'services/virtual-reality-development-company',
			'services/apple-vision-pro-development',
		],
		keywords: {
			primary: 'extended reality (xr) development company',
			secondary: ['xr development services', 'custom xr application development', 'enterprise xr solutions'],
		},
	},
	{
		slug: 'services/digital-twin-development',
		kind: 'service',
		h1: 'Digital Twin Development Company',
		title: 'Custom Digital Twin Development Services | EuphoriaXR',
		description:
			'Build custom digital twin solutions with Euphoria XR. Explore connected 3D models, data integration, simulations and visualization for enterprise assets.',
		summary:
			'Connect physical assets, operational data and virtual models for simulation, monitoring and informed decisions.',
		navLabel: 'Digital Twin development',
		eyebrow: 'Connected Assets / Simulation / Data',
		serviceType: 'Digital Twin development',
		image: 'city',
		intro: [
			'EuphoriaXR is a Digital Twin Development Company that designs connected digital twin development services for enterprise assets, facilities and processes.',
			'Our industrial digital twin and 3D digital twin practice covers modeling, IoT digital twin integration, simulation, analytics and XR-enabled visualization for digital twin solutions.',
		],
		benefits: [
			{ title: 'Outcome-led strategy', body: 'Start with the decision or workflow that matters, then agree success criteria and minimum useful model.' },
			{ title: 'Immersive visualization', body: 'Use established 3D, AR and VR experience to make complex asset information easier to navigate.' },
			{ title: 'Fit-for-purpose architecture', body: 'Assess software, data quality and deployment needs before selecting technology or integrations.' },
			{ title: 'Security & governance', body: 'Plan least-privilege access, network boundaries, data ownership and safe handling of sensitive information.' },
			{ title: 'Validation & fidelity', body: 'Compare model behavior with observed data and clarify limitations, uncertainty and refresh frequency.' },
			{ title: 'Lifecycle planning', body: 'Define ownership of models, assets, software and data mappings so the solution can evolve with operations.' },
		],
		process: [
			{ title: 'Discovery & Feasibility', body: 'Define use case, KPIs, data access and target fidelity.' },
			{ title: 'Model & Architecture', body: 'Map assets, relationships, data sources and interfaces.' },
			{ title: 'Prototype', body: 'Build a visual proof of concept and review with users.' },
			{ title: 'Integrate & Develop', body: 'Connect data and implement agreed behaviors and UI.' },
			{ title: 'Validate, Deploy & Maintain', body: 'Test accuracy and performance, then release with ownership for updates.' },
		],
		useCases: [
			{ title: 'Asset monitoring', body: 'Bring condition, state and history into a single interface for operators.' },
			{ title: 'Operational simulation', body: 'Compare layouts, schedules or assumptions virtually before real-world change.' },
			{ title: 'Facility visualization', body: 'Explore equipment locations and building layouts in an interactive spatial interface.' },
		],
		deliverables: [
			{ title: 'Digital twin strategy brief', body: 'Use case, KPIs, data readiness and target fidelity.' },
			{ title: 'Visual prototype', body: 'A proof of concept that validates the model and workflow with users.' },
			{ title: 'Connected twin application', body: 'Integrations, interfaces and deployment materials for the agreed scope.' },
			{ title: 'Lifecycle plan', body: 'Ownership, update cadence, validation and support arrangements.' },
		],
		faqs: [
			{
				question: 'What is digital twin development?',
				answer:
					'It is the process of designing a digital model of a real-world asset, system or process and connecting it to relevant data so its state can be maintained at a suitable refresh rate.',
			},
			{
				question: 'What is the difference between a digital twin and a 3D model?',
				answer:
					'A 3D model primarily represents geometry. A digital twin also connects to real-world information and updates to reflect relevant changes in the represented entity.',
			},
			{
				question: 'How much does digital twin development cost?',
				answer:
					'Cost depends on modeling detail, data access, integrations, simulation requirements, platform choices and validation. A discovery phase supports a meaningful estimate.',
			},
		],
		related: [
			'services/extended-reality-development',
			'services/apple-vision-pro-development',
			'services/ai-development-company',
		],
		keywords: {
			primary: 'digital twin development company',
			secondary: [
				'digital twin development services',
				'digital twin solutions',
				'industrial digital twin',
				'3d digital twin',
				'iot digital twin',
			],
		},
	},
];
