export const generalTest03 = {
    id: 103,
    title: 'General Reading Practice Test 03',
    correctAnswers: [
        // Q1-7: TRUE/FALSE/NOT GIVEN
        'FALSE', 'TRUE', 'NOT GIVEN', 'TRUE', 'FALSE', 'NOT GIVEN', 'TRUE',
        // Q8-14: paragraph matching A-F
        'B', 'E', 'C', 'D', 'A', 'F', 'C',
        // Q15-20: sentence completion
        'familiar', 'abilities', 'stimulating', 'potential', 'promotion', 'flexible',
        // Q21-27: paragraph matching A-G
        'C', 'F', 'C', 'A', 'E', 'B', 'D',
        // Q28-30: multiple choice
        'D', 'A', 'B',
        // Q31-35: summary completion
        'efficient', 'food', 'hibernation', 'blood', 'temperature',
        // Q36-40: matching researchers
        'A', 'D', 'B', 'C', 'A'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-7.</em></p>

<h2 style="text-align:center"><strong>Young Fashion Designer UK competition</strong></h2>
<p>Young Fashion Designer UK is an exciting national competition which aims to showcase and promote the exceptional work achieved by students studying courses in textile design, product design and fashion throughout the UK.</p>
<p>The competition is designed for students to enter the coursework they are currently working on rather than specifically producing different pieces of work. If you would like to add to your coursework, that is for you and your teacher to decide.</p>
<p>You can apply independently or through your school/college. To enter please ensure you follow these steps:</p>
<p>1) Provide three A3 colour copies from your design folder.</p>
<p>You must include:</p>
<p>- initial ideas about the clothing</p>
<p>- a close-up photograph of the front and back view of the finished clothing.</p>
<p>2) Please label each sheet clearly with your name and school (on the back).</p>
<p>3) Print off a copy of your registration form and attach it to your work.</p>
<p>4) Post your entry to the Young Fashion Designer Centre.</p>
<p>Once the entry deadline has passed, the judges will select the shortlist of students who will be invited to the Finals. You will be notified if you are shortlisted. You will need to bring originals of the work that you entered. Each finalist will have their own stand consisting of a table and tabletop cardboard display panels. Feel free to add as much creativity to your stand as possible. Some students bring tablets/laptops with slideshows or further images of work but it should be emphasised that these may not necessarily improve your chances of success.</p>
<p>The judges will assess your work and will ask various questions about it. They will look through any supporting information and the work you have on display before coming together as a judging panel to decide on the winners. You are welcome to ask the judges questions. In fact, you should make the most of having experts on hand!</p>
<p>There are 1st, 2nd and 3rd prize winners for each category. The judges can also decide to award special prizes if the work merits this. The 1st, 2nd and 3rd place winners will receive a glass trophy and prize from a kind donor.</p>

<hr/>
<p><em>Read the text below and answer Questions 8-14.</em></p>

