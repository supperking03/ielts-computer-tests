export const cam17test1 = {
    id: 5,
    title: 'Reading CAM 17 Test 1',
    explanation: "https://drive.google.com/file/d/14eGTicPpKveeYijOMggj2bKMQK7OY3AM/view?usp=sharing",
    image: 'https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam-17-test-1.jpg',
    correctAnswers: [
        // Q1-6: Fill in blanks
        'population', 'suburbs', 'businessmen', 'funding', 'press', 'soil',
        // Q7-13: True/False/Not Given
        'FALSE', 'NOT GIVEN', 'TRUE', 'TRUE', 'FALSE', 'FALSE', 'NOT GIVEN',
        // Q14-17: Paragraph matching  
        'A', 'F', 'E', 'D',
        // Q18-22: Summary completion
        'fortress', 'bullfights', 'opera', 'salt', 'shops',
        // Q23-26: Multiple choice
        'C', 'D', 'B', 'E',
        // Q27-31: Matching
        'H', 'J', 'F', 'B', 'D',
        // Q32-35: Yes/No/Not Given
        'NOT GIVEN', 'NO', 'NO', 'YES',
        // Q36-40: Multiple choice
        'B', 'C', 'A', 'B', 'D'
    ],
    passages: [
        {
            title: `Reading Passage 1`,
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span><span style="font-size: 14px; text-align: left; color: #353535;"></span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>The development of the London underground railway</strong></span></h2>
<p><span style="font-size: large;">In the first half of the 1800s, London's population grew at an astonishing rate, and the central area became increasingly congested. In addition, the expansion of the overground railway network resulted in more and more passengers arriving in the capital. However, in 1846, a Royal Commission decided that the railways should not be allowed to enter the City, the capital's historic and business centre. The result was that the overground railway stations formed a ring around the City. The area within consisted of poorly built, overcrowded slums and the streets were full of horse-drawn traffic. Crossing the City became a nightmare. It could take an hour and a half to travel 8 km by horse-drawn carriage or bus. Numerous schemes were proposed to resolve these problems, but few succeeded.</span></p>
<p><span style="font-size: large;">Amongst the most vocal advocates for a solution to London's traffic problems was Charles Pearson, who worked as a solicitor for the City of London. He saw both social and economic advantages in building an underground railway that would link the overground railway stations together and clear London slums at the same time. His idea was to relocate the poor workers who lived in the inner-city slums to newly constructed suburbs, and to provide cheap rail travel for them to get to work. Pearson's ideas gained support amongst some businessmen and in 1851 he submitted a plan to Parliament. It was rejected, but coincided with a proposal from another group for an underground connecting line, which Parliament passed.</span></p>
<p><span style="font-size: large;">The two groups merged and established the Metropolitan Railway Company in August 1854. The company's plan was to construct an underground railway line from the Great Western Railway's (GWR) station at Paddington to the edge of the City at Farringdon Street – a distance of almost 5 km. The organisation had difficulty in raising the funding for such a radical and expensive scheme, not least because of the critical articles printed by the press. Objectors argued that the tunnels would collapse under the weight of traffic overhead, buildings would be shaken and passengers would be poisoned by the emissions from the train engines. However, Pearson and his partners persisted.</span></p>
<p><span style="font-size: large;">The GWR, aware that the new line would finally enable them to run trains into the heart of the City, invested almost £250,000 in the scheme. Eventually, over a five-year period, £1m was raised. The chosen route ran beneath existing main roads to minimise the expense of demolishing buildings. Originally scheduled to be completed in 21 months, the construction of the underground line took three years. It was built just below street level using a technique known as 'cut and cover'. A trench about ten metres wide and six metres deep was dug, and the sides temporarily help up with timber beams. Brick walls were then constructed, and finally a brick arch was added to create a tunnel. A two-metre-deep layer of soil was laid on top of the tunnel and the road above rebuilt.</span></p>
<p><span style="font-size: large;">The Metropolitan line, which opened on 10 January 1863, was the world's first underground railway. On its first day, almost 40,000 passengers were carried between Paddington and Farringdon, the journey taking about 18 minutes. By the end of the Metropolitan's first year of operation, 9.5 million journeys had been made.</span></p>
<p><span style="font-size: large;">Even as the Metropolitan began operation, the first extensions to the line were being authorised; these were built over the next five years, reaching Moorgate in the east to London and Hammersmith in the west. The original plan was to pull the trains with steam locomotives, using firebricks in the boilers to provide steam, but these engines were never introduced. Instead, the line used specially designed locomotives that were fitted with water tanks in which steam could be condensed. However, smoke and fumes remained a problem, even though ventilation shafts were added to the tunnels.</span></p>
<p><span style="font-size: large;">Despite the extension of the underground railway, by the 1880s, congestion on London's streets had become worse. The problem was partly that the existing underground lines formed a circuit around the centre of London and extended to the suburbs, but did not cross the capital's centre. The 'cut and cover' method of construction was not an option in this part of the capital. The only alternative was to tunnel deep underground.</span></p>
<p><span style="font-size: large;">Although the technology to create these tunnels existed, steam locomotives could not be used in such a confined space. It wasn't until the development of a reliable electric motor, and a means of transferring power from the generator to a moving train, that the world's first deep-level electric railway, the City &amp; South London, became possible. The line opened in 1890, and ran from the City to Stockwell, south of the River Thames. The trains were made up of three carriages and driven by electric engines. The carriages were narrow and had tiny windows just below the roof because it was thought that passengers would not want to look out at the tunnel walls. The line was not without its problems, mainly caused by an unreliable power supply, Although the City &amp; South London Railway was a great technical achievement, it did not make a profit. Then, in 1900, the Central London Railway, known as the 'Tuppenny Tube', began operation using new electric locomotives. It was very popular and soon afterwards new railways and extensions were added to the growing tube network. By 1907, the heart of today's Underground system was in place.</span></p>
            `,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 1,
                    title: 'Questions 1-6',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                    sectionTitle: 'The London underground railway',
                    items: [
                        {
                            prefix: 'The',
                            suffix: 'of London increased rapidly between 1800 and 1850'
                        },
                        {
                            prefix: 'Building the railway would make it possible to move people to better housing in the',
                            suffix: ''
                        },
                        {
                            prefix: 'A number of',
                            suffix: 'agreed with Pearson\'s idea'
                        },
                        {
                            prefix: 'The company initially had problems getting the',
                            suffix: 'needed for the project'
                        },
                        {
                            prefix: 'Negative articles about the project appeared in the',
                            suffix: ''
                        },
                        {
                            prefix: 'With the completion of the brick arch, the tunnel was covered with',
                            suffix: ''
                        }
                    ]
                },
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 7,
                    title: 'Questions 7-13',
                    instruction: 'Do the following statements agree with the information given in Reading Passage 1?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'Other countries had built underground railways before the Metropolitan line opened.' },
                        { statement: 'More people than predicted travelled on the Metropolitan line on the first day.' },
                        { statement: 'The use of ventilation shafts failed to prevent pollution in the tunnels.' },
                        { statement: 'A different approach from the \'cut and cover\' technique was required in London\'s central area.' },
                        { statement: 'The windows on City & South London trains were at eye level.' },
                        { statement: 'The City & South London Railway was a financial success.' },
                        { statement: 'Trains on the \'Tuppenny Tube\' nearly always ran on time.' }
                    ]
                }
            ]
        },
        {
            title: `Reading Passage 2`,
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong>&nbsp;which are based on Reading Passage 2 below.</span><span style="font-size: 14px;">&nbsp;</span></p>
<h2 style="text-align: center;"><span style="font-size: xx-large;"><strong>Stadiums: past, present and future</strong></span></h2>
<p><span style="font-size: large;"><strong>A</strong></span></p>
<p><span style="font-size: large;">Stadiums are among the oldest forms of urban architecture: vast stadiums where the public could watch sporting events were at the centre of western city life as far back as the ancient Greek and Roman Empires, well before the construction of the great medieval cathedrals and the grand 19th- and 20th-century railway stations which dominated urban skylines in later eras.</span></p>
<p><span style="font-size: large;">Today, however, stadiums are regarded with growing scepticism. Construction costs can soar above £1 billion, and stadiums finished for major events such as the Olympic Games or the FIFA World Cup have notably fallen into disuse and disrepair.</span></p>
<p><span style="font-size: large;">But this need not be the cause. History shows that stadiums can drive urban development and adapt to the culture of every age. Even today, architects and planners are finding new ways to adapt the mono-functional sports arenas which became emblematic of modernisation during the 20th century.</span></p>
<p><span style="font-size: large;"><strong>B</strong></span></p>
<p><span style="font-size: large;">The amphitheatre* of Arles in southwest France, with a capacity of 25,000 spectators, is perhaps the best example of just how versatile stadiums can be. Built by the Romans in 90 AD, it became a fortress with four towers after the fifth century, and was then transformed into a village containing more than 200 houses. With the growing interest in conservation during the 19th century, it was converted back into an arena for the staging of bullfights, thereby returning the structure to its original use as a venue for public spectacles.</span></p>
<p><span style="font-size: large;">Another example is the imposing arena of Verona in northern Italy, with space for 30,000 spectators, which was built 60 years before the Arles amphitheatre and 40 years before Rome's famous Colosseum. It has endured the centuries and is currently considered one of the world's prime sites for opera, thanks to its outstanding acoustics.</span></p>
<p><span style="font-size: large;"><strong>C</strong></span></p>
<p><span style="font-size: large;">The area in the centre of the Italian town of Lucca, known as the Piazza dell' Anfiteatro, is yet another impressive example of an amphitheatre becoming absorbed into the fabric of the city. The site evolved in a similar way to Arles and was progressively filled with buildings from the Middle Ages until the 19th century, variously used as houses, a salt depot and a prison. But rather than reverting to an arena, it became a market square, designed by Romanticist architect Lorenzo Nottolini. Today, the ruins of the amphitheatre remain embedded in the various shops and residences surrounding the public square.</span></p>
<p><span style="font-size: large;"><strong>D</strong></span></p>
<p><span style="font-size: large;">There are many similarities between modern stadiums and the ancient amphitheatres intended for games. But some of the flexibility was lost at the beginning of the 20th century, as stadiums were developed using new products such as steel and reinforced concrete, and made use of bright lights for night-time matches.</span></p>
<p><span style="font-size: large;">Many such stadiums are situated in suburban areas, designed for sporting use only and surrounded by parking lots. These factors mean that they may not be as accessible to the general public, require more energy to run and contribute to urban heat.</span></p>
<p><span style="font-size: large;"><strong>E</strong></span></p>
<p><span style="font-size: large;">But many of today's most innovative architects see scope for the stadium to help improve the city. Among the current strategies, two seem to be having particular success: the stadium as an urban hub, and as a power plant.</span></p>
<p><span style="font-size: large;">There's a growing trend for stadiums to be equipped with public spaces and services that serve a function beyond sport, such as hotels, retail outlets, conference centres, restaurants and bars, children's playgrounds and green space. Creating mixed-use developments such as this reinforces compactness and multi-functionality, making more efficient use of land and helping to regenerate urban spaces.</span></p>
<p><span style="font-size: large;">This opens the space up to families and a wider cross-section of society, instead of catering only to sportspeople and supporters. There have been many examples of this in the UK: the mixed-use facilities at Wembley and Old Trafford have become a blueprint for many other stadiums in the world.</span></p>
<p><span style="font-size: large;"><strong>F</strong></span></p>
<p><span style="font-size: large;">The phenomenon of stadium as power stations has arisen from the idea that energy problems can be overcome by integrating interconnected buildings by means of a smart grid, which is an electricity supply network that uses digital communications technology to detect and react to local changes in usage, without significant energy losses. Stadiums are ideal for these purposes, because their canopies have a large surface area for fitting photovoltaic panels and rise high enough (more than 40 metres) to make use of micro wind turbines.</span></p>
<p><span style="font-size: large;">Freiburg Mage Solar Stadium in Germany is the first of a new wave of stadiums as power plants, which also includes the Amsterdam Arena and the Kaohsiung Stadium. The latter, inaugurated in 2009, has 8,844 photovoltaic panels producing up to 1.14 GWh of electricity annually. This reduces the annual output of carbon dioxide by 660 tons and supplies up to 80 percent of the surrounding area when the stadium is not in use. This is proof that a stadium can serve its city, and have a decidedly positive impact in terms of reduction of CO2 emissions.</span></p>
<p><span style="font-size: large;"><strong>G</strong></span></p>
<p><span style="font-size: large;">Sporting arenas have always been central to the life and culture of cities. In every era, the stadium has acquired new value and uses: from military fortress to residential village, public space to theatre and most recently a field for experimentation in advanced engineering. The stadium of today now brings together multiple functions, thus helping cities to create a sustainable future.</span></p>
<p><span style="font-size: large;">—————-</span></p>
<p><span style="font-size: medium;">* amphitheatre: (especially in Greek and Roman architecture) an open circular or oval building with a central space surrounded by tiers of seats for spectators, for the presentation of dramatic or sporting events</span></p>
            `,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 14,
                    title: 'Questions 14-17',
                    instruction: 'Reading Passage 2 has seven paragraphs, A-G. Which section contains the following information?',
                    paragraphRange: 'A-G',
                    note: 'You may use any letter more than once.',
                    items: [
                        { description: 'a mention of negative attitudes towards stadium building projects' },
                        { description: 'figures demonstrating the environmental benefits of a certain stadium' },
                        { description: 'examples of the wide range of facilities available at some new stadiums' },
                        { description: 'reference to the disadvantages of the stadiums built during a certain era' }
                    ]
                },
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 18,
                    title: 'Questions 18-22',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                    sectionTitle: 'Roman amphitheatres',
                    items: [
                        {
                            prefix: 'The amphitheatre of Arles was converted first into a',
                            suffix: ', then into a residential area.'
                        },
                        {
                            prefix: 'It was finally converted into an arena for',
                            suffix: '.'
                        },
                        {
                            prefix: 'The arena in Verona is famous today as a venue for',
                            suffix: '.'
                        },
                        {
                            prefix: 'Lucca\'s amphitheatre was used for storage of',
                            suffix: '.'
                        },
                        {
                            prefix: 'It is now a market square with',
                            suffix: 'and homes.'
                        }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 23,
                    title: 'Questions 23-24',
                    instruction: 'Choose TWO letters, A-E.',
                    questionText: 'When comparing twentieth-century stadiums to ancient amphitheatres in Section D, which TWO negative features does the writer mention?',
                    numberOfAnswers: 2,
                    items: [
                        {
                            questionNumber: 23,
                            questionText: 'When comparing twentieth-century stadiums to ancient amphitheatres in Section D, which TWO negative features does the writer mention?',
                            options: [
                                { value: 'A', text: 'They are less imaginatively designed.' },
                                { value: 'B', text: 'They are less spacious.' },
                                { value: 'C', text: 'They are in less convenient locations.' },
                                { value: 'D', text: 'They are less versatile.' },
                                { value: 'E', text: 'They are made of less durable materials' }
                            ]
                        },
                        {
                            questionNumber: 24,
                            questionText: 'When comparing twentieth-century stadiums to ancient amphitheatres in Section D, which TWO negative features does the writer mention?',
                            options: [
                                { value: 'A', text: 'They are less imaginatively designed.' },
                                { value: 'B', text: 'They are less spacious.' },
                                { value: 'C', text: 'They are in less convenient locations.' },
                                { value: 'D', text: 'They are less versatile.' },
                                { value: 'E', text: 'They are made of less durable materials' }
                            ]
                        }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 25,
                    title: 'Questions 25-26',
                    instruction: 'Choose TWO letters, A-E.',
                    questionText: 'Which TWO advantages of modern stadium design does the writer mention?',
                    numberOfAnswers: 2,
                    items: [
                        {
                            questionNumber: 25,
                            questionText: 'Which TWO advantages of modern stadium design does the writer mention?',
                            options: [
                                { value: 'A', text: 'offering improved amenities for the enjoyment of sports events' },
                                { value: 'B', text: 'bringing community life back into the city environment' },
                                { value: 'C', text: 'facilitating research into solar and wind energy solutions' },
                                { value: 'D', text: 'enabling local residents to reduce their consumption of electricity' },
                                { value: 'E', text: 'providing a suitable site for the installation of renewable power generators' }
                            ]
                        },
                        {
                            questionNumber: 26,
                            questionText: 'Which TWO advantages of modern stadium design does the writer mention?',
                            options: [
                                { value: 'A', text: 'offering improved amenities for the enjoyment of sports events' },
                                { value: 'B', text: 'bringing community life back into the city environment' },
                                { value: 'C', text: 'facilitating research into solar and wind energy solutions' },
                                { value: 'D', text: 'enabling local residents to reduce their consumption of electricity' },
                                { value: 'E', text: 'providing a suitable site for the installation of renewable power generators' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: `Reading Passage 3`,
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 27-40</strong> which are based on Reading Passage 3 below.</span></p>
<h2 style="text-align: center;"><span style="font-size: xx-large;"><strong>To catch a king</strong></span></h2>
<p style="text-align: center;"><span style="font-size: large;"><em>Anna Keay reviews Charles Spencer's book about the hunt for King Charles II during the English Civil War of the seventeenth century</em></span></p>
<p><span style="font-size: large;">Charles Spencer's latest book, <em>To Catch a King</em>, tells us the story of the hunt for King Charles II in the six weeks after his resounding defeat at the Battle of Worcester in September 1651. And what a story it is. After his father was executed by the Parliamentarians in 1649, the young Charles II sacrificed one of the very principles his father had died for and did a deal with Scots, thereby accepting Presbyterianism* as the national religion in return for being crowned King of Scots. His arrival in Edinburgh prompted the English Parliamentary army to invade Scotland in a pre-emptive strike. This was followed by a Scottish invasion of England. The two sides finally faced one another at Worcester in the west of England in 1651. After being comprehensively defeated on the meadows outside the city by the Parliamentarian army, the 21-year-old king found himself the subject of a national manhunt, with a huge sum offered for his capture, through a series of heart-poundingly close escapes, to evade the Parliamentarians before seeking refuge in France. For the next nine years, the penniless and defeated Charles wandered around Europe with only a small group of loyal supporters.</span></p>
<p><span style="font-size: large;">Years later, after his restoration as king, the 50-year-old Charles II requested a meeting with the writer and diarist Samuel Pepys. His intention when asking Pepys to commit his story to paper was to ensure that this most extraordinary episode was never forgotten. Over two three-hour sittings, the king related to him in great detail his personal recollections of the six weeks he had spent as a fugitive. As the king and secretary settled down (a scene that is surely a gift for a future scriptwriter), Charles commenced his story: 'After the battle was so absolutely lost as to be beyond hope of recovery, I began to think of the best way of saving myself.'</span></p>
<p><span style="font-size: large;">One of the joys of Spencer's book, a result not least of its use of Charles II's own narrative as well as those of his supporters, is just how close the reader gets to the action. The day-by-day retelling of the fugitives' doings provides delicious details: the cutting of the king's long hair with agricultural shears, the use of walnut leaves to dye his pale skin, and the day Charles spent lying on a branch of the great oak tree in Boscobel Wood as the Parliamentary soldiers scoured the forest floor below. Spencer draws out both the humour – such as the preposterous refusal of Charles's friend Henry Wilmot to adopt disguise on the grounds that it was beneath his dignity – and the emotional tension when the secret of the king's presence was cautiously revealed to his supporters.</span></p>
<p><span style="font-size: large;">Charles's adventures after losing the Battle of Worcester hide the uncomfortable truth that whilst almost everyone in England had been appalled by the execution of his father, they had not welcomed the arrival of his son with the Scots army, but had instead firmly bolted their doors. This was partly because he rode at the head of what looked like a foreign invasion force and partly because, after almost a decade of civil war, people were desperate to avoid it beginning again. This makes it all the more interesting that Charles II himself loved the story so much ever after. As well as retelling it to anyone who would listen, causing eye-rolling among courtiers, he set in train a series of initiatives to memorialise it. There was to be a new order of chivalry, the Knights of the Royal Oak. A series of enormous oil paintings depicting the episode were produced, including a two-metre-wide canvas of Boscobel Wood and a set of six similarly enormous paintings of the king on the run. In 1660, Charles II commissioned the artist John Michael Wright to paint a flying squadron of cherubs* carrying an oak tree to the heavens on the ceiling of his bedchamber. It is hard to imagine many other kings marking the lowest point in their life so enthusiastically, or indeed pulling off such an escape in the first place.</span></p>
<p><span style="font-size: large;">Charles Spencer is the perfect person to pass the story on to a new generation. His pacey, readable prose steers deftly clear of modern idioms and elegantly brings to life the details of the great tale. He has even-handed sympathy for both the fugitive king and the fierce republican regime that hunted him, and he succeeds in his desire to explore far more of the background of the story than previous books on the subject have done. Indeed, the opening third of the book is about how Charles II found himself at Worcester in the first place, which for some will be reason alone to read <em>To Catch a King</em>.</span></p>
<p><span style="font-size: large;">The tantalizing question left, in the end, is that of what it all meant. Would Charles II have been a different king had these six weeks never happened? The days and nights spent in hiding must have affected him in some way. Did the need to assume disguises, to survive on wit and charm alone, to use trickery and subterfuge to escape from tight corners help form him? This is the one area where the book doesn't quite hit the mark. Instead its depiction of Charles II in his final years as an ineffective, pleasure-loving monarch doesn't do justice to the man (neither is it accurate), or to the complexity of his character. But this one niggle aside, <em>To Catch a King</em> is an excellent read, and those who come to it knowing little of the famous tale will find they have a treat in store.</span></p>
<p><span style="font-size: large;">————–</span></p>
<p><span style="font-size: medium;">* Presbyterianism: part of the reformed Protestant religion</span></p>
<p><span style="font-size: medium;">* cherub: an image of angelic children used in paintings</span></p>
            `,
            questions: [
                {
                    type: 'matching',
                    startQuestionNumber: 27,
                    title: 'Questions 27-31',
                    instruction: 'Complete the summary using the list of phrases, A-J, below.',
                    sectionTitle: 'The story behind the hunt for Charles II',
                    options: [
                        { value: 'A', text: 'military innovation' },
                        { value: 'B', text: 'large reward' },
                        { value: 'C', text: 'widespread conspiracy' },
                        { value: 'D', text: 'relative safety' },
                        { value: 'E', text: 'new government' },
                        { value: 'F', text: 'decisive victory' },
                        { value: 'G', text: 'political debate' },
                        { value: 'H', text: 'strategic alliance' },
                        { value: 'I', text: 'popular solution' },
                        { value: 'J', text: 'religious conviction' }
                    ],
                    items: [
                        { description: 'Charles II\'s father was executed by the Parliamentarian forces in 1649. Charles II then formed a 27 ………………… with the Scots' },
                        { description: 'and in order to become King of Scots, he abandoned an important 28 ………………… that was held by his father and had contributed to his father\'s death.' },
                        { description: 'The opposing sides then met outside Worcester in 1651. The battle led to a 29 ………………… for the Parliamentarians and Charles had to flee for his life.' },
                        { description: 'A 30 ………………… was offered for Charles\'s capture' },
                        { description: 'but after six weeks spent in hiding, he eventually managed to reach the 31 ………………… of continental Europe.' }
                    ]
                },
                {
                    type: 'yes-no-not-given',
                    startQuestionNumber: 32,
                    title: 'Questions 32-35',
                    instruction: 'Do the following statements agree with the claims of the writer in Reading Passage 3?',
                    options: [
                        { value: 'YES', description: 'if the statement agrees with the claims of the writer' },
                        { value: 'NO', description: 'if the statement contradicts the claims of the writer' },
                        { value: 'NOT GIVEN', description: 'if it is impossible to say what the writer thinks about this' }
                    ],
                    items: [
                        { statement: 'Charles chose Pepys for the task because he considered him to be trustworthy.' },
                        { statement: 'Charles\'s personal recollection of the escape lacked sufficient detail.' },
                        { statement: 'Charles indicated to Pepys that he had planned his escape before the battle.' },
                        { statement: 'The inclusion of Charles\'s account is a positive aspect of the book.' }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 36,
                    title: 'Questions 36-40',
                    instruction: 'Choose the correct letter, A, B, C, or D.',
                    items: [
                        {
                            questionNumber: 36,
                            questionText: 'What is the reviewer\'s main purpose in the first paragraph?',
                            options: [
                                { value: 'A', text: 'to describe what happened during the Battle of Worcester' },
                                { value: 'B', text: 'to give an account of the circumstances leading to Charles II\'s escape' },
                                { value: 'C', text: 'to provide details of the Parliamentarians\' political views' },
                                { value: 'D', text: 'to compare Charles II\'s beliefs with those of his father' }
                            ]
                        },
                        {
                            questionNumber: 37,
                            questionText: 'Why does the reviewer include examples of the fugitives\' behaviour in the third paragraph?',
                            options: [
                                { value: 'A', text: 'to explain how close Charles II came to losing his life' },
                                { value: 'B', text: 'to suggest that Charles II\'s supporters were badly prepared' },
                                { value: 'C', text: 'to illustrate how the events of the six weeks are brought to life' },
                                { value: 'D', text: 'to argue that certain aspects are not as well known as they should be' }
                            ]
                        },
                        {
                            questionNumber: 38,
                            questionText: 'What point does the reviewer make about Charles II in the fourth paragraph?',
                            options: [
                                { value: 'A', text: 'He chose to celebrate what was essentially a defeat.' },
                                { value: 'B', text: 'He misunderstood the motives of his opponents.' },
                                { value: 'C', text: 'He aimed to restore people\'s faith in the monarchy.' },
                                { value: 'D', text: 'He was driven by a desire to be popular.' }
                            ]
                        },
                        {
                            questionNumber: 39,
                            questionText: 'What does the reviewer say about Charles Spencer in the fifth paragraph?',
                            options: [
                                { value: 'A', text: 'His decision to write the book comes as a surprise.' },
                                { value: 'B', text: 'He takes an unbiased approach to the subject matter.' },
                                { value: 'C', text: 'His descriptions of events would be better if they included more detail.' },
                                { value: 'D', text: 'He chooses language that is suitable for a twenty-first-century audience.' }
                            ]
                        },
                        {
                            questionNumber: 40,
                            questionText: 'When the reviewer says the book \'doesn\'t quite hit the mark\', she is making the point that',
                            options: [
                                { value: 'A', text: 'it overlooks the impact of events on ordinary people.' },
                                { value: 'B', text: 'it lacks an analysis of prevalent views on monarchy.' },
                                { value: 'C', text: 'it omits any references to the deceit practised by Charles II during his time in hiding.' },
                                { value: 'D', text: 'it fails to address whether Charles II\'s experiences had a lasting influence on him.' }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
