import type { MarketingPage } from './types';

export type UseCaseIcon =
	| 'training'
	| 'simulation'
	| 'design'
	| 'guided'
	| 'collab'
	| 'customer'
	| 'medical'
	| 'research'
	| 'education'
	| 'data'
	| 'productivity'
	| 'rnd'
	| 'robotics'
	| 'fitness'
	| 'wellness'
	| 'entertainment'
	| 'gaming'
	| 'art'
	| 'tours'
	| 'events'
	| 'marketing'
	| 'heritage'
	| 'therapy'
	| 'presence'
	| 'support'
	| 'onboarding'
	| 'knowledge'
	| 'routing'
	| 'review'
	| 'integration'
	| 'agent'
	| 'filter'
	| 'packaging'
	| 'tryon'
	| 'config'
	| 'mint'
	| 'world';

export type UseCaseCard = {
	title: string;
	body: string;
	icon: UseCaseIcon;
};

export type UseCaseSection = {
	label: string;
	headline: string;
	lead: string;
	items: UseCaseCard[];
};

const vrItems: UseCaseCard[] = [
	{ icon: 'training', title: 'Training', body: 'Employees practice procedures in realistic environments, build muscle memory, and learn safely before working with real equipment or patients.' },
	{ icon: 'simulation', title: 'Simulation', body: 'Complex systems and scenarios are recreated so teams can test conditions, evaluate outcomes, and explore situations that are difficult or costly to reproduce physically.' },
	{ icon: 'design', title: 'Design & Prototyping', body: 'Teams review 3D models at full scale, iterate on designs, and validate products without creating physical prototypes.' },
	{ icon: 'guided', title: 'Guided Work', body: 'Step-by-step instructions are delivered directly within the environment, helping technicians complete assembly, maintenance, or repair tasks hands-free.' },
	{ icon: 'collab', title: 'Collaboration', body: 'Distributed teams meet in shared virtual spaces to review work, make decisions, and collaborate as if they were in the same room.' },
	{ icon: 'customer', title: 'Customer Experiences', body: 'Products and services can be explored through virtual showrooms and configurations that go far beyond static images or videos.' },
	{ icon: 'medical', title: 'Medical Simulations', body: 'Clinical scenarios are recreated for surgical planning, anatomy education, and procedural practice in risk-free environments.' },
	{ icon: 'research', title: 'Clinical Research', body: 'Controlled virtual settings enable behavioral studies, treatment testing, and repeatable data collection.' },
	{ icon: 'education', title: 'Education & Learning', body: 'Interactive environments allow learners to explore concepts, run virtual experiments, and engage with material beyond traditional instruction.' },
	{ icon: 'data', title: 'Data Visualization & Digital Twins', body: 'VR apps bring complex data into 3D spaces, allowing teams to explore digital twins and identify insights beyond flat charts.' },
	{ icon: 'productivity', title: 'Productivity', body: 'Spatial workspaces expand screen real estate, reduce distractions, and organize information for focused work.' },
	{ icon: 'rnd', title: 'Research & Development', body: 'Scientists and engineers visualize data, simulate phenomena, and prototype ideas in controlled virtual environments.' },
	{ icon: 'robotics', title: 'Robotics & Teleoperations', body: 'Operators control robots, vehicles, or equipment remotely using immersive views and intuitive spatial interfaces.' },
	{ icon: 'fitness', title: 'Fitness', body: 'Exercise becomes more engaging through immersive workouts, rhythm-based training, and interactive cardio experiences.' },
	{ icon: 'wellness', title: 'Wellness', body: 'Calming virtual spaces support meditation, breathing exercises, relaxation, and mental health programs.' },
	{ icon: 'entertainment', title: 'Entertainment', body: 'Audiences step inside stories, live events, and cinematic experiences rather than watching from the outside.' },
	{ icon: 'gaming', title: 'Gaming & Social', body: 'Interactive games and shared virtual spaces let users play, compete, and connect regardless of physical location.' },
	{ icon: 'art', title: 'Art & Creative Expression', body: 'Artists work with spatial canvases to create immersive art, virtual productions, and three-dimensional narratives.' },
	{ icon: 'tours', title: 'Virtual Tours', body: 'Properties, destinations, and facilities can be explored remotely before visiting or making decisions.' },
	{ icon: 'events', title: 'Live Events', body: 'Concerts, sports, and conferences are experienced with a sense of presence that streaming video cannot provide.' },
	{ icon: 'marketing', title: 'Marketing & Brand Experiences', body: 'VR applications create memorable brand activations and campaigns that generate engagement beyond traditional media.' },
	{ icon: 'heritage', title: 'Cultural Heritage & Preservation', body: 'Historical sites, museums, and artifacts are recreated to educate audiences and preserve endangered locations.' },
	{ icon: 'therapy', title: 'Therapy & Rehabilitation', body: 'Adjustable virtual environments support exposure therapy, physical rehabilitation, and therapeutic interventions.' },
	{ icon: 'presence', title: 'Remote Presence', body: 'Users can attend meetings, visit facilities, or experience events from afar with a strong sense of being there.' },
];

