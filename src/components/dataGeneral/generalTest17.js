export const generalTest17 = {
    id: 117,
    title: 'General Reading Practice Test 17',
    correctAnswers: [
        'TRUE', 'FALSE', 'NOT GIVEN', 'NOT GIVEN', 'NOT GIVEN',
        'F', 'B', 'G', 'A', 'D', 'B', 'A', 'C', 'F',
        'marketing environment', 'Corporate Travel Consultant', 'rewards', 'outstanding efforts', 'ambitions', 'psychometric test', 'team',
        'authorisation / authorization', 'obstructions', 'wrapped carefully / carefully wrapped / wrapped', 'waste / rubbish', 'trolleys', 'regular breaks / breaks',
        'vi', 'viii', 'iv', 'ii', 'ix', 'vii', 'x',
        'harems', 'mares', 'herds',
        'D', 'A', 'B'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-5.</em></p>

<h2 style="text-align:center"><strong>Is Your Child at School Today?</strong></h2>
<p><strong>School Attendance Information for Parents/Carers</strong></p>
<p><strong>Introduction</strong></p>
<p>Receiving a good full-time education will give your child the best possible start in life. Attending school regularly and punctually is essential if children are to make the most of the opportunities available to them. The law says that parents must ensure that their child regularly attends the school where he/she is registered.</p>
<p><strong>What you can do to help</strong></p>
<p>Make sure your child arrives at school on time. This encourages habits of good timekeeping and lessens any possible classroom disruption. If your child arrives after the register has closed without a good reason, this will be recorded as an ‘unauthorised’ absence for that session.</p>
<p>If your child has to miss school it is vital that you let the school know why, preferably on the first morning of absence. (Your child’s school will have an attendance policy explaining how this should be done.)</p>
<p>If you know or think that your child is having difficulties attending the school you should contact the school. It is better to do this sooner rather than later, as most problems can be dealt with very quickly.</p>
<p><strong>Authorised and Unauthorised Absence</strong></p>
<p>If your child is absent and the school either does not receive an explanation from you, or considers the explanation unsatisfactory, it will record your child’s absence as ‘unauthorised’, that is, as truancy.</p>
<p>Most absences for acceptable reasons will be authorised by your child’s school:</p>
<p>Sickness</p>
<p>Unavoidable medical or dental appointments (if possible, arrange these for after school or during school holidays)</p>
<p>An interview with a prospective employer or college</p>
<p>Exceptional family circumstances, such as bereavement</p>
<p>Days of religious observance.</p>
<p>Your child’s school will not authorise absence for the following reasons:</p>
<p>Shopping during school hours</p>
<p>Day trips</p>
<p>Holidays which have not been agreed</p>
<p>Birthdays</p>
<p>Looking after brothers or sisters or ill relatives.</p>

<hr/>
<p><em>Read the text below and answer Questions 6-14.</em></p>

<h2 style="text-align:center"><strong>HOLIDAY APARTMENTS TO LET</strong></h2>
<p><strong>A</strong></p>
<p>Sleeps 2-3. One-bedroom apartment with uninterrupted sea views. This is a small first-floor apartment in a well-established apartment complex containing a range of leisure facilities and a supermarket for residents. On the edge of the town but close to cafes and restaurants. On-street parking is generally available.</p>
<p><strong>B</strong></p>
<p>Sleeps 2-4. Spacious one-bedroom apartment in a complex that has only just opened, five minutes’ walk from the sea. Private parking in front of the building. It is located in a quiet, unspoilt village with a local market, banks, cafés and restaurants. There are some fabulous championship golf courses within easy walking distance.</p>
<p><strong>C</strong></p>
<p>Sleeps 2+child. One-bedroom cottage (child’s bed can also be provided), large terrace with uninterrupted views of the river and mountains. A truly peaceful location in a picturesque village, but less than ten minutes’ drive from the coast and all the amenities of a town. Owners live nearby and are happy to help in any way they can.</p>
<p><strong>D</strong></p>
<p>Sleeps 2-5. Two-bedroom apartment in a complex with its own pool and beautiful views of the national park. A peaceful location just 3 km from the town centre, where there are plenty of shops and excellent sports facilities. Superb local golf courses within easy reach.</p>
<p><strong>E</strong></p>
<p>Sleeps 2-4. Modern one-bedroom first-floor apartment in the house, owners resident on the ground floor. This great location offers easy access to all that this fantastic town has to offer, a few minutes’ drive from its supermarket, bank, cafes, restaurants. The ferry to the island beach leaves from 100 m away. Ten minutes walk from the new shopping centre, which has many shops, food hall, cinema and multi-storey car park.</p>
<p><strong>F</strong></p>
<p>Sleeps 2. One-bedroom first-floor apartment. Beautifully furnished, offering a high standard of comfort. Situated in a peaceful location on the edge of an inland village, with attractive views of the golf course. Many restaurants, bars, shops etc. are within easy walking distance. Garage available by arrangement with the owners.</p>
<p><strong>G</strong></p>
<p>Sleeps 2-4. Two-bedroom apartment in central location in the busy street with shops, restaurants etc. not far from the beach. The town has ideal facilities for holidays all year round, including swimming pool, tennis courts and golf course.</p>
`,
            questions: [
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 1,
                    title: 'Questions 1-5',
                    instruction: 'Do the following statements agree with the information given in the text?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'Children must go to the school where they are registered.' },
                        { statement: 'All arrivals after the register has closed are recorded as ‘unauthorised’ absences.' },
                        { statement: 'If your child is absent from school, you must send the school a letter to explain why.' },
                        { statement: 'Staff who think a child is having difficulties at school will contact the parents.' },
                        { statement: 'Schools will contact other authorities about children who take frequent unauthorised absences.' }
                    ]
                },
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 6,
                    title: 'Questions 6-14',
                    instruction: 'The text has seven sections, A-G. For which apartment are the following statements true?',
                    paragraphRange: 'A-G',
                    note: 'NB You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                    items: [
                        { description: 'It overlooks a golf course.' },
                        { description: 'It has its own parking space.' },
                        { description: 'It is in the centre of a town.' },
                        { description: 'The sea can be seen from it.' },
                        { description: 'There is a swimming pool for residents of the apartment complex.' },
                        { description: 'It is in a new apartment complex.' },
                        { description: 'It is part of an apartment complex with its own supermarket.' },
                        { description: 'It has a private outdoor area where you can sit.' },
                        { description: 'The owners will organise parking on request.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-21.</em></p>

<h2 style="text-align:center"><strong>GZJ TRAVEL - Recruitment Info</strong></h2>
<p>We’re looking for keen and effective people who are passionate about travel to work as Travel Sales Consultants in our rapidly-growing team. Our recruitment process has five stages. Here’s how it works:</p>
<p>The first stage is to use our online application form to apply for a current vacancy. This is your chance to tell us about yourself, and the qualities and experience you have that make you the ideal person for the job. For the Travel Sales Consultant role, you’ll need to provide us with evidence that you have extensive experience in a marketing environment, as well as a solid academic background. If you’re interested in a career as a Corporate Travel Consultant, you’ll need at least one year’s experience as a Travel Consultant.</p>
<p>If you reach Stage Two, we’ll arrange a telephone discussion, where you can find out more about us, including the rewards on offer. For instance, once a year we like to acknowledge outstanding efforts and celebrate successes with our co-workers, and we have prize-giving ceremonies designed to do just this.</p>
<p>In Stage Three we’ll be able to give you more information about GZJ Travel and find out more about you, at an interview which you’ll attend with a small group of other applicants. We’ll be asking you about your ambitions and of course your sales ability, the most vital quality for our business. You’ll also be required to complete a psychometric test so we can find out more about your working style and characteristics. We’ll also tell you about some of the perks - for example, as a Flight Center employee you can take advantage of the free consultations conducted by our in-house health and wellbeing team, Healthwise.</p>
<p>Next, in Stage Four, you’ll be introduced to the Area Leader and you’ll also visit one of our shops, where you’ll meet the team and find out more about the sort of work that’s involved. If you successfully pass Stage Four, you’ve reached the final stage of the process and we’ll be in touch with a job offer! And if you accept, we’ll book you into our Learning Center to get your training underway as soon as possible. Careerwise, the department responsible for the training, will then organise individual coaching to assist in setting goals for your career path.</p>

<hr/>
<p><em>Read the text below and answer Questions 22-27.</em></p>

<h2 style="text-align:center"><strong>Hilton Laboratory</strong></h2>
<p><strong>Health and safety in the workplace</strong></p>
<p><strong>Personal safety</strong></p>
<p>You must be familiar with the emergency procedures in your building so that you know what to do in the event of fire, spillages or other accidents. Do not enter restricted areas without authorisation, and at all times observe the warnings given. Do not wedge open fire doors or tamper with door closures, and do not block doorways, corridors or stairs, as obstructions may affect access in the event of a fire. Avoid leaving drawers and doors open unnecessarily and do not trail cables or flexes across the floor.</p>
<p><strong>How to dispose of rubbish safely</strong></p>
<p>We aim to protect the environment by saving and recycling glass, waste paper, and an increasing range of other materials. It is important to check materials carefully for contamination before placing them in recycling containers. Never put sharp objects such as razor blades or broken glass into waste bins without having wrapped the items carefully to protect those emptying the bins. Other waste procedures may vary - contact your Building Manager or Divisional Safety Officer for advice with regard to your particular department.</p>
<p><strong>How to handle heavy objects</strong></p>
<p>Make sure that shelves are not overloaded and that glass and heavy objects are stored at working height where they will be easier to reach. Use steps or ladders to reach items at height; never climb on benches, tables or chairs. Never move anything that is beyond your capability. Wherever possible you should use the trolleys provided in the workplace to do the job for you. If repetitive manual operations are routine in your work, your department will ensure you receive appropriate instruction on safe working practices and posture.</p>
<p><strong>Staying alert</strong></p>
<p>If you become mentally or physically tired during the working day, and find that you’re feeling drowsy or not concentrating properly, you could be at risk of causing an accident or making a mistake that could harm you or your colleagues. To prevent this, make sure that you take regular breaks when necessary.</p>
`,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 15,
                    title: 'Questions 15-21',
                    instruction: 'Complete the process/flow-chart below.',
                    wordLimit: 'Choose NO MORE THAN THREE WORDS from the text for each answer.',
                    sectionTitle: 'GZJ Travel - Recruitment Process',
                    items: [
                        { prefix: 'Stage One - Application form: Give proof of achievement so far both in education and in a', suffix: '' },
                        { prefix: 'Note: additional requirements for applicants interested in the role of', suffix: '' },
                        { prefix: 'Stage Two - Telephone discussion: More information is given about company and the', suffix: 'you could receive.' },
                        { prefix: 'Information about the annual event, where the prizes are given to those who have made', suffix: '' },
                        { prefix: 'Stage Three - Group interview: Chance to tell us about how good you are at selling, and also about the', suffix: 'you have.' },
                        { prefix: 'Take part in a', suffix: '(used to learn about your way of working).' },
                        { prefix: 'Stage Four - Individual interview: Meet a manager, and the', suffix: 'working in a particular store.' }
                    ]
                },
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 22,
                    title: 'Questions 22-27',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose NO MORE THAN TWO WORDS from the text for each answer.',
                    items: [
                        { prefix: 'There are certain places in the building that staff should avoid unless they have', suffix: '' },
                        { prefix: 'To ensure people can get out easily, it is important that there are no', suffix: 'to exits.' },
                        { prefix: 'Items which could cause injury must be', suffix: 'before they are disposed of.' },
                        { prefix: 'Not all departments have the same system for dealing with', suffix: 'so you need to check before throwing things away.' },
                        { prefix: '', suffix: 'are available to make tasks, which require moving objects, easier.' },
                        { prefix: 'You should have', suffix: 'while you are working.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>The Zebras’ long walk across Africa</strong></h2>
<p><em>James Gifford investigates some interesting new research into migration patterns of zebras living in Botswana in southern Africa.</em></p>
<p><strong>A</strong></p>
<p>For any animal to travel over 270 km in Botswana partly across the sand and low bush terrain of the Kalahari Desert is a remarkable achievement. But to do so in 11 days and without any obvious motivation, as this zebra population does, is quite extraordinary. On average their journey involves an exhausting round-trip of 588 km - between the Makgadikgadi salt pan area and the Okavango river - making it second only to the great trek undertaken by the zebra herds in the Serengeti National Park. However, what is even more incredible still in my view is that until recently it was completely unheard of.</p>
<p><strong>B</strong></p>
<p>Hattie Bartlam, a researcher, discovered this migration while she was tracking zebra groups, officially known as harems, by the Okavango River for her PhD. Each harem consists of a stallion and his seven or eight mares with juvenile foals. There is no loyalty between zebras beyond this social group, though harems often gather together into so-called herds. For her study, Hattie had planned to compare the small-scale movement patterns of 11 different zebra herds in the area.</p>
<p><strong>C</strong></p>
<p>In December, when the annual rains had transformed the roads into rivers, Hattie was, therefore, more than a little surprised when she checked the data sent by the radio collars she fits to the zebras she is tracking to find that six of the harems were 270 km away on the edge of the Makgadikgadi, a huge mineral-rich area where salt has collected over the years as water evaporates in the heat. Then, when the last of the moisture from the rains had disappeared in May the following year, five of those harems came wearily back to the Okavango. This raised the question: why, despite a plentiful supply of food and water, were the zebras being drawn eastwards to the salt pans? Even more difficult to understand was what made six of the groups travel so far, while the other five remained by the Okavango.</p>
<p><strong>D</strong></p>
<p>This discovery created quite a buzz in the research community. I decided to visit Hattie and she explained that a century ago the large number of Botswana’s zebra and wildebeest herds and the resulting competition for grass made migration essential. One of the migration tracks went from the Okavango to Makgadikgadi. But in the late 1960s, giant fences were put up to stop foot and mouth and other diseases spreading between wildlife and domestic cattle. One of these went across the migration track. Though the animals could get round the obstacle, each leg of their journey would now be 200 km longer - an impossible distance given the lack of permanent water on the extended route. Even today, with the fence gone (it was taken down in 2004), there is dangerously little drinking water to support the zebras on the return journey to the Okavango.</p>
<p><strong>E</strong></p>
<p>As a zebra can live up to 20 years, the migration must have skipped at least one generation during the 40 or so years that the fences were up. This prompts another question: it has always been assumed that the young of social herbivores like zebras learn migratory behaviour from their parents, so how did the latest generation learn when and where to go? Not from their parents, who were prevented from migrating. Did they follow another species, such as elephants? We may never know.</p>
<p><strong>F</strong></p>
<p>Hattie’s data points to the conclusion that there are several zebra populations adopting different behaviour. The first, like the vast majority of the Okavango zebras, take it easy, spending the entire year by the river. The second group, 15,000-20,000 strong, work a bit harder. They divide their time between the Makgadikgadi salt pans and the Boteti River, which is reasonably nearby. They sometimes struggle to find water in the Boteti area during the dry season, often moving 30 km in search of fresh grazing. Their reward: the juicy grass around the Makgadikgadi after the rains. The final group of zebras, whose numbers are more modest (though as yet unknown), must surely be considered as among the animal kingdom’s most remarkable athletes. By moving between the Okavango and the salt pans, they enjoy the best of both worlds. But the price they pay is an extraordinary journey across Botswana.</p>
<p><strong>G</strong></p>
<p>Endangered species naturally tend to grab the headlines, so it’s refreshing for a relatively abundant animal like the zebra to be the centre of attention for once. Zebras are a vital part of the food chain: understanding their migration, in turn, helps us to interpret the movements of their predators, and Hattie’s research has shed light on the impact of fences on migratory animals. So what triggered her interest in zebras? She explains that it is easier to get funding to study exciting animals like lions. Crucial as that undoubtedly is, she believes that herbivores like zebras are key to understanding any ecosystem. The scientific community is fortunate that people like Hattie are willing to take the hard option.</p>
`,
            questions: [
                {
                    type: 'paragraph-headings',
                    startQuestionNumber: 28,
                    title: 'Questions 28-34',
                    instruction: 'The reading passage has seven sections, A-G. Choose the correct heading for each section from the list of headings below.',
                    options: [
                        { value: 'i', text: 'A decrease in the zebra population' },
                        { value: 'ii', text: 'An obstruction on the traditional route' },
                        { value: 'iii', text: 'An unknown species' },
                        { value: 'iv', text: 'Some confusing information' },
                        { value: 'v', text: 'Staying permanently in the Makgadikgadi' },
                        { value: 'vi', text: 'Nearly a record in the zebra world' },
                        { value: 'vii', text: 'Three different ways of living' },
                        { value: 'viii', text: 'The original aim of the work' },
                        { value: 'ix', text: 'How was the information passed on?' },
                        { value: 'x', text: 'Why it is important to study zebras' }
                    ],
                    items: [
                        { paragraph: 'A' },
                        { paragraph: 'B' },
                        { paragraph: 'C' },
                        { paragraph: 'D' },
                        { paragraph: 'E' },
                        { paragraph: 'F' },
                        { paragraph: 'G' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 35,
                    title: 'Questions 35-37',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Social behaviour in zebras',
                    items: [
                        { prefix: 'Zebras tend to live together in small units, which experts call', suffix: '.' },
                        { prefix: 'Here, a male zebra has charge of a number of adult', suffix: 'and their young.' },
                        { prefix: 'These units sometimes assemble in bigger groupings or', suffix: ', but it is still clear that the zebras’ loyalty only extends to the small unit they live in.' }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 38,
                    title: 'Questions 38-40',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: 'How did Hattie feel when she heard some of the zebras had travelled so far?',
                            options: [
                                { value: 'A', text: 'annoyed because she would have to follow them to Makgadikgadi' },
                                { value: 'B', text: 'disappointed that not all of them made it back to Okavango' },
                                { value: 'C', text: 'frustrated as the rains had made the roads unusable' },
                                { value: 'D', text: 'unsure as to their real motivation for going' }
                            ]
                        },
                        {
                            question: 'When describing the different Botswana zebra populations, the writer indicates',
                            options: [
                                { value: 'A', text: 'his admiration for the ones who migrate the furthest distance.' },
                                { value: 'B', text: 'his sympathy for the ones who stay by the Okavango River.' },
                                { value: 'C', text: 'his disbelief that those by the Boteti have difficulty finding food.' },
                                { value: 'D', text: 'his anxiety that their migration patterns may not be able to continue.' }
                            ]
                        },
                        {
                            question: 'What does the writer suggest in the final paragraph?',
                            options: [
                                { value: 'A', text: 'Too much time has been wasted on research into predators like lions.' },
                                { value: 'B', text: 'It is sometimes necessary to go against the trend in research matters.' },
                                { value: 'C', text: 'Research will result in a ban on fences in areas where zebras live.' },
                                { value: 'D', text: 'Research into animals which are not endangered will increase.' }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