<h2 style="text-align:center"><strong>Which keyboard should you buy?</strong></h2>
<p><em>It’s worth remembering that a bad keyboard can significantly affect your entire computing experience. So make sure you pick the right keyboard for your needs.</em></p>
<p><strong>A   Logitech K120</strong></p>
<p>Logitech’s K120 offers a number of extra features. It’s spill-resistant, draining small amounts of liquid if you have an accident. It isn’t particularly eye-catching, but it feels very solid. For the price, it’s a tempting choice.</p>
<p><strong>B   Cherry MX 3.0 Keyboard</strong></p>
<p>The Cherry MX 3.0 looks simple and neat, thanks to its compact build. It’s solid, durable and you don’t need to push keys all the way down to activate them. It’s also rather loud though, which can take some getting used to.</p>
<p><strong>C   Logitech K780</strong></p>
<p>The K780 is a compact, pleasantly modern-looking keyboard. There’s an integrated stand for smartphones and tablets too. It’s quiet to type on, and the circular keys are easy to familiarise yourself with, well-spaced and large enough to hit accurately. For this price though, the lack of backlighting is disappointing.</p>
<p><strong>D   Microsoft Sculpt Ergonomic</strong></p>
<p>The Sculpt’s curved, strange-looking build serves a purpose. It provides wrist support and lifts your forearms into a relaxed position so you don’t hurt yourself from typing for lengthy periods. It feels weird, but it seems to do the trick.</p>
<p><strong>E   Microsoft Universal Bluetooth Keyboard</strong></p>
<p>Microsoft’s Bluetooth keyboard has one very handy feature – you can fold it in half and carry it around in your jacket pocket or bag, and it feels rather like a large wallet. It has generously sized keys, though the two-piece spacebar takes some getting used to. Another useful feature is that you can get up to three months’ use from a single charge.</p>
<p><strong>F   Corsair Strafe RGB Keyboard</strong></p>
<p>Corsair’s keyboard is expensive, flashy and extremely impressive. All of its keys are programmable, there’s eye-catching backlighting and the buttons are textured for improved grip. All this is because it’s designed for gamers. However, it’s also silent, meaning it is suitable for everyday office work too.</p>
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
                        { statement: 'Participants are required to create a new item of clothing for the Young Fashion Designer UK competition.' },
                        { statement: 'Participants must send information about the thoughts that led to the item they are entering for the competition.' },
                        { statement: 'The shortlist will consist of a fixed number of finalists.' },
                        { statement: 'Finalists can choose how to present their work to the judges on their stand.' },
                        { statement: 'It is strongly recommended that finalists support their entry with additional photographs.' },
                        { statement: 'Questions that the students ask the judges may count towards the final decisions.' },
                        { statement: 'Extra prizes may be awarded depending on the standard of the entries submitted.' }
                    ]
                },
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 8,
                    title: 'Questions 8-14',
                    instruction: 'Look at the six reviews of computer keyboards, A-F. For which keyboard are the following statements true?',
                    paragraphRange: 'A-F',
                    note: 'NB You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E', 'F'],
                    items: [
                        { description: 'This keyboard may not suit users who prefer the keys to be almost silent.' },
                        { description: 'This keyboard is easily portable because it can be made to fit into a small space.' },
                        { description: 'This keyboard includes a special place to put small devices.' },
                        { description: 'This keyboard is designed to prevent injury to those who spend a lot of time on the computer.' },
                        { description: 'This keyboard offers good value for money.' },
                        { description: 'This keyboard is primarily aimed at people who use their computer for entertainment.' },
                        { description: 'It shouldn’t take long for users to get used to the shape of the keys on this keyboard.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-20.</em></p>

<h2 style="text-align:center"><strong>Working for a small company may be better than you think</strong></h2>
<p>Recent research shows that many job-seekers believe their ideal position would be in a large company. However, working for a small or medium-sized business has many advantages that are too easily overlooked. Here are just a few of them.</p>
<p>Working in a small organisation with a small workforce means it’s likely to be easy to become part of it. It won’t be long before you’re familiar with the staff and the departments that you need to deal with. This can provide a feeling of comfort that takes much longer to develop in a large company. Departments are likely to be small and have close connections with each other, which helps to make internal communication work well – everyone knows what’s going on. You’ll also gain a better understanding of how your own role fits into the company as a whole.</p>
<p>In a small business you’re likely to have considerable variety in your workload, including opportunities to work in different areas of the company, which will allow you to identify abilities that you didn’t know you had. An introduction to new activities could even lead to a change of career. This variety in your work will help to make it stimulating, so you have a good reason for getting out of bed in the morning.</p>
<p>There will be plenty of opportunities to show initiative, and you’ll also learn to function well as part of a team. Because it’s much harder to overlook someone within a small workforce than a large one, your efforts are more likely to attract the attention of those higher up. You’ll have plenty of opportunity to show what you can do, and to have your potential noticed. The result is very likely to be that promotion comes to you faster.</p>
<p>Small businesses are usually flexible, something that is rarely true of large organisations. This means that if they’re well managed, they can adapt to make the most of changes in the wider economy, which in turn can help you. Don’t dismiss them as a place to work because of the myths about them. Small firms can be ideal places for developing your career.</p>

<hr/>
<p><em>Read the text below and answer Questions 21-27.</em></p>

<h2 style="text-align:center"><strong>Starting a new job</strong></h2>
<p><strong>A</strong></p>
<p>Make sure you know when and where you are expected to report on your first day. If the route from home is unfamiliar to you, make a practice run first: the normal first activity in a new job is a meeting with your boss, and it would be embarrassing to be late. Dress formally until you’re sure of the dress code.</p>
<p><strong>B</strong></p>
<p>You should expect to have an induction programme planned for you: a security pass; visits to whatever parts of the organisation you need to understand to do your job properly; meetings with anyone who could affect your success in the role; and someone to show you where everything is and tell you all the real rules of the culture – the ones that are never written down but which everyone is meant to follow.</p>
<p><strong>C</strong></p>
<p>It can be a shock to join a new organisation. When you are a newcomer, feeling uncertain and perhaps a little confused, there can be a strong temptation to talk about your old job and organisation as a way of reminding yourself and telling others that you really know what you are doing, because you did it in your previous role. Unfortunately, this will suggest that you have a high opinion of yourself, and that you think your old place was better. It has enormous power to annoy, so don’t do it.</p>
<p><strong>D</strong></p>
<p>All employers have a core product or service paid for by customers which justifies their existence. If you are not part of this core activity, remember that your role is to provide a service to the people who are part of it. Understanding their concerns and passions is essential for understanding why your own role exists, and for knowing how to work alongside these colleagues. This is why you must see this product or service in action.</p>
<p><strong>E</strong></p>
<p>When I worked for a television company, all of us, whatever our job, were strongly encouraged to visit a studio and see how programmes were made. This was wise. Make sure you do the equivalent for whatever is the core activity of your new employer.</p>
<p><strong>F</strong></p>
<p>Don’t try to do the job too soon. This may seem strange because, after all, you have been appointed to get on and do the job. But in your first few weeks your task is to learn what the job really is, rather than immediately starting to do what you assume it is.</p>
<p><strong>G</strong></p>
<p>Starting a new job is one of life’s major transitions. Treat it with the attention it deserves and you will find that all your work in preparing and then going through the selection process has paid off magnificently.</p>
`,
            questions: [
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 15,
                    title: 'Questions 15-20',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    items: [
                        { prefix: 'In a small business it is easy to become', suffix: 'with colleagues and other departments' },
                        { prefix: 'You may find you have', suffix: 'you were not aware of' },
                        { prefix: 'Finding that your work is', suffix: 'will make you enjoy doing it' },
                        { prefix: 'Other people are likely to realise that you have', suffix: '' },
                        { prefix: 'Opportunities for', suffix: 'will come sooner than in a larger business' },
                        { prefix: 'You can benefit from a small company being more', suffix: 'than a large one' }
                    ]
                },
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 21,
                    title: 'Questions 21-27',
                    instruction: 'The text has seven paragraphs, A-G. Which paragraph mentions the following?',
                    paragraphRange: 'A-G',
                    note: 'NB You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                    items: [
                        { description: 'the emotions that new employees are likely to experience at first' },
                        { description: 'a warning to be patient at first' },
                        { description: 'how colleagues might react to certain behaviour' },
                        { description: 'travelling to your new workplace before you start working there' },
                        { description: 'an example of observing an activity carried out within an organisation' },
                        { description: 'some things that the organisation should arrange for when you begin' },
                        { description: 'a division of jobs within an organisation into two categories' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>How animals keep fit</strong></h2>
<p>No one would dream of running a marathon without first making a serious effort to train for it. But no matter how well they have stuck to their training regime, contestants will find that running non-stop for 42 kilometres is going to hurt.</p>
<p>Now consider the barnacle goose. Every year this bird carries out a 3000-kilometre migration. So how do the birds prepare for this? Do they spend months gradually building up fitness? That’s not really the barnacle goose’s style. Instead, says environmental physiologist Lewis Halsey, ‘They just basically sit on the water and eat a lot.’</p>
<p>Until recently, nobody had really asked whether exercise is as tightly connected to fitness in the rest of the animal kingdom as it is for us. The question is tied up in a broader assumption: that animals maintain fitness because of the exercise they get finding food and escaping predators.</p>
<p>Halsey points out that this may not necessarily be the case. Take the house cat. Most domestic cats spend much of the day lounging around, apparently doing nothing, rather than hunting for food. But over short distances, even the laziest can move incredibly fast when they want to. Similarly, black and brown bears manage to come out of several months’ hibernation with their muscle mass intact – without having to lift so much as a paw during this time.</p>
<p>Barnacle geese go one better. In the process of sitting around, they don’t just maintain their fitness. They also develop stronger hearts and bigger flight muscles, enabling them to fly for thousands of kilometres in a migration that may last as little as two days.</p>
<p>So, if exercise isn’t necessarily the key to physical strength, then what is? One clue comes from a broader view of the meaning of physical fitness. Biologically speaking, all it means is that the body has undergone changes that make it stronger and more efficient. In animals such as bears these changes appear to be triggered by cues such as falling temperatures or insufficient food. In the months of hibernation, these factors seem to prompt the release of muscle-protecting compounds which are then carried to the bears’ muscles in their blood and prevent muscle loss.</p>
<p>Barnacle geese, Halsey suggests, may be responding to an environmental change such as temperature, which helps their bodies somehow ‘know’ that a big physical challenge is looming. In other bird species, that cue may be something different. Chris Guglielmo, a physiological ecologist, has studied the effect of subjecting migratory songbirds known as yellow-rumped warblers to changing hours of daylight. ‘We don’t need to take little songbirds and train them up to do a 6- or 10-hour flight,’ he says. If they are subjected to the right daylight cycle, ‘we can take them out of the cage and put them in the wind tunnel, and they fly for 10 hours.’</p>
<p>Unlike migratory birds, however, humans have no biological shortcut to getting fit. Instead, pressures in our evolutionary history made our bodies tie fitness to exercise.</p>
<p>Our ancestors’ lives were unpredictable. They had to do a lot of running to catch food and escape danger, but they also needed to keep muscle mass to a minimum because muscle is biologically expensive. Each kilogram contributes about 10 to 15 kilocalories a day to our metabolism when resting – which doesn’t sound like much until you realise that muscles account for about 40 percent of the average person’s body mass. ‘Most of us are spending 20 percent of our basic energy budget taking care of muscle mass,’ says Daniel Lieberman, an evolutionary biologist and marathon runner.</p>
<p>So our physiology evolved to let our weight and fitness fluctuate depending on how much food was available. ‘This makes us evolutionarily different from most other animals,’ says Lieberman. In general, animals merely need to be capable of short bouts of intense activity, whether it’s the cheetah chasing prey or the gazelle escaping. Cats are fast, but they don’t need to run very far. Perhaps a few mad dashes around the house are all it takes to keep a domestic one fit enough for feline purposes. ‘Humans, on the other hand, needed to adapt to run slower, but for longer,’ says Lieberman.</p>
<p>He argues that long ago on the African savannah, natural selection made us into ‘supremely adapted’ endurance athletes, capable of running prey into the ground and ranging over long distances with unusual efficiency. But only, it appears, if we train. Otherwise we quickly degenerate into couch potatoes.</p>
<p>As for speed, even those animals that do cover impressive distances don’t have to be the fastest they can possibly be. Barnacle geese needn’t set world records when crossing the North Atlantic; they just need to be able to get to their destination. ‘And’, says exercise physiologist Ross Tucker, ‘humans may be the only animal that actually cares about reaching peak performance.’ Other than racehorses and greyhounds, both of which we have bred to race, animals aren’t directly competing against one another. ‘I don’t know that all animals are the same, performance-wise ... and we don’t know whether training would enhance their ability,’ he says.</p>
`,
            questions: [
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 28,
                    title: 'Questions 28-30',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: 'The writer discusses marathon runners and barnacle geese to introduce the idea that',
                            options: [
                                { value: 'A', text: 'marathon runners may be using inefficient training methods.' },
                                { value: 'B', text: 'the role of diet in achieving fitness has been underestimated.' },
                                { value: 'C', text: 'barnacle geese spend much longer preparing to face a challenge.' },
                                { value: 'D', text: 'serious training is not always necessary for physical achievement.' }
                            ]
                        },
                        {
                            question: 'The writer says that human muscles',
                            options: [
                                { value: 'A', text: 'use up a lot of energy even when resting.' },
                                { value: 'B', text: 'are heavier than other types of body tissue.' },
                                { value: 'C', text: 'were more efficiently used by our ancestors.' },
                                { value: 'D', text: 'have become weaker than they were in the past.' }
                            ]
                        },
                        {
                            question: 'The writer says that in order to survive, early humans developed the ability to',
                            options: [
                                { value: 'A', text: 'hide from their prey.' },
                                { value: 'B', text: 'run long distances.' },
                                { value: 'C', text: 'adapt their speeds to different situations.' },
                                { value: 'D', text: 'predict different types of animal movements.' }
                            ]
                        }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 31,
                    title: 'Questions 31-35',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'What is the key to physical fitness?',
                    items: [
                        { prefix: 'In biological terms, when an animal is physically fit, its body changes, becoming more powerful and', suffix: '' },
                        { prefix: 'For bears, this change may be initially caused by colder weather or a lack of', suffix: '' },
                        { prefix: 'During', suffix: 'certain compounds are released' },
                        { prefix: 'These compounds are released into their', suffix: 'and travel around the body' },
                        { prefix: 'In the case of barnacle geese, the change may be due to a variation in', suffix: '' }
                    ]
                },
                {
                    type: 'matching',
                    startQuestionNumber: 36,
                    title: 'Questions 36-40',
                    instruction: 'Match each statement with the correct researcher, A, B, C or D.',
                    note: 'NB You may use any letter more than once.',
                    items: [
                        { description: 'One belief about how animals stay fit is possibly untrue.' },
                        { description: 'It may not be possible to train all animals to improve their speed.' },
                        { description: 'One type of bird has demonstrated fitness when exposed to a stimulus in experimental conditions.' },
                        { description: 'Human energy use developed in a different way from that of animals.' },
                        { description: 'One type of bird may develop more strength when the weather becomes warmer or cooler.' }
                    ],
                    options: [
                        { value: 'A', label: 'Lewis Halsey' },
                        { value: 'B', label: 'Chris Guglielmo' },
                        { value: 'C', label: 'Daniel Lieberman' },
                        { value: 'D', label: 'Ross Tucker' }
                    ]
                }
            ]
        }
    ]
};