const arItems: UseCaseCard[] = [
	{ icon: 'tryon', title: 'Virtual try-on', body: 'Shoppers preview scale, fit, and finish on themselves or in a room before they buy.' },
	{ icon: 'packaging', title: 'Packaging & print', body: 'Boxes, posters, and inserts open into product demos, stories, or offers without an app download when WebAR fits.' },
	{ icon: 'marketing', title: 'Campaign activations', body: 'Out-of-home, retail, and social campaigns that people can point at and share.' },
	{ icon: 'guided', title: 'Guided assembly', body: 'Technicians see the next step overlaid on the real equipment while their hands stay free.' },
	{ icon: 'education', title: 'Classroom overlays', body: 'Models and labels sit on the desk or worksheet so the lesson stays with the notes.' },
	{ icon: 'tours', title: 'Wayfinding', body: 'Indoor arrows and markers help visitors find rooms, exhibits, or stock without a paper map.' },
	{ icon: 'config', title: 'Product visualization', body: 'Furniture, fixtures, and equipment land in the real space at true scale for a decision.' },
	{ icon: 'medical', title: 'Clinical support', body: 'Procedure cues and anatomy context appear beside the patient or training manikin.' },
	{ icon: 'events', title: 'Event overlays', body: 'Booths and stages add interactive layers guests can scan with a phone.' },
	{ icon: 'filter', title: 'Face & world filters', body: 'Branded lenses and effects for launches, holidays, and always-on social presence.' },
	{ icon: 'collab', title: 'Remote assist', body: 'An expert draws on the live camera view so a field tech can finish the job on site.' },
	{ icon: 'heritage', title: 'Site storytelling', body: 'Markers on plaques and ruins reveal history without replacing the physical visit.' },
];

const aiChatItems: UseCaseCard[] = [
	{ icon: 'support', title: 'Cited support', body: 'Customers get answers grounded in your help center, with a person when the case is new.' },
	{ icon: 'onboarding', title: 'Product onboarding', body: 'New users finish setup with steps that match their plan and account state.' },
	{ icon: 'knowledge', title: 'Internal knowledge', body: 'Sales and field teams ask the same library your customers use, plus the internal docs.' },
	{ icon: 'routing', title: 'Ticket triage', body: 'Incoming questions are labeled, prioritized, and handed off with full context.' },
	{ icon: 'customer', title: 'Order & account help', body: 'Status, returns, and account changes stay inside the channel people already opened.' },
	{ icon: 'review', title: 'Escalation with memory', body: 'When the bot stops, the agent sees the transcript, sources, and what was already tried.' },
	{ icon: 'integration', title: 'CRM-connected replies', body: 'Answers use live account data without inventing a policy you do not have.' },
	{ icon: 'productivity', title: 'Desk-side copilots', body: 'Agents draft replies they can edit, send, or reject before anything leaves the building.' },
	{ icon: 'education', title: 'Training the desk', body: 'New hires practice common tickets against the same grounded bot customers meet.' },
	{ icon: 'data', title: 'Miss logging', body: 'Failed questions become a weekly list of sources to add or jobs to refuse.' },
	{ icon: 'marketing', title: 'Campaign FAQs', body: 'Launch pages answer product questions without stuffing a live chat with scripts.' },
	{ icon: 'presence', title: 'After-hours coverage', body: 'Clear limits and handoff rules so nights and weekends stay useful, not reckless.' },
];

const aiSoftwareItems: UseCaseCard[] = [
	{ icon: 'review', title: 'Human-in-the-loop tools', body: 'Analysts draft with a model, then approve what is allowed to leave the building.' },
	{ icon: 'customer', title: 'In-product AI features', body: 'The AI step sits inside your product with the same account and design system.' },
	{ icon: 'routing', title: 'Service desk products', body: 'Routing, suggested replies, and a full audit of what was sent.' },
	{ icon: 'data', title: 'Document workflows', body: 'Extract, classify, and route paperwork with a review screen your team trusts.' },
	{ icon: 'knowledge', title: 'Knowledge assistants', body: 'Search and summarize across approved corpora with citations and access rules.' },
	{ icon: 'productivity', title: 'Ops copilots', body: 'Internal tools that propose the next action and wait for a person to confirm.' },
	{ icon: 'integration', title: 'Model-backed APIs', body: 'Services your other systems call, with logging, limits, and versioned prompts.' },
	{ icon: 'rnd', title: 'Eval harnesses', body: 'Fixed question sets and scorecards so every release can pass or fail in the open.' },
	{ icon: 'agent', title: 'Multi-step agents', body: 'Tools, memory, and stop conditions for jobs that need more than one model call.' },
	{ icon: 'support', title: 'Support products', body: 'Full surfaces around a bot: inbox, analytics, and admin for sources.' },
	{ icon: 'collab', title: 'Team review queues', body: 'Shared queues so specialists can correct outputs before customers see them.' },
	{ icon: 'config', title: 'Configurable pipelines', body: 'Prompt, retrieval, and tool settings your engineers can change without a redesign.' },
];

