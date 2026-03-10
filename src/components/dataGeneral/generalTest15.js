export const generalTest15 = {
    id: 115,
    title: 'General Reading Practice Test 15',
    correctAnswers: [
        // Q1-7: paragraph matching A-F
        'C', 'E', 'D', 'B', 'E', 'A', 'C',
        // Q8-14: TRUE/FALSE/NOT GIVEN
        'TRUE', 'FALSE', 'NOT GIVEN', 'FALSE', 'TRUE', 'NOT GIVEN', 'TRUE',
        // Q15-21: sentence completion
        'contribution', 'sick', 'loans', 'parents', 'policies / schemes', 'parking', 'holidays',
        // Q22-27: note completion
        'retain', 'targets', 'commission', 'senior', 'meetings / letters', 'women',
        // Q28-34: paragraph headings
        'vi', 'iv', 'ii', 'viii', 'v', 'vii', 'iii',
        // Q35-37: multiple choice
        'A', 'C', 'B',
        // Q38-40: summary completion
        'glaciers', 'birds', 'oxygen'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-7.</em></p>

<h2 style="text-align:center"><strong>Evening Courses</strong></h2>
<p><strong>A   Cooking for today</strong></p>
<p>These are classes for those of you who can already make basic meals by keeping strictly to a simple recipe, but who would now like to use your imagination as well. We'll learn how to make great family meals, discovering how to develop basic recipes into personal creations, with a few tricks and tips to help you become more confident.</p>
<p><strong>B   Entertaining the easy way</strong></p>
<p>This course has plenty of ideas and tips for special occasions that you can enjoy preparing, love eating and be proud to provide. The recipes are adaptable to your needs and lifestyle, building on your current skills and aimed at developing your own cooking style.</p>
<p><strong>C   Cooking for the family</strong></p>
<p>Keen to make better food for your kids? This course is for parents who want to learn how to make fun food with the aim of showing their kids how to cook later at home. We'll learn plenty of tasty tips for snacks and picnics, family favourites, and dishes with fresh fruit and vegetables so that you and your family can get really fit and well and enjoy your food.</p>
<p><strong>D   Jewellery making</strong></p>
<p>This course aims to enable students to create silver jewellery. Your first project will be to make a silver ring and then you will have an opportunity to create another piece of your own design. This is an introductory course. Base metals are supplied free. Please wear suitable workshop clothing and bring a notebook and pen.</p>
<p><strong>E   Photography</strong></p>
<p>This course will allow you to take full advantage of your digital camera. Covering portrait, landscape and still-life photography, the classes will include effective use of lenses and lighting. To really benefit from the course, learners should have time to read ahead between sessions.</p>
<p><strong>F   Creative writing</strong></p>
<p>Come and learn how to have fun with stories and other kinds of creative writing. We will try out some new ideas and techniques for improving style and waking up the imagination. Writers who have not taken the foundation class will also be able to join, provided they already have some experience of the subject.</p>

<hr/>
<p><em>Read the text and answer Questions 8-14.</em></p>

<h2 style="text-align:center"><strong>The Bike Foundry</strong></h2>
<p>The Bike Foundry aims to promote cycling, and to make an environmentally-friendly means of transport and leisure available to as many people as we can.</p>
<p><strong>Our Bikes</strong></p>
<p>All our bikes are hand-restored by our team and come with a three months' guarantee. We stock bikes to suit different needs, at affordable prices. We gratefully accept donations of unwanted bikes.</p>
<p><strong>Training</strong></p>
<p>We offer maintenance and cycle training to schools and small groups on their own premises. Additionally we provide training to individuals and groups in our workshops.</p>
<p><strong>Maintenance Training</strong></p>
<p><u>Bike Basics</u></p>
<p>This is a three-hour course which will teach you everything you need to know to keep on top of simple maintenance issues like looking after brakes and gears and how to repair a puncture. By the end of the course you'll know how to take good care of your bike.</p>
<p><u>Home Mechanics</u></p>
<p>This twelve-hour course consists of teaching you how to use specialist tools and how to fit compatible replacement parts. It's aimed at those who have completed Bike Basics or have some prior knowledge.</p>
<p>Courses are run regularly for groups of up to four trainees. We use professional mechanics' tools and employ experienced staff. Most importantly we have tea- and coffee-making facilities and a fridge where participants can keep their sandwiches, etc. Unfortunately our training room is up a flight of stairs.</p>
<p>For £10 a year you can join our Tool Club. Membership gives you access to our workshop for one evening a week. If you want to repair your bike and know how to fit it, but lack specialist tools, then join our club. There's a range of reference manuals available and a mechanic to offer advice.</p>
<p><strong>Cycling Training</strong></p>
<p>Our qualified instructors can teach you how to ride your bike, whether you have had prior experience or not. If you're already riding and would like to build your confidence, we can teach you safe techniques to negotiate traffic.</p>
<p><strong>Booking Information</strong></p>
<p>To book a place, email training@bikefoundry.org</p>
<p>We ask for a 50% deposit to confirm your place, refundable up to seven days before the course.</p>
`,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 1,
                    title: 'Questions 1-7',
                    instruction: 'Look at the six advertisements for evening courses, A-F. For which evening course are the following statements true?',
                    paragraphRange: 'A-F',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E', 'F'],
                    items: [
                        { description: 'After taking this course, participants will be able to teach their skills to others.' },
                        { description: 'Participants will be expected to prepare at home for each class.' },
                        { description: 'Certain materials will be included in the course fee.' },
                        { description: 'This course aims to teach people to prepare meals for guests.' },
                        { description: 'This course will help participants to make the best use of a certain item.' },
                        { description: 'This course is for people who want to do more than follow instructions.' },
                        { description: 'Following this course should improve participants\' health.' }
                    ]
                },
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 8,
                    title: 'Questions 8-14',
                    instruction: 'Do the following statements agree with the information given in the text?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'The Bike Foundry sells only second-hand bicycles.' },
                        { statement: 'All the training sessions are held at the Bike Foundry.' },
                        { statement: 'The Bike Basics course is aimed at new cyclists.' },
                        { statement: 'Snacks are provided for participants on the maintenance training courses.' },
                        { statement: 'Members of the Tool Club have access to cycle reference books.' },
                        { statement: 'Most of the participants on the Cycling Training courses are beginners.' },
                        { statement: 'People can cancel their place on a training course one week before it begins and still get their money back.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text and answer Questions 15-21.</em></p>

<h2 style="text-align:center"><strong>Benefits for staff of Hamberton Hospital</strong></h2>
<p>Our attractive benefits package is one of the ways we acknowledge the contribution they all make in the provision of high quality patient care. Our package is extensive and varied.</p>
<p>As a Hamberton employee you'll enjoy both National Health Service (NHS) and locally developed schemes, providing you with a range of benefits. These include:</p>
<p><strong>Financial Benefits</strong></p>
<p>• opportunity to contribute to the NHS Pension Scheme</p>
<p>• Injury Benefits Scheme</p>
<p>• excellent occupational sick pay and maternity leave and pay entitlements</p>
<p>• loans to assist with the purchase of housing for employees in the health service</p>
<p><strong>Work-Life Balance</strong></p>
<p>Here at Hamberton we are committed to helping all employees balance their work and home life commitment. We believe by helping people make this balance we are able to recruit, retain and motivate the most valuable asset of the NHS - our employees. We are committed to making this balance work for all employees equally, not just parents.</p>
<p>Over 50% of our staff work part-time in a range of flexible working options, which include:</p>
<p>• job sharing</p>
<p>• term-time-only working</p>
<p>• part-time working</p>
<p>• individually-tailored working patterns</p>
<p>We also support employees further through our caring and special leave arrangements.</p>
<p><strong>Health</strong></p>
<p>• our own occupational health department, providing a totally confidential service open to all staff during normal working hours</p>
<p>• a round-the-clock free and confidential counselling service</p>
<p>• policies supporting phased return to work after long illnesses or injuries</p>
<p><strong>Other Benefits</strong></p>
<p>On-site facilities include:</p>
<p>• excellent food provided in our restaurant</p>
<p>• ample parking</p>
<p>• retail outlets</p>
<p><strong>NHS Discounts</strong></p>
<p>All NHS employees can access the NHS Discounts scheme. This allows members of staff free access to a number of discounted products and services. For example, discounts are available at many high street shops and elsewhere, including savings on toys, utility bills, days out, and much more.</p>
<p><strong>Red Guava</strong></p>
<p>This is a further discount benefit, which is available to employees of Hamberton. Red Guava provides discounts on holidays, for example, and can save you money in many other ways too.</p>

<hr/>
<p><em>Read the text and answer Questions 22-27.</em></p>

<h2 style="text-align:center"><strong>Performance-related pay</strong></h2>
<p>There are a number of reasons why your employer might introduce this type of pay scheme. They may:</p>
<p>• be keen to retain staff</p>
<p>• want to compete for new talent</p>
<p>• be seeking a fairer way of distributing wages.</p>
<p>In order for performance-related schemes to work they should be based on clear, measurable targets agreed by both employer and employee. You will normally find out about these targets from your contract of employment and the performance appraisal meetings you have with your manager.</p>
<p><strong>Short-term schemes</strong></p>
<p>Short-term schemes usually offer bonus payment, or, depending on the type of work, commission on sales achieved. Payments vary and these schemes are normally used just to encourage staff to improve their own performance.</p>
<p><strong>Long-term schemes</strong></p>
<p>Long-term schemes offer rewards like share options, and can help to encourage loyalty to the organisation and its aims. Such schemes tend to be used as a way of retaining senior staff.</p>
<p><strong>What to do if you have problems</strong></p>
<p>If you don't receive bonus or commission payments which you believe you are owed, check your contract of employment or staff handbook to see how your bonus is paid. Ask your employer if you need more information.</p>
<p>If you think a mistake has been made, you should:</p>
<p>• speak to your employer to see if there has been a misunderstanding</p>
<p>• ask your employer to set out in writing how they have calculated your pay</p>
<p>• keep copies of any letters and notes of any meetings.</p>
<p>There are three ways that the law might cover a case of unpaid bonuses:</p>
<p>• breach of contract</p>
<p>• unlawful deductions from wages</p>
<p>• unlawful discrimination.</p>
<p><strong>Deductions from wages / breach of contract</strong></p>
<p>Any right to a bonus will normally be included in your contract of employment. It may not always be written down. It can be verbally agreed or understood to be there due to normal practice in your particular area of business.</p>
<p>Failure to pay a bonus or commission that you are entitled to could amount to an unlawful deduction of wages.</p>
<p><strong>Discrimination</strong></p>
<p>Your employer must not discriminate against particular groups of people, for example, by giving smaller bonuses to women. Ideally your employer should have some guidelines setting out the normal range of bonuses to give, and these must be followed without discriminating against any specific group.</p>
`,
            questions: [
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 15,
                    title: 'Questions 15-21',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    items: [
                        { prefix: 'The hospital provides benefits to show its recognition of the', suffix: 'of staff to its work.' },
                        { prefix: 'Financial benefits include pay for staff who are', suffix: 'or on maternity leave.' },
                        { prefix: '', suffix: 'are available for staff who wish to buy a home.' },
                        { prefix: 'Helping staff with their work-life balance is not restricted to', suffix: '.' },
                        { prefix: 'The hospital has', suffix: 'that are designed to help staff return to work after a long absence.' },
                        { prefix: 'The facilities on hospital premises include a large area for', suffix: '.' },
                        { prefix: 'The cost of', suffix: 'is reduced by using the Red Guava scheme.' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 22,
                    title: 'Questions 22-27',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Performance-related pay',
                    items: [
                        { prefix: 'One of the reasons for introducing performance-related pay is in order to', suffix: 'existing employees.' },
                        { prefix: 'Employer and employee should agree on some', suffix: 'that can be measured.' },
                        { prefix: 'Short-term schemes: bonus or the payment of a', suffix: 'related to sales.' },
                        { prefix: 'Long-term reward schemes: generally offered to employees at a', suffix: 'level.' },
                        { prefix: 'If you think there has been a mistake with your pay, keep records of any relevant', suffix: '.' },
                        { prefix: 'It is illegal for employers to discriminate against any specific group, e.g. by giving less money to', suffix: '.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>Marine Ecosystems</strong></h2>
<p><strong>A</strong></p>
<p>For some time now, the world's oceans and the people who fish them have been a constant source of bad environmental news: cod is effectively an endangered species of fish in some places now; every year thousands of dolphins are injured by fishing vessels; huge tuna farms are ruining the Mediterranean Sea.</p>
<p>What is more, marine biologists recently warned that our seafood is in terminal decline. According to research published in <em>Science</em> last November, stocks of all the fish and shellfish that we currently eat will collapse before 2050. Or at least, that's how the media reported it.</p>
<p><strong>B</strong></p>
<p>However, the scientist who led the study has said that the main conclusion of his research has been buried beneath the headlines. While the danger to our seafood supply is real enough, says Boris Worm, assistant professor of marine conservation biology at Dalhousie University, Canada, there is a more serious point: that the way in which we manage the oceans is not only threatening the survival of individual species, it's upsetting the delicate balance of marine communities and thus causing the collapse of entire ecosystems. Research has shown that the number of ecosystems where all higher forms of life are extinct, so-called dead zones, is increasing.</p>
<p>The point that many reports failed to highlight, says Worm, is that we have to revolutionise the way our marine resources are run, changing the focus from stocks and quotas to biodiversity and ecosystem protection. And to do that, we must change the way the debate about our marine resources is conducted in the public domain.</p>
<p><strong>C</strong></p>
<p>Around 7,500 years ago, shrinking glaciers and the resulting higher water levels led to the development of what's called the Wadden Sea, a 13,500-square-kilometre area of the North Sea. During the first 5,000 years or so, the sea pulsated with life. There was a high level of biodiversity on the seabed too, and the salt marshes and mud flats on the coast supported millions of birds. This continued until around 2,000 years ago, when human pressure began to affect it. Research has shown that some of the larger creatures disappeared more than 500 years ago. And by the late 19th century, populations of most of the other mammals and fish were severely reduced, leading to the collapse of several traditional fisheries.</p>
<p><strong>D</strong></p>
<p>What's interesting is that overfishing isn't the main agent of the decline, as we might assume. It's due to an ongoing combination of exploitation, habitat destruction and pollution. Coastal development, for example, destroys large areas of wetlands that support a range of species. Pollution fuels a process known as eutrophication, which kills certain seagrasses. Nutrients such as nitrogen and phosphorus contained in human and industrial waste promote the growth of tiny phytoplankton. This over-enrichment of the sea can ultimately lead to the collapse of the entire system through oxygen starvation.</p>
<p>Most marine ecosystems have an in-built capacity to deal with a certain amount of pollution because shellfish can absorb phytoplankton. But in many cases, these have been largely removed by fishing, so the effect of any nutrient-rich pollutants entering the system is increased. In a healthy system, coastal wetlands also act as filters, so their destruction causes even more pollution. These processes have been fairly well understood for a number of years.</p>
<p><strong>E</strong></p>
<p>What the <em>Science</em> paper has demonstrated, however, is that the decline in the health of ecosystems is greater where the number of different species is low. The population of marbled rock cod around the South Atlantic island of South Georgia, for example, still hasn't recovered after the fishing industry caused its collapse during the 1970s. By contrast, North Sea cod has withstood very heavy fishing for hundreds of years, says Worm, and although it has declined substantially, it hasn't yet collapsed completely. Worm believes that, 'to have a greater number of species makes an ecosystem more robust'. His theory is backed up by evidence from experiments into how ecosystems react to change.</p>
<p><strong>F</strong></p>
<p>And some positive news came from the study. Worm and his colleagues were able to show that it's possible to reverse such damage as long as there are enough species. A survey of 44 protected areas revealed increases in biodiversity and fish catches close to the reserves. Worm says, 'We should be focusing our attention on protecting all of our marine resources at the ecosystem level, and managing levels of fishing, pollution and habitat disturbance to ensure that crucial services that maintain the health of the ecosystem continue to function.' To anyone who knows anything about ecology, it would appear that Worm is just stating the obvious. And many protected areas on land are now managed in this way.</p>
<p><strong>G</strong></p>
<p>However, there has long been a tendency to view our oceans as a limitless resource, combined with a widespread failure to make an emotional connection with most marine wildlife. True, we have created a small number of marine protected areas. 'We seem to have understood the value of protecting ecosystems in areas such as the Australian Great Barrier Reef that we consider to be particularly beautiful,' says John Shepherd, Professor of Marine Sciences at Southampton University in the UK. 'Human nature will always draw us towards those species or habitats that are more aesthetically pleasing. That's why there will always be support for protecting pandas and very little for worms, even though nematodes play a vital role in maintaining the health of an ecosystem.'</p>
`,
            questions: [
                {
                    type: 'paragraph-headings',
                    startQuestionNumber: 28,
                    title: 'Questions 28-34',
                    instruction: 'Choose the correct heading for each section from the list of headings below.',
                    options: [
                        { value: 'i', text: 'Plans for more marine protected areas' },
                        { value: 'ii', text: 'A historical overview of one specific area' },
                        { value: 'iii', text: 'Why more has not been done to save marine creatures' },
                        { value: 'iv', text: 'What the press has missed' },
                        { value: 'v', text: 'Where biodiversity has been shown to help' },
                        { value: 'vi', text: 'Who is currently being blamed' },
                        { value: 'vii', text: 'A reason for some optimism' },
                        { value: 'viii', text: 'Various factors other than fishing' }
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
                    type: 'multiple-choice',
                    startQuestionNumber: 35,
                    title: 'Questions 35-37',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: 'Boris Worm\'s main concern is that',
                            options: [
                                { value: 'A', text: 'marine ecosystems will completely break down.' },
                                { value: 'B', text: 'insufficient attention is being paid to fish numbers.' },
                                { value: 'C', text: 'there will no longer be enough seafood for people to eat.' },
                                { value: 'D', text: 'politicians will be unwilling to discuss marine resources.' }
                            ]
                        },
                        {
                            question: 'What point does John Shepherd make?',
                            options: [
                                { value: 'A', text: 'Marine conservation areas are not high on the list of visitor attractions.' },
                                { value: 'B', text: 'People know very little about how different species actually live.' },
                                { value: 'C', text: 'The public are much less likely to help unattractive creatures.' },
                                { value: 'D', text: 'The marine environment was better understood in the past.' }
                            ]
                        },
                        {
                            question: 'Which of the following best summarises the text as a whole?',
                            options: [
                                { value: 'A', text: 'Scientists disagree about the state of the world\'s oceans.' },
                                { value: 'B', text: 'A radical review of marine resource management is needed.' },
                                { value: 'C', text: 'The fishing industry is mainly responsible for today\'s problems.' },
                                { value: 'D', text: 'The natural systems of our seas will not be able to repair themselves.' }
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
                    sectionTitle: 'The Wadden Sea',
                    items: [
                        { prefix: 'The Wadden Sea was created when the sea rose as a consequence of', suffix: 'slowly contracting.' },
                        { prefix: 'The waters were full of different species of marine creatures, and there were large numbers of', suffix: 'living on the wetlands along the shore.' },
                        { prefix: 'At the same time there has been an increase in some nutrients in the Wadden Sea which can also destroy marine creatures and vegetation by depriving them of', suffix: ', which is essential for their survival.' }
                    ]
                }
            ]
        }
    ]
};
