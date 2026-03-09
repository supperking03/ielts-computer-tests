export const cam17test2 = {
    id: 6,
    title: 'Reading CAM 17 Test 2',
    explanation: "https://drive.google.com/file/d/14eGTicPpKveeYijOMggj2bKMQK7OY3AM/view?usp=sharing",
    image: 'https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam-17-test-2.jpg',
    correctAnswers: [
        // Q1-5: Fill in blanks
        'rock', 'cave', 'clay', 'Essenes', 'Hebrew',
        // Q6-13: True/False/Not Given
        'NOT GIVEN', 'FALSE', 'TRUE', 'TRUE', 'FALSE', 'FALSE', 'TRUE', 'NOT GIVEN',
        // Q14-18: Paragraph matching
        'C', 'B', 'E', 'A', 'C',
        // Q19-23: Matching researchers
        'B', 'D', 'A', 'C', 'A',
        // Q24-26: Sentence completion
        'flavour', 'size', 'salt',
        // Q27-31: Multiple choice
        'D', 'A', 'A', 'C', 'A',
        // Q32-36: Yes/No/Not Given
        'NO', 'NOT GIVEN', 'YES', 'NO', 'NOT GIVEN',
        // Q37-40: Summary completion
        'F', 'D', 'E', 'B'
    ],
    passages: [
        {
            title: `Reading Passage 1`,
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span><span style="font-size: 14px; text-align: left; color: #353535;"></span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>The Dead Sea Scrolls</strong></span></h2>
<p><span style="font-size: large;">In late 1946 or early 1947, three Bedouin teenagers were tending their goats and sheep near the ancient settlement of Qumran, located on the northwest shore of the Dead Sea in what is now known as the West Bank. One of these young shepherds tossed a rock into an opening on the side of a cliff and was surprised to hear a shattering sound. He and his companions later entered the cave and stumbled across a collection of large clay jars, seven of which contained scrolls with writing on them. The teenagers took the seven scrolls to a nearby town where they were sold for a small sum to a local antiquities dealer. Word of the find spread, and Bedouins and archaeologists eventually unearthed tens of thousands of additional scroll fragments from 10 nearby caves; together they make up between 800 and 900 manuscripts. It soon became clear that this was one of the greatest archaeological discoveries ever made.</span></p>
<p><span style="font-size: large;">The origin of the Dead Sea Scrolls, which were written around 2,000 years ago between 150 BCE and 70 CE, is still the subject of scholarly debate even today. According to the prevailing theory, they are the work of a population that inhabited the area until Roman troops destroyed the settlement around 70 CE. The area was known as Judea at that time, and the people are thought to have belonged to a group called the Essenes, a devout Jewish sect.</span></p>
<p><span style="font-size: large;">The majority of the texts on the Dead Sea Scrolls are in Hebrew, with some fragments written in an ancient version of its alphabet thought to have fallen out of use in the fifth century BCE. But there are other languages as well. Some scrolls are in Aramaic, the language spoken by many inhabitants of the region from the sixth century BCE to the siege of Jerusalem in 70 CE. In addition, several texts feature translations of the Hebrew Bible into Greek.</span></p>
<p><span style="font-size: large;">The Dead Sea Scrolls include fragments from every book of the Old Testament of the Bible except for the Book of Esther. The only entire book of the Hebrew Bible preserved among the manuscripts from Qumran is Isaiah; this copy, dated to the first century BCE, is considered the earliest biblical manuscript still in existence. Along with biblical texts, the scrolls include documents about sectarian regulations and religious writings that do not appear in the Old Testament.</span></p>
<p><span style="font-size: large;">The writing on the Dead Sea Scrolls is mostly in black or occasionally red ink, and the scrolls themselves are nearly all made of neither parchment (animal skin) or an early form of paper called 'papyrus'. The only exception is the scroll numbered 3Q15, which was created out of a combination of copper and tin. Known as the Copper Scroll, this curious document features letters chiselled onto metal – perhaps, as some have theorized, to better withstand the passage of time. One of the most intriguing manuscripts from Qumran, this is a sort of ancient treasure map that lists dozens of gold and silver caches. Using an unconventional vocabulary and odd spelling, it describes 64 underground hiding places that supposedly contain riches buried for safekeeping. None of these hoards have been recovered, possibly because the Romans pillaged Judea during the first century CE. According to various hypotheses, the treasure belonged to local people, or was rescued from the Second Temple before its destruction or never existed to begin with.</span></p>
<p><span style="font-size: large;">Some of the Dead Sea Scrolls have been on interesting journeys. In 1948, a Syrian Orthodox archbishop known as Mar Samuel acquired four of the original seven scrolls from a Jerusalem shoemaker and part-time antiquity dealer, paying less than $100 for them. He then travelled to the United States and unsuccessfully offered them to a number of universities, including Yale. Finally, in 1954, he placed an advertisement in the business newspaper <em>The Wall Street Journal</em> – under the category 'Miscellaneous Items for Sale' – that read: 'Biblical Manuscripts dating back to at least 200 B.C. are for sale. This would be an ideal gift to an educational or religious institution by an individual or group.' Fortunately, Israeli archaeologist and statesman Yigael Yadin negotiated their purchase and brought the scrolls back to Jerusalem, where they remain to this day.</span></p>
<p><span style="font-size: large;">In 2017, researchers from the University of Haifa restored and deciphered one of the last untranslated scrolls. The university's Eshbal Ratson and Jonathan Ben-Dov spent one year reassembling the 60 fragments that make up the scroll. Deciphered from a band of coded text on parchment, the find provides insight into the community of people who wrote it and the 364-day calendar they would have used. The scroll names celebrations that indicate shifts in seasons and details two yearly religious events known from another Dead Sea Scroll. Only one more known scroll remains untranslated.</span></p>
            `,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 1,
                    title: 'Questions 1-5',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                    sectionTitle: 'The Dead Sea Scrolls',
                    items: [
                        {
                            prefix: 'Discovery - Qumran, 1946/7: three Bedouin shepherds in their teens were near an opening on side of cliff. Heard a noise of breaking when one teenager threw a',
                            suffix: ''
                        },
                        {
                            prefix: 'Teenagers went into the',
                            suffix: 'and found a number of containers made of'
                        },
                        {
                            prefix: '',
                            suffix: '. The scrolls: date from between 150 BCE and 70 CE, thought to have been written by group of people known as the'
                        },
                        {
                            prefix: '',
                            suffix: '. Written mainly in the'
                        },
                        {
                            prefix: '',
                            suffix: 'language. Most are on religious topics, written using ink on parchment or papyrus'
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
                        { statement: 'The Bedouin teenagers who found the scrolls were disappointed by how little money they received for them.' },
                        { statement: 'There is agreement among academics about the origin of the Dead Sea Scrolls.' },
                        { statement: 'Most of the books of the Bible written on the scrolls are incomplete.' },
                        { statement: 'The information on the Copper Scroll is written in an unusual way.' },
                        { statement: 'Mar Samuel was given some of the scrolls as a gift.' },
                        { statement: 'In the early 1950s, a number of educational establishments in the US were keen to buy scrolls from Mar Samuel.' },
                        { statement: 'The scroll that was pieced together in 2017 contains information about annual occasions in the Qumran area 2,000 years ago.' },
                        { statement: 'Academics at the University of Haifa are currently researching how to decipher the final scroll.' }
                    ]
                }
            ]
        },
        {
            title: `Reading Passage 2`,
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong>&nbsp;which are based on Reading Passage 2 below.</span><span style="font-size: 14px;">&nbsp;</span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>A second attempt at domesticating the tomato</strong></span></h2>
<p><span style="font-size: large;"><strong>A</strong></span></p>
<p><span style="font-size: large;">It took at least 3,000 years for humans to learn how to domesticate the wild tomato and cultivate it for food. Now two separate teams in Brazil and China have done it all over again in less than three years. And they have done it better in some ways, as the re-domesticated tomatoes are more nutritious than the ones we eat at present.</span></p>
<p><span style="font-size: large;">This approach relies on the revolutionary CRISPR genome editing technique, in which changes are deliberately made to the DNA of a living cell, allowing genetic material to be added, removed or altered. The technique could not only improve existing crops, but could also be used to turn thousands of wild plants into useful and appealing foods. In fact, a third team in the US has already begun to do this with a relative of the tomato called the groundcherry.</span></p>
<p><span style="font-size: large;">This fast-track domestication could help make the world's food supply healthier and far more resistant to diseases, such as the rust fungus devastating wheat crops.</span></p>
<p><span style="font-size: large;">'This could transform what we eat,' says Jorg Kudla at the University of Munster in Germany, a member of the Brazilian team. 'There are 50,000 edible plants in the world, but 90 percent of our energy comes from just 15 crops.'</span></p>
<p><span style="font-size: large;">'We can now mimic the known domestication course of major crops like rice, maize, sorghum or others,' says Caixia Gao of the Chinese Academy of Sciences in Beijing. 'Then we might try to domesticate plants that have never been domesticated.'</span></p>
<p><span style="font-size: large;"><strong>B</strong></span></p>
<p><span style="font-size: large;">Wild tomatoes, which are native to the Andes region in South America, produce pea-sized fruits. Over many generations, peoples such as the Aztecs and Incas transformed the plant by selecting and breeding plants with mutations* in their genetic structure, which resulted in desirable traits such as larger fruit.</span></p>
<p><span style="font-size: large;">But every time a single plant with a mutation is taken from a larger population for breeding, much genetic diversity is lost. And sometimes the desirable mutations come with less desirable traits. For instance, the tomato strains grown for supermarkets have lost much of their flavour.</span></p>
<p><span style="font-size: large;">By comparing the genomes of modern plants to those of their wild relatives, biologists have been working out what genetic changes occurred as plants were domesticated. The teams in Brazil and China have now used this knowledge to reintroduce these changes from scratch while maintaining or even enhancing the desirable traits of wild strains.</span></p>
<p><span style="font-size: large;"><strong>C</strong></span></p>
<p><span style="font-size: large;">Kudla's team made six changes altogether. For instance, they tripled the size of fruit by editing a gene called FRUIT WEIGHT, and increased the number of tomatoes per truss by editing another called MULTIFLORA.</span></p>
<p><span style="font-size: large;">While the historical domestication of tomatoes reduced levels of the red pigment lycopene – thought to have potential health benefits – the team in Brazil managed to boost it instead. The wild tomato has twice as much lycopene as cultivated ones; the newly domesticated one has five times as much.</span></p>
<p><span style="font-size: large;">'They are quite tasty,' says Kudla. 'A little bit strong. And very aromatic.'</span></p>
<p><span style="font-size: large;">The team in China re-domesticated several strains of wild tomatoes with desirable traits lost in domesticated tomatoes. In this way they managed to create a strain resistant to a common disease called bacterial spot race, which can devastate yields. They also created another strain that is more salt tolerant – and has higher levels of vitamin C.</span></p>
<p><span style="font-size: large;"><strong>D</strong></span></p>
<p><span style="font-size: large;">Meanwhile, Joyce Van Eck at the Boyce Thompson Institute in New York state decided to use the same approach to domesticate the groundcherry or goldenberry (<em>Physalis pruinosa</em>) for the first time. This fruit looks similar to the closely related Cape gooseberry (<em>Physalis peruviana</em>).</span></p>
<p><span style="font-size: large;">Groundcherries are already sold to a limited extent in the US but they are hard to produce because the plant has a sprawling growth habit and the small fruits fall off the branches when ripe. Van Eck's team has edited the plants to increase fruit size, make their growth more compact and to stop fruits dropping. 'There's potential for this to be a commercial crop,' says Van Eck. But she adds that taking the work further would be expensive because of the need to pay for a licence for the CRISPR technology and get regulatory approval.</span></p>
<p><span style="font-size: large;"><strong>E</strong></span></p>
<p><span style="font-size: large;">This approach could boost the use of many obscure plants, says Jonathan Jones of the Sainsbury Lab in the UK. But it will be hard for new foods to grow so popular with farmers and consumers that they become new staple crops, he thinks.</span></p>
<p><span style="font-size: large;">The three teams already have their eye on other plants that could be 'catapulted into the mainstream', including foxtail, oat-grass and cowpea. By choosing wild plants that are drought or heat tolerant, says Gao, we could create crops that will thrive even as the planet warms.</span></p>
<p><span style="font-size: large;">But Kudla didn't want to reveal which species were in his team's sights, because CRISPR has made the process so easy. 'Any one with the right skills could go to their lab and do this.'</span></p>
<p><span style="font-size: large;">———————-</span></p>
<p><span style="font-size: medium;">* mutations: changes in an organism's genetic structure that can be passed down to later generations</span></p>
            `,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 14,
                    title: 'Questions 14-18',
                    instruction: 'Reading Passage 2 has five paragraphs, A-E. Which section contains the following information?',
                    paragraphRange: 'A-E',
                    note: 'You may use any letter more than once.',
                    items: [
                        { description: 'a reference to a type of tomato that can resist a dangerous infection' },
                        { description: 'an explanation of how problems can arise from focusing only on a certain type of tomato plant' },
                        { description: 'a number of examples of plants that are not cultivated at present but could be useful as food sources' },
                        { description: 'a comparison between the early domestication of the tomato and more recent research' },
                        { description: 'a personal reaction to the flavour of a tomato that has been genetically edited' }
                    ]
                },
                {
                    type: 'matching',
                    startQuestionNumber: 19,
                    title: 'Questions 19-23',
                    instruction: 'Look at the following statements (Questions 19-23) and the list of researchers below. Match each statement with the correct researcher, A-D.',
                    note: 'You may use any letter more than once.',
                    options: [
                        { value: 'A', label: 'Jorg Kudla' },
                        { value: 'B', label: 'Caixia Gao' },
                        { value: 'C', label: 'Joyce Van Eck' },
                        { value: 'D', label: 'Jonathan Jones' }
                    ],
                    items: [
                        { description: 'Domestication of certain plants could allow them to adapt to future environmental challenges.' },
                        { description: 'The idea of growing and eating unusual plants may not be accepted on a large scale.' },
                        { description: 'It is not advisable for the future direction of certain research to be made public.' },
                        { description: 'Present efforts to domesticate one wild fruit are limited by the costs involved.' },
                        { description: 'Humans only make use of a small proportion of the plant food available on Earth.' }
                    ]
                },
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 24,
                    title: 'Questions 24-26',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                    items: [
                        {
                            prefix: 'An undesirable trait such as loss of',
                            suffix: 'may be caused by a mutation in a tomato gene.'
                        },
                        {
                            prefix: 'By modifying one gene in a tomato plant, researchers made the tomato three times its original',
                            suffix: '.'
                        },
                        {
                            prefix: 'A type of tomato which was not badly affected by',
                            suffix: ', and was rich in vitamin C, was produced by a team of researchers in China.'
                        }
                    ]
                }
            ]
        },
        {
            title: `Reading Passage 3`,
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 27-40</strong> which are based on Reading Passage 3 below.</span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Insight or evolution?</strong></span></h2>
<p><span style="font-size: large;"><em>Two scientists consider the origins of discoveries and other innovative behavior</em></span></p>
<p><span style="font-size: large;">Scientific discovery is popularly believed to result from the sheer genius of such intellectual stars as naturalist Charles Darwin and theoretical physicist Albert Einstein. Our view of such unique contributions to science often disregards the person's prior experience and the efforts of their lesser-known predecessors. Conventional wisdom also places great weight on insight in promoting breakthrough scientific achievements, as if ideas spontaneously pop into someone's head – fully formed and functional.</span></p>
<p><span style="font-size: large;">There may be some limited truth to this view. However, we believe that it largely misrepresents the real nature of scientific discovery, as well as that of creativity and innovation in many other realms of human endeavor.</span></p>
<p><span style="font-size: large;">Setting aside such greats as Darwin and Einstein – whose monumental contributions are duly celebrated – we suggest that innovation is more a process of trial and error, where two steps forward may sometimes come with one step back, as well as one or more stops to the right or left. This evolutionary view of human innovation undermines the notion of creative genius and recognizes the cumulative nature of scientific progress.</span></p>
<p><span style="font-size: large;">Consider one unheralded scientist: John Nicholson, a mathematical physicist working in the 1910s who postulated the existence of 'proto-elements' in outer space. By combining different numbers of weights of these proto-elements' atoms, Nicholson could recover the weights of all the elements in the then-known periodic table. These successes are all the more noteworthy given the fact that Nicholson was wrong about the presence of proto-elements: they do not actually exist. Yet, amid his often fanciful theories and wild speculations, Nicholson also proposed a novel theory about the structure of atoms. Niels Bohr, the Nobel prize-winning father of modern atomic theory, jumped off from this interesting idea to conceive his now-famous model of the atom.</span></p>
<p><span style="font-size: large;">What are we to make of this story? One might simply conclude that science is a collective and cumulative enterprise. That may be true, but there may be a deeper insight to be gleaned. We propose that science is constantly evolving, much as species of animals do. In biological systems, organisms may display new characteristics that result from random genetic mutations. In the same way, random, arbitrary or accidental mutations of ideas may help pave the way for advances in science. If mutations prove beneficial, then the animal or the scientific theory will continue to thrive and perhaps reproduce.</span></p>
<p><span style="font-size: large;">Support for this evolutionary view of behavioral innovation comes from many domains. Consider one example of an influential innovation in US horseracing. The so-called 'acey-deucy' stirrup placement, in which the rider's foot in his left stirrup is placed as much as 25 centimeters lower than the right, is believed to confer important speed advantages when turning on oval tracks. It was developed by a relatively unknown jockey named Jackie Westrope. Had Westrope conducted methodical investigations or examined extensive film records in a shrewd plan to outrun his rivals? Had he foreseen the speed advantage that would be conferred by riding acey-deucy? No. He suffered a leg injury, which left him unable to fully bend his left knee. His modification just happened to coincide with enhanced left-hand turning performance. This led to the rapid and widespread adoption of riding acey-deucy by many riders, a racing style which continues in today's thoroughbred racing.</span></p>
<p><span style="font-size: large;">Plenty of other stories show that fresh advances can arise from error, misadventure, and also pure serendipity – a happy accident. For example, in the early 1970s, two employees of the company 3M each had a problem: Spencer Silver had a product – a glue which was only slightly sticky – and no use for it, while his colleague Art Fry was trying to figure out how to affix temporary bookmarks in his hymn book without damaging its pages. The solution to both these problems was invention of the brilliantly simple yet phenomenally successful Post-It note. Such examples give lie to the claim that ingenious, designing minds are responsible for human creativity and invention. Far more banal and mechanical forces may be at work; forces that are fundamentally connected to the laws of science.</span></p>
<p><span style="font-size: large;">The notions of insight, creativity and genius are often invoked, but they remain vague and of doubtful scientific utility, especially when one considers the diverse and enduring contributions of individuals such as Plato, Leonardo da Vinci, Shakespeare, Beethoven, Galileo, Newton, Kepler, Curie, Pasteur and Edison. These notions merely label rather than explain the evolution of human innovations. We need another approach, and there is a promising candidate.</span></p>
<p><span style="font-size: large;">The Law of Effect was advanced by psychologist Edward Thorndike in 1898, some 40 years after Charles Darwin published his groundbreaking work on biological evolution, <em>On the Origin of Species</em>. This simple law holds that organisms tend to repeat successful behaviors and to refrain from performing unsuccessful ones. Just like Darwin's Law of Natural Selection, the Law of Effect involves an entirely mechanical process of variation and selection, without any end objective in sight.</span></p>
<p><span style="font-size: large;">Of course, the origin of human innovation demands much further study. In particular, the provenance of the raw material on which the Law of Effect operates is not as clearly known as that of the genetic mutations on which the Law of Natural Selection operates. The generation of novel ideas and behaviors may not be entirely random, but constrained by prior successes and failures – of the current individual (such as Bohr) or of predecessors (such as Nicholson).</span></p>
<p><span style="font-size: large;">The time seems right for abandoning the naïve notion of intelligent design and genius, and for scientifically exploring the true origins of creative behavior.</span></p>
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
                            questionText: 'The purpose of the first paragraph is to',
                            options: [
                                { value: 'A', text: 'defend particular ideas.' },
                                { value: 'B', text: 'compare certain beliefs.' },
                                { value: 'C', text: 'disprove a widely held view.' },
                                { value: 'D', text: 'outline a common assumption.' }
                            ]
                        },
                        {
                            questionNumber: 28,
                            questionText: 'What are the writers doing in the second paragraph?',
                            options: [
                                { value: 'A', text: 'criticising an opinion' },
                                { value: 'B', text: 'justifying a standpoint' },
                                { value: 'C', text: 'explaining an approach' },
                                { value: 'D', text: 'supporting an argument' }
                            ]
                        },
                        {
                            questionNumber: 29,
                            questionText: 'In the third paragraph, what do the writers suggest about Darwin and Einstein?',
                            options: [
                                { value: 'A', text: 'They represent an exception to a general rule.' },
                                { value: 'B', text: 'Their way of working has been misunderstood.' },
                                { value: 'C', text: 'They are an ideal which others should aspire to.' },
                                { value: 'D', text: 'Their achievements deserve greater recognition.' }
                            ]
                        },
                        {
                            questionNumber: 30,
                            questionText: 'John Nicholson is an example of a person whose idea',
                            options: [
                                { value: 'A', text: 'established his reputation as an influential scientist.' },
                                { value: 'B', text: 'was only fully understood at a later point in history.' },
                                { value: 'C', text: 'laid the foundations for someone else\'s breakthrough.' },
                                { value: 'D', text: 'initially met with scepticism from the scientific community.' }
                            ]
                        },
                        {
                            questionNumber: 31,
                            questionText: 'What is the key point of interest about the \'acey-deucy\' stirrup placement?',
                            options: [
                                { value: 'A', text: 'the simple reason why it was invented' },
                                { value: 'B', text: 'the enthusiasm with which it was adopted' },
                                { value: 'C', text: 'the research that went into its development' },
                                { value: 'D', text: 'the cleverness of the person who first used it' }
                            ]
                        }
                    ]
                },
                {
                    type: 'yes-no-not-given',
                    startQuestionNumber: 32,
                    title: 'Questions 32-36',
                    instruction: 'Do the following statements agree with the claims of the writer in Reading Passage 3?',
                    options: [
                        { value: 'YES', description: 'if the statement agrees with the claims of the writer' },
                        { value: 'NO', description: 'if the statement contradicts the claims of the writer' },
                        { value: 'NOT GIVEN', description: 'if it is impossible to say what the writer thinks about this' }
                    ],
                    items: [
                        { statement: 'Acknowledging people such as Plato or da Vinci as geniuses will help us understand the process by which great minds create new ideas.' },
                        { statement: 'The Law of Effect was discovered at a time when psychologists were seeking a scientific reason why creativity occurs.' },
                        { statement: 'The Law of Effect states that no planning is involved in the behaviour of organisms.' },
                        { statement: 'The Law of Effect sets out clear explanations about the sources of new ideas and behaviours.' },
                        { statement: 'Many scientists are now turning away from the notion of intelligent design and genius.' }
                    ]
                },
                {
                    type: 'summary-completion',
                    startQuestionNumber: 37,
                    title: 'Questions 37-40',
                    instruction: 'Complete the summary using the list of words, A-G, below.',
                    sectionTitle: 'The origins of creative behaviour',
                    options: [
                        { value: 'A', text: 'invention' },
                        { value: 'B', text: 'goals' },
                        { value: 'C', text: 'compromise' },
                        { value: 'D', text: 'mistakes' },
                        { value: 'E', text: 'luck' },
                        { value: 'F', text: 'inspiration' },
                        { value: 'G', text: 'experiments' }
                    ],
                    items: [
                        {
                            prefix: 'The traditional view of scientific discovery is that breakthroughs happen when a single great mind has sudden',
                            suffix: '. Although this can occur, it is not often the case.'
                        },
                        {
                            prefix: 'Advances are more likely to be the result of a longer process. In some cases, this process involves',
                            suffix: ', such as Nicholson\'s theory about proto-elements.'
                        },
                        {
                            prefix: 'In others, simple necessity may provoke innovation, as with Westrope\'s decision to modify the position of his riding stirrups. There is also often an element of',
                            suffix: ', for example, the coincidence of ideas that led to the invention of the Post-It note.'
                        },
                        {
                            prefix: 'With both the Law of Natural Selection and the Law of Effect, there may be no clear',
                            suffix: 'involved, but merely a process of variation and selection.'
                        }
                    ]
                }
            ]
        }
    ]
};
