export const generalTest02 = {
    id: 102,
    title: 'General Reading Practice Test 02',
    correctAnswers: [
        // Q1-6: TRUE/FALSE/NOT GIVEN
        'FALSE', 'NOT GIVEN', 'TRUE', 'TRUE', 'FALSE', 'FALSE',
        // Q7-14: paragraph matching A-E
        'C', 'A', 'C', 'B', 'C', 'E', 'B', 'D',
        // Q15-20: table completion
        'sewage', 'poisoning', 'drowning', 'gloves', 'tags', 'disconnected',
        // Q21-27: notes completion
        'objectives', 'review', 'calendar', 'collaboration', 'distraction', 'creativity', 'retention',
        // Q28-33: paragraph headings
        'iv', 'vi', 'vii', 'i', 'v', 'iii',
        // Q34-37: multiple choice
        'A', 'C', 'D', 'B',
        // Q38-40: summary completion
        'flexible', 'land', 'ball'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-6.</em></p>

<h2 style="text-align:center"><strong>Harvey’s Storage</strong></h2>
<p>Harvey’s Storage is a well-established independent company. We are centrally located in the city and provide excellent facilities for all your storage requirements.</p>
<p>We provide safe and secure units for both long- and short-term storage dependent on your needs. Our rates are competitive and tailored to your specific requirements and your choice of storage unit. Heavy-duty locks and keys are provided to all of our customers and included in the prices listed. You can hire the unit with the storage capacity you need, for the period of time that the storage is required, in a sound and secure environment, monitored by CCTV. With 24-hour access, customers can deliver and collect items when it is convenient to do so, unrestricted by business or office hours. Tarmac roadways allow customers to park cars and lorries immediately outside their units, minimising the effort required to collect or drop items off.</p>
<p><strong>Household storage</strong> Self-storage is ideal for families or individuals with either a short- or long-term need to store their belongings. Some of our clients are de-cluttering, or they may be getting their property decorated, or planning to go abroad for a time.</p>
<p><strong>Student storage</strong> You may be travelling or going home to see family and friends in the vacation, or need time to find a place to stay. You may want to store all your books and personal items, or just a few boxes or a musical instrument. We offer no-nonsense competitive pricing with flexible hire periods and with no hidden extras. We can provide you with short- or long-term affordable hire in a safe and secure environment. You are responsible for organising transport but we can also recommend local van and driver hire companies.</p>
<p><strong>Business storage</strong> Free up your expensive retail space with affordable self-storage. We have three different business storage centres to choose from so you can choose the location that is most convenient for you.</p>

<hr/>
<p><em>Read the text below and answer Questions 7-14.</em></p>

<h2 style="text-align:center"><strong>Local museums</strong></h2>
<p><strong>A   Whittlesey Museum</strong></p>
<p>The museum is located in the Old Town Hall, which was originally built to house horse-drawn fire engines. It has eight rooms, and the exhibits cover topics such as archive photographs, costume, domestic life and local celebrities.</p>
<p><strong>B   Octavia Hill’s Birthplace House</strong></p>
<p>Built in 1740, this is the birthplace of pioneer social reformer Octavia Hill, who was active in the late 19th and early 20th centuries in social housing and the arts, as well as in conservation issues. Visitors are taken on a guided tour and are then free to explore the gardens.</p>
<p><strong>C   Chatteris Museum</strong></p>
<p>The old market town of Chatteris was largely rebuilt, after two serious fires in 1706 and 1864 destroyed many of the town’s ancient buildings. The museum’s exhibits illustrate traditional aspects of the life of local farmers as well as the railway boom of the 19th century. The museum has a touch-screen kiosk which contains over 9,000 historic photographs and texts, reproductions of which can be made on request.</p>
<p><strong>D   March and District Museum</strong></p>
<p>Located in the middle of the market town of March, the museum is housed in a former school built in 1851. Its wide-ranging collections include reconstructions of an early 20th-century kitchen, sitting room and nursery. There is also an interesting display of historic cameras and radios, and a medal which was awarded to train driver Ben Gimbert for his bravery in preventing loss of life when a train full of explosives caught fire in 1944.</p>
<p><strong>E   Wisbech and Fenland Museum</strong></p>
<p>This 19th-century gem holds collections from around the world including Ancient Egypt. Its library, which is open to the public on the first Saturday of each month, contains the manuscript of <em>Great Expectations</em> by the 19th-century novelist Charles Dickens, and the Research Room can be booked for researching local records.</p>
`,
            questions: [
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 1,
                    title: 'Questions 1-6',
                    instruction: 'Do the following statements agree with the information given in the text?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'There is an extra charge for locks and keys.' },
                        { statement: 'It is possible to arrange to share a storage unit with someone else.' },
                        { statement: 'You can pick up your property from the storage unit during the night-time.' },
                        { statement: 'You can drive your vehicle right next to your storage unit.' },
                        { statement: 'Students’ possessions can only be stored during vacation periods.' },
                        { statement: 'The storage company will collect and deliver students’ property.' }
                    ]
                },
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 7,
                    title: 'Questions 7-14',
                    instruction: 'Look at the five descriptions of museums, A-E, in one area of England. For which museum are the following statements true?',
                    paragraphRange: 'A-E',
                    note: 'NB You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E'],
                    items: [
                        { description: 'There are exhibits related to the history of agriculture in the region.' },
                        { description: 'Equipment for putting out fires used to be kept in this building.' },
                        { description: 'You can find information on the rise of one type of transport.' },
                        { description: 'There are things to see both inside and outside.' },
                        { description: 'It is possible to obtain copies of old pictures and documents.' },
                        { description: 'On certain days you can see an original work by a writer of fiction.' },
                        { description: 'Someone who was interested in environmental matters lived here for a time.' },
                        { description: 'This museum has an exhibit related to a heroic achievement.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-20.</em></p>

<h2 style="text-align:center"><strong>Workplace health and safety considerations for plumbers</strong></h2>
<p>Like many trades, plumbing can be a dangerous job. It is important to take all reasonably practicable measure to keep customers and yourself incident and injury free.</p>
<p><strong>Biohazard waste</strong></p>
<p>Plumbers regularly come into contact with biohazard waste. It’s the nature of the job, but that doesn’t mean you should be complacent about it. According to Safe Work Australia, communicable diseases from work-related exposures to biological hazards such as sewage have been estimated to cause 320,000 deaths across the globe each year. In addition to this, plumbers are regularly exposed to other biohazards such as mould, bacteria and algae. Don’t risk it – make sure appropriate clothing and equipment is used.</p>
<p><strong>Confined spaces</strong></p>
<p>Plumbers may spend much of their time working in confined spaces, where they are at risk from contaminants, including airborne gases, vapours and dusts, that may cause injury from fire or explosion. They may also be exposed to high concentration of airborne contaminants that may be harmful to health. For example, one plumber was fined $220,000 after an employee suffered from carbon-monoxide poisoning. Another potential hazard for plumbers in confined spaces is that of drowning, if water sources are not adequately cut off.</p>
<p>The Safe Work Australia confined spaces code of practice outlines the necessary steps and precautions for avoiding illness and injury.</p>
<p><strong>Electricity</strong></p>
<p>The Master Plumbers’ Association calls electricity ‘plumbing’s hidden killer’. Metal pipes are often conductive and so gloves which provide insulation should form part of a plumber’s tool kit, as should a plumbing voltage monitor and a volt tester. Gloves should be checked prior to every use and replaced every 12 to 14 months. Electrical equipment like bridging conductors should be regularly checked, with appropriate tags on the equipment to verify its safety. The project should be stopped immediately if there is any sign of electricity, so that the power can be disconnected by a qualified electrician prior to continuing work.</p>

<hr/>
<p><em>Read the text below and answer Questions 21-27.</em></p>

<h2 style="text-align:center"><strong>How to manage flexible working with your employees</strong></h2>
<p>There is no denying that flexible working has grown enormously in recent years. It does, however, require careful management.</p>
<p>When it comes to implementing flexible working one word is key: trust. All flexible workers should be trusted and given well-defined objectives from the start and their contribution should be assessed according to their output, as opposed to the time they spend on the job. It can be a big step to implement such a change in your business, so if you are slightly cautious then I recommend perhaps setting up an end-of-the-day review to see how much progress has been made. As all parties find their feet with the new set-up, this contact can slowly be reduced.</p>
<p>In my eyes, it is also vital that there is shared calendar access for everyone so that people can see where their colleagues are each day. This way if they need to catch up with someone they can plan when to do so. Technology now exists to enable employees to stay in touch with other members of staff and external partners. iMeet, for example, is a tool which allows all forms of collaboration for remote working, from video conferencing, live chat and file sharing to screen sharing. The new breed of worker is therefore fully equipped to work productively away from the office, and can still feel like they’re in the same room as others when necessary.</p>
<p>In my experience, employees are often more productive working at home as they can work the exact hours they want and do not have to cope with distraction caused by other employees. Being outside the confines of the office walls also appears to foster creativity. In addition, we find staff are more motivated as they have a better work-life balance. In terms of the business, we find this helps with top talent recruitment and staff retention, and a happy workforce is a more successful one.</p>
`,
            questions: [
                {
                    type: 'table-completion',
                    startQuestionNumber: 15,
                    title: 'Questions 15-20',
                    instruction: 'Complete the table below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    totalQuestions: 6,
                    table: {
                        rows: [
                            {
                                cells: [
                                    { type: 'text', content: 'Type of danger', header: true },
                                    { type: 'text', content: 'Examples', header: true },
                                    { type: 'text', content: 'Risks involved', header: true },
                                    { type: 'text', content: 'Necessary action', header: true }
                                ]
                            },
                            {
                                cells: [
                                    { type: 'text', content: 'Biohazard' },
                                    { type: 'input', questionIndex: 0, suffix: ', mould, bacteria, algae' },
                                    { type: 'text', content: 'can lead to disease and death' },
                                    { type: 'text', content: 'use protective clothing and equipment' }
                                ]
                            },
                            {
                                cells: [
                                    { type: 'text', content: 'Confined spaces' },
                                    { type: 'text', content: 'Contaminants e.g. gases, vapours and dusts' },
                                    { type: 'text', content: 'injury from fire or explosion' },
                                    { type: 'text', content: 'follow Safe Work code of practice' }
                                ]
                            },
                            {
                                cells: [
                                    { type: 'text', content: 'Confined spaces' },
                                    { type: 'text', content: 'high concentrations of harmful airborne contaminants e.g. carbon monoxide' },
                                    { type: 'input', questionIndex: 1 },
                                    { type: 'text', content: 'follow Safe Work code of practice' }
                                ]
                            },
                            {
                                cells: [
                                    { type: 'text', content: 'Confined spaces' },
                                    { type: 'text', content: 'water' },
                                    { type: 'input', questionIndex: 2 },
                                    { type: 'text', content: 'cut off water sources' }
                                ]
                            },
                            {
                                cells: [
                                    { type: 'text', content: 'Electricity' },
                                    { type: 'text', content: 'metal pipes which are conductive' },
                                    { type: 'text', content: 'death from electrocution' },
                                    { type: 'input', questionIndex: 3, prefix: 'use insulated ', suffix: ' and appropriate equipment' }
                                ]
                            },
                            {
                                cells: [
                                    { type: 'text', content: 'Electricity' },
                                    { type: 'text', content: 'metal pipes which are conductive' },
                                    { type: 'text', content: 'death from electrocution' },
                                    { type: 'input', questionIndex: 4, prefix: 'ensure equipment has ', suffix: ' on to show it is safe' }
                                ]
                            },
                            {
                                cells: [
                                    { type: 'text', content: 'Electricity' },
                                    { type: 'text', content: 'metal pipes which are conductive' },
                                    { type: 'text', content: 'death from electrocution' },
                                    { type: 'input', questionIndex: 5, prefix: 'make sure electricity has been ' }
                                ]
                            }
                        ]
                    }
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 21,
                    title: 'Questions 21-27',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Flexible working',
                    items: [
                        { prefix: 'How to organise flexible working: provide employees with clear', suffix: '' },
                        { prefix: 'Initially, have a', suffix: 'of progress each day' },
                        { prefix: 'Make sure a shared', suffix: 'is accessible to give details of colleague locations' },
                        { prefix: 'Use a program such as iMeet to encourage different types of', suffix: 'between workers' },
                        { prefix: 'Benefits of flexibility: less', suffix: 'from colleagues' },
                        { prefix: 'Benefits of flexibility: increase in', suffix: '' },
                        { prefix: 'Benefits of flexibility: greater success for the company with staff recruitment and', suffix: '' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>Preventing the theft of turtle eggs</strong></h2>
<p><em>Conservationists and law enforcement have struggled to prevent wildlife trafficking. But could some plastic eggs and GPS trackers change the game?</em></p>
<p><strong>A</strong></p>
<p>Humans have been eating sea turtle eggs (and killing adult turtles for meat) for millennia. However, as human populations exploded and as sea turtles began to confront additional threats such as intensive fishing, beach development and climate change, sea turtle populations declined precipitously. Today, all but one of the world’s seven species of sea turtles are considered threatened according to the IUCN Red List. And the one that’s not, the flatback turtle, is listed as data deficient, which means scientists simply don’t know how it’s doing.</p>
<p><strong>B</strong></p>
<p>One major problem is that every year millions of sea turtle eggs are illegally taken by poachers for sale on the black market. The situation is particularly serious in Nicaragua, in Central America, which is home to four sea turtle species.</p>
<p>Kim Williams-Guillen, who works for conservation body Paso Pacifico, described the poaching of sea turtle nests on the beaches of Nicaragua as ‘uncontrolled, unregulated, extensive and contested’. Even the best-protected beaches are plundered to some extent and it’s not uncommon to see poachers digging up nests just meters from tourists watching sea turtles laying their clutch at night, she said. This poaching becomes particularly frenzied during the <em>arribadas</em> mass laying events where thousands of turtles nest on the same beach for a single night in a biological strategy to overwhelm natural predators.</p>
<p><strong>C</strong></p>
<p>‘Even with armed guards, the numbers of poachers overwhelm military personnel by ten to twenty to one,’ Williams-Guillen said. ‘Although many poachers are locals with limited resources, during these <em>arribadas</em> there are influxes of gangs of poachers from larger cities outside local communities. These are not just local poor people without other options.’</p>
<p>But to protect the country’s sea turtles, Williams-Guillen said conservationists shouldn’t just depend on catching low-level operators. ‘If one poacher decides to stop, another one will just step into his place ... we need to know more about the middlemen and people higher up in the distribution chain,’ she said.</p>
<p><strong>D</strong></p>
<p>Paso Pacifico’s solution is the creation of high-tech sea turtle eggs: fake eggs convincingly crafted to look like the real thing, but which contain GPS tracking devices. These have the potential to reveal the destination markets for trafficked sea turtle eggs.</p>
<p>Making convincing sea turtle eggs is not easy, and Paso Pacifico is still working on perfecting a prototype. In particular, it’s proving quite problematic to create the right texture, since sea turtle eggs are not covered in a hard shell like those of birds, but are quite flexible.</p>
<p>So Paso Pacifico brought in Lauren Wilde, a special effects artist in the US, to create a convincing outer shell. First, Wilde had to get her hands on the real thing. Since it’s illegal to send sea turtle eggs over the border, Wilde is using land turtle eggs from California. ‘It was really eye opening and important for me to feel these eggs and how the shell bends a little,’ she said.</p>
<p>To get the GPS device inside the shell, Paso Pacifico is using 3D printers to make a plastic ball which will then have a GPS transmitter fitted inside. This will take the place of the embryo inside the shell. Lastly the fake shells will be sealed with silicone, waterproofing them.</p>
<p><strong>E</strong></p>
<p>Sea turtles on average lay around 100 eggs in a nest, and once the fake eggs are finished they will be slipped in with the real ones. Williams-Guillen said it might even be possible to deliver fake eggs into nests while poachers are at work. Wary of tourists, poachers will often back off if strangers come near and then return when they have gone. ‘It would be pretty easy to drop an egg in the dark into a nest they have been digging up,’ she said.</p>
<p>Once the poacher picks up the fake egg along with the real ones, conservationists and law enforcement agents will be able to track them. Experts believe most of the stolen eggs eventually make their way out of Nicaragua, possibly to El Salvador or Guatemala. However, there is also growing concern that sea turtle eggs from Central America are actually heading to the USA, from where they are sold on to other countries around the world.</p>
<p><strong>F</strong></p>
<p>To date, Paso Pacifico has yet to put a single fake egg in a nest. But Williams-Guillen said she isn’t too concerned that publicity for their scheme will result in poachers looking for the eggs. ‘The vast majority of the poaching is happening at night, so already it is hard to tell [the eggs] apart, and at this point, poachers and middlemen are not closely inspecting eggs, but rather shoving them into a sack as quickly as possible.’</p>
<p>Of course, poachers will eventually become aware of the prospect of fake eggs among the real ones, especially when customers try to bite into an egg and break their teeth on the GPS transmitter instead. So, Paso Pacifico plans to do a massive deployment of as many fakes as possible to gather a lot of data before poachers get wise.</p>
<p>Knowing where the eggs go will allow conservationists and law enforcement agents to focus their resources on the right places, whether it be through awareness-building campaigns or crackdowns on illegal sellers. And eventually Paso Pacifico hopes to share the technology with interested parties around the world.</p>
<p><em>IUCN: International Union for Conservation of Nature</em></p>
`,
            questions: [
                {
                    type: 'paragraph-headings',
                    startQuestionNumber: 28,
                    title: 'Questions 28-33',
                    instruction: 'The text has six sections, A-F. Choose the correct heading for each section from the list of headings below.',
                    options: [
                        { value: 'i', text: 'Developing an item that appears true to life' },
                        { value: 'ii', text: 'Extending the project to other endangered species' },
                        { value: 'iii', text: 'A short but intensive investigation with longer-term follow-up' },
                        { value: 'iv', text: 'Problems facing sea turtles at a global level' },
                        { value: 'v', text: 'Collection of eggs and their possible onward routes' },
                        { value: 'vi', text: 'Intensive and large-scale poaching in one location' },
                        { value: 'vii', text: 'Why catching the poachers may not solve the problem' }
                    ],
                    items: [
                        { paragraph: 'A' },
                        { paragraph: 'B' },
                        { paragraph: 'C' },
                        { paragraph: 'D' },
                        { paragraph: 'E' },
                        { paragraph: 'F' }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 34,
                    title: 'Questions 34-37',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: 'What does the writer suggest about the flatback turtle?',
                            options: [
                                { value: 'A', text: 'It could be as severely threatened as other turtles.' },
                                { value: 'B', text: 'It has been neglected by scientists in the past.' },
                                { value: 'C', text: 'It is in less danger than some other species.' },
                                { value: 'D', text: 'It should be removed from the IUCN Red List.' }
                            ]
                        },
                        {
                            question: 'Williams-Guillen says that the poaching of sea turtle eggs in Nicaragua',
                            options: [
                                { value: 'A', text: 'is mainly carried out by local people.' },
                                { value: 'B', text: 'may be encouraged by the presence of tourists.' },
                                { value: 'C', text: 'sometimes has a highly organised structure.' },
                                { value: 'D', text: 'can only be controlled by the use of armed guards.' }
                            ]
                        },
                        {
                            question: 'In Section E, Williams-Guillen says that one way to encourage poachers to take the fake eggs is to',
                            options: [
                                { value: 'A', text: 'make fake nests and put the eggs into them.' },
                                { value: 'B', text: 'put them in nests with just a few real eggs.' },
                                { value: 'C', text: 'distract the poachers after the fake eggs have been put in the nests.' },
                                { value: 'D', text: 'put them in nests that the poachers have started to dig up.' }
                            ]
                        },
                        {
                            question: 'It is planned to use a large number of fake eggs at the beginning because',
                            options: [
                                { value: 'A', text: 'some of the fake eggs may be missed by the poachers.' },
                                { value: 'B', text: 'it may not be possible to continue the project indefinitely.' },
                                { value: 'C', text: 'some eggs may be hidden in the sand.' },
                                { value: 'D', text: 'it may not be feasible to fund long-term research.' }
                            ]
                        }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 38,
                    title: 'Questions 38-40',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Making convincing sea turtle eggs',
                    items: [
                        { prefix: 'One difficulty in creating a fake sea turtle egg is to get the appropriate texture for the shell. Unlike a bird’s egg, a turtle’s egg has a shell which is', suffix: '' },
                        { prefix: 'Lauren Wilde has studied eggs from Californian turtles that live on', suffix: 'to create a realistic reproduction of the shell' },
                        { prefix: 'A GPS device will then be placed inside a', suffix: 'in the fake shell. Finally, silicone will be applied to the shell to make it waterproof.' }
                    ]
                }
            ]
        }
    ]
};
