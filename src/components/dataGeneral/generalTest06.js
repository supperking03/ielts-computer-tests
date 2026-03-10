export const generalTest06 = {
    id: 106,
    title: 'General Reading Practice Test 06',
    correctAnswers: [
        // Q1-7: paragraph matching A-E
        'C', 'A', 'B', 'E', 'D', 'A', 'B',
        // Q8-14: TRUE/FALSE/NOT GIVEN
        'FALSE', 'FALSE', 'NOT GIVEN', 'NOT GIVEN', 'TRUE', 'TRUE', 'TRUE',
        // Q15-20: sentence completion
        'clarification', 'discount', 'disciplinary', 'pain', 'storage', 'machinery',
        // Q21-27: note completion
        'list', 'tool', 'energy', 'electronics', 'needs', 'permission', 'limitations',
        // Q28-35: paragraph matching A-G
        'E', 'C', 'B', 'A', 'D', 'B', 'G', 'A',
        // Q36-40: sentence completion
        'permit', 'earthquakes', 'storm', 'roadway', 'pedestrians'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-7.</em></p>

<h2 style="text-align:center"><strong>Five reviews of the Wellington Hotel</strong></h2>
<p><strong>A</strong></p>
<p>My husband and I first stayed at the Wellington a few years ago, and we’ve returned every year since then. When we arrive and check in, we’re always treated like old friends by the staff, so we very much feel at home. Our one disappointment during our last visit was that our room overlooked the car park, but that didn’t spoil our stay.</p>
<p><strong>B</strong></p>
<p>The hotel hardly seems to have changed in the last hundred years, and we prefer that to many modern hotels, which tend to look the same as each other. The Wellington has character! Our room was very comfortable and quite spacious. We can strongly recommend the breakfast, though we had to wait for a table as the hotel was so full. That was a bit annoying, and there was also nowhere to sit in the lounge.</p>
<p><strong>C</strong></p>
<p>We made our reservation by phone without problem, but when we arrived the receptionist couldn’t see it on the computer system. Luckily there was a room available. It wasn’t quite what we would have chosen, but it was a pleasure to sit in it with a cup of tea, and look out at the swimmers and surfers in the sea.</p>
<p><strong>D</strong></p>
<p>We’d be happy to stay at the Wellington again. Although there’s nothing special about the rooms, the view from the lounge is lovely, and the restaurant staff were friendly and efficient. Breakfast was a highlight – there was so much on offer we could hardly decide what to eat. We’d stay another time just for that!</p>
<p><strong>E</strong></p>
<p>The staff all did their jobs efficiently, and were very helpful when we asked for information about the area. The only difficulty we had was making our reservation online – it wasn’t clear whether payment for our deposit went through or not, and I had to call the hotel to find out. Still, once we’d arrived, everything went very smoothly, and we had a delicious dinner in the restaurant.</p>

<hr/>
<p><em>Read the text below and answer Questions 8-14.</em></p>

<h2 style="text-align:center"><strong>Come and play walking football or walking netball</strong></h2>
<p>Walking football and netball have become increasingly popular in recent years, but do you know you can take part in this area? The names make it clear what they are – two of the country’s favourite sports where, instead of running, the players walk. It’s as simple as that.</p>
<p>Walking football was invented in the UK in 2011, but it was a 2014 TV commercial for a bank, showing it providing financial support to someone who wanted to set up a website for the game, that brought it to people’s attention. Since then, tens of thousands of people — mostly, though not only, over the age of 50 — have started playing, and there are more than 800 walking football clubs. Both men and women play walking football, but at the moment the netball teams consist only of women. However, men are beginning to show an interest in playing.</p>
<p>The two games are designed to help people to be active or get fit, whatever their age and level of fitness. In particular, they were invented to encourage older men and women to get more exercise, and to give them a chance to meet other people. Regular physical activity helps to maintain energy, strength and flexibility. You can start gently and do a little more each session. The benefits include lower heart rate and blood pressure, greater mobility, less fat and more muscle.</p>
<p>Many players have given up a sport – either through age or injury – and can now take it up again. They’re great ways for people to enjoy a sport they used to play and love, and keep active at the same time, though people who have never played the standard game before are also very welcome.</p>
<p>The local councils Active Lifestyles Team runs sessions at all the council’s leisure centres. Come alone or with a friend, and enjoy a friendly game on Monday or Saturday afternoons, or Tuesday or Thursday evenings. Each session costs £3 per person, and you don’t have to come regularly or at the same time each week. Our aim is to set up netball and football clubs as soon as there are enough regular players.</p>
`,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 1,
                    title: 'Questions 1-7',
                    instruction: 'Look at the five online reviews of the Wellington Hotel, A-E. Which review mentions the following?',
                    paragraphRange: 'A-E',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E'],
                    items: [
                        { description: 'liking the view from the bedroom window' },
                        { description: 'finding the receptionists welcoming' },
                        { description: 'being pleased with the bedroom' },
                        { description: 'becoming confused when booking a room' },
                        { description: 'being impressed by the wide choice of food' },
                        { description: 'staying in the hotel regularly' },
                        { description: 'finding it inconvenient that the hotel was crowded' }
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
                        { statement: 'Walking football became well-known when a club featured in a TV programme about the sport.' },
                        { statement: 'The majority of walking netball players are men.' },
                        { statement: 'Most clubs arrange social activities for their members.' },
                        { statement: 'Players are tested regularly to measure changes in their fitness.' },
                        { statement: 'People who have never played football are encouraged to play walking football.' },
                        { statement: 'People can take part in the Active Lifestyles Team’s sessions whenever they wish.' },
                        { statement: 'The Active Lifestyles Team intends to start clubs in the future.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-20.</em></p>

<h2 style="text-align:center"><strong>Dress regulations at work</strong></h2>
<p>Your contract may state that you need to dress in a certain manner or wear a uniform. Your contract might also state that you need to dress ‘smartly’, rather than specifying any particular garments. As you might well have conflicting ideas of what counts as smart’, you should ask your employer for clarification. Many employers that have a strict dress code choose to provide clothing or a discount on clothing. However, this is not necessarily compulsory for the employer and is a factor you need to consider when taking a job.</p>
<p><strong>Protective clothing and equipment</strong></p>
<p>Your employer can tell you to put on protective clothing and equipment (such as gloves, a visor, boots, etc.). If you don’t, your employer is entitled to take disciplinary action, which can include excluding you from the workplace.</p>
<p>You are required to:</p>
<ul>
  <li>co-operate with your employer on health and safety</li>
  <li>correctly use work items provided by your employer, including protective equipment, in accordance with instructions</li>
  <li>not interfere with or misuse anything provided for your health and safety or welfare.</li>
</ul>
<p>Of course, any protective gear has to fit and be appropriate for the situation. It shouldn’t cause you pain. If it does, you should negotiate alternative equipment or arrangements. Don’t be put off. Sometimes employers can, out of caution, interpret health and safety rules unnecessarily rigidly. And of course, you shouldn’t be required to pay for any protective equipment or clothing that you need. However, if your employer buys the gear, they are entitled to keep it when you leave.</p>
<p>The obligation to maintain protective clothing lies with the employer. The employer is also required to provide an appropriate storage space to keep the protective equipment in when it is not being used. And finally, the employer must provide the equipment and service free of charge to the employee.</p>
<p><strong>Jewellery</strong></p>
<p>Banning employees from wearing jewellery and loose clothing may be justified to prevent a potential hygiene hazard if you work in areas of food production or areas which need to be kept sterile.</p>
<p>Likewise, your employer can judge that loose jewellery may constitute a snagging hazard if you operate machinery. If you think restrictions are not justified by health and safety concerns, talk to your workplace union rep if you have one, as they may know of solutions to the problem which other employees have used before.</p>

<hr/>
<p><em>Read the text below and answer Questions 21-27.</em></p>

<h2 style="text-align:center"><strong>How to achieve a better work-life balance</strong></h2>
<p>As more and more employees work from home full time and everyone has 24/7 access to email, balancing work and family may not seem like an easily attainable goal. So how can you juggle the demands of both worlds? Below are some tips to help you get started.</p>
<p>It’s easy to get sucked into habits that, make us less efficient without realizing it – like keeping your social media page open at work so you don’t miss something ‘important’. Draw up a list with all the activities that don’t enhance your life or career. Then minimize the time you spend on them.</p>
<p>It’s hard to say no’, especially to a supervisor or loved one, but sometimes that powerful little word is essential. Learn to use ‘no’ judiciously and it will become a powerful tool in balancing work and family.</p>
<p>Research shows that exercise helps you remain alert. Finding time to hit the gym may be hard, but it will ultimately help you get more things done because exercise really boosts energy and improves your ability to concentrate.</p>
<p>Study after study shows that significant sleep deprivation affects your health and well-being. Exposure to electronics can significantly negatively impact your sleep, so try to unplug an hour before you go to sleep.</p>
<p>What would you do if you had a whole day to yourself with no demands on your time? While most people don’t have the luxury of a whole day dedicated to relaxation, constantly putting off that downtime and putting everyone’s needs before yours will wear you down. Pick a time to do something just for you. Even just a few minutes of ‘me time’ a day will help to recharge your batteries.</p>
<p>Don’t assume your family and manager are aware of your concerns. If you feel you have to adjust your schedule to discover a better work-life balance, then voice that requirement. If that means asking your boss for permission to leave a few minutes early once a week so you can hit that yoga class on the way home, do it.</p>
<p>All new habits require time to build, so if you find yourself sneaking your smartphone to bed, that’s okay. Leave your phone downstairs tomorrow night. Tiny steps are the key to finding that balance, so start small, and go from there. Most of all, know your limitations and what works best for you; then decide what really matters, what advice you want to follow, and prioritize.</p>
`,
            questions: [
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 15,
                    title: 'Questions 15-20',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    items: [
                        { prefix: 'If employees are unsure what their company wishes them to wear for work, they should request', suffix: '' },
                        { prefix: 'Some companies offer their employees a', suffix: 'when they buy items to wear for work.' },
                        { prefix: 'Employees who fail to wear protective clothing when required could be subject to', suffix: 'procedures.' },
                        { prefix: 'Employees ought not to be in', suffix: 'because of protective clothing or equipment.' },
                        { prefix: 'It is the company’s responsibility to ensure that there is a suitable place for the', suffix: 'of protective equipment.' },
                        { prefix: 'Employees who work with certain types of', suffix: 'may have to remove jewellery to avoid potential injuries.' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 21,
                    title: 'Questions 21-27',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Achieving a better work-life balance',
                    items: [
                        { prefix: 'How to begin: Make a complete', suffix: 'of things that are not helpful and reduce involvement in them' },
                        { prefix: 'Refuse some requests as this can be a useful', suffix: 'in gaining a better work-life balance' },
                        { prefix: 'Regular exercise can increase', suffix: 'significantly' },
                        { prefix: 'Avoid focusing on', suffix: 'in the lead-up to bedtime' },
                        { prefix: 'Those who see other people’s', suffix: 'as more important than their own will suffer' },
                        { prefix: 'If the working day is too long, get', suffix: 'to shorten it occasionally' },
                        { prefix: 'People should learn to recognise their own', suffix: '' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>San Francisco’s Golden Gate Bridge</strong></h2>
<p><strong>A</strong></p>
<p>For several decades in the nineteenth century, there were calls to connect the rapidly growing metropolis of San Francisco to its neighbours across the mile-wide Golden Gate Strait, where San Francisco Bay opens onto the Pacific Ocean. Eventually, in 1919, officials asked the city engineer, Michael O’Shaughnessy, to explore the possibility of building a bridge. He began to consult engineers across the USA about the feasibility of doing so, and the cost. Most doubted whether a bridge could be built at all, or estimated that it would cost $100 million. However, a Chicago-based engineer named Joseph Strauss believed he could complete the project for a modest $25 to $30 million. After his proposal was accepted, Strauss set about convincing the communities on the northern end of the strait that the bridge would be to their benefit, as well as to that of San Francisco. With population centres growing fast, there was severe traffic congestion at the ferry docks, and motor vehicle travel by ferry was fast exceeding capacity.</p>
<p><strong>B</strong></p>
<p>The bridge could not be constructed without the agreement of the US War Department, which owned the land on each side of the Strait and had the power to prevent any harbour construction that might affect shipping traffic. In 1924, San Francisco and Marin counties applied for a permit to build a bridge, and after hearing overwhelming arguments in favour of the project, the Secretary of War agreed. Despite the economic benefits promised by its supporters, the project met fierce resistance from a number of businesses – particularly ferry companies – and civic leaders. Not only would the bridge be an obstacle to shipping and spoil the bay’s natural beauty, they argued, it wouldn’t survive the sort of earthquake that had devastated the city in 1906. Eight years of legal actions followed as opponents tried to prevent it from being built.</p>
<p><strong>C</strong></p>
<p>Meanwhile, Strauss’s team scrapped their original plans in favour of a suspension span capable of moving more than two feet to each side: this would withstand strong wind far better than a rigid structure. They also planned the two towers, and decided on a paint colour they called ‘international orange’.</p>
<p><strong>D</strong></p>
<p>O’Shaughnessy, Strauss and the Secretary to the Mayor of San Francisco believed a special district needed to be created, with responsibility for planning, designing and financing construction. The formation of this district would enable all the counties affected by the bridge to have a say in the proceedings. This happened in 1928, when the California legislature passed an act to establish the Golden Gate Bridge and Highway District, consisting of six counties. In 1930, residents voted on the question of whether to put up their homes, their farms and their business properties as security for a $35 million bond issue to finance construction. The outcome was a large majority in favour.</p>
<p>However, the District struggled to find a financial backer amid the difficulties of the Great Depression, a problem made worse by years of expensive legal proceedings. Now desperate, Strauss personally sought help from the President of Bank of America, who provided a crucial boost by agreeing to buy $6 million in bonds in 1932.</p>
<p><strong>E</strong></p>
<p>Construction began in January 1933, with the excavation of a vast amount of rock to establish the bridge’s two anchorages – the structures in the ground that would take the tension from the suspension cables. The crew consisted of virtually anyone capable of withstanding the physical rigours of the job, as out-of-work cab drivers, farmers and clerks lined up for the chance to earn steady wages as ironworkers and cement mixers.</p>
<p>The attempt to build what would be the first bridge support in the open ocean proved an immense challenge. Working from a long framework built out from the San Francisco side, divers plunged to depths of 90 feet through strong currents to blast away rock and remove the debris. The framework was damaged when it was struck by a ship in August 1933 and again during a powerful storm later in the year, setting construction back five months.</p>
<p><strong>F</strong></p>
<p>The two towers were completed in June 1935, and a New Jersey-based company was appointed to handle the on-site construction of the suspension cables. Its engineers had mastered a technique in which individual steel wires were banded together in spools and carried across the length of the bridge on spinning wheels. Given a year to complete the task, they instead finished in just over six months, having spun more than 25,000 individual wires into each massive cable.</p>
<p>The roadway was completed in April 1937, and the bridge officially opened to pedestrians the following month. The next day, President Roosevelt announced its opening via White House telegraph.</p>
<p><strong>G</strong></p>
<p>The Golden Gate has endured as a marvel of modern engineering; its main span was the longest in the world for a suspension bridge until 1981, while its towers made it the tallest bridge of any type until 1993. It withstood a destructive earthquake in 1989 and was closed to traffic only three times in its first 75 years due to weather conditions. Believed to be the most photographed bridge in the world, this landmark was named one of the seven civil engineering wonders of the United States by the American Society of Civil Engineers in 1994.</p>
`,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 28,
                    title: 'Questions 28-35',
                    instruction: 'The text has seven sections, A-G. Which section mentions the following?',
                    paragraphRange: 'A-G',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                    items: [
                        { description: 'why it was easy to recruit workers to build the bridge' },
                        { description: 'a change in the design of the bridge' },
                        { description: 'opposition to building the bridge' },
                        { description: 'why a bridge was desirable' },
                        { description: 'problems with raising funding for the bridge' },
                        { description: 'permission being given to build the bridge' },
                        { description: 'which records the bridge broke' },
                        { description: 'the idea that building a bridge might be impossible' }
                    ]
                },
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 36,
                    title: 'Questions 36-40',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    items: [
                        { prefix: 'Building the bridge required a', suffix: 'issued by the Secretary of War.' },
                        { prefix: 'One objection to building the bridge was that another', suffix: 'would destroy it.' },
                        { prefix: 'Construction was delayed when the framework was damaged by a ship and again by a', suffix: '' },
                        { prefix: 'The last part of the bridge to be constructed was the', suffix: '' },
                        { prefix: 'The bridge was first used by', suffix: 'in May 1937.' }
                    ]
                }
            ]
        }
    ]
};
