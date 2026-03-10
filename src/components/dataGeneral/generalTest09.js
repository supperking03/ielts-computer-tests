export const generalTest09 = {
    id: 109,
    title: 'General Reading Practice Test 09',
    correctAnswers: [
        // Q1-7: paragraph matching A-G
        'B', 'F', 'D', 'E', 'A', 'E', 'G',
        // Q8-14: TRUE/FALSE/NOT GIVEN
        'FALSE', 'TRUE', 'NOT GIVEN', 'FALSE', 'TRUE', 'NOT GIVEN', 'FALSE',
        // Q15-20: flow-chart completion
        'shipment', 'photo ID', '(cab) lights', 'sleeper areas', 'immigration', 'charge',
        // Q21-27: notes completion
        'chair', 'allergy', 'dependants', 'flexible', 'dismissal', 'doctor', 'stress',
        // Q28-36: paragraph headings
        'ix', 'iv', 'ii', 'iii', 'vi', 'x', 'vii', 'i', 'viii',
        // Q37-40: summary completion
        'ocean', 'valley', 'mountains', 'wind'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-7.</em></p>

<h2 style="text-align:center"><strong>THE BEST SUITCASES</strong></h2>
<p><strong>A   Briggs and Riley Weekender</strong></p>
<p>A weekend suitcase that's sophisticated and unusually spacious for its type. The strong nylon outer fabric is water and abrasion resistant, so it should handle any knocks without showing signs of damage.</p>
<p><strong>B   Mulberry Scotchgrain</strong></p>
<p>Trimmed in brown leather, with gold details, this bag from the renowned fashion house is a truly indulgent buy. If you're investing this much in a suitcase then you'd better be planning an amazing holiday to go with it.</p>
<p><strong>C   Rimova Salsa</strong></p>
<p>A design you can trust, this case is built from super light polycarbonate and is incredibly solid. The built-in combination lock offers state-of-the-art security so you can travel with peace of mind.</p>
<p><strong>D   Tripp Holiday</strong></p>
<p>Simple and affordable, the Tripp range offers a great selection of tough cases. They also come in a huge range of cheerful colours that should go with anything you choose to put on, and you'll definitely be able to spot it on the luggage carousel at the airport.</p>
<p><strong>E   Eastpak Tranverz Holdall</strong></p>
<p>For those who want something in between an annual holiday suitcase and a weekend bag, this is a fantastic compromise. With two wheels and a telescopic handle, the bag is guaranteed for 30 years. Did we mention it also comes in colourful leopard print?</p>
<p><strong>F   Herschel Parcel</strong></p>
<p>From the brand behind some of today's most popular rucksacks, this suitcase really is a delight. Custom printed, with Herschel's signature leather toggles this well-crafted case is as cool, stylish and up to date as they come.</p>
<p><strong>G   The Diplomat</strong></p>
<p>Travel in style with this beautiful suitcase that goes back to the days when trains ran on steam and air travel was leisurely. The leather case, part of the Steamline Luggage range, features roller wheels and a metal frame to hold it in shape.</p>

<hr/>
<p><em>Read the text below and answer Questions 8-14.</em></p>

<h2 style="text-align:center"><strong>THE OXFORD SCHOOL OF DRAMA</strong></h2>
<p><strong>One-Year Acting Course</strong></p>
<p>This is an intensive course which is designed for those who have completed their academic studies and have some theatre or film experience already. In order to be accepted, you should be a high achiever, knowledgeable about the industry and determined to succeed.</p>
<p><u>Term One:</u> Technical classes in acting, voice, movement, applied movement and characterisation, music, singing, film, radio and professional development. The term finishes with an internal production given for tutors and students.</p>
<p><u>Term Two:</u> All technical classes continue from term one. There is an internal performance of a one-act play, the recording of an audio showreel at a professional studio and the Showcase Drama in front of an invited audience including casting directors and agents.</p>
<p><u>Term Three:</u> Technical classes continue with additional focus on audition technique, workshops and masterclasses. This term includes a public performance of a play outdoors in the grounds of Blenheim Palace, and the chance to act a short film recorded on location by a professional crew.</p>
<p><strong>How to Apply</strong></p>
<p>Entry to The Oxford School of Drama is by audition only and there are no academic requirements for any of our courses.</p>
<p>Once we have received your application form and audition fee, we will email you with a date for your audition and further details about what to expect when you are here.</p>
<p>For your initial audition, you will need to prepare two contrasting speeches from plays, lasting no longer than two minutes. There will also be some group work for which you will need to wear loose, comfortable clothing.</p>
<p>If you are applying from overseas, you will be able to submit your first audition by means of DVD, YouTube or link to a secure website. You will be invited to submit this once we have received your application form and audition fee. If you are successful in your first audition, you will be invited to attend future auditions here at the school. The school will provide a free bus from central Oxford for those attending auditions.</p>
`,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 1,
                    title: 'Questions 1-7',
                    instruction: 'Look at the seven reviews of suitcases, A-G. For which suitcase are the following statements true?',
                    paragraphRange: 'A-G',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                    items: [
                        { description: 'This suitcase is for those who wish to purchase expensive luggage.' },
                        { description: 'This suitcase is the right one for people who like to follow the latest fashion.' },
                        { description: 'It is easy to choose one of these suitcases to match most clothing.' },
                        { description: 'The manufacturer is confident that this suitcase will last a long time.' },
                        { description: 'Items in this suitcase will not be affected if it gets wet.' },
                        { description: 'This suitcase is of a useful, medium size.' },
                        { description: 'Those who want to be reminded of an earlier age of travel will like this suitcase.' }
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
                        { statement: 'Students can begin the one-year course without any previous involvement in acting.' },
                        { statement: 'Students will act in a performance in front of their classmates at the end of the first term.' },
                        { statement: 'Family members may attend a performance during the second term.' },
                        { statement: 'Students are required to make a film on their own in the last term of the course.' },
                        { statement: 'In their first audition, candidates perform speeches they have worked on in advance.' },
                        { statement: 'The Oxford School of Drama will send candidates details of local accommodation.' },
                        { statement: 'Overseas candidates can do all their auditions via a digital link.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-20.</em></p>

<h2 style="text-align:center"><strong>BORDER CROSSING FOR COMMERCIAL VEHICLES</strong></h2>
<p>This Border Crossing Guide is designed for drivers and motor carriers operating commercial vehicles at Michigan's international border crossings. This information will help you cross the border from the US into Canada, and from Canada into the US.</p>
<p>Your first point of contact at the border consists of Primary Inspection. The best way to clear customs at Primary Inspection is to make sure Customs gets information about your shipment before you set off, using the Pre-Arrival Processing System (PAPS). When using this you need to provide information about your shipment, and you also need to send proof of a current annual inspection for your vehicle, tractor and trailer.</p>
<p>Before you arrive at the border, make sure you have all your paperwork up to date and ready to present at Primary Inspection. You'll need a photo ID in addition to your birth certificate or passport. Drivers must also turn on interior cab lights and open all interior drapes or blinds to sleeper areas for easy inspection.</p>
<p>If all of your paperwork is in order and was processed ahead of time, you will be released at the primary lane and this may be your only stop. If you are not a Canadian or US citizen, a visa is obligatory and you will also be required to complete an I-94 card. I-94 cards are available only at border crossings into the United States. Drivers who clear customs at Primary Inspection will be instructed to report to Immigration to fill out the I-94 card and receive verbal clearance from a US official to proceed into the United States. The charge for the I-94 card is $6.</p>
<p>If your paperwork is not in order, you will be directed to Secondary Inspection. When you get there, look for the signs for Truck Inspection and follow these.</p>

<hr/>
<p><em>Read the text below and answer Questions 21-27.</em></p>

<h2 style="text-align:center"><strong>Appendix: Dealing with absence in the workplace</strong></h2>
<p>This appendix considers how to handle problems of absence and gives guidance about authorised and unauthorised absence of employees from work.</p>
<p>The organisation should be aware of the rights of employees and in particular the requirements of the Equality Act 2010 when making any decisions about absences of employees who are disabled. In these cases, the employer should consider what reasonable adjustments could be made in the workplace to help the employee. This might be something as simple as supplying an appropriate chair for the use of the employee. In cases where an employee suffers from an allergy caused by something in the workplace, the employer should consider remedial action or a transfer to alternative work.</p>
<p>If the absence is because of temporary difficulties relating to dependants, the employee may be entitled to have time off under the provisions of the Employment Rights Act 1996. In cases where the employee has difficulty managing both work and home responsibilities, employees have the right to request flexible ways of working, such as job-sharing, and employers must have a good business reason for rejecting any such application.</p>
<p>Employers should investigate unexpected absences promptly and the employee should be asked for an explanation at a return-to-work interview. In order to show both the employee concerned and other employees that absence is regarded as a serious matter and may result in dismissal, it is very important that persistent absence is dealt with firmly and consistently. Records showing lateness and the duration of and explanations for all spells of absence should be kept to help monitor levels of absence or lateness. If the employer wishes to contact the employee's doctor for more information about a medical condition, he or she must notify the employee in writing that they intend to make such an application and they must secure the employee's consent in writing. Consideration should be given to introducing measures to help employees, regardless of status or seniority, who may be suffering from stress. The aim should be to identify employees affected and encourage them to seek help and treatment.</p>
`,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 15,
                    title: 'Questions 15-20',
                    instruction: 'Complete the flow-chart below.',
                    wordLimit: 'Choose NO MORE THAN TWO WORDS from the text for each answer.',
                    sectionTitle: 'Procedure for border crossing',
                    items: [
                        { prefix: 'Before setting off: To speed up the border crossing, use PAPS. For this, send your', suffix: 'details and current vehicle inspection documents.' },
                        { prefix: 'Before arriving at the border: Check that documents such as', suffix: 'and birth certificate/passport are ready for inspection.' },
                        { prefix: 'Make sure the', suffix: 'are on inside the vehicle.' },
                        { prefix: 'Check that the', suffix: 'in the vehicle can be easily seen.' },
                        { prefix: 'At the border (Primary Inspection): Non US/Canadian citizens must have a visa, and go to the', suffix: 'area to complete an I-94 card' },
                        { prefix: '(there is a small', suffix: 'for this) and to receive verbal clearance.' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 21,
                    title: 'Questions 21-27',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Absence in the workplace',
                    items: [
                        { prefix: "Employees' rights: help with issues related to disabilities, e.g. provision of a suitable", suffix: '' },
                        { prefix: 'provision of arrangements to deal with any work-related', suffix: '' },
                        { prefix: 'time off work to deal with short-term problems of', suffix: '' },
                        { prefix: 'possibility of arrangements that are', suffix: 'to help with domestic responsibilities' },
                        { prefix: 'Recommendations to employers: make it clear that absence is a possible reason for', suffix: '' },
                        { prefix: 'ask employees for consent before contacting their', suffix: '' },
                        { prefix: 'identify employees affected by', suffix: 'and provide support' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>A visit to Oymyakon, the world's coldest town</strong></h2>
<p><strong>A</strong></p>
<p>You don't need a sat nav to drive to Oymyakon. From Yakutsk, you cross the Lena River and simply follow the M56 almost all of the way before taking a left at Tomtor for the final few kilometres. The journey takes two days of hard driving; two days of glistening landscapes, frozen rivers and untouched snow; two days of endless forest and breathtaking beauty; two days to penetrate the heart of Siberia and reach the coldest inhabited place on Earth. The beauty surprised me. Siberia isn't known for its pleasant appearance. It's always billed as a place of hardship. But for hour after hour, the wintry wonderland was bathed in a crisp, clean sunshine, presenting a continuous panorama of conifer trees wreathed in silence and snow.</p>
<p><strong>B</strong></p>
<p>As we left the flat plain, the road began to twist and turn, leading us into untouched hills and on towards the Verkhoyansk Mountains. Beneath their snow-clad peaks, the slopes became steeper and the valleys deeper. Down in a valley, we stopped to look at a hot spring beside the road. It was immediately obvious against the snow - a spot shrouded in heavy mist. Trees emerged from the strange haze as ghostly silhouettes.</p>
<p><strong>C</strong></p>
<p>Despite the magical ambience of the Siberian wilderness, its reputation for hardship hit me every time I climbed out of the vehicle. Within less than a minute, the skin all over my face began to feel as if it were burning. If I wasn't wearing my two sets of gloves, I rapidly lost the feeling in my fingertips. I learned very quickly not to draw too deep a breath because the shock of the cold air in my lungs invariably set me off on an extended bout of coughing. Siberia in winter is a world barely fit for human habitation. This is a place of such searing cold that it bites through multiple layers of clothing as if they aren't there.</p>
<p><strong>D</strong></p>
<p>Oymyakon is a quiet little town - the world's coldest - of about 550 inhabitants, with its own power station, a school, two shops and a small hospital. It probably originated as a seasonal settlement where reindeer herders spent the summer on the banks of the Indigirka River.</p>
<p><strong>E</strong></p>
<p>The temperature when I arrived was -45°C - not particularly cold, I was informed. A number of factors combine to explain Oymyakon's record low temperatures. It is far from the ocean, with its moderating effect on air temperature. In addition, the town sits in a valley, below the general level of the Oymyakon Plateau, which, in turn, is enclosed on all sides by mountains up to 2,000 metres in height. As the cold air sinks, it accumulates in the valley, with little wind to disturb it. Oymyakon's average temperature in January is -50°C. Lower temperatures have been recorded in Antarctica, but there are no permanent inhabitants there.</p>
<p><strong>F</strong></p>
<p>Day-to-day life in Oymyakon presents certain challenges during the long winters. There are hardly any modern household conveniences. Water is hacked out of the nearby river as great chunks of ice and dragged home on a sledge. The giant ice cubes are stacked outdoors and carried into the house one at a time to melt when needed. The lack of running water also means no showers or baths, or indeed flushing toilets. Since 2008, the town's school has enjoyed the luxury of indoor toilets, however. It's one of the small number of civic buildings in the centre of town that are linked to the power station.</p>
<p><strong>G</strong></p>
<p>The power station provides winter heating in the form of hot water, but many houses lie outside its range and rely on their own wood-burning stove. Fuel is plentiful enough in the surrounding forest, but someone still has to venture out to cut the wood. Everybody in Oymyakon owns good boots, a hat made of animal fur and fur-lined mittens. The boots are usually made from reindeer hide, which is light but keeps your feet very warm - the individual hairs are hollow, like a thin tube with air inside. Since air is a poor conductor of heat, the skin makes excellent winter footwear, and felt soles give added insulation. Hats come in a variety of furs, including fox, raccoon, sable and mink.</p>
<p><strong>H</strong></p>
<p>Oymyakon's two shops keep a decent stock of basic foods in tins and packets, but locals also have do-it-yourself options, including hunting, trapping, ice-fishing, reindeer-breeding and horse-breeding. Indeed, being self-sufficient runs in the blood in Siberia. The Oymyakon diet relies heavily on meat for its protein, a primary source of energy in the prolonged winter. Unsurprisingly, given the weather, everyone eats heartily in Oymyakon. A typical meal I was offered consisted of a thick horse soup and huge piles of horse meatballs, all washed down with cloudberry cordial.</p>
<p><strong>I</strong></p>
<p>Spring is the best season here, I'm told. The snow melts, the river flows once more and the forest is full of wildflowers. But it's short. In the summer Oymyakon can be uncomfortably hot. Much of the forest becomes boggy, so mosquitoes are a constant presence. Oymyakon's climate certainly wouldn't suit me, but residents I spoke to said they wouldn't live anywhere else.</p>
`,
            questions: [
                {
                    type: 'paragraph-headings',
                    startQuestionNumber: 28,
                    title: 'Questions 28-36',
                    instruction: 'Choose the correct heading for each paragraph from the list of headings below.',
                    options: [
                        { value: 'i', text: 'Various sources of supplies' },
                        { value: 'ii', text: 'The effects of going outside' },
                        { value: 'iii', text: 'Oymyakon past and present' },
                        { value: 'iv', text: 'A contrast in the landscape' },
                        { value: 'v', text: 'Animals that can survive the cold' },
                        { value: 'vi', text: 'How Oymyakon is affected by its location' },
                        { value: 'vii', text: 'Keeping out the cold' },
                        { value: 'viii', text: 'Not the only challenging time of the year' },
                        { value: 'ix', text: 'Better than its reputation' },
                        { value: 'x', text: 'Very few facilities in buildings' },
                        { value: 'xi', text: 'More snow than anywhere else in the world' }
                    ],
                    items: [
                        { paragraph: 'A' },
                        { paragraph: 'B' },
                        { paragraph: 'C' },
                        { paragraph: 'D' },
                        { paragraph: 'E' },
                        { paragraph: 'F' },
                        { paragraph: 'G' },
                        { paragraph: 'H' },
                        { paragraph: 'I' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 37,
                    title: 'Questions 37-40',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Why Oymyakon gets so cold',
                    items: [
                        { prefix: 'Oymyakon is a long way from any', suffix: 'which would prevent the temperature from falling so low.' },
                        { prefix: 'The town is located in a', suffix: 'within a plateau surrounded by' },
                        { prefix: '', suffix: '.' },
                        { prefix: 'Because there is not much', suffix: 'cold air collects in the town.' }
                    ]
                }
            ]
        }
    ]
};
