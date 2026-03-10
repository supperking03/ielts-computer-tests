export const generalTest08 = {
    id: 108,
    title: 'General Reading Practice Test 08',
    correctAnswers: [
        // Q1-8: paragraph matching A-G
        'D', 'B', 'C', 'F', 'D', 'G', 'E', 'B',
        // Q9-14: TRUE/FALSE/NOT GIVEN
        'TRUE', 'FALSE', 'FALSE', 'NOT GIVEN', 'TRUE', 'TRUE',
        // Q15-19: note completion
        'stadium', 'team', 'hygiene', 'storage', 'guaranteed',
        // Q20-27: sentence completion
        'status', 'debts', 'profits', 'trading', 'internet', 'invoices', 'agent', 'penalty',
        // Q28-32: multiple choice
        'C', 'D', 'A', 'A', 'B',
        // Q33-40: TRUE/FALSE/NOT GIVEN
        'TRUE', 'NOT GIVEN', 'FALSE', 'TRUE', 'TRUE', 'FALSE', 'NOT GIVEN', 'NOT GIVEN'
    ],
    passages: [
        {
            title: 'Reading Passage 1',
            content: `
<p><em>Read the text below and answer Questions 1-8.</em></p>

<h2 style="text-align:center"><strong>The best travel wallets</strong></h2>
<p><em>Keep all your bank cards, documents, passports and ID in one of these convenient carriers, which have been selected by Becca Meier.</em></p>
<p><strong>A   Kipling Travel Doc Travel Document Holder</strong></p>
<p>This zip-around wallet comes in five different patterns and is made of nylon. It also has a space where users can put a pen, pockets for cards, an ID window and a pocket for change.</p>
<p><strong>B   Lifeventure Mini Travel Document Wallet</strong></p>
<p>This is a waterproof wallet, which uses anti-RFID (radio frequency identification) material so your financial details will be safe. It is black with smart sky-blue finishing touches and has a small internal compartment, a smartphone pocket and an external pocket. It can fit two passports.</p>
<p><strong>C   Cath Kidston Breton Stripe</strong></p>
<p>A wallet so slim it could easily pass for a small notebook. The inside compartment labels identifying each separate section all have silver lettering on them. The wallet has a special coating which makes it easy to wipe anything like sand off.</p>
<p><strong>D   Ted Baker Voyager’s Travel Wallet</strong></p>
<p>This wallet comes in smooth black leather, and is no bigger than a passport, but roomy enough for any insurance documents or flight tickets. A small navy-blue pen is supplied inside.</p>
<p><strong>E   Radley Abbey Travel Wallet</strong></p>
<p>This plain travel wallet opens up to reveal pockets in various colours labelled ‘cards’, ‘passport’ and ‘tickets’, as well as others left blank for extras. It comes in a handy drawstring bag.</p>
<p><strong>F   Gotravel Organiser</strong></p>
<p>The black wallet features seven slip-in card compartments, two small interior zip pockets and a load of other slip-in compartments. It can fit at least four passports.</p>
<p><strong>G   Gotravel Glo Travel Wallet</strong></p>
<p>This is a simple, very reasonably priced wallet. It is made of PVC plastic and will suit those who like a wallet that is easy to spot. It comes in a range of bright colours with a white holiday-related design on the front. It has five compartments that can fit a passport with other cards/tickets.</p>

<hr/>
<p><em>Read the text below and answer Questions 9-14.</em></p>

<h2 style="text-align:center"><strong>UK rail services – how do I claim for my delayed train?</strong></h2>
<p>Generally, if you have been delayed on a train journey, you may be able to claim compensation, but train companies all have different rules, so it can be confusing to work out what you’re entitled to. The type of delay you can claim for depends on whether the train company runs a Delay Repay scheme or a less generous, older-style scheme.</p>
<p>Delay Repay is a train operator scheme to compensate passengers when trains are late, and the train company will pay out even if it was not responsible for the delay. The scheme varies between companies, but up to 2016 most paid 50 percent of the single ticket cost for 30 minutes’ delay and 100 percent for an hour. On the London Underground, you get a full refund for 15-minute delays.</p>
<p>Companies that do not use Delay Repay and still use the older scheme will not usually pay compensation if the problem is considered to be out of their control. But it is still worth asking them for compensation, as some may pay out. You are unlikely to get compensation for a delay if any of the following occur:</p>
<ul>
  <li>Accidents involving people getting onto the line illegally</li>
  <li>Gas leaks or fires in buildings next to the line which were not caused by a train company</li>
  <li>Line closures at the request of the emergency services</li>
  <li>Exceptionally severe weather conditions</li>
  <li>Strike action</li>
</ul>
<p>National Rail Conditions of Travel state that you are entitled to compensation in the same form that you paid for the ticket. Some train companies are still paying using rail vouchers, which they are allowed to do if you do not ask for a cash refund.</p>
<p>Since 2016, rail passengers have acquired further rights for compensation through the Consumer Rights Act. This means that passengers could now be eligible for compensation due to: a severely overcrowded train with too few carriages available; a consistently late running service; and a service that is delayed for less than the time limit that applied under existing compensation schemes.</p>
<p>However, in order to exercise their rights beyond the existing compensation schemes, for instance Delay Repay, and where the train operating company refuses to compensate despite letters threatening court action, passengers may need to bring their claims to a court of law.</p>
`,
            questions: [
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 1,
                    title: 'Questions 1-8',
                    instruction: 'Look at the seven reviews of travel wallets, A-G. For which travel wallet are the following statements true?',
                    paragraphRange: 'A-G',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                    items: [
                        { description: 'This wallet will suit people who prefer natural materials.' },
                        { description: 'Users of this wallet do not need to worry about taking it out in the rain.' },
                        { description: 'Parts of the inside of this wallet have categories printed on them in one colour.' },
                        { description: 'This wallet would suit someone who needs to keep several passports together.' },
                        { description: 'Something is provided for writing.' },
                        { description: 'This will suit people who want to be able to find their document wallet easily in their luggage.' },
                        { description: 'Something to keep this wallet in is provided.' },
                        { description: 'This wallet has been specially made to prevent people detecting the numbers on any bank cards, etc. inside it.' }
                    ]
                },
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 9,
                    title: 'Questions 9-14',
                    instruction: 'Do the following statements agree with the information given in the text?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'The system for claiming compensation varies from one company to another.' },
                        { statement: 'Under Delay Repay, a train company will only provide compensation if it caused the delay.' },
                        { statement: 'Under Delay Repay, underground and other train companies give exactly the same amounts of money in compensation.' },
                        { statement: 'An increasing number of train companies are willing to pay compensation for problems they are not responsible for.' },
                        { statement: 'It is doubtful whether companies using the older scheme will provide compensation if a delay is caused by a strike.' },
                        { statement: 'Passengers may receive compensation in the form of a train voucher if they forget to request cash.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 2',
            content: `
<p><em>Read the text below and answer Questions 15-19.</em></p>

<h2 style="text-align:center"><strong>Vacancy for food preparation assistant</strong></h2>
<p>Durrant House plc runs restaurants and cafés as concessions in airports, train stations and other busy environments around the country. We currently have a vacancy for a food preparation assistant in our restaurant at Locksley Stadium, serving football fans and concert-goers before, during and after events. In addition, we cater for private parties several times a week. If you have relevant experience and a passion for preparing food to a very high standard, we’ll be delighted to hear from you. You must be able to multitask and to work in a fast-paced environment. It goes without saying that working as an effective and supportive member of a team is essential, so you need to be happy in this type of work.</p>
<p>The role includes the usual responsibilities, such as treating hygiene as your number one priority, cleaning work areas, and doing whatever is required to provide food of excellent quality. The person appointed will carry out a range of tasks, including ensuring all raw food items are fresh, preparing vegetables to be cooked, making sure frozen food products are used in rotation, and throwing away any food products that are near or have passed their expiry date. He or she will be required to familiarise themselves with the storage system, so as to put food product supplies in the proper place and retrieve them in the right order. In particular, we are looking for someone with skill at baking, to play a large role in the production of pies and cakes.</p>
<p>Given the nature of the venue, working hours vary from week to week, depending on the events being held, and will often involve starting early in the morning or finishing late at night. You can expect to work an average of around 18 hours a week, although this cannot be guaranteed. You will also have the opportunity to work in another of our sites for one or two days a week, or for longer periods, and will be paid for ten days of holidays a year. Training will be provided in food safety.</p>
<p>If this sounds like the job for you, please contact Jo Simmons at simmons.j@durrant-house.com.</p>

<hr/>
<p><em>Read the text below and answer Questions 20-27.</em></p>

<h2 style="text-align:center"><strong>Setting up a business partnership in the UK</strong></h2>
<p>Two or more people can go into business together by setting up either a limited company or a partnership. A partnership is the easier way to get started, and simply links two or more people together in a simple business structure. Unlike a limited company, a partnership doesn’t have a separate legal status. The partners are usually self-employed individuals, although a limited company counts as a ‘legal person’ and can also be a partner.</p>
<p>In a partnership, you and your partner or partners personally share responsibility for your business. This means, among other things, that if your business cannot afford to pay its debts, you must pay them yourselves. Again, this is not the case with a limited company. Partners share the business’s profits, and each partner pays tax on their share.</p>
<p>When you set up a business partnership you need to choose a name. You can trade under your own names, for example, ‘Smith and Jones’, or you can choose another name for your business. You don’t need to register your name. However, you should register your name as a trademark if you want to stop people from trading under your business name.</p>
<p>Business partnership names must not include ‘limited’, ‘Ltd’, ‘limited liability partnership’, ‘LLP’, ‘public limited company’ or ‘plc’, be offensive, or be the same as an existing trademark. Your name also can’t suggest a connection with government or local authorities, unless you get permission. There is no central database of partnership names in the UK, so to avoid using the same name as another business, it is advisable to search on the internet for the name you are considering.</p>
<p>You must include all the partners’ names and the business name (if you have one) on official paperwork, for example invoices.</p>
<p>You must choose a ‘nominated partner’ who is responsible for registering your partnership with HM Revenue and Customs (HMRC), the government department responsible for the collection of taxes. This person is responsible for managing the partnership’s tax returns and keeping business records. Alternatively, you can appoint an agent to deal with HMRC on your behalf.</p>
<p>All partners need to register with HMRC separately and send their own tax returns as individuals.</p>
<p>You must register by 5 October in your business’s second tax year, or you could be charged a penalty.</p>
<p>You must also register for VAT if your VAT taxable turnover is more than £85,000. You can choose to register if it’s below this, for example to reclaim VAT on business supplies.</p>
`,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 15,
                    title: 'Questions 15-19',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Vacancy for food preparation assistant',
                    items: [
                        { prefix: 'Location of restaurant: in a', suffix: '' },
                        { prefix: 'Requirements: must enjoy working in a', suffix: '' },
                        { prefix: 'Responsibilities include: maintaining high standards of', suffix: 'and quality' },
                        { prefix: 'learning the procedure for the', suffix: 'of food' },
                        { prefix: 'Conditions: working hours are not', suffix: '' }
                    ]
                },
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 20,
                    title: 'Questions 20-27',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    items: [
                        { prefix: 'A partnership is different from a limited company in not having its own', suffix: 'as a legal body.' },
                        { prefix: 'The partners are personally responsible for paying all the partnership’s', suffix: '.' },
                        { prefix: 'The partnership’s', suffix: 'are divided between the partners.' },
                        { prefix: 'Registering the partnership’s name prevents others from using that name when', suffix: '.' },
                        { prefix: 'The best way to find out if a name is already in use is to use the', suffix: '.' },
                        { prefix: 'The names of the partners and the partnership must appear on', suffix: 'and other documents.' },
                        { prefix: 'You must have a nominated partner, or someone to act as your', suffix: ', for all contact with HMRC.' },
                        { prefix: 'You will have to pay a', suffix: 'if you miss the deadline for registering the partnership.' }
                    ]
                }
            ]
        },
        {
            title: 'Reading Passage 3',
            content: `
<p><em>Read the text below and answer Questions 28-40.</em></p>

<h2 style="text-align:center"><strong>THE ROLE OF THE SWISS POSTBUS</strong></h2>
<p><em>Switzerland’s postbuses are much more than just a means of public transportation.</em></p>
<p>The Swiss PostBus Limited is the largest of the country’s 78 coach companies. Administered by the Motor Services Department of the Post Office, it carries over 120 million passengers each year and is carefully integrated with other public transport services: trains, boats and mountain cableways. The Swiss transportation system resembles a tree, with the larger branches representing federal and private railways, the smaller branches being the coaches, and the twigs being the urban transit operators running trams, city buses, boats, chairlifts and so on. But the trunk that holds the tree together is the vast postbus network, without which the whole network would not function.</p>
<p>There isn’t an inhabited place in Switzerland that cannot be reached by some sort of public transport. Federal law and the Swiss Constitution stipulate that every village with a population greater than 40 is entitled to regular bus services. The frequency of these services is directly related to population density. Timetables are put together four years in advance, and seldom change. If a new route is to be introduced, the population of the area affected is invited to vote in a referendum.</p>
<p>At times, postbuses are the main – sometimes the only – links between settlements. These coaches, often with a trailer in tow to increase their capacity, are a common sight in high-altitude regions, and their signature sound – part of Rossini’s <em>William Tell Overture</em>, played by the drivers on three-tone post horns with electrical compressors at every road turn – is one of the most familiar Swiss sounds.</p>
<p>The three-tone horns can still be used to ‘talk’ to post offices (and each other) from a distance. By altering the combination of the tones, a driver can announce ‘departure of post’, ‘arrival of post’, ‘arrival of special post’, and so on – so much more romantic and often more reliable than radio or mobile phones. This musical ‘language’ started in the mid-nineteenth century, when the coach drivers could also blow their horns a certain number of times on approaching the station to indicate the number of horses needing to be fed, giving the stationmaster time to prepare the fodder.</p>
<p>The postbus history goes back to 1849, when the Swiss postal service was made a monopoly. The role of today’s modern yellow buses was, back then, played by horse-drawn carriages (or in winter by sleighs, in order to travel on snow), which were the same colour. By 1914, eight years after the first motor coaches were introduced, there were still 2,500 horses, 2,231 coaches (or carriages) and 1,059 sleighs in service.</p>
<p>After the First World War, Swiss Post bought a fleet of decommissioned military trucks which were converted into postbuses, but it was not until 1961 that the last horse-drawn coach was replaced with a motorised version.</p>
<p>Today, the Swiss Post Office boasts one of the world’s most advanced coach fleets, including fuel-cell models and the world’s first driverless bus. This was launched in 2015 in the town of Sion, the capital of the canton of Valais, one of the 26 cantons, or administrative regions, that make up the country.</p>
<p>Postbuses often go to places that other means of transport cannot reach. Most of the drivers therefore see themselves as educators and tour guides. Although it’s not in their job description, they’re likely to point out the sights – waterfalls, gorges, and so on – and are always ready to pull over for a photo opportunity.</p>
<p>Switzerland’s longest postbus journey, and one of the highest, crosses four mountain passes – an eight-hour trip undertaken by a single postbus. The route goes through several cantons; two languages (German and Italian); all four seasons – from burning sunshine to showers and heavy snowfalls; and countless places of interest. One of the passes, the Gotthard, is often described as ‘the People’s Road’, probably because it connects the German-speaking canton of Uri with Italian-speaking Ticino. Like Switzerland itself, postbuses ‘speak’ all four state languages: German, French, Italian and Romansh – and, by law, their automated intercom announcements are given in the language of whichever canton the bus is currently passing through.</p>
<p>Irrespective of their previous driving experience, drivers undergo lots of training. During the first year, they have to drive postbuses under the supervision of a more experienced driver. Only after two years of safe driving in the valleys can they be pronounced ready for a mountain bus.</p>
<p>Some routes are not at all busy, with the bus often carrying just two or three passengers at a time. But for most people living in small mountain villages, the postbus is of the utmost importance. It not only carries the villagers to town and back, it takes village children to and from school, delivers mail, transports milk from the village farms down to the valley, collects rubbish from the village (Swiss laws do not allow dumping anywhere in the mountains), and brings building materials to households. It takes elderly villagers to shops and carries their shopping up the hill to their homes. More a friend than just a means of transportation, for the dwellers of mountain villages the postbus is an essential part of life.</p>
`,
            questions: [
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 28,
                    title: 'Questions 28-32',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: 'When comparing the Swiss transportation system to a tree, the writer emphasises',
                            options: [
                                { value: 'A', text: 'the size of the postbus system.' },
                                { value: 'B', text: 'how competitive the postbus system is.' },
                                { value: 'C', text: 'how important the postbus system is.' },
                                { value: 'D', text: 'the threat to the postbus system.' }
                            ]
                        },
                        {
                            question: 'What is said about bus services in the second paragraph?',
                            options: [
                                { value: 'A', text: 'Villages have the chance to request more buses every four years.' },
                                { value: 'B', text: 'New routes are often introduced to reflect an increase in population.' },
                                { value: 'C', text: 'Bus timetables tend to change every four years.' },
                                { value: 'D', text: 'The number of buses that call at a village depends on how many people live there.' }
                            ]
                        },
                        {
                            question: 'According to the fourth paragraph, what were three-tone horns first used to indicate?',
                            options: [
                                { value: 'A', text: 'how many coach horses required food' },
                                { value: 'B', text: 'how long the bus would stay at the station' },
                                { value: 'C', text: 'how many passengers wanted a meal' },
                                { value: 'D', text: 'how soon the bus would arrive at the station' }
                            ]
                        },
                        {
                            question: 'What point does the writer make about the postbus drivers?',
                            options: [
                                { value: 'A', text: 'Many choose to give passengers information about the surroundings.' },
                                { value: 'B', text: 'Most are proud of driving buses to places without other forms of transport.' },
                                { value: 'C', text: 'They are required to inform passengers about the sights seen from the bus.' },
                                { value: 'D', text: 'They are not allowed to stop for passengers to take photographs.' }
                            ]
                        },
                        {
                            question: 'What is said about the buses’ automated announcements?',
                            options: [
                                { value: 'A', text: 'They are given in the language of the bus’s starting point.' },
                                { value: 'B', text: 'The language they are given in depends on where the bus is at the time.' },
                                { value: 'C', text: 'They are always given in all the four languages of Switzerland.' },
                                { value: 'D', text: 'The language they are given in depends on the bus’s destination.' }
                            ]
                        }
                    ]
                },
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 33,
                    title: 'Questions 33-40',
                    instruction: 'Do the following statements agree with the information given in the text?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'Some postbuses after the First World War were originally army vehicles.' },
                        { statement: 'The number of driverless buses has increased steadily since 2015.' },
                        { statement: 'On the longest postbus route in Switzerland, passengers have to change buses.' },
                        { statement: 'The weather on the longest postbus route is likely to include extreme weather conditions.' },
                        { statement: 'There is a widely used nickname for part of the longest route used by postbuses.' },
                        { statement: 'Bus drivers’ training can be shortened if they have driven buses before joining PostBus.' },
                        { statement: 'In some villages most passengers are school children.' },
                        { statement: 'Buses carry only rubbish that can be recycled.' }
                    ]
                }
            ]
        }
    ]
};
