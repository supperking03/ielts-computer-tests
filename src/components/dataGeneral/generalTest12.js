export const generalTest12 = {
    id: 112,
    title: 'General Reading Practice Test 12',
    correctAnswers: [
        // Q1-8: TRUE/FALSE/NOT GIVEN
        'FALSE', 'FALSE', 'NOT GIVEN', 'TRUE', 'TRUE', 'TRUE', 'FALSE', 'TRUE',
        // Q9-14: paragraph matching A-G
        'G', 'A', 'B', 'E', 'A', 'F',
        // Q15-21: flow-chart completion
        'representatives', 'housekeeping', 'fire', 'storage', 'reporting', 'website', 'cupboard',
        // Q22-27: sentence completion
        'costs', 'screening', 'topics', 'headset', 'software', 'rehearsal',
        // Q28-33: paragraph matching A-E
        'B', 'E', 'B', 'D', 'A', 'D',
        // Q34-36: TRUE/FALSE/NOT GIVEN
        'FALSE', 'TRUE', 'TRUE',
        // Q37-40: multiple choice
        'C', 'A', 'C', 'B'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-8.</em></p>

<h2 style="text-align:center"><strong><em>The Guardian</em> Newspaper’s Travel Photography Competition</strong></h2>
<p>The photo competition is back, giving you another chance to win an incredible trip to Swedish Lapland.</p>
<p>Do you have a camera and love travelling? If so, our annual photography competition run by the Travel section of <em>The Guardian</em> is for you. It’s an opportunity for you to capture the essence of the journeys you make, whether far afield or close to home, and for us to showcase your work online. The winner of each month’s competition will also see their shot mounted and displayed in the end-of-year exhibition for the public at <em>The Guardian</em>’s offices in London. Once the exhibition is finished, each monthly winner will receive a framed copy of their shot to place with pride on their own wall.</p>
<p>There will be a different theme for each month. Members of <em>The Guardian</em> travel writing team, and photographer Michael Ryan of Fotovue.com will judge the monthly entries and the overall winner.</p>
<p>To enter you must be living in the UK from the time you submit your entry into the competition to the time you are selected as a winner. The competition is open to all photographers (both amateur and professional).</p>
<p>The overall winner (chosen from the 12 monthly winners) will go on an amazing four-night trip to Swedish Lapland. The host for this specialist holiday is Fredrik Broman, who has been a nature photographer for 21 years. Fredrik will assist the winner and other participants in photographing a wide variety of winter subjects. Each day has a specific focus. The trip includes winter light photography workshops, an image editing workshop, a night photography course, and an action photography workshop.</p>
<p>Included in the prize: return flights from the UK, four nights’ accommodation with full board, cold weather clothing for the duration of the trip - thermal overalls, winter boots, gloves, hats and woollen socks - fully qualified wilderness guides, and instructors.</p>
<p>The overall winner will be required to write a report of the trip, and take accompanying photographs, which will be printed in the Travel section of <em>The Guardian</em> at a later date. <em>The Guardian</em> reserves the right, however, to modify your report and photos as necessary. Your name will of course appear with the article and photos.</p>

<hr/>
<p><em>Read the text below and answer Questions 9-14.</em></p>

<h2 style="text-align:center"><strong>Running headphones</strong></h2>
<p>Listening to music on headphones makes running and even working out at the gym much more enjoyable. Here are some alternatives to choose from.</p>
<p><strong>A   Plantronics Backbeat Fit</strong></p>
<p>These headphones are really tough so you don’t need to worry about just throwing them into your bag before or after a workout. As well as providing reasonably clear sound they will also last a remarkable eight hours on a single charge.</p>
<p><strong>B   Sennheiser CX685 Sports</strong></p>
<p>These headphones are impressively practical. Designed to fit firmly in your ear, however energetic you are, they’re tight without being uncomfortable, and have a handy remote and a mic for phone calls. They will also resist some water being spilt on them.</p>
<p><strong>C   Nokia WH-510 Coloud Pop</strong></p>
<p>These stylish headphones have fantastic bass, giving you a bit of extra oomph when you run. They also have a tangle-free cable which avoids any time-consuming messing about before you set off on your run.</p>
<p><strong>D   Sony NWZ-W273S</strong></p>
<p>It’s hard to imagine using any other headphones once you’ve tried these. As well as being wireless and waterproof at a depth of 2m, they even have a built-in MP3 player that can hold up to 1,000 songs. A charge provides up to an hour of playback.</p>
<p><strong>E   Betron B7505</strong></p>
<p>If you’re on a tight budget, it can always feel risky buying a bottom of the market pair of headphones, but with these you needn’t worry. Not only do they provide fair sound quality, they also come with a pouch to keep them in.</p>
<p><strong>F   Happy Plugs</strong></p>
<p>The sound quality on these is decent, although you’re probably not going to be hugely impressed. They also come with a handy remote built into the cable to skip and pause songs with while you work out.</p>
<p><strong>G   Powerbeats 2</strong></p>
<p>If money is not an issue, then these are definitely worth considering. They make everything sound so crisp and they’re so light and comfortable that it’s easy to forget that you’re even wearing them.</p>
`,
            questions: [
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 1,
                    title: 'Questions 1-8',
                    instruction: 'Do the following statements agree with the information given in the text?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'This is the first year that The Guardian has run a travel photography competition.' },
                        { statement: 'Any photograph for the competition must have been taken on an overseas trip.' },
                        { statement: 'The end-of-year exhibition in London is free for the public to attend.' },
                        { statement: 'The judging panel is made up of a group of journalists and a professional photographer.' },
                        { statement: 'The trip to Swedish Lapland will only be offered to one winner.' },
                        { statement: 'Every activity on the trip is focused on improving photography techniques.' },
                        { statement: 'Anyone going on the trip may take some of the cold weather clothing home at the end of the trip.' },
                        { statement: 'Articles written about the trip may be changed before being published.' }
                    ]
                },
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 9,
                    title: 'Questions 9-14',
                    instruction: 'Look at the seven reviews of headphones, A-G. For which headphones are the following statements true?',
                    paragraphRange: 'A-G',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                    items: [
                        { description: 'These headphones would suit someone who doesn’t mind spending a lot to get good quality.' },
                        { description: 'The battery on these headphones has a surprisingly long life.' },
                        { description: 'It is possible to keep in contact with other people while using these headphones.' },
                        { description: 'Although these headphones are cheaper than most, music sounds quite good through them.' },
                        { description: 'These headphones are very strong and do not require gentle handling.' },
                        { description: 'These headphones allow users to move around their playlist of music easily while they are exercising.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-21.</em></p>

<h2 style="text-align:center"><strong>A case study of a risk assessment for general office cleaning</strong></h2>
<p>A commercial cleaning service took on a new contract to clean an office complex. Before sending cleaning staff to the offices, the manager of the cleaning service carried out a risk assessment using guidance provided by the Health and Safety Executive (HSE).</p>
<p>To identify the hazards, the cleaning service manager visited the office complex and walked through the areas where cleaning staff would be working, noting things that might pose potential risks. Following this, he consulted the health and safety representatives of the cleaning service about these risks, taking into account the needs of any particular staff members, such as whether they were pregnant or aged under 18.</p>
<p>In order to gather further information, he then had a meeting with the client company during which a number of issues were discussed. These included the client company’s own standard of housekeeping, such as the immediate clearing up of spills and keeping walkways clear, as well as the action to be taken if a fire broke out. He also established what facilities and equipment would be available to the cleaners, including the amount of storage space available, as well as the availability of sinks and taps, etc. and agreed on a method of reporting near-miss accidents and risks discovered by cleaners (e.g. damaged floor tiles).</p>
<p>Following the meeting, the manager created a risk assessment document. He wrote down who could be harmed by each risk or hazard identified and in what way, and he then described what controls, if any, were in existence to manage these hazards. The manager then compared these to the good practice guidance set out on the HSE’s website and identified any areas where improvement was needed.</p>
<p>The manager discussed the findings with the cleaning staff, making sure they understood the risks of the job and how these risks would be monitored. One cleaner, whose first language was not English, had difficulty understanding this, so the manager arranged for translation to be done by a bilingual cleaner from another team. Finally, to ensure that all the cleaning staff had access to a copy of the risk assessment, the manager pinned a copy in the cupboard where cleaning equipment was kept.</p>

<hr/>
<p><em>Read the text below and answer Questions 22-27.</em></p>

<h2 style="text-align:center"><strong>Preparing for a virtual job interview</strong></h2>
<p>Businesses are always looking for new ways to increase efficiency and profits. For example, organisations often reduce costs by conducting virtual job interviews. The video or Skype interview benefits both interviewer and interviewee, especially when an applicant would otherwise need to travel far. Despite the convenience though, it poses unique challenges.</p>
<p><strong>How a virtual interview is the same</strong></p>
<p>The typical interview process usually entails multiple steps. First, there is screening, lasting about thirty minutes. Its purpose is to ensure candidates have the basic requirements. In the second interview, they’re assessed for their technical skills and on whether they would fit the organisation.</p>
<p>Virtual interviews follow the same steps so you’ll need to focus on the same core topics. Identify what the critical topics are based on the job description and prepare to talk about them. If you can, gather inside information so you can impress interviewers with your knowledge.</p>
<p><strong>How a virtual interview is different</strong></p>
<p>Normally you travel somewhere for an interview. One advantage of that is that you aren’t responsible for the place, whereas in a virtual interview you must ensure you have an appropriate location and appropriate equipment.</p>
<p>Modern technology is great when it works, but a pain when it doesn’t. So, it’s wise to check you can operate your webcam, especially if you don’t use it often. Test the headset too and find out how intelligible your voice sounds. It’s also wise to establish what software the interviewer is going to work with and give it a trial run.</p>
<p>Probably the biggest problem in a virtual interview is what the camera can see. You want the interviewer to see you as a professional. Having a messy or cluttered room behind you won’t help you achieve this image - a clear white background is usually a safe bet.</p>
<p>The most important part of your preparation is to run through everything first as best you can. Have a friend conduct a rehearsal with you before the big day. This will help you know how to behave in front of the camera.</p>
<p>All things considered, though, virtual interviews should be treated like any other type of interview. Being at home requires as much preparation as a traditional interview. If you follow the steps mentioned above, you have every chance of getting the job you want. Good luck!</p>
`,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 15,
                    title: 'Questions 15-21',
                    instruction: 'Complete the flow-chart below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Stages followed by manager in carrying out risk assessment',
                    items: [
                        { prefix: 'He talked to health and safety', suffix: 'about the risks.' },
                        { prefix: 'At a meeting, he talked to the client company about the policy of the company regarding', suffix: '(e.g. clear walkways).' },
                        { prefix: 'He discussed procedures to be followed in case of a', suffix: '.' },
                        { prefix: 'He checked facilities available to cleaners, e.g. space available for', suffix: '.' },
                        { prefix: 'He agreed on a way of', suffix: 'risks and hazards.' },
                        { prefix: 'He compared existing controls to information that the HSE provided on its', suffix: '.' },
                        { prefix: 'He displayed a copy of the risk assessment inside a', suffix: 'available to all cleaning staff.' }
                    ]
                },
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 22,
                    title: 'Questions 22-27',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    items: [
                        { prefix: 'Some companies prefer to interview job applicants digitally because of lower', suffix: '.' },
                        { prefix: 'As with the standard recruitment process, virtual recruitment opens with', suffix: '.' },
                        { prefix: 'Applicants should read any details about the advertised post carefully and pick out important', suffix: 'which they can discuss if necessary.' },
                        { prefix: 'It is a good idea for applicants to check if they can be clearly understood when they use a', suffix: '.' },
                        { prefix: 'Applicants may not be familiar with the', suffix: 'that the person conducting the interview will use, so they should try it out.' },
                        { prefix: 'It is very useful to go through a', suffix: 'of the interview, with someone playing the part of the interviewer.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>Tuning up your leadership skills</strong></h2>
<p><em>Does jazz music offer lessons for today’s leaders?</em></p>
<p><strong>A</strong></p>
<p>Ever since management expert Peter Drucker compared the job of Chief Executive Officer to that of an orchestra conductor, the business world has been exploring comparisons and inspirations from the world of music. Now Warwick Business School Professors Deniz Ucbasaran and Andy Lockett are hitting all the right notes with their study of famous jazz musicians, <em>Leading Entrepreneurial Teams: Insights From Jazz</em>, providing some essential insights for entrepreneurial team leaders.</p>
<p>Ucbasaran and Lockett (together with Durham Business School Professor Michael Humphries) chose jazz for a number of reasons. For a start, jazz bands are synonymous with creativity, improvisation and innovation, all essential ingredients for entrepreneurship. Jazz groups and their members often operate in uncertain and dynamic environments, characterised by rapid change. Yet through collective endeavour many jazz bands find their own structure and harmony and become profitable enterprises - both creatively and commercially.</p>
<p><strong>B</strong></p>
<p>The authors decided to focus on three of the best known names in jazz - Duke Ellington, Miles Davis and Art Blakey. American composer Duke Ellington was a pioneering jazz orchestra leader from the 1920s through to the 1970s. Trumpet player Miles Davis was instrumental in the development of a number of new jazz styles, including bebop and jazz fusion. Jazz drummer Arthur ‘Art’ Blakey became famous as the leader of his band the <em>Jazz Messengers</em>.</p>
<p>The research focused on the way that these jazz greats created and ran their musical enterprises. In particular, Ucbasaran and Lockett focused on three specific areas of leadership activity: team formation, team coordination and team turnover.</p>
<p>There were strong similarities in the processes the band leaders used to assemble their diverse teams of talent. In particular, they looked for musicians with a different sound or way of playing, one that was unique to that band member and would improve the overall sound of the band. That feature was as much bound up with the personality of the individual musician as it was to do with their technical proficiency.</p>
<p><strong>C</strong></p>
<p>But disparate teams, many different personalities, and high levels of creativity are a recipe for group conflict. And, sure enough, there was plenty of dysfunctional conflict and disruptive clashes of egos and personalities evident in the jazz ensembles.</p>
<p>Traditional team leadership theory suggests that to get the best team performance the leader should foster conflict that is productive in its effects, while minimising destructive conflict. But this is difficult when the sources of productive and destructive conflict are the same; that is, differences in personality and thinking. So how do leaders deal with destructive conflict? It didn’t seem to bother the likes of Ellington, Davis and Blakey.</p>
<p>Their attitude was ‘the music comes first’. The moments of musical genius when everything came together excused minor problems such as if individuals occasionally turned up late for practice, or stepped out of a performance for a quick snack.</p>
<p><strong>D</strong></p>
<p>Teams must coordinate their behaviour and action to achieve an outcome. The team leader can assume a number of different roles when helping the team achieve its objectives. Some leaders are very directive, detailing what tasks they want team members to perform, and how they want them to go about those tasks.</p>
<p>But that was not the approach Ellington, Davis and Blakey adopted. Instead, these leaders acted more as facilitators, empowering the musicians to collectively coordinate their behaviour and action to produce the desired outcome. As Ucbasaran and Lockett note, Miles Davis discouraged band members from rehearsing in case it led to musical cliches from over-practice. Similarly, he often asked his musicians to play a piece in an unusual key, so they did not rely on learned fingering patterns. The performers were not left entirely to their own devices though. All three leaders created a general framework within which team members could work, providing guidance but also the freedom to explore, express and make mistakes.</p>
<p><strong>E</strong></p>
<p>The third aspect of leadership behaviour that Ucbasaran and her colleagues looked at was managing team turnover - people joining and leaving the team. In the jazz ensembles studied, musicians joined and left on a regular basis. Yet the high turnover of team members, despite the resulting loss of knowledge and skills, was seen in a positive light. That was partly because of the advantages of getting a fresh shot of knowledge, ideas and creativity when new members joined.</p>
<p>A common reason for the jazz musicians leaving was that they felt sufficiently qualified to go and run another band. The three band leaders were understanding about this, particularly as it was a process they had also been through. In some cases, in particular with Art Blakey, they actively encouraged and coached team members to become leaders. As the jazz icons Ellington, Davis and Blakey would no doubt agree, there is no magic score that if followed note by note will make you a great leader of creative talent. However, take an entrepreneur, a few cues from the aforementioned jazz trio, mix in a little improvisation, and you are more likely to hear the sweet sound of success.</p>
`,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 28,
                    title: 'Questions 28-33',
                    instruction: 'The text has five sections, A-E. Which section contains the following?',
                    paragraphRange: 'A-E',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E'],
                    items: [
                        { description: 'a summary of the different aspects of leadership that are covered in the study' },
                        { description: 'a description of how band leaders sometimes passed on their leadership skills to others' },
                        { description: 'a summary of the backgrounds of the band leaders chosen for the study' },
                        { description: 'examples of ways in which one band leader encouraged his musicians to be more creative' },
                        { description: 'an overview of the main similarities between the work of business people and jazz musicians' },
                        { description: 'a description of two contrasting ways of leading a team' }
                    ]
                },
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 34,
                    title: 'Questions 34-36',
                    instruction: 'Do the following statements agree with the information given in the text?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'The study by Ucbasaran and Lockett was the first to compare the worlds of music and business.' },
                        { statement: 'One reason why jazz musicians were chosen for the research is because the setting in which they work is unpredictable.' },
                        { statement: 'The researchers decided to cover only certain aspects of leadership.' }
                    ]
                },
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 37,
                    title: 'Questions 37-40',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: 'When assembling their teams, the band leaders all prioritised players',
                            options: [
                                { value: 'A', text: 'who had special technical skill.' },
                                { value: 'B', text: 'who were used to working independently.' },
                                { value: 'C', text: 'who had an individual style of their own.' },
                                { value: 'D', text: 'who would get on well with other band members.' }
                            ]
                        },
                        {
                            question: 'What obstacle might jazz leaders face in reducing destructive conflict among team members?',
                            options: [
                                { value: 'A', text: 'They may also reduce productive conflict in the process.' },
                                { value: 'B', text: 'Their team members tend to have especially strong personalities.' },
                                { value: 'C', text: 'They are unaware of the theory concerning different types of conflict.' },
                                { value: 'D', text: 'Their team members may be unwilling to cooperate in reducing this.' }
                            ]
                        },
                        {
                            question: 'What approach to group coordination was shared by Ellington, Davis and Blakey?',
                            options: [
                                { value: 'A', text: 'They allowed musicians to be creative within certain agreed limits.' },
                                { value: 'B', text: 'They increased opportunities for success and reduced chances of failure.' },
                                { value: 'C', text: 'They provided a structure within which musicians could express themselves.' },
                                { value: 'D', text: 'They coordinated the work of their teams so each member contributed equally.' }
                            ]
                        },
                        {
                            question: 'Ucbasaran and her colleagues found that the high turnover of members in jazz bands',
                            options: [
                                { value: 'A', text: 'was eventually reduced by the policies of the band leaders.' },
                                { value: 'B', text: 'was welcomed by band leaders for the benefits it brought.' },
                                { value: 'C', text: 'was due to a shortage of effective band leaders.' },
                                { value: 'D', text: 'was a feature of the growing popularity of jazz.' }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};
