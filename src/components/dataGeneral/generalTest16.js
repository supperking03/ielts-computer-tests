export const generalTest16 = {
    id: 116,
    title: 'General Reading Practice Test 16',
    correctAnswers: [
        // Q1-8: paragraph matching A-D
        'C', 'A', 'D', 'A', 'B', 'A', 'C', 'D',
        // Q9-14: sentence completion
        'Security', 'safety', 'machinery', 'photography', 'nursery', 'accident',
        // Q15-20: sentence completion
        'asset', 'culture', 'internet', 'union', 'review', 'compromise',
        // Q21-27: flow-chart completion
        'budget', 'scope creep', 'skills', 'communication', 'milestones', 'plans', 'report',
        // Q28-30: paragraph matching A-H
        'D', 'B', 'C',
        // Q31-36: TRUE/FALSE/NOT GIVEN
        'FALSE', 'TRUE', 'FALSE', 'TRUE', 'NOT GIVEN', 'FALSE',
        // Q37-40: summary completion
        'plankton', 'parasites', 'wings', 'brain'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-8.</em></p>

<h2 style="text-align:center"><strong>Music Clubs</strong></h2>
<p><strong>A</strong></p>
<p>Whitehay Youth Music is intended for anyone aged between 6 and 14 who is keen to perform in public. The club is limited to 30 members at any time, and we operate a waiting list for membership. Two concerts are performed every year, and every member takes part. Members must have reached at least an intermediate standard on their instrument. The group meets in the Jubilee Hall on Wednesday evenings during term time for rehearsals and for workshops in which members learn how to improve their playing.</p>
<p><strong>B</strong></p>
<p>Whitehay Music Club brings together music lovers from around the district, for enjoyable evenings of food and music. We meet monthly in members' homes, and during the evening we have a buffet meal and listen to recordings of both well-known and not so well-known music. The music is preceded by a brief talk providing background information about the composers and the music. Every few months we organise a coach trip to a musical event within a radius of 50 km.</p>
<p><strong>C</strong></p>
<p>Whitehay Philharmonic is an amateur orchestra, founded in 1954. Two or three times a year, it performs a wide range of music to large and appreciative audiences from the area, in the town's Jubilee Hall. New members are always welcome, and can take part in rehearsals, although there may not be room for everyone to perform in the concerts. Because the orchestra only partly finances its performances through ticket sales, members with marketing experience are particularly welcome, in order to build sales.</p>
<p><strong>D</strong></p>
<p>Whitehay Music Society is primarily a fundraising group that organises a range of money-making activities from street collections to seeking sponsorship from local businesses. The money raised is used to support professional musicians if, for example, illness prevents them from earning a living. As a member, you will receive a monthly newsletter describing our work, and containing details of concerts, operas and other performances, both locally and nationally. Everybody is welcome to join the society: children are particularly welcome, along with their parents.</p>

<hr/>
<p><em>Read the text below and answer Questions 9-14.</em></p>

<h2 style="text-align:center"><strong>Biological Research Institute</strong></h2>
<p>Welcome to the Biological Research Institute campus. We hope that your visit will be enjoyable and interesting. Please read the information below and comply with the instructions given.</p>
<p>On arrival, you should report to the Reception building by the main entrance gate, where you will be issued with a pass. This must be visible at all times during your visit to the campus.</p>
<p>If you are driving a vehicle, please inform Reception. They will contact Security, who will identify the area where you should park your car. Please ensure that you park it in the designated area. You must keep to the campus speed limit (10 mph) at all times. Cars are parked at the owner's risk.</p>
<p>For your own safety, please follow the instructions displayed on noticeboards around the campus, as well as all instructions issued by authorised personnel. Do not enter any restricted areas or touch any machinery or other equipment unless authorised. Visitors must be accompanied by their host at all times whilst on the campus.</p>
<p>Entry into certain areas requires the wearing of special clothing or equipment. This will be provided for you by your host, who will advise you on the appropriate protection for the area you visit.</p>
<p>Unless your host has previously obtained permission from the Institute management, photography, whether still or video, is not permitted in any part of the campus. Children under the age of 16 must be accompanied by an adult at all times, and should only be brought on campus if the Institute management has previously agreed to this. No nursery facilities are available for visiting children.</p>
<p>In the event of an accident, call 3333 and request the assistance of site first-aid personnel.</p>
`,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 1,
                    title: 'Questions 1-8',
                    instruction: 'Look at the four advertisements for music clubs in a town called Whitehay, A-D. For which club are the following statements true?',
                    paragraphRange: 'A-D',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D'],
                    items: [
                        { description: 'It needs members who can find ways of increasing audience numbers.' },
                        { description: 'All its members perform in club concerts.' },
                        { description: 'It distributes information about musical events to its members.' },
                        { description: 'It requires its members to have reached a certain level as performers.' },
                        { description: 'One of its aims is to introduce its members to music they may not be familiar with.' },
                        { description: 'It helps children to develop their musical skills.' },
                        { description: 'Its performances are popular with local people.' },
                        { description: 'It helps people who are in financial need.' }
                    ]
                },
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 9,
                    title: 'Questions 9-14',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    items: [
                        { prefix: 'If you come by car,', suffix: 'will tell you where to park it.' },
                        { prefix: 'Advice on', suffix: 'can be seen on noticeboards.' },
                        { prefix: 'You will need to obtain authorisation before touching equipment such as', suffix: '.' },
                        { prefix: 'Permission from the management is required if you want to do any kind of', suffix: '.' },
                        { prefix: 'The Institute does not provide a', suffix: 'for children visiting the campus.' },
                        { prefix: 'You should phone 3333 if any kind of', suffix: 'occurs.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-20.</em></p>

<h2 style="text-align:center"><strong>Negotiating a better salary package for your new job</strong></h2>
<p>If you make it through the recruitment interview, a job offer may be just around the corner and you face having to talk about the nitty-gritty: your financial value.</p>
<p>Although many graduate training schemes have set starting salaries, there are loads of other jobs where you'll need to exercise your negotiating skills. If you're offered a job, it's because the organisation sees you as a valuable asset and you should try to set your level of remuneration accordingly.</p>
<p>There are no general rules about how and when to conduct your negotiation but being sensitive to the culture of the organisation is essential. There are also some practical steps you can take to position yourself sensibly. Familiarise yourself with the company itself, as well as the range of salaries on offer. Doing careful research in this way prior to starting negotiations is very valuable. You can look at the range of packages offered for comparable jobs in adverts on the internet, or ask for advice from people you know professionally or personally. You could also approach a local Training and Enterprise Council. Finally, if you're a member of a union, they will have information on acceptable salary ranges for your profession.</p>
<p>If the salary offered is less than you'd hoped for, you could negotiate an early pay review instead, say after the first six months. Ensure that the criteria are clearly set out though, and that they're included in your contract.</p>
<p>Make sure you check out the salary package, not just the number of zeroes on your payslip. You may find that the total package of pay and benefits raises the worth of the salary to an acceptable level. For instance, you may be offered private health cover, a non-contributory pension, a car to use for work purposes and/or significant bonuses. When bonuses are mentioned, you may want to discuss the basis on which they're paid, so that you're absolutely clear about the terms and conditions attached. When negotiating, be persuasive and consistent in your arguments but be prepared to agree to a compromise if you really want the job.</p>
<p>If your negotiations are successful, ask for the agreed terms and conditions to be confirmed in writing ASAP.</p>

<hr/>
<p><em>Read the text below and answer Questions 21-27.</em></p>

<h2 style="text-align:center"><strong>How to run a successful project</strong></h2>
<p>A project manager's main task is to bring a particular project to completion, both on time and within budget. There are many factors that can cause a project to veer off its tracks, but steps can be taken to ensure that your project experiences as little disruption as possible.</p>
<p><strong>1   Prepare the framework</strong></p>
<p>If you get everything down in writing at the beginning of the project, you have an excellent foundation to build upon. Change is inevitable, but you have to maintain control. This is critical to avoid problems of 'scope creep', which is when the company paying for the project asks for 'just one more little thing' repeatedly, until the project becomes unmanageable.</p>
<p><strong>2   Select the team</strong></p>
<p>Gather your human resources, and make sure that their skills align with their roles. This is an important first step: if you assign the wrong person to a task, you are reducing your chances of success.</p>
<p>Make sure each team member is clear on what is expected from them and when. Encourage them to ask questions to clarify anything that may be uncertain, and to always come to you whenever something seems to be out of place or going wrong. Clear communication is critical.</p>
<p>Make sure the whole team and the client company grasp the project's limitations in terms of its achievable outcomes. You can finish a task successfully and on time as long as expectations are reasonable.</p>
<p><strong>3   Staying on track</strong></p>
<p>How can you know if your project is going to be successful if you don't have any way of measuring success? You will need interim milestones, especially for a long-term project, so that you can determine if you are staying on track or straying from the project's goals.</p>
<p><strong>4   Manage project risks</strong></p>
<p>Hopefully you have defined the more likely risks up front during the project preparation, so you should now put contingency plans in place for certain occurrences. If you can see when a risk is imminent, you can take preventive action to avoid it, but be ready to halt a project if the risk becomes unacceptable.</p>
<p><strong>5   Evaluate the project</strong></p>
<p>Once a project has been completed, it's important to write a report, even if it is only for internal purposes. You can pinpoint what went right or wrong, determine what could have been done differently, and establish the best practices for use in future undertakings.</p>
`,
            questions: [
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 15,
                    title: 'Questions 15-20',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    items: [
                        { prefix: "When negotiating a salary, potential employees should take advantage of the company's view of them as a useful", suffix: '.' },
                        { prefix: "When negotiating a salary it is important to be aware of the company's particular", suffix: '.' },
                        { prefix: 'Some people use the', suffix: 'to monitor salaries offered for similar positions.' },
                        { prefix: 'People who belong to a', suffix: 'can ask for recommendations on what is the norm for payment in their field.' },
                        { prefix: 'Some people try to arrange for a', suffix: 'of their salary to be carried out after an initial period.' },
                        { prefix: 'It is important to be willing to accept a', suffix: 'if the negotiations are getting nowhere.' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 21,
                    title: 'Questions 21-27',
                    instruction: 'Complete the flow-chart below.',
                    wordLimit: 'Choose NO MORE THAN TWO WORDS from the text for each answer.',
                    sectionTitle: 'How to run a successful project',
                    items: [
                        { prefix: 'Bear in mind that your aim should be to keep to both the agreed deadline and the', suffix: 'for the project.' },
                        { prefix: 'Fix the details at the start to prevent what is called', suffix: '- the client asking for more and more.' },
                        { prefix: 'Choose the team members wisely so that their', suffix: 'match the duties you want them to take on.' },
                        { prefix: 'Promote good', suffix: 'at all times so everyone knows what you require of them.' },
                        { prefix: 'Make sure', suffix: 'are set so you can check whether the project is running to schedule.' },
                        { prefix: 'Prepare', suffix: 'which can be activated if things go wrong on the project.' },
                        { prefix: 'Once the project is over, produce a', suffix: 'outlining its strengths and weaknesses for future reference.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>Mass appeal of the manta rays</strong></h2>
<p><strong>A</strong></p>
<p>I am underwater, face to face with a large flat fish which I recognise immediately as being a manta ray. For an instant I look straight into its gaping mouth and see the row of small, flattened teeth in its lower jaw. Close on its tail comes another manta ray, and another and another. The manta rays are unaffected by my being there, cruising past in a leisurely fashion without seeming to expend any great effort.</p>
<p><strong>B</strong></p>
<p>From above, the manta rays are great black silhouettes that fishermen called 'devil fish', because of the curious horn-like fins hanging down near their mouths. But looking into their eyes you get a sense of their peaceful nature. Unlike stingrays, mantas don't have venomous spines in their tails, and unlike many fish species they seem to enjoy human company. Once, over-enthusiastically, I swim towards a manta. I am just a few inches away when it senses me. To my surprise, the whole fish twitches in alarm and shoots off, perhaps fearing that I will touch it. I feel ashamed to have given it a fright.</p>
<p><strong>C</strong></p>
<p>I have come to Hanifaru, a small lagoon next to an uninhabited island in the Maldives, especially to see manta rays. These great harmless creatures congregate here during the south-west monsoons between May and November and, if the tides and winds are right, enter a shallow cul-de-sac in the reef to hunt for plankton, their main source of nutrition. On certain days the bay can attract more than 100 mantas. I have seen many manta rays on dives around the world, though not in these numbers.</p>
<p><strong>D</strong></p>
<p>Guy Stevens is my guide, a British marine biologist who has been studying the mantas for the past five years. Based at the nearby Four Seasons resort, he has identified more than 2,000 individual manta rays, photographing and cataloguing them according to their distinctive skin patterns. Each day we make the 40-minute boat journey from the resort to Hanifaru. Feeding events, as Guy calls them, are never guaranteed, but, during the season, hotel guests can sign up for 'manta alerts'. If Guy and his research assistants spot significant manta activity, the guests will be brought by fast speedboat to the lagoon to snorkel. When feeding, the mantas of Hanifaru tend to stay near the surface, making them accessible to snorkellers just as much as divers. They seem not to mind the human competition in this quite small space, and indeed they are often joined by other rays and even giant whale sharks, which feed on the same plankton.</p>
<p><strong>E</strong></p>
<p>Word among the diving community about the possibility of finding a mass of manta rays at Hanifaru has slowly been spreading over the past year. Outside the shallow lagoon I can see five large safari boats, live-aboard cruisers that take divers around the best underwater sites in the Maldives. It is something that Guy has been monitoring closely. 'Word is out that Hanifaru is a top manta spot,' he explains, 'and although the government has declared the bay a "protected area", we still don't have any regulations in force to limit the number of people in the water at any one time.'</p>
<p><strong>F</strong></p>
<p>During my stay, the resort received a visit from the then-president of the Maldives, Mohamed Nasheed. Since coming to power in 2008, he had made his interest in the marine environment and concerns about climate change well known. In 2009 he held an underwater cabinet meeting, urging other world leaders to act decisively to combat climate change. The protection of wildlife areas such as Hanifaru was clearly one of his objectives, and I asked him why he took such an interest. 'Maldivians have lived with the reefs and their fish life since long before there were tourists,' he said. 'And while tourist dollars are good for our country, the sea and its produce are even more vital to my people. I have to balance what tourists want to see with preserving the marine environment and in some cases, like Hanifaru, those objectives coincide.'</p>
<p><strong>G</strong></p>
<p>On several dives I am lucky enough to get close to the mantas, sometimes at underwater 'cleaning stations'. Here, the mantas come in small numbers, or individually, to pause above a coral outcrop and wait while small fish pick at their skin, removing parasites. Adapted for fast swimming with their flattened bodies, they can accelerate rapidly with a twitch of their wings. They gaze at human swimmers with a kind of knowing calm, something people often remark on when they try to capture the emotion they experience after seeing them. 'The manta rays have the biggest brain of any fish,' Guy explains, 'and some manta researchers are convinced that mantas can recognise individual people underwater.'</p>
<p><strong>H</strong></p>
<p>I return to the lagoon over the course of several days and learn more from Guy about his hopes for the future. 'People can visit this place, but I want to be sure that they don't harass the mantas by touching them or crowding them out while they're feeding. We're working to get a full-time ranger station and some kind of permit system to limit the number of boats that can enter the lagoon each day.'</p>
`,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 28,
                    title: 'Questions 28-30',
                    instruction: 'The text has 8 paragraphs, A-H. Which paragraph mentions the following?',
                    paragraphRange: 'A-H',
                    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
                    items: [
                        { description: 'a record that is being kept of manta rays in the area' },
                        { description: 'something that the writer regrets' },
                        { description: "the reason for the writer's visit" }
                    ]
                },
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 31,
                    title: 'Questions 31-36',
                    instruction: 'Do the following statements agree with the information given in the text?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'It is difficult to distinguish one manta ray from another.' },
                        { statement: 'For hotel guests, viewing manta rays feeding has to be arranged at short notice.' },
                        { statement: 'The manta rays appear to object to the presence of people in the water while they are feeding.' },
                        { statement: 'Guy Stevens is concerned about the increasing interest in Hanifaru.' },
                        { statement: 'Mohamed Nasheed succeeded in persuading certain other countries to take steps to protect the environment.' },
                        { statement: 'A procedure has now been established to control the number of visitors.' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 37,
                    title: 'Questions 37-40',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'The manta ray',
                    items: [
                        { prefix: 'During certain times of year, depending on the weather conditions and the tides, manta rays collect to look for', suffix: 'to feed on.' },
                        { prefix: 'As for keeping clean, they are kept free from', suffix: 'by smaller fish.' },
                        { prefix: 'Manta rays have certain characteristics which make them good swimmers; they use their', suffix: 'to get up speed and they have flattened bodies, which help them to move quickly through the water.' },
                        { prefix: "The nature of the manta's", suffix: 'is of particular interest to scientists.' }
                    ]
                }
            ]
        }
    ]
};