const aiIntegrationItems: UseCaseCard[] = [
	{ icon: 'integration', title: 'CRM and helpdesk hooks', body: 'Model calls sit beside the tickets and accounts your team already opens.' },
	{ icon: 'data', title: 'Data pipelines', body: 'Clean paths from warehouse or CMS into retrieval without leaking the wrong rows.' },
	{ icon: 'routing', title: 'Event-driven jobs', body: 'A new order, alert, or form triggers a bounded AI step with a clear owner.' },
	{ icon: 'knowledge', title: 'Source connectors', body: 'Approved pages, drives, and APIs become the only places answers may come from.' },
	{ icon: 'review', title: 'Approval gates', body: 'Sensitive outputs wait for a person before they write back to a system of record.' },
	{ icon: 'productivity', title: 'Slack / Teams bots', body: 'Internal questions answered where the team already chats, with audit trails.' },
	{ icon: 'support', title: 'Widget embeds', body: 'A grounded assistant on the site you already run, not a separate destination.' },
	{ icon: 'agent', title: 'Tool calling', body: 'Safe function calls into your APIs with schemas, timeouts, and refuse rules.' },
	{ icon: 'config', title: 'Environment splits', body: 'Dev, staging, and prod prompts and keys stay separated from day one.' },
	{ icon: 'rnd', title: 'Shadow mode', body: 'New models score tickets in parallel before they are allowed to answer live.' },
	{ icon: 'collab', title: 'Ops dashboards', body: 'Containment, cost, and failure reasons in one place for the people who own the bot.' },
	{ icon: 'presence', title: 'Channel adapters', body: 'Web, in-app, and messaging share one brain with channel-specific manners.' },
];

const aiAgentItems: UseCaseCard[] = [
	{ icon: 'agent', title: 'Research agents', body: 'Gather sources, draft a brief, and stop for review before anything is published.' },
	{ icon: 'routing', title: 'Ops agents', body: 'Watch queues, propose actions, and wait for confirmation on high-impact steps.' },
	{ icon: 'support', title: 'Support agents', body: 'Pull context, try safe tools, and escalate with a full trail when stuck.' },
	{ icon: 'data', title: 'Data prep agents', body: 'Clean and label batches under rules your analysts can inspect and rerun.' },
	{ icon: 'integration', title: 'System-of-record agents', body: 'Write back only through approved APIs with idempotency and logs.' },
	{ icon: 'review', title: 'Supervisor loops', body: 'A second model or a person checks risky steps before the agent continues.' },
	{ icon: 'knowledge', title: 'Library agents', body: 'Keep knowledge bases current by proposing edits from approved source changes.' },
	{ icon: 'productivity', title: 'Meeting follow-up', body: 'Turn transcripts into tasks and drafts your team can accept or discard.' },
	{ icon: 'config', title: 'Policy-bound tools', body: 'Each tool has limits, so the agent cannot invent a new permission mid-run.' },
	{ icon: 'rnd', title: 'Eval scenarios', body: 'Scripted runs that prove the agent still stops where it should.' },
	{ icon: 'collab', title: 'Handoff packets', body: 'When a person takes over, they get goals, tools used, and open questions.' },
	{ icon: 'presence', title: 'Always-on watchers', body: 'Low-risk monitoring jobs that page a human when thresholds trip.' },
];

const mlItems: UseCaseCard[] = [
	{ icon: 'data', title: 'Forecasting', body: 'Demand, capacity, or risk scores with a clear window of uncertainty.' },
	{ icon: 'routing', title: 'Classification', body: 'Tickets, leads, and documents land in the right queue with measurable error rates.' },
	{ icon: 'review', title: 'Anomaly review', body: 'Unusual events surface for a person instead of auto-closing the case.' },
	{ icon: 'rnd', title: 'Model evaluation', body: 'Holdout sets and slice reports so bias and drift are visible.' },
	{ icon: 'integration', title: 'Feature pipelines', body: 'Training and serving features stay defined in one place your engineers own.' },
	{ icon: 'productivity', title: 'Decision support', body: 'Scores appear beside the workflow, not as a black-box replacement for judgment.' },
	{ icon: 'medical', title: 'Regulated workflows', body: 'Documentation and human review designed for the constraints you actually have.' },
	{ icon: 'knowledge', title: 'Retrieval systems', body: 'Search that returns the paragraph you need, not a vague summary.' },
	{ icon: 'config', title: 'Retraining plans', body: 'When data shifts, who retrains, what must pass, and how rollback works.' },
	{ icon: 'collab', title: 'Stakeholder readouts', body: 'Plain-language scorecards for the teams that fund the model.' },
	{ icon: 'agent', title: 'Hybrid systems', body: 'Classical models and LLM steps share one architecture and audit log.' },
	{ icon: 'support', title: 'Customer risk scores', body: 'Signals that inform support and success without becoming a secret score.' },
];

