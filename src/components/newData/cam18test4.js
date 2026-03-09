export const cam18test4 = {
    id: 4,
    title: 'Reading CAM 18 Test 4',
    explanation: "https://drive.google.com/file/d/1uTgGk6K3tP8pmojyWCQA0K_BOA3AgR9w/view?usp=sharing",
    image: 'https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam-18-test-4.jpg',
    correctAnswers: [
        // Q1-5: Paragraph matching
        'D', 'C', 'E', 'B', 'D', 
        // Q6-9: Fill in blanks summary
        'energy', 'food', 'gardening', 'obesity', 
        // Q10-11: Multiple choice (two answers)
        'C', 'D', 
        // Q12-13: Multiple choice (two answers)
        'A', 'D', 
        // Q14-16: Multiple choice
        'B', 'C', 'D', 
        // Q17-22: Matching with people
        'C', 'B', 'A', 'E', 'B', 'D', 
        // Q23-26: Yes/No/Not Given
        'YES', 'NO', 'NOT GIVEN', 'YES', 
        // Q27-30: Yes/No/Not Given
        'YES', 'NOT GIVEN', 'NO', 'NO', 
        // Q31-36: Summary completion with word list
        'I', 'F', 'A', 'C', 'H', 'E', 
        // Q37-40: Multiple choice
        'B', 'A', 'D', 'C'
    ],
    passages: [
        {
            title: `Reading Passage 1`,
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span><span style="font-size: 14px; text-align: left; color: #353535;"></span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Green roofs</strong></span></h2>
<p><span style="font-size: large;"><strong>A</strong></span></p>
<p><span style="font-size: large;">Rooftops covered with grass, vegetable gardens and lush foliage are now a common sight in many cities around the world. More and more private companies and city authorities are investing in green roofs, drawn to their wide-ranging benefits. Among the benefits are saving on energy costs, mitigating the risk of floods, making habitats for urban wildlife, tackling air pollution and even growing food. These increasingly radical urban designs can help cities adapt to the monumental problems they face, such as access to resources and a lack of green space due to development. But the involvement of city authorities, businesses and other institutions is crucial to ensuring their success – as is research investigating different options to suit the variety of rooftop spaces found in cities. The UK is relatively new to developing green roofs, and local governments and institutions are playing a major role in spreading the practice. London is home to much of the UK's green roof market, mainly due to forward-thinking policies such as the London Plan, which has paved the way to more than doubling the area of green roofs in the capital.</span></p>
<p><span style="font-size: large;"><strong>B</strong></span></p>
<p><span style="font-size: large;">Ongoing research is showcasing how green roofs in cities can integrate with 'living walls': environmentally friendly walls which are partially or completely covered with greenery, including a growing medium, such as soil or water. Research also indicates that green roofs can be integrated with drainage systems on the ground, such as street trees, so that the water is managed better and the built environment is made more sustainable. There is also evidence to demonstrate the social value of green roofs. Doctors are increasingly prescribing time spent gardening outdoors for patients dealing with anxiety and depression. And research has found that access to even the most basic green spaces can provide a better quality of life for dementia sufferers and help people avoid obesity.</span></p>
<p><span style="font-size: large;"><strong>C</strong></span></p>
<p><span style="font-size: large;">In North America, green roofs have become mainstream, with a wide array of expansive, accessible and food-producing roofs installed in buildings. Again, city leaders and authorities have helped push the movement forward – only recently, San Francisco, USA, created a policy requiring new buildings to have green roofs. Toronto, Canada, has policies dating from the 1990s, encouraging the development of urban farms on rooftops. These countries also benefit from having newer buildings than in many parts of the world, which makes it easier to install green roofs. Being able to keep enough water at roof height and distribute it right across the rooftop is crucial to maintaining the plants on any green roof – especially on 'edible roofs' where fruit and vegetables are farmed. And it's much easier to do this in newer buildings, which can typically hold greater weight, than to retro-fit old ones. Having a stronger roof also makes it easier to grow a greater variety of plants, since the soil can be deeper.</span></p>
<p><span style="font-size: large;"><strong>D</strong></span></p>
<p><span style="font-size: large;">For green roofs to become the norm for new developments, there needs to be support from public authorities and private investors. Those responsible for maintaining buildings may have to acquire new skills, such as landscaping, and in some cases, volunteers may be needed to help out. Other considerations include installing drainage paths, meeting health and safety requirements and perhaps allowing access for the public, as well as planning restrictions and disruption from regular activities in and around the buildings during installation. To convince investors and developers that installing green roofs is worthwhile, economic arguments are still the most important. The term 'natural capital' has been developed to explain the economic value of nature; for example, measuring the money saved by installing natural solutions to protect against flood damage, adapt to climate change or help people lead healthier and happier lives.</span></p>
<p><span style="font-size: large;"><strong>E </strong></span></p>
<p><span style="font-size: large;">As the expertise about green roofs grows, official standards have been developed to ensure that they are designed, constructed and maintained properly, and function well. Improvements in the science and technology underpinning green roof development have also led to new variations in the concept. For example, 'blue roofs' enable buildings to hold water over longer periods of time, rather than draining it away quickly – crucial in times of heavier rainfall. There are also combinations of green roofs with solar panels, and 'brown roofs' which are wilder in nature and maximise biodiversity. If the trend continues, it could create new jobs and a more vibrant and sustainable local food economy – alongside many other benefits. There are still barriers to overcome, but the evidence so far indicates that green roofs have the potential to transform cities and help them function sustainably long into the future. The success stories need to be studied and replicated elsewhere, to make green, blue, brown and food-producing roofs the norm in cities around the world.</span></p>
            `,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 1,
                    title: 'Questions 1-5',
                    instruction: 'Reading Passage 1 has five paragraphs, A-E. Which paragraph contains the following information?',
                    paragraphRange: 'A-E',
                    note: 'You may use any letter more than once.',
                    items: [
                        { description: 'mention of several challenges to be overcome before a green roof can be installed' },
                        { description: 'examples of policies and practices in North America' },
                        { description: 'mention of new variations on the green roof concept' },
                        { description: 'examples of how green roofs can work in combination with other green urban initiatives' },
                        { description: 'the need to make a persuasive argument for the financial benefits of green roofs' }
                    ]
                },
                                     {
                     type: 'fill-in-blanks',
                     startQuestionNumber: 6,
                     title: 'Questions 6-9',
                     instruction: 'Complete the summary below.',
                     wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                     sectionTitle: 'Advantages of green roofs',
                     items: [
                         {
                             prefix: 'City rooftops covered with greenery have many advantages. These include lessening the likelihood that floods will occur, reducing how much money is spent on',
                             suffix: ', and creating environments that are suitable for wildlife.'
                         },
                         {
                             prefix: 'In many cases, they can also be used for producing',
                             suffix: '.'
                         },
                         {
                             prefix: 'There are also social benefits of green roofs. For example, the medical profession recommends',
                             suffix: 'as an activity to help people cope with mental health issues.'
                         },
                         {
                             prefix: 'Studies have also shown that the availability of green spaces can prevent physical problems such as',
                             suffix: '.'
                         }
                     ]
                 },
                                     {
                     type: 'multiple-choice',
                     startQuestionNumber: 10,
                     title: 'Questions 10 and 11',
                     instruction: 'Choose TWO letters, A-E. Write the correct letters in boxes 10 and 11 on your answer sheet.',
                     items: [
                         {
                             question: 'Which TWO advantages of using newer buildings for green roofs are mentioned in Paragraph C of the passage? (Choose the first advantage)',
                             options: [
                                 { value: 'A', text: 'a longer growing season for edible produce' },
                                 { value: 'B', text: 'more economical use of water' },
                                 { value: 'C', text: 'greater water-storage capacity' },
                                 { value: 'D', text: 'ability to cultivate more plant types' },
                                 { value: 'E', text: 'a large surface area for growing plants' }
                             ]
                         },
                         {
                             question: 'Which TWO advantages of using newer buildings for green roofs are mentioned in Paragraph C of the passage? (Choose the second advantage)',
                             options: [
                                 { value: 'A', text: 'a longer growing season for edible produce' },
                                 { value: 'B', text: 'more economical use of water' },
                                 { value: 'C', text: 'greater water-storage capacity' },
                                 { value: 'D', text: 'ability to cultivate more plant types' },
                                 { value: 'E', text: 'a large surface area for growing plants' }
                             ]
                         }
                     ]
                 },
                 {
                     type: 'multiple-choice',
                     startQuestionNumber: 12,
                     title: 'Questions 12 and 13',
                     instruction: 'Choose TWO letters, A-E. Write the correct letters in boxes 12 and 13 on your answer sheet.',
                     items: [
                         {
                             question: 'Which TWO features of new variations in green roof design are mentioned in Paragraph E of the passage? (Choose the first feature)',
                             options: [
                                 { value: 'A', text: 'to provide habitats for a wide range of species' },
                                 { value: 'B', text: 'to grow plants successfully even in the wettest climates' },
                                 { value: 'C', text: 'to regulate the temperature of the immediate environment' },
                                 { value: 'D', text: 'to generate power from a sustainable source' },
                                 { value: 'E', text: 'to collect water to supply other buildings' }
                             ]
                         },
                         {
                             question: 'Which TWO features of new variations in green roof design are mentioned in Paragraph E of the passage? (Choose the second feature)',
                             options: [
                                 { value: 'A', text: 'to provide habitats for a wide range of species' },
                                 { value: 'B', text: 'to grow plants successfully even in the wettest climates' },
                                 { value: 'C', text: 'to regulate the temperature of the immediate environment' },
                                 { value: 'D', text: 'to generate power from a sustainable source' },
                                 { value: 'E', text: 'to collect water to supply other buildings' }
                             ]
                         }
                     ]
                 }
            ]
        },
        {
            title: `Reading Passage 2`,
            content: `
            <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong>&nbsp;which are based on Reading Passage 2 below.</span><span style="font-size: 14px;">&nbsp;</span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>The growth mindset</strong></span></h2>
<p><span style="font-size: large;">Over the past century, a powerful idea has taken root in the educational landscape. The concept of intelligence as something innate has been supplanted by the idea that intelligence is not fixed, and that, with the right training, we can be the authors of our own cognitive capabilities. Psychologist Alfred Binet, the developer of the first intelligence tests, was one of many 19th-century scientists who held that earlier view and sought to quantify cognitive ability. Then, in the early 20th century, progressive thinkers revolted against the notion that inherent ability is destiny. Instead, educators such as John Dewey argued that every child's intelligence could be developed, given the right environment.</span></p>
<p><span style="font-size: large;">'Growth mindset theory' is a relatively new – and extremely popular – version of this idea. In many schools today you will see hallways covered in motivational posters and hear speeches on the mindset of great sporting heroes who simply <em>believed</em> their way to the top. A major focus of the growth mindset in schools is coaxing students away from seeing failure as an indication of their ability, and towards seeing it as a chance to improve that ability. As educationalist Jeff Howard noted several decades ago: 'Smart is not something that you just are, smart is something that you can get.'</span></p>
<p><span style="font-size: large;">The idea of the growth mindset is based on the work of psychologist Carol Dweck in California in the 1990s. In one key experiment, Dweck divided a group of 10- to 12-year-olds into two groups. All were told that they had achieved a high score on a test but the first group were praised for their intelligence in achieving this, while the others were praised for their effort. The second group – those who had been instilled with a 'growth mindset' – were subsequently far more likely to put effort into future tasks. Meanwhile, the former took on only those tasks that would not risk their sense of worth. This group had inferred that success or failure is due to innate ability, and this 'fixed mindset' had led them to fear of failure and lack of effort. Praising ability actually made the students perform worse, while praising effort emphasised that change was possible.</span></p>
<p><span style="font-size: large;">One of the greatest impediments to successfully implementing a growth mindset, however, is the education system itself: in many parts of the world, the school climate is obsessed with performance in the form of constant testing, analysing and ranking of students – a key characteristic of the fixed mindset. Nor is it unusual for schools to create a certain cognitive dissonance, when they applaud the benefits of a growth mindset but then hand out fixed target grades in lessons based on performance.</span></p>
<p><span style="font-size: large;">Aside from the implementation problem, the original growth mindset research has also received harsh criticism. The statistician Andrew Gelman claims that 'their research designs have enough degrees of freedom that they could take their data to support just about any theory at all'. Professor of Psychology Timothy Bates, who has been trying to replicate Dweck's work, is finding that the results are repeatedly null. He notes that: 'People with a growth mindset don't cope any better with failure … Kids with the growth mindset aren't getting better grades, either before or after our intervention study.'</span></p>
<p><span style="font-size: large;">Much of this criticism is not lost on Dweck, and she deserves great credit for responding to it and adapting her work accordingly. In fact, she argues that her work has been misunderstood and misapplied in a range of ways. She has also expressed concerns that her theories are being misappropriated in schools by being conflated with the self-esteem movement: 'For me the growth mindset is a tool for learning and improvement. It's not just a vehicle for making children feel good.'</span></p>
<p><span style="font-size: large;">But there is another factor at work here. The failure to translate the growth mindset into the classroom might reflect a misunderstanding of the nature of teaching and learning itself. Growth mindset supporters David Yeager and Gregory Walton claim that interventions should be delivered in a subtle way to maximise their effectiveness. They say that if adolescents perceive a teacher's intervention as conveying that they are in need of help, this could undo its intended effects.</span></p>
<p><span style="font-size: large;">A lot of what drives students is their innate beliefs and how they perceive themselves. There is a strong correlation between self-perception and achievement, but there is evidence to suggest that the actual effect of achievement on self-perception is stronger than the other way round. To stand up in a classroom and successfully deliver a good speech is a genuine achievement, and that is likely to be more powerfully motivating than vague notions of 'motivation' itself.</span></p>
<p><span style="font-size: large;">Recent evidence would suggest that growth mindset interventions are not the elixir of student learning that its proponents claim it to be. The growth mindset appears to be a viable construct in the lab, which, when administered in the classroom via targeted interventions, doesn't seem to work. It is hard to dispute that having faith in the capacity to change is a good attribute for students. Paradoxically, however, that aspiration is not well served by direct interventions that try to instil it.</span></p>
<p><span style="font-size: large;">Motivational posters and talks are often a waste of time, and might well give students a deluded notion of what success actually means. Teaching concrete skills such as how to write an effective introduction to an essay then praising students' effort in getting there is probably a far better way of improving confidence than telling them how unique they are, or indeed how capable they are of changing their own brains. Perhaps growth mindset works best as a philosophy and not an intervention.</span></p>
            `,
            questions: [
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 14,
                    title: 'Questions 14-16',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            questionNumber: 14,
                            questionText: 'What can we learn from the first paragraph?',
                            options: [
                                { value: 'A', text: 'where the notion of innate intelligence first began' },
                                { value: 'B', text: 'when ideas about the nature of intelligence began to shift' },
                                { value: 'C', text: 'how scientists have responded to changing views of intelligence' },
                                { value: 'D', text: 'why thinkers turned away from the idea of intelligence being fixed' }
                            ]
                        },
                        {
                            questionNumber: 15,
                            questionText: 'The second paragraph describes how schools encourage students to',
                            options: [
                                { value: 'A', text: 'identify their personal ambitions.' },
                                { value: 'B', text: 'help each other to realise their goals.' },
                                { value: 'C', text: 'have confidence in their potential to succeed.' },
                                { value: 'D', text: 'concentrate on where their particular strengths lie.' }
                            ]
                        },
                        {
                            questionNumber: 16,
                            questionText: 'In the third paragraph, the writer suggests that students with a fixed mindset',
                            options: [
                                { value: 'A', text: 'tend to be less competitive.' },
                                { value: 'B', text: 'generally have a low sense of self-esteem.' },
                                { value: 'C', text: 'will only work hard if they are given constant encouragement.' },
                                { value: 'D', text: 'are afraid to push themselves beyond what they see as their limitations.' }
                            ]
                        }
                    ]
                },
                {
                    type: 'matching',
                    startQuestionNumber: 17,
                    title: 'Questions 17-22',
                    instruction: 'Look at the following statements (Questions 17-22) and the list of people below. Match each statement with the correct person or people, A-E.',
                    note: 'You may use any letter more than once.',
                                             options: [
                         { value: 'A', label: 'Alfred Binet' },
                         { value: 'B', label: 'Carol Dweck' },
                         { value: 'C', label: 'Andrew Gelman' },
                         { value: 'D', label: 'Timothy Bates' },
                         { value: 'E', label: 'David Yeager and Gregory Walton' }
                     ],
                     items: [
                         { description: 'The methodology behind the growth mindset studies was not strict enough.' },
                         { description: 'The idea of the growth mindset has been incorrectly interpreted.' },
                         { description: 'Intellectual ability is an unchangeable feature of each individual.' },
                         { description: 'The growth mindset should be promoted without students being aware of it.' },
                         { description: 'The growth mindset is not simply about boosting students\' morale.' },
                         { description: 'Research shows that the growth mindset has no effect on academic achievement.' }
                     ]
                },
                {
                    type: 'yes-no-not-given',
                    startQuestionNumber: 23,
                    title: 'Questions 23-26',
                    instruction: 'Do the following statements agree with the views of the writer in Reading Passage 2?',
                    options: [
                        { value: 'YES', description: 'if the statement agrees with the views of the writer' },
                        { value: 'NO', description: 'if the statement contradicts the views of the writer' },
                        { value: 'NOT GIVEN', description: 'if it is impossible to say what the writer thinks about this' }
                    ],
                    items: [
                        { statement: 'Dweck has handled criticisms of her work in an admirable way.' },
                        { statement: 'Students\' self-perception is a more effective driver of self-confidence than actual achievement is.' },
                        { statement: 'Recent evidence about growth mindset interventions has attracted unfair coverage in the media.' },
                        { statement: 'Deliberate attempts to encourage students to strive for high achievement may have a negative effect.' }
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
