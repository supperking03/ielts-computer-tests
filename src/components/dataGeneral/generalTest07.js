export const generalTest07 = {
    id: 107,
    title: 'General Reading Practice Test 07',
    correctAnswers: [
        // Q1-7: paragraph matching A-E
        'B', 'E', 'D', 'C', 'C', 'B', 'A',
        // Q8-14: TRUE/FALSE/NOT GIVEN
        'FALSE', 'TRUE', 'FALSE', 'FALSE', 'TRUE', 'NOT GIVEN', 'FALSE',
        // Q15-21: notes completion
        'emails', 'impact assessment', 'equipment', 'quality', 'crime', '(computer) viruses', '(confidential) helplines',
        // Q22-27: flow-chart completion
        'questionnaire', 'account', '10 days', 'complete', 'employer', 'refund',
        // Q28-32: multiple choice
        'B', 'A', 'C', 'D', 'A',
        // Q33-36: matching
        'B', 'D', 'C', 'D',
        // Q37-40: summary completion
        'tsetse fly', 'immune system', 'proteins', 'cattle'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-7.</em></p>

<h2 style="text-align:center"><strong>Your guide to entertainment in Westhaven</strong></h2>
<p><strong>A TRAX INDOOR KARTING CENTRE</strong></p>
<p>Open to those over eight years old, this huge karting arena is a guaranteed need-for-speed fun experience. Drivers can be as young as eight, but under-14s must be accompanied by an adult. The track, with its own steep hill section, is 800 metres long. Safety is taken very seriously, so anyone using the track must wear the special overalls provided. The canteen and bar overlook all the action. Open seven days a week from noon until 11 p.m. but closed some evenings for private bookings, so if in doubt call before setting out.</p>
<p><strong>B WESTHAVEN LIFEBOAT MUSEUM</strong></p>
<p>Come and see artefacts from over 100 years of history. A video with commentary from former crew members presents the story of the Westhaven lifeboat and how this local community has responded to emergency situations over the years. There is also a children’s play area and a quiz for younger visitors to make their visit more enjoyable. Donations are asked for but entry is free. Next to the museum is a small shop and snack bar where refreshments can be purchased. The museum is open daily except Sundays. Educational group visits are available by prior arrangement.</p>
<p><strong>C STAR LEISURE CENTRE</strong></p>
<p>The centre offers a fantastic range of leisure activities including two swimming pools, fitness suites, a large sports hall, squash and badminton courts, and exercise classes. There is also a soft play area designed for children under five, making it especially useful for families. Full information about timetables and classes is available on the centre’s website and in the monthly leaflet available at the reception desk. It is open every day from 6 a.m. to 10 p.m.</p>
<p><strong>D LLOYD’S LANES</strong></p>
<p>A great place to meet up with friends, Lloyd’s Lanes offers ten-pin bowling, a games arcade and a diner. Bowling shoes must be worn on the lanes and these can be hired at reception. There are special family packages available and weekend children’s parties can be booked in advance. Staff are available to help beginners, but there are no formal coaching sessions. Open every afternoon and evening, with extra morning sessions during school holidays.</p>
<p><strong>E WESTHAVEN GOLF CLUB</strong></p>
<p>Visitors are welcome at this scenic 18-hole golf course overlooking the coast. Equipment can be hired if required and lessons are available from qualified professionals. A relaxed dress code applies in most parts of the club, although soft-spike shoes are required on the course itself. Junior coaching sessions run at weekends and during school holidays. The club restaurant is open to non-members and offers panoramic views over the course.</p>

<hr/>
<p><em>Read the text below and answer Questions 8-14.</em></p>

<h2 style="text-align:center"><strong>DO YOU HAVE A MUSIC PROJECT IN MIND THAT MIGHT BENEFIT FROM FUNDING?</strong></h2>
<p>The Dosoco Foundation is a charitable organisation that offers financial support to musicians and music educators. Grants are available for a wide range of music projects, including the purchase of instruments, support for tuition, specialist workshops and performance opportunities. Applications are assessed twice a year, and successful candidates are usually informed within eight weeks.</p>
<p>One recent grant recipient is Alexia Sloane. Alexia, who is visually impaired, first developed her interest in music while attending a summer-school composition course. Since then she has gone on to perform with a number of youth ensembles and has won praise for her original compositions. She now studies at a specialist music college and hopes to work in film music in the future.</p>
<p>Applicants must submit a written proposal outlining the purpose of the funding request and how it will help their musical development or community project. In some cases the foundation contributes part of the cost rather than the full amount, and applicants are encouraged to seek support from additional sources where appropriate. Application forms can be downloaded from the foundation’s website and sent by post or email.</p>
`,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 1,
                    title: 'Questions 1-7',
                    instruction: 'Look at the five advertisements, A-E. Which advertisement mentions the following?',
                    paragraphRange: 'A-E',
                    note: 'NB You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E'],
                    items: [
                        { description: 'Payment at this venue is optional.' },
                        { description: 'Expert instructors are available for lessons.' },
                        { description: 'There is a restriction on what you can wear.' },
                        { description: 'Some basic information is published in another place.' },
                        { description: 'This has particular provision for very young children.' },
                        { description: 'It has a feature especially recommended for educational parties.' },
                        { description: 'They will open at unscheduled times if you make an arrangement.' }
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
                        { statement: 'You can apply to Dosoco now for grant funding.' },
                        { statement: 'You can apply for a grant that will help to educate a musician.' },
                        { statement: 'Alexia Sloane lost her sight after attending a summer-school composition course.' },
                        { statement: 'Alexia now plays several instruments with the National Youth Orchestra of Great Britain.' },
                        { statement: 'Alexia has received an award for her work in music.' },
                        { statement: 'Applications can be made by filling in an online form.' },
                        { statement: 'In some cases Dosoco will cover the full cost of the project.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-21.</em></p>

<h2 style="text-align:center"><strong>Guide to employees on workplace monitoring</strong></h2>
<p>Employers may monitor the use of workplace systems and equipment for a number of legitimate business reasons. Monitoring can include checking the use of emails and internet access, logging phone calls, examining the use of vehicles and reviewing records produced while work is carried out. Employers should be clear about why monitoring is necessary and should explain this to staff in advance.</p>
<p>Before introducing any monitoring, employers should normally carry out a procedure known as an impact assessment. This involves weighing the benefits of the proposed monitoring against its potential effect on workers’ privacy. Employers should make sure that monitoring is proportionate and only used where there is a clear business need.</p>
<p>Monitoring may be used to ensure that equipment intended for work is being used properly, to evaluate the quality of work being done, to prevent or detect crime, and to protect systems from the risk of computer viruses. Employers may also monitor communications to make sure they are handled professionally, but confidential helplines or calls to worker representatives should not be recorded.</p>

<hr/>
<p><em>Read the text below and answer Questions 22-27.</em></p>

<h2 style="text-align:center"><strong>International Experience Canada: application process</strong></h2>
<p>To apply, first fill in the online questionnaire. This will determine whether you are eligible and will give you a personal reference code. You must then create your account and use the code to build your profile.</p>
<p>If you receive an invitation to apply, you must accept it within 10 days. After accepting, you then have a limited number of days to complete the application and submit all the required supporting documents.</p>
<p>Your employer must send you an offer of employment number before the application can be finalised. You then make the required payment online. If you later decide not to participate, you may be eligible for a refund depending on how far your application has progressed.</p>
`,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 15,
                    title: 'Questions 15-21',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose NO MORE THAN TWO WORDS from the text for each answer.',
                    sectionTitle: 'Why employers monitor staff',
                    items: [
                        { prefix: 'Employers can monitor workers’ use of workplace systems, including letters and', suffix: '' },
                        { prefix: 'Employers should carry out a procedure known as', suffix: 'before introducing monitoring' },
                        { prefix: 'Monitoring may include checking the use of', suffix: 'intended for work' },
                        { prefix: 'Employers may monitor staff in order to evaluate the', suffix: 'of your work' },
                        { prefix: 'Monitoring may be used to stop or find out about', suffix: '' },
                        { prefix: 'Monitoring can stop the possibility of', suffix: 'affecting systems' },
                        { prefix: 'Employers can check calls to', suffix: 'but these cannot be recorded' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 22,
                    title: 'Questions 22-27',
                    instruction: 'Complete the flow-chart below.',
                    wordLimit: 'Choose ONE WORD AND/OR A NUMBER ONLY from the text for each answer.',
                    sectionTitle: 'Applying to International Experience Canada',
                    items: [
                        { prefix: 'Fill in the online', suffix: 'to get a personal reference code' },
                        { prefix: 'Create your', suffix: 'and provide the necessary information for the profile in your application' },
                        { prefix: 'If sent an invitation, you must accept this within', suffix: '' },
                        { prefix: 'You then have a limited time to', suffix: 'the application' },
                        { prefix: 'Your', suffix: 'is required to send you an offer of employment number' },
                        { prefix: 'Make the payment for participation online. You may receive a', suffix: 'later if you change your mind' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>RESEARCH ON IMPROVING AGRICULTURAL YIELDS IN AFRICA</strong></h2>
<p><em>Three programmes are investigating ways of improving agricultural productivity in Africa.</em></p>
<p>Professor James Wood has spent years studying trypanosomiasis, a disease spread by the tsetse fly that affects cattle across large parts of Africa. The disease weakens the animal’s immune system and reduces productivity, and in severe cases it can be fatal. Wood argues that the main problem for Ethiopian farmers is not simply a shortage of land or food, but the impact of this disease on cattle, which are central to farming life.</p>
<p>In Ghana, Ken Fening and Theresa Manful have focused on vegetable crops, especially cabbages. Cabbage production contributes significantly to the local economy, but growers have faced serious losses because of an insect pest and a newly identified disease. Fening suspected that the disease was caused by a virus because of the pattern of symptoms in the field. Samples sent to Cambridge later confirmed that the pathogen was a virus not previously recorded on cabbages in Ghana.</p>
<p>John Carr has highlighted the need for specialists in plant pathology, entomology and crop management to work together if practical solutions are to be found. His colleague Theresa Manful has been involved in field trials in which local farmers helped carry out tests and monitor results. The work has also identified an insect affecting cabbages that had not previously been known in Ghana.</p>
<p>Mark Carrington’s work has concentrated on the biology of the parasite responsible for trypanosomiasis. The parasite survives by altering the proteins on its outer covering, helping it to avoid attack by the host’s immune system. This has made the disease particularly difficult to control in cattle, which remain among the animals most seriously affected in Ghana.</p>
`,
            questions: [
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 28,
                    title: 'Questions 28-32',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: 'According to Professor Wood, what is the main problem faced by cattle farmers in Ethiopia?',
                            options: [
                                { value: 'A', text: 'A shortage of grazing land' },
                                { value: 'B', text: 'The effects of trypanosomiasis on cattle' },
                                { value: 'C', text: 'The lack of veterinary training' },
                                { value: 'D', text: 'The high cost of imported feed' }
                            ]
                        },
                        {
                            question: 'What does the writer say about the cultivation of cabbages in Ghana?',
                            options: [
                                { value: 'A', text: 'It is important for the local economy.' },
                                { value: 'B', text: 'It has recently expanded into new regions.' },
                                { value: 'C', text: 'It depends heavily on imported seed.' },
                                { value: 'D', text: 'It is mainly carried out on large farms.' }
                            ]
                        },
                        {
                            question: 'Ken Fening believed that the new disease destroying cabbages was',
                            options: [
                                { value: 'A', text: 'carried by an insect pest.' },
                                { value: 'B', text: 'caused by poor growing methods.' },
                                { value: 'C', text: 'the result of a virus.' },
                                { value: 'D', text: 'the same as one found in Europe.' }
                            ]
                        },
                        {
                            question: 'Why did Fening first suspect a virus?',
                            options: [
                                { value: 'A', text: 'The disease spread rapidly during one season.' },
                                { value: 'B', text: 'The farmers had seen the same symptoms before.' },
                                { value: 'C', text: 'He had studied a similar disease elsewhere.' },
                                { value: 'D', text: 'The symptoms formed a recognisable pattern.' }
                            ]
                        },
                        {
                            question: 'What did the researchers in Cambridge discover?',
                            options: [
                                { value: 'A', text: 'The pathogen had not been recorded previously on cabbages in Ghana.' },
                                { value: 'B', text: 'The disease was resistant to all known pesticides.' },
                                { value: 'C', text: 'The cabbage pest originated outside Africa.' },
                                { value: 'D', text: 'The disease had spread to several other crops.' }
                            ]
                        }
                    ]
                },
                {
                    type: 'matching',
                    startQuestionNumber: 33,
                    title: 'Questions 33-36',
                    instruction: 'Look at the following statements and the list of researchers below. Match each statement with the correct researcher, A-E.',
                    options: [
                        { value: 'A', label: 'James Wood' },
                        { value: 'B', label: 'Ken Fening' },
                        { value: 'C', label: 'John Carr' },
                        { value: 'D', label: 'Theresa Manful' },
                        { value: 'E', label: 'Mark Carrington' }
                    ],
                    items: [
                        { description: 'This researcher says the crop makes an important contribution to the local economy.' },
                        { description: 'This researcher describes tests that were carried out by local people.' },
                        { description: 'This researcher believes that different kinds of specialists must work together.' },
                        { description: 'This researcher mentions one insect attacking plants in Ghana that was previously unknown there.' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 37,
                    title: 'Questions 37-40',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose NO MORE THAN TWO WORDS from the text for each answer.',
                    sectionTitle: 'Trypanosomiasis',
                    items: [
                        { prefix: 'Trypanosomiasis is transmitted by an insect called the', suffix: '' },
                        { prefix: 'The disease damages the host’s', suffix: '' },
                        { prefix: 'The parasite survives by changing the', suffix: 'on its outer covering' },
                        { prefix: 'The disease is especially serious for', suffix: 'in Ghana' }
                    ]
                }
            ]
        }
    ]
};