const webarItems: UseCaseCard[] = [
	{ icon: 'packaging', title: 'Packaging experiences', body: 'A phone camera turns a box or label into a demo, story, or offer.' },
	{ icon: 'marketing', title: 'Print & OOH', body: 'Posters and placements that open without forcing an app install.' },
	{ icon: 'tryon', title: 'Browser try-on', body: 'Jewelry, eyewear, and beauty previews that run in the mobile browser.' },
	{ icon: 'config', title: 'Product in the room', body: 'Furniture and equipment placed at true scale from a product page.' },
	{ icon: 'events', title: 'Event stamps', body: 'Badges, floors, and booths that unlock a short WebAR moment.' },
	{ icon: 'education', title: 'Learning markers', body: 'Worksheets and textbooks that reveal a model when the phone aims at them.' },
	{ icon: 'tours', title: 'Location stories', body: 'QR or image targets that explain a place without a native download.' },
	{ icon: 'filter', title: 'Shareable moments', body: 'Short effects people can capture and post from the browser session.' },
	{ icon: 'customer', title: 'Commerce assists', body: 'Size, color, and feature explainers that sit next to add-to-cart.' },
	{ icon: 'presence', title: 'Always-on links', body: 'A single URL that works across campaigns instead of a one-off app.' },
	{ icon: 'data', title: 'Scan analytics', body: 'Opens, completes, and drop-offs your marketing team can read.' },
	{ icon: 'guided', title: 'How-to overlays', body: 'Assembly or setup cues on the real product after purchase.' },
];

const cardItems: UseCaseCard[] = [
	{ icon: 'marketing', title: 'Networking cards', body: 'A tap or scan opens portfolio, booking, or contact without a stack of links.' },
	{ icon: 'events', title: 'Conference badges', body: 'Attendees keep a memorable follow-up after the handshake.' },
	{ icon: 'customer', title: 'Sales leave-behinds', body: 'Prospects reopen the pitch on their phone after the meeting.' },
	{ icon: 'packaging', title: 'Premium print', body: 'Foil and stock that still scan cleanly for the AR layer.' },
	{ icon: 'filter', title: 'Brand intro', body: 'A short spatial hello that fits a first meeting, not a full campaign.' },
	{ icon: 'knowledge', title: 'Team directories', body: 'Roles and booking links stay current behind the same card design.' },
	{ icon: 'presence', title: 'Always-on identity', body: 'One asset that works at dinners, trade shows, and office visits.' },
	{ icon: 'data', title: 'Scan tracking', body: 'Know which cards and moments actually get opened.' },
];

const configuratorItems: UseCaseCard[] = [
	{ icon: 'config', title: 'Commerce configurators', body: 'Shoppers pick materials and options, then see the result before order.' },
	{ icon: 'design', title: 'Sales engineering', body: 'Reps configure complex SKUs live with a customer on a call.' },
	{ icon: 'tryon', title: 'In-room preview', body: 'Place the configured product in the real space at true scale.' },
	{ icon: 'data', title: 'BOM-linked options', body: 'Choices map to manufacturable parts, not impossible combinations.' },
	{ icon: 'customer', title: 'Quote handoff', body: 'The configuration becomes a quote or cart without retyping.' },
	{ icon: 'collab', title: 'Shared review links', body: 'Stakeholders open the same configured model without a seat license.' },
	{ icon: 'marketing', title: 'Launch microsites', body: 'A hero configurator carries a product story beyond static renders.' },
	{ icon: 'guided', title: 'Guided selling', body: 'Rules steer buyers away from incompatible options.' },
	{ icon: 'productivity', title: 'Dealer portals', body: 'Partners configure for their region with your catalog rules.' },
	{ icon: 'rnd', title: 'Design validation', body: 'Teams stress options before tooling is cut.' },
	{ icon: 'integration', title: 'ERP / PIM hooks', body: 'Prices and availability stay honest against live systems.' },
	{ icon: 'presence', title: 'Showroom kiosks', body: 'Walk-in customers configure without a salesperson glued to a laptop.' },
];

const trainingItems: UseCaseCard[] = [
	{ icon: 'training', title: 'Procedure practice', body: 'Learners repeat the steps that matter until the score and the debrief say they are ready.' },
	{ icon: 'simulation', title: 'Equipment simulation', body: 'Machines and spaces that are too costly or dangerous to stage for every cohort.' },
	{ icon: 'medical', title: 'Clinical rehearsal', body: 'Conversations, devices, and procedures practiced before a live patient.' },
	{ icon: 'education', title: 'Classroom labs', body: 'A station or period where students act, while the teacher keeps start and pause.' },
	{ icon: 'guided', title: 'On-the-job cues', body: 'AR or headset prompts that keep hands on the real work.' },
	{ icon: 'review', title: 'Instructor scoring', body: 'What the learner did is visible without standing over every headset.' },
	{ icon: 'collab', title: 'Team drills', body: 'Roles practice together in one session with a shared objective.' },
	{ icon: 'robotics', title: 'Safety drills', body: 'Rare emergencies and lockout steps practiced without stopping the plant.' },
	{ icon: 'presence', title: 'Remote coaching', body: 'An expert watches and guides without flying to every site.' },
	{ icon: 'data', title: 'Cohort reporting', body: 'Completion, misses, and time-on-task for the people who own the curriculum.' },
	{ icon: 'onboarding', title: 'New-hire paths', body: 'First-week lessons that fit the devices and minutes you actually have.' },
	{ icon: 'therapy', title: 'Soft-skill scenarios', body: 'Hard conversations and customer moments practiced with a clear rubric.' },
];

