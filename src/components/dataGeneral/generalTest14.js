export const generalTest14 = {
    id: 114,
    title: 'General Reading Practice Test 14',
    correctAnswers: [
        // Q1-7: note completion
        'booklet', 'checklist', 'website', 'value', 'photographs', 'packaging', 'sender',
        // Q8-14: paragraph matching A-F
        'A', 'F', 'D', 'B', 'E', 'D', 'E',
        // Q15-20: short answer questions
        'indoor staff', '3 weeks', 'maternity leave', '5 years', 'pensions', 'registered psychologists',
        // Q21-27: sentence completion
        'written contract', 'qualifications', 'outline', 'prior coursework', "employer's workforce", 'journey workers', 'location',
        // Q28-34: paragraph headings
        'vi', 'ix', 'vii', 'iii', 'ii', 'iv', 'viii',
        // Q35-40: summary completion
        'integrated', 'competition', 'hovercrafts', 'piers', 'tunnel', 'concrete'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-7.</em></p>
<h2 style="text-align:center"><strong>Lost, Damaged or Delayed Inland Mail Claim Form</strong></h2>
<p>Before completing this claim form for lost, damaged or delayed mail you should visit www.royalmail.com to find out all you need to know about our policies. Alternatively you can get the details from our ‘Mail Made Easy’ booklet, available at any local post office branch. When you fill in the form, make sure you complete it in full, using the checklist that we have provided to help you. If you find that you do not have the evidence required to make a claim but would like us to investigate an issue with your mail service, the easiest way to do this is by visiting our website.</p>
<p><strong>Lost items</strong></p>
<p>If you wish to claim compensation for lost items, you need to send us original proof of posting, e.g. a Post Office receipt. If claiming for the contents of a package, you also need to provide proof of value, e.g. till item reference number, receipt, bank statement, etc.</p>
<p><strong>Damaged items</strong></p>
<p>When claiming compensation for items that have been damaged, you should send us the items themselves, if possible. However, if these are very large or unsafe to post, you may instead provide photographs as evidence of the damage. Please retain the original packaging (and damaged items, if not sent to us) as we may need to inspect them.</p>
<p><strong>Time restrictions</strong></p>
<p>We allow up to 15 working days for items to arrive, so cannot accept a claim for loss unless 15 working days or more have passed since the item was posted.</p>
<p>Claims for lost or damaged items must be made within 12 months of the postal date. Claims for delayed items must be submitted within 3 months of the date they were posted if the claim is made by the sender, or within 1 month of receipt if the claim is made by the recipient of the item.</p>
<hr/>
<p><em>Read the text below and answer Questions 8-14.</em></p>
<h2 style="text-align:center"><strong>Days out for the family</strong></h2>
<p><strong>A Carrickfergus Castle</strong></p>
<p>Considered to be Northern Ireland’s oldest castle, Carrickfergus has seen more than 800 years of military occupation since its foundations were laid. During summer, traditional feasts are served, and fairs and craft markets provide an extra attraction. The history of the castle is explained and brought to life with exhibits and guided tours.</p>
<p><strong>B Glamis Castle</strong></p>
<p>Shakespeare used Glamis as the background when he wrote one of his best-known plays, <em>Macbeth</em>, and the Queen Mother grew up here. It is also rumoured to have a secret chamber in the walls of the castle. There are many ghost tales associated with this castle, which will capture the imagination of younger visitors.</p>
<p><strong>C Tintagel Castle</strong></p>
<p>High up on the cliff tops, Tintagel Castle is the legendary home of King Arthur. The visitor’s guide on sale at the reception is well worth the money, as it can help you to visualise what it would have been like hundreds of years ago. You can park in the village car park and walk the half mile to the castle, or take the shuttle bus.</p>
<p><strong>D Pickering Castle</strong></p>
<p>Built by William the Conqueror, this is a great castle for children to run around in. There are lots of special events too, including a chance to come along and see some plays which are put on during the summer months. Nearby Helmsley Castle is also worth a visit.</p>
<p><strong>E Stokesay Castle</strong></p>
<p>A range of workshops, including music and combat, are held here during the summer. Children of all ages will enjoy learning at these and there is a guided tour which has been especially designed with younger visitors in mind. Some of them may find the dungeon quite scary though.</p>
<p><strong>F Warwick Castle</strong></p>
<p>This castle is over 1,000 years old and has towers and a moat, and is just as you might imagine a castle to be. Children can even get to try on armour to see how heavy it is. At Christmas, a special market is held here, a great opportunity to look for presents and Christmas treats.</p>
`,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 1,
                    title: 'Questions 1-7',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.',
                    sectionTitle: 'Claiming compensation from the Royal Mail for lost, damaged or delayed mail',
                    items: [
                        { prefix: 'Before filling in the form: go online to learn about their policies or get the', suffix: 'that contains the relevant information.' },
                        { prefix: 'When filling in the form: refer to the', suffix: 'to ensure all the relevant sections are completed.' },
                        { prefix: 'You can use their', suffix: 'to request action if you do not have enough proof to make a claim.' },
                        { prefix: 'When claiming compensation for a lost item: in the case of a package, include something to prove its', suffix: '.' },
                        { prefix: 'When claiming for the cost of a damaged item: include either the actual item or', suffix: 'showing the damage to the item.' },
                        { prefix: 'You should keep the', suffix: 'that was used when the item was originally sent.' },
                        { prefix: 'Delayed items: if you are the', suffix: ', you must claim within three months of posting the package.' }
                    ]
                },
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 8,
                    title: 'Questions 8-14',
                    instruction: 'Look at the descriptions of six castles, A-F. For which castle are the following statements true?',
                    paragraphRange: 'A-F',
                    options: ['A', 'B', 'C', 'D', 'E', 'F'],
                    note: 'NB  You may use any letter more than once.',
                    items: [
                        { description: 'At certain times of year you can eat special meals here.' },
                        { description: 'Children can get dressed up here.' },
                        { description: 'There is another castle in the same area.' },
                        { description: 'A lot of stories are told about this place.' },
                        { description: 'Part of the castle may be frightening for some children.' },
                        { description: 'Plays are performed here during part of the year.' },
                        { description: 'A guided tour is offered which is particularly suitable for children.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-20.</em></p>
<h2 style="text-align:center"><strong>North Sydney Council</strong></h2>
<p>North Sydney Council recognises the importance of balancing the demands of your work with the demands of your personal life.</p>
<p>The standard working week for full-time council employees is 35 hours for ‘Indoor Staff’ and 38 hours for ‘Outdoor Staff’, worked over 5 days. Indoor staff are able to access the benefit of flexi time. A number of these occasionally work from home where appropriate, an example of an initiative that can provide flexibility at certain stages of an employee’s career.</p>
<p>Staff are entitled to 3 weeks per annum sick or carer’s leave. In addition to the normal parental leave/maternity leave provisions, women who have completed 12 months of continuous service can access a total of 9 weeks’ maternity leave that can be taken either as 9 weeks at full pay or as 18 weeks at half pay.</p>
<p>The annual entitlement to paid holidays is 20 days, pro-rata for part-time. After 5 years of continuous service, employees are entitled to 6.5 weeks Long Service Leave (LSL). Our Financial Advice Program is conducted in partnership with FuturePlus Financial Services. We provide the services of advisors specialising in pensions, and all our employees are given the opportunity to meet them as part of the induction process.</p>
<p>The Employee Assistance Program (EAP) is a counselling service provided at no charge to all employees and their families. The service is available by phone or face to face. The EAP provides registered psychologists for employees wishing to discuss work or non-work matters confidentially. Employees can also access information, such as articles and self assessments, online via eapdirect.</p>
<hr/>
<p><em>Read the text below and answer Questions 21-27.</em></p>
<h2 style="text-align:center"><strong>Registering As An Apprentice</strong></h2>
<p>If you are keen to acquire new skills and learn best through ‘hands-on’ experiences, then registered apprenticeship is a good option for you. These programmes always involve work experience as well as classroom instruction and produce workers skilled in the occupation. There is a written contract to be signed by the apprentice and the employer, which acknowledge their joint commitment to the training process. This contract is approved and registered by the New York State Department of Labor.</p>
<p><strong>How Do I Qualify?</strong></p>
<p>First of all you must meet the employer’s minimum qualifications. This could be a high school diploma or the equivalent. However, some employers will ask for specific high school courses, prior experience, or occupationally related courses.</p>
<p><strong>What Is My Training Like?</strong></p>
<p>Training for each apprenticeable occupation is conducted according to a training outline that has been standardized for the occupation. This assures that apprentices across the state have the same sets of basic competencies and skills. At the successful completion of each registered apprenticeship, the Department of Labor awards the apprentice a ‘Certificate of Completion’, which is a nationally recognized credential.</p>
<p>The length of time it takes you to learn the skills of the occupation depends upon two things: the standard training outline and your aptitude. Each trade has a definite term of training, listed in years. As a registered apprentice, you may progress according to that established training term, or you may become skilled more quickly or more slowly. It may even be that you start your apprenticeship with credit toward the goal. Your employer may choose to award you this for previous working experience in the occupation, or for prior coursework related to the occupation.</p>
<p>As an apprentice, you are part of the employer’s workforce. You work full-time for the employer. A registered apprentice works under the guidance of more experienced craft workers called journey workers. From them, you learn the skills of the trade. As you master each skill, you become a more productive employee.</p>
<p>At the same time as you are working, you are also required to attend classes (usually in the evenings). The location and times of these are set up by the local education agent in consultation with the employer. Your progress is tracked by you, your employer and your education provider.</p>
<p>Successful completion of all requirements results in your certificate.</p>
`,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 15,
                    title: 'Questions 15-20',
                    instruction: 'Answer the questions below.',
                    wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.',
                    items: [
                        { prefix: 'Which employees may choose not to work regular hours?', suffix: '' },
                        { prefix: 'How much time off each year is an employee able to take to look after a relative?', suffix: '' },
                        { prefix: 'What kind of leave involves a choice between two alternative periods of time?', suffix: '' },
                        { prefix: 'How long must employees have worked without a break before being entitled to additional holidays?', suffix: '' },
                        { prefix: 'What does the Financial Advice Program advise staff about?', suffix: '' },
                        { prefix: 'What kind of professional people can employees see if they want to talk about their job in private?', suffix: '' }
                    ]
                },
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 21,
                    title: 'Questions 21-27',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose NO MORE THAN TWO WORDS from the text for each answer.',
                    items: [
                        { prefix: 'You and your employer will need to sign a', suffix: 'before training starts.' },
                        { prefix: 'Employers may have different minimum requirements regarding applicants’', suffix: 'and experience.' },
                        { prefix: 'Each industry has its own standardised', suffix: 'of training.' },
                        { prefix: 'You may be given credit for work experience or if you have done relevant', suffix: '.' },
                        { prefix: 'You will be considered as a member of the', suffix: 'during the apprenticeship.' },
                        { prefix: 'While at work, apprentices are supervised by what are known as', suffix: '.' },
                        { prefix: 'Employers are consulted when deciding the', suffix: 'and schedule for lessons.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>
<h2 style="text-align:center"><strong>Crossing the Humber estuary</strong></h2>
<p><strong>A</strong></p>
<p>For thousands of years, the Humber, an estuary formed where two major rivers, the Trent and the Ouse, meet, has been an obstacle to communications along the east coast of England, between the counties of Yorkshire to the north and Lincolnshire to the south. Before the arrival of the railways in the 19th century, water transportation was the most efficient means of moving heavy or bulk freight, and the Humber, situated at the heart of the waterway system associated with the two major rivers, was one of the chief highways of England. Its traffic brought prosperity to the settlements on its banks, particularly the city of Hull on its north bank, but the river itself tended to cut them off from some of their closest neighbours, as well as obstructing the progress of travellers moving north or south.</p>
<p><strong>B</strong></p>
<p>To cater for these local and, as time progressed, wider needs, ferries were provided across many of the streams flowing into the Humber, and in 1315, a ferry was established across the Humber itself between Hull and Lincolnshire. By 1800, this ferry had become fully integrated into the overland transport system, but the changes associated with the industrial revolution were soon to threaten its position. Increased traffic encouraged speculators to establish rival ferries between Hull and Lincolnshire, notably a service between Hull and New Holland which opened in 1826. This crossing was considerably shorter than on the existing Hull to Barton service, which closed in 1851, unable to cope with the increased competition from the rival service.</p>
<p>The New Holland ferry service then grew into a major link between the north and south banks of the Humber, carrying passengers, and cattle and goods bound for Hull Market. In 1968, there was briefly a ferry service from Grimsby to Hull involving hovercrafts. This did not last long as the hovercrafts could not cope with the demands of the River Humber. The ferry service between Hull and New Holland ended with the opening of the Humber Bridge in 1981.</p>
<p><strong>C</strong></p>
<p>The bridge was the outcome of over 100 years of campaigning by local interests for the construction of a bridge or tunnel across the estuary. The first major crossing proposal was a tunnel scheme in 1872. This scheme was promoted by Hull merchants and businesses dissatisfied with the service provided by the New Holland ferry crossing. Over the next 100 years, a variety of proposals were put forward in an effort to bridge the Humber. In 1928, a plan was drawn up by Hull City Council to build a multi-span bridge four miles west of Hull. However, the scheme was dropped after being hit by the financial woes of the Great Depression of the late 1920s and early 1930s.</p>
<p><strong>D</strong></p>
<p>Government approval for the construction of a suspension bridge was finally granted in 1959, although it was not until 1973 that work finally began. The reasons why a suspension bridge was chosen were twofold. Firstly, the Humber has a shifting bed, and the navigable channel along which a craft can travel is always changing; a suspension bridge with no support piers in mid-stream would not obstruct the estuary. Secondly, because of the geology and topography of the area, the cost of constructing a tunnel would have been excessive.</p>
<p><strong>E</strong></p>
<p>Work on the construction proceeded for eight years, during which time many thousands of tonnes of steel and concrete were used and upwards of one thousand workers and staff were employed at times of peak activity. The designers had been responsible for two other major suspension bridges in Britain but, with a total span of 2,220 m, or almost a mile and a half, the Humber was going to be the longest suspension bridge in the world. Nowadays designers have computers, but back then everything was done with slide rules and calculators. The towers were concrete rather than the usual steel, since concrete was cheaper and would blend in better with the setting. The bridge was designed to stand for 120 years.</p>
<p><strong>F</strong></p>
<p>Malcolm Stockwell, the bridgemaster, recalls that when the bridge first opened, there was not a great deal of interest in it. Then children started visiting, and he remembers their astonishment at seeing the control room and all the lights. People who lived in towns on opposite banks a mile apart started crossing the river, a journey that previously might as well have been to the moon. The bridge brought them together.</p>
<p><strong>G</strong></p>
<p>The bridge opened up, both socially and economically, two previously remote and insular areas of England, and the improvement in communication enabled the area to realise its potential in commercial, industrial and tourist development. The bridge has saved many millions of vehicle miles and many valuable hours of drivers’ and passengers’ time, an important factor not only for the drivers and operators of commercial vehicles, but also for tourists and holidaymakers who would have had to travel around the estuary to reach destinations in the region.</p>
<p>In the words of Malcolm Stockwell, ‘Although it cannot beat the Golden Gate Bridge in San Francisco for setting, it far outstrips it for sheer elegance and as a piece of engineering.’</p>
`,
            questions: [
                {
                    type: 'paragraph-headings',
                    startQuestionNumber: 28,
                    title: 'Questions 28-34',
                    instruction: 'Choose the correct heading for each section from the list of headings below.',
                    options: [
                        { value: 'i', text: 'Why the ferry crossing has always been difficult' },
                        { value: 'ii', text: 'Building the bridge' },
                        { value: 'iii', text: 'An advantage of the design for the bridge' },
                        { value: 'iv', text: 'The growing popularity of the bridge' },
                        { value: 'v', text: 'Opposition to building a bridge' },
                        { value: 'vi', text: 'Benefits and disadvantages the Humber has brought' },
                        { value: 'vii', text: 'Proposed alternatives to ferry services' },
                        { value: 'viii', text: 'How the bridge has contributed to the region’s growth' },
                        { value: 'ix', text: 'Rising demand for river transport' }
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
                    title: 'Questions 35-40',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Crossing the Humber',
                    items: [
                        { prefix: 'The first ferry across the Humber started operating in 1315, and by 1800, this service had been', suffix: 'with other forms of transport.' },
                        { prefix: 'The mid-19th century saw greater', suffix: 'in the provision of services.' },
                        { prefix: 'In 1968, an attempt to establish a service across the river using', suffix: 'failed.' },
                        { prefix: 'The Humber Bridge is a suspension bridge because the channel that ships travel along moves, and', suffix: 'supporting a bridge would obstruct it.' },
                        { prefix: 'A bridge rather than a', suffix: 'was chosen on the grounds of cost.' },
                        { prefix: 'This was also one reason why', suffix: 'was used for the towers.' }
                    ]
                }
            ]
        }
    ]
};
