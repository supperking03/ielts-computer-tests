export const generalTest11 = {
    id: 111,
    title: 'General Reading Practice Test 11',
    correctAnswers: [
        // Q1-7: TRUE/FALSE/NOT GIVEN
        'TRUE', 'TRUE', 'TRUE', 'NOT GIVEN', 'FALSE', 'FALSE', 'NOT GIVEN',
        // Q8-14: paragraph matching A-G
        'E', 'F', 'D', 'C', 'D', 'A', 'G',
        // Q15-22: note completion
        'law', 'equipment', 'concerns', 'breaks', 'risk', 'training', 'injuries', 'medication',
        // Q23-27: paragraph matching A-G
        'F', 'E', 'G', 'D', 'A',
        // Q28-31: matching
        'C', 'D', 'B', 'A',
        // Q32-34: multiple choice
        'B', 'A', 'C',
        // Q35-40: fill in blanks
        'brown', 'sunlight', 'transpiration', 'weight', 'fingers', 'moisture'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-7.</em></p>

<h2 style="text-align:center"><strong>New York Late-Starters String Orchestra</strong></h2>
<p>NYLSO, the New York Late-Starters String Orchestra, is something special. It was founded in early 2007, and grew out of a concept developed by The East London Late Starters Orchestra (ELLSO), an award-winning group in England. NYLSO is an amateur orchestra for adult players of violin, viola, cello, and double bass. If you played a string instrument when you were younger and would like to start again, or if you are learning as an adult and would like the chance to play in a group of similar people, then NYLSO is for you! Our goal is to create a fun, supportive, non-competitive environment for adults 18 to 80+ who wish to participate in collective music-making.</p>
<p>Participants should have basic music reading skills and a willingness to commit to the group, but are not required to audition. It is recommended that you have studied your instrument for at least one year. If you have ever been paid to play your instrument, recently graduated with a degree in performance, or have been playing continuously since elementary school, you may decide we are not the appropriate group for you.</p>
<p><strong>How We Work:</strong></p>
<p>We know that New Yorkers are busy people. It is fine if you miss an entire rehearsal period when an emergency arises. Ultimately, though, too many absences disrupt the function of the group and make it difficult to perform the pieces. Sessions are in six-week rehearsal cycles, with two-hour rehearsals held once a week. We work with the goal of producing one to three very informal friends-and-family concerts per year.</p>
<p>Our professional tutor/facilitator serves as coach and conductor during rehearsals. Substitute conductors also join in to teach different sections, providing groups of players with valuable experience in working with different approaches and styles. Everyone is encouraged to play to their fullest potential, whatever that may be, but please recognize that while we do have a conductor, her role is not to provide one-on-one instruction during rehearsals.</p>
<p>NYLSO is a self-supporting collective; we do not receive any other funding. The cost is $80 for each six-week cycle. Payments are applied to the costs of rehearsal space, conductor's fees, and photocopying music.</p>
<p><strong>Materials You Will Need At Rehearsals:</strong></p>
<p>You will need an instrument, a portable music stand, and any other relevant accessories. You should bring a folder to keep your music together and a soft-lead pencil with an eraser for writing in changes. Sheet music is provided.</p>

<hr/>
<p><em>Read the advertisements below and answer Questions 8-14.</em></p>

<h2 style="text-align:center"><strong>The 7 best running watches</strong></h2>
<p><em>Kate Hilpern advises people on the best watches to use when they go running.</em></p>
<p><strong>A Soleus FIT 1.0</strong></p>
<p>Soleus claims this has everything you need and nothing you don't. Water-resistant to 30m and with a built-in rechargeable battery, it's accurate at measuring speed, pace, distance and calories burnt.</p>
<p><strong>B Nike+ SportWatch GPS</strong></p>
<p>You'll be hard pushed to find a running watch that finds a GPS signal quicker than this. It will keep you updated on current location, distance covered, number of laps and calories burnt.</p>
<p><strong>C Garmin Forerunner</strong></p>
<p>This watch, which is small enough to wear at the office, is touchscreen and is packed with impressive features, although the battery life is limited.</p>
<p><strong>D Timex Run Trainer 2.0</strong></p>
<p>The hi-res screen makes this a great watch for athletes at any level. The easy-to-use, upgraded menu system makes monitoring pace, speed and distance child's play. Alerts remind you when it's time to hydrate or top up the nutrition.</p>
<p><strong>E Garmin Forerunner 10</strong></p>
<p>This is a well-priced, entry-level watch that's light as well as waterproof and available in a range of colours. Don't expect added extras, but do expect good basic functionality.</p>
<p><strong>F Nike Fuelband</strong></p>
<p>Described by the Huffington Post as 'the sports watch you never knew you needed,' this soft-touch and lightweight watch has been lovingly designed to appear more like a piece of futuristic jewellery than a running watch. But it's hi-tech too and synchronises with your phone to show the results.</p>
<p><strong>G Suunto Ambit2 S HR</strong></p>
<p>This is better suited to off-roaders rather than urban runners and although it's quite big, it has a functional design and is compatible with the thousands of Suunto apps available.</p>
`,
            questions: [
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 1,
                    title: 'Questions 1-7',
                    instruction: 'Do the following statements agree with the information given in the text?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'The idea behind NYLSO was based on another orchestra.' },
                        { statement: 'An ability to read music is essential.' },
                        { statement: 'The NYLSO might be unsuitable for very advanced level musicians.' },
                        { statement: 'NYLSO concerts are free to members’ families and friends.' },
                        { statement: 'Rehearsals always involve the full orchestra playing together.' },
                        { statement: 'The conductor provides her services free to NYLSO.' },
                        { statement: 'The NYLSO gives advice on what instrument to purchase.' }
                    ]
                },
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 8,
                    title: 'Questions 8-14',
                    instruction: 'Look at the seven advertisements for running watches, A-G. For which running watch are the following statements true?',
                    paragraphRange: 'A-G',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                    items: [
                        { description: 'This would be a suitable and not too expensive first watch for a runner.' },
                        { description: 'Care has been taken to make this watch very attractive to look at.' },
                        { description: 'This watch can be programmed to let the runner know when it is time to get some refreshment.' },
                        { description: 'This watch will need recharging at frequent intervals.' },
                        { description: 'Both experienced and inexperienced runners will find this watch useful.' },
                        { description: 'Runners will find all the features on this watch are useful.' },
                        { description: 'People who do most of their running in cities may find this watch is not appropriate for them.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-22.</em></p>

<h2 style="text-align:center"><strong>Employees' health and safety responsibilities</strong></h2>
<p>As an employee you have rights and you have responsibilities for your own wellbeing and that of your colleagues. This article explains what these responsibilities are, and how you can meet them.</p>
<p><strong>Your rights</strong></p>
<p>Your rights as an employee to work in a safe and healthy environment are set down in law and generally can't be changed or removed by your employer. The most important of these rights are:</p>
<ul>
  <li>as far as possible, to have any hazards to your health and safety properly controlled</li>
  <li>to be given any personal protective and safety equipment without being charged for it</li>
  <li>to stop work and leave your work area, without being disciplined, if you have reasonable concerns about your safety</li>
  <li>to tell your employer about any health and safety concerns you have</li>
  <li>not to be disciplined if you contact the Health and Safety Executive, or your local authority, if your employer won't listen to you</li>
  <li>to have breaks during the time you are at work</li>
  <li>to have time off from work during the working week</li>
  <li>to have annual paid holiday.</li>
</ul>
<p><strong>Your responsibilities</strong></p>
<p>Your most important responsibilities as an employee are:</p>
<ul>
  <li>to take reasonable care of your own health and safety</li>
  <li>to remove jewellery and avoid loose clothing when operating machinery</li>
  <li>if you have long hair, or wear a headscarf, make sure it's tucked out of the way as it could get caught in machinery</li>
  <li>to take reasonable care not to expose fellow employees and members of the public to risk by what you do or don't do in the course of your work</li>
  <li>to co-operate with your employer, making sure you complete the training that is provided and that you understand and follow the company's health and safety policies</li>
  <li>not to interfere with or misuse anything that's been provided for your health, safety or welfare</li>
  <li>to report any injuries you suffer as a result of doing your job - your employer may then need to change the way you work.</li>
</ul>
<p>If you drive or operate machinery, you have a responsibility to tell your employer if you take medication that makes you feel sleepy. If you do, they should temporarily move you to another job if they have one for you to do.</p>

<hr/>
<p><em>Read the text below and answer Questions 23-27.</em></p>

<h2 style="text-align:center"><strong>Our company notices</strong></h2>
<p><strong>A Advance warning</strong></p>
<p>Refurbishment of offices in the Perkins Building will start on Monday 22 May, and is expected to be completed by the end of June. Staff based in that building will be individually notified of where they'll work for that time. On the previous Friday, facilities staff will move everything that needs to go to your new office. Before then, please make a list of what should be moved, and another list of what can be stored.</p>
<p><strong>B Information about financial systems</strong></p>
<p>The review of the company's financial systems is now complete, and modifications will shortly be introduced. Jane Phillips from Finance will explain the changes and how they affect you, and answer any queries about them, between 12 and 1 pm on 15 March in Room 5.</p>
<p><strong>C Purchasing Manager</strong></p>
<p>As you probably know, Sadia Ahmed is leaving the company on 31 March, after ten years as Purchasing Manager. Her replacement, Jeff Bridges, will join us on the previous Monday. Jeff will be in Room 70 between 12 and 2 pm on 3 April: feel free to drop in and say hello to him during your lunch break.</p>
<p><strong>D We're doing well!</strong></p>
<p>We've received a large and urgent order from one of our major customers. As a result, we'll need to run the production line for an additional three hours each evening throughout the week beginning 13 March. Any production workers willing to do this shift in addition to their normal work should speak to the Production Manager asap.</p>
<p><strong>E Quality control</strong></p>
<p>Because of recent concerns about product quality, we're setting up a team to consider ways of raising quality and making recommendations for changes. As staff from any department might have useful ideas, anyone is welcome to join the team - ring Rodrigo Perez on 1012. It will involve fortnightly meetings and some research, over a six-month period.</p>
<p><strong>F New opportunity</strong></p>
<p>Dev Patel will cease to be part-time content editor of the company intranet at the end of April, as his new role in Marketing leaves him no time for it. We're looking for two people to take over. If you're interested, and can work an extra three or four hours a week (for extra pay, of course!), contact Maggie Campbell on 2146.</p>
<p><strong>G And finally...</strong></p>
<p>We hope to re-start the company tennis championship, which hasn't taken place for the last three years. If this is something for you, talk to Bill Sinclair on extension 2371. You don't need to be a star player!</p>
`,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 15,
                    title: 'Questions 15-22',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Health and Safety at Work',
                    items: [
                        { prefix: 'Employees’ rights are established by', suffix: 'and include the following:' },
                        { prefix: 'Any', suffix: 'needed for employees to work safely should be free.' },
                        { prefix: 'Employees may inform management of any', suffix: 'they have relating to health and safety.' },
                        { prefix: 'Employees are entitled to some', suffix: 'while they are working.' },
                        { prefix: 'Employees must avoid putting colleagues and others at', suffix: '.' },
                        { prefix: 'Employees must do any', suffix: 'that the employer offers.' },
                        { prefix: 'Employees must inform the employer of any', suffix: 'received while working.' },
                        { prefix: 'Employees must make sure the employer knows of any', suffix: 'they are taking that might affect performance.' }
                    ]
                },
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 23,
                    title: 'Questions 23-27',
                    instruction: 'Look at the seven notices for a company’s staff, A-G. For which company notice are the following statements true?',
                    paragraphRange: 'A-G',
                    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                    items: [
                        { description: 'Staff are needed to work on internal communications.' },
                        { description: 'People are needed to help improve an internal system.' },
                        { description: 'Staff are asked if they want to take part in an internal competition.' },
                        { description: 'Volunteers are asked to work overtime for a limited period.' },
                        { description: 'Staff will be told where to work temporarily.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>Vanilla - the most wonderful flavor in the world</strong></h2>
<p>Vanilla is the most popular and widely used flavor in the world. And, yet, the vanilla orchid is only grown in a few countries. Below you'll discover why these countries are ideal and how the vanilla from each region differs.</p>
<p><strong>Mexico</strong></p>
<p>Vanilla (<em>Vanilla planifolia</em> Andrews) originated in Mexico and for centuries was the exclusive secret of the native Totonac Indians, who were later conquered by the Aztecs. The Aztecs, in turn, were conquered by the Spanish forces led by Cortez in 1520. He brought vanilla pods home to Spain, thus introducing the flavorful pods to the rest of the world.</p>
<p>However, Mexico remained the sole grower of vanilla for another 300 years. The particular relationship between the vanilla orchid and an indigenous bee called the Melipone was crucial. It was responsible for pollinating the flowers, resulting in fruit production.</p>
<p>Vanilla pods should be picked when the tip begins to turn yellow. The curing process gives the pods their characteristic brown color as well as their flavor and aroma. In Mexico, farmers cure the pods by wrapping them in blankets and straw mats and then placing them in ovens for 24 to 48 hours. After that, the pods are spread outdoors to absorb heat during the day and then placed in wooden boxes overnight. Once properly cured, they are stored to further develop the flavor. The entire curing process takes three to six months, making it a very labor-intensive process.</p>
<p>Vanilla from Mexico has a flavor that combines creamy tones with a deep, spicy character, making it a delicious complement to chocolate, cinnamon and other warm spices. It also works wonderfully in tomato sauces.</p>
<p><strong>Madagascar</strong></p>
<p>Around 1793, a vanilla plant was smuggled from Mexico to the Island of Reunion, east of Africa. For almost 50 years, the production of vanilla struggled. The vines grew successfully with beautiful blossoms but vanilla pods were infrequent. Without the Melipone bee, the flowers weren't being fertilized beyond occasional pollination by other insects. It wasn't until 1836 that Charles Morren, a Belgian botanist, discovered the pollination link between bee and plant. And then in 1841, Edmond Albius of Reunion developed an efficient method for fertilizing the flower by hand. Now, growers could choose the best flowers to pollinate, resulting in a healthier and higher quality vanilla pod.</p>
<p>Eventually, the plants arrived on the nearby island of Madagascar, where hand pollination proved its worth. Assisted by the climate and rich soil, hand pollination by the country's skilled farmers has enabled Madagascar to become the world's top vanilla producer in quantity and, many would argue, quality.</p>
<p>The curing process is similar to that in Mexico with one difference. The farmers initiate the process by immersing the green vanilla pods in hot water for some time. They then store them in sweat boxes before beginning the routine of spreading them outdoors during the day and packing them away at night. The different curing method used contributes to the overall flavor of the vanilla.</p>
<p>The sweet, creamy and mellow flavor is the one most people identify with vanilla. This flavor and the pod's ability to hold that flavor in both hot and cold applications make it an exceptional all-purpose vanilla which is many people's first choice for a wide range of sweet recipes - from cooking and baking to ice creams and buttercreams.</p>
<p><strong>Tahiti</strong></p>
<p>Like the other countries, Tahiti's tropical climate makes it ideal for growing vanilla. However, Tahiti differs in the species of vanilla that is most common: <em>Vanilla tahitensis</em> Moore. This is the hybrid of two vanilla species introduced in the 1800s. These two species were skilfully crossed in the next few decades, to create the plump Tahitian vanilla pods we know today.</p>
<p>The curing process also differs from other countries'. Mature pods are first stacked in a cool place until they are completely <em>brown</em> (<em>five</em> to ten days) and then rinsed briefly in clear water, a unique characteristic of the method used in Tahiti. For the next month, growers expose the pods to the gentle morning sunlight. In the afternoon, they bind the pods in cloths and store them in crates until the next morning, to promote transpiration. Little by little, the vanilla pods lose weight and shrink. Throughout this phase, the workers carefully smooth and even out the pods with their fingers. Then after a month, the final step is to leave the pods in a shaded and well-ventilated spot for 40 days to lower their moisture content.</p>
<p>This species of orchid combined with Tahiti's advantageous climate and soil results in a vanilla that has fruity and sweet tones. Tahitian vanilla is especially vulnerable to heat and is therefore best used in refrigerated and frozen desserts, fruit pies and smoothies.</p>
<p><strong>Indonesia</strong></p>
<p>Indonesia is the second largest producer of vanilla. However, Indonesian production methods focus on quantity over quality. Unlike other regions, where vanilla beans are picked only when ripe, Indonesian growers harvest all the beans at one time, a labor-saving adjustment.</p>
<p>The curing process also features production shortcuts such as the use of propane heaters to speed up drying. The use of such heat, which chemically alters the beans, essentially burns off flavor components while adding a smoky tone, resulting in a less complex taste and a sharper flavor. Indonesian vanilla works well when blended with vanillas from other regions and, because it's more economical, it makes the end product more affordable.</p>
`,
            questions: [
                {
                    type: 'matching',
                    startQuestionNumber: 28,
                    title: 'Questions 28-31',
                    instruction: 'Match each statement with the correct country, A, B, C or D.',
                    items: [
                        { description: 'The vanilla that is grown here was created from more than one type of vanilla plant.' },
                        { description: 'This vanilla is often mixed with other types of vanilla.' },
                        { description: 'Some people claim that this country produces the finest vanilla.' },
                        { description: 'This vanilla goes well with both sweet and savoury ingredients.' }
                    ],
                    options: [
                        { value: 'A', label: 'Mexico' },
                        { value: 'B', label: 'Madagascar' },
                        { value: 'C', label: 'Tahiti' },
                        { value: 'D', label: 'Indonesia' }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 32,
                    title: 'Questions 32-34',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: 'What prevented countries, apart from Mexico, from growing vanilla in the 17th and 18th centuries?',
                            options: [
                                { value: 'A', text: 'the Aztecs’ refusal to let the pods be exported' },
                                { value: 'B', text: 'the lack of the most suitable pollinating insect' },
                                { value: 'C', text: 'the widespread ignorance of the existence of the plant' },
                                { value: 'D', text: 'the poor condition of the vanilla pods that Cortez collected' }
                            ]
                        },
                        {
                            question: 'What does the writer suggest was the main reason for the success of vanilla cultivation on Madagascar?',
                            options: [
                                { value: 'A', text: 'the adoption of a particular agricultural technique' },
                                { value: 'B', text: 'the type of vanilla orchid that was selected' },
                                { value: 'C', text: 'the unique quality of the soil on the island' },
                                { value: 'D', text: 'the rapidly increasing number of growers' }
                            ]
                        },
                        {
                            question: 'The writer believes that Madagascan vanilla is so popular because',
                            options: [
                                { value: 'A', text: 'it works well in a variety of main courses and puddings.' },
                                { value: 'B', text: 'its pod is less likely than others to break up when it is cooked.' },
                                { value: 'C', text: 'its taste is widely considered to be the standard taste of vanilla.' },
                                { value: 'D', text: 'it is the one that is used in a number of commercial frozen desserts.' }
                            ]
                        }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 35,
                    title: 'Questions 35-40',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'How vanilla pods are cured in Tahiti',
                    items: [
                        { prefix: 'Tahitian farmers start by leaving the pods to turn', suffix: 'all over.' },
                        { prefix: 'They place the pods in the', suffix: 'during the early part of the day.' },
                        { prefix: 'This procedure encourages', suffix: '.' },
                        { prefix: 'Gradually, the', suffix: 'of the individual pods starts to decrease.' },
                        { prefix: 'They use their', suffix: 'to flatten them out.' },
                        { prefix: 'For the last stage in the curing process, the pods are kept in a cool place which is open to the air, so that the amount of', suffix: 'within them is reduced.' }
                    ]
                }
            ]
        }
    ]
};