const simulatorItems: UseCaseCard[] = [
	{ icon: 'simulation', title: 'Welding and torch work', body: 'Scored practice for torch angle, speed, and form that instructors can review.' },
	{ icon: 'training', title: 'Industrial procedures', body: 'Lockout, assembly, and inspection flows without consuming real stock.' },
	{ icon: 'robotics', title: 'Vehicle and equipment ops', body: 'Controls and sightlines for machines that cannot be idle for training.' },
	{ icon: 'medical', title: 'Device handling', body: 'New instruments practiced before they reach a clinical floor.' },
	{ icon: 'guided', title: 'Step scoring', body: 'Each critical move is measured, not just completed.' },
	{ icon: 'review', title: 'Instructor replay', body: 'A capture of the session for coaching after the headset comes off.' },
	{ icon: 'data', title: 'Skill dashboards', body: 'Cohorts and individuals compared against the pass bar you set.' },
	{ icon: 'education', title: 'School and college labs', body: 'Shared stations that fit a period and a cart of headsets.' },
	{ icon: 'rnd', title: 'Process pilots', body: 'Try a new procedure with a small group before a plant-wide change.' },
	{ icon: 'collab', title: 'Buddy sessions', body: 'Two learners or a learner and coach in the same scenario.' },
	{ icon: 'presence', title: 'Distributed cohorts', body: 'Sites train on the same simulator without shipping hardware every week.' },
	{ icon: 'fitness', title: 'Fatigue and comfort tests', body: 'Session length and controls tuned so people can finish the lesson.' },
];

const filterItems: UseCaseCard[] = [
	{ icon: 'filter', title: 'Launch lenses', body: 'Face and world effects timed to a product drop or season.' },
	{ icon: 'marketing', title: 'Always-on brand filters', body: 'A durable effect people return to, not only a one-week stunt.' },
	{ icon: 'events', title: 'Event moments', body: 'Venue-specific effects guests capture and share the same night.' },
	{ icon: 'entertainment', title: 'Talent & IP', body: 'Character and IP treatments that stay on-model for the rights you hold.' },
	{ icon: 'gaming', title: 'Playable extras', body: 'Short games and gestures inside the lens, not only a sticker.' },
	{ icon: 'customer', title: 'Try-before overlays', body: 'Makeup, eyewear, and accessories previewed on the face.' },
	{ icon: 'packaging', title: 'Scan-to-filter', body: 'Packaging that unlocks a branded effect in-store or at home.' },
	{ icon: 'data', title: 'Campaign reporting', body: 'Opens, captures, and shares your media team can attribute.' },
	{ icon: 'presence', title: 'Multi-platform publish', body: 'Snap, Instagram, or web paths chosen for the audience you already have.' },
	{ icon: 'art', title: 'Creative R&D', body: 'Experimental looks that still ship with brand guardrails.' },
	{ icon: 'collab', title: 'Agency handoff', body: 'Specs and assets creative teams can extend without rebuilding the effect.' },
	{ icon: 'onboarding', title: 'How-to prompts', body: 'In-lens cues so first-time users know what to do in three seconds.' },
];

const nftItems: UseCaseCard[] = [
	{ icon: 'mint', title: 'Mint experiences', body: 'A clear path from story to wallet for people who are new to crypto.' },
	{ icon: 'customer', title: 'Membership access', body: 'Tokens that unlock products, drops, or rooms you already run.' },
	{ icon: 'world', title: 'Branded worlds', body: 'A hosted space for holders that does not pretend to be a full metaverse on day one.' },
	{ icon: 'marketing', title: 'Campaign collectibles', body: 'Limited drops tied to a launch, tour, or season.' },
	{ icon: 'events', title: 'Ticket and badge NFTs', body: 'Proof of attendance that still works as a useful pass.' },
	{ icon: 'art', title: 'Artist drops', body: 'Editions with metadata and royalties you can explain in plain language.' },
	{ icon: 'integration', title: 'Commerce ties', body: 'Holders redeem for real goods or services through your existing stack.' },
	{ icon: 'knowledge', title: 'Holder hubs', body: 'A front door for perks, updates, and support that is not Discord-only.' },
	{ icon: 'data', title: 'Mint analytics', body: 'Who minted, who returned, and which perks were used.' },
	{ icon: 'collab', title: 'Partner collections', body: 'Co-branded drops with clear ownership of art and customer data.' },
	{ icon: 'config', title: 'Trait and reveal flows', body: 'Reveals and updates that stay under your control.' },
	{ icon: 'presence', title: 'Web-first wallets', body: 'Paths that reduce jargon for the audience you actually sell to.' },
];

