export const cam16test1 = {
    id: 9,
    explanation: "https://drive.google.com/file/d/1o-aAPp0dF1AcWe8I-k7YR78AqtikVKd-/view?usp=sharing",
    title: 'Reading CAM 16 Test 1',
    image: 'https://ieltstrainingonline.com/wp-content/uploads/2021/07/cam-16-test-1.jpg',
    correctAnswers: [
        // Q1-7: True/False/Not Given
        "FALSE", "FALSE", "NOT GIVEN", "TRUE", "TRUE", "FALSE", "TRUE",
        // Q8-13: Table completion
        "violent", "tool", "meat", "photographer", "game", "frustration",
        // Q14-20: Paragraph headings
        "iv", "vii", "ii", "v", "i", "viii", "vi",
        // Q21-24: Summary completion
        "city", "priests", "trench", "location",
        // Q25-26: Multiple choice
        "B", "D",
        // Q27-30: Multiple choice
        "B", "D", "C", "D",
        // Q31-34: Summary completion
        "information", "reliance", "intuition", "confidence",
        // Q35-40: Matching
        "B", "A", "C", "A", "B", "C"
    ],
    passages: [
        {
            title: `Reading Passage 1`,
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span></p>
            <h2 style="text-align: center;"><span style="font-size: xx-large;"><strong>Why we need to protect polar bears</strong></span></h2>
                             <p><span style="font-size: large;">Polar bears are being increasingly threatened by the effects of climate change, but their disappearance could have far-reaching consequences. They are uniquely adapted to the extreme conditions of the Arctic Circle, where temperatures can reach -40°C. One reason for this is that they have up to 11 centimetres of fat underneath their skin. Humans with comparative levels of adipose tissue would be considered obese and would be likely to suffer from diabetes and heart disease. Yet the polar bear experiences no such consequences.</span></p>
             <p><span style="font-size: large;">A 2014 study by Shi Ping Liu and colleagues sheds light on this mystery. They compared the genetic structure of polar bears with that of their closest relatives from a warmer climate, the brown bears. This allowed them to determine the genes that have allowed polar bears to survive in one of the toughest environments on Earth. Liu and his colleagues found the polar bears had a gene known as APoB, which reduces levels of low-density lipoproteins (LDLs) – a form of 'bad' cholesterol. In humans, mutations of this gene are associated with increased risk of heart disease. Polar bears may therefore be an important study model to understand heart disease in humans.</span></p>
             <p><span style="font-size: large;">The genome of the polar bear may also provide the solution for another condition, one that particularly affects our older generation: osteoporosis. This is a disease where bones show reduced density, usually caused by insufficient exercise, reduced calcium intake or food starvation. Bone tissue is constantly being remodelled, meaning that bone is added or removed, depending on nutrient availability and the stress that the bone is under. Female polar bears, however, undergo extreme conditions during every pregnancy. Once autumn comes around, these females will dig maternity dens in the snow and will remain there throughout the winter, both before and after the birth of their cubs. This process results in about six months of fasting, where the female bears have to keep themselves and their cubs alive, depleting their own calcium and calorie reserves. Despite this, their bones remain strong and dense.</span></p>
             <p><span style="font-size: large;">Physiologists Alanda Lennox and Allen Goodship found an explanation for this paradox in 2008. They discovered that pregnant bears were able to increase the density of their bones before they started to build their dens. In addition, six months later, when they finally emerged from the den with their cubs, there was no evidence of significant loss of bone density. Hibernating brown bears do not have this capacity and must therefore resort to major bone reformation in the following spring. If the mechanism of bone remodelling in polar bears can be understood, many bedridden humans, and even astronauts, could potentially benefit.</span></p>
             <p><span style="font-size: large;">The medical benefits of the polar bear for humanity certainly have their importance in our conservation efforts, but these should not be the only factors taken into consideration. We tend to want to protect animals we think are intelligent and possess emotions, such as elephants and primates. Bears, on the other hand, seem to be perceived as stupid and in many cases violent. And yet anecdotal evidence from the field challenges those assumptions, suggesting for example that polar bears have good problem-solving abilities. A male bear called GoGo in Tennoji Zoo, Osaka, has even been observed making use of a tool to manipulate his environment. The bear used a tree branch on multiple occasions to dislodge a piece of meat hung out of his reach. Problem-solving ability has also been witnessed in wild polar bears, although not as obviously as with GoGo. A calculated move by a male bear involved running and jumping onto barrels in an attempt to get to a photographer standing on a platform four metres high.</span></p>
             <p><span style="font-size: large;">In other studies, such as one by Alison Ames in 2008, polar bears showed deliberate and focused manipulation. For example, Ames observed bears putting objects in piles and then knocking them over in what appeared to be a game. The study demonstrates that bears are capable of agile and thought-out behaviours. These examples suggest bears have greater creativity and problem-solving abilities than previously thought.</span></p>
             <p><span style="font-size: large;">As for emotions, while the evidence is once again anecdotal, many bears have been seen to hit out at ice and snow – seemingly out of frustration – when they have just missed out on a kill. Moreover, polar bears can form unusual relationships with other species, including playing with the dogs used to pull sleds in the Arctic. Remarkably, one hand-raised polar bear called Agee has formed a close relationship with her owner Mark Dumas to the point where they even swim together. This is even more astonishing since polar bears are known to actively hunt humans in the wild.</span></p>
             <p><span style="font-size: large;">If climate change were to lead to their extinction, this would mean not only the loss of potential breakthroughs in human medicine, but more importantly, the disappearance of an intelligent, majestic animal.</span></p>
             `,
            questions: [
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 1,
                    title: 'Questions 1-7',
                    instruction: 'Do the following statements agree with the information given in Reading Passage 1?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'Polar bears suffer from various health problems due to the build-up of fat under their skin.' },
                        { statement: 'The study done by Liu and his colleagues compared different groups of polar bears.' },
                        { statement: 'Liu and colleagues were the first researchers to compare polar bears and brown bears genetically.' },
                        { statement: 'Polar bears are able to control their levels of \'bad\' cholesterol by genetic means.' },
                        { statement: 'Female polar bears are able to survive for about six months without food.' },
                        { statement: 'It was found that the bones of female polar bears were very weak when they came out of their dens in spring.' },
                        { statement: 'The polar bear\'s mechanism for increasing bone density could also be used by people one day.' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 8,
                    title: 'Questions 8-13',
                    instruction: 'Complete the table below.',
                    wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                    sectionTitle: 'Reasons why polar bears should be protected',
                    items: [
                        {
                            prefix: 'People think of bears as unintelligent and',
                            suffix: '.'
                        },
                        {
                            prefix: 'In Tennoji Zoo, a bear has been seen using a branch as a',
                            suffix: '. This allowed him to knock down some'
                        },
                        {
                            prefix: '',
                            suffix: '.'
                        },
                        {
                            prefix: 'A wild polar bear worked out a method of reaching a platform where a',
                            suffix: 'was located.'
                        },
                        {
                            prefix: 'Polar bears have displayed behaviour such as conscious manipulation of objects and activity similar to a',
                            suffix: '.'
                        },
                        {
                            prefix: 'They may make movements suggesting',
                            suffix: 'if disappointed when hunting.'
                        }
                                             ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong> which are based on Reading Passage 2 below.</span></p>
            <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>The Step Pyramid of Djoser</strong></span></h2>
            <p><span style="font-size: large;"><strong>A</strong></span></p>
            <p><span style="font-size: large;">The pyramids are the most famous monuments of ancient Egypt and still hold enormous interest for people in the present day. These grand, impressive tributes to the memory of the Egyptian kings have become linked with the country even though other cultures, such as the Chinese and Mayan, also built pyramids. The evolution of the pyramid form has been written and argued about for centuries. However, there is no question that, as far as Egypt is concerned, it began with one monument to one king designed by one brilliant architect: the Step Pyramid of Djoser at Saqqara.</span></p>
            <p><span style="font-size: large;"><strong>B</strong></span></p>
            <p><span style="font-size: large;">Djoser was the first king of the Third Dynasty of Egypt and the first to build in stone. Prior to Djoser's reign, tombs were rectangular monuments made of dried clay brick, which covered underground passages where the deceased person was buried. For reasons which remain unclear, Djoser's main official, whose name was Imhotep, conceived of building a taller, more impressive tomb for his king by stacking stone slabs on top of one another, progressively making them smaller, to form the shape now known as the Step Pyramid. Djoser is thought to have reigned for 19 years, but some historians and scholars attribute a much longer time for his rule, owing to the number and size of the monuments he built.</span></p>
            <p><span style="font-size: large;"><strong>C</strong></span></p>
            <p><span style="font-size: large;">The Step Pyramid has been thoroughly examined and investigated over the last century, and it is now known that the building process went through many different stages. Historian Marc Van de Mieroop comments on this, writing 'Much experimentation was involved, which is especially clear in the construction of the pyramid in the center of the complex. It had several plans … before it became the first Step Pyramid in history, piling six levels on top of one another … The weight of the enormous mass was a challenge for the builders, who placed the stones at an inward incline in order to prevent the monument breaking up.'</span></p>
            <p><span style="font-size: large;"><strong>D</strong></span></p>
            <p><span style="font-size: large;">When finally completed, the Step Pyramid rose 62 meters high and was the tallest structure of its time. The complex in which it was built was the size of a city in ancient Egypt and included a temple, courtyards, shrines, and living quarters for the priests. It covered a region of 16 hectares and was surrounded by a wall 10.5 meters high. The wall had 13 false doors cut into it with only one true entrance cut into the south-east corner; the entire wall was then ringed by a trench 750 meters long and 40 meters wide. The false doors and the trench were incorporated into the complex to discourage unwanted visitors. If someone wished to enter, he or she would have needed to know in advance how to find the location of the true opening in the wall. Djoser was so proud of his accomplishment that he broke the tradition of having only his own name on the monument and had Imhotep's name carved on it as well.</span></p>
            <p><span style="font-size: large;"><strong>E</strong></span></p>
            <p><span style="font-size: large;">The burial chamber of the tomb, where the king's body was laid to rest, was dug beneath the base of the pyramid, surrounded by a vast maze of long tunnels that had rooms off them to discourage robbers. One of the most mysterious discoveries found inside the pyramid was a large number of stone vessels. Over 40,000 of these vessels, of various forms and shapes, were discovered in storerooms off the pyramid's underground passages. They are inscribed with the names of rulers from the First and Second Dynasties of Egypt and made from different kinds of stone. There is no agreement among scholars and archaeologists on why the vessels were placed in the tomb of Djoser or what they were supposed to represent. The archaeologist Jean-Philippe Lauer, who excavated most of the pyramid and complex, believes they were originally stored and then give a 'proper burial' by Djoser in his pyramid to honor his predecessors. There are other historians, however, who claim the vessels were dumped into the shafts as yet another attempt to prevent grave robbers from getting to the king's burial chamber.</span></p>
            <p><span style="font-size: large;"><strong>F</strong></span></p>
            <p><span style="font-size: large;">Unfortunately, all of the precautions and intricate design of the underground network did not prevent ancient robbers from finding a way in. Djoser's grave goods, and even his body, were stolen at some point in the past and all archaeologists found were a small number of his valuables overlooked by the thieves. There was enough left throughout the pyramid and its complex, however, to astonish and amaze the archaeologists who excavated it.</span></p>
            <p><span style="font-size: large;"><strong>G</strong></span></p>
            <p><span style="font-size: large;">Egyptologist Miroslav Verner writes, 'Few monuments hold a place in human history as significant as that of the Step Pyramid in Saqqara … It can be said without exaggeration that this pyramid complex constitutes a milestone in the evolution of monumental stone architecture in Egypt and in the world as a whole.' The Step Pyramid was a revolutionary advance in architecture and became the archetype which all the other great pyramid builders of Egypt would follow.</span></p>
            `,
            questions: [
                {
                    type: 'paragraph-headings',
                    startQuestionNumber: 14,
                    title: 'Questions 14-20',
                    instruction: 'Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list of headings below.',
                    options: [
                        { value: 'i', text: 'The areas and artefacts within the pyramid itself' },
                        { value: 'ii', text: 'A difficult task for those involved' },
                        { value: 'iii', text: 'A king who saved his people' },
                        { value: 'iv', text: 'A single certainty among other less definite facts' },
                        { value: 'v', text: 'An overview of the external buildings and areas' },
                        { value: 'vi', text: 'A pyramid design that others copied' },
                        { value: 'vii', text: 'An idea for changing the design of burial structures' },
                        { value: 'viii', text: 'An incredible experience despite the few remains' },
                        { value: 'ix', text: 'The answers to some unexpected questions' }
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
                    startQuestionNumber: 21,
                    title: 'Questions 21-24',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                    sectionTitle: 'The Step Pyramid of Djoser',
                    items: [
                        {
                            prefix: 'The complex that includes the Step Pyramid and its surroundings is considered to be as big as an Egyptian',
                            suffix: 'of the past. The area outside the pyramid included accommodation that was occupied by'
                        },
                        {
                            prefix: '',
                            suffix: ', along with many other buildings and features. A wall ran around the outside of the complex and a number of false entrances were built into this. In addition, a long'
                        },
                        {
                            prefix: '',
                            suffix: 'encircled the wall. As a result, any visitors who had not been invited were cleverly prevented from entering the pyramid grounds unless they knew the'
                        },
                        {
                            prefix: '',
                            suffix: 'of the real entrance.'
                        }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 25,
                    title: 'Questions 25-26',
                    instruction: 'Choose TWO letters, A-E. Which TWO of the following points does the writer make about King Djoser?',
                    items: [
                        {
                            question: 'Select the first point the writer makes about King Djoser:',
                            options: [
                                { value: 'A', text: 'Initially he had to be persuaded to build in stone rather than clay.' },
                                { value: 'B', text: 'There is disagreement concerning the length of his reign.' },
                                { value: 'C', text: 'He failed to appreciate Imhotep\'s part in the design of the Step Pyramid.' },
                                { value: 'D', text: 'A few of his possessions were still in his tomb when archaeologists found it.' },
                                { value: 'E', text: 'He criticised the design and construction of other pyramids in Egypt.' }
                            ]
                        },
                        {
                            question: 'Select the second point the writer makes about King Djoser:',
                            options: [
                                { value: 'A', text: 'Initially he had to be persuaded to build in stone rather than clay.' },
                                { value: 'B', text: 'There is disagreement concerning the length of his reign.' },
                                { value: 'C', text: 'He failed to appreciate Imhotep\'s part in the design of the Step Pyramid.' },
                                { value: 'D', text: 'A few of his possessions were still in his tomb when archaeologists found it.' },
                                { value: 'E', text: 'He criticised the design and construction of other pyramids in Egypt.' }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 27-40</strong> which are based on Reading Passage 3 below.</span></p>
            <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>The future of work</strong></span></h2>
            <p><span style="font-size: large;">According to a leading business consultancy, 3-14% of the global workforce will need to switch to a different occupation within the next 10-15 years, and all workers will need to adapt as their occupations evolve alongside increasingly capable machines. Automation – or 'embodied artificial intelligence' (AI) – is one aspect of the disruptive effects of technology on the labour market. 'Disembodied AI', like the algorithms running in our smartphones, is another.</span></p>
            <p><span style="font-size: large;">Dr Stella Pachidi from Cambridge Judge Business School believes that some of the most fundamental changes are happening as a result of the 'algorithmication' of jobs that are dependent on data rather than on production – the so-called knowledge economy. Algorithms are capable of learning from data to undertake tasks that previously needed human judgement, such as reading legal contracts, analysing medical scans and gathering market intelligence.</span></p>
            <p><span style="font-size: large;">'In many cases, they can outperform humans,' says Pachidi. 'Organisations are attracted to using algorithms because they want to make choices based on what they consider is "perfect information", as well as to reduce costs and enhance productivity.'</span></p>
            <p><span style="font-size: large;">'But these enhancements are not without consequences,' says Pachidi. 'If routine cognitive tasks are taken over by AI, how do professions develop their future experts?' she asks. 'One way of learning about a job is "legitimate peripheral participation" – a novice stands next to experts and learns by observation. If this isn't happening, then you need to find new ways to learn.'</span></p>
            <p><span style="font-size: large;">Another issue is the extent to which the technology influences or even controls the workforce. For over two years, Pachidi monitored a telecommunications company. 'The way telecoms salespeople work is through personal and frequent contact with clients, using the benefit of experience to assess a situation and reach a decision. However, the company had started using a(n) … algorithm that defined when account managers should contact certain customers about which kinds of campaigns and what to offer them.'</span></p>
            <p><span style="font-size: large;">The algorithm – usually build by external designers – often becomes the keeper of knowledge, she explains. In cases like this, Pachidi believes, a short-sighted view begins to creep into working practices whereby workers learn through the 'algorithm's eyes' and become dependent on its instructions. Alternative explorations – where experimentation and human instinct lead to progress and new ideas – are effectively discouraged.</span></p>
            <p><span style="font-size: large;">Pachidi and colleagues even observed people developing strategies to make the algorithm work to their own advantage. 'We are seeing cases where workers feed the algorithm with false data to reach their targets,' she reports.</span></p>
            <p><span style="font-size: large;">It's scenarios like these that many researchers are working to avoid. Their objective is to make AI technologies more trustworthy and transparent, so that organisations and individuals understand how AI decisions are made. In the meantime, says Pachidi, 'We need to make sure we fully understand the dilemmas that this new world raises regarding expertise, occupational boundaries and control.'</span></p>
            <p><span style="font-size: large;">Economist Professor Hamish Low believes that the future of work will involve major transitions across the whole life course for everyone: 'The traditional trajectory of full-time education followed by full-time work followed by a pensioned retirement is a thing of the past,' says Low. Instead, he envisages a multistage employment life: one where retraining happens across the life course, and where multiple jobs and no job happen by choice at different stages.</span></p>
            <p><span style="font-size: large;">On the subject of job losses, Low believes the predictions are founded on a fallacy: 'It assumes that the number of jobs is fixed. If in 30 years, half of 100 jobs are being carried out by robots, that doesn't mean we are left with just 50 jobs for humans. The number of jobs will increase: we would expect there to be 150 jobs.'</span></p>
            <p><span style="font-size: large;">Dr Ewan McGaughey, at Cambridge's Centre for Business Research and King's College London, agrees that 'apocalyptic' views about the future of work are misguided. 'It's the laws that restrict the supply of capital to the job market, not the advent of new technologies that causes unemployment.'</span></p>
            <p><span style="font-size: large;">His recently published research answers the question of whether automation, AI and robotics will mean a 'jobless future' by looking at the causes of unemployment. 'History is clear that change can mean redundancies. But social policies can tackle this through retraining and redeployment.'</span></p>
            <p><span style="font-size: large;">He adds: 'If there is going to be change to jobs as a result of AI and robotics then I'd like to see governments seizing the opportunity to improve policy to enforce good job security. We can "reprogramme" the law to prepare for a fairer future of work and leisure.' McGaughey's findings are a call to arms to leaders of organisations, governments and banks to pre-empt the coming changes with bold new policies that guarantee full employment, fair incomes and a thriving economic democracy.</span></p>
            <p><span style="font-size: large;">'The promises of these new technologies are astounding. They deliver humankind the capacity to live in a way that nobody could have once imagined,' he adds. 'Just as the industrial revolution brought people past subsistence agriculture, and the corporate revolution enabled mass production, a third revolution has been pronounced. But it will not only be one of technology. The next revolution will be social.'</span></p>
            `,
            questions: [
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 27,
                    title: 'Questions 27-30',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: 'The first paragraph tells us about',
                            options: [
                                { value: 'A', text: 'the kinds of jobs that will be most affected by the growth of AI.' },
                                { value: 'B', text: 'the extent to which AI will alter the nature of the work that people do.' },
                                { value: 'C', text: 'the proportion of the world\'s labour force who will have jobs in AI in the future.' },
                                { value: 'D', text: 'the difference between ways that embodied and disembodied AI with impact on workers.' }
                            ]
                        },
                        {
                            question: 'According to the second paragraph, what is Stella Pachidi\'s view of the \'knowledge economy\'?',
                            options: [
                                { value: 'A', text: 'It is having an influence on the number of jobs available.' },
                                { value: 'B', text: 'It is changing people\'s attitudes towards their occupations.' },
                                { value: 'C', text: 'It is the main reason why the production sector is declining.' },
                                { value: 'D', text: 'It is a key factor driving current developments in the workplace.' }
                            ]
                        },
                        {
                            question: 'What did Pachidi observe at the telecommunications company?',
                            options: [
                                { value: 'A', text: 'staff disagreeing with the recommendations of AI' },
                                { value: 'B', text: 'staff feeling resentful about the intrusion of AI in their work' },
                                { value: 'C', text: 'staff making sure that AI produces the results that they want' },
                                { value: 'D', text: 'staff allowing AI to carry out tasks they ought to do themselves' }
                            ]
                        },
                        {
                            question: 'In his recently published research, Ewan McGaughey',
                            options: [
                                { value: 'A', text: 'challenges the idea that redundancy is a negative thing.' },
                                { value: 'B', text: 'shows the profound effect of mass unemployment on society.' },
                                { value: 'C', text: 'highlights some differences between past and future job losses.' },
                                { value: 'D', text: 'illustrates how changes in the job market can be successfully handled.' }
                            ]
                        }
                    ]
                },
                {
                    type: 'summary-completion',
                    startQuestionNumber: 31,
                    title: 'Questions 31-34',
                    instruction: 'Complete the summary using the list of words, A-G, below.',
                    sectionTitle: 'The \'algorithmication\' of jobs',
                    options: [
                        { value: 'A', text: 'pressure' },
                        { value: 'B', text: 'satisfaction' },
                        { value: 'C', text: 'intuition' },
                        { value: 'D', text: 'promotion' },
                        { value: 'E', text: 'reliance' },
                        { value: 'F', text: 'confidence' },
                        { value: 'G', text: 'information' }
                    ],
                    items: [
                        {
                            text: 'Stella Pachidi of Cambridge Judge Business School has been focusing on the \'algorithmication\' of jobs which rely not on production but on',
                            suffix: '.'
                        },
                        {
                            text: 'While monitoring a telecommunications company, Pachidi observed a growing',
                            suffix: 'on the recommendations made by AI, as workers begin to learn through the \'algorithm\'s eyes\'. Meanwhile, staff are deterred from experimenting and using their own'
                        },
                        {
                            text: '',
                            suffix: ', and are therefore prevented from achieving innovation. To avoid the kind of situations which Pachidi observed, researchers are trying to make AI\'s decision-making process easier to comprehend, and to increase users\''
                        },
                        {
                            text: '',
                            suffix: 'with regard to the technology.'
                        }
                    ]
                },
                {
                    type: 'matching',
                    startQuestionNumber: 35,
                    title: 'Questions 35-40',
                    instruction: 'Look at the following statements (Questions 35-40) and the list of people below. Match each statement with the correct person, A, B or C.',
                    note: 'You may use any letter more than once.',
                    options: [
                        { value: 'A', label: 'Stella Pachidi' },
                        { value: 'B', label: 'Hamish Low' },
                        { value: 'C', label: 'Ewan McGaughey' }
                    ],
                    items: [
                        { description: 'Greater levels of automation will not result in lower employment.' },
                        { description: 'There are several reasons why AI is appealing to businesses.' },
                        { description: 'AI\'s potential to transform people\'s lives has parallels with major cultural shifts which occurred in previous eras.' },
                        { description: 'It is important to be aware of the range of problems that AI causes.' },
                        { description: 'People are going to follow a less conventional career path than in the past.' },
                        { description: 'Authorities should take measures to ensure that there will be adequately paid work for everyone.' }
                    ]
                }
            ]
        }
    ]
};
