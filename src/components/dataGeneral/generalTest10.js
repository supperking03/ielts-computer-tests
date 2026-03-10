export const generalTest10 = {
    id: 110,
    title: 'General Reading Practice Test 10',
    correctAnswers: [
        // Q1-7: TRUE/FALSE/NOT GIVEN
        'FALSE', 'TRUE', 'FALSE', 'TRUE', 'TRUE', 'NOT GIVEN', 'NOT GIVEN',
        // Q8-14: paragraph matching A-D
        'C', 'D', 'D', 'A', 'B', 'C', 'A',
        // Q15-20: sentence completion
        'expectations', 'concerns', 'report', 'dull', 'targets', 'micromanage',
        // Q21-27: fill in blanks
        'flexibility', 'unemployment', 'direction', 'suspicion', 'experience', 'graphics', 'media',
        // Q28-32: sentence completion
        'sheep', 'shellfish', 'beak', 'rock', 'school',
        // Q33-37: multiple choice
        'D', 'B', 'C', 'A', 'D',
        // Q38-40: matching
        'D', 'D', 'C'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-7.</em></p>

<h2 style="text-align:center"><strong>Online roommate finder: Toronto</strong></h2>
<p>I have one room available in a large apartment located just off Queen and Bathurst in Toronto. The room is fully furnished with a double bed, desk, shelf and wardrobe.</p>
<p>About us: I'm Sasha! I'm Canadian, and I've been living in this apartment since I was a teenager. I'm 23 and work in a restaurant. These past two years, my best friend has been living here but as she's now moving to Europe there is a room available as of October 1. The third room is occupied by Simon, who is from Australia. He works part-time in a music shop downtown and is a great drummer. We both like keeping the place neat and tidy - I actually enjoy cleaning in my spare time and sometimes we do it together as a roommate team. I love watching movies, exploring, getting out of the city and into the outdoors, and listening to music.</p>
<p>The apartment itself is very large and comes equipped with unlimited wi-fi, a fully stocked kitchen, cable television, and Netflix. The bedroom is a long way from the living room, so it shouldn't disturb you if people come round and besides, we are certainly very respectful. Oh! We also have two cats who are well-behaved but they might be a problem if you have allergies. If you have a pet, that's no problem - these cats get along with other animals.</p>
<p>We love having people coming from other countries as it's really fun having the opportunity to show them around the neighborhood. It's a great neighborhood - lots of character and plenty to do. That said, we're certainly interested in living with Canadians too! We're very easy-going and open-minded and just hope that our new roommate will be the same.</p>

<hr/>
<p><em>Read the text below and answer Questions 8-14.</em></p>

<h2 style="text-align:center"><strong>Smartphone fitness apps</strong></h2>
<p><strong>A   Pacer</strong></p>
<p>Although they were previously split into 'pro' and 'free' versions, Pacer's developer now generously includes all the features in one free app. That means you can spend no money, yet use your smartphone's GPS capabilities to track your jogging routes, and examine details of your pace and calories burned.</p>
<p><strong>B   Beat2</strong></p>
<p>There are a wealth of running apps available, but Beat2 is a good one. This free app monitors your pace - or if you have a wrist or chest-based heart rate monitor, your beats per minute - and offers up its specially curated playlists to give you the perfect music for the pace you're running at, adding a whole new dimension to your run. The best bit is when you explode into a sprint and the music pounds in your ears. Or if you fancy something different, the app also has In-App Purchases, including tales of past sporting heroes you can listen to while you run.</p>
<p><strong>C   Impel</strong></p>
<p>If you're serious about the sport you do, then you should be serious about Impel. As smartphone fitness tools go it's one of the best, allowing you to track your performance, set goals and see daily progress updates. If you're ever not sure where to run or cycle you can find user-created routes on the app, or share your own. All of that comes free of charge, while a premium version adds even more tools.</p>
<p><strong>D   Fast Track</strong></p>
<p>There are plenty of GPS running apps for smartphones, but Fast Track is an excellent freebie. Although you naturally get more features if you pay for the 'pro' version, the free release gets you GPS tracking, a nicely designed map view, your training history, music, and cheering. Yes, you read the last of those right - you can have friends cheer you on as you huff and puff during a run. If you can afford the 'pro' version, you can add possible routes, voice coaches, smartwatch connectivity and more; but as a starting point, the free app gets you moving.</p>
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
                        { statement: 'The room available has two beds.' },
                        { statement: "The Australian in Sasha's apartment is a musician." },
                        { statement: 'Sasha does all the cleaning in the apartment.' },
                        { statement: 'Sasha likes being in the open air.' },
                        { statement: 'The room available would be suitable for someone who likes to be quiet.' },
                        { statement: 'Sasha thinks her apartment is in the best part of Toronto.' },
                        { statement: 'Sasha has never had a roommate from Canada.' }
                    ]
                },
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 8,
                    title: 'Questions 8-14',
                    instruction: 'Look at the four reviews of smartphone fitness apps, A-D. For which app are the following statements true?',
                    paragraphRange: 'A-D',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D'],
                    items: [
                        { description: 'This app can be used for more than one sport.' },
                        { description: 'You have to pay if you want this app to suggest where you can go.' },
                        { description: 'This app has well-presented visuals.' },
                        { description: 'You do not have to pay for any of the features on this app.' },
                        { description: 'You can pay to download true stories on this app.' },
                        { description: 'You can get ideas about where to go from other people on this app.' },
                        { description: 'This app gives you details of the energy you have used.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-20.</em></p>

<h2 style="text-align:center"><strong>Why you should delegate tasks to team members</strong></h2>
<p>Delegation helps you get more done, helps your team members progress through learning new things and spreads the load in the team.</p>
<p>When you give someone a project task to do, make sure that they have all the information they require to actually get on and do it. That includes specifying the date it is due, writing a clear definition of the task, providing any resources they need to get it done or names of people you expect them to talk to. It also means informing them of any expectations you have, such as delivering it as a spreadsheet rather than a Word document.</p>
<p>If you have concerns that someone doesn't have the skills to do a good job, or they tell you this outright, make sure that you offer some help. It might take longer this time but next time they will be able to do it without you, so it will save you time in the long run.</p>
<p>Once you have given the task to someone, let them get on with it. Tell them how you expect to be kept informed, like through a report once a week. Then let them get on with it unless you feel things are not progressing as you would like.</p>
<p>As a project manager, you have to retain some of the main project responsibilities for yourself. You shouldn't expect someone else on the project team to do your job. Equally, don't delegate tasks such as dull administrative ones, just because you don't want to do them. But remember that project management is a leadership position so you don't want your role to be seen as too basic.</p>
<p>One way to free up your time to spend on the more strategic and leadership parts of project management is to delegate things that are regular, like noting whether weekly targets have been met. Could someone in your team take this on for you? This can be a useful way of upskilling your team members to complement any ongoing training and allowing them to gain confidence too.</p>
<p>So in summary, be clear, supportive, and don't micromanage. Don't become the problem on your project that prevents progress just because you're afraid to leave people alone to get on with their jobs.</p>

<hr/>
<p><em>Read the text below and answer Questions 21-27.</em></p>

<h2 style="text-align:center"><strong>Choosing the right format for your CV</strong></h2>
<p>A good CV should be clear, simple and easy to understand. Here are four of the most popular CV formats and advice on when to use them:</p>
<p><strong>Chronological</strong></p>
<p>This is the traditional CV format and is extremely popular because it allows employers to see all the posts you have held in order. It provides flexibility because it works in almost all circumstances, the exception being if you have blocks of unemployment that are difficult to account for. This type of format is particularly useful when you have a solid and complete working history spanning five years or more.</p>
<p><strong>Functional</strong></p>
<p>The functional CV is designed to describe your key skills rather than the jobs you have done. The functional CV format is typically used by people who have extensive gaps in their employment history, or have often changed jobs. It also suits those who want to go in a different direction work-wise and change industry. You might choose it if you want to highlight skills learned early in your career, points that might get missed if a chronological format is used. It is also appropriate if you have done little or no actual work, for example, if you are one of the current year's graduates.</p>
<p>Because this format is often used to cover a patchy employment history, some interviewers may view such CVs with suspicion, so be very careful should you choose it.</p>
<p><strong>Achievement</strong></p>
<p>An alternative to the functional CV is to use an achievement-based resume highlighting key achievements in place of skills. This can help show your suitability for a role if you lack direct experience of it.</p>
<p><strong>Non-traditional</strong></p>
<p>With the explosion of digital and creative industries over recent years, CV formats have become more and more imaginative. You can present information through graphics, which can be more visually engaging and turn out to be an unusual but winning option. This will definitely make you stand out from the crowd. It also demonstrates design skills and creativity in a way that a potential employer can see and feel. However, a highly creative CV format is only really appropriate for creative and artistic sectors, such as those involving promoting products, though it would also work for the media too.</p>
`,
            questions: [
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 15,
                    title: 'Questions 15-20',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    items: [
                        { prefix: 'Ensure team members are aware of any', suffix: 'there are regarding how the work should be presented.' },
                        { prefix: 'Make sure support is made available if any', suffix: 'exist as to the team member\'s ability to do the work.' },
                        { prefix: 'Ask the team member to detail how the work is developing, for example by providing a regular', suffix: '.' },
                        { prefix: 'Do not delegate administrative tasks simply because they are', suffix: '.' },
                        { prefix: 'Managers can ask a team member to check on the achievement of', suffix: 'at fixed intervals.' },
                        { prefix: 'If you', suffix: 'you risk delaying the whole project.' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 21,
                    title: 'Questions 21-27',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'CV formats',
                    items: [
                        { prefix: 'Chronological - gives', suffix: 'in most cases.' },
                        { prefix: 'Chronological - perhaps inappropriate if there are periods where', suffix: 'is not easy to explain.' },
                        { prefix: 'Functional - appropriate for people who intend to follow a new', suffix: 'in their career.' },
                        { prefix: 'Functional - can create', suffix: 'in recruiters, so is best used with caution.' },
                        { prefix: 'Achievement - may be advisable if the person has no', suffix: 'in the area.' },
                        { prefix: 'Non-traditional - enables use of attractive', suffix: 'to present data.' },
                        { prefix: 'Non-traditional - suits applications for jobs in marketing or', suffix: '.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>DINOSAURS AND THE SECRETS THEY STILL HOLD</strong></h2>
<p><em>Dinosaur expert Dr Steve Brusatte continues to investigate the mysteries surrounding these fascinating prehistoric creatures</em></p>
<p>I was recently part of a team of palaeontologists that discovered a new dinosaur. Living in what is now China, the species would have resembled a strange bird. It was about the size of a sheep and covered in feathers, with a sharp beak that it probably used to crack open shellfish. It was given the formal scientific name <em>Tongtianlong</em>, but we called it 'Mud Dragon' because its skeleton was discovered in rock that had hardened from ancient mud. It seems that the creature got trapped in the mud and died. Then its fossil remains were found a few months ago when workmen were excavating a site in order to build a school.</p>
<p>It is every dinosaur-obsessed child's dearest wish to discover and name a completely new species. In fact what my colleagues and I did wasn't that unusual. New dinosaurs are appearing everywhere these days - about 50 each year. And this pace shows no signs of slowing, as different areas continue to open up to fossil hunters and a fresh generation of scientists comes of age. Because of this plentiful supply of new fossils, we now know more about dinosaurs than we do about many modern animals. But there are still many unsolved mysteries.</p>
<p>Dinosaurs didn't start out as huge monsters like <em>Tyrannosaurus Rex</em>. Instead they evolved from a group of angular, cat-sized reptiles called dinosauromorphs. These creatures remained small and rare for millions of years until they developed into dinosaurs. The boundary between dinosauromorphs and dinosaurs is becoming less and less distinct with each new discovery that's made, but what's becoming clear is that it took millions of years for these first dinosaurs to spread around the world, grow to huge sizes and become truly dominant.</p>
<p>Some discoveries in the 1970s, like the agile and strangely bird-like <em>Deinonychus</em>, proved that dinosaurs were far more dynamic and intelligent than previously thought. Some palaeontologists even proposed that they were warm-blooded creatures like modern birds with a constant high body temperature that they controlled internally, rather than from warming themselves by lying in the sun. A few decades later opinions are still mixed. The problem is that dinosaurs can't be observed. Palaeontologists must rely on studying fossils. Some results are convincing: we know from studying their bones that dinosaurs had rapid growth rates, just like modern, warm-blooded animals. Other palaeontologists, however, use the same fossils to suggest that dinosaurs were somewhere between cold-blooded reptiles and warm-blooded birds. More studies are needed to provide more clarity.</p>
<p>The discovery of <em>Deinonychus</em> with its long arms, skinny legs, arched neck and big claws on its feet, helped to strengthen the theory that birds evolved from dinosaurs. In the late 1990s, the discovery of thousands of feather-covered dinosaurs closed the argument. But the fossils raised another question: why did feathers first develop in dinosaurs? They probably originated as simple, hair-like strands - a necessary means of keeping warm. Many dinosaurs retained this basic fluffy coat, but in one group the strands modified. They grew bigger, started to branch out and changed into feathers like those on modern birds. They lined the arms, and sometimes the legs, forming wings. These feathers were probably for display: to attract mates or scare off rivals. They appeared in species such as the ostrich-like <em>Ornithomimosaur</em>. Such creatures were too large to fly. Flight may actually have come about by accident when smaller winged dinosaurs began jumping between trees or leaping in the air, and suddenly found that their wings had aerodynamic properties. This is one of the most stimulating new notions about dinosaurs and a fascinating area for further investigation.</p>
<p>There's something else that these feathers can tell us. They allow us to determine what colour dinosaurs were. If you look at modern bird feathers under a microscope, you can see tiny blobs called melanosomes. These structures contain melanin, one of the main colour-producing pigments in animals. Some are round, others are egg-shaped, etc. And that's important, because different shapes contain different colour pigments. So if you can identify the shape, you can identify the colour. A few years ago, some palaeontologists realised that you could find melanosomes in particularly well-preserved fossil feathers. They discovered that different dinosaurs had different melanosomes, which meant they had a variety of colours. Dinosaurs, therefore, probably came in a rainbow of colours - yet another thing that links them to modern birds.</p>
<p>The most enduring mystery of all, which has been argued about ever since the first dinosaur fossils were found, is 'Why aren't dinosaurs around today?' Of course, we now know that birds evolved from dinosaurs, so some dinosaurs do continue in a sense. But there's nothing like a <em>Tyrannosaurus Rex</em> today. They dominated the planet for over 150 million years, but suddenly disappeared from the fossil record 66 million years ago. That's when a 10 km-wide asteroid came out of space and struck what is now Mexico, impacting with huge force and unleashing earthquakes, tidal waves, wildfires and hurricane-force winds. Although palaeontologists still like to argue about what part the asteroid played in the dinosaurs' extinction, there really isn't much of a mystery left. The asteroid did it and did it quickly. There are few signs that dinosaurs were struggling before the impact. None survived except a few birds and some small furry mammals. They found themselves in an empty world, and as the planet started to recover, they evolved into new creatures, including the first apes, and so the long journey began to the beginning of humankind.</p>
`,
            questions: [
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 28,
                    title: 'Questions 28-32',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'The discovery of Tongtianlong',
                    items: [
                        { prefix: 'This species of dinosaur was probably no bigger than a', suffix: '.' },
                        { prefix: 'It is thought to have eaten', suffix: '.' },
                        { prefix: 'It used its', suffix: 'to get through the hard exterior of its food.' },
                        { prefix: 'The fossil was found surrounded by', suffix: 'under the ground.' },
                        { prefix: 'The foundations of a new', suffix: 'were being dug when it was discovered.' }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 33,
                    title: 'Questions 33-37',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: 'What does the writer suggest about finding new dinosaurs?',
                            options: [
                                { value: 'A', text: 'Many scientists dream of being able to do so one day.' },
                                { value: 'B', text: 'It is probable that most have now been discovered.' },
                                { value: 'C', text: 'People are running out of places to look for them.' },
                                { value: 'D', text: 'It is becoming relatively common to dig one up.' }
                            ]
                        },
                        {
                            question: 'In the fourth paragraph, what does the writer suggest about palaeontologists?',
                            options: [
                                { value: 'A', text: 'They should study the fossilised bones of dinosaurs more closely.' },
                                { value: 'B', text: 'Their theories are based on evidence that can be interpreted in different ways.' },
                                { value: 'C', text: 'It is impossible to have any confidence in the proposals they have made.' },
                                { value: 'D', text: "It is worrying that they still cannot agree about dinosaurs' body temperature." }
                            ]
                        },
                        {
                            question: 'When describing the theory of how dinosaurs began to fly, the writer is',
                            options: [
                                { value: 'A', text: 'amused that their flight probably came about by chance.' },
                                { value: 'B', text: 'surprised by the reason for the initial development of feathers.' },
                                { value: 'C', text: 'excited by the different possibilities it holds for future research.' },
                                { value: 'D', text: "confused that feathers were also present on some creatures' legs." }
                            ]
                        },
                        {
                            question: 'One significance of melanosomes is that they',
                            options: [
                                { value: 'A', text: 'provide further evidence of where birds evolved from.' },
                                { value: 'B', text: 'are only found in certain parts of the world.' },
                                { value: 'C', text: 'can be clearly seen in most fossilised feathers.' },
                                { value: 'D', text: 'are only found in certain birds and dinosaurs.' }
                            ]
                        },
                        {
                            question: "Which of the following best summarises the writer's point in the final paragraph?",
                            options: [
                                { value: 'A', text: 'Scientists are right to continue questioning the effects of the asteroid strike.' },
                                { value: 'B', text: 'Large flightless dinosaurs may have existed after the asteroid hit.' },
                                { value: 'C', text: 'The dinosaurs were already declining before the asteroid hit.' },
                                { value: 'D', text: 'The effects of the asteroid strike killed most dinosaurs.' }
                            ]
                        }
                    ]
                },
                {
                    type: 'matching',
                    startQuestionNumber: 38,
                    title: 'Questions 38-40',
                    instruction: 'Match each statement with the correct animal, A, B, C or D.',
                    note: 'NB  You may use any letter more than once.',
                    options: [
                        { value: 'A', label: 'Tongtianlong' },
                        { value: 'B', label: 'Tyrannosaurus Rex' },
                        { value: 'C', label: 'Deinonychus' },
                        { value: 'D', label: 'Ornithomimosaur' }
                    ],
                    items: [
                        { description: 'It may have used its feathers to frighten off members of the same species.' },
                        { description: 'This species resembles a large flightless bird that exists today.' },
                        { description: "Finding this species made scientists revise their opinion of dinosaurs' brain power." }
                    ]
                }
            ]
        }
    ]
};