const educationItems: UseCaseCard[] = [
	{ icon: 'education', title: 'Science you cannot stage', body: 'A process, a scale, or a place the school cannot host in a lab period.' },
	{ icon: 'heritage', title: 'History and sites', body: 'A location students explore with a task, not a passive fly-through.' },
	{ icon: 'training', title: 'Career tasters', body: 'A safe first look at a procedure before a workshop placement.' },
	{ icon: 'simulation', title: 'Lab simulations', body: 'Experiments that are too costly, slow, or hazardous for every class.' },
	{ icon: 'collab', title: 'Shared classrooms', body: 'Remote and in-room students work the same lesson with a teacher in control.' },
	{ icon: 'guided', title: 'Teacher controls', body: 'Start, pause, and reset sit with the instructor, not inside a student menu.' },
	{ icon: 'data', title: 'Learning evidence', body: 'What students did is visible for the debrief after the headset comes off.' },
	{ icon: 'presence', title: 'Station models', body: 'A few devices serve the whole class while others follow on a shared view.' },
	{ icon: 'art', title: 'Creative studios', body: 'Spatial art and storytelling as coursework, not a novelty hour.' },
	{ icon: 'medical', title: 'Health programs', body: 'Anatomy and care scenarios sized for the age group and period length.' },
	{ icon: 'tours', title: 'Campus and field trips', body: 'Places the bus cannot reach, with a learning task attached.' },
	{ icon: 'wellness', title: 'Comfort-first design', body: 'Session length and locomotion chosen so students can finish the lesson.' },
];

const medicalItems: UseCaseCard[] = [
	{ icon: 'medical', title: 'Procedure rehearsal', body: 'Clinical steps practiced with scoring before a live patient.' },
	{ icon: 'training', title: 'Device training', body: 'New equipment learned without consuming clinical inventory.' },
	{ icon: 'therapy', title: 'Soft-skill scenarios', body: 'Hard conversations with patients and families practiced with a rubric.' },
	{ icon: 'simulation', title: 'Emergency drills', body: 'Rare events rehearsed as a team without clearing a ward.' },
	{ icon: 'education', title: 'Anatomy learning', body: 'Spatial models that stick better than a flat diagram alone.' },
	{ icon: 'research', title: 'Study environments', body: 'Controlled scenes for behavioral and clinical research protocols.' },
	{ icon: 'collab', title: 'Multi-role sims', body: 'Nurses, techs, and physicians train in the same scenario.' },
	{ icon: 'review', title: 'Faculty debrief', body: 'Captures and scores for the teaching team after the session.' },
	{ icon: 'guided', title: 'Just-in-time cues', body: 'AR overlays for training manikins and supervised practice.' },
	{ icon: 'data', title: 'Competency tracking', body: 'Cohort completion and miss patterns for program directors.' },
	{ icon: 'presence', title: 'Distributed residencies', body: 'Sites share the same module without shipping every specialist.' },
	{ icon: 'wellness', title: 'Comfort and safety', body: 'Session design that respects clinical schedules and headset tolerance.' },
];

const marketingItems: UseCaseCard[] = [
	{ icon: 'marketing', title: 'Campaign AR', body: 'Print, packaging, and OOH that people can open on a phone.' },
	{ icon: 'filter', title: 'Social filters', body: 'Lenses timed to a launch, tour, or always-on brand presence.' },
	{ icon: 'events', title: 'Experiential booths', body: 'Activations guests remember and share the same day.' },
	{ icon: 'customer', title: 'Product stories', body: 'WebAR and 3D explainers that sit beside the buy button.' },
	{ icon: 'entertainment', title: 'Immersive films', body: 'Short branded worlds for headset or browser audiences.' },
	{ icon: 'tours', title: 'Destination previews', body: 'Places and venues explored before the booking.' },
	{ icon: 'config', title: 'Interactive lookbooks', body: 'Configurable products that replace static spreads.' },
	{ icon: 'data', title: 'Engagement reporting', body: 'Scans, completes, and shares your media team can defend.' },
	{ icon: 'collab', title: 'Agency production', body: 'We build while your creative team owns the idea and the cutdown.' },
	{ icon: 'presence', title: 'Always-on links', body: 'One durable URL across flights instead of a disposable app.' },
	{ icon: 'packaging', title: 'Unboxing layers', body: 'The box becomes a second media channel after purchase.' },
	{ icon: 'gaming', title: 'Playable promos', body: 'Short games that still feel on-brand, not bolted on.' },
];

const retailItems: UseCaseCard[] = [
	{ icon: 'tryon', title: 'Jewelry & beauty try-on', body: 'Scale and finish on the face or wrist before checkout.' },
	{ icon: 'config', title: 'In-room furniture', body: 'True-scale placement so returns drop for the right reasons.' },
	{ icon: 'customer', title: 'Virtual showrooms', body: 'Assortments people can walk without booking a store visit.' },
	{ icon: 'packaging', title: 'Pack AR', body: 'Boxes that teach care, styling, or refill without a manual.' },
	{ icon: 'marketing', title: 'Window & OOH', body: 'Street-facing pieces that open on a phone in seconds.' },
	{ icon: 'guided', title: 'Styling guides', body: 'Overlays that show how to wear or place the product.' },
	{ icon: 'events', title: 'Pop-up experiences', body: 'Temporary spaces with a digital layer that outlives the lease.' },
	{ icon: 'data', title: 'Conversion signals', body: 'Which configs and try-ons lead to cart, not vanity opens.' },
	{ icon: 'presence', title: 'Associate tools', body: 'Staff pull the same 3D and AR assets on the floor.' },
	{ icon: 'integration', title: 'Catalog sync', body: 'SKUs, materials, and stock stay honest with commerce systems.' },
	{ icon: 'filter', title: 'Social try-ons', body: 'Shareable face and world effects that still point to product.' },
	{ icon: 'tours', title: 'Store previews', body: 'New formats and fixtures reviewed before the build-out.' },
];

