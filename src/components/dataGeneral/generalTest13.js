export const generalTest13 = {
    id: 113,
    title: 'General Reading Practice Test 13',
    correctAnswers: [
        // Q1-8: paragraph matching A-G
        'G', 'D', 'B', 'A', 'F', 'D', 'E', 'C',
        // Q9-14: TRUE/FALSE/NOT GIVEN
        'FALSE', 'NOT GIVEN', 'TRUE', 'TRUE', 'FALSE', 'FALSE',
        // Q15-20: sentence completion
        'research', 'survey', 'mix', 'updates', 'information', 'reputation',
        // Q21-27: note completion
        'self(-)employed', 'average', 'agreement', 'checks', 'train', 'freedom', 'congestion',
        // Q28-30: summary completion
        'myths', 'levers', 'tools',
        // Q31-35: matching
        'F', 'E', 'B', 'D', 'A',
        // Q36-40: sentence completion
        'palace', 'trades', 'water', 'techniques', 'children'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-8.</em></p>

<p><strong>A   Bath International Music Festival</strong></p>
<p>From electronic to folk, jazz and classical, this festival is renowned for bringing world-class musicians to this historical city. Starting with a great night of free music, 'Party in the City' this year is going to be no exception.</p>
<p><strong>B   The Great Escape</strong></p>
<p>Often referred to as Europe's leading festival for new music, more than 300 bands will perform to around 10,000 people in 30-plus venues, meaning you're sure to see the next big thing in music.</p>
<p><strong>C   Springwatch Festival</strong></p>
<p>The much loved television series <em>Springwatch</em> celebrates the countryside as it does every year, with sheep herding, wood carving demonstrations, insect hunts and more activities, accompanied by live music and a great farmers' market, offering all sorts of mouth-watering produce.</p>
<p><strong>D   Wychwood Music Festival</strong></p>
<p>Rightly nominated for the best family festival award every year since it began in 2005, this festival offers a combination of different music genres, many featuring artists from around the Wychwood area, and comedy, alongside a selection of outdoor cafes serving amazing world foods.</p>
<p><strong>E   Love Food Festival</strong></p>
<p>Bringing together a selection of the finest produce, this festival aims to educate visitors about how food should be produced and where it should come from, through sampling a range of tasty treats, cooked on site.</p>
<p><strong>F   The 3 Wishes Faery Festival</strong></p>
<p>The UK's most magical event, this is a three-day festival of folk art, live music and fashion shows set in the beautiful wild surroundings of Bodmin Moor. If you don't fancy taking a tent, some local residents usually offer to put visitors up.</p>
<p><strong>G   Bath International Dance Festival</strong></p>
<p>Featuring demonstrations from world champion dancers and stars from the TV series <em>Strictly Come Dancing</em>, the festival promises toe-tapping action, including a world record attempt, where everyone is invited to join in.</p>

<hr/>
<p><em>Read the text below and answer Questions 9-14.</em></p>

<h2 style="text-align:center"><strong>BIG ROCK CLIMBING CENTRE</strong></h2>
<p>Big Rock Climbing Centre is a modern, friendly, professionally run centre offering over 1,250 square metres of fantastic indoor climbing. We use trained and experienced instructors to give you the opportunity to learn and develop climbing skills, keep fit and have fun. Master our 11 m-high climbing walls, using a rope harness, for an unbeatable sense of achievement. Or experience the thrills of climbing without any harness in our special low-level arena, which has foam mats on the floor to cushion any fall safely.</p>
<p><strong>Who is Big Rock for?</strong></p>
<p>Almost anyone can enjoy Big Rock. Previous climbing experience and specialist equipment are not required. You can come on your own or with friends and family. Come as a fun alternative to the gym or for a special day out with the kids. If you're visiting with friends or family but not climbing, or just fancy coming to look, please feel free to relax in our excellent cafe overlooking the climbing areas.</p>
<p><strong>Mobile Climbing Wall</strong></p>
<p>Available on a day hire basis at any location, the Big Rock Mobile Climbing Wall is the perfect way to enhance any show, festival or event. The mobile wall can be used indoors or outdoors and features four unique 7.3 m-high climbing faces designed to allow four people to climb simultaneously. Quick to set up and pack up, the Mobile Climbing Wall is staffed by qualified and experienced climbing instructors, providing the opportunity to climb the wall in a controlled and safe environment. When considering what to wear, we've found that trousers and t-shirts are ideal. We will, however, ask people to remove scarves. Most flat shoes are suitable as long as they're enclosed and support the foot. The mobile wall is very adaptable and can be operated in light rain and winds up to 50 kph. There are, however, particular measures that we take in such conditions.</p>
<p><strong>What about hiring the Mobile Climbing Wall for my school or college?</strong></p>
<p>As climbing is different from the usual team games practised at schools, we've found that some students who don't usually like participating in sports are willing to have a go on the mobile climbing wall. If you're concerned that some children may not want to take part because they feel nervous if they climb, then please be assured that our instructors will support them up to a level which they're comfortable with. They will still benefit greatly from the experience.</p>
`,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 1,
                    title: 'Questions 1-8',
                    instruction: 'Look at the seven advertisements for festivals in the UK, A-G. For which festival are the following statements true?',
                    paragraphRange: 'A-G',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                    items: [
                        { description: 'Visitors can help to make one particular event a success at this festival.' },
                        { description: 'People can listen to local musicians here.' },
                        { description: 'At this festival, people can listen to music in lots of different places.' },
                        { description: 'It is not necessary to pay for one of the events here.' },
                        { description: 'It is possible to stay overnight at this festival.' },
                        { description: 'Children will enjoy this festival.' },
                        { description: 'Visitors can get advice here.' },
                        { description: 'People can watch craftspeople at work here.' }
                    ]
                },
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 9,
                    title: 'Questions 9-14',
                    instruction: 'Do the following statements agree with the information given in the text?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'When climbing at the Big Rock Centre, it is compulsory to be attached by a rope.' },
                        { statement: 'People who just want to watch the climbing can enter the Centre without paying.' },
                        { statement: 'People can arrange to have a climbing session in their own garden if they wish.' },
                        { statement: 'A certain item of clothing is forbidden for participants.' },
                        { statement: 'The Mobile Climbing Wall can only be used in dry, calm weather.' },
                        { statement: 'It is inadvisable for children who are afraid of heights to use the Mobile Climbing Wall.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-20.</em></p>

<h2 style="text-align:center"><strong>Marketing advice for new businesses</strong></h2>
<p><em>If you're setting up your own business, here's some advice on getting customers.</em></p>
<p><strong>Know where your customers look</strong></p>
<p>Your customers aren't necessarily where you think they are. So if you're advertising where they're just not looking, it's wasted money. That's why it pays to do a bit of research. Every time someone contacts your company, ask them where they found out about you. And act on this information so you're advertising in the right places.</p>
<p><strong>Always think like a customer</strong></p>
<p>What makes your customers tick? Find out, and you're halfway to saying the right things in your advertising. So take the time to ask them. A simple phone or email survey of your own customers, politely asking why they use you, what they really like and what they don't, is invaluable.</p>
<p><strong>Make sure customers know you're there</strong></p>
<p>If a customer can't see you, they can't buy from you. There are loads of opportunities to promote your business: print, press, direct mail, telemarketing, email and the internet, and using a mix of these increases your chances of being seen and remembered.</p>
<p><strong>Ignore your customers and they'll go away</strong></p>
<p>It sounds obvious, but companies who talk to their customers have much better retention rates than those that don't, so it's worth staying in touch. Capture your customers' email addresses upfront. Follow up a transaction to check they're happy with the service and, if possible, send them updates that are helpful, informative and relevant.</p>
<p><strong>Know what works (and what doesn't)</strong></p>
<p>Do what the professionals do, and measure all your advertising. That'll tell you what you're doing right, and where there's room for improvement. You never know, it might just throw up some information that could change your business for the better.</p>
<p><strong>Remember word-of-mouth: the best advertising there is</strong></p>
<p>A recent survey found that consumers are 50% more likely to be influenced by word-of-mouth recommendations than by TV or radio ads. So your reputation is your greatest asset. If your current customers are impressed with your company, they'll be more inclined to recommend you to others. On the flip side, if they experience bad service they probably won't complain to you, but you can be sure they will to their friends.</p>

<hr/>
<p><em>Read the text below and answer Questions 21-27.</em></p>

<h2 style="text-align:center"><strong>Working Time Regulations for Mobile Workers</strong></h2>
<p>These rules apply to drivers and crew of heavy goods vehicles or public service vehicles. The rules limit the amount of time that can be worked.</p>
<p>Those defined in the Regulations as being self-employed are currently not covered by the Regulations.</p>
<p><strong>What are the limits?</strong></p>
<ul>
  <li>An average of 48 hours' work per week.</li>
  <li>In any single week up to 60 hours can be worked so long as the 48-hour average is maintained.</li>
  <li>Night work is limited to 10 hours per night, unless there is a workforce agreement to work longer.</li>
  <li>Statutory annual leave and any sick leave and/or maternity/paternity leave counts as working time.</li>
</ul>
<p><strong>What counts as work?</strong></p>
<p>In general, any activities performed in connection with the transport operation count as work, for example, driving, loading/unloading and those checks that are the responsibility of drivers, such as checking lights, brakes, etc. There are a number of periods of time that do not count as work, for example, travelling between home and your normal place of work, lunch or other breaks and periods of availability.</p>
<p>Periods of availability are periods of time during which the mobile worker is not required to remain at their workstation but is required to be available for work, the foreseeable duration of which is known about in advance, for example:</p>
<ul>
  <li>Delays at a distribution centre.</li>
  <li>Reporting for work then being informed that no duties are to be undertaken for a specified period.</li>
  <li>Accompanying a vehicle being transported, for example by train.</li>
</ul>
<p>A period of availability can be taken at the workstation. Providing the worker has a reasonable amount of freedom (e.g. they can read and relax) for a known duration, this could satisfy the requirements of a period of availability.</p>
<p>Situations when a period of time should not be recorded as a period of availability:</p>
<ul>
  <li>Hold-ups due to congestion, because the driver would be stopping and starting the vehicle.</li>
  <li>Frequently moving up within a queue (e.g. waiting within a queue to load or unload) every other minute.</li>
</ul>
`,
            questions: [
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 15,
                    title: 'Questions 15-20',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    items: [
                        { prefix: 'Some', suffix: 'will help you to discover the most effective places to advertise.' },
                        { prefix: 'A', suffix: 'of your customers will show you how they feel about your company.' },
                        { prefix: 'A', suffix: 'of forms of advertising will make it more likely that potential customers will find out about you.' },
                        { prefix: 'If you can, provide customers with useful', suffix: 'about your business.' },
                        { prefix: 'Measuring the effects of your advertising can give you', suffix: 'that will improve your business.' },
                        { prefix: 'Success in finding new customers largely depends on your', suffix: '.' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 21,
                    title: 'Questions 21-27',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Working Time Regulations for Mobile Workers',
                    items: [
                        { prefix: "These apply to people working on lorries, buses, etc. They don't apply to", suffix: 'workers.' },
                        { prefix: 'Maximum working hours: 60 hours a week, provided the', suffix: 'is no more than 48 hours.' },
                        { prefix: 'Night work can be more than 10 hours with the', suffix: 'of the workers.' },
                        { prefix: 'Work includes driving, loading and unloading, and carrying out various', suffix: 'of the vehicle.' },
                        { prefix: 'Periods of availability include going on a', suffix: 'or other form of transport with a vehicle.' },
                        { prefix: 'A period at the workstation when the driver has some', suffix: 'might count as a period of availability.' },
                        { prefix: 'Periods of availability exclude time spent stopping and starting the vehicle when', suffix: 'causes delays.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>A brief history of automata</strong></h2>
<p>An automaton is a machine, usually made to resemble a person or animal, that operates on its own, once it has been started. Although few are constructed nowadays, they have a history stretching back well over two thousand years. Several myths show that the ancient Greeks were interested in the creation of automata. In one, Hephaestus, the god of all mechanical arts, was reputed to have made two female statues of pure gold which assisted him and accompanied him wherever he went. As well as giving automata a place in mythology, the Greeks almost certainly created some. These were probably activated by levers and powered by human action, although there are descriptions of steam and water being used as sources of power. Automata were sometimes intended as toys, or as tools for demonstrating basic scientific principles.</p>
<p>Other ancient cultures, too, seem to have developed automata. In Egypt, Ctesibius experimented with air pressure and pneumatic principles. One of his creations was a singing blackbird powered by water. A Chinese text of the third century BC describes a life-size, human-shaped figure that could walk rapidly, move its head up and down, sing and wink its eye.</p>
<p>Much later, Arab engineers of the ninth and thirteenth centuries wrote detailed treatises on how to build programmable musical fountains, mechanical servants, and elaborate clocks. A ninth-century ruler in Baghdad had a silver and gold tree with metal birds that sang. The art of creating automata developed considerably during the fifteenth century, linked with improvements in clock making: the mechanisms of automata and clocks had a great deal in common. Some truly remarkable automata were produced at this time. Muller was reputed to have made an artificial eagle which flew to greet the Emperor on his entry into Nuremberg, Germany, in 1470, then returned to perch on top of a city gate and, by stretching its wings and bowing, saluted the emperor on his arrival. Leonardo da Vinci made a lion in honour of the king of France, which advanced towards him, stopped, opened its chest with a claw and pointed to the French coat of arms.</p>
<p>Automata were normally very expensive toys for the very rich. They were made for royal or aristocratic patrons, to be viewed only by themselves and selected guests, who were expected to be impressed by their wealth. Automata were also created for public show, however, and many appeared on clock towers, such as the one in Bern, Switzerland, built in 1530.</p>
<p>During the eighteenth century, some watchmakers made automata to contribute to the progress of medicine and the natural sciences, particularly to investigate the mechanical laws governing the structure and movement of living things. Many of their creations simulated almost perfectly the complex structure of human beings and animals. Maillardet made extensive use of gearing and cogs to produce automata of horses, worked by turning a handle. Vaucanson produced a duck made of gilded copper which ate, drank and quacked like a real duck. He also made a life-size female flute player. Air passes through the complex mechanism, causing the lips and fingers of the player to move naturally on the flute, opening and closing holes on it. This automaton had a repertoire of twelve tunes.</p>
<p>In another well-known piece, Merlin's silver swan made in 1773, the swan sits in a stream consisting of glass rods where small silver fish are swimming. When the clockwork is wound, a music box plays and the glass rods rotate, giving the impression of a flowing stream. The swan turns its head from side to side. It soon notices the fish and bends down to catch and eat one, then raises its head to the upright position. The mechanism still works.</p>
<p>One of the most skilled makers of automata was the Swiss watchmaker Jaquet-Droz. He produced three automata which, even today, are considered wonders of science and mechanical engineering. One of these, The Writer, simulates a boy sitting at a desk, dipping his pen into the ink and writing perfectly legibly.</p>
<p>Another stunning creation of the eighteenth century was the Mechanical Theatre in the grounds of Austria's Hellbrunn Palace, home of the Archbishop of Salzburg. Designed by the miner Rosenegger, and completed in 1752, this depicts the nobility's idea of a perfect society, with every class in its proper place. The figures inside a palace depict eighteenth century court life, while industrious activity is carried on in and around this building. A total of 141 mobile and 52 immobile little figures demonstrate all manner of trades of the period: building workers bring materials to the foreman, who drinks; butchers slaughter an ox; a barber shaves a man. A dancing bear performs, guards march past the palace, a farmer pushes an old woman in a wheelbarrow over the road. The theatre shows great skill in clock making and water technology, consisting of hidden waterwheels, copper wiring and cogwheels.</p>
<p>During the nineteenth century, mass production techniques meant that automata could be made cheaply and easily, and they became toys for children rather than an expensive adult amusement. Between 1860 and 1910, small family businesses in Paris made thousands of clockwork automata and mechanical singing birds and exported them around the world. However, the twentieth century saw traditional forms of automata fall out of favour.</p>
`,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 28,
                    title: 'Questions 28-30',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Automata and the ancient Greeks',
                    items: [
                        { prefix: 'The ancient Greeks had a number of', suffix: 'concerning automata.' },
                        { prefix: 'The Greeks probably also created real automata; it seems most likely that the mechanism which controlled them consisted of', suffix: 'which were worked by human operators.' },
                        { prefix: 'Some automata were designed to be', suffix: 'with an educational purpose.' }
                    ]
                },
                {
                    type: 'matching',
                    startQuestionNumber: 31,
                    title: 'Questions 31-35',
                    instruction: 'Look at the following descriptions (Questions 31-35) and the list of people below. Match each statement with the correct person, A-G.',
                    options: [
                        { value: 'A', label: 'Ctesibius' },
                        { value: 'B', label: 'Arab engineers' },
                        { value: 'C', label: 'da Vinci' },
                        { value: 'D', label: 'Maillardet' },
                        { value: 'E', label: 'Vaucanson' },
                        { value: 'F', label: 'Merlin' },
                        { value: 'G', label: 'Jaquet-Droz' }
                    ],
                    items: [
                        { description: 'created an automaton that represented a bird in water, interacting with its surroundings' },
                        { description: 'created an automaton that performed on a musical instrument' },
                        { description: 'produced documents about how to create automata' },
                        { description: 'created automata which required a human being to operate the mechanism' },
                        { description: 'used air and water power' }
                    ]
                },
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 36,
                    title: 'Questions 36-40',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    items: [
                        { prefix: 'The Mechanical Theatre shows court life inside a', suffix: '.' },
                        { prefix: 'In the Mechanical Theatre, building workers, butchers and a barber represent various', suffix: 'of the time.' },
                        { prefix: '', suffix: 'provides the power that operates the Mechanical Theatre.' },
                        { prefix: 'New', suffix: 'that developed in the nineteenth century reduced the cost of the production of automata.' },
                        { prefix: 'During the nineteenth century, most automata were intended for use by', suffix: '.' }
                    ]
                }
            ]
        }
    ]
};
