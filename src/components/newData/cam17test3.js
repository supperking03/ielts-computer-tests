export const cam17test3 = {
    id: 7,
    title: 'Reading CAM 17 Test 3',
    explanation: "https://drive.google.com/file/d/14eGTicPpKveeYijOMggj2bKMQK7OY3AM/view?usp=sharing",
    image: 'https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam-17-test-3.jpg',
    correctAnswers: [
        // Q1-5: Fill in blanks
        'carnivorous', 'scent', 'pouch', 'fossil', 'habitat',
        // Q6-13: True/False/Not Given
        'TRUE', 'FALSE', 'NOT GIVEN', 'FALSE', 'NOT GIVEN', 'FALSE', 'TRUE', 'NOT GIVEN',
        // Q14-20: Paragraph matching
        'F', 'G', 'A', 'H', 'B', 'E', 'C',
        // Q21-22: Multiple choice
        'B', 'C',
        // Q23-26: Sentence completion
        'solid', 'Sumatran orangutan', 'carbon stocks', 'biodiversity',
        // Q27-31: Multiple choice
        'D', 'B', 'C', 'D', 'C',
        // Q32-35: Yes/No/Not Given
        'NO', 'YES', 'NOT GIVEN', 'NO',
        // Q36-40: Summary completion
        'H', 'D', 'I', 'B', 'F'
    ],
    passages: [
        {
            title: `Reading Passage 1`,
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span><span style="font-size: 14px; text-align: left; color: #353535;"></span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>The thylacine</strong></span></h2>
<p><span style="font-size: large;">The extinct thylacine, also known as the Tasmanian tiger, was a marsupial* that bore a superficial resemblance to a dog. Its most distinguishing feature was the 13-19 dark brown stripes over its back, beginning at the rear of the body and extending onto the tail. The thylacine's average nose-to-tail length for adult males was 162.6 cm, compared to 153.7 cm for females.</span></p>
<p><span style="font-size: large;">The thylacine appeared to occupy most types of terrain except dense rainforest, with open eucalyptus forest thought to be its prime habitat. In terms of feeding, it was exclusively carnivorous, and its stomach was muscular with an ability to distend so that it could eat large amounts of food at one time, probably an adaptation to compensate for long periods when hunting was unsuccessful and food scarce. The thylacine was not a fast runner and probably caught its prey by exhausting it during a long pursuit. During long-distance chases, thylacines were likely to have relied more on scent than any other sense. They emerged to hunt during the evening, night and early morning and tended to retreat to the hills and forest for shelter during the day. Despite the common name 'tiger', the thylacine had a shy, nervous temperament. Although mainly nocturnal, it was sighted moving during the day and some individuals were even recorded basking in the sun.</span></p>
<p><span style="font-size: large;">The thylacine had an extended breeding season from winter to spring, with indications that some breeding took place throughout the year. The thylacine, like all marsupials, was tiny and hairless when born. Newborns crawled into the pouch on the belly of their mother, and attached themselves to one of the four teats, remaining there for up to three months. When old enough to leave the pouch, the young stayed in a lair such as a deep rocky cave, well-hidden nest or hollow log, whilst the mother hunted.</span></p>
<p><span style="font-size: large;">Approximately 4,000 years ago, the thylacine was widespread throughout New Guinea and most of mainland Australia, as well as the island of Tasmania. The most recent, well-dated occurrence of a thylacine on the mainland is a carbon-dated fossil from Murray Cave in Western Australia, which is around 3,100 years old. Its extinction coincided closely with the arrival of wild dogs called dingoes in Australia and a similar predator in New Guinea. Dingoes never reached Tasmania, and most scientists see this as the main reason for the thylacine's survival there.</span></p>
<p><span style="font-size: large;">The dramatic decline of the thylacine in Tasmania, which began in the 1830s and continued for a century, is generally attributed to the relentless efforts of sheep farmers and bounty hunters** with shotguns. While this determined campaign undoubtedly played a large part, it is likely that various other factors also contributed to the decline and eventual extinction of the species. These include competition with wild dogs introduced by European settlers, loss of habitat along with the disappearance of prey species, and a distemper-like disease which may also have affected the thylacine.</span></p>
<p><span style="font-size: large;">There was only one successful attempt to breed a thylacine in captivity, at Melbourne Zoo in 1899. This was despite the large numbers that went through some zoos, particularly London Zoo and Tasmania's Hobart Zoo. The famous naturalist John Gould foresaw the thylacine's demise when he published his <em>Mammals of Australia </em>between 1848 and 1863, writing, 'The numbers of this singular animal will speedily diminish, extermination will have its full sway, and it will then, like the wolf of England and Scotland, be recorded as an animal of the past.'</span></p>
<p><span style="font-size: large;">However, there seems to have been little public pressure to preserve the thylacine, nor was much concern expressed by scientists at the decline of this species in the decades that followed. A notable exception was T.T. Flynn, Professor of Biology at the University of Tasmania. In 1914, he was sufficiently concerned about the scarcity of the thylacine to suggest that some should be captured and placed on a small island. But it was not until 1929, with the species on the very edge of extinction, that Tasmania's Animals and Birds Protection Board passed a motion protecting thylacines only for the month of December, which was thought to be their prime breeding season. The last known wild thylacine to be killed was shot by a farmer in the north-east of Tasmania in 1930, leaving just captive specimens. Official protection of the species by the Tasmanian government was introduced in July 1936, 59 days before the last known individual died in Hobart Zoo on 7th September, 1936.</span></p>
<p><span style="font-size: large;">There have been numerous expeditions and searches for the thylacine over the years, none of which has produced definitive evidence that thylacines still exist. The species was declared extinct by the Tasmanian government in 1986.</span></p>
<p><span style="font-size: large;">———-</span></p>
<p><span style="font-size: medium;">* marsupial: a mammal, such as a kangaroo, whose young are born incompletely developed and are typically carried and suckled in a pouch on the mother's belly</span></p>
<p><span style="font-size: medium;">**bounty hunters: people who are paid a reward for killing a wild animal</span></p>
            `,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 1,
                    title: 'Questions 1-5',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                    sectionTitle: 'The thylacine',
                    items: [
                        {
                            prefix: 'Appearance and behaviour: looked rather like a dog, had a series of stripes along its body and tail, ate an entirely',
                            suffix: 'diet'
                        },
                        {
                            prefix: 'probably depended mainly on',
                            suffix: 'when hunting'
                        },
                        {
                            prefix: 'young spent first months of life inside its mother\'s',
                            suffix: ''
                        },
                        {
                            prefix: 'Decline and extinction: last evidence in mainland Australia is a 3,100-year-old',
                            suffix: ''
                        },
                        {
                            prefix: 'probably went extinct in mainland Australia due to animals known as dingoes, reduction in',
                            suffix: 'and available sources of food were partly responsible for decline in Tasmania'
                        }
                    ]
                },
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 6,
                    title: 'Questions 6-13',
                    instruction: 'Do the following statements agree with the information given in Reading Passage 1?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'Significant numbers of thylacines were killed by humans from the 1830s onwards.' },
                        { statement: 'Several thylacines were born in zoos during the late 1800s.' },
                        { statement: 'John Gould\'s prediction about the thylacine surprised some biologists.' },
                        { statement: 'In the early 1900s, many scientists became worried about the possible extinction of the thylacine.' },
                        { statement: 'T.T. Flynn\'s proposal to rehome captive thylacines on an island proved to be impractical.' },
                        { statement: 'There were still reasonable numbers of thylacines in existence when a piece of legislation protecting the species during their breeding season was passed.' },
                        { statement: 'From 1930 to 1936, the only known living thylacines were all in captivity.' },
                        { statement: 'Attempts to find living thylacines are now rarely made.' }
                    ]
                }
            ]
        },
        {
            title: `Reading Passage 2`,
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong>&nbsp;which are based on Reading Passage 2 below.</span><span style="font-size: 14px;">&nbsp;</span></p>
<h2 style="text-align: center;"><span style="font-size: xx-large;"><strong>Palm oil</strong></span></h2>
<p><span style="font-size: large;"><strong>A</strong></span></p>
<p><span style="font-size: large;">Palm oil is an edible oil derived from the fruit of the African oil palm tree, and is currently the most consumed vegetable oil in the world. It's almost certainly in the soap we wash with in the morning, the sandwich we have for lunch, and the biscuits we snack on during the day. Why is palm oil so attractive for manufacturers? Primarily because its unique properties – such as remaining solid at room temperature – make it an ideal ingredient for long-term preservation, allowing many packaged foods on supermarket shelves to have 'best before' dates of months, even years, into the future.</span></p>
<p><span style="font-size: large;"><strong>B</strong></span></p>
<p><span style="font-size: large;">Many farmers have seized the opportunity to maximise the planting of oil palm trees. Between 1990 and 2012, the global land area devoted to growing oil palm trees grew from 6 to 17 million hectares, now accounting for around ten percent of total cropland in the entire world. From a mere two million tonnes of palm oil being produced annually globally 50 years ago, there are now around 60 million tonnes produced every single year, a figure looking likely to double or even triple by the middle of the century.</span></p>
<p><span style="font-size: large;"><strong>C</strong></span></p>
<p><span style="font-size: large;">However, there are multiple reasons why conservationists cite the rapid spread of oil palm plantations as a major concern. There are countless news stories of deforestation, habitat destruction and dwindling species populations, all as a direct result of land clearing to establish oil palm tree monoculture on an industrial scale, particularly in Malaysia and Indonesia. Endangered species – most famously the Sumatran orangutan, but also rhinos, elephants, tigers, and numerous other fauna – have suffered from the unstoppable spread of oil palm plantations.</span></p>
<p><span style="font-size: large;"><strong>D</strong></span></p>
<p><span style="font-size: large;">'Palm oil is surely one of the greatest threats to global biodiversity,' declares Dr Farnon Ellwood of the University of the West of England, Bristol. 'Palm oil is replacing rainforest, and rainforest is where all the species are. That's a problem.' This has led to some radical questions among environmentalists, such as whether consumers should try to boycott palm oil entirely.</span></p>
<p><span style="font-size: large;">Meanwhile Bhavani Shankar, Professor at London's School of Oriental and African Studies, argues, 'It's easy to say that palm oil is the enemy and we should be against it. It makes for a more dramatic story, and it's very intuitive. But given the complexity of the argument, I think a much more nuanced story is closer to the truth.'</span></p>
<p><span style="font-size: large;"><strong>E</strong></span></p>
<p><span style="font-size: large;">One response to the boycott movement has been the argument for the vital role palm oil plays in lifting many millions of people in the developing world out of poverty. Is it desirable to have palm oil boycotted, replaced, eliminated from the global supply chain, given how many low-income people in developing countries depend on it for their livelihoods? How best to strike a utilitarian balance between these competing factors has become a serious bone of contention.</span></p>
<p><span style="font-size: large;"><strong>F</strong></span></p>
<p><span style="font-size: large;">Even the deforestation argument isn't as straightforward as it seems. Oil palm plantations produce at least four and potentially up to ten times more oil per hectare than soybean, rapeseed, sunflower or other competing oils. That immensely high yield – which is predominantly what makes it so profitable – is potentially also an ecological benefit. If ten times more palm oil can be produced from a patch of land than any competing oil, then ten times more land would need to be cleared in order to produce the same volume of oil from that competitor.</span></p>
<p><span style="font-size: large;">As for the question of carbon emissions, the issue really depends on what oil palm trees are replacing. Crops vary in the degree to which they sequester carbon – in other words, the amount of carbon they capture from the atmosphere and store within the plant. The more carbon a plant sequesters, the more it reduces the effect of climate change. As Shankar explains: '[Palm oil production] actually sequesters more carbon in some ways than other alternatives. […] Of course, if you're cutting down virgin forest it's terrible – that's what's happening in Indonesia and Malaysia, it's been allowed to get out of hand. But if it's replacing rice, for example, it might actually sequester more carbon.'</span></p>
<p><span style="font-size: large;"><strong>G</strong></span></p>
<p><span style="font-size: large;">The industry is now regulated by a group called the Roundtable on Sustainable Palm Oil (RSPO), consisting of palm growers, retailers, product manufacturers, and other interested parties. Over the past decade or so, an agreement has gradually been reached regarding standards that producers of palm oil have to meet in order for their product to be regarded as officially 'sustainable'. The RSPO insists upon no virgin forest clearing, transparency and regular assessment of carbon stocks, among other criteria. Only once these requirements are fully satisfied is the oil allowed to be sold as certified sustainable palm oil (CSPO). Recent figures show that the RSPO now certifies around 12 million tonnes of palm oil annually, equivalent to roughly 21 percent of the world's total palm oil production.</span></p>
<p><span style="font-size: large;"><strong>H</strong></span></p>
<p><span style="font-size: large;">There is even hope that oil palm plantations might not need to be such sterile monocultures, or 'green deserts', as Ellwood describes them. New research at Ellwood's lab hint at one plant which might make all the difference. The bird's nest fern (<em>Asplenium nidus</em>) grows on trees in an epiphytic fashion (meaning it's dependent on the tree only for support, not for nutrients), and is native to many tropical regions, where as a keystone species it performs a vital ecological role. Ellwood believes that reintroducing the bird's nest fern into oil palm plantations could potentially allow these areas to recover their biodiversity, providing a home for all manner of species, from fungi and bacteria, to invertebrates such as insects, amphibians, reptiles and even mammals.</span></p>
            `,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 14,
                    title: 'Questions 14-20',
                    instruction: 'Reading Passage 2 has eight paragraphs, A-H. Which section contains the following information?',
                    paragraphRange: 'A-H',
                    items: [
                        { description: 'examples of a range of potential environmental advantages of oil palm tree cultivation' },
                        { description: 'description of an organisation which controls the environmental impact of palm oil production' },
                        { description: 'examples of the widespread global use of palm oil' },
                        { description: 'reference to a particular species which could benefit the ecosystem of oil palm plantations' },
                        { description: 'figures illustrating the rapid expansion of the palm oil industry' },
                        { description: 'an economic justification for not opposing the palm oil industry' },
                        { description: 'examples of creatures badly affected by the establishment of oil palm plantations' }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 21,
                    title: 'Questions 21 and 22',
                    instruction: 'Choose TWO letters, A-E.',
                    note: 'Which TWO statements are made about the Roundtable on Sustainable Palm Oil (RSPO)?',
                    items: [
                        {
                            questionNumber: 21,
                            questionText: 'Choose the first correct statement about RSPO:',
                            options: [
                                { value: 'A', text: 'Its membership has grown steadily over the course of the last decade.' },
                                { value: 'B', text: 'It demands that certified producers be open and honest about their practices.' },
                                { value: 'C', text: 'It took several years to establish its set of criteria for sustainable palm oil certification.' },
                                { value: 'D', text: 'Its regulations regarding sustainability are stricter than those governing other industries.' },
                                { value: 'E', text: 'It was formed at the request of environmentalists concerned about the loss of virgin forests.' }
                            ]
                        },
                        {
                            questionNumber: 22,
                            questionText: 'Choose the second correct statement about RSPO:',
                            options: [
                                { value: 'A', text: 'Its membership has grown steadily over the course of the last decade.' },
                                { value: 'B', text: 'It demands that certified producers be open and honest about their practices.' },
                                { value: 'C', text: 'It took several years to establish its set of criteria for sustainable palm oil certification.' },
                                { value: 'D', text: 'Its regulations regarding sustainability are stricter than those governing other industries.' },
                                { value: 'E', text: 'It was formed at the request of environmentalists concerned about the loss of virgin forests.' }
                            ]
                        }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 23,
                    title: 'Questions 23 and 24',
                    instruction: 'Choose TWO letters, A-E.',
                    note: 'Which TWO of the following statements does the writer make about literacy rates in Section B?',
                    multipleSelect: true,
                    selectCount: 2,
                    options: [
                        { value: 'A', text: 'Very little research has been done into the link between high literacy rates and improved earnings.' },
                        { value: 'B', text: 'Literacy rates in Germany between 1600 and 1900 were very good.' },
                        { value: 'C', text: 'There is strong evidence that high literacy rates in the modern world result in economic growth.' },
                        { value: 'D', text: 'England is a good example of how high literacy rates helped a country industrialise.' },
                        { value: 'E', text: 'Economic growth can help to improve literacy rates.' }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 25,
                    title: 'Questions 25 and 26',
                    instruction: 'Choose TWO letters, A-E.',
                    note: 'Which TWO of the following statements does the writer make in Section F about guilds in German-speaking Central Europe between 1600 and 1900?',
                    multipleSelect: true,
                    selectCount: 2,
                    options: [
                        { value: 'A', text: 'They helped young people to learn a skill.' },
                        { value: 'B', text: 'They were opposed to people moving to an area for work.' },
                        { value: 'C', text: 'They kept better records than guilds in other parts of the world.' },
                        { value: 'D', text: 'They opposed practices that threatened their control over a trade.' },
                        { value: 'E', text: 'They predominantly consisted of wealthy merchants.' }
                    ]
                }
            ]
        },
        {
            title: `Reading Passage 3`,
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 27-40</strong> which are based on Reading Passage 3 below.</span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Building the Skyline: The Birth and Growth of Manhattan's Skyscrapers</strong></span></h2>
<p><span style="font-size: large;"><em>Katharine L. Shester reviews a book by Jason Barr about the development of New York City</em></span></p>
<p><span style="font-size: large;">In <em>Building the Skyline</em>, Jason Barr takes the reader through a detailed history of New York City. The book combines geology, history, economics, and a lot of data to explain why business clusters developed where they did and how the early decisions of workers and firms shaped the skyline we see today. <em>Building the Skyline</em> is organized into two distinct parts. The first is primarily historical and addresses New York's settlement and growth from 1609 to 1900; the second deals primarily with the 20th century and is a compilation of chapters commenting on different aspects of New York's urban development. The tone and organization of the book changes somewhat between the first and second parts, as the latter chapters incorporate aspects of Barr's related research papers.</span></p>
<p><span style="font-size: large;">Barr begins chapter one by taking the reader on a 'helicopter time-machine' ride – giving a fascinating account of how the New York landscape in 1609 might have looked from the sky. He then moves on to a subterranean walking tour of the city, indicating the location of rock and water below the subsoil, before taking the reader back to the surface. His love of the city comes through as he describes various fun facts about the location of the New York residence of early 19th-century vice-president Aaron Burr as well as a number of legends about the city.</span></p>
<p><span style="font-size: large;">Chapters two and three take the reader up to the Civil War (1861-1865), with chapter two focusing on the early development of land and the implementation of a grid system in 1811. Chapter three focuses on land use before the Civil War. Both chapters are informative and well researched and set the stage for the economic analysis that comes later in the book. I would have liked Barr to expand upon his claim that existing tenements* prevented skyscrapers in certain neighborhoods because 'likely no skyscraper developer was interested in performing the necessary "slum clearance"'. Later in the book, Barr makes the claim that the depth of bedrock** was not a limiting factor for developers, as foundation costs were a small fraction of the cost of development. At first glance, it is not obvious why slum clearance would be limiting, while more expensive foundations would not.</span></p>
<p><span style="font-size: large;">Chapter four focuses on immigration and the location of neighborhoods and tenements in the late 19th century. Barr identifies four primary immigrant enclaves and analyses their locations in terms of the amenities available in the area. Most of these enclaves were located on the least valuable land, between the industries located on the waterfront and the wealthy neighborhoods bordering Central Park.</span></p>
<p><span style="font-size: large;">Part two of the book begins with a discussion of the economics of skyscraper height. In chapter five, Barr distinguishes between engineering height, economic height, and developer height – where engineering height is the tallest building that can be safely made at a given time, economic height is the height that is most efficient from society's point of view, and developer height is the actual height chosen by the developer, who is attempting to maximize return on investment.</span></p>
<p><span style="font-size: large;">Chapter five also has an interesting discussion of the technological advances that led to the construction of skyscrapers. For example, the introduction of iron and steel skeletal frames made thick, load-bearing walls unnecessary, expanding the usable square footage of buildings and increasing the use of windows and availability of natural light. Chapter six then presents data on building height throughout the 20th century and uses regression analysis to 'predict' building construction. While less technical than the research paper on which the chapter is based, it is probably more technical than would be preferred by a general audience.</span></p>
<p><span style="font-size: large;">Chapter seven tackles the 'bedrock myth', the assumption that the absence of bedrock close to the surface between Downtown and Midtown New York is the reason for skyscrapers not being built between the two urban centers. Rather, Barr argues that while deeper bedrock does increase foundation costs, these costs were neither prohibitively high nor were they large compared to the overall cost of building a skyscraper. What I enjoyed the most about this chapter was Barr's discussion of how foundations are actually built. He describes the use of caissons, which enable workers to dig down for considerable distances, often below the water table, until they reach bedrock. Barr's thorough technological history discusses not only how caissons work, but also the dangers involved. While this chapter references empirical research papers, it is a relatively easy read.</span></p>
<p><span style="font-size: large;">Chapters eight and nine focus on the birth of Midtown and the building boom of the 1920s. Chapter eight contains lengthy discussions of urban economic theory that may serve as a distraction to readers primarily interested in New York. However, they would be well-suited for undergraduates learning about the economics of cities. In the next chapter, Barr considers two of the primary explanations for the building boom of the 1920s – the first being exuberance, and the second being financing. He uses data to assess the viability of these two explanations and finds that supply and demand factors explain much of the development of the 1920s; though it enable the boom, cheap credit was not, he argues, the primary cause.</span></p>
<p><span style="font-size: large;">In the final chapter (chapter 10), Barr discusses another of his empirical papers that estimates Manhattan land values from the mid-19th century to the present day. The data work that went into these estimations is particularly impressive. Toward the end of the chapter, Barr assesses 'whether skyscrapers are a cause or an effect of high land values'. He finds that changes in land values predict future building height, but the reverse is not true. The book ends with an epilogue, in which Barr discusses the impact of climate change on the city and makes policy suggestions for New York going forward.</span></p>
<p><span style="font-size: large;">————-</span></p>
<p><span style="font-size: medium;">* a tenement: a multi-occupancy building of any sort, but particularly a run-down apartment building or slum building</span></p>
<p><span style="font-size: medium;">** bedrock: the solid, hard rock in the ground that lies under a loose layer of soil</span></p>
            `,
            questions: [
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 27,
                    title: 'Questions 27-31',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            questionNumber: 27,
                            questionText: 'What point does Shester make about Barr\'s book in the first paragraph?',
                            options: [
                                { value: 'A', text: 'It gives a highly original explanation for urban development.' },
                                { value: 'B', text: 'Elements of Barr\'s research papers are incorporated throughout the book.' },
                                { value: 'C', text: 'Other books that are available on the subject have taken a different approach.' },
                                { value: 'D', text: 'It covers a range of factors that affected the development of New York.' }
                            ]
                        },
                        {
                            questionNumber: 28,
                            questionText: 'How does Shester respond to the information in the book about tenements?',
                            options: [
                                { value: 'A', text: 'She describes the reasons for Barr\'s interest.' },
                                { value: 'B', text: 'She indicates a potential problem with Barr\'s analysis.' },
                                { value: 'C', text: 'She compares Barr\'s conclusion with that of other writers.' },
                                { value: 'D', text: 'She provides details about the sources Barr used for his research.' }
                            ]
                        },
                        {
                            questionNumber: 29,
                            questionText: 'What does Shester say about chapter six of the book?',
                            options: [
                                { value: 'A', text: 'It contains conflicting data.' },
                                { value: 'B', text: 'It focuses too much on possible trends.' },
                                { value: 'C', text: 'It is too specialised for most readers.' },
                                { value: 'D', text: 'It draws on research that is out of date.' }
                            ]
                        },
                        {
                            questionNumber: 30,
                            questionText: 'What does Shester suggest about the chapters focusing on the 1920s building boom?',
                            options: [
                                { value: 'A', text: 'The information should have been organised differently.' },
                                { value: 'B', text: 'More facts are needed about the way construction was financed.' },
                                { value: 'C', text: 'The explanation that is given for the building boom is unlikely.' },
                                { value: 'D', text: 'Some parts will have limited appeal to certain people.' }
                            ]
                        },
                        {
                            questionNumber: 31,
                            questionText: 'What impresses Shester the most about the chapter on land values?',
                            options: [
                                { value: 'A', text: 'the broad time period that is covered' },
                                { value: 'B', text: 'the interesting questions that Barr asks' },
                                { value: 'C', text: 'the nature of the research into the topic' },
                                { value: 'D', text: 'the recommendations Barr makes for the future' }
                            ]
                        }
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
                        { statement: 'The description in the first chapter of how New York probably looked from the air in the early 1600s lacks interest.' },
                        { statement: 'Chapters two and three prepare the reader well for material yet to come.' },
                        { statement: 'The biggest problem for many nineteenth-century New York immigrant neighbourhoods was a lack of amenities.' },
                        { statement: 'In the nineteenth century, New York\'s immigrant neighbourhoods tended to concentrate around the harbour.' }
                    ]
                },
                {
                    type: 'summary-completion',
                    startQuestionNumber: 36,
                    title: 'Questions 36-40',
                    instruction: 'Complete the summary using the list of phrases, A-J, below.',
                    sectionTitle: 'The bedrock myth',
                    options: [
                        { value: 'A', text: 'development plans' },
                        { value: 'B', text: 'deep excavations' },
                        { value: 'C', text: 'great distance' },
                        { value: 'D', text: 'excessive expense' },
                        { value: 'E', text: 'impossible tasks' },
                        { value: 'F', text: 'associated risks' },
                        { value: 'G', text: 'water level' },
                        { value: 'H', text: 'specific areas' },
                        { value: 'I', text: 'total expenditure' },
                        { value: 'J', text: 'construction guidelines' }
                    ],
                    items: [
                        {
                            prefix: 'In chapter seven, Barr indicates how the lack of bedrock close to the surface does not explain why skyscrapers are absent from',
                            suffix: '.'
                        },
                        {
                            prefix: 'He points out that although the cost of foundations increases when bedrock is deep below the surface, this cannot be regarded as',
                            suffix: ', especially when compared to'
                        },
                        {
                            prefix: '.',
                            suffix: ''
                        },
                        {
                            prefix: 'A particularly enjoyable part of the chapter was Barr\'s account of how foundations are built. He describes not only how',
                            suffix: 'are made possible by the use of caissons, but he also discusses their'
                        },
                        {
                            prefix: '. The chapter is well researched but relatively easy to understand.',
                            suffix: ''
                        }
                    ]
                }
            ]
        }
    ]
};