const governmentItems: UseCaseCard[] = [
	{ icon: 'training', title: 'Procedure training', body: 'Scored rehearsals for equipment and team communication.' },
	{ icon: 'simulation', title: 'Mission rehearsal', body: 'Environments that are hard to stage live for every cohort.' },
	{ icon: 'robotics', title: 'Equipment ops', body: 'Controls and sightlines for vehicles and systems that cannot sit idle.' },
	{ icon: 'collab', title: 'Joint exercises', body: 'Distributed teams practice the same scenario with a shared debrief.' },
	{ icon: 'review', title: 'After-action review', body: 'Captures and scores for instructors without relying on memory.' },
	{ icon: 'guided', title: 'Maintenance assist', body: 'Step overlays for field maintenance under supervision.' },
	{ icon: 'data', title: 'Readiness reporting', body: 'Completion and miss patterns for the units that own the curriculum.' },
	{ icon: 'presence', title: 'Remote instruction', body: 'Experts coach without every specialist flying to every site.' },
	{ icon: 'medical', title: 'Care under stress', body: 'Clinical and first-aid scenarios sized for the mission profile.' },
	{ icon: 'tours', title: 'Facility familiarization', body: 'Spaces learned before boots are on the ground.' },
	{ icon: 'rnd', title: 'Concept pilots', body: 'Small cohorts prove a module before a wide hardware buy.' },
	{ icon: 'wellness', title: 'Comfort & safety', body: 'Session design that respects headset time and operational tempo.' },
];

const agencyItems: UseCaseCard[] = [
	{ icon: 'marketing', title: 'Campaign builds', body: 'We produce the immersive piece while you own the idea and the cutdowns.' },
	{ icon: 'filter', title: 'Lens production', body: 'Snap, social, and web effects that stay on-brand for the client.' },
	{ icon: 'events', title: 'Experiential installs', body: 'Booth and venue pieces that survive a long show day.' },
	{ icon: 'entertainment', title: 'Branded worlds', body: 'Short headset or browser experiences for launches and tours.' },
	{ icon: 'config', title: 'Interactive product stories', body: 'Configurators and 3D explainers your media team can extend.' },
	{ icon: 'packaging', title: 'Print-to-AR', body: 'Pack and OOH that open without a custom app when WebAR fits.' },
	{ icon: 'collab', title: 'Creative handoff', body: 'Specs, captures, and files your team can keep after the flight.' },
	{ icon: 'data', title: 'Reporting packs', body: 'Opens and completes formatted for client decks.' },
	{ icon: 'presence', title: 'Pitch support', body: 'Spectator captures so stakeholders who never wear a headset can still buy in.' },
	{ icon: 'art', title: 'Art direction partners', body: 'We match your look instead of forcing a studio template.' },
	{ icon: 'gaming', title: 'Playable brand moments', body: 'Short interactions that still feel like the brand, not a random mini-game.' },
	{ icon: 'integration', title: 'CMS and media hooks', body: 'Assets that sit beside the sites and DAM you already run.' },
];

