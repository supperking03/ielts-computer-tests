export const generalTest01 = {
    id: 101,
    title: 'General Reading Practice Test 01',
    correctAnswers: [
        // Q1-6: TRUE/FALSE/NOT GIVEN
        "NOT GIVEN", "NOT GIVEN", "TRUE", "TRUE", "FALSE", "NOT GIVEN",
        // Q7-14: paragraph-matching A-E (rice cookers)
        "D", "E", "B", "A", "D", "B", "E", "C",
        // Q15-22: note completion (safety on roofs)
        "three metres", "residential building sites", "eliminate", "temporary work platforms", "safety nets", "maintenance work", "selection", "inspection",
        // Q23-27: sentence completion (maternity allowance)
        "140.98", "unemployed", "payslip", "doctor's letter", "circumstances",
        // Q28-31: multiple choice
        "D", "C", "C", "D",
        // Q32-36: paragraph matching A-G
        "C", "F", "B", "A", "G",
        // Q37-40: summary completion
        "gravel", "nuggets", "sieve", "mercury"
    ],
    passages: [
        {
            title: "Reading Passage 1",
            content: `
<p><em>Read the text below and answer Questions 1–6.</em></p>

<h2 style="text-align:center"><strong>Consumer advice</strong></h2>
<p><em>What to do if something you ordered hasn't arrived</em></p>
<p>If something you've ordered hasn't arrived, you should contact the seller to find out where it is. It's their legal responsibility to make sure the item is delivered to you. They should chase the delivery company and let you know what's happened to your item. If your item wasn't delivered to the location you agreed (e.g. if it was left with your neighbour without your consent), it's the seller's legal responsibility to sort out the issue.</p>
<p>If the item doesn't turn up, you're legally entitled to a replacement or refund. You can ask for your money back if you don't receive the item within 30 days of buying it. If the seller refuses, you should put your complaint in writing. If that doesn't work, you could contact their trade association — look on their website for this information, or contact them to ask.</p>
<p>You might also be able to get your money back through your bank or payment provider — this depends on how you paid.</p>
<ul>
  <li>If you paid by debit card, contact your bank and say you want to use the 'chargeback' scheme. If the bank agrees, they can ask the seller's bank to refund the money to your account. Many bank staff don't know about the scheme, so you might need to speak to a supervisor or manager. You should do this within 120 days of when you paid.</li>
  <li>If you paid by credit card and the item cost less than £100, you should contact your credit card company and say you want to use the 'chargeback' scheme. There's no time limit for when you need to do this. If the item cost more than £100 but less than £30,000, contact your credit card company and say that you want to make a 'section 75' claim.</li>
  <li>If you paid using PayPal, use PayPal's online resolution centre to report your dispute. You must do this within 180 days of paying.</li>
</ul>

<hr/>
<p><em>Read the text below and answer Questions 7–14.</em></p>

<h2 style="text-align:center"><strong>Rice cookers</strong></h2>
<p><em>What's the best rice cooker for you?</em></p>
<p><strong>A &nbsp;&nbsp; Ezy Rice Cooker</strong></p>
<p>This has a 1.8 litre pot and a stainless steel exterior. It has a separate glass lid, and the handle on the lid stays cool. It produces perfectly cooked white rice, but tends to spit when cooking brown rice. There are slight dirt traps around the rim of the lid, and neither the pot nor the lid is dishwasher safe.</p>
<p><strong>B &nbsp;&nbsp; Family Rice Cooker</strong></p>
<p>This has a plastic exterior and a flip-top lid. The lid locks when closed and becomes a secure handle to carry the cooker. The aluminium interior pot is quite difficult to clean, and it can't be put in a dishwasher. It's programmed to adjust the temperature once the rice is done so that it stops cooking but doesn't get cold.</p>
<p><strong>C &nbsp;&nbsp; Mini Rice Cooker</strong></p>
<p>This has a flip-top lid and a 0.3 litre capacity. The interior pot is made of non-stick aluminium and is dishwasher safe. This rice cooker is ideal when cooking for one. However it does not have any handles at the side, and water sometimes overflows when cooking brown rice.</p>
<p><strong>D &nbsp;&nbsp; VPN Rice Cooker</strong></p>
<p>This has a painted steel exterior with a handle on each side and a steel inner pot. It has a lift-off lid and comes with a booklet including a range of ideas for rice dishes. However, the keep-warm setting must be manually selected and the handles are tricky to grip.</p>
<p><strong>E &nbsp;&nbsp; S16 Rice Cooker</strong></p>
<p>This is simple to use, not spitting or boiling over even when cooking brown rice. The exterior stays cool when in use, so there's no danger of burning your hand. However, the lack of handles is a nuisance, and a recipe book would have been useful.</p>
`,
            questions: [
                {
                    type: 'true-false-not-given',
                    startQuestionNumber: 1,
                    title: 'Questions 1–6',
                    instruction: 'Do the following statements agree with the information given in the text?',
                    options: [
                        { value: 'TRUE', description: 'if the statement agrees with the information' },
                        { value: 'FALSE', description: 'if the statement contradicts the information' },
                        { value: 'NOT GIVEN', description: 'if there is no information on this' }
                    ],
                    items: [
                        { statement: 'You will receive a card telling you if an item has been left with a neighbour.' },
                        { statement: 'It may be quicker to get a refund than a replacement for a non-delivered item.' },
                        { statement: 'You are entitled to a refund if the item fails to arrive by a certain time.' },
                        { statement: "There is a time limit when using the 'chargeback' scheme for a debit card payment." },
                        { statement: "You can use the 'chargeback' scheme for a credit card payment of more than £100." },
                        { statement: "PayPal's online resolution centre has a good reputation for efficiency." }
                    ]
                },
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 7,
                    title: 'Questions 7–14',
                    instruction: 'Look at the five reviews of rice cookers, A–E. For which rice cooker are the following statements true?',
                    paragraphRange: 'A–E',
                    note: 'NB  You may use any letter more than once.',
                    options: ['A', 'B', 'C', 'D', 'E'],
                    items: [
                        { description: 'The handles at the side are hard to use.' },
                        { description: 'It cooks brown rice without making a mess.' },
                        { description: 'It automatically switches setting to keep the rice warm when cooked.' },
                        { description: "It's difficult to get the removable top really clean." },
                        { description: 'A selection of recipes is provided with the cooker.' },
                        { description: 'It has a handle at the top for carrying the cooker safely.' },
                        { description: "The outside of the cooker doesn't get too hot." },
                        { description: 'You can put the pot in the dishwasher.' }
                    ]
                }
            ]
        },
        {
            title: "Reading Passage 2",
            content: `
<p><em>Read the text below and answer Questions 15–22.</em></p>

<h2 style="text-align:center"><strong>Safety when working on roofs</strong></h2>
<p>A fall from height is the most serious hazard associated with roof work. Preventing falls from roofs is a priority for <em>WorkSafe New Zealand</em>. Investigation by <em>WorkSafe</em> into falls that occur while working at height show that more than 50 percent of falls are from under three metres, and most of these are from ladders and roofs. The cost of these falls is estimated to be $24 million a year — to say nothing of the human costs that result from these falls. More injuries happen on residential building sites than any other workplace in the construction sector.</p>
<p>In order to prevent such injuries, a hazard assessment should be carried out for all work on roofs to assess potential dangers. It is essential that the hazards are identified before the work starts, and that the necessary equipment, appropriate precautions and systems of work are provided and implemented. Hazard identification should be repeated periodically or when there is a change in conditions, for example, the weather or numbers of staff onsite.</p>
<p>The first thing to be considered is whether it is possible to eliminate this hazard completely, so that workers are not exposed to the danger of falling. This can sometimes be done at the design, construction planning, and tendering stage. If the possibility of a fall cannot be eliminated, some form of edge protection should be used to prevent workers from falling. It may be possible to use the existing scaffolding as edge protection. If this is not practicable, then temporary work platforms should be used. In cases where such protection is not possible, then steps should be taken to minimise the likelihood of any harm resulting. This means considering the use of safety nets and other similar systems to make it less likely that injury will be caused if a fall does occur.</p>
<p>Ladders should only be employed for short-duration maintenance work such as touching up paint. People using ladders should be trained and instructed in the selection and safe use of ladders. There should be inspection of all ladders on a regular basis to ensure they are safe to use.</p>

<hr/>
<p><em>Read the text below and answer Questions 23–27.</em></p>

<h2 style="text-align:center"><strong>Maternity Allowance for working women</strong></h2>
<p>You can claim Maternity Allowance once you've been pregnant for 26 weeks. Payments start 11 weeks before the date on which your baby is due.</p>
<p>The amount you can get depends on your eligibility. You could get either:</p>
<ul>
  <li>£140.98 a week or 90% of your average weekly earnings (whichever is less) for 39 weeks</li>
  <li>£27 a week for 14 weeks</li>
</ul>
<p><strong>Maternity Allowance for 39 weeks</strong></p>
<p>You might get Maternity Allowance for 39 weeks if one of the following applies:</p>
<ul>
  <li>you're employed</li>
  <li>you're self-employed and pay Class 2 National Insurance (including voluntary National Insurance)</li>
  <li>you've recently stopped working</li>
</ul>
<p>You may still qualify even if you've recently stopped working. It doesn't matter if you had different jobs, or periods when you were unemployed.</p>
<p><strong>Maternity Allowance for 14 weeks</strong></p>
<p>You might get Maternity Allowance for 14 weeks if for at least 26 weeks in the 66 weeks before your baby is due:</p>
<ul>
  <li>you were married or in a civil partnership</li>
  <li>you were not employed or self-employed</li>
  <li>you took part in the business of your self-employed spouse or civil partner</li>
</ul>
<p><strong>How to claim</strong></p>
<p>You'll need an MA1 claim form, available online. You can print this and fill it in, or fill it in online. You also need to provide a payslip or a Certificate of Small Earnings Exemption as proof of your income, and proof of the baby's due date, such as a doctor's letter.</p>
<p>You should get a decision on your claim within 24 working days.</p>
<p>You should report any changes to your circumstances, for example, if you go back to work, to your local Jobcentre Plus as they can affect how much allowance you get.</p>
`,
            questions: [
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 15,
                    title: 'Questions 15–22',
                    instruction: 'Complete the notes below.',
                    wordLimit: 'Choose NO MORE THAN THREE WORDS AND/OR A NUMBER from the text for each answer.',
                    sectionTitle: 'Safety when working on roofs',
                    items: [
                        {
                            prefix: 'Investigations show that — over half of falls are from less than',
                            suffix: 'in height'
                        },
                        {
                            prefix: 'the majority of falls occur on',
                            suffix: ''
                        },
                        {
                            prefix: 'Controls —',
                            suffix: 'the hazard at the planning stage before the work begins if possible'
                        },
                        {
                            prefix: 'prevent a fall by using edge protection, e.g. scaffolding or',
                            suffix: ''
                        },
                        {
                            prefix: 'reduce the likelihood of injury, e.g. by using',
                            suffix: ''
                        },
                        {
                            prefix: 'Ladders — these should only be used for',
                            suffix: 'which does not take a long time'
                        },
                        {
                            prefix: 'training should be provided in their',
                            suffix: 'and use'
                        },
                        {
                            prefix: 'regular',
                            suffix: 'of ladders is required'
                        }
                    ]
                },
                {
                    type: 'sentence-completion',
                    startQuestionNumber: 23,
                    title: 'Questions 23–27',
                    instruction: 'Complete the sentences below.',
                    wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the text for each answer.',
                    items: [
                        {
                            prefix: 'The maximum amount of money a woman can get each week is £',
                            suffix: '.'
                        },
                        {
                            prefix: 'Being',
                            suffix: 'for a time does not necessarily mean that a woman will not be eligible for Maternity Allowance.'
                        },
                        {
                            prefix: 'In order to claim, a woman must send a',
                            suffix: 'or a Small Earnings Exemption Certificate as evidence of her income.'
                        },
                        {
                            prefix: 'In order to claim, a woman may need to provide a',
                            suffix: 'as evidence of the due date.'
                        },
                        {
                            prefix: "Payment may be affected by differences in someone's",
                            suffix: ', such as a return to work, and the local Jobcentre Plus must be informed.'
                        }
                    ]
                }
            ]
        },
        {
            title: "Reading Passage 3",
            content: `
<p><em>Read the text below and answer Questions 28–40.</em></p>

<h2 style="text-align:center"><strong>The California Gold Rush of 1849</strong></h2>
<p><em>The discovery of gold in the Sacramento Valley sparked the Gold Rush, arguably one of the most significant events to shape American history in the 19th century.</em></p>

<p><strong>A</strong></p>
<p>On January 24, 1848, James Wilson Marshall, a carpenter, found small flakes of gold in the American River near Coloma, California. At the time, Marshall was working to build a water-powered sawmill for businessman John Sutter. As it happens, just days after Marshall's discovery, the Treaty of Guadalupe Hidalgo was signed, ending the Mexican-American War and transferring California, with its mineral deposits, into the ownership of the United States. At the time, the population of the territory consisted of 6,500 Californios (people of Spanish or Mexican descent); 700 foreigners (primarily Americans); and 150,000 Native Americans.</p>

<p><strong>B</strong></p>
<p>Though Marshall and Sutter tried to keep news of the discovery quiet, word got out, and by mid-March 1848 at least one newspaper was reporting that large quantities of gold were being found. Though the initial reaction in San Francisco was disbelief, storekeeper Sam Brannan set off a frenzy when he paraded through town displaying a small bottle containing gold from Sutter's Creek. By mid-June, some three-quarters of the male population of San Francisco had left town for the gold mines, and the number of miners in the area reached 4,000 by August.</p>

<p><strong>C</strong></p>
<p>As news spread of the fortunes being made in California, the first migrants to arrive were those from lands accessible by boat, such as Oregon, the Sandwich Islands (now Hawaii), Mexico, Chile, Peru and even China. Only later would the news reach the East Coast, where press reports were initially skeptical. Throughout 1849, thousands of people around the United States (mostly men) borrowed money, mortgaged their property or spent their life savings to make the arduous journey to California. In pursuit of the kind of wealth they had never dreamed of, they left their families and local areas; in turn, their wives had no option but to shoulder different responsibilities such as running farms or businesses, and many made a real success of them.</p>
<p>By the end of the year, the non-native population of California was estimated at 100,000 (as compared with 20,000 at the end of 1848 and around 800 in March 1848). To accommodate the needs of the '49ers, as the gold miners were known, towns had sprung up all over the region, complete with shops and other businesses seeking to make their own Gold Rush fortune. The overcrowded chaos of the mining camps and towns grew ever more lawless. San Francisco, for its part, developed a bustling economy and became the central metropolis of the new frontier.</p>

<p><strong>D</strong></p>
<p>How did all these would-be miners search for gold? Panning was the oldest way. The basic procedure was to place some gold-bearing material, such as river gravel, into a shallow pan, add some water, and then carefully swirl the mixture around so the water and light material spilled over the side. If all went well, the heavier gold nuggets or gold dust would settle to the bottom of the pan. Gold panning was slow even for the most skillful miner. On a good day, one miner could wash about 50 pans in the usual 12-hour workday.</p>

<p><strong>E</strong></p>
<p>Another way was to use what was called a 'rocker'. Isaac Humphrey is said to have introduced it to the California gold fields. It was simply a rectangular wooden box, set at a downward angle and mounted on a rocking mechanism. The dirt and rock was dumped into the top, followed by a bucket of water. The box was rocked by hand to agitate the mixture. The big rocks were caught in a sieve at the top, the waste exited the lower end with the water, and the heavy gold fell to the bottom of the box.</p>
<p>The rocker had advantages and disadvantages. The advantages were that it was easily transportable; it did not require a constant source of water; and, most importantly, a miner could process more dirt and rock than with a pan. The primary disadvantage was that the rocker had difficulty in trapping the smallest particles of gold, commonly known as 'flour'. Some miners added small amounts of mercury to the bottom of the rocker. Due to its chemical composition, it had a facility to trap fine gold. Periodically, the miners would remove and heat it. As it vaporized, it would leave gold behind.</p>

<p><strong>F</strong></p>
<p>After 1850, the surface gold in California had largely disappeared, even as miners continued to reach the gold fields. Mining had always been difficult and dangerous labor, and striking it rich required good luck as much as skill and hard work. Moreover, the average daily pay for an independent miner had by then dropped sharply from what it had been in 1848. As gold became more and more difficult to reach, the growing industrialization of mining drove more and more miners from independence into wage labor. The new technique of hydraulic mining, developed in 1853, brought enormous profits, but destroyed much of the region's landscape.</p>

<p><strong>G</strong></p>
<p>Though gold mining continued throughout the 1850s, it had reached its peak by 1852, when gold worth some $81 million was pulled from the ground. After that year, the total take declined gradually, leveling off to around $45 million per year by 1857. Settlement in California continued, however, and by the end of the decade the state's population was 380,000.</p>
`,
            questions: [
                {
                    type: 'multiple-choice',
                    startQuestionNumber: 28,
                    title: 'Questions 28–31',
                    instruction: 'Choose the correct letter, A, B, C or D.',
                    items: [
                        {
                            question: "The writer suggests that Marshall's discovery came at a good time for the US because",
                            options: [
                                { value: 'A', text: 'the Mexican-American War was ending so there were men needing work.' },
                                { value: 'B', text: 'his expertise in water power would be useful in gold mining.' },
                                { value: 'C', text: 'the population of California had already begun to increase rapidly.' },
                                { value: 'D', text: 'the region was about to come under the control of the US.' }
                            ]
                        },
                        {
                            question: 'What was the reaction in 1848 to the news of the discovery of gold?',
                            options: [
                                { value: 'A', text: 'The press played a large part in convincing the public of the riches available.' },
                                { value: 'B', text: 'Many men in San Francisco left immediately to check it out for themselves.' },
                                { value: 'C', text: 'People needed to see physical evidence before they took it seriously.' },
                                { value: 'D', text: 'Men in other mines in the US were among the first to respond to it.' }
                            ]
                        },
                        {
                            question: 'What was the result of thousands of people moving to California?',
                            options: [
                                { value: 'A', text: 'San Francisco could not cope with the influx of people from around the world.' },
                                { value: 'B', text: 'Many miners got more money than they could ever have earned at home.' },
                                { value: 'C', text: 'Some of those who stayed behind had to take on unexpected roles.' },
                                { value: 'D', text: 'New towns were established which became good places to live.' }
                            ]
                        },
                        {
                            question: 'What does the writer say about using pans and rockers to find gold?',
                            options: [
                                { value: 'A', text: 'Both methods required the addition of mercury.' },
                                { value: 'B', text: 'A rocker needed more than one miner to operate it.' },
                                { value: 'C', text: 'Pans were the best system for novice miners to use.' },
                                { value: 'D', text: 'Miners had to find a way round a design fault in one system.' }
                            ]
                        }
                    ]
                },
                {
                    type: 'paragraph-matching',
                    startQuestionNumber: 32,
                    title: 'Questions 32–36',
                    instruction: 'The text has seven sections, A–G. Which section contains the following information?',
                    paragraphRange: 'A–G',
                    options: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
                    items: [
                        { description: 'a reference to ways of making money in California other than mining for gold' },
                        { description: 'a suggestion that the gold that was found did not often compensate for the hard work undertaken' },
                        { description: 'a mention of an individual who convinced many of the existence of gold in California' },
                        { description: 'details of the pre-Gold Rush population of California' },
                        { description: 'a contrast between shrinking revenue and increasing population' }
                    ]
                },
                {
                    type: 'fill-in-blanks',
                    startQuestionNumber: 37,
                    title: 'Questions 37–40',
                    instruction: 'Complete the summary below.',
                    wordLimit: 'Choose ONE WORD ONLY from the text for each answer.',
                    sectionTitle: 'Basic techniques for extracting gold',
                    items: [
                        {
                            prefix: 'The most basic method used by many miners began with digging some',
                            suffix: 'out of a river and hoping it might contain gold. Small amounts were put in a pan with water. The pan was spun round, causing the liquid and less heavy contents of the pan to come out.'
                        },
                        {
                            prefix: 'Gold dust, which weighed more, remained in the pan or, if the miners were very lucky, there might even be some',
                            suffix: 'too. It was, however, a very laborious method.'
                        },
                        {
                            prefix: 'The rocker was also used. A miner would put some earth and rock into the higher end, together with some water. He would then shake the rocker. Larger stones stuck in the',
                            suffix: ', while gold dropped to the bottom.'
                        },
                        {
                            prefix: 'Unfortunately, the rocker was not designed to catch what was called flour. However, a process was introduced involving',
                            suffix: 'to ensure no gold was washed out in the water.'
                        }
                    ]
                }
            ]
        }
    ]
};
