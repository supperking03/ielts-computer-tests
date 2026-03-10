export const generalTest04 = {
    id: 104,
    title: 'General Reading Practice Test 04',
    correctAnswers: [
        // Q1-7: paragraph matching A-F
        'E', 'C', 'B', 'D', 'A', 'C', 'B',
        // Q8-14: TRUE/FALSE/NOT GIVEN
        'NOT GIVEN', 'TRUE', 'TRUE', 'TRUE', 'FALSE', 'NOT GIVEN', 'FALSE',
        // Q15-20: sentence completion
        'photo', 'screens', 'productivity', 'mobile', 'gossip', 'snacks',
        // Q21-27: notes completion
        'skills', 'commitment', 'value', 'panel', 'potential', 'organisation / organization', 'courses',
        // Q28-32: summary completion
        'rules', 'fairness', 'submissive', 'biting', 'forgiveness',
        // Q33-37: matching
        'E', 'C', 'G', 'D', 'F',
        // Q38-40: multiple choice
        'C', 'D', 'B'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-7.</em></p>

<h2 style="text-align:center"><strong>New cycle path to Marshbrook Country Park</strong></h2>
<p><strong>A</strong></p>
<p>A new dual-purpose cycle and pedestrian route has been built from Atherton bus station to the country park’s main entrance at Marshbrook. It avoids the main road into Atherton on the south side, and keeps mainly to less busy roads. Once the path leaves the built-up area, it goes through countryside until it reaches Marshbrook.</p>
<p><strong>B</strong></p>
<p>Funding for the cycle path has come largely from the country and town councils, while almost a third of it was raised through crowdfunding. Maintenance of the path is the responsibility of the county council. The cycle path was completed ahead of schedule, partly thanks to perfect weather for construction, and under budget.</p>
<p><strong>C</strong></p>
<p>Annie Newcome is the chief executive of Cycle Atherton, the organisation that aims to get people cycling more often and more safely. Cycle Atherton proposed the 12-kilometre-long cycle path initially, and has been active in promoting it. Ms Newcome says she is delighted that all the hard work to achieve the funding proved successful.</p>
<p><strong>D</strong></p>
<p>Marshbrook Country Park is a very popular recreational area, and the new path makes it much easier to reach from the town in an environmentally friendly way. At 2.5 metres wide, it is also suitable for users of wheelchairs, mobility scooters and buggies, who have not previously had access to the park without using motor vehicles.</p>
<p><strong>E</strong></p>
<p>Although the path is now open, work is continuing to improve the signs along it, such as warnings when the path approaches a road. New hedges and trees will also be planted along stretches of the path, to provide some shelter from the wind and to benefit wildlife.</p>
<p><strong>F</strong></p>
<p>Further information and a detailed map of the path including a proposed 5-kilometre extension are available online. The map can easily be downloaded and printed. Visit the county council website and follow the links to Atherton Cycle Path.</p>

<hr/>
<p><em>Read the text below and answer Questions 8-14.</em></p>

<h2 style="text-align:center"><strong>Study dramatic arts at Thornley</strong></h2>
<p>If you are hoping for a career in the theatre, Thornley College of Dramatic Arts is the place to come. For fifty years we have been providing top-quality courses for actors, directors, producers, musicians and everyone else who wishes to work professionally in the theatre or related industries. We also have expertise in preparing students for the specialised requirements of TV, film and radio. We’ll make sure you’re thoroughly prepared for the reality of work in your chosen field.</p>
<p>Our college-based tutors all have extensive practical experience in the entertainment industry as well as academic qualifications, and we also collaborate with some of the country’s best directors, writers and actors to create challenging, inspiring and exciting projects with our students.</p>
<p>We are well-known around the world, with our students coming from every continent. Every year, we receive two thousand applications for the one hundred places on our degree courses. Only the most talented get places, and we are proud that over ninety percent of our students gain professional work within a year of graduating, a figure few other drama colleges in the UK can match.</p>
<p>To mark our fiftieth anniversary this year, we are putting on a production of <em>Theatre 500</em>. Written by two staff members especially for this occasion, this multimedia show celebrates five hundred years of drama, and involves all our students in one way or another.</p>
<p>Another major development is that the college is about to move. Our new premises are now under construction in the heart of Thornley, next to the council building, which has won a prize for its architecture. For the last two years, we have been developing designs with Miller Furbank Architects for our new home, and one aim has been to ensure the buildings complement the council offices. Work started on the foundations of the buildings in March last year, and we plan to move to the new site this coming September.</p>
<p>We have also been talking to cultural organisations in the district, and considering how we can bring cost-free benefits to the local community, as well as to our students. As a result, part of the space in the new buildings has been designed to be adaptable, in order to accommodate classes, performances and workshops for different-sized groups of local people.</p>
`,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 1,
                    title: 'Questions 1-7',
                    instruction: 'The text has six paragraphs, A-F. Which paragraph mentions the following?',
                    paragraphRange: 'A-F',
                    note: 'NB You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E', 'F'],
                    items: [
                        { description: 'what still needs to be done' },
                        { description: 'the original suggestion for creating the path' },
                        { description: 'a reason why the path opened early' },
                        { description: 'people who no longer need to get to the park by car' },
                        { description: 'the route of the path' },
                        { description: 'the length of the path' },
                        { description: 'who paid for the path' }
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
                        { statement: 'The college has introduced new courses since it opened.' },
                        { statement: 'The college provides training for work in the film industry.' },
                        { statement: 'Students have the chance to work with relevant professionals.' },
                        { statement: 'Many more people apply to study at the college than are accepted.' },
                        { statement: '<em>Theatre 500</em> was created by students.' },
                        { statement: 'The new building and the council building were designed by the same architects.' },
                        { statement: 'Local groups will be charged for using college premises.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-20.</em></p>

<h2 style="text-align:center"><strong>How to make your working day more enjoyable</strong></h2>
<p>Research shows that work takes up approximately a third of our lives. Most of us get so bogged down with day-to-day tasks though, that we easily forget why we originally applied for the job and what we can get out of it. Here are a few ideas for how to make your working day better.</p>
<p>Physical changes to your work environment can make a massive difference to how you feel. Get some green plants or a family photo for your desk. File all those odd bits of paper or throw them away. All of these little touches can make your work environment feel like it’s yours. Make sure any screens you have are at a suitable height so you’re not straining your neck and shoulders.</p>
<p>Humans need a change of environments every now and then to improve productivity. Go out at lunchtime for a quick walk. If you have the option, it’s a good idea to work from home occasionally. And if there’s a conference coming up, ask if you can go along to it. Not only will you practise your networking skills, but you’ll also have a day away from the office.</p>
<p>Use coffee time to get to know a colleague you don’t usually speak to. There’s no point in getting away from staring at one thing though, only to replace it with another; so leave your mobile alone! Another tip is to try and stay out of office gossip. In the long run it could get you in more trouble than you realise.</p>
<p>When you’re trying to focus on something, hunger is the worst thing. If you can, keep some healthy snacks in your desk because if you have something you can nibble on, it will make you work more effectively and you’ll enjoy it more. Also, if you’re dehydrated, you won’t be able to focus properly. So keep drinking water.</p>
<p>Finally, if you’ve been dreaming about starting up a big project for some time, do it! There are so many different things you can do to get you enjoying work more each day.</p>

<hr/>
<p><em>Read the text below and answer Questions 21-27.</em></p>

<h2 style="text-align:center"><strong>How to get promoted</strong></h2>
<p>If you’re sitting at your desk wondering whether this will be the year you finally get promoted, here are some tips.</p>
<p>It starts with you. You are perhaps the most important part in the ‘promotion process’, so you need to know what you want, and why you want it. Take an honest look at yourself, your achievements and also your skills, particularly those you could exploit to take on a different role.</p>
<p>Your boss is the gatekeeper. If you think your boss is likely to be on your side, ask for a meeting to discuss your serious commitment to the organisation and how this could translate into a more defined career plan. If you are less sure about your boss’s view of your prospects and how they may react, start softly with a more deliberate focus on increasing your boss’s understanding of the work you do and the added value you deliver.</p>
<p>Think about how you are perceived at work. In order for you to get your promotion, who needs to know about you? Who would be on the interview panel and whose opinion and input would they seek? And once you’ve got a list of people to impress, ask yourself: do they know enough about you? And I mean really know, what you do day to day at your desk, your contribution to the team, and perhaps most importantly, your potential.</p>
<p>The chances are that those decision-makers won’t know all they should about you. Raising your profile in your organisation is critical so that when those in charge start looking at that empty office and considering how best to fill it, the first name that pops into their heads is yours. If your firm has a newsletter, volunteer to write a feature to include in it. If they arrange regular client events, get involved in the organisation of them. And so on.</p>
<p>If you think your experience needs enhancing, then look at ways you can continue to improve it. If you are confident in your professional expertise but lack the latest management theory, enrol on some relevant courses that fit around your day job.</p>
<p>So what are you waiting for?</p>
`,
            questions: [
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 15,
                    title: 'Questions 15-20',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    items: [
                        { prefix: 'Bringing a personal', suffix: 'to work will make the place feel more homely' },
                        { prefix: 'It is important to check the position of all', suffix: 'before use to avoid pulling any muscles' },
                        { prefix: 'Leaving the office in the middle of the day may help to raise', suffix: 'later on' },
                        { prefix: 'It is advisable to avoid checking a', suffix: 'during breaks' },
                        { prefix: 'Getting involved in', suffix: 'at work may have negative results' },
                        { prefix: 'Having a few', suffix: 'available can help people concentrate better at work' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 21,
                    title: 'Questions 21-27',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Steps to take to achieve a promotion',
                    items: [
                        { prefix: 'First step: examine past successes and any', suffix: 'that would help gain promotion' },
                        { prefix: 'Set up a meeting with your boss to talk about how best to use your high level of', suffix: 'in future' },
                        { prefix: 'Set up a meeting with your boss to talk about how much extra', suffix: 'you already bring to the company' },
                        { prefix: 'Find out which people will be members of the', suffix: 'who decide on the promotion' },
                        { prefix: 'Consider how much they are aware of your', suffix: 'for the future' },
                        { prefix: 'Take steps to raise your profile by participating in the', suffix: 'of events for customers' },
                        { prefix: 'Work on self-development: take any', suffix: 'that fill in gaps in knowledge' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>Animals can tell right from wrong</strong></h2>
<p>Until recently, humans were thought to be the only species to experience complex emotions and have a sense of morality. But Professor Marc Bekoff, an ecologist at University of Colorado, Boulder, US, believes that morals are ‘hard-wired’ into the brains of all mammals and provide the ‘social glue’ that allows animals to live together in groups.</p>
<p>His conclusions will assist animal welfare groups pushing to have animals treated more humanely. Professor Bekoff, who presents his case in his book <em>Wild Justice</em>, said: ‘Just as in humans, the moral nuances of a particular culture or group will be different from another, but they are certainly there. Moral codes are species specific, so they can be difficult to compare with each other or with humans.’ Professor Bekoff believes morals developed in animals to help regulate behaviour in social groups. He claims that these help to limit fighting within the group and encourage co-operative behaviour.</p>
<p>His ideas have met with some controversy in the scientific community. Professor Frans de Waal, who examines the behaviour of primates, including chimpanzees, at Emory University, Atlanta, Georgia, US, said: ‘I don’t believe animals are moral in the sense we humans are, with a well-developed and reasoned sense of right and wrong, rather that human morality incorporates a set of psychological tendencies and capacities such as empathy, reciprocity, a desire for co-operation and harmony that are older than our species. Human morality was not formed from scratch, but grew out of our primate psychology. Primate psychology has ancient roots, and I agree that other animals show many of the same tendencies and have an intense sociality.’</p>
<p>Wolves live in tight-knit social groups that are regulated by strict rules. Wolves also demonstrate fairness. During play, dominant wolves will appear to exchange roles with lower-ranking wolves. They pretend to be submissive and go so far as to allow biting by the lower-ranking wolves, provided it is not too hard. Prof Bekoff argues that without a moral code governing their actions, this kind of behaviour would not be possible. Astonishingly, if an animal becomes aggressive, it will perform a ‘play bow’ to ask forgiveness before play resumes.</p>
<p>In other members of the dog family, play is controlled in a similar way. Among coyotes, cubs which are too aggressive are ignored by the rest of the group and often end up having to leave entirely. Experiments with domestic dogs, where one animal was given some ‘sweets’ and another wasn’t, have shown that they possess a sense of fairness as they allowed their companion to eat some.</p>
<p>Elephants are intensely sociable and emotional animals. Research by Iain Douglas-Hamilton, from the department of zoology at Oxford University, suggests elephants experience compassion and has found evidence of elephants helping injured members of their herd. In 2003, a herd of 11 elephants rescued antelopes which were being held inside an enclosure in KwaZulu-Natal, South Africa. The top female elephant unfastened all of the metal latches holding the gates closed and swung them open, allowing the antelopes to escape. This is thought to be a rare example of animals showing empathy for members of another species, a trait previously thought to be the exclusive preserve of humankind.</p>
<p>A laboratory experiment involved training Diana monkeys to insert a token into a slot to obtain food. A male who had become skilled at the task was found to be helping the oldest female, who had not learned how to do it. On three occasions the male monkey picked up tokens she dropped and inserted them into the slot and allowed her to have the food. As there was no benefit for the male monkey, Professor Bekoff argues that this is a clear example of an animal’s actions being driven by some internal moral compass.</p>
<p>Since chimpanzees are known to be among the most cognitively advanced of the great apes and our closest cousins, it is perhaps not remarkable that scientists should suggest they live by moral codes. A chimpanzee known as Knuckles is the only known captive chimpanzee to suffer from cerebral palsy, which leaves him physically and mentally impaired. What is extraordinary is that scientists have observed other chimpanzees interacting with him differently and he is rarely subjected to intimidating displays of aggression from older males. Chimpanzees also demonstrate a sense of justice and those who deviate from the code of conduct of a group are set upon by other members as punishment.</p>
<p>Experiments with rats have shown that they will not take food if they know their actions will cause pain to another rat. In lab tests, rats were given food which then caused a second group of rats to receive an electric shock. The rats with the food stopped eating rather than see this happen.</p>
<p>Whales have been found to have spindle cells in their brains. These specialised cells were thought to be restricted to humans and great apes, and appear to play a role in empathy and understanding the emotions of others. Humpback whales, fin whales, killer whales and sperm whales have all been found to have spindle cells. They also have three times as many spindle cells as humans and are thought to be older in evolutionary terms. This finding suggests that emotional judgements such as empathy may have evolved considerably earlier in history than formerly thought and could be widespread in the animal kingdom.</p>
`,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 28,
                    title: 'Questions 28-32',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Complex social behaviour in wolf packs',
                    items: [
                        { prefix: 'Wolves live in packs and it is clear that there are a number of', suffix: 'concerning their behaviour' },
                        { prefix: 'Some observers believe they exhibit a sense of', suffix: '' },
                        { prefix: 'They act as if they are', suffix: 'to the juniors' },
                        { prefix: 'They even permit some gentle', suffix: '' },
                        { prefix: 'When one of the juniors gets too forceful, it bends down begging for', suffix: '' }
                    ]
                },
                {
                    type: 'matching',
                    startQuestionNumber: 33,
                    title: 'Questions 33-37',
                    instruction: 'Look at the following animals (Questions 33-37) and the list of descriptions below. Match each animal with the correct description, A-G.',
                    options: [
                        { value: 'A', label: 'often attack peers who fail to follow the moral code' },
                        { value: 'B', label: 'appear to enjoy playing with members of a different species' },
                        { value: 'C', label: 'sometimes share treats with a peer' },
                        { value: 'D', label: 'may assist a peer who is failing to complete a task' },
                        { value: 'E', label: 'may be driven away by their peers if they do not obey the moral code' },
                        { value: 'F', label: 'seem unwilling to benefit from something that hurts their peers' },
                        { value: 'G', label: 'may help a different type of animal which is in difficulty' }
                    ],
                    items: [
                        { description: 'coyotes' },
                        { description: 'domestic dogs' },
                        { description: 'elephants' },
                        { description: 'Diana monkeys' },
                        { description: 'rats' }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 38,
                    title: 'Questions 38-40',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: 'What view is expressed by Professor de Waal?',
                            options: [
                                { value: 'A', text: 'Apes have advanced ideas about the difference between good and evil.' },
                                { value: 'B', text: 'The social manners of some animals prove that they are highly moral.' },
                                { value: 'C', text: 'Some human moral beliefs developed from our animal ancestors.' },
                                { value: 'D', text: 'The desire to live in peace with others is a purely human quality.' }
                            ]
                        },
                        {
                            question: 'Why does Professor Bekoff mention the experiment on Diana monkeys?',
                            options: [
                                { value: 'A', text: 'It shows that this species of monkey is not very easy to train.' },
                                { value: 'B', text: 'It confirms his view on the value of research into certain monkeys.' },
                                { value: 'C', text: 'It proves that female monkeys are generally less intelligent than males.' },
                                { value: 'D', text: 'It illustrates a point he wants to make about monkeys and other creatures.' }
                            ]
                        },
                        {
                            question: 'What does the writer find most surprising about chimpanzees?',
                            options: [
                                { value: 'A', text: 'They can suffer from some of the same illnesses as humans.' },
                                { value: 'B', text: 'They appear to treat disabled peers with consideration.' },
                                { value: 'C', text: 'They have sets of social conventions that they follow.' },
                                { value: 'D', text: 'The males can be quite destructive at times.' }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