function pick(slug: string, page: MarketingPage): Omit<UseCaseSection, 'label'> & { label?: string } {
	if (slug.includes('virtual-reality-development') || slug === 'vr-simulators' || slug === 'virtual-reality-training') {
		if (slug === 'virtual-reality-training') {
			return {
				headline: 'VR training earns its place when practice has to be safe, repeatable, and scored.',
				lead: 'EuphoriaXR builds the lesson, the headset session, and the way instructors review work without standing over every learner.',
				items: trainingItems,
			};
		}
		if (slug === 'vr-simulators') {
			return {
				headline: 'Simulators turn rare or costly procedures into sessions teams can repeat.',
				lead: 'We design for the device you will deploy, with scoring and captures instructors can trust after the headset comes off.',
				items: simulatorItems,
			};
		}
		return {
			headline: 'Virtual Reality is a technology applied to dozens of use cases across enterprise and consumer markets.',
			lead: 'VR supports learning, visualization, collaboration, and entertainment in ways traditional media cannot. By adding presence and spatial interaction, it allows people to engage with information beyond what flat screens can offer. EuphoriaXR builds custom virtual reality applications that take advantage of these capabilities.',
			items: vrItems,
		};
	}

	if (slug.includes('augmented-reality') || slug.includes('branded-ar-filters')) {
		if (slug.includes('branded-ar-filters')) {
			return {
				headline: 'Branded filters turn launches, seasons, and always-on presence into shareable moments.',
				lead: 'EuphoriaXR designs lenses and effects that stay on-model for your brand, then publishes them where your audience already opens the camera.',
				items: filterItems,
			};
		}
		return {
			headline: 'Augmented reality sits on the real world—useful when the product, place, or task should stay in view.',
			lead: 'EuphoriaXR builds AR for campaigns, try-on, guided work, and classroom overlays, with a browser path when an app install would kill the moment.',
			items: arItems,
		};
	}

	if (slug === 'webar-development') {
		return {
			headline: 'WebAR brings the experience to a phone browser—no install between the scan and the story.',
			lead: 'We design packaging, print, try-on, and product-in-room moments that marketing teams can ship as a link and measure after launch.',
			items: webarItems,
		};
	}

	if (slug === 'webar-business-card') {
		return {
			headline: 'An AR business card should do one job well: make the next step obvious after the handshake.',
			lead: 'EuphoriaXR designs print and WebAR layers for networking, events, and sales leave-behinds that stay useful after the meeting ends.',
			items: cardItems,
		};
	}

	if (slug === 'product-configurator') {
		return {
			headline: 'A 3D configurator earns its place when options are real and the result is easy to share.',
			lead: 'We connect materials, rules, and commerce systems so shoppers and sales teams configure products that can actually be built.',
			items: configuratorItems,
		};
	}

	if (slug === 'ai-chatbot-development-services') {
		return {
			headline: 'Chatbots earn trust when answers come from your sources and a person is one step away.',
			lead: 'EuphoriaXR designs grounded conversations for support, onboarding, and internal knowledge—with evaluation you can rerun after every change.',
			items: aiChatItems,
		};
	}

	if (slug === 'ai-software-development' || slug === 'ai-development-company') {
		return {
			headline: 'AI software is the workflow around the model: screens, permissions, and a release you can judge.',
			lead: 'We build products your team can own—from internal review tools to customer-facing features—with clear data boundaries from day one.',
			items: aiSoftwareItems,
		};
	}

	if (slug === 'ai-integration-services') {
		return {
			headline: 'Integration work puts AI beside the systems you already run—not in a parallel demo.',
			lead: 'EuphoriaXR connects models to CRM, helpdesk, data, and messaging with logging, limits, and approval gates written down first.',
			items: aiIntegrationItems,
		};
	}

	if (slug === 'ai-agent-development-company') {
		return {
			headline: 'Agents are useful when tools, memory, and stop conditions are explicit.',
			lead: 'We design multi-step agents that can research, route, and act—then hand off with a full trail when a person must decide.',
			items: aiAgentItems,
		};
	}

	if (slug === 'artificial-intelligence-company-and-consulting-services') {
		return {
			headline: 'Machine learning work should show the score, the slice, and the person who owns the decision.',
			lead: 'EuphoriaXR helps teams scope, evaluate, and ship models that sit inside real workflows—not slide decks of model names.',
			items: mlItems,
		};
	}

	if (slug.includes('nft-makers') || slug.includes('metaverse')) {
		return {
			headline: 'NFT and world projects work when the token has a job and newcomers can finish the path.',
			lead: 'We build mint, membership, and branded spaces tied to a real product or community—with a staged release that starts with utility.',
			items: nftItems,
		};
	}

	if (slug === 'ar-vr-training-education') {
		return {
			headline: 'Education XR works when the lesson is hard to visit, hard to repeat, or hard to picture from a slide.',
			lead: 'EuphoriaXR builds classroom and lab experiences with teacher controls, a clear student task, and a path for the rest of the room to follow along.',
			items: educationItems,
		};
	}

	if (slug === 'ar-vr-medical-healthcare') {
		return {
			headline: 'Healthcare XR is for rehearsal, devices, and conversations that should not start on a live patient.',
			lead: 'We design clinical simulations and training modules with scoring, debrief, and session lengths that fit real schedules.',
			items: medicalItems,
		};
	}

	if (slug === 'ar-vr-media-and-marketing') {
		return {
			headline: 'Media and marketing XR should be shareable, measurable, and finished for the flight you booked.',
			lead: 'EuphoriaXR produces campaign AR, filters, and branded experiences while your team keeps the idea, the cutdowns, and the reporting.',
			items: marketingItems,
		};
	}

	if (slug === 'ar-vr-fashion-retail') {
		return {
			headline: 'Retail XR helps people decide: try-on, true scale, and product stories beside the cart.',
			lead: 'We build try-on, showroom, and packaging experiences that connect to the catalog and stock you already run.',
			items: retailItems,
		};
	}

	if (slug.includes('government')) {
		return {
			headline: 'Government and defense teams need scored practice for procedures that are rare, costly, or high-stakes.',
			lead: 'EuphoriaXR builds training and simulation modules with after-action review, readiness reporting, and pilots before a wide hardware buy.',
			items: governmentItems,
		};
	}

	if (slug.includes('creative-agencies')) {
		return {
			headline: 'Agencies need a build partner that can finish immersive work without taking the creative credit.',
			lead: 'We produce AR, VR, filters, and interactive stories to your art direction—with captures stakeholders can approve without a headset.',
			items: agencyItems,
		};
	}

	return {
		headline: `Where ${page.serviceType} shows up in real work.`,
		lead: page.intro[1] || page.summary,
		items: page.useCases.map((item, index) => ({
			title: item.title,
			body: item.body,
			icon: (['training', 'simulation', 'design', 'guided', 'collab', 'customer'] as UseCaseIcon[])[index % 6],
		})),
	};
}

export function useCaseSectionFor(page: MarketingPage): UseCaseSection {
	const selected = pick(page.slug, page);
	return {
		label: `${page.serviceType} Use-Cases`,
		headline: selected.headline,
		lead: selected.lead,
		items: selected.items,
	};
}
