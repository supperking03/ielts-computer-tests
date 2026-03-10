export const generalTest05 = {
    id: 105,
    title: 'General Reading Practice Test 05',
    correctAnswers: [
        // Q1-6: TRUE/FALSE/NOT GIVEN
        'TRUE', 'FALSE', 'FALSE', 'NOT GIVEN', 'TRUE', 'FALSE',
        // Q7-14: paragraph matching A-E
        'C', 'E', 'A', 'B', 'E', 'D', 'D', 'B',
        // Q15-20: short answer questions
        'Hospitality Department', 'academic calendar', '1st October', 'nominated contractor', 'permits', 'Concorde Building',
        // Q21-27: short answer questions
        '26 weeks', '6 weeks / six weeks', '112.75', '39 weeks', 'antenatal clinics', 'personal circumstances', 'grants',
        // Q28-32: paragraph headings
        'ii', 'viii', 'vii', 'iii', 'vi',
        // Q33-37: multiple choice
        'A', 'B', 'D', 'C', 'B',
        // Q38-40: summary completion
        'insects', 'tomb', 'eruption'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-6.</em></p>

<h2 style="text-align:center"><strong>TRANSITION CARE FOR THE ELDERLY</strong></h2>
<p><strong>What is transition care?</strong></p>
<p>Transition care is for older people who have been receiving medical treatment, but need more help to recover, and time to make a decision about the best place for them to live in the longer term. You can only access transition care directly from the hospital.</p>
<p>Transition care is focused on individual goals and therapies and is given for a limited time only. It offers access to a package of services that may include:</p>
<ul>
  <li>low-intensity therapy such as physiotherapy (exercise, mobility, strength and balance) and podiatry (foot care)</li>
  <li>access to a social worker</li>
  <li>nursing support for clinical care such as wound care</li>
  <li>personal care</li>
</ul>
<p><strong>Who provides transition care services?</strong></p>
<p>Transition care is often provided by non-government organisations and is subsidised by the government. If your circumstances allow, it is expected you'll contribute to the cost of your care.</p>
<p>Daily care fees are set by the organisation that provides your transition care services (your service provider). They should explain these fees to you, and the amount charged should form part of the agreement between you and the service provider. The fee is calculated on a daily basis.</p>
<p><strong>Where do I receive transition care?</strong></p>
<p>Transition care is provided in your own home or in a 'live-in' setting. This setting can be part of an existing aged-care home or health facility such as a separate wing of a hospital.</p>
<p><strong>What if I'm already receiving services through a different programme?</strong></p>
<p>If you're already receiving subsidised residential care in an aged-care home, but you need to go somewhere else for transition care, your place in the aged-care home will be held until you return.</p>

<hr/>
<p><em>Read the text below and answer Questions 7-14.</em></p>

<h2 style="text-align:center"><strong>CABIN BAGS FOR AIR TRAVEL</strong></h2>
<p><em>If you want a small bag with wheels that you can take onto the plane with you, there's a wide choice. Here are some of the best.</em></p>
<p><strong>A</strong></p>
<p>The <strong>Flyer B3</strong> is an ultra-lightweight cabin bag which can withstand some pretty harsh treatment, its nylon and polyester sides won't rip or burst open if it's dropped or thrown whilst in transit. However, the trolley handle feels quite thin and flimsy. The top carrying handle is hard and flat, and the side handle isn't easy to grip.</p>
<p><strong>B</strong></p>
<p>The <strong>Lightglide</strong> has two external pockets, both of which are zipped and lockable, but the inside pocket does not zip. In tests, we found the contents remain dry when given a good soaking, even around the zips. The trolley handle has a choice of two heights and the plastic hand grip doesn't have any sharp ridges that'll make your hands sore. For carrying there are fabric handles at the top and side.</p>
<p><strong>C</strong></p>
<p>The <strong>Foxton</strong> is easy to control across most surfaces. However, the zips don't always run smoothly especially around the corners, so you may have to give them a good tug, especially if the case is very full. This is definitely one to avoid if you're going somewhere rainy as it lets loads of water in, and documents in the pockets will also get pretty wet unless they're in plastic folders.</p>
<p><strong>D</strong></p>
<p>The <strong>Skybag</strong> has a single external zipped pocket and another located inside the lid. Your clothes are kept in place by two adjustable straps. The zips are easy to grip and they run smoothly around the case. However, this cabin bag felt a little heavy to pull on all but smooth floors, and it was hard to steer compared with some of the other suitcases.</p>
<p><strong>E</strong></p>
<p>The <strong>Travelsure 35</strong> is available in a huge range of fabric designs including leopard print or lipstick kisses. The retractable trolley handle is comfortable but can't be adjusted to suit users of different heights. There's no internal divider, but there are two handy zipped pockets in the lid. We test each bag by letting it fall onto a hard floor, and our results show that you'll have to treat this bag with great care if you want it to last. The fabric tore so badly at one of the corners that it was unusable.</p>
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
                        { statement: 'Only hospital patients can go on to have transition care.' },
                        { statement: 'Transition care may be long term or short term.' },
                        { statement: 'Everyone receiving transition care must contribute to the cost.' },
                        { statement: 'Transition care at home is only available for patients who live alone.' },
                        { statement: 'Transition care may be given on a hospital site.' },
                        { statement: 'You may lose your place in a care home if you have to leave it to receive transition care.' }
                    ]
                },
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 7,
                    title: 'Questions 7-14',
                    instruction: 'The text has five paragraphs, A-E. Which paragraph mentions the following?',
                    paragraphRange: 'A-E',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E'],
                    items: [
                        { description: 'The zips on this cabin bag may be difficult to use.' },
                        { description: 'This cabin bag may be badly damaged if it is dropped.' },
                        { description: 'The handles of this cabin bag have a number of different problems.' },
                        { description: 'This cabin bag is very resistant to water.' },
                        { description: "There's a good choice of patterns for the fabric of this cabin bag." },
                        { description: "This cabin bag isn't very easy to move around." },
                        { description: 'This cabin bag has just one internal zipped pocket.' },
                        { description: 'The trolley handle of this cabin bag is adjustable.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-20.</em></p>

<h2 style="text-align:center"><strong>College car parking policy - staff</strong></h2>
<p><strong>Parking permits and tickets</strong></p>
<p>Staff permits are required to park a motor vehicle (other than a motorcycle parked in the cycle bays) on campus between 8.30 am and 4.30 pm, Monday to Friday, during term time. Annual permits can be purchased from the Hospitality Department. Application forms can be downloaded from the College website. All permits/tickets must be clearly displayed in the windscreen of vehicles during the dates of term time, as published in the academic calendar. Please inform the Services Administrator of any changes to registration details on telephone ext. 406. Annual car parking permits can be purchased from 20th September and are valid for one academic year from 1st October to 30th June. The annual charges for car parking are displayed on the application form.</p>
<p><strong>Enforcement</strong></p>
<p>The nominated contractor will issue fixed Penalty Charge Notices (see below) on vehicles that fail to display a valid permit and/or parking ticket, or vehicles that are parked on yellow lines or in disabled parking bays without displaying a blue disabled-parking permit. Reductions of parking space availability may arise in order to accommodate College recruitment activities and/or estate development/maintenance projects. Vehicles that are in breach of the policy will be issued with a Penalty Charge Notice.</p>
<p><strong>Penalty Charge Notice (PCM)</strong></p>
<p>The PCN is &pound;30, increasing to &pound;60 seven days after issue. The nominated contractor is responsible for the collection of unpaid PCNs and may use legal action where necessary to recover unpaid PCNs. If issued with a PCN, appeals must be taken up directly with the parking enforcement company (details included on the notice) not the college.</p>
<p><strong>Disabled parking</strong></p>
<p>The college has designated car parking spaces for disabled car drivers. The college will make all reasonable efforts to ensure these parking spaces are used only by drivers who display their blue disabled-parking permits, and a valid pay-and-display or annual permit, as appropriate.</p>
<p>If issues arise concerning the availability of the parking spaces, those concerned should raise the matter with the Domestic Services Department in order to effect a temporary solution.</p>
<p><strong>Visitors</strong></p>
<p>The College welcomes visitors and provides parking arrangements through pre-arranged permits, which must be displayed in the vehicle. Please contact the Hospitality Department for further information. On Open Days, sections of car parking on campus may be reserved for visitors.</p>
<p><strong>Short-term drop-off/pick-up provision</strong></p>
<p>There will be two short-term drop-off/pick-up spaces for users of the nursery, with a maximum of ten minutes' waiting time allowed. These are located outside Concorde Building. The nursery staff bays may not be used under any circumstances.</p>

<hr/>
<p><em>Read the text below and answer Questions 21-27.</em></p>

<h2 style="text-align:center"><strong>Maternity benefits</strong></h2>
<p>If you are expecting a baby, there are a number of benefit schemes that could help you financially. However, eligibility differs for each individual scheme.</p>
<p><strong>Statutory Maternity Pay (SMP)</strong></p>
<p>You may be entitled to Statutory Maternity Pay (SMP) from your employer. This is a weekly payment, to help make it easier for you to take time off, both before and after the birth of your baby. SMP can be paid for up to 39 weeks.</p>
<p>You are entitled to SMP if you have been employed by the same company for at least 26 weeks by the end of the 15th week before your baby is due. You must also be earning an average of at least &pound;87 per week (before tax). The amount you get depends on how much you earn. For 6 weeks, you will receive 90% of your average weekly earnings. Then you will receive &pound;112.75 per week for the remaining 33 weeks.</p>
<p><strong>Maternity Allowance (MA)</strong></p>
<p>Maternity Allowance (MA) is available to those who are employed or self-employed but not eligible for Statutory Maternity Pay (SMP). You may be entitled to Maternity Allowance if you have been employed or self-employed for at least 26 weeks in the 66 weeks before you are due to give birth. You don't have to work for the same employer for those 26 weeks. You also don't have to work full weeks (as a part week counts as a full week) during the same period. Maternity Allowance can be paid for up to 39 weeks, and is either paid at the same standard rate as SMP or 90% of your average weekly earnings. You'll receive whichever amount is the lower. You can find Maternity Allowance forms at antenatal clinics throughout the country.</p>
<p><strong>Child Tax Credit</strong></p>
<p>If you're on a low income, over 16, and are responsible for at least one child, you may also be entitled to Child Tax Credit. The amount you get will depend on your personal circumstances and income. When your income is being assessed, any child benefit, maintenance payments or Maternity Allowance payments will not be classed as income. This means that it will not be taken into account when calculating your Child Tax Credit.</p>
<p><strong>Sure Start Maternity Payments</strong></p>
<p>If you get benefits or Child Tax Credit because you're on a low income, then you may be entitled to Sure Start Maternity Payments. These are individual grants to help towards the cost of a new baby.</p>
`,
            questions: [
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 15,
                    title: 'Questions 15-20',
                    instruction: 'Answer the questions below.',
                    wordLimit: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the text for each answer.',
                    items: [
                        { prefix: 'Where can you buy parking permits at the college?', suffix: '' },
                        { prefix: 'Which document shows the dates of term time?', suffix: '' },
                        { prefix: 'What is the start date of annual parking permits?', suffix: '' },
                        { prefix: 'Who is responsible for giving out parking fines if you park in the wrong place?', suffix: '' },
                        { prefix: 'What do visitors need to show when parking?', suffix: '' },
                        { prefix: 'Where can the nursery pick-up point be found?', suffix: '' }
                    ]
                },
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 21,
                    title: 'Questions 21-27',
                    instruction: 'Answer the questions below.',
                    wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.',
                    items: [
                        { prefix: 'What is the minimum period you must have worked for an employer in order to be eligible for SMP?', suffix: '' },
                        { prefix: 'For how long is SMP payable every week as a percentage of your average weekly earnings?', suffix: '' },
                        { prefix: 'What sum is payable every week as the second part of SMP entitlement?', suffix: '' },
                        { prefix: 'What is the maximum length of time MA is payable?', suffix: '' },
                        { prefix: 'Where can MA forms be obtained?', suffix: '' },
                        { prefix: 'Apart from income, what else is considered when assessing how much Child Tax Credit is paid?', suffix: '' },
                        { prefix: 'What are Sure Start Maternity Payments?', suffix: '' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>PAPYRUS</strong></h2>
<p><em>Used by the ancient Egyptians to make paper, the papyrus plant has helped to shape the world we live in.</em></p>
<p><strong>A</strong></p>
<p>Libraries and archives are cultural crossroads of knowledge exchange, where the past transmits information to the present, and where the present has the opportunity to inform the future. Bureaucracies have become the backbone of civilizations, as governments try to keep track of populations, business transactions and taxes. At a personal level, our lives are governed by the documents we possess; we are certified on paper literally from birth to death. And written documentation carries enormous cultural importance: consider the consequences of signing the Foundation Document of the United Nations or the Convention on Biological Diversity.</p>
<p>Documentation requires a writing tool and a surface upon which to record the information permanently. About 5,000 years ago, the Sumerians started to use reeds or sticks to make marks on mud blocks which were then baked, but despite being fireproof, these were difficult to store. Other cultures used more flexible but less permanent surfaces, including animal skins and wood strips. In western culture, the adoption of papyrus was to have a great impact. Sheets of papyrus not only provide an invaluable record of people's daily lives, they can also be dated using carbon-dating techniques, giving precise information about the age of the text written on them.</p>
<p><strong>B</strong></p>
<p>Papyrus is strongly associated with Egyptian culture, although all the ancient civilizations around the Mediterranean used it. The papyrus sedge is a tall grass-like plant. It was harvested from shallow water and swamplands on the banks of the River Nile. Manufacturing sheets of papyrus from papyrus sedge was a complex, messy process. Pith from inside the plant's stem was cut into long strips that were laid side by side. These were then covered with a second layer of strips which were laid at right angles to the first, then soaked in water and hammered together. The sheet was then crushed to extract the water, dried and then polished to produce a high-quality writing surface. Individual sheets could be glued together and rolled up to make scrolls or folded and bound to form books.</p>
<p><strong>C</strong></p>
<p>In moist climates, the cellulose-rich sheets of papyrus would readily decay, becoming covered by mould or full of holes from attacks by insects. But in dry climates, such as the Middle East, papyrus is a stable, rot-resistant writing surface. The earliest known roll of papyrus scroll was found in the tomb of an official called Hemeka near Memphis, which was then the capital city of Egypt, and is around five thousand years old. In 79 CE, nearly 2,000 papyrus scrolls in the library of Julius Caesar's father-in-law were protected at Herculaneum by ash from the catastrophic eruption of Mount Vesuvius. However, the most famous discoveries of papyrus have come from the rubbish dumps of the ancient town of Oxyrhynchus, some 160 km south-west of Cairo, in the desert to the west of the Nile. Oxyrhynchus was a regional administrative capital and for a thousand years generated vast amounts of administrative documentation, including accounts, tax returns and correspondence, which was periodically discarded to make room for more. Over time, a thick layer of sand covered these dumps, and they were forgotten. But the documents were protected by the sand, creating a time capsule that allowed astonishing glimpses into the lives of the town's inhabitants over hundreds of years.</p>
<p>Collections of documents that record information and ideas have frequently been viewed as potentially dangerous. For thousands of years, governments, despots and conquerors have resorted to burning libraries and books to rid themselves of inconvenient evidence or obliterate cultures and ideas that they found politically, morally or religiously unacceptable. One such calamity, the burning of the Great Library of Alexandria, and the papyrus scrolls and books it contained, has been mythologized and has come to symbolize the global loss of cultural knowledge.</p>
<p><strong>D</strong></p>
<p>Besides their use in record-keeping, papyrus stems were used in many other aspects of Mediterranean life, such as for boat construction and making ropes, sails and baskets, as well as being a source of food. In 1969 the adventurer Thor Heyerdahl attempted to cross the Atlantic from Morocco in the boat <em>Ra</em>, to show that it was possible for mariners in ancient times to cross the Atlantic Ocean. <em>Ra</em> was made from bundles of papyrus stems and modelled on ancient Egyptian craft. As a marshland plant, papyrus sedge stabilizes soils and reduces erosion, while some investigations show that it has potential for water purification and sewage treatment.</p>
<p><strong>E</strong></p>
<p>True paper was probably invented in China in the first century CE. Like papyrus, it was constructed from a meshwork of plant fibres, but the Chinese used fibres from the white mulberry tree, which yielded a tough, flexible material that could be folded, stretched, and compressed. The adoption of this paper by western cultures soon rendered papyrus obsolete.</p>
<p>Despite dreams of paper-free societies, western cultures still use enormous quantities of paper, often in ways that it would be inconceivable to use papyrus for. As a paper substitute, the role of the papyrus sedge in western cultures has been superseded; papyrus is little more than a niche product for the tourist market. What makes papyrus noteworthy for western societies nowadays is its use as the surface upon which our ancient ancestors recorded their lives, their art and their science. In the words of the ancient Roman philosopher Pliny the Elder, it is 'the material on which the immortality of human beings depends'.</p>
`,
            questions: [
                {
                    type: 'paragraph-headings',
                    startQuestionNumber: 28,
                    title: 'Questions 28-32',
                    instruction: 'Choose the correct heading for each section from the list of headings below.',
                    options: [
                        { value: 'i', text: 'Solving the puzzle of a papyrus document' },
                        { value: 'ii', text: 'The importance of written records and different ways of recording them' },
                        { value: 'iii', text: 'The use of papyrus for a range of purposes' },
                        { value: 'iv', text: 'Suggestions for future possibilities for papyrus' },
                        { value: 'v', text: 'How papyrus was cultivated and different manufacturing methods' },
                        { value: 'vi', text: 'The decline of papyrus use' },
                        { value: 'vii', text: 'The preservation and destruction of papyrus documents' },
                        { value: 'viii', text: 'The process of papyrus production' }
                    ],
                    items: [
                        { paragraph: 'A' },
                        { paragraph: 'B' },
                        { paragraph: 'C' },
                        { paragraph: 'D' },
                        { paragraph: 'E' }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 33,
                    title: 'Questions 33-37',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: 'What was the problem with using animal skins and wood strips for writing on?',
                            options: [
                                { value: 'A', text: 'They did not last for a long time.' },
                                { value: 'B', text: 'They were not easy to store.' },
                                { value: 'C', text: 'They were insufficiently flexible.' },
                                { value: 'D', text: 'They could be destroyed by fire.' }
                            ]
                        },
                        {
                            question: 'Why did papyrus manufacturers hammer the papyrus?',
                            options: [
                                { value: 'A', text: 'to remove water from the pith strips' },
                                { value: 'B', text: 'to join the layers of pith strips together' },
                                { value: 'C', text: 'to allow the pith strips to be easily cut' },
                                { value: 'D', text: 'to position the layers of pith strips at the correct angle' }
                            ]
                        },
                        {
                            question: 'When referring to burning libraries and books, the writer is suggesting that',
                            options: [
                                { value: 'A', text: 'information can be used for harm as well as for good.' },
                                { value: 'B', text: 'new ways must be found to ensure information is not lost.' },
                                { value: 'C', text: 'cultural knowledge depends on more than written texts.' },
                                { value: 'D', text: 'those in power may wish to keep others in ignorance.' }
                            ]
                        },
                        {
                            question: 'The writer refers to Thor Heyerdahl to illustrate the point that',
                            options: [
                                { value: 'A', text: 'papyrus could be used as a food on long sea voyages.' },
                                { value: 'B', text: 'the ancient Egyptians already had advanced navigation skills.' },
                                { value: 'C', text: 'papyrus could be used to build boats for long sea journeys.' },
                                { value: 'D', text: 'the ancient Egyptians knew of the environmental benefits of papyrus.' }
                            ]
                        },
                        {
                            question: 'What does the writer conclude about papyrus today?',
                            options: [
                                { value: 'A', text: 'It is better for the environment than using paper.' },
                                { value: 'B', text: 'Its significance is restricted to its role in the past.' },
                                { value: 'C', text: 'It is still the best writing surface for some purposes.' },
                                { value: 'D', text: 'More efforts need to be made to ensure it stays in use.' }
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
                    sectionTitle: 'How papyrus documents have survived',
                    items: [
                        {
                            prefix: 'Papyrus is rich in cellulose and in some conditions will be destroyed by fungal growths or be consumed by',
                            suffix: '.'
                        },
                        {
                            prefix: 'However, it can survive for long periods in an environment that is dry. It has been found in a 5,000-year-old',
                            suffix: 'in Egypt,'
                        },
                        {
                            prefix: 'and in Herculaneum many papyrus documents were preserved following a huge',
                            suffix: 'in 79 CE.'
                        }
                    ]
                }
            ]
        }
    ]
};
