export const newTests = [
    {
        id: 1,
        explanation: "https://drive.google.com/file/d/1uTgGk6K3tP8pmojyWCQA0K_BOA3AgR9w/view?usp=sharing",
        title: 'Reading CAM 18 Test 1',
        image: 'https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam-18-test-1.jpg',
        correctAnswers: [
            // Q1-3: fill-in-blanks
            "lettuces", "1000 kg", "consumption",
            // Q4-7: fill-in-blanks table
            "pesticides", "journeys", "producers", "flavour",
            // Q8-13: true-false-not-given
            "TRUE", "NOT GIVEN", "FALSE", "FALSE", "FALSE", "NOT GIVEN",
            // Q14-18: paragraph-matching
            "B", "A", "C", "E", "B",
            // Q19-21: matching
            "B", "C", "C",
            // Q22-26: sentence-completion
            "fire", "nutrients", "cavities", "hawthorn", "rare",
            // Q27-31: paragraph-matching
            "A", "B", "C", "D", "F",
            // Q32-36: true-false-not-given
            "TRUE", "FALSE", "NOT GIVEN", "TRUE", "FALSE",
            // Q37-40: fill-in-blanks
            "precision", "metre", "databases", "cross-correlate"
        ],
        passages: [
            {
                title: "Reading Passage 1",
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span><span style="font-size: 14px; text-align: left; color: #353535;"></span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Urban farming</strong></span></h2>
                <p><em><span style="font-size: large;">In Paris, urban farmers are trying a soil-free approach to agriculture that uses less space and fewer resources. Could it help cities face the threats to our food supplies?</span></em></p>
                <p><span style="font-size: large;">On top of a striking new exhibition hall in southern Paris, the world's largest urban rooftop farm has started to bear fruit. Strawberries that are small, intensely flavoured and resplendently red sprout abundantly from large plastic tubes. Peer inside and you see the tubes are completely hollow, the roots of dozens of strawberry plants dangling down inside them. From identical vertical tubes nearby burst row upon row of lettuces; near those are aromatic herbs, such as basil, sage and peppermint. Opposite, in narrow, horizontal trays packed not with soil but with coconut fibre, grow cherry tomatoes, shiny aubergines and brightly coloured chards.</span></p>
                <p><span style="font-size: large;">Pascal Hardy, an engineer and sustainable development consultant, began experimenting with vertical farming and aeroponic growing towers- as the soil-free plastic tubes are known – on his Paris apartment block roof five years ago. The urban rooftop space above the exhibition hall is somewhat bigger: 14,000 square metres and almost exactly the size of a couple of football pitches. Already, the team of young urban farmers who tend it have picked, in one day, 3,000 lettuces and 150 punnets of strawberries. When the remaining two thirds of the vast open area are in production, 20 staff will harvest up to 1,000 kg of perhaps 35 different varieties of fruit and vegetables, every day. 'We're not ever, obviously, going to feed the whole city this way,' cautions Hardy. 'In the urban environment you're working with very significant practical constraints, clearly, on what you can do and where. But if enough unused space can be developed like this, there's no reason why you shouldn't eventually target maybe between 5% and 10% of consumption.'</span></p>
                <p><span style="font-size: large;">Perhaps most significantly, however, this is a real-life showcase for the work of Hardy's flourishing urban agriculture consultancy, Agripolis, which is currently fielding enquiries from around the world to design, build and equip a new breed of soil-free inner-city farm. 'The method's advantages are many,' he says. 'First, I don't much like the fact that most of the fruit and vegetables we eat have been treated with something like 17 different pesticides, or that the intensive farming techniques that produced them are such huge generators of greenhouse gases. I don't much like the fact, either, that they've travelled an average of 2,000 refrigerated kilometres to my plate, that their quality is so poor, because the varieties are selected for their capacity to withstand such substantial journeys, or that 80% of the price I pay goes to wholesalers and transport companies, not the producers.'</span></p>
                <p><span style="font-size: large;">Produce grown using this soil-free method, on the other hand- which relies solely on a small quantity of water, enriched with organic nutrients, pumped around a closed circuit of pipes, towers and trays- is 'produced up here, and sold locally, just down there. It barely travels at all,' Hardy says. 'You can select crop varieties for their flavour, not their resistance to the transport and storage chain, and you can pick them when they're really at their best, and not before.' No soil is exhausted, and the water that gently showers the plants' roots every 12 minutes is recycled, so the method uses 90% less water than a classic intensive farm for the same yield.</span></p>
                <p><span style="font-size: large;">Urban farming is not, of course, a new phenomenon. Inner-city agriculture is booming from Shanghai to Detroit and Tokyo to Bangkok. Strawberries are being grown in disused shipping containers, mushrooms in underground carparks. Aeroponic farming, he says, is 'virtuous'. The equipment weighs little, can be installed on almost any flat surface and is cheap to buy: roughly 100 to 150 per square metre. It is cheap to run, too, consuming a tiny fraction of the electricity used by some techniques.</span></p>
                <p><span style="font-size: large;">Produce grown this way typically sells at prices that, while generally higher than those of classic intensive agriculture, are lower than soil-based organic growers. There are limits to what farmers can grow this way, of course, and much of the produce is suited to the summer months. 'Root vegetables we cannot do, at least not yet,' he says. 'Radishes are OK, but carrots, potatoes, that kind of thing- the roots are simply too long. Fruit trees are obviously not an option. And beans tend to take up a lot of space for not much return.' Nevertheless, urban farming of the kind being practised in Paris is one part of a bigger and fast-changing picture that is bringing food production closer to our lives.</span></p>
                `,
                questions: [
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 1,
                        title: 'Questions 1-3',
                        instruction: 'Complete the sentences below.',
                        wordLimit: 'Choose NO MORE THAN TWO WORDS AND/OR A NUMBER from the passage for each answer.',
                        sectionTitle: 'Urban farming in Paris',
                        items: [
                            {
                                prefix: 'Vertical tubes are used to grow strawberries,',
                                suffix: 'and herbs.'
                            },
                            {
                                prefix: 'There will eventually be a daily harvest of as much as',
                                suffix: 'in weight of fruit and vegetables.'
                            },
                            {
                                prefix: 'It may be possible that the farm\'s produce will account for as much as 10% of the city\'s',
                                suffix: 'overall.'
                            }
                        ]
                    },
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 4,
                        title: 'Questions 4-7',
                        instruction: 'Complete the table below.',
                        wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                        sectionTitle: 'Intensive farming versus aeroponic urban farming',
                        tableView: true,
                        items: [
                            {
                                prefix: 'Intensive farming uses a wide range of',
                                suffix: '.'
                            },
                            {
                                prefix: 'Varieties of fruit and vegetables are chosen that can survive long',
                                suffix: '.'
                            },
                            {
                                prefix: 'In intensive farming,',
                                suffix: 'receive very little of overall income.'
                            },
                            {
                                prefix: 'In aeroponic urban farming, produce is chosen because of its',
                                suffix: '.'
                            }
                        ]
                    },
                    {
                        type: 'true-false-not-given',
                        startQuestionNumber: 8,
                        title: 'Questions 8-13',
                        instruction: 'Do the following statements agree with the information given in Reading Passage 1?',
                        options: [
                            { value: 'TRUE', description: 'if the statement agrees with the information' },
                            { value: 'FALSE', description: 'if the statement contradicts the information' },
                            { value: 'NOT GIVEN', description: 'if there is no information on this' }
                        ],
                        items: [
                            { statement: 'Urban farming can take place above or below ground.' },
                            { statement: 'Some of the equipment used in aeroponic farming can be made by hand.' },
                            { statement: 'Urban farming relies more on electricity than some other types of farming.' },
                            { statement: 'Fruit and vegetables grown on an aeroponic urban farm are cheaper than traditionally grown organic produce.' },
                            { statement: 'Most produce can be grown on an aeroponic urban farm at any time of the year.' },
                            { statement: 'Beans take longer to grow on an urban farm than other vegetables.' }
                        ]
                    }
                ]
            },
            {
                title: "Reading Passage 2",
                content: `<p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong>&nbsp;which are based on Reading Passage 2 below.</span><span style="font-size: 14px;">&nbsp;</span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Forest management in Pennsylvania, USA</strong></span></h2>
                <p style="text-align: center;"><span style="font-size: large;"><em>How managing low-quality wood (also known as low-use wood) for bioenergy can encourage sustainable forest management</em></span></p>
                <p><span style="font-size: large;"><strong>A</strong></span></p>
                <p><span style="font-size: large;">A tree's 'value' depends on several factors including its species, size, form, condition, quality, function, and accessibility, and depends on the management goals for a given forest. The same tree can be valued very differently by each person who looks at it. A large, straight black cherry tree has high value as timber to be cut into logs or made into furniture, but for a landowner more interested in wildlife habitat, the real value of that stem (or trunk) may be the food it provides to animals. Likewise, if the tree suffers from black knot disease, its value for timber decreases, but to a woodworker interested in making bowls, it brings an opportunity for a unique and beautiful piece of art.</span></p>
                <p><span style="font-size: large;"><strong>B</strong></span></p>
                <p><span style="font-size: large;">In the past, Pennsylvania landowners were solely interested in the value of their trees as high-quality timber. The norm was to remove the stems of highest quality and leave behind poorly formed trees that were not as well suited to the site where they grew. This practice, called 'high-grading', has left a legacy of 'low-use wood' in the forests. Some people even call these 'junk trees', and they are abundant in Pennsylvania. These trees have lower economic value for traditional timber markets, compete for growth with higher-value trees, shade out desirable regeneration and decrease the health of a stand leaving it more vulnerable to poor weather and disease. Management that specifically targets low-use wood can help landowners manage these forest health issues, and wood energy markets help promote this.</span></p>
                <p><span style="font-size: large;"><strong>C</strong></span></p>
                <p><span style="font-size: large;">Wood energy markets can accept less expensive wood material of lower quality than would be suitable for traditional timber markets. Most wood used for energy in Pennsylvania is used to produce heat or electricity through combustion. Many schools and hospitals use wood boiler systems to heat and power their facilities, many homes are primarily heated with wood, and some coal plants incorporate wood into their coal streams to produce electricity. Wood can also be gasified for electrical generation and can even be made into liquid fuels like ethanol and gasoline for lorries and cars. All these products are made primarily from low-use wood. Several tree- and plant-cutting approaches, which could greatly improve the long-term quality of a forest, focus strongly or solely on the use of wood for those markets.</span></p>
                <p><span style="font-size: large;"><strong>D</strong></span></p>
                <p><span style="font-size: large;">One such approach is called a Timber Stand Improvement (TSI) Cut. In a TSI Cut, really poor-quality tree and plant material is cut down to allow more space, light, and other resources to the highest-valued stems that remain. Removing invasive plants might be another primary goal of a TSI Cut. The stems that are left behind might then grow in size and develop more foliage and larger crowns or tops that produce more coverage for wildlife; they have a better chance to regenerate in a less crowded environment. TSI Cuts can be tailored to one farmer's specific management goals for his or her land.</span></p>
                <p><span style="font-size: large;"><strong>E </strong></span></p>
                <p><span style="font-size: large;">Another approach that might yield a high amount of low-use wood is a Salvage Cut. With the many pests and pathogens visiting forests including hemlock wooly adelgid, Asian longhomed beetle, emerald ash borer, and gypsy moth, to name just a few, it is important to remember that those working in the forests can help ease these issues through cutting procedures. These types of cut reduce the number of sick trees and seek to manage the future spread of a pest problem. They leave vigorous trees that have stayed healthy enough to survive the outbreak.</span></p>
                <p><span style="font-size: large;"><strong>F </strong></span></p>
                <p><span style="font-size: large;">A Shelterwood Cut, which only takes place in a mature forest that has already been thinned several times, involves removing all the mature trees when other seedlings have become established. This then allows the forester to decide which tree species are regenerated. It leaves a young forest where all trees are at a similar point in their growth. It can also be used to develop a two-tier forest so that there are two harvests and the money that comes in is spread out over a decade or more.</span></p>
                <p><span style="font-size: large;"><strong>G </strong></span></p>
                <p><span style="font-size: large;">Thinnings and dense and dead wood removal for fire prevention also center on the production of low-use wood. However, it is important to remember that some retention of what many would classify as low-use wood is very important. The tops of trees that have been cut down should be left on the site so that their nutrients cycle back into the soil. In addition, trees with many cavities are extremely important habitats for insect predators like woodpeckers, bats and small mammals. They help control problem insects and increase the health and resilience of the forest. It is also important to remember that not all small trees are low-use. For example, many species like hawthorn provide food for wildlife. Finally, rare species of trees in a forest should also stay behind as they add to its structural diversity.</span></p>
                <p><span style="font-size: large;">—–</span></p>
                <p><span style="font-size: medium;">*Stand – An area covered with trees that have common features (e.g. size)</span></p>
                `,
                questions: [
                    {
                        type: 'paragraph-matching',
                        startQuestionNumber: 14,
                        title: 'Questions 14-18',
                        instruction: 'Reading Passage 2 has seven paragraphs, A-G. Which paragraph contains the following information?',
                        paragraphRange: 'A-G',
                        note: 'You may use any letter more than once.',
                        items: [
                            { description: 'bad outcomes for a forest when people focus only on its financial reward' },
                            { description: 'reference to the aspects of any tree that contribute to its worth' },
                            { description: 'mention of the potential use of wood to help run vehicles' },
                            { description: 'examples of insects that attack trees' },
                            { description: 'an alternative name for trees that produce low-use wood' }
                        ]
                    },
                    {
                        type: 'matching',
                        startQuestionNumber: 19,
                        title: 'Questions 19-21',
                        instruction: 'Look at the following purposes (Questions 19-21) and the list of timber cuts below. Match each purpose with the correct timber cut, A, B or C.',
                        note: 'You may use any letter more than once.',
                        options: [
                            { value: 'A', label: 'a TSI Cut' },
                            { value: 'B', label: 'a Salvage Cut' },
                            { value: 'C', label: 'a Shelterwood Cut' }
                        ],
                        items: [
                            { description: 'to remove trees that are diseased' },
                            { description: 'to generate income across a number of years' },
                            { description: 'to create a forest whose trees are close in age' }
                        ]
                    },
                    {
                        type: 'sentence-completion',
                        startQuestionNumber: 22,
                        title: 'Questions 22-26',
                        instruction: 'Complete the sentences below.',
                        wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                        items: [
                            {
                                prefix: 'Some dead wood is removed to avoid the possibility of',
                                suffix: '.'
                            },
                            {
                                prefix: 'The',
                                suffix: 'from the tops of cut trees can help improve soil quality.'
                            },
                            {
                                prefix: 'Some damaged trees should be left, as their',
                                suffix: 'provide habitats for a range of creatures.'
                            },
                            {
                                prefix: 'Some trees that are small, such as',
                                suffix: ', are a source of food for animals and insects.'
                            },
                            {
                                prefix: 'Any trees that are',
                                suffix: 'should be left to grow, as they add to the variety of species in the forest.'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Reading Passage 3",
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 27-40</strong> which are based on Reading Passage 3 below.</span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Conquering Earth's space junk problem</strong></span></h2>
                <p style="text-align: center;"><span style="font-size: large;"><em>Satellites, rocket shards and collision debris are creating major traffic risks in orbit around the planet. Researchers are working to reduce these threats</em></span></p>
                <p><span style="font-size: large;"><strong>A </strong></span></p>
                <p><span style="font-size: large;">Last year, commercial companies, military and civil departments and amateurs sent more than 400 satellites into orbit, over four times the yearly average in the previous decade. Numbers could rise even more sharply if leading space companies follow through on plans to deploy hundreds to thousands of large constellations of satellites to space in the next few years.</span></p>
                <p><span style="font-size: large;">All that traffic can lead to disaster. Ten years ago, a US commercial Iridium satellite smashed into an inactive Russian communications satellite called Cosmos-2251, creating thousands of new pieces of space shrapnel that now threaten other satellites in low Earth orbit – the zone stretching up to 2,000 kilometres in altitude. Altogether, there are roughly 20,000 human-made objects in orbit, from working satellites to small rocket pieces. And satellite operators can't steer away from every potential crash, because each move consumes time and fuel that could otherwise be used for the spacecraft's main job.</span></p>
                <p><span style="font-size: large;"><strong>B </strong></span></p>
                <p><span style="font-size: large;">Concern about space junk goes back to the beginning of the satellite era, but the number of objects in orbit is rising so rapidly that researchers are investigating new ways of attacking the problem. Several teams are trying to improve methods for assessing what is in orbit, so that satellite operators can work more efficiently in ever-more-crowded space. Some researchers are now starting to compile a massive data set that includes the best possible information on where everything is in orbit. Others are developing taxonomies of space – working on measuring properties such as the shape and size of an object, so that satellite operators know how much to worry about what's coming their way.</span></p>
                <p><span style="font-size: large;">The alternative, many say, is unthinkable. Just a few uncontrolled space crashes could generate enough debris to set off a runaway cascade of fragments, rendering near-Earth space unusable. 'If we go on like this, we will reach a point of no return,' says Carolin Frueh, an astrodynamical researcher at Purdue University in West Lafayette, Indiana.</span></p>
                <p><span style="font-size: large;"><strong>C </strong></span></p>
                <p><span style="font-size: large;">Even as our ability to monitor space objects increases, so too does the total number of items in orbit. That means companies, governments and other players in space are collaborating in new ways to avoid a shared threat. International groups such as the Inter-Agency Space Debris Coordination Committee have developed guidelines on space sustainability. Those include inactivating satellites at the end of their useful life by venting pressurised materials or leftover fuel that might lead to explosions. The intergovernmental groups also advise lowering satellites deep enough into the atmosphere that they will burn up or disintegrate within 25 years. But so far, only about half of all missions have abided by this 25-year goal, says Holger Krag, head of the European Space Agency's space-debris office in Darmstadt, Germany. Operators of the planned large constellations of satellites say they will be responsible stewards in their enterprises in space, but Krag worries that problems could increase, despite their best intentions. 'What happens to those that fail or go bankrupt?' he asks. They are probably not going to spend money to remove their satellites from space.'</span></p>
                <p><span style="font-size: large;"><strong>D </strong></span></p>
                <p><span style="font-size: large;">In theory, given the vastness of space, satellite operators should have plenty of room for all these missions to fly safely without ever nearing another object. So some scientists are tackling the problem of space junk by trying to find out where all the debris is to a high degree of precision. That would alleviate the need for many of the unnecessary manoeuvres that are carried out to avoid potential collisions. 'If you knew precisely where everything was, you would almost never have a problem,' says Marlon Sorge, a space-debris specialist at the Aerospace Corporation in El Segundo, California.</span></p>
                <p><span style="font-size: large;"><strong>E </strong></span></p>
                <p><span style="font-size: large;">The field is called space traffic management, because it's similar to managing traffic on the roads or in the air. Think about a busy day at an airport, says Moriba Jah, an astrodynamicist at the University of Texas at Austin: planes line up in the sky, landing and taking off close to one another in a carefully choreographed routine. Air-traffic controllers know the location of the planes down to one metre in accuracy. The same can't be said for space debris. Not all objects in orbit are known, and even those included in databases are not tracked consistently.</span></p>
                <p><span style="font-size: large;"><strong>F </strong></span></p>
                <p><span style="font-size: large;">An additional problem is that there is no authoritative catalogue that accurately lists the orbits of all known space debris. Jah illustrates this with a web-based database that he has developed. It draws on several sources, such as catalogues maintained by the US and Russian governments, to visualise where objects are in space. When he types in an identifier for a particular space object, the database draws a purple line to designate its orbit. Only this doesn't quite work for a number of objects, such as a Russian rocket body designated in the database as object number 32280. When Jah enters that number, the database draws two purple lines: the US and Russian sources contain two completely different orbits for the same object. Jah says that it is almost impossible to tell which is correct, unless a third source of information made it possible to cross-correlate.</span></p>
                <p><span style="font-size: large;">Jah describes himself as a space environmentalist: 'I want to make space a place that is safe to operate, that is free and useful for generations to come.' Until that happens, he argues, the space community will continue devolving into a tragedy in which all spaceflight operators are polluting a common resource.</span></p>
                `,
                questions: [
                    {
                        type: 'paragraph-matching',
                        startQuestionNumber: 27,
                        title: 'Questions 27-31',
                        instruction: 'Reading Passage 3 has six sections, A-F. Which section contains the following information?',
                        paragraphRange: 'A-F',
                        note: 'You may use any letter more than once.',
                        items: [
                            { description: 'a mention of the cooperation of different organisations' },
                            { description: 'an explanation of a person\'s aims' },
                            { description: 'a description of a collision that occurred in space' },
                            { description: 'a comparison between tracking objects in space and on Earth' },
                            { description: 'an explanation of a major problem affecting space monitoring' }
                        ]
                    },
                    {
                        type: 'true-false-not-given',
                        startQuestionNumber: 32,
                        title: 'Questions 32-36',
                        instruction: 'Do the following statements agree with the information given in Reading Passage 3?',
                        options: [
                            { value: 'TRUE', description: 'if the statement agrees with the information' },
                            { value: 'FALSE', description: 'if the statement contradicts the information' },
                            { value: 'NOT GIVEN', description: 'if there is no information on this' }
                        ],
                        items: [
                            { statement: 'The number of satellites launched last year was the highest ever.' },
                            { statement: 'Satellite operators can manoeuvre their satellites to avoid all collisions.' },
                            { statement: 'Some researchers are creating better methods to track space objects.' },
                            { statement: 'All satellite operators follow the 25-year rule for satellite removal.' },
                            { statement: 'Air traffic control is more accurate than space traffic management.' }
                        ]
                    },
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 37,
                        title: 'Questions 37-40',
                        instruction: 'Complete the summary below.',
                        wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
                        sectionTitle: 'Space debris problem',
                        items: [
                            {
                                prefix: 'Space junk poses a serious threat to satellites in',
                                suffix: 'orbit.'
                            },
                            {
                                prefix: 'The creation of space debris could lead to a',
                                suffix: 'of fragments.'
                            },
                            {
                                prefix: 'Some scientists believe that knowing the exact location of debris would eliminate most',
                                suffix: 'manoeuvres.'
                            },
                            {
                                prefix: 'The problem with current databases is that they contain',
                                suffix: 'orbits for the same object.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        explanation: "https://drive.google.com/file/d/1uTgGk6K3tP8pmojyWCQA0K_BOA3AgR9w/view?usp=sharing",
        title: 'Reading CAM 18 Test 2',
        image: 'https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam-18-test-2.jpg',
        correctAnswers: [
            // Q1-8: fill-in-blanks (Stonehenge notes)
            "(deer) antlers", "(timber) posts", "tree trunks", "oxen", "glaciers", "druids", "burial", "calendar",
            // Q9-13: true-false-not-given
            "TRUE", "FALSE", "FALSE", "TRUE", "NOT GIVEN",
            // Q14-19: multiple choice
            "C", "A", "B", "D", "C", "D",
            // Q20-23: yes-no-not-given
            "YES", "NOT GIVEN", "NO", "YES",
            // Q24-26: summary completion
            "C", "A", "E",
            // Q27-33: true-false-not-given
            "NOT GIVEN", "NOT GIVEN", "TRUE", "FALSE", "TRUE", "NOT GIVEN", "FALSE",
            // Q34-40: summary completion
            "transport", "staircases", "engineering", "rule", "Roman", "Paris", "outwards"
        ],
        passages: [
            {
                title: "Reading Passage 1",
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span><span style="font-size: 14px; text-align: left; color: #353535;"></span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Stonehenge</strong></span></h2>
                <p><span style="font-size: large;">For centuries, historians and archaeologists have puzzled over the many mysteries of Stonehenge, a prehistoric monument that took an estimated 1,500 years to erect. Located on Salisbury Plain in southern England, it is comprised of roughly 100 massive upright stones placed in a circular layout.</span></p>
                <p><span style="font-size: large;">Archaeologists believe England's most iconic prehistoric ruin was built in several stages with the earliest constructed 5,000 or more years ago. First, Neolithic* Britons used primitive tools, which may have been fashioned out of deer antlers, to dig a massive circular ditch and bank, or henge. Deep pits dating back to that era and located within the circle may have once held a ring of timber posts, according to some scholars.</span></p>
                <p><span style="font-size: large;">Several hundred years later, it is thought, Stonehenge's builders hoisted an estimated 80 bluestones, 43 of which remain today, into standing positions and placed them in either a horseshoe or circular formation. These stones have been traced all the way to the Preseli Hills in Wales, some 300 kilometres from Stonehenge. How, then, did prehistoric builders without sophisticated tools or engineering haul these boulders, which weigh up to four tons, over such a great distance?</span></p>
                <p><span style="font-size: large;">According to one long-standing theory among archaeologists, Stonehenge's builders fashioned sledges and rollers out of tree trunks to lug the bluestones from the Preseli Hills. They then transferred the boulders onto rafts and floated them first along the Welsh coast and then up the River Avon toward Salisbury Plain; alternatively, they may have towed each stone with a fleet of vessels. More recent archaeological hypotheses have them transporting the bluestones with supersized wicker baskets on a combination of ball bearings and long grooved planks, hauled by oxen.</span></p>
                <p><span style="font-size: large;">As early as the 1970s, geologists have been adding their voices to the debate over how Stonehenge came into being. Challenging the classic image of industrious builders pushing, carting, rolling or hauling giant stones from faraway Wales, some scientists have suggested that it was glaciers, not humans, that carried the bluestones to Salisbury Plain. Most archaeologists have remained sceptical about this theory, however, wondering how the forces of nature could possibly have delivered the exact number of stones needed to complete the circle.</span></p>
                <p><span style="font-size: large;">The third phase of construction took place around 2000 BCE. At this point, sandstone slabs – known as 'sarsens' – were arranged into an outer crescent or ring; some were assembled into the iconic three-pieced structures called trilithons that stand tall in the centre of Stonehenge. Some 50 of these stones are now visible on the site, which may once have contained many more. Radiocarbon dating has revealed that work continued at Stonehenge until roughly 1600 BCE, with the bluestones in particular being repositioned multiple times.</span></p>
                <p><span style="font-size: large;">But who were the builders of Stonehenge? In the 17th century, archaeologist John Aubrey made the claim that Stonehenge was the work of druids, who had important religious, judicial and political roles in Celtic** society. This theory was widely popularized by the antiquarian William Stukeley, who had unearthed primitive graves at the site. Even today, people who identify as modern druids continue to gather at Stonehenge for the summer solstice. However, in the mid-20th century, radiocarbon dating demonstrated that Stonehenge stood more than 1,000 years before the Celts inhabited the region.</span></p>
                <p><span style="font-size: large;">Many modern historians and archaeologists now agree that several distinct tribes of people contributed to Stonehenge, each undertaking a different phase of its construction. Bones, tools and other artefacts found on the site seem to support this hypothesis. The first stage was achieved by Neolithic agrarians who were likely to have been indigenous to the British Isles. Later, it is believed, groups with advanced tools and a more communal way of life left their mark on the site. Some believe that they were immigrants from the European continent, while others maintain that they were probably native Britons, descended from the original builders.</span></p>
                <p><span style="font-size: large;">If the facts surrounding the architects and construction of Stonehenge remain shadowy at best, the purpose of the striking monument is even more of a mystery. While there is consensus among the majority of modern scholars that Stonehenge once served the function of burial ground, they have yet to determine what other purposes it had.</span></p>
                <p><span style="font-size: large;">In the 1960s, the astronomer Gerald Hawkins suggested that the cluster of megalithic stones operated as a form of calendar, with different points corresponding to astrological phenomena such as solstices, equinoxes and eclipses occurring at different times of the year. While his theory has received a considerable amount of attention over the decades, critics maintain that Stonehenge's builders probably lacked the knowledge necessary to predict such events or that England's dense cloud cover would have obscured their view of the skies.</span></p>
                <p><span style="font-size: large;">More recently, signs of illness and injury in the human remains unearthed at Stonehenge led a group of British archaeologists to speculate that it was considered a place of healing, perhaps because bluestones were thought to have curative powers.</span></p>
                <p><span style="font-size: large;">—–</span></p>
                <p><span style="font-size: medium;">* Neolithic – The era, also known as the New Stone Age, which began around 12,000 years ago and ended around 3500 BCE</span></p>
                <p><span style="font-size: medium;">** Celtic – The Celts were people who lived in Britain and northwest Europe during the Iron Age from 600 BCE to 43 CE</span></p>
                `,
                questions: [
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 1,
                        title: 'Questions 1-8',
                        instruction: 'Complete the notes below.',
                        wordLimit: 'Choose NO MORE THAN TWO WORDS from the passage for each answer.',
                        sectionTitle: 'Stonehenge',
                        items: [
                            {
                                prefix: 'Stage 1: the ditch and henge were dug, possibly using tools made from',
                                suffix: '.'
                            },
                            {
                                prefix: 'Stage 1:',
                                suffix: 'may have been arranged in deep pits inside the circle.'
                            },
                            {
                                prefix: 'Stage 2: archaeological theory - builders used',
                                suffix: 'to make sledges and rollers.'
                            },
                            {
                                prefix: 'Stage 2: archaeological theory -',
                                suffix: 'pulled them on giant baskets.'
                            },
                            {
                                prefix: 'Stage 2: geological theory - they were brought from Wales by',
                                suffix: '.'
                            },
                            {
                                prefix: 'Builders: a theory arose in the 17th century that its builders were Celtic',
                                suffix: '.'
                            },
                            {
                                prefix: 'Purpose: many experts agree it has been used as a',
                                suffix: 'site.'
                            },
                            {
                                prefix: 'Purpose: in the 1960s, it was suggested that it worked as a kind of',
                                suffix: '.'
                            }
                        ]
                    },
                    {
                        type: 'true-false-not-given',
                        startQuestionNumber: 9,
                        title: 'Questions 9-13',
                        instruction: 'Do the following statements agree with the information given in Reading Passage 1?',
                        options: [
                            { value: 'TRUE', description: 'if the statement agrees with the information' },
                            { value: 'FALSE', description: 'if the statement contradicts the information' },
                            { value: 'NOT GIVEN', description: 'if there is no information on this' }
                        ],
                        items: [
                            { statement: 'During the third phase of construction, sandstone slabs were placed in both the outer areas and the middle of the Stonehenge site.' },
                            { statement: 'There is scientific proof that the bluestones stood in the same spot until approximately 1600 BCE.' },
                            { statement: 'John Aubrey\'s claim about Stonehenge was supported by 20th-century findings.' },
                            { statement: 'Objects discovered at Stonehenge seem to indicate that it was constructed by a number of different groups of people.' },
                            { statement: 'Criticism of Gerald Hawkins\' theory about Stonehenge has come mainly from other astronomers.' }
                        ]
                    }
                ]
            },
            {
                title: "Reading Passage 2",
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong>&nbsp;which are based on Reading Passage 2 below.</span><span style="font-size: 14px;">&nbsp;</span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Living with artificial intelligence</strong></span></h2>
                <p style="text-align: center;"><span style="font-size: large;"><em>Powerful artificial intelligence (AI) needs to be reliably aligned with human values, but<br>does this mean AI will eventually have to<br>police those values?</em></span></p>
                <p><span style="font-size: large;">This has been the decade of AI, with one astonishing feat after another. A chess-playing AI that can defeat not only all human chess players, but also all previous human-programmed chess machines, after learning the game in just four hours? That's yesterday's news, what's next? True, these prodigious accomplishments are all in so-called narrow AI, where machines perform highly specialised tasks. But many experts believe this restriction is very temporary. By mid-century, we may have artificial general intelligence (AGI) – machines that can achieve human-level performance on the full range of tasks that we ourselves can tackle.</span></p>
                <p><span style="font-size: large;">If so, there's little reason to think it will stop there. Machines will be free of many of the physical constraints on human intelligence. Our brains run at slow biochemical processing speeds on the power of a light bulb, and their size is restricted by the dimensions of the human birth canal. It is remarkable what they accomplish, given these handicaps. But they may be as far from the physical limits of thought as our eyes are from the incredibly powerful Webb Space Telescope.</span></p>
                <p><span style="font-size: large;">Once machines are better than us at designing even smarter machines, progress towards these limits could accelerate. What would this mean for us? Could we ensure a safe and worthwhile coexistence with such machines? On the plus side, AI is already useful and profitable for many things, and super AI might be expected to be super useful and super profitable. But the more powerful AI becomes, the more important it will be to specify its goals with great care. Folklore is full of tales of people who ask for the wrong thing, with disastrous consequences- King Midas, for example, might have wished that everything he touched turned to gold, but didn't really intend this to apply to his breakfast.</span></p>
                <p><span style="font-size: large;">So we need to create powerful AI machines that are 'human-friendly'- that have goals reliably aligned with our own values. One thing that makes this task difficult is that we are far from reliably human-friendly ourselves. We do many terrible things to each other and to many other creatures with whom we share the planet. If superintendent machines don't do a lot better than us, we'll be in deep trouble. We'll have powerful new intelligence amplifying the dark sides of our own fallible natures.</span></p>
                <p><span style="font-size: large;">For safety's sake, then, we want the machines to be ethically as well as cognitively superhuman. We want them to aim for the moral high ground, not for the troughs in which many of us spend some of our time. Luckily they'll be smart enough for the job. If there are routes to the moral high ground, they'll be better than us at finding them, and steering us in the right direction.</span></p>
                <p><span style="font-size: large;">However, there are two big problems with this utopian vision. One is how we get the machines started on the journey, the other is what it would mean to reach this destination. The 'getting started' problem is that we need to tell the machines what they're looking for with sufficient clarity that we can be confident they will find it – whatever 'it' actually turns out to be. This won't be easy, given that we are tribal creatures and conflicted about the ideals ourselves. We often ignore the suffering of strangers, and even contribute to it, at least indirectly. How then, do we point machines in the direction of something better?</span></p>
                <p><span style="font-size: large;">As for the 'destination' problem, we might, by putting ourselves in the hands of these moral guides and gatekeepers, be sacrificing our own autonomy – an important part of what makes us human. Machines who are better than us at sticking to the moral high ground may be expected to discourage some of the lapses we presently take for granted. We might lose our freedom to discriminate in favour of our own communities, for example.</span></p>
                <p><span style="font-size: large;">Loss of freedom to behave badly isn't always a bad thing, of course: denying ourselves the freedom to put children to work in factories, or to smoke in restaurants are signs of progress. But are we ready for ethical silicon police limiting our options? They might be so good at doing it that we won't notice them; but few of us are likely to welcome such a future.</span></p>
                <p><span style="font-size: large;">These issues might seem far-fetched, but they are to some extent already here. AI already has some input into how resources are used in our National Health Service (NHS) here in the UK, for example. If it was given a greater role, it might do so much more efficiently than humans can manage, and act in the interests of taxpayers and those who use the health system. However, we'd be depriving some humans (e.g. senior doctors) of the control they presently enjoy. Since we'd want to ensure that people are treated equally and that policies are fair, the goals of AI would need to be specified correctly.</span></p>
                <p><span style="font-size: large;">We have a new powerful technology to deal with- itself, literally, a new way of thinking. For our own safety, we need to point these new thinkers in the right direction, and get them to act well for us. It is not yet clear whether this is possible, but if it is, it will require a cooperative spirit, and a willingness to set aside self-interest.</span></p>
                <p><span style="font-size: large;">Both general intelligence and moral reasoning are often thought to be uniquely human capacities. But safety seems to require that we think of them as a package: if we are to give general intelligence to machines, we'll need to give them moral authority, too. And where exactly would that leave human beings? All the more reason to think about the destination now, and to be careful about what we wish for.</span></p>
                `,
                questions: [
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 14,
                        title: 'Questions 14-19',
                        instruction: 'Choose the correct letter, A, B, C or D.',
                        items: [
                            {
                                question: 'What point does the writer make about AI in the first paragraph?',
                                options: [
                                    { value: 'A', text: 'It is difficult to predict how quickly AI will progress.' },
                                    { value: 'B', text: 'Much can be learned about the use of AI in chess machines.' },
                                    { value: 'C', text: 'The future is unlikely to see limitations on the capabilities of AI.' },
                                    { value: 'D', text: 'Experts disagree on which specialised tasks AI will be able to perform.' }
                                ]
                            },
                            {
                                question: 'What is the writer doing in the second paragraph?',
                                options: [
                                    { value: 'A', text: 'explaining why machines will be able to outperform humans' },
                                    { value: 'B', text: 'describing the characteristics that humans and machines share' },
                                    { value: 'C', text: 'giving information about the development of machine intelligence' },
                                    { value: 'D', text: 'indicating which aspects of humans are the most advanced' }
                                ]
                            },
                            {
                                question: 'Why does the writer mention the story of King Midas?',
                                options: [
                                    { value: 'A', text: 'to compare different visions of progress' },
                                    { value: 'B', text: 'to illustrate that poorly defined objectives can go wrong' },
                                    { value: 'C', text: 'to emphasise the need for cooperation' },
                                    { value: 'D', text: 'to point out the financial advantages of a course of action' }
                                ]
                            },
                            {
                                question: 'What challenge does the writer refer to in the fourth paragraph?',
                                options: [
                                    { value: 'A', text: 'encouraging humans to behave in a more principled way' },
                                    { value: 'B', text: 'deciding which values we want AI to share with us' },
                                    { value: 'C', text: 'creating a better world for all creatures on the planet' },
                                    { value: 'D', text: 'ensuring AI is more human-friendly than we are ourselves' }
                                ]
                            },
                            {
                                question: 'What does the writer suggest about the future of AI in the fifth paragraph?',
                                options: [
                                    { value: 'A', text: 'The safety of machines will become a key issue.' },
                                    { value: 'B', text: 'It is hard to know what impact machines will have on the world.' },
                                    { value: 'C', text: 'Machines will be superior to humans in certain respects.' },
                                    { value: 'D', text: 'Many humans will oppose machines having a wider role.' }
                                ]
                            },
                            {
                                question: 'Which of the following best summarises the writer\'s argument in the sixth paragraph?',
                                options: [
                                    { value: 'A', text: 'More intelligent machines will result in greater abuses of power.' },
                                    { value: 'B', text: 'Machine learning will share very few features with human learning.' },
                                    { value: 'C', text: 'There are a limited number of people with the knowledge to program machines.' },
                                    { value: 'D', text: 'Human shortcomings will make creating the machines we need more difficult.' }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'yes-no-not-given',
                        startQuestionNumber: 20,
                        title: 'Questions 20-23',
                        instruction: 'Do the following statements agree with the claims of the writer in Reading Passage 2?',
                        options: [
                            { value: 'YES', description: 'if the statement agrees with the claims of the writer' },
                            { value: 'NO', description: 'if the statement contradicts the claims of the writer' },
                            { value: 'NOT GIVEN', description: 'if it is impossible to say what the writer thinks about this' }
                        ],
                        items: [
                            { statement: 'Machines with the ability to make moral decisions may prevent us from promoting the interests of our communities.' },
                            { statement: 'Silicon police would need to exist in large numbers in order to be effective.' },
                            { statement: 'Many people are comfortable with the prospect of their independence being restricted by machines.' },
                            { statement: 'If we want to ensure that machines act in our best interests, we all need to work together.' }
                        ]
                    },
                    {
                        type: 'summary-completion',
                        startQuestionNumber: 24,
                        title: 'Questions 24-26',
                        instruction: 'Complete the summary using the list of phrases, A-F, below.',
                        sectionTitle: 'Using AI in the UK health system',
                        options: [
                            { value: 'A', text: 'medical practitioners' },
                            { value: 'B', text: 'specialised tasks' },
                            { value: 'C', text: 'available resources' },
                            { value: 'D', text: 'reduced illness' },
                            { value: 'E', text: 'professional authority' },
                            { value: 'F', text: 'technology experts' }
                        ],
                        items: [
                            {
                                prefix: 'AI currently has a limited role in the way',
                                suffix: 'are allocated in the health service.'
                            },
                            {
                                prefix: 'However, such a change would result, for example, in certain',
                                suffix: 'not having their current level of'
                            },
                            {
                                prefix: '',
                                suffix: '. It is therefore important that AI goals are appropriate so that discriminatory practices could be avoided.'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Reading Passage 3",
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 27-40</strong> which are based on Reading Passage 3 below.</span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>An ideal city</strong></span></h2>
                <p style="text-align: center;"><span style="font-size: large;"><em>Leonardo da Vinci's ideal city was centuries ahead of its time</em></span></p>
                <p><span style="font-size: large;">The word 'genius' is universally associated with the name of Leonardo da Vinci. A true Renaissance man, he embodied scientific spirit, artistic talent and humanist sensibilities. Five hundred years have passed since Leonardo died in his home at Chateau du Clos Luce, outside Tours, France. Yet far from fading into insignificance, his thinking has carried down the centuries and still surprises today.</span></p>
                <p><span style="font-size: large;">The Renaissance marked the transition from the 15th century to modernity and took place after the spread of the plague in the 14th century, which caused a global crisis resulting in some 200 million deaths across Europe and Asia. Today, the world is on the cusp of a climate crisis, which is predicted to cause widespread displacement, extinctions and death, if left unaddressed. Then, as now, radical solutions were called for to revolutionise the way people lived and safeguard humanity against catastrophe.</span></p>
                <p><span style="font-size: large;">Around 1486 – after a pestilence that killed half the population in Milan, Italy – Leonardo turned his thoughts to urban planning problems. Following a typical Renaissance trend, he began to work on an 'ideal city' project, which – due to its excessive costs – would remain unfulfilled. Yet given that unsustainable urban models are a key cause of global climate change today, it's only natural to wonder how Leonardo might have changed the shape of modem cities.</span></p>
                <p><span style="font-size: large;">Although the Renaissance is renowned as an era of incredible progress in art and architecture, it is rarely noted that the 15th century also marked the birth of urbanism as a true academic discipline. The rigour and method behind the conscious conception of a city had been largely missing in Western thought until the moment when prominent Renaissance men pushed forward large-scale urban projects in Italy, such as the reconfiguration of the town of Pienza and the expansion of the city of Ferrara. These works surely inspired Leonardo's decision to rethink the design of medieval cities, with their winding and overcrowded streets and with houses piled against one another.</span></p>
                <p><span style="font-size: large;">It is not easy to identify a coordinated vision of Leonardo's ideal city because of his disordered way of working with notes and sketches. But from the largest collection of Leonardo's papers ever assembled, a series of innovative thoughts can be reconstructed regarding the foundation of a new city along the Ticino River, which runs from Switzerland into Italy and is 248 kilometres long. He designed the city for the easy transport of goods and clean urban spaces, and he wanted a comfortable and spacious city, with well-ordered streets and architecture. He recommended 'high, strong walls', with 'towers and battlements of all necessary and pleasant beauty'.</span></p>
                <p><span style="font-size: large;">His plans for a modem and 'rational' city were consistent with Renaissance ideals. But, in keeping with his personality, Leonardo included several innovations in his urban design. Leonardo wanted the city to be built on several levels, linked with vertical outdoor staircases. This design can be seen in some of today's high-rise buildings but was unconventional at the time. Indeed, this idea of taking full advantage of the interior spaces wasn't implemented until the 1920s and 1930s, with the birth of the Modernist movement.</span></p>
                <p><span style="font-size: large;">While in the upper layers of the city, people could walk undisturbed between elegant palaces and streets, the lower layer was the place for services, trade, transport and industry. But the true originality of Leonardo's vision was its fusion of architecture and engineering. Leonardo designed extensive hydraulic plants to create artificial canals throughout the city. The canals, regulated by clocks and basins, were supposed to make it easier for boats to navigate inland. Leonardo also thought that the width of the streets ought to match the average height of the adjacent houses: a rule still followed in many contemporary cities across Italy, to allow access to sun and reduce the risk of damage from earthquakes.</span></p>
                <p><span style="font-size: large;">Although some of these features existed in Roman cities, before Leonardo's drawings there had never been a multi-level, compact modem city which was thoroughly technically conceived. Indeed, it wasn't until the 19th century that some of his ideas were applied. For example, the subdivision of the city by function- with services and infrastructures located in the lower levels and wide and well-ventilated boulevards and walkways above for residents – is an idea that can be found in Georges-Eugene Haussmann's renovation of Paris under Emperor Napoleon III between 1853 and 1870.</span></p>
                <p><span style="font-size: large;">Today, Leonardo's ideas are not simply valid, they actually suggest a way forward for urban planning. Many scholars think that the compact city, built upwards instead of outwards, integrated with nature (especially water systems), with efficient transport infrastructure, could help modem cities become more efficient and sustainable. This is yet another reason why Leonardo was aligned so closely with modem urban planning and centuries ahead of his time.</span></p>
                `,
                questions: [
                    {
                        type: 'true-false-not-given',
                        startQuestionNumber: 27,
                        title: 'Questions 27-33',
                        instruction: 'Do the following statements agree with the information given in Reading Passage 3?',
                        options: [
                            { value: 'TRUE', description: 'if the statement agrees with the information' },
                            { value: 'FALSE', description: 'if the statement contradicts the information' },
                            { value: 'NOT GIVEN', description: 'if there is no information on this' }
                        ],
                        items: [
                            { statement: 'People first referred to Leonardo da Vinci as a genius 500 years ago.' },
                            { statement: 'The current climate crisis is predicted to cause more deaths than the plague.' },
                            { statement: 'Some of the challenges we face today can be compared to those of earlier times.' },
                            { statement: 'Leonardo da Vinci\'s \'ideal city\' was constructed in the 15th century.' },
                            { statement: 'Poor town planning is a major contributor to climate change.' },
                            { statement: 'In Renaissance times, local people fought against the changes to Pienza and Ferrara.' },
                            { statement: 'Leonardo da Vinci kept a neat, organised record of his designs.' }
                        ]
                    },
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 34,
                        title: 'Questions 34-40',
                        instruction: 'Complete the summary below.',
                        wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                        sectionTitle: 'Leonardo da Vinci\'s ideal city',
                        items: [
                            {
                                prefix: 'A collection of Leonardo da Vinci\'s paperwork reveals his design of a new city beside the Ticino River. This was to provide better',
                                suffix: 'for trade and a less polluted environment.'
                            },
                            {
                                prefix: 'They included features that can be seen in some tower blocks today, such as',
                                suffix: 'on the exterior of a building.'
                            },
                            {
                                prefix: 'Leonardo da Vinci wasn\'t only an architect. His expertise in',
                                suffix: 'was evident in his plans for artificial canals within his ideal city.'
                            },
                            {
                                prefix: 'The design of many cities in Italy today follows this',
                                suffix: '.'
                            },
                            {
                                prefix: 'While some cities from',
                                suffix: 'times have aspects that can also be found in Leonardo\'s designs, his ideas weren\'t put into practice until long after his death.'
                            },
                            {
                                prefix: '',
                                suffix: 'is one example of a city that was redesigned in the 19th century in the way that Leonardo had envisaged.'
                            },
                            {
                                prefix: 'His ideas are also relevant to today\'s world, where building',
                                suffix: 'no longer seems to be the best approach.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        explanation: "https://drive.google.com/file/d/1uTgGk6K3tP8pmojyWCQA0K_BOA3AgR9w/view?usp=sharing",
        title: 'Reading CAM 18 Test 3',
        image: 'https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam-18-test-3.jpg',
        correctAnswers: [
            // Q1-4: paragraph matching
            'G', 'D', 'C', 'F',
            // Q5-8: summary completion
            'architects', 'moisture', 'layers', 'speed',
            // Q9-13: matching statements to people
            'C', 'A', 'B', 'D', 'A',
            // Q14-20: paragraph headings
            'iii', 'viii', 'vi', 'v', 'vii', 'i', 'iv',
            // Q21-23: multiple choice
            'A', 'C', 'B',
            // Q24-26: summary completion
            'speed', 'fifty / 50', 'strict',
            // Q27-30: multiple choice
            'B', 'A', 'C', 'C',
            // Q31-35: summary completion with options
            'H', 'D', 'F', 'E', 'B',
            // Q36-40: yes-no-not-given
            'NO', 'NOT GIVEN', 'YES', 'NO', 'NOT GIVEN'
        ],
        passages: [
            {
                title: "Reading Passage 1",
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span><span style="font-size: 14px; text-align: left; color: #353535;"></span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Materials to take us beyond concrete</strong></span></h2>
                <p style="text-align: center;"><span style="font-size: large;"><em>Concrete is everywhere, but it's bad for the planet, generating large amounts of carbon dioxide – alternatives are being developed</em></span></p>
                <p><span style="font-size: large;"><strong>A</strong></span></p>
                <p><span style="font-size: large;">Concrete is the second most used substance in the global economy, after water – and one of the world's biggest single sources of greenhouse gas emissions. The chemical process by which cement, the key ingredient of concrete, is created results in large quantities of carbon dioxide. The UN estimates that there will be 9.8 billion people living on the planet by mid-century. They will need somewhere to live. If concrete is the only answer to the construction of new cities, then carbon emissions will soar, aggravating global warming. And so scientists have started innovating with other materials, in a scramble for alternatives to a universal commodity that has underpinned our modem life for many years.</span></p>
                <p><span style="font-size: large;"><strong>B</strong></span></p>
                <p><span style="font-size: large;">The problem with replacing concrete is that it is so very good at what it does. Chris Cheeseman, an engineering professor at Imperial College London, says the key thing to consider is the extent to which concrete is used around the world, and is likely to continue to be used. 'Concrete is not a high-carbon product. Cement is high carbon, but concrete is not. But it is the scale on which it is used that makes it high carbon. The sheer scale of manufacture is so huge, that is the issue.'</span></p>
                <p><span style="font-size: large;"><strong>C</strong></span></p>
                <p><span style="font-size: large;">Not only are the ingredients of concrete relatively cheap and found in abundance in most places around the globe, the stuff itself has marvellous properties: Portland cement, the vital component of concrete, is mouldable and pourable, but quickly sets hard. Cheeseman also notes another advantage: concrete and steel have similar thermal expansion properties, so steel can be used to reinforce concrete, making it far stronger and more flexible as a building material than it could be on its own. According to Cheeseman, all these factors together make concrete hard to beat. 'Concrete is amazing stuff. Making anything with similar properties is going to be very difficult.'</span></p>
                <p><span style="font-size: large;"><strong>D </strong></span></p>
                <p><span style="font-size: large;">A possible alternative to concrete is wood. Making buildings from wood may seem like a rather medieval idea, but climate change is driving architects to turn to treated timber as a possible resource. Recent years have seen the emergence of tall buildings constructed almost entirely from timber. Vancouver, Vienna and Brumunddal in Norway are all home to constructed tall, wooden buildings.</span></p>
                <p><span style="font-size: large;"><strong>E</strong></span></p>
                <p><span style="font-size: large;">Using wood to construct buildings, however, is not straightforward. Wood expands as it absorbs moisture from the air and is susceptible to pests, not to mention fire. But treating wood and combining it with other materials can improve its properties. Cross-laminated timber is engineered wood. An adhesive is used to stick layers of solid-sawn timber together, crosswise, to form building blocks. This material is light but has the strength of concrete and steel. Construction experts say that wooden buildings can be constructed at a greater speed than ones of concrete and steel and the process, it seems, is quieter.</span></p>
                <p><span style="font-size: large;"><strong>F</strong></span></p>
                <p><span style="font-size: large;">Stora Enso is Europe's biggest supplier of cross-laminated timber, and its vice-president Markus Mannstrom reports that the company is seeing increasing demand globally for building in wood, with climate change concerns the key driver. Finland, with its large forests, where Stora Enso is based, has been leading the way, but the company is seeing a rise in demand for its timber products across the world, including in Asia. Of course, using timber in a building also locks away the carbon that it absorbed as it grew. But even treated wood has its limitations and only when a wider range of construction projects has been proven in practice will it be possible to see wood as a real alternative to concrete in constructing tall buildings.</span></p>
                <p><span style="font-size: large;"><strong>G</strong></span></p>
                <p><span style="font-size: large;">Fly ash and slag from iron ore are possible alternatives to cement in a concrete mix. Fly ash, a byproduct of coal-burning power plants, can be incorporated into concrete mixes to make up as much as 15 to 30% of the cement, without harming the strength or durability of the resulting mix. Iron-ore slag, a byproduct of the iron-ore smelting process, can be used in a similar way. Their incorporation into concrete mixes has the potential to reduce greenhouse gas emissions.</span></p>
                <p><span style="font-size: large;">But Anna Surgenor, of the UK's Green Building Council, notes that although these waste products can save carbon in the concrete mix, their use is not always straightforward. 'It's possible to replace the cement content in concrete with waste products to lower the overall carbon impact. But there are several calculations that need to be considered across the entire life cycle of the building- these include factoring in where these materials are being shipped from. If they are transported over long distances, using fossil fuels, the use of alternative materials might not make sense from an overall carbon reduction perspective.'</span></p>
                <p><span style="font-size: large;"><strong>H </strong></span></p>
                <p><span style="font-size: large;">While these technologies are all promising ideas, they are either unproven or based on materials that are not abundant. In their overview of innovation in the concrete industry, Felix Preston and Johanna Lehne of the UK's Royal Institute of International Affairs reached the conclusion that, 'Some novel cements have been discussed for more than a decade within the research community, without breaking through. At present, these alternatives are rarely as cost-effective as conventional cement, and they face raw-material shortages and resistance from customers.'</span></p>
                `,
                questions: [
                    {
                        type: 'paragraph-matching',
                        startQuestionNumber: 1,
                        title: 'Questions 1-4',
                        instruction: 'Reading Passage 1 has eight sections, A-H. Which section contains the following information?',
                        paragraphRange: 'A-H',
                        note: 'Write the correct letter, A-H, in boxes 1-4 on your answer sheet.',
                        items: [
                            { description: 'an explanation of the industrial processes that create potential raw materials for concrete' },
                            { description: 'a reference to the various locations where high-rise wooden buildings can be found' },
                            { description: 'an indication of how widely available the raw materials of concrete are' },
                            { description: 'the belief that more high-rise wooden buildings are needed before wood can be regarded as a viable construction material' }
                        ]
                    },
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 5,
                        title: 'Questions 5-8',
                        instruction: 'Complete the summary below.',
                        wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                        sectionTitle: 'Making buildings with wood',
                        items: [
                            {
                                prefix: 'Wood is a traditional building material, but current environmental concerns are encouraging',
                                suffix: 'to use wood in modern construction projects.'
                            },
                            {
                                prefix: 'Using wood, however, has its challenges. For example, as',
                                suffix: 'in the atmosphere enters wood, it increases in size.'
                            },
                            {
                                prefix: 'However, wood can be turned into a better construction material if it is treated and combined with other materials. In one process,',
                                suffix: 'of solid wood are glued together to create building blocks.'
                            },
                            {
                                prefix: 'Experts say that wooden buildings are an improvement on those made of concrete and steel in terms of the',
                                suffix: 'with which they can be constructed and how much noise is generated by the process.'
                            }
                        ]
                    },
                    {
                        type: 'matching',
                        startQuestionNumber: 9,
                        title: 'Questions 9-13',
                        instruction: 'Look at the following statements (Questions 9-13) and the list of people below. Match each statement with the correct person, A, B, C or D.',
                        note: 'You may use any letter more than once.',
                        options: [
                            { value: 'A', label: 'Chris Cheeseman' },
                            { value: 'B', label: 'Markus Mannstrom' },
                            { value: 'C', label: 'Anna Surgenor' },
                            { value: 'D', label: 'Felix Preston and Johanna Lehne' }
                        ],
                        items: [
                            { description: 'The environmental advantage of cement alternatives may not be as great as initially assumed.' },
                            { description: 'It would be hard to create a construction alternative to concrete that offers so many comparable benefits.' },
                            { description: 'Worries about the environment have led to increased interest in wood as a construction material.' },
                            { description: 'Expense has been a factor in the negative response to the development of new cements.' },
                            { description: 'The environmental damage caused by concrete is due to it being produced in large quantities.' }
                        ]
                    }
                ]
            },
            {
                title: "Reading Passage 2",
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong>&nbsp;which are based on Reading Passage 2 below.</span><span style="font-size: 14px;">&nbsp;</span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>The steam car</strong></span></h2>
                <p style="text-align: center;"><span style="font-size: large;"><em>The successes and failures of the Doble brothers and their steam cars</em></span></p>
                <p><span style="font-size: large;"><strong>A</strong></span></p>
                <p><span style="font-size: large;">When primitive automobiles first began to appear in the 1800s, their engines were based on steam power. Steam had already enjoyed a long and successful career in the railways, so it was only natural that the technology evolved into a miniaturized version which was separate from the trains. But these early cars inherited steam's weaknesses along with its strengths. The boilers had to be lit by hand, and they required about twenty minutes to build up pressure before they could be driven. Furthermore, their water reservoirs only lasted for about thirty miles before needing replenishment. Despite such shortcomings, these newly designed self-propelled carriages offered quick transportation, and by the early 1900s it was not uncommon to see such machines shuttling wealthy citizens around town.</span></p>
                <p><span style="font-size: large;"><strong>B</strong></span></p>
                <p><span style="font-size: large;">But the glory days of steam cars were few. A new technology called the Internal Combustion Engine soon appeared, which offered the ability to drive down the road just moments after starting up. At first, these noisy gasoline cars were unpopular because they were more complicated to operate and they had difficult hand-crank starters, which were known to break arms when the engines backfired. But in 1912 General Motors introduced the electric starter, and over the following few years steam power was gradually phased out.</span></p>
                <p><span style="font-size: large;"><strong>C </strong></span></p>
                <p><span style="font-size: large;">Even as the market was declining, four brothers made one last effort to rekindle the technology. Between 1906 and 1909, while still attending high school, Abner Doble and his three brothers built their first steam car in their parents' basement. It comprised parts taken from a wrecked early steam car but reconfigured to drive an engine of their own design. Though it did not run well, the Doble brothers went on to build a second and third prototype in the following years. Though the Doble boys' third prototype, nicknamed the Model B, still lacked the convenience of an internal combustion engine, it drew the attention of automobile trade magazines due to its numerous improvements over previous steam cars. The Model B proved to be superior to gasoline automobiles in many ways. Its high-pressure steam drove the engine pistons in virtual silence, in contrast to clattering gas engines which emitted the aroma of burned hydrocarbons. Perhaps most impressively, the Model B was amazingly swift. It could accelerate from zero to sixty miles per hour in just fifteen seconds, a feat described as 'remarkable acceleration' by <em>Automobile</em> magazine in 1914.</span></p>
                <p><span style="font-size: large;"><strong>D </strong></span></p>
                <p><span style="font-size: large;">The following year Abner Doble drove the Model B from Massachusetts to Detroit in order to seek investment in his automobile design, which he used to open the General Engineering Company. He and his brothers immediately began working on the Model C, which was intended to expand upon the innovations of the Model B. The brothers added features such as a key-based ignition in the cabin, eliminating the need for the operator to manually ignite the boiler. With these enhancements, the Dobles' new car company promised a steam vehicle which would provide all of the convenience of a gasoline car, but with much greater speed, much simpler driving controls, and a virtually silent powerplant. By the following April, the General Engineering Company had received 5,390 deposits for Doble Detroits, which were scheduled for delivery in early 1918.</span></p>
                <p><span style="font-size: large;"><strong>E </strong></span></p>
                <p><span style="font-size: large;">Later that year Abner Doble delivered unhappy news to those eagerly awaiting the delivery of their modem new cars. Those buyers who received the handful of completed cars complained that the vehicles were sluggish and erratic, sometimes going in reverse when they should go forward. The new engine design, though innovative, was still plagued with serious glitches.</span></p>
                <p><span style="font-size: large;"><strong>F</strong></span></p>
                <p><span style="font-size: large;">The brothers made one final attempt to produce a viable steam automobile. In early 1924, the Doble brothers shipped a Model E to New York City to be road-tested by the Automobile Club of America. After sitting overnight in freezing temperatures, the car was pushed out into the road and left to sit for over an hour in the frosty morning air. At the turn of the key, the boiler lit and reached its operating pressure inside of forty seconds. As they drove the test vehicle further, they found that its evenly distributed weight lent it surprisingly good handling, even though it was so heavy. As the new Doble steamer was further developed and tested, its maximum speed was pushed to over a hundred miles per hour, and it achieved about fifteen miles per gallon of kerosene with negligible emissions.</span></p>
                <p><span style="font-size: large;"><strong>G</strong></span></p>
                <p><span style="font-size: large;">Sadly, the Dobles' brilliant steam car never was a financial success. Priced at around $18,000 in 1924, it was popular only among the very wealthy. Plus, it is said that no two Model Es were quite the same, because Abner Doble tinkered endlessly with the design. By the time the company folded in 1931, fewer than fifty of the amazing Model E steam cars had been produced. For his whole career, until his death in 1961, Abner Doble remained adamant that steam-powered automobiles were at least equal to gasoline cars, if not superior. Given the evidence, he may have been right. Many of the Model E Dobles which have survived are still in good working condition, some having been driven over half a million miles with only normal maintenance. Astonishingly, an unmodified Doble Model E runs clean enough to pass the emissions laws in California today, and they are pretty strict. It is true that the technology poses some difficult problems, but you cannot help but wonder how efficient a steam car might be with the benefit of modem materials and computers. Under the current pressure to improve automotive performance and reduce emissions, it is not unthinkable that the steam car may rise again.</span></p>
                `,
                questions: [
                    {
                        type: 'paragraph-headings',
                        startQuestionNumber: 14,
                        title: 'Questions 14-20',
                        instruction: 'Reading Passage 2 has seven paragraphs, A-G. Choose the correct heading for each paragraph from the list of headings below.',
                        paragraphRange: 'A-G',
                        options: [
                            { value: 'i', text: 'A period in cold conditions before the technology is assessed' },
                            { value: 'ii', text: 'Marketing issues lead to failure' },
                            { value: 'iii', text: 'Good and bad aspects of steam technology are passed on' },
                            { value: 'iv', text: 'A possible solution to the issues of today' },
                            { value: 'v', text: 'Further improvements lead to commercial orders' },
                            { value: 'vi', text: 'Positive publicity at last for this quiet, clean, fast vehicle' },
                            { value: 'vii', text: 'A disappointing outcome for customers' },
                            { value: 'viii', text: 'A better option than the steam car arises' }
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
                        type: 'multiple-choice',
                        startQuestionNumber: 21,
                        title: 'Questions 21-23',
                        instruction: 'Choose the correct letter, A, B, C or D.',
                        items: [
                            {
                                question: 'What point does the writer make about the steam car in Paragraph B?',
                                options: [
                                    { value: 'A', text: 'Its success was short-lived.' },
                                    { value: 'B', text: 'Not enough cars were made.' },
                                    { value: 'C', text: 'Car companies found them hard to sell.' },
                                    { value: 'D', text: 'People found them hard to drive.' }
                                ]
                            },
                            {
                                question: 'When building their first steam car, the Doble brothers',
                                options: [
                                    { value: 'A', text: 'constructed all the parts themselves.' },
                                    { value: 'B', text: 'made written notes at each stage of the construction.' },
                                    { value: 'C', text: 'used some existing parts from another car.' },
                                    { value: 'D', text: 'sought the advice of experienced people in the car industry.' }
                                ]
                            },
                            {
                                question: 'In order to produce the Model C, the Doble brothers',
                                options: [
                                    { value: 'A', text: 'moved production to a different city.' },
                                    { value: 'B', text: 'raised financial capital.' },
                                    { value: 'C', text: 'employed an additional worker.' },
                                    { value: 'D', text: 'abandoned their earlier designs.' }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 24,
                        title: 'Questions 24-26',
                        instruction: 'Complete the summary below.',
                        wordLimit: 'Choose ONE WORD AND/OR A NUMBER from the passage for each answer.',
                        sectionTitle: 'The Model E',
                        items: [
                            {
                                prefix: 'The Model E was road-tested in 1924 by the Automobile Club of America. They found it easy to drive, despite its weight, and it impressed the spectators. A later version of the Model E raised its',
                                suffix: ', while keeping its emissions extremely low.'
                            },
                            {
                                prefix: 'The steam car was too expensive for many people and its design was constantly being altered. Under',
                                suffix: 'cars were produced before the company went out of business.'
                            },
                            {
                                prefix: 'However, even today, there are Model Es on the road in the US. They are straightforward to maintain, and they satisfy California\'s',
                                suffix: 'emissions laws.'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Reading Passage 3",
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 27-40</strong> which are based on Reading Passage 3 below.</span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>The case for mixed-ability classes</strong></span></h2>
                <p><span style="font-size: large;">Picture this scene. It's an English literature lesson in a UK school, and the teacher has just read an extract from Shakespeare's <em>Romeo</em> <em>and</em> <em>Juliet</em> with a class of 15-year-olds. He's given some of the students copies of <em>No</em> <em>Fear</em> <em>Shakespeare</em>, a kid-friendly translation of the original. For three students, even these literacy demands are beyond them. Another girl simply can't focus and he gives her pens and paper to draw with. The teacher can ask the <em>No</em> <em>Fear</em> group to identify the key characters and maybe provide a tentative plot summary. He can ask most of the class about character development, and five of them might be able to support their statements with textual evidence. Now two curious students are wondering whether Shakespeare advocates living a life of moderation or one of passionate engagement.</span></p>
                <p><span style="font-size: large;">As a teacher myself, I'd think my lesson would be going rather well if the discussion went as described above. But wouldn't this kind of class work better if there weren't such a huge gap between the top and the bottom? If we put all the kids who needed literacy support into one class, and all the students who want to discuss the virtue of moderation into another?</span></p>
                <p><span style="font-size: large;">The practice of 'streaming', or 'tracking', involves separating students into classes depending on their diagnosed levels of attainment. At a macro level, it requires the establishment of academically selective schools for the brightest students, and comprehensive schools for the rest. Within schools, it means selecting students into a 'stream' of general ability, or 'sets' of subject-specific ability. The practice is intuitively appealing to almost every stakeholder.</span></p>
                <p><span style="font-size: large;">I have heard the mixed-ability model attacked by way of analogy: a group hike. The fittest in the group take the lead and set a brisk pace, only to have to stop and wait every 20 minutes. This is frustrating, and their enthusiasm wanes. Meanwhile, the slowest ones are not only embarrassed but physically struggling to keep up. What's worse, they never get a long enough break. They honestly just want to quit. Hiking, they feel, is not for them.</span></p>
                <p><span style="font-size: large;">Mixed-ability classes bore students, frustrate parents and bum out teachers. The brightest ones will never summit Mount Qomolangma, and the stragglers won't enjoy the lovely stroll in the park they are perhaps more suited to. Individuals suffer at the demands of the collective, mediocrity prevails. So: is learning like hiking?</span></p>
                <p><span style="font-size: large;">The current pedagogical paradigm is arguably that of constructivism, which emerged out of the work of psychologist Lev Vygotsky. In the 1930s, Vygotsky emphasised the importance of targeting a student's specific 'zone of proximal development' (ZPD). This is the gap between what they can achieve only with support – teachers, textbooks, worked examples, parents and so on – and what they can achieve independently. The purpose of teaching is to provide and then gradually remove this 'scaffolding' until they are autonomous. If we accept this model, it follows that streaming students with similar ZPDs would be an efficient and effective solution. And that forcing everyone on the same hike – regardless of aptitude – would be madness.</span></p>
                <p><span style="font-size: large;">Despite all this, there is limited empirical evidence to suggest that streaming results in better outcomes for students. Professor John Hattie, director of the Melbourne Education Research Institute, notes that 'tracking has minimal effects on learning outcomes'. What is more, streaming appears to significantly – and negatively – affect those students assigned to the lowest sets. These students tend to have much higher representation of low socioeconomic class. Less significant is the small benefit for those lucky clever students in the higher sets. The overall result is that the smart stay smart and the dumb get dumber, further entrenching the social divide.</span></p>
                <p><span style="font-size: large;">In the latest update of Hattie's influential meta-analysis of factors influencing student achievement, one of the most significant factors is the teachers' estimate of achievement. Streaming students by diagnosed achievement automatically limits what the teacher feels the student is capable of. Meanwhile, in a mixed environment, teachers' estimates need to be more diverse and flexible.</span></p>
                <p><span style="font-size: large;">While streaming might seem to help teachers effectively target a student's ZPD, it can underestimate the importance of peer-to-peer learning. A crucial aspect of constructivist theory is the role of the MKO – 'more knowledgeable other' – in knowledge construction. While teachers are traditionally the MKOs in classrooms, the value of knowledgeable student peers must not go unrecognised either.</span></p>
                <p><span style="font-size: large;">I find it amazing to watch students get over an idea to their peers in ways that I would never think of. They operate with different language tools and different social tools from teachers and, having just learnt it themselves, they possess similar cognitive structures to their struggling classmates. There is also something exciting about passing on skills and knowledge that you yourself have just mastered – a certain pride and zeal, a certain freshness to the interaction between 'teacher' and 'learner' that is often lost by the expert for whom the steps are obvious and the joy of discovery forgotten.</span></p>
                <p><span style="font-size: large;">Having a variety of different abilities in a collaborative learning environment provides valuable resources for helping students meet their learning needs, not to mention improving their communication and social skills. And today, more than ever, we need the many to flourish – not suffer at the expense of a few bright stars. Once a year, I go on a hike with my class, a mixed bunch of students. It is challenging. The fittest students realise they need to encourage the reluctant. There are lookouts who report back, and extra items to carry for others. We make it – together.</span></p>
                `,
                questions: [
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 27,
                        title: 'Questions 27-30',
                        instruction: 'Choose the correct letter, A, B, C or D.',
                        items: [
                            {
                                question: 'The writer describes the Romeo and Juliet lesson in order to demonstrate',
                                options: [
                                    { value: 'A', text: 'how few students are interested in literature.' },
                                    { value: 'B', text: 'how a teacher handles a range of learning needs.' },
                                    { value: 'C', text: 'how unsuitable Shakespeare is for most teenagers.' },
                                    { value: 'D', text: 'how weaker students can disrupt their classmates\' learning.' }
                                ]
                            },
                            {
                                question: 'What does the writer say about streaming in the third paragraph?',
                                options: [
                                    { value: 'A', text: 'It has a very broad appeal.' },
                                    { value: 'B', text: 'It favours cleverer students.' },
                                    { value: 'C', text: 'It is relatively simple to implement.' },
                                    { value: 'D', text: 'It works better in some schools than others.' }
                                ]
                            },
                            {
                                question: 'What idea is suggested by the reference to Mount Qomolangma in the fifth paragraph?',
                                options: [
                                    { value: 'A', text: 'students following unsuitable paths' },
                                    { value: 'B', text: 'students attempting interesting tasks' },
                                    { value: 'C', text: 'students not achieving their full potential' },
                                    { value: 'D', text: 'students not being aware of their limitations' }
                                ]
                            },
                            {
                                question: 'What does the word \'scaffolding\' in the sixth paragraph refer to?',
                                options: [
                                    { value: 'A', text: 'the factors which prevent a student from learning effectively' },
                                    { value: 'B', text: 'the environment where most of a student\'s learning takes place' },
                                    { value: 'C', text: 'the assistance given to a student in their initial stages of learning' },
                                    { value: 'D', text: 'the setting of appropriate learning targets for a student\'s aptitude' }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'summary-completion',
                        startQuestionNumber: 31,
                        title: 'Questions 31-35',
                        instruction: 'Complete the summary using the list of phrases, A-I, below.',
                        sectionTitle: 'Is streaming effective?',
                        options: [
                            { value: 'A', text: 'wrong classes' },
                            { value: 'B', text: 'lower expectations' },
                            { value: 'C', text: 'average learners' },
                            { value: 'D', text: 'bottom sets' },
                            { value: 'E', text: 'brightest pupils' },
                            { value: 'F', text: 'disadvantaged backgrounds' },
                            { value: 'G', text: 'weaker students' },
                            { value: 'H', text: 'higher achievements' },
                            { value: 'I', text: 'positive impressions' }
                        ],
                        items: [
                            {
                                prefix: 'According to Professor John Hattie of the Melbourne Education Research Institute there is very little indication that streaming leads to',
                                suffix: '. He points out that, in schools which use streaming, the most significant impact is on those students placed in the'
                            },
                            {
                                prefix: '',
                                suffix: ', especially where a large proportion of them have'
                            },
                            {
                                prefix: '',
                                suffix: '. Meanwhile, for the'
                            },
                            {
                                prefix: '',
                                suffix: ', there appears to be only minimal advantage. A further issue is that teachers tend to have'
                            },
                            {
                                prefix: '',
                                suffix: 'of students in streamed groups.'
                            }
                        ]
                    },
                    {
                        type: 'yes-no-not-given',
                        startQuestionNumber: 36,
                        title: 'Questions 36-40',
                        instruction: 'Do the following statements agree with the views of the writer in Reading Passage 3?',
                        options: [
                            { value: 'YES', description: 'if the statement agrees with the views of the writer' },
                            { value: 'NO', description: 'if the statement contradicts the views of the writer' },
                            { value: 'NOT GIVEN', description: 'if it is impossible to say what the writer thinks about this' }
                        ],
                        items: [
                            { statement: 'The Vygotsky model of education supports the concept of a mixed-ability class.' },
                            { statement: 'Some teachers are uncertain about allowing students to take on MKO roles in the classroom.' },
                            { statement: 'It can be rewarding to teach knowledge which you have only recently acquired.' },
                            { statement: 'The priority should be to ensure that the highest-achieving students attain their goals.' },
                            { statement: 'Taking part in collaborative outdoor activities with teachers and classmates can improve student outcomes in the classroom.' }
                        ]
                    }
                ]
            }
        ]
    },
    {
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
    },
    {
        id: 5,
        title: 'Reading CAM 17 Test 1',
        explanation: "https://drive.google.com/file/d/14eGTicPpKveeYijOMggj2bKMQK7OY3AM/view?usp=sharing",
        image: 'https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam-17-test-1.jpg',
        correctAnswers: [
            // Q1-6: Fill in blanks
            'population', 'suburbs', 'businessmen', 'funding', 'press', 'soil',
            // Q7-13: True/False/Not Given
            'FALSE', 'NOT GIVEN', 'TRUE', 'TRUE', 'FALSE', 'FALSE', 'NOT GIVEN',
            // Q14-17: Paragraph matching  
            'A', 'F', 'E', 'D',
            // Q18-22: Summary completion
            'fortress', 'bullfights', 'opera', 'salt', 'shops',
            // Q23-26: Multiple choice
            'C', 'D', 'B', 'E',
            // Q27-31: Matching
            'H', 'J', 'F', 'B', 'D',
            // Q32-35: Yes/No/Not Given
            'NOT GIVEN', 'NO', 'NO', 'YES',
            // Q36-40: Multiple choice
            'B', 'C', 'A', 'B', 'D'
        ],
        passages: [
            {
                title: `Reading Passage 1`,
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span><span style="font-size: 14px; text-align: left; color: #353535;"></span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>The development of the London underground railway</strong></span></h2>
<p><span style="font-size: large;">In the first half of the 1800s, London's population grew at an astonishing rate, and the central area became increasingly congested. In addition, the expansion of the overground railway network resulted in more and more passengers arriving in the capital. However, in 1846, a Royal Commission decided that the railways should not be allowed to enter the City, the capital's historic and business centre. The result was that the overground railway stations formed a ring around the City. The area within consisted of poorly built, overcrowded slums and the streets were full of horse-drawn traffic. Crossing the City became a nightmare. It could take an hour and a half to travel 8 km by horse-drawn carriage or bus. Numerous schemes were proposed to resolve these problems, but few succeeded.</span></p>
<p><span style="font-size: large;">Amongst the most vocal advocates for a solution to London's traffic problems was Charles Pearson, who worked as a solicitor for the City of London. He saw both social and economic advantages in building an underground railway that would link the overground railway stations together and clear London slums at the same time. His idea was to relocate the poor workers who lived in the inner-city slums to newly constructed suburbs, and to provide cheap rail travel for them to get to work. Pearson's ideas gained support amongst some businessmen and in 1851 he submitted a plan to Parliament. It was rejected, but coincided with a proposal from another group for an underground connecting line, which Parliament passed.</span></p>
<p><span style="font-size: large;">The two groups merged and established the Metropolitan Railway Company in August 1854. The company's plan was to construct an underground railway line from the Great Western Railway's (GWR) station at Paddington to the edge of the City at Farringdon Street – a distance of almost 5 km. The organisation had difficulty in raising the funding for such a radical and expensive scheme, not least because of the critical articles printed by the press. Objectors argued that the tunnels would collapse under the weight of traffic overhead, buildings would be shaken and passengers would be poisoned by the emissions from the train engines. However, Pearson and his partners persisted.</span></p>
<p><span style="font-size: large;">The GWR, aware that the new line would finally enable them to run trains into the heart of the City, invested almost £250,000 in the scheme. Eventually, over a five-year period, £1m was raised. The chosen route ran beneath existing main roads to minimise the expense of demolishing buildings. Originally scheduled to be completed in 21 months, the construction of the underground line took three years. It was built just below street level using a technique known as 'cut and cover'. A trench about ten metres wide and six metres deep was dug, and the sides temporarily help up with timber beams. Brick walls were then constructed, and finally a brick arch was added to create a tunnel. A two-metre-deep layer of soil was laid on top of the tunnel and the road above rebuilt.</span></p>
<p><span style="font-size: large;">The Metropolitan line, which opened on 10 January 1863, was the world's first underground railway. On its first day, almost 40,000 passengers were carried between Paddington and Farringdon, the journey taking about 18 minutes. By the end of the Metropolitan's first year of operation, 9.5 million journeys had been made.</span></p>
<p><span style="font-size: large;">Even as the Metropolitan began operation, the first extensions to the line were being authorised; these were built over the next five years, reaching Moorgate in the east to London and Hammersmith in the west. The original plan was to pull the trains with steam locomotives, using firebricks in the boilers to provide steam, but these engines were never introduced. Instead, the line used specially designed locomotives that were fitted with water tanks in which steam could be condensed. However, smoke and fumes remained a problem, even though ventilation shafts were added to the tunnels.</span></p>
<p><span style="font-size: large;">Despite the extension of the underground railway, by the 1880s, congestion on London's streets had become worse. The problem was partly that the existing underground lines formed a circuit around the centre of London and extended to the suburbs, but did not cross the capital's centre. The 'cut and cover' method of construction was not an option in this part of the capital. The only alternative was to tunnel deep underground.</span></p>
<p><span style="font-size: large;">Although the technology to create these tunnels existed, steam locomotives could not be used in such a confined space. It wasn't until the development of a reliable electric motor, and a means of transferring power from the generator to a moving train, that the world's first deep-level electric railway, the City &amp; South London, became possible. The line opened in 1890, and ran from the City to Stockwell, south of the River Thames. The trains were made up of three carriages and driven by electric engines. The carriages were narrow and had tiny windows just below the roof because it was thought that passengers would not want to look out at the tunnel walls. The line was not without its problems, mainly caused by an unreliable power supply, Although the City &amp; South London Railway was a great technical achievement, it did not make a profit. Then, in 1900, the Central London Railway, known as the 'Tuppenny Tube', began operation using new electric locomotives. It was very popular and soon afterwards new railways and extensions were added to the growing tube network. By 1907, the heart of today's Underground system was in place.</span></p>
                `,
                questions: [
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 1,
                        title: 'Questions 1-6',
                        instruction: 'Complete the notes below.',
                        wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                        sectionTitle: 'The London underground railway',
                        items: [
                            {
                                prefix: 'The',
                                suffix: 'of London increased rapidly between 1800 and 1850'
                            },
                            {
                                prefix: 'Building the railway would make it possible to move people to better housing in the',
                                suffix: ''
                            },
                            {
                                prefix: 'A number of',
                                suffix: 'agreed with Pearson\'s idea'
                            },
                            {
                                prefix: 'The company initially had problems getting the',
                                suffix: 'needed for the project'
                            },
                            {
                                prefix: 'Negative articles about the project appeared in the',
                                suffix: ''
                            },
                            {
                                prefix: 'With the completion of the brick arch, the tunnel was covered with',
                                suffix: ''
                            }
                        ]
                    },
                    {
                        type: 'true-false-not-given',
                        startQuestionNumber: 7,
                        title: 'Questions 7-13',
                        instruction: 'Do the following statements agree with the information given in Reading Passage 1?',
                        options: [
                            { value: 'TRUE', description: 'if the statement agrees with the information' },
                            { value: 'FALSE', description: 'if the statement contradicts the information' },
                            { value: 'NOT GIVEN', description: 'if there is no information on this' }
                        ],
                        items: [
                            { statement: 'Other countries had built underground railways before the Metropolitan line opened.' },
                            { statement: 'More people than predicted travelled on the Metropolitan line on the first day.' },
                            { statement: 'The use of ventilation shafts failed to prevent pollution in the tunnels.' },
                            { statement: 'A different approach from the \'cut and cover\' technique was required in London\'s central area.' },
                            { statement: 'The windows on City & South London trains were at eye level.' },
                            { statement: 'The City & South London Railway was a financial success.' },
                            { statement: 'Trains on the \'Tuppenny Tube\' nearly always ran on time.' }
                        ]
                    }
                ]
            },
            {
                title: `Reading Passage 2`,
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong>&nbsp;which are based on Reading Passage 2 below.</span><span style="font-size: 14px;">&nbsp;</span></p>
<h2 style="text-align: center;"><span style="font-size: xx-large;"><strong>Stadiums: past, present and future</strong></span></h2>
<p><span style="font-size: large;"><strong>A</strong></span></p>
<p><span style="font-size: large;">Stadiums are among the oldest forms of urban architecture: vast stadiums where the public could watch sporting events were at the centre of western city life as far back as the ancient Greek and Roman Empires, well before the construction of the great medieval cathedrals and the grand 19th- and 20th-century railway stations which dominated urban skylines in later eras.</span></p>
<p><span style="font-size: large;">Today, however, stadiums are regarded with growing scepticism. Construction costs can soar above £1 billion, and stadiums finished for major events such as the Olympic Games or the FIFA World Cup have notably fallen into disuse and disrepair.</span></p>
<p><span style="font-size: large;">But this need not be the cause. History shows that stadiums can drive urban development and adapt to the culture of every age. Even today, architects and planners are finding new ways to adapt the mono-functional sports arenas which became emblematic of modernisation during the 20th century.</span></p>
<p><span style="font-size: large;"><strong>B</strong></span></p>
<p><span style="font-size: large;">The amphitheatre* of Arles in southwest France, with a capacity of 25,000 spectators, is perhaps the best example of just how versatile stadiums can be. Built by the Romans in 90 AD, it became a fortress with four towers after the fifth century, and was then transformed into a village containing more than 200 houses. With the growing interest in conservation during the 19th century, it was converted back into an arena for the staging of bullfights, thereby returning the structure to its original use as a venue for public spectacles.</span></p>
<p><span style="font-size: large;">Another example is the imposing arena of Verona in northern Italy, with space for 30,000 spectators, which was built 60 years before the Arles amphitheatre and 40 years before Rome's famous Colosseum. It has endured the centuries and is currently considered one of the world's prime sites for opera, thanks to its outstanding acoustics.</span></p>
<p><span style="font-size: large;"><strong>C</strong></span></p>
<p><span style="font-size: large;">The area in the centre of the Italian town of Lucca, known as the Piazza dell' Anfiteatro, is yet another impressive example of an amphitheatre becoming absorbed into the fabric of the city. The site evolved in a similar way to Arles and was progressively filled with buildings from the Middle Ages until the 19th century, variously used as houses, a salt depot and a prison. But rather than reverting to an arena, it became a market square, designed by Romanticist architect Lorenzo Nottolini. Today, the ruins of the amphitheatre remain embedded in the various shops and residences surrounding the public square.</span></p>
<p><span style="font-size: large;"><strong>D</strong></span></p>
<p><span style="font-size: large;">There are many similarities between modern stadiums and the ancient amphitheatres intended for games. But some of the flexibility was lost at the beginning of the 20th century, as stadiums were developed using new products such as steel and reinforced concrete, and made use of bright lights for night-time matches.</span></p>
<p><span style="font-size: large;">Many such stadiums are situated in suburban areas, designed for sporting use only and surrounded by parking lots. These factors mean that they may not be as accessible to the general public, require more energy to run and contribute to urban heat.</span></p>
<p><span style="font-size: large;"><strong>E</strong></span></p>
<p><span style="font-size: large;">But many of today's most innovative architects see scope for the stadium to help improve the city. Among the current strategies, two seem to be having particular success: the stadium as an urban hub, and as a power plant.</span></p>
<p><span style="font-size: large;">There's a growing trend for stadiums to be equipped with public spaces and services that serve a function beyond sport, such as hotels, retail outlets, conference centres, restaurants and bars, children's playgrounds and green space. Creating mixed-use developments such as this reinforces compactness and multi-functionality, making more efficient use of land and helping to regenerate urban spaces.</span></p>
<p><span style="font-size: large;">This opens the space up to families and a wider cross-section of society, instead of catering only to sportspeople and supporters. There have been many examples of this in the UK: the mixed-use facilities at Wembley and Old Trafford have become a blueprint for many other stadiums in the world.</span></p>
<p><span style="font-size: large;"><strong>F</strong></span></p>
<p><span style="font-size: large;">The phenomenon of stadium as power stations has arisen from the idea that energy problems can be overcome by integrating interconnected buildings by means of a smart grid, which is an electricity supply network that uses digital communications technology to detect and react to local changes in usage, without significant energy losses. Stadiums are ideal for these purposes, because their canopies have a large surface area for fitting photovoltaic panels and rise high enough (more than 40 metres) to make use of micro wind turbines.</span></p>
<p><span style="font-size: large;">Freiburg Mage Solar Stadium in Germany is the first of a new wave of stadiums as power plants, which also includes the Amsterdam Arena and the Kaohsiung Stadium. The latter, inaugurated in 2009, has 8,844 photovoltaic panels producing up to 1.14 GWh of electricity annually. This reduces the annual output of carbon dioxide by 660 tons and supplies up to 80 percent of the surrounding area when the stadium is not in use. This is proof that a stadium can serve its city, and have a decidedly positive impact in terms of reduction of CO2 emissions.</span></p>
<p><span style="font-size: large;"><strong>G</strong></span></p>
<p><span style="font-size: large;">Sporting arenas have always been central to the life and culture of cities. In every era, the stadium has acquired new value and uses: from military fortress to residential village, public space to theatre and most recently a field for experimentation in advanced engineering. The stadium of today now brings together multiple functions, thus helping cities to create a sustainable future.</span></p>
<p><span style="font-size: large;">—————-</span></p>
<p><span style="font-size: medium;">* amphitheatre: (especially in Greek and Roman architecture) an open circular or oval building with a central space surrounded by tiers of seats for spectators, for the presentation of dramatic or sporting events</span></p>
                `,
                questions: [
                    {
                        type: 'paragraph-matching',
                        startQuestionNumber: 14,
                        title: 'Questions 14-17',
                        instruction: 'Reading Passage 2 has seven paragraphs, A-G. Which section contains the following information?',
                        paragraphRange: 'A-G',
                        note: 'You may use any letter more than once.',
                        items: [
                            { description: 'a mention of negative attitudes towards stadium building projects' },
                            { description: 'figures demonstrating the environmental benefits of a certain stadium' },
                            { description: 'examples of the wide range of facilities available at some new stadiums' },
                            { description: 'reference to the disadvantages of the stadiums built during a certain era' }
                        ]
                    },
                    {
                        type: 'sentence-completion',
                        startQuestionNumber: 18,
                        title: 'Questions 18-22',
                        instruction: 'Complete the summary below.',
                        wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                        sectionTitle: 'Roman amphitheatres',
                        items: [
                            {
                                prefix: 'The amphitheatre of Arles was converted first into a',
                                suffix: ', then into a residential area.'
                            },
                            {
                                prefix: 'It was finally converted into an arena for',
                                suffix: '.'
                            },
                            {
                                prefix: 'The arena in Verona is famous today as a venue for',
                                suffix: '.'
                            },
                            {
                                prefix: 'Lucca\'s amphitheatre was used for storage of',
                                suffix: '.'
                            },
                            {
                                prefix: 'It is now a market square with',
                                suffix: 'and homes.'
                            }
                        ]
                    },
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 23,
                        title: 'Questions 23-24',
                        instruction: 'Choose TWO letters, A-E.',
                        questionText: 'When comparing twentieth-century stadiums to ancient amphitheatres in Section D, which TWO negative features does the writer mention?',
                        numberOfAnswers: 2,
                        items: [
                            {
                                questionNumber: 23,
                                questionText: 'When comparing twentieth-century stadiums to ancient amphitheatres in Section D, which TWO negative features does the writer mention?',
                                options: [
                                    { value: 'A', text: 'They are less imaginatively designed.' },
                                    { value: 'B', text: 'They are less spacious.' },
                                    { value: 'C', text: 'They are in less convenient locations.' },
                                    { value: 'D', text: 'They are less versatile.' },
                                    { value: 'E', text: 'They are made of less durable materials' }
                                ]
                            },
                            {
                                questionNumber: 24,
                                questionText: 'When comparing twentieth-century stadiums to ancient amphitheatres in Section D, which TWO negative features does the writer mention?',
                                options: [
                                    { value: 'A', text: 'They are less imaginatively designed.' },
                                    { value: 'B', text: 'They are less spacious.' },
                                    { value: 'C', text: 'They are in less convenient locations.' },
                                    { value: 'D', text: 'They are less versatile.' },
                                    { value: 'E', text: 'They are made of less durable materials' }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 25,
                        title: 'Questions 25-26',
                        instruction: 'Choose TWO letters, A-E.',
                        questionText: 'Which TWO advantages of modern stadium design does the writer mention?',
                        numberOfAnswers: 2,
                        items: [
                            {
                                questionNumber: 25,
                                questionText: 'Which TWO advantages of modern stadium design does the writer mention?',
                                options: [
                                    { value: 'A', text: 'offering improved amenities for the enjoyment of sports events' },
                                    { value: 'B', text: 'bringing community life back into the city environment' },
                                    { value: 'C', text: 'facilitating research into solar and wind energy solutions' },
                                    { value: 'D', text: 'enabling local residents to reduce their consumption of electricity' },
                                    { value: 'E', text: 'providing a suitable site for the installation of renewable power generators' }
                                ]
                            },
                            {
                                questionNumber: 26,
                                questionText: 'Which TWO advantages of modern stadium design does the writer mention?',
                                options: [
                                    { value: 'A', text: 'offering improved amenities for the enjoyment of sports events' },
                                    { value: 'B', text: 'bringing community life back into the city environment' },
                                    { value: 'C', text: 'facilitating research into solar and wind energy solutions' },
                                    { value: 'D', text: 'enabling local residents to reduce their consumption of electricity' },
                                    { value: 'E', text: 'providing a suitable site for the installation of renewable power generators' }
                                ]
                            }
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
    },
    {
        id: 6,
        title: 'Reading CAM 17 Test 2',
        explanation: "https://drive.google.com/file/d/14eGTicPpKveeYijOMggj2bKMQK7OY3AM/view?usp=sharing",
        image: 'https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam-17-test-2.jpg',
        correctAnswers: [
            // Q1-5: Fill in blanks
            'rock', 'cave', 'clay', 'Essenes', 'Hebrew',
            // Q6-13: True/False/Not Given
            'NOT GIVEN', 'FALSE', 'TRUE', 'TRUE', 'FALSE', 'FALSE', 'TRUE', 'NOT GIVEN',
            // Q14-18: Paragraph matching
            'C', 'B', 'E', 'A', 'C',
            // Q19-23: Matching researchers
            'B', 'D', 'A', 'C', 'A',
            // Q24-26: Sentence completion
            'flavour', 'size', 'salt',
            // Q27-31: Multiple choice
            'D', 'A', 'A', 'C', 'A',
            // Q32-36: Yes/No/Not Given
            'NO', 'NOT GIVEN', 'YES', 'NO', 'NOT GIVEN',
            // Q37-40: Summary completion
            'F', 'D', 'E', 'B'
        ],
        passages: [
            {
                title: `Reading Passage 1`,
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span><span style="font-size: 14px; text-align: left; color: #353535;"></span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>The Dead Sea Scrolls</strong></span></h2>
<p><span style="font-size: large;">In late 1946 or early 1947, three Bedouin teenagers were tending their goats and sheep near the ancient settlement of Qumran, located on the northwest shore of the Dead Sea in what is now known as the West Bank. One of these young shepherds tossed a rock into an opening on the side of a cliff and was surprised to hear a shattering sound. He and his companions later entered the cave and stumbled across a collection of large clay jars, seven of which contained scrolls with writing on them. The teenagers took the seven scrolls to a nearby town where they were sold for a small sum to a local antiquities dealer. Word of the find spread, and Bedouins and archaeologists eventually unearthed tens of thousands of additional scroll fragments from 10 nearby caves; together they make up between 800 and 900 manuscripts. It soon became clear that this was one of the greatest archaeological discoveries ever made.</span></p>
<p><span style="font-size: large;">The origin of the Dead Sea Scrolls, which were written around 2,000 years ago between 150 BCE and 70 CE, is still the subject of scholarly debate even today. According to the prevailing theory, they are the work of a population that inhabited the area until Roman troops destroyed the settlement around 70 CE. The area was known as Judea at that time, and the people are thought to have belonged to a group called the Essenes, a devout Jewish sect.</span></p>
<p><span style="font-size: large;">The majority of the texts on the Dead Sea Scrolls are in Hebrew, with some fragments written in an ancient version of its alphabet thought to have fallen out of use in the fifth century BCE. But there are other languages as well. Some scrolls are in Aramaic, the language spoken by many inhabitants of the region from the sixth century BCE to the siege of Jerusalem in 70 CE. In addition, several texts feature translations of the Hebrew Bible into Greek.</span></p>
<p><span style="font-size: large;">The Dead Sea Scrolls include fragments from every book of the Old Testament of the Bible except for the Book of Esther. The only entire book of the Hebrew Bible preserved among the manuscripts from Qumran is Isaiah; this copy, dated to the first century BCE, is considered the earliest biblical manuscript still in existence. Along with biblical texts, the scrolls include documents about sectarian regulations and religious writings that do not appear in the Old Testament.</span></p>
<p><span style="font-size: large;">The writing on the Dead Sea Scrolls is mostly in black or occasionally red ink, and the scrolls themselves are nearly all made of neither parchment (animal skin) or an early form of paper called 'papyrus'. The only exception is the scroll numbered 3Q15, which was created out of a combination of copper and tin. Known as the Copper Scroll, this curious document features letters chiselled onto metal – perhaps, as some have theorized, to better withstand the passage of time. One of the most intriguing manuscripts from Qumran, this is a sort of ancient treasure map that lists dozens of gold and silver caches. Using an unconventional vocabulary and odd spelling, it describes 64 underground hiding places that supposedly contain riches buried for safekeeping. None of these hoards have been recovered, possibly because the Romans pillaged Judea during the first century CE. According to various hypotheses, the treasure belonged to local people, or was rescued from the Second Temple before its destruction or never existed to begin with.</span></p>
<p><span style="font-size: large;">Some of the Dead Sea Scrolls have been on interesting journeys. In 1948, a Syrian Orthodox archbishop known as Mar Samuel acquired four of the original seven scrolls from a Jerusalem shoemaker and part-time antiquity dealer, paying less than $100 for them. He then travelled to the United States and unsuccessfully offered them to a number of universities, including Yale. Finally, in 1954, he placed an advertisement in the business newspaper <em>The Wall Street Journal</em> – under the category 'Miscellaneous Items for Sale' – that read: 'Biblical Manuscripts dating back to at least 200 B.C. are for sale. This would be an ideal gift to an educational or religious institution by an individual or group.' Fortunately, Israeli archaeologist and statesman Yigael Yadin negotiated their purchase and brought the scrolls back to Jerusalem, where they remain to this day.</span></p>
<p><span style="font-size: large;">In 2017, researchers from the University of Haifa restored and deciphered one of the last untranslated scrolls. The university's Eshbal Ratson and Jonathan Ben-Dov spent one year reassembling the 60 fragments that make up the scroll. Deciphered from a band of coded text on parchment, the find provides insight into the community of people who wrote it and the 364-day calendar they would have used. The scroll names celebrations that indicate shifts in seasons and details two yearly religious events known from another Dead Sea Scroll. Only one more known scroll remains untranslated.</span></p>
                `,
                questions: [
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 1,
                        title: 'Questions 1-5',
                        instruction: 'Complete the notes below.',
                        wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                        sectionTitle: 'The Dead Sea Scrolls',
                        items: [
                            {
                                prefix: 'Discovery - Qumran, 1946/7: three Bedouin shepherds in their teens were near an opening on side of cliff. Heard a noise of breaking when one teenager threw a',
                                suffix: ''
                            },
                            {
                                prefix: 'Teenagers went into the',
                                suffix: 'and found a number of containers made of'
                            },
                            {
                                prefix: '',
                                suffix: '. The scrolls: date from between 150 BCE and 70 CE, thought to have been written by group of people known as the'
                            },
                            {
                                prefix: '',
                                suffix: '. Written mainly in the'
                            },
                            {
                                prefix: '',
                                suffix: 'language. Most are on religious topics, written using ink on parchment or papyrus'
                            }
                        ]
                    },
                    {
                        type: 'true-false-not-given',
                        startQuestionNumber: 6,
                        title: 'Questions 6-13',
                        instruction: 'Do the following statements agree with the information given in Reading Passage 1?',
                        options: [
                            { value: 'TRUE', description: 'if the statement agrees with the information' },
                            { value: 'FALSE', description: 'if the statement contradicts the information' },
                            { value: 'NOT GIVEN', description: 'if there is no information on this' }
                        ],
                        items: [
                            { statement: 'The Bedouin teenagers who found the scrolls were disappointed by how little money they received for them.' },
                            { statement: 'There is agreement among academics about the origin of the Dead Sea Scrolls.' },
                            { statement: 'Most of the books of the Bible written on the scrolls are incomplete.' },
                            { statement: 'The information on the Copper Scroll is written in an unusual way.' },
                            { statement: 'Mar Samuel was given some of the scrolls as a gift.' },
                            { statement: 'In the early 1950s, a number of educational establishments in the US were keen to buy scrolls from Mar Samuel.' },
                            { statement: 'The scroll that was pieced together in 2017 contains information about annual occasions in the Qumran area 2,000 years ago.' },
                            { statement: 'Academics at the University of Haifa are currently researching how to decipher the final scroll.' }
                        ]
                    }
                ]
            },
            {
                title: `Reading Passage 2`,
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong>&nbsp;which are based on Reading Passage 2 below.</span><span style="font-size: 14px;">&nbsp;</span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>A second attempt at domesticating the tomato</strong></span></h2>
<p><span style="font-size: large;"><strong>A</strong></span></p>
<p><span style="font-size: large;">It took at least 3,000 years for humans to learn how to domesticate the wild tomato and cultivate it for food. Now two separate teams in Brazil and China have done it all over again in less than three years. And they have done it better in some ways, as the re-domesticated tomatoes are more nutritious than the ones we eat at present.</span></p>
<p><span style="font-size: large;">This approach relies on the revolutionary CRISPR genome editing technique, in which changes are deliberately made to the DNA of a living cell, allowing genetic material to be added, removed or altered. The technique could not only improve existing crops, but could also be used to turn thousands of wild plants into useful and appealing foods. In fact, a third team in the US has already begun to do this with a relative of the tomato called the groundcherry.</span></p>
<p><span style="font-size: large;">This fast-track domestication could help make the world's food supply healthier and far more resistant to diseases, such as the rust fungus devastating wheat crops.</span></p>
<p><span style="font-size: large;">'This could transform what we eat,' says Jorg Kudla at the University of Munster in Germany, a member of the Brazilian team. 'There are 50,000 edible plants in the world, but 90 percent of our energy comes from just 15 crops.'</span></p>
<p><span style="font-size: large;">'We can now mimic the known domestication course of major crops like rice, maize, sorghum or others,' says Caixia Gao of the Chinese Academy of Sciences in Beijing. 'Then we might try to domesticate plants that have never been domesticated.'</span></p>
<p><span style="font-size: large;"><strong>B</strong></span></p>
<p><span style="font-size: large;">Wild tomatoes, which are native to the Andes region in South America, produce pea-sized fruits. Over many generations, peoples such as the Aztecs and Incas transformed the plant by selecting and breeding plants with mutations* in their genetic structure, which resulted in desirable traits such as larger fruit.</span></p>
<p><span style="font-size: large;">But every time a single plant with a mutation is taken from a larger population for breeding, much genetic diversity is lost. And sometimes the desirable mutations come with less desirable traits. For instance, the tomato strains grown for supermarkets have lost much of their flavour.</span></p>
<p><span style="font-size: large;">By comparing the genomes of modern plants to those of their wild relatives, biologists have been working out what genetic changes occurred as plants were domesticated. The teams in Brazil and China have now used this knowledge to reintroduce these changes from scratch while maintaining or even enhancing the desirable traits of wild strains.</span></p>
<p><span style="font-size: large;"><strong>C</strong></span></p>
<p><span style="font-size: large;">Kudla's team made six changes altogether. For instance, they tripled the size of fruit by editing a gene called FRUIT WEIGHT, and increased the number of tomatoes per truss by editing another called MULTIFLORA.</span></p>
<p><span style="font-size: large;">While the historical domestication of tomatoes reduced levels of the red pigment lycopene – thought to have potential health benefits – the team in Brazil managed to boost it instead. The wild tomato has twice as much lycopene as cultivated ones; the newly domesticated one has five times as much.</span></p>
<p><span style="font-size: large;">'They are quite tasty,' says Kudla. 'A little bit strong. And very aromatic.'</span></p>
<p><span style="font-size: large;">The team in China re-domesticated several strains of wild tomatoes with desirable traits lost in domesticated tomatoes. In this way they managed to create a strain resistant to a common disease called bacterial spot race, which can devastate yields. They also created another strain that is more salt tolerant – and has higher levels of vitamin C.</span></p>
<p><span style="font-size: large;"><strong>D</strong></span></p>
<p><span style="font-size: large;">Meanwhile, Joyce Van Eck at the Boyce Thompson Institute in New York state decided to use the same approach to domesticate the groundcherry or goldenberry (<em>Physalis pruinosa</em>) for the first time. This fruit looks similar to the closely related Cape gooseberry (<em>Physalis peruviana</em>).</span></p>
<p><span style="font-size: large;">Groundcherries are already sold to a limited extent in the US but they are hard to produce because the plant has a sprawling growth habit and the small fruits fall off the branches when ripe. Van Eck's team has edited the plants to increase fruit size, make their growth more compact and to stop fruits dropping. 'There's potential for this to be a commercial crop,' says Van Eck. But she adds that taking the work further would be expensive because of the need to pay for a licence for the CRISPR technology and get regulatory approval.</span></p>
<p><span style="font-size: large;"><strong>E</strong></span></p>
<p><span style="font-size: large;">This approach could boost the use of many obscure plants, says Jonathan Jones of the Sainsbury Lab in the UK. But it will be hard for new foods to grow so popular with farmers and consumers that they become new staple crops, he thinks.</span></p>
<p><span style="font-size: large;">The three teams already have their eye on other plants that could be 'catapulted into the mainstream', including foxtail, oat-grass and cowpea. By choosing wild plants that are drought or heat tolerant, says Gao, we could create crops that will thrive even as the planet warms.</span></p>
<p><span style="font-size: large;">But Kudla didn't want to reveal which species were in his team's sights, because CRISPR has made the process so easy. 'Any one with the right skills could go to their lab and do this.'</span></p>
<p><span style="font-size: large;">———————-</span></p>
<p><span style="font-size: medium;">* mutations: changes in an organism's genetic structure that can be passed down to later generations</span></p>
                `,
                questions: [
                    {
                        type: 'paragraph-matching',
                        startQuestionNumber: 14,
                        title: 'Questions 14-18',
                        instruction: 'Reading Passage 2 has five paragraphs, A-E. Which section contains the following information?',
                        paragraphRange: 'A-E',
                        note: 'You may use any letter more than once.',
                        items: [
                            { description: 'a reference to a type of tomato that can resist a dangerous infection' },
                            { description: 'an explanation of how problems can arise from focusing only on a certain type of tomato plant' },
                            { description: 'a number of examples of plants that are not cultivated at present but could be useful as food sources' },
                            { description: 'a comparison between the early domestication of the tomato and more recent research' },
                            { description: 'a personal reaction to the flavour of a tomato that has been genetically edited' }
                        ]
                    },
                    {
                        type: 'matching',
                        startQuestionNumber: 19,
                        title: 'Questions 19-23',
                        instruction: 'Look at the following statements (Questions 19-23) and the list of researchers below. Match each statement with the correct researcher, A-D.',
                        note: 'You may use any letter more than once.',
                        options: [
                            { value: 'A', label: 'Jorg Kudla' },
                            { value: 'B', label: 'Caixia Gao' },
                            { value: 'C', label: 'Joyce Van Eck' },
                            { value: 'D', label: 'Jonathan Jones' }
                        ],
                        items: [
                            { description: 'Domestication of certain plants could allow them to adapt to future environmental challenges.' },
                            { description: 'The idea of growing and eating unusual plants may not be accepted on a large scale.' },
                            { description: 'It is not advisable for the future direction of certain research to be made public.' },
                            { description: 'Present efforts to domesticate one wild fruit are limited by the costs involved.' },
                            { description: 'Humans only make use of a small proportion of the plant food available on Earth.' }
                        ]
                    },
                    {
                        type: 'sentence-completion',
                        startQuestionNumber: 24,
                        title: 'Questions 24-26',
                        instruction: 'Complete the sentences below.',
                        wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                        items: [
                            {
                                prefix: 'An undesirable trait such as loss of',
                                suffix: 'may be caused by a mutation in a tomato gene.'
                            },
                            {
                                prefix: 'By modifying one gene in a tomato plant, researchers made the tomato three times its original',
                                suffix: '.'
                            },
                            {
                                prefix: 'A type of tomato which was not badly affected by',
                                suffix: ', and was rich in vitamin C, was produced by a team of researchers in China.'
                            }
                        ]
                    }
                ]
            },
            {
                title: `Reading Passage 3`,
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 27-40</strong> which are based on Reading Passage 3 below.</span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Insight or evolution?</strong></span></h2>
<p><span style="font-size: large;"><em>Two scientists consider the origins of discoveries and other innovative behavior</em></span></p>
<p><span style="font-size: large;">Scientific discovery is popularly believed to result from the sheer genius of such intellectual stars as naturalist Charles Darwin and theoretical physicist Albert Einstein. Our view of such unique contributions to science often disregards the person's prior experience and the efforts of their lesser-known predecessors. Conventional wisdom also places great weight on insight in promoting breakthrough scientific achievements, as if ideas spontaneously pop into someone's head – fully formed and functional.</span></p>
<p><span style="font-size: large;">There may be some limited truth to this view. However, we believe that it largely misrepresents the real nature of scientific discovery, as well as that of creativity and innovation in many other realms of human endeavor.</span></p>
<p><span style="font-size: large;">Setting aside such greats as Darwin and Einstein – whose monumental contributions are duly celebrated – we suggest that innovation is more a process of trial and error, where two steps forward may sometimes come with one step back, as well as one or more stops to the right or left. This evolutionary view of human innovation undermines the notion of creative genius and recognizes the cumulative nature of scientific progress.</span></p>
<p><span style="font-size: large;">Consider one unheralded scientist: John Nicholson, a mathematical physicist working in the 1910s who postulated the existence of 'proto-elements' in outer space. By combining different numbers of weights of these proto-elements' atoms, Nicholson could recover the weights of all the elements in the then-known periodic table. These successes are all the more noteworthy given the fact that Nicholson was wrong about the presence of proto-elements: they do not actually exist. Yet, amid his often fanciful theories and wild speculations, Nicholson also proposed a novel theory about the structure of atoms. Niels Bohr, the Nobel prize-winning father of modern atomic theory, jumped off from this interesting idea to conceive his now-famous model of the atom.</span></p>
<p><span style="font-size: large;">What are we to make of this story? One might simply conclude that science is a collective and cumulative enterprise. That may be true, but there may be a deeper insight to be gleaned. We propose that science is constantly evolving, much as species of animals do. In biological systems, organisms may display new characteristics that result from random genetic mutations. In the same way, random, arbitrary or accidental mutations of ideas may help pave the way for advances in science. If mutations prove beneficial, then the animal or the scientific theory will continue to thrive and perhaps reproduce.</span></p>
<p><span style="font-size: large;">Support for this evolutionary view of behavioral innovation comes from many domains. Consider one example of an influential innovation in US horseracing. The so-called 'acey-deucy' stirrup placement, in which the rider's foot in his left stirrup is placed as much as 25 centimeters lower than the right, is believed to confer important speed advantages when turning on oval tracks. It was developed by a relatively unknown jockey named Jackie Westrope. Had Westrope conducted methodical investigations or examined extensive film records in a shrewd plan to outrun his rivals? Had he foreseen the speed advantage that would be conferred by riding acey-deucy? No. He suffered a leg injury, which left him unable to fully bend his left knee. His modification just happened to coincide with enhanced left-hand turning performance. This led to the rapid and widespread adoption of riding acey-deucy by many riders, a racing style which continues in today's thoroughbred racing.</span></p>
<p><span style="font-size: large;">Plenty of other stories show that fresh advances can arise from error, misadventure, and also pure serendipity – a happy accident. For example, in the early 1970s, two employees of the company 3M each had a problem: Spencer Silver had a product – a glue which was only slightly sticky – and no use for it, while his colleague Art Fry was trying to figure out how to affix temporary bookmarks in his hymn book without damaging its pages. The solution to both these problems was invention of the brilliantly simple yet phenomenally successful Post-It note. Such examples give lie to the claim that ingenious, designing minds are responsible for human creativity and invention. Far more banal and mechanical forces may be at work; forces that are fundamentally connected to the laws of science.</span></p>
<p><span style="font-size: large;">The notions of insight, creativity and genius are often invoked, but they remain vague and of doubtful scientific utility, especially when one considers the diverse and enduring contributions of individuals such as Plato, Leonardo da Vinci, Shakespeare, Beethoven, Galileo, Newton, Kepler, Curie, Pasteur and Edison. These notions merely label rather than explain the evolution of human innovations. We need another approach, and there is a promising candidate.</span></p>
<p><span style="font-size: large;">The Law of Effect was advanced by psychologist Edward Thorndike in 1898, some 40 years after Charles Darwin published his groundbreaking work on biological evolution, <em>On the Origin of Species</em>. This simple law holds that organisms tend to repeat successful behaviors and to refrain from performing unsuccessful ones. Just like Darwin's Law of Natural Selection, the Law of Effect involves an entirely mechanical process of variation and selection, without any end objective in sight.</span></p>
<p><span style="font-size: large;">Of course, the origin of human innovation demands much further study. In particular, the provenance of the raw material on which the Law of Effect operates is not as clearly known as that of the genetic mutations on which the Law of Natural Selection operates. The generation of novel ideas and behaviors may not be entirely random, but constrained by prior successes and failures – of the current individual (such as Bohr) or of predecessors (such as Nicholson).</span></p>
<p><span style="font-size: large;">The time seems right for abandoning the naïve notion of intelligent design and genius, and for scientifically exploring the true origins of creative behavior.</span></p>
                `,
                questions: [
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 27,
                        title: 'Questions 27-31',
                        instruction: 'Choose the correct letter, A, B, C or D.',
                        items: [
                            {
                                questionNumber: 27,
                                questionText: 'The purpose of the first paragraph is to',
                                options: [
                                    { value: 'A', text: 'defend particular ideas.' },
                                    { value: 'B', text: 'compare certain beliefs.' },
                                    { value: 'C', text: 'disprove a widely held view.' },
                                    { value: 'D', text: 'outline a common assumption.' }
                                ]
                            },
                            {
                                questionNumber: 28,
                                questionText: 'What are the writers doing in the second paragraph?',
                                options: [
                                    { value: 'A', text: 'criticising an opinion' },
                                    { value: 'B', text: 'justifying a standpoint' },
                                    { value: 'C', text: 'explaining an approach' },
                                    { value: 'D', text: 'supporting an argument' }
                                ]
                            },
                            {
                                questionNumber: 29,
                                questionText: 'In the third paragraph, what do the writers suggest about Darwin and Einstein?',
                                options: [
                                    { value: 'A', text: 'They represent an exception to a general rule.' },
                                    { value: 'B', text: 'Their way of working has been misunderstood.' },
                                    { value: 'C', text: 'They are an ideal which others should aspire to.' },
                                    { value: 'D', text: 'Their achievements deserve greater recognition.' }
                                ]
                            },
                            {
                                questionNumber: 30,
                                questionText: 'John Nicholson is an example of a person whose idea',
                                options: [
                                    { value: 'A', text: 'established his reputation as an influential scientist.' },
                                    { value: 'B', text: 'was only fully understood at a later point in history.' },
                                    { value: 'C', text: 'laid the foundations for someone else\'s breakthrough.' },
                                    { value: 'D', text: 'initially met with scepticism from the scientific community.' }
                                ]
                            },
                            {
                                questionNumber: 31,
                                questionText: 'What is the key point of interest about the \'acey-deucy\' stirrup placement?',
                                options: [
                                    { value: 'A', text: 'the simple reason why it was invented' },
                                    { value: 'B', text: 'the enthusiasm with which it was adopted' },
                                    { value: 'C', text: 'the research that went into its development' },
                                    { value: 'D', text: 'the cleverness of the person who first used it' }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'yes-no-not-given',
                        startQuestionNumber: 32,
                        title: 'Questions 32-36',
                        instruction: 'Do the following statements agree with the claims of the writer in Reading Passage 3?',
                        options: [
                            { value: 'YES', description: 'if the statement agrees with the claims of the writer' },
                            { value: 'NO', description: 'if the statement contradicts the claims of the writer' },
                            { value: 'NOT GIVEN', description: 'if it is impossible to say what the writer thinks about this' }
                        ],
                        items: [
                            { statement: 'Acknowledging people such as Plato or da Vinci as geniuses will help us understand the process by which great minds create new ideas.' },
                            { statement: 'The Law of Effect was discovered at a time when psychologists were seeking a scientific reason why creativity occurs.' },
                            { statement: 'The Law of Effect states that no planning is involved in the behaviour of organisms.' },
                            { statement: 'The Law of Effect sets out clear explanations about the sources of new ideas and behaviours.' },
                            { statement: 'Many scientists are now turning away from the notion of intelligent design and genius.' }
                        ]
                    },
                    {
                        type: 'summary-completion',
                        startQuestionNumber: 37,
                        title: 'Questions 37-40',
                        instruction: 'Complete the summary using the list of words, A-G, below.',
                        sectionTitle: 'The origins of creative behaviour',
                        options: [
                            { value: 'A', text: 'invention' },
                            { value: 'B', text: 'goals' },
                            { value: 'C', text: 'compromise' },
                            { value: 'D', text: 'mistakes' },
                            { value: 'E', text: 'luck' },
                            { value: 'F', text: 'inspiration' },
                            { value: 'G', text: 'experiments' }
                        ],
                        items: [
                            {
                                prefix: 'The traditional view of scientific discovery is that breakthroughs happen when a single great mind has sudden',
                                suffix: '. Although this can occur, it is not often the case.'
                            },
                            {
                                prefix: 'Advances are more likely to be the result of a longer process. In some cases, this process involves',
                                suffix: ', such as Nicholson\'s theory about proto-elements.'
                            },
                            {
                                prefix: 'In others, simple necessity may provoke innovation, as with Westrope\'s decision to modify the position of his riding stirrups. There is also often an element of',
                                suffix: ', for example, the coincidence of ideas that led to the invention of the Post-It note.'
                            },
                            {
                                prefix: 'With both the Law of Natural Selection and the Law of Effect, there may be no clear',
                                suffix: 'involved, but merely a process of variation and selection.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        title: 'Reading CAM 17 Test 3',
        explanation: "https://drive.google.com/file/d/14eGTicPpKveeYijOMggj2bKMQK7OY3AM/view?usp=sharing",
        image: 'https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam-17-test-3.jpg',
        correctAnswers: [
            // Q1-5: Fill in blanks
            'carnivorous', 'scent', 'pouch', 'fossil', 'habitat',
            // Q6-13: True/False/Not Given
            'TRUE', 'FALSE', 'NOT GIVEN', 'FALSE', 'NOT GIVEN', 'FALSE', 'TRUE', 'NOT GIVEN',
            // Q14-20: Paragraph matching
            'F', 'G', 'A', 'H', 'B', 'E', 'C',
            // Q21-22: Multiple choice
            'B', 'C',
            // Q23-26: Sentence completion
            'solid', 'Sumatran orangutan', 'carbon stocks', 'biodiversity',
            // Q27-31: Multiple choice
            'D', 'B', 'C', 'D', 'C',
            // Q32-35: Yes/No/Not Given
            'NO', 'YES', 'NOT GIVEN', 'NO',
            // Q36-40: Summary completion
            'H', 'D', 'I', 'B', 'F'
        ],
        passages: [
            {
                title: `Reading Passage 1`,
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span><span style="font-size: 14px; text-align: left; color: #353535;"></span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>The thylacine</strong></span></h2>
<p><span style="font-size: large;">The extinct thylacine, also known as the Tasmanian tiger, was a marsupial* that bore a superficial resemblance to a dog. Its most distinguishing feature was the 13-19 dark brown stripes over its back, beginning at the rear of the body and extending onto the tail. The thylacine's average nose-to-tail length for adult males was 162.6 cm, compared to 153.7 cm for females.</span></p>
<p><span style="font-size: large;">The thylacine appeared to occupy most types of terrain except dense rainforest, with open eucalyptus forest thought to be its prime habitat. In terms of feeding, it was exclusively carnivorous, and its stomach was muscular with an ability to distend so that it could eat large amounts of food at one time, probably an adaptation to compensate for long periods when hunting was unsuccessful and food scarce. The thylacine was not a fast runner and probably caught its prey by exhausting it during a long pursuit. During long-distance chases, thylacines were likely to have relied more on scent than any other sense. They emerged to hunt during the evening, night and early morning and tended to retreat to the hills and forest for shelter during the day. Despite the common name 'tiger', the thylacine had a shy, nervous temperament. Although mainly nocturnal, it was sighted moving during the day and some individuals were even recorded basking in the sun.</span></p>
<p><span style="font-size: large;">The thylacine had an extended breeding season from winter to spring, with indications that some breeding took place throughout the year. The thylacine, like all marsupials, was tiny and hairless when born. Newborns crawled into the pouch on the belly of their mother, and attached themselves to one of the four teats, remaining there for up to three months. When old enough to leave the pouch, the young stayed in a lair such as a deep rocky cave, well-hidden nest or hollow log, whilst the mother hunted.</span></p>
<p><span style="font-size: large;">Approximately 4,000 years ago, the thylacine was widespread throughout New Guinea and most of mainland Australia, as well as the island of Tasmania. The most recent, well-dated occurrence of a thylacine on the mainland is a carbon-dated fossil from Murray Cave in Western Australia, which is around 3,100 years old. Its extinction coincided closely with the arrival of wild dogs called dingoes in Australia and a similar predator in New Guinea. Dingoes never reached Tasmania, and most scientists see this as the main reason for the thylacine's survival there.</span></p>
<p><span style="font-size: large;">The dramatic decline of the thylacine in Tasmania, which began in the 1830s and continued for a century, is generally attributed to the relentless efforts of sheep farmers and bounty hunters** with shotguns. While this determined campaign undoubtedly played a large part, it is likely that various other factors also contributed to the decline and eventual extinction of the species. These include competition with wild dogs introduced by European settlers, loss of habitat along with the disappearance of prey species, and a distemper-like disease which may also have affected the thylacine.</span></p>
<p><span style="font-size: large;">There was only one successful attempt to breed a thylacine in captivity, at Melbourne Zoo in 1899. This was despite the large numbers that went through some zoos, particularly London Zoo and Tasmania's Hobart Zoo. The famous naturalist John Gould foresaw the thylacine's demise when he published his <em>Mammals of Australia </em>between 1848 and 1863, writing, 'The numbers of this singular animal will speedily diminish, extermination will have its full sway, and it will then, like the wolf of England and Scotland, be recorded as an animal of the past.'</span></p>
<p><span style="font-size: large;">However, there seems to have been little public pressure to preserve the thylacine, nor was much concern expressed by scientists at the decline of this species in the decades that followed. A notable exception was T.T. Flynn, Professor of Biology at the University of Tasmania. In 1914, he was sufficiently concerned about the scarcity of the thylacine to suggest that some should be captured and placed on a small island. But it was not until 1929, with the species on the very edge of extinction, that Tasmania's Animals and Birds Protection Board passed a motion protecting thylacines only for the month of December, which was thought to be their prime breeding season. The last known wild thylacine to be killed was shot by a farmer in the north-east of Tasmania in 1930, leaving just captive specimens. Official protection of the species by the Tasmanian government was introduced in July 1936, 59 days before the last known individual died in Hobart Zoo on 7th September, 1936.</span></p>
<p><span style="font-size: large;">There have been numerous expeditions and searches for the thylacine over the years, none of which has produced definitive evidence that thylacines still exist. The species was declared extinct by the Tasmanian government in 1986.</span></p>
<p><span style="font-size: large;">———-</span></p>
<p><span style="font-size: medium;">* marsupial: a mammal, such as a kangaroo, whose young are born incompletely developed and are typically carried and suckled in a pouch on the mother's belly</span></p>
<p><span style="font-size: medium;">**bounty hunters: people who are paid a reward for killing a wild animal</span></p>
                `,
                questions: [
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 1,
                        title: 'Questions 1-5',
                        instruction: 'Complete the notes below.',
                        wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                        sectionTitle: 'The thylacine',
                        items: [
                            {
                                prefix: 'Appearance and behaviour: looked rather like a dog, had a series of stripes along its body and tail, ate an entirely',
                                suffix: 'diet'
                            },
                            {
                                prefix: 'probably depended mainly on',
                                suffix: 'when hunting'
                            },
                            {
                                prefix: 'young spent first months of life inside its mother\'s',
                                suffix: ''
                            },
                            {
                                prefix: 'Decline and extinction: last evidence in mainland Australia is a 3,100-year-old',
                                suffix: ''
                            },
                            {
                                prefix: 'probably went extinct in mainland Australia due to animals known as dingoes, reduction in',
                                suffix: 'and available sources of food were partly responsible for decline in Tasmania'
                            }
                        ]
                    },
                    {
                        type: 'true-false-not-given',
                        startQuestionNumber: 6,
                        title: 'Questions 6-13',
                        instruction: 'Do the following statements agree with the information given in Reading Passage 1?',
                        options: [
                            { value: 'TRUE', description: 'if the statement agrees with the information' },
                            { value: 'FALSE', description: 'if the statement contradicts the information' },
                            { value: 'NOT GIVEN', description: 'if there is no information on this' }
                        ],
                        items: [
                            { statement: 'Significant numbers of thylacines were killed by humans from the 1830s onwards.' },
                            { statement: 'Several thylacines were born in zoos during the late 1800s.' },
                            { statement: 'John Gould\'s prediction about the thylacine surprised some biologists.' },
                            { statement: 'In the early 1900s, many scientists became worried about the possible extinction of the thylacine.' },
                            { statement: 'T.T. Flynn\'s proposal to rehome captive thylacines on an island proved to be impractical.' },
                            { statement: 'There were still reasonable numbers of thylacines in existence when a piece of legislation protecting the species during their breeding season was passed.' },
                            { statement: 'From 1930 to 1936, the only known living thylacines were all in captivity.' },
                            { statement: 'Attempts to find living thylacines are now rarely made.' }
                        ]
                    }
                ]
            },
            {
                title: `Reading Passage 2`,
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong>&nbsp;which are based on Reading Passage 2 below.</span><span style="font-size: 14px;">&nbsp;</span></p>
<h2 style="text-align: center;"><span style="font-size: xx-large;"><strong>Palm oil</strong></span></h2>
<p><span style="font-size: large;"><strong>A</strong></span></p>
<p><span style="font-size: large;">Palm oil is an edible oil derived from the fruit of the African oil palm tree, and is currently the most consumed vegetable oil in the world. It's almost certainly in the soap we wash with in the morning, the sandwich we have for lunch, and the biscuits we snack on during the day. Why is palm oil so attractive for manufacturers? Primarily because its unique properties – such as remaining solid at room temperature – make it an ideal ingredient for long-term preservation, allowing many packaged foods on supermarket shelves to have 'best before' dates of months, even years, into the future.</span></p>
<p><span style="font-size: large;"><strong>B</strong></span></p>
<p><span style="font-size: large;">Many farmers have seized the opportunity to maximise the planting of oil palm trees. Between 1990 and 2012, the global land area devoted to growing oil palm trees grew from 6 to 17 million hectares, now accounting for around ten percent of total cropland in the entire world. From a mere two million tonnes of palm oil being produced annually globally 50 years ago, there are now around 60 million tonnes produced every single year, a figure looking likely to double or even triple by the middle of the century.</span></p>
<p><span style="font-size: large;"><strong>C</strong></span></p>
<p><span style="font-size: large;">However, there are multiple reasons why conservationists cite the rapid spread of oil palm plantations as a major concern. There are countless news stories of deforestation, habitat destruction and dwindling species populations, all as a direct result of land clearing to establish oil palm tree monoculture on an industrial scale, particularly in Malaysia and Indonesia. Endangered species – most famously the Sumatran orangutan, but also rhinos, elephants, tigers, and numerous other fauna – have suffered from the unstoppable spread of oil palm plantations.</span></p>
<p><span style="font-size: large;"><strong>D</strong></span></p>
<p><span style="font-size: large;">'Palm oil is surely one of the greatest threats to global biodiversity,' declares Dr Farnon Ellwood of the University of the West of England, Bristol. 'Palm oil is replacing rainforest, and rainforest is where all the species are. That's a problem.' This has led to some radical questions among environmentalists, such as whether consumers should try to boycott palm oil entirely.</span></p>
<p><span style="font-size: large;">Meanwhile Bhavani Shankar, Professor at London's School of Oriental and African Studies, argues, 'It's easy to say that palm oil is the enemy and we should be against it. It makes for a more dramatic story, and it's very intuitive. But given the complexity of the argument, I think a much more nuanced story is closer to the truth.'</span></p>
<p><span style="font-size: large;"><strong>E</strong></span></p>
<p><span style="font-size: large;">One response to the boycott movement has been the argument for the vital role palm oil plays in lifting many millions of people in the developing world out of poverty. Is it desirable to have palm oil boycotted, replaced, eliminated from the global supply chain, given how many low-income people in developing countries depend on it for their livelihoods? How best to strike a utilitarian balance between these competing factors has become a serious bone of contention.</span></p>
<p><span style="font-size: large;"><strong>F</strong></span></p>
<p><span style="font-size: large;">Even the deforestation argument isn't as straightforward as it seems. Oil palm plantations produce at least four and potentially up to ten times more oil per hectare than soybean, rapeseed, sunflower or other competing oils. That immensely high yield – which is predominantly what makes it so profitable – is potentially also an ecological benefit. If ten times more palm oil can be produced from a patch of land than any competing oil, then ten times more land would need to be cleared in order to produce the same volume of oil from that competitor.</span></p>
<p><span style="font-size: large;">As for the question of carbon emissions, the issue really depends on what oil palm trees are replacing. Crops vary in the degree to which they sequester carbon – in other words, the amount of carbon they capture from the atmosphere and store within the plant. The more carbon a plant sequesters, the more it reduces the effect of climate change. As Shankar explains: '[Palm oil production] actually sequesters more carbon in some ways than other alternatives. […] Of course, if you're cutting down virgin forest it's terrible – that's what's happening in Indonesia and Malaysia, it's been allowed to get out of hand. But if it's replacing rice, for example, it might actually sequester more carbon.'</span></p>
<p><span style="font-size: large;"><strong>G</strong></span></p>
<p><span style="font-size: large;">The industry is now regulated by a group called the Roundtable on Sustainable Palm Oil (RSPO), consisting of palm growers, retailers, product manufacturers, and other interested parties. Over the past decade or so, an agreement has gradually been reached regarding standards that producers of palm oil have to meet in order for their product to be regarded as officially 'sustainable'. The RSPO insists upon no virgin forest clearing, transparency and regular assessment of carbon stocks, among other criteria. Only once these requirements are fully satisfied is the oil allowed to be sold as certified sustainable palm oil (CSPO). Recent figures show that the RSPO now certifies around 12 million tonnes of palm oil annually, equivalent to roughly 21 percent of the world's total palm oil production.</span></p>
<p><span style="font-size: large;"><strong>H</strong></span></p>
<p><span style="font-size: large;">There is even hope that oil palm plantations might not need to be such sterile monocultures, or 'green deserts', as Ellwood describes them. New research at Ellwood's lab hint at one plant which might make all the difference. The bird's nest fern (<em>Asplenium nidus</em>) grows on trees in an epiphytic fashion (meaning it's dependent on the tree only for support, not for nutrients), and is native to many tropical regions, where as a keystone species it performs a vital ecological role. Ellwood believes that reintroducing the bird's nest fern into oil palm plantations could potentially allow these areas to recover their biodiversity, providing a home for all manner of species, from fungi and bacteria, to invertebrates such as insects, amphibians, reptiles and even mammals.</span></p>
                `,
                questions: [
                    {
                        type: 'paragraph-matching',
                        startQuestionNumber: 14,
                        title: 'Questions 14-20',
                        instruction: 'Reading Passage 2 has eight paragraphs, A-H. Which section contains the following information?',
                        paragraphRange: 'A-H',
                        items: [
                            { description: 'examples of a range of potential environmental advantages of oil palm tree cultivation' },
                            { description: 'description of an organisation which controls the environmental impact of palm oil production' },
                            { description: 'examples of the widespread global use of palm oil' },
                            { description: 'reference to a particular species which could benefit the ecosystem of oil palm plantations' },
                            { description: 'figures illustrating the rapid expansion of the palm oil industry' },
                            { description: 'an economic justification for not opposing the palm oil industry' },
                            { description: 'examples of creatures badly affected by the establishment of oil palm plantations' }
                        ]
                    },
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 21,
                        title: 'Questions 21 and 22',
                        instruction: 'Choose TWO letters, A-E.',
                        note: 'Which TWO statements are made about the Roundtable on Sustainable Palm Oil (RSPO)?',
                        items: [
                            {
                                questionNumber: 21,
                                questionText: 'Choose the first correct statement about RSPO:',
                                options: [
                                    { value: 'A', text: 'Its membership has grown steadily over the course of the last decade.' },
                                    { value: 'B', text: 'It demands that certified producers be open and honest about their practices.' },
                                    { value: 'C', text: 'It took several years to establish its set of criteria for sustainable palm oil certification.' },
                                    { value: 'D', text: 'Its regulations regarding sustainability are stricter than those governing other industries.' },
                                    { value: 'E', text: 'It was formed at the request of environmentalists concerned about the loss of virgin forests.' }
                                ]
                            },
                            {
                                questionNumber: 22,
                                questionText: 'Choose the second correct statement about RSPO:',
                                options: [
                                    { value: 'A', text: 'Its membership has grown steadily over the course of the last decade.' },
                                    { value: 'B', text: 'It demands that certified producers be open and honest about their practices.' },
                                    { value: 'C', text: 'It took several years to establish its set of criteria for sustainable palm oil certification.' },
                                    { value: 'D', text: 'Its regulations regarding sustainability are stricter than those governing other industries.' },
                                    { value: 'E', text: 'It was formed at the request of environmentalists concerned about the loss of virgin forests.' }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 23,
                        title: 'Questions 23 and 24',
                        instruction: 'Choose TWO letters, A-E.',
                        note: 'Which TWO of the following statements does the writer make about literacy rates in Section B?',
                        multipleSelect: true,
                        selectCount: 2,
                        options: [
                            { value: 'A', text: 'Very little research has been done into the link between high literacy rates and improved earnings.' },
                            { value: 'B', text: 'Literacy rates in Germany between 1600 and 1900 were very good.' },
                            { value: 'C', text: 'There is strong evidence that high literacy rates in the modern world result in economic growth.' },
                            { value: 'D', text: 'England is a good example of how high literacy rates helped a country industrialise.' },
                            { value: 'E', text: 'Economic growth can help to improve literacy rates.' }
                        ]
                    },
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 25,
                        title: 'Questions 25 and 26',
                        instruction: 'Choose TWO letters, A-E.',
                        note: 'Which TWO of the following statements does the writer make in Section F about guilds in German-speaking Central Europe between 1600 and 1900?',
                        multipleSelect: true,
                        selectCount: 2,
                        options: [
                            { value: 'A', text: 'They helped young people to learn a skill.' },
                            { value: 'B', text: 'They were opposed to people moving to an area for work.' },
                            { value: 'C', text: 'They kept better records than guilds in other parts of the world.' },
                            { value: 'D', text: 'They opposed practices that threatened their control over a trade.' },
                            { value: 'E', text: 'They predominantly consisted of wealthy merchants.' }
                        ]
                    }
                ]
            },
            {
                title: `Reading Passage 3`,
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 27-40</strong> which are based on Reading Passage 3 below.</span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Building the Skyline: The Birth and Growth of Manhattan's Skyscrapers</strong></span></h2>
<p><span style="font-size: large;"><em>Katharine L. Shester reviews a book by Jason Barr about the development of New York City</em></span></p>
<p><span style="font-size: large;">In <em>Building the Skyline</em>, Jason Barr takes the reader through a detailed history of New York City. The book combines geology, history, economics, and a lot of data to explain why business clusters developed where they did and how the early decisions of workers and firms shaped the skyline we see today. <em>Building the Skyline</em> is organized into two distinct parts. The first is primarily historical and addresses New York's settlement and growth from 1609 to 1900; the second deals primarily with the 20th century and is a compilation of chapters commenting on different aspects of New York's urban development. The tone and organization of the book changes somewhat between the first and second parts, as the latter chapters incorporate aspects of Barr's related research papers.</span></p>
<p><span style="font-size: large;">Barr begins chapter one by taking the reader on a 'helicopter time-machine' ride – giving a fascinating account of how the New York landscape in 1609 might have looked from the sky. He then moves on to a subterranean walking tour of the city, indicating the location of rock and water below the subsoil, before taking the reader back to the surface. His love of the city comes through as he describes various fun facts about the location of the New York residence of early 19th-century vice-president Aaron Burr as well as a number of legends about the city.</span></p>
<p><span style="font-size: large;">Chapters two and three take the reader up to the Civil War (1861-1865), with chapter two focusing on the early development of land and the implementation of a grid system in 1811. Chapter three focuses on land use before the Civil War. Both chapters are informative and well researched and set the stage for the economic analysis that comes later in the book. I would have liked Barr to expand upon his claim that existing tenements* prevented skyscrapers in certain neighborhoods because 'likely no skyscraper developer was interested in performing the necessary "slum clearance"'. Later in the book, Barr makes the claim that the depth of bedrock** was not a limiting factor for developers, as foundation costs were a small fraction of the cost of development. At first glance, it is not obvious why slum clearance would be limiting, while more expensive foundations would not.</span></p>
<p><span style="font-size: large;">Chapter four focuses on immigration and the location of neighborhoods and tenements in the late 19th century. Barr identifies four primary immigrant enclaves and analyses their locations in terms of the amenities available in the area. Most of these enclaves were located on the least valuable land, between the industries located on the waterfront and the wealthy neighborhoods bordering Central Park.</span></p>
<p><span style="font-size: large;">Part two of the book begins with a discussion of the economics of skyscraper height. In chapter five, Barr distinguishes between engineering height, economic height, and developer height – where engineering height is the tallest building that can be safely made at a given time, economic height is the height that is most efficient from society's point of view, and developer height is the actual height chosen by the developer, who is attempting to maximize return on investment.</span></p>
<p><span style="font-size: large;">Chapter five also has an interesting discussion of the technological advances that led to the construction of skyscrapers. For example, the introduction of iron and steel skeletal frames made thick, load-bearing walls unnecessary, expanding the usable square footage of buildings and increasing the use of windows and availability of natural light. Chapter six then presents data on building height throughout the 20th century and uses regression analysis to 'predict' building construction. While less technical than the research paper on which the chapter is based, it is probably more technical than would be preferred by a general audience.</span></p>
<p><span style="font-size: large;">Chapter seven tackles the 'bedrock myth', the assumption that the absence of bedrock close to the surface between Downtown and Midtown New York is the reason for skyscrapers not being built between the two urban centers. Rather, Barr argues that while deeper bedrock does increase foundation costs, these costs were neither prohibitively high nor were they large compared to the overall cost of building a skyscraper. What I enjoyed the most about this chapter was Barr's discussion of how foundations are actually built. He describes the use of caissons, which enable workers to dig down for considerable distances, often below the water table, until they reach bedrock. Barr's thorough technological history discusses not only how caissons work, but also the dangers involved. While this chapter references empirical research papers, it is a relatively easy read.</span></p>
<p><span style="font-size: large;">Chapters eight and nine focus on the birth of Midtown and the building boom of the 1920s. Chapter eight contains lengthy discussions of urban economic theory that may serve as a distraction to readers primarily interested in New York. However, they would be well-suited for undergraduates learning about the economics of cities. In the next chapter, Barr considers two of the primary explanations for the building boom of the 1920s – the first being exuberance, and the second being financing. He uses data to assess the viability of these two explanations and finds that supply and demand factors explain much of the development of the 1920s; though it enable the boom, cheap credit was not, he argues, the primary cause.</span></p>
<p><span style="font-size: large;">In the final chapter (chapter 10), Barr discusses another of his empirical papers that estimates Manhattan land values from the mid-19th century to the present day. The data work that went into these estimations is particularly impressive. Toward the end of the chapter, Barr assesses 'whether skyscrapers are a cause or an effect of high land values'. He finds that changes in land values predict future building height, but the reverse is not true. The book ends with an epilogue, in which Barr discusses the impact of climate change on the city and makes policy suggestions for New York going forward.</span></p>
<p><span style="font-size: large;">————-</span></p>
<p><span style="font-size: medium;">* a tenement: a multi-occupancy building of any sort, but particularly a run-down apartment building or slum building</span></p>
<p><span style="font-size: medium;">** bedrock: the solid, hard rock in the ground that lies under a loose layer of soil</span></p>
                `,
                questions: [
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 27,
                        title: 'Questions 27-31',
                        instruction: 'Choose the correct letter, A, B, C or D.',
                        items: [
                            {
                                questionNumber: 27,
                                questionText: 'What point does Shester make about Barr\'s book in the first paragraph?',
                                options: [
                                    { value: 'A', text: 'It gives a highly original explanation for urban development.' },
                                    { value: 'B', text: 'Elements of Barr\'s research papers are incorporated throughout the book.' },
                                    { value: 'C', text: 'Other books that are available on the subject have taken a different approach.' },
                                    { value: 'D', text: 'It covers a range of factors that affected the development of New York.' }
                                ]
                            },
                            {
                                questionNumber: 28,
                                questionText: 'How does Shester respond to the information in the book about tenements?',
                                options: [
                                    { value: 'A', text: 'She describes the reasons for Barr\'s interest.' },
                                    { value: 'B', text: 'She indicates a potential problem with Barr\'s analysis.' },
                                    { value: 'C', text: 'She compares Barr\'s conclusion with that of other writers.' },
                                    { value: 'D', text: 'She provides details about the sources Barr used for his research.' }
                                ]
                            },
                            {
                                questionNumber: 29,
                                questionText: 'What does Shester say about chapter six of the book?',
                                options: [
                                    { value: 'A', text: 'It contains conflicting data.' },
                                    { value: 'B', text: 'It focuses too much on possible trends.' },
                                    { value: 'C', text: 'It is too specialised for most readers.' },
                                    { value: 'D', text: 'It draws on research that is out of date.' }
                                ]
                            },
                            {
                                questionNumber: 30,
                                questionText: 'What does Shester suggest about the chapters focusing on the 1920s building boom?',
                                options: [
                                    { value: 'A', text: 'The information should have been organised differently.' },
                                    { value: 'B', text: 'More facts are needed about the way construction was financed.' },
                                    { value: 'C', text: 'The explanation that is given for the building boom is unlikely.' },
                                    { value: 'D', text: 'Some parts will have limited appeal to certain people.' }
                                ]
                            },
                            {
                                questionNumber: 31,
                                questionText: 'What impresses Shester the most about the chapter on land values?',
                                options: [
                                    { value: 'A', text: 'the broad time period that is covered' },
                                    { value: 'B', text: 'the interesting questions that Barr asks' },
                                    { value: 'C', text: 'the nature of the research into the topic' },
                                    { value: 'D', text: 'the recommendations Barr makes for the future' }
                                ]
                            }
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
                            { statement: 'The description in the first chapter of how New York probably looked from the air in the early 1600s lacks interest.' },
                            { statement: 'Chapters two and three prepare the reader well for material yet to come.' },
                            { statement: 'The biggest problem for many nineteenth-century New York immigrant neighbourhoods was a lack of amenities.' },
                            { statement: 'In the nineteenth century, New York\'s immigrant neighbourhoods tended to concentrate around the harbour.' }
                        ]
                    },
                    {
                        type: 'summary-completion',
                        startQuestionNumber: 36,
                        title: 'Questions 36-40',
                        instruction: 'Complete the summary using the list of phrases, A-J, below.',
                        sectionTitle: 'The bedrock myth',
                        options: [
                            { value: 'A', text: 'development plans' },
                            { value: 'B', text: 'deep excavations' },
                            { value: 'C', text: 'great distance' },
                            { value: 'D', text: 'excessive expense' },
                            { value: 'E', text: 'impossible tasks' },
                            { value: 'F', text: 'associated risks' },
                            { value: 'G', text: 'water level' },
                            { value: 'H', text: 'specific areas' },
                            { value: 'I', text: 'total expenditure' },
                            { value: 'J', text: 'construction guidelines' }
                        ],
                        items: [
                            {
                                prefix: 'In chapter seven, Barr indicates how the lack of bedrock close to the surface does not explain why skyscrapers are absent from',
                                suffix: '.'
                            },
                            {
                                prefix: 'He points out that although the cost of foundations increases when bedrock is deep below the surface, this cannot be regarded as',
                                suffix: ', especially when compared to'
                            },
                            {
                                prefix: '.',
                                suffix: ''
                            },
                            {
                                prefix: 'A particularly enjoyable part of the chapter was Barr\'s account of how foundations are built. He describes not only how',
                                suffix: 'are made possible by the use of caissons, but he also discusses their'
                            },
                            {
                                prefix: '. The chapter is well researched but relatively easy to understand.',
                                suffix: ''
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        explanation: "https://drive.google.com/file/d/14eGTicPpKveeYijOMggj2bKMQK7OY3AM/view?usp=sharing",
        title: 'Reading CAM 17 Test 4',
        image: 'https://ieltstrainingonline.com/wp-content/uploads/2022/06/cam-17-test-4.jpg',
        correctAnswers: [
            // Q1-6: true-false-not-given (Bats to the rescue)
            "FALSE", "FALSE", "NOT GIVEN", "TRUE", "NOT GIVEN", "TRUE",
            // Q7-13: fill-in-blanks table (The study carried out by Rocha's team)
            "droppings", "coffee", "mosquitoes", "protein", "unclean", "culture", "houses",
            // Q14-18: paragraph-matching (Does education fuel economic growth?)
            "E", "A", "D", "F", "C",
            // Q19-22: fill-in-blanks summary (Demographic reconstruction)
            "descendants", "sermon", "fine", "innovation",
            // Q23-24: multiple choice (literacy rates statements)
            "B, E", "B, E",
            // Q25-26: multiple choice (guilds statements)
            "B, D", "B, D",
            // Q27-32: paragraph-matching (Timur Gareyev)
            "D", "E", "F", "B", "H", "E",
            // Q33-36: true-false-not-given (Gareyev statements)
            "FALSE", "NOT GIVEN", "NOT GIVEN", "TRUE",
            // Q37-40: fill-in-blanks summary (How the research was carried out)
            "memory", "numbers", "communication", "visual"
        ],
        passages: [
            {
                title: "Reading Passage 1",
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Bats to the rescue</strong></span></h2>
                <p style="text-align: center;"><span style="font-size: large;"><em>How Madagascar's bats are helping to save the rainforest</em></span></p>
                <p><span style="font-size: large;">There are few places in the world where relations between agriculture and conservation are more strained. Madagascar's forests are being converted to agricultural land at a rate of one percent every year. Much of this destruction is fuelled by the cultivation of the country's main staple crop: rice. And a key reason for this destruction is that insect pests are destroying vast quantities of what is grown by local subsistence farmers, leading them to clear forest to create new paddy fields. The result is devastating habitat and biodiversity loss on the island, but not all species are suffering. In fact, some of the island's insectivorous bats are currently thriving and this has important implications for farmers and conservationists alike.</span></p>
                <p><span style="font-size: large;">Enter University of Cambridge zoologist Ricardo Rocha. He's passionate about conservation, and bats. More specifically, he's interested in how bats are responding to human activity and deforestation in particular. Rocha's new study shows that several species of bats are giving Madagascar's rice farmers a vital pest control service by feasting on plagues of insects. And this, he believes, can ease the financial pressure on farmers to turn forest into fields.</span></p>
                <p><span style="font-size: large;">Bats comprise roughly one-fifth of all mammal species in Madagascar and thirty-six recorded bat species are native to the island, making it one of the most important regions for conservation of this animal group anywhere in the world.</span></p>
                <p><span style="font-size: large;">Co-leading an international team of scientists, Rocha found that several species of indigenous bats are taking advantage of habitat modification to hunt insects swarming above the country's rice fields. They include the Malagasy mouse-eared bat, Major's long-fingered bat, the Malagasy white-bellied free-tailed bat and Peters' wrinkle-lipped bat.</span></p>
                <p><span style="font-size: large;">'These winner species are providing a valuable free service to Madagascar as biological pest suppressors,' says Rocha. 'We found that six species of bat are preying on rice pests, including the paddy swarming caterpillar and grass webworm. The damage which these insects cause puts the island's farmers under huge financial pressure and that encourages deforestation.'</span></p>
                <p><span style="font-size: large;">The study, now published in the journal <em>Agriculture, Ecosystems and Environment</em>, set out to investigate the feeding activity of insectivorous bats in the farmland bordering the Ranomafana National Park in the southeast of the country.</span></p>
                <p><span style="font-size: large;">Rocha and his team used state-of-the-art ultrasonic recorders to record over a thousand bat 'feeding buzzes' (echolocation sequences used by bats to target their prey) at 54 sites, in order to identify the favourite feeding spots of the bats. They then used DNA barcoding techniques to analyse droppings collected from bats at the different sites.</span></p>
                <p><span style="font-size: large;">The recordings revealed that bat activity over rice fields was much higher than it was in continuous forest – seven times higher over rice fields which were on flat ground, and sixteen times higher over fields on the sides of hills – leaving no doubt that the animals are preferentially foraging in these man-made ecosystems. The researchers suggest that the bats favour these fields because lack of water and nutrient run-off make these crops more susceptible to insect pest infestations. DNA analysis showed that all six species of bat had fed on economically important insect pests. While the findings indicated that rice farming benefits most from the bats, the scientists also found indications that the bats were consuming pests of other crops, including the black twig borer (which infests coffee plants), the sugarcane cicada, the macadamia nut-borer, and the sober tabby (a pest of citrus fruits).</span></p>
                <p><span style="font-size: large;">'The effectiveness of bats as pest controllers has already been proven in the USA and Catalonia,' said co-author James Kemp, from the University of Lisbon. 'But our study is the first to show this happening in Madagascar, where the stakes for both farmers and conservationists are so high.'</span></p>
                <p><span style="font-size: large;">Local people may have a further reason to be grateful to their bats. While the animal is often associated with spreading disease, Rocha and his team found evidence that Malagasy bats feed not just on crop pests but also on mosquitoes – carriers of malaria, Rift Valley fever virus and elephantiasis – as well as blackflies, which spread river blindness.</span></p>
                <p><span style="font-size: large;">Rocha points out that the relationship is complicated. When food is scarce, bats become a crucial source of protein for local people. Even the children will hunt them. And as well as roosting in trees, the bats sometimes roost in buildings, but are not welcomed there because they make them unclean. At the same time, however, they are associated with sacred caves and the ancestors, so they can be viewed as beings between worlds, which makes them very significant in the culture of the people. And one potential problem is that while these bats are benefiting from farming, at the same time deforestation is reducing the places where they can roost, which could have long-term effects on their numbers. Rocha says, 'With the right help, we hope that farmers can promote this mutually beneficial relationship by installing bat houses.'</span></p>
                <p><span style="font-size: large;">Rocha and his colleagues believe that maximising bat populations can help to boost crop yields and promote sustainable livelihoods. The team is now calling for further research to quantify this contribution. 'I'm very optimistic,' says Rocha. 'If we give nature a hand, we can speed up the process of regeneration.'</span></p>
                `,
                questions: [
                    {
                        type: 'true-false-not-given',
                        startQuestionNumber: 1,
                        title: 'Questions 1-6',
                        instruction: 'Do the following statements agree with the information given in Reading Passage 1?',
                        options: [
                            { value: 'TRUE', description: 'if the statement agrees with the information' },
                            { value: 'FALSE', description: 'if the statement contradicts the information' },
                            { value: 'NOT GIVEN', description: 'if there is no information on this' }
                        ],
                        items: [
                            { statement: 'Many Madagascan forests are being destroyed by attacks from insects.' },
                            { statement: 'Loss of habitat has badly affected insectivorous bats in Madagascar.' },
                            { statement: 'Ricardo Rocha has carried out studies of bats in different parts of the world.' },
                            { statement: 'Habitat modification has resulted in indigenous bats in Madagascar becoming useful to farmers.' },
                            { statement: 'The Malagasy mouse-eared bat is more common than other indigenous bat species in Madagascar.' },
                            { statement: 'Bats may feed on paddy swarming caterpillars and grass webworms.' }
                        ]
                    },
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 7,
                        title: 'Questions 7-13',
                        instruction: 'Complete the table below.',
                        wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                        sectionTitle: 'The study carried out by Rocha\'s team',
                        tableView: true,
                        items: [
                            {
                                prefix: 'Method: DNA analysis of bat',
                                suffix: '.'
                            },
                            {
                                prefix: 'Findings: the bats ate pests of rice,',
                                suffix: ', sugarcane, nuts and fruit.'
                            },
                            {
                                prefix: 'Findings: prevent the spread of disease by eating',
                                suffix: 'and blackflies.'
                            },
                            {
                                prefix: 'Local attitudes: they provide food rich in',
                                suffix: '.'
                            },
                            {
                                prefix: 'Local attitudes: the buildings where they roost become',
                                suffix: '.'
                            },
                            {
                                prefix: 'Local attitudes: they play an important role in local',
                                suffix: '.'
                            },
                            {
                                prefix: 'Recommendation: farmers should provide special',
                                suffix: 'to support the bat population.'
                            }
                        ]
                    }
                ]
            },
            {
                title: "Reading Passage 2",
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong>&nbsp;which are based on Reading Passage 2 below.</span><span style="font-size: 14px;">&nbsp;</span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Does education fuel economic growth?</strong></span></h2>
<p><span style="font-size: large;"><strong>A</strong></span></p>
<p><span style="font-size: large;">Over the last decade, a huge database about the lives of southwest German villagers between 1600 and 1900 has been compiled by a team led by Professor Sheilagh Ogilvie at Cambridge University's Faculty of Economics. It includes court records, guild ledgers, parish registers, village censuses, tax lists and – the most recent addition – 9,000 handwritten inventories listing over a million personal possessions belonging to ordinary women and men across three centuries. Ogilvie, who discovered the inventories in the archives of two German communities 30 years ago, believes they may hold the answer to a conundrum that has long puzzled economists: the lack of evidence for a causal link between education and a country's economic growth.</span></p>
<p><span style="font-size: large;"><strong>B</strong></span></p>
<p><span style="font-size: large;">As Ogilvie explains, 'Education helps us to work more productively, invent better technology, and earn more … surely it must be critical for economic growth? But, if you look back through history, there's no evidence that having a high literacy rate made a country industrialise earlier.' Between 1600 and 1900, England had only mediocre literacy rates by European standards, yet its economy grew fast and it was the first country to industrialise. During this period, Germany and Scandinavia had excellent literacy rates, but their economies grew slowly and they industrialised late. 'Modern cross-country analyses have also struggled to find evidence that education causes economic growth, even though there is plenty of evidence that growth increases education,' she adds.</span></p>
<p><span style="font-size: large;"><strong>C</strong></span></p>
<p><span style="font-size: large;">In the handwritten inventories that Ogilvie is analysing are the belongings of women and men at marriage, remarriage and death. From badger skins to Bibles, sewing machines to scarlet bodices – the villagers' entire worldly goods are included. Inventories of agricultural equipment and craft tools reveal economic activities; ownership of books and education-related objects like pens and slates suggests how people learned. In addition, the tax lists included in the database record the value of farms, workshops, assets and debts; signatures and people's estimates of their age indicate literacy and numeracy levels; and court records reveal obstacles (such as the activities of the guilds*) that stifled industry.</span></p>
<p><span style="font-size: large;">Previous studies usually had just one way of linking education with economic growth – the presence of schools and printing presses, perhaps, or school enrolment, or the ability to sign names. According to Ogilvie, the database provides multiple indicators for the same individuals, making it possible to analyse links between literacy, numeracy, wealth, and industriousness, for individual women and men over the long term.</span></p>
<p><span style="font-size: large;"><strong>D</strong></span></p>
<p><span style="font-size: large;">Ogilvie and her team have been building the vast database of material possessions on top of their full demographic reconstruction of the people who lived in these two German communities. 'We can follow the same people – and their descendants – across 300 years of educational and economic change,' she says. Individual lives have unfolded before their eyes. Stories like that of the 24-year-olds Ana Regina and Magdalena Riethmüllerin, who were chastised in 1707 for reading books in church instead of listening to the sermon. 'This tells us they were continuing to develop their reading skills at least a decade after leaving school,' explains Ogilvie. The database also reveals the case of Juliana Schweickherdt, a 50-year-old spinster living in the small Black Forest community of Wildberg, who was reprimanded in 1752 by the local weavers' guild for 'weaving cloth and combing wool, counter to the guild ordinance'. When Juliana continued taking jobs reserved for male guild members, she was summoned before the guild court and told to pay a fine equivalent to one third of a servant's annual wage. It was a small act of defiance by today's standards, but it reflects a time when laws in Germany and elsewhere regulated people's access to labour markets. The dominance of guilds not only prevented people from using their skills, but also held back even the simplest industrial innovation.</span></p>
                <p><span style="font-size: large;"><strong>E</strong></span></p>
                <p><span style="font-size: large;">The data-gathering phase of the project has been completed and now, according to Ogilvie, it is time 'to ask the big questions'. One way to look at whether education causes economic growth is to 'hold wealth constant'. This involves following the lives of different people with the same level of wealth over a period of time. If wealth is constant, it is possible to discover whether education was, for example, linked to the cultivation of new crops, or to the adoption of industrial innovations like sewing machines. The team will also ask what aspect of education helped people engage more with productive and innovative activities. Was it, for instance, literacy, numeracy, book ownership, years of schooling? Was there a threshold level – a tipping point – that needed to be reached to affect economic performance?</span></p>
                <p><span style="font-size: large;"><strong>F</strong></span></p>
                <p><span style="font-size: large;">Ogilvie hopes to start finding answers to these questions over the next few years. One thing is already clear, she says: the relationship between education and economic growth is far from straightforward. 'German-speaking central Europe is an excellent laboratory for testing theories of economic growth,' she explains. Between 1600 and 1900, literacy rates and book ownership were high and yet the region remained poor. It was also the case that local guilds and merchant associations were extremely powerful and legislated against anything that undermined their monopolies. In villages throughout the region, guilds blocked labour migration and resisted changes that might reduce their influence.</span></p>
                <p><span style="font-size: large;">'Early findings suggest that the potential benefits of education for the economy can be held back by other barriers, and this has implications for today,' says Ogilvie. 'Huge amounts are spent improving education in developing countries, but this spending can fail to deliver economic growth if restrictions block people – especially women and the poor – from using their education in economically productive ways. If economic institutions are poorly set up, for instance, education can't lead to growth.'</span></p>
                <p><span style="font-size: large;">* guild: an association of artisans or merchants which oversees the practice of their craft or trade in a particular area</span></p>
                `,
                questions: [
                    {
                        type: 'paragraph-matching',
                        startQuestionNumber: 14,
                        title: 'Questions 14-18',
                        instruction: 'Reading Passage 2 has six paragraphs, A-F. Which section contains the following information?',
                        paragraphRange: 'A-F',
                        items: [
                            { description: 'an explanation of the need for research to focus on individuals with a fairly consistent income' },
                            { description: 'examples of the sources the database has been compiled from' },
                            { description: 'an account of one individual\'s refusal to obey an order' },
                            { description: 'a reference to a region being particularly suited to research into the link between education and economic growth' },
                            { description: 'examples of the items included in a list of personal possessions' }
                        ]
                    },
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 19,
                        title: 'Questions 19-22',
                        instruction: 'Complete the summary below.',
                        wordLimit: 'Choose ONE WORD from the passage for each answer.',
                        sectionTitle: 'Demographic reconstruction of two German communities',
                        items: [
                            {
                                prefix: 'The database that Ogilvie and her team has compiled sheds light on the lives of a range of individuals, as well as those of their',
                                suffix: ', over a 300-year period.'
                            },
                            {
                                prefix: 'For example, Ana Regina and Magdalena Riethmüllerin were reprimanded for reading while they should have been paying attention to a',
                                suffix: '.'
                            },
                            {
                                prefix: 'There was also Juliana Schweickherdt, who came to the notice of the weavers\' guild in the year 1752 for breaking guild rules. As a punishment, she was later given a',
                                suffix: '.'
                            },
                            {
                                prefix: 'Cases like this illustrate how the guilds could prevent',
                                suffix: 'and stop skilled people from working.'
                            }
                        ]
                    },
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 23,
                        title: 'Questions 23-26',
                        instruction: 'Choose the correct letter, A, B, C, D or E.',
                        items: [
                            {
                                question: 'Question 23: Which statement about literacy rates does the writer make in Section B?',
                                options: [
                                    { value: 'A', text: 'Very little research has been done into the link between high literacy rates and improved earnings.' },
                                    { value: 'B', text: 'Literacy rates in Germany between 1600 and 1900 were very good.' },
                                    { value: 'C', text: 'There is strong evidence that high literacy rates in the modern world result in economic growth.' },
                                    { value: 'D', text: 'England is a good example of how high literacy rates helped a country industrialise.' },
                                    { value: 'E', text: 'Economic growth can help to improve literacy rates.' }
                                ]
                            },
                            {
                                question: 'Question 24: Which statement about literacy rates does the writer make in Section B?',
                                options: [
                                    { value: 'A', text: 'Very little research has been done into the link between high literacy rates and improved earnings.' },
                                    { value: 'B', text: 'Literacy rates in Germany between 1600 and 1900 were very good.' },
                                    { value: 'C', text: 'There is strong evidence that high literacy rates in the modern world result in economic growth.' },
                                    { value: 'D', text: 'England is a good example of how high literacy rates helped a country industrialise.' },
                                    { value: 'E', text: 'Economic growth can help to improve literacy rates.' }
                                ]
                            },
                            {
                                question: 'Question 25: Which statement about guilds does the writer make in Section F?',
                                options: [
                                    { value: 'A', text: 'They helped young people to learn a skill.' },
                                    { value: 'B', text: 'They were opposed to people moving to an area for work.' },
                                    { value: 'C', text: 'They kept better records than guilds in other parts of the world.' },
                                    { value: 'D', text: 'They opposed practices that threatened their control over a trade.' },
                                    { value: 'E', text: 'They predominantly consisted of wealthy merchants.' }
                                ]
                            },
                            {
                                question: 'Question 26: Which statement about guilds does the writer make in Section F?',
                                options: [
                                    { value: 'A', text: 'They helped young people to learn a skill.' },
                                    { value: 'B', text: 'They were opposed to people moving to an area for work.' },
                                    { value: 'C', text: 'They kept better records than guilds in other parts of the world.' },
                                    { value: 'D', text: 'They opposed practices that threatened their control over a trade.' },
                                    { value: 'E', text: 'They predominantly consisted of wealthy merchants.' }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                title: "Reading Passage 3",
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 27-40</strong> which are based on Reading Passage 3 below.</span></p>
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Timur Gareyev – blindfold chess champion</strong></span></h2>
<p><span style="font-size: large;"><strong>A</strong></span></p>
<p><span style="font-size: large;">Next month, a chess player named Timur Gareyev will take on nearly 50 opponents at once. But that is not the hard part. While his challengers will play the games as normal, Gareyev himself will be blindfolded. Even by world record standards, it sets a high bar for human performance. The 28-year-old already stands out in the rarefied world of blindfold chess. He has a fondness for bright clothes and unusual hairstyles, and he gets his kicks from the adventure sport of BASE jumping. He has already proved himself a strong chess player, too. In a 10-hour chess marathon in 2013, Gareyev played 33 games in his head simultaneously. He won 29 and lost none. The skill has become his brand: he calls himself the Blindfold King.</span></p>
<p><span style="font-size: large;"><strong>B</strong></span></p>
<p><span style="font-size: large;">But Gareyev's prowess has drawn interest from beyond the chess-playing community. In the hope of understanding how he and others like him can perform such mental feats, researchers at the University of California in Los Angeles (UCLA) called him in for tests. They now have their first results. 'The ability to play a game of chess with your eyes closed is not a far reach for most accomplished players,' said Jesse Rissman, who runs a memory lab at UCLA. 'But the thing that's so remarkable about Timur and a few other individuals is the number of games they can keep active at once. To me it is simply astonishing.'</span></p>
<p><span style="font-size: large;"><strong>C</strong></span></p>
<p><span style="font-size: large;">Gareyev learned to play chess in his native Uzbekistan when he was six years old. Tutored by his grandfather, he entered his first tournament aged eight and soon became obsessed with competitions. At 16, he was crowned Asia's youngest ever chess grandmaster. He moved to the US soon after, and as a student helped his university win its first national chess championship. In 2013, Gareyev was ranked the third best chess player in the US.</span></p>
<p><span style="font-size: large;"><strong>D</strong></span></p>
<p><span style="font-size: large;">To the uninitiated, blindfold chess seems to call for superhuman skill. But displays of the feat go back centuries. The first recorded game in Europe was played in 13th-century Florence. In 1947, the Argentinian grandmaster Miguel Najdorf played 45 simultaneous games in his mind, winning 39 in the 24-hour session.</span></p>
<p><span style="font-size: large;"><strong>E</strong></span></p>
<p><span style="font-size: large;">Accomplished players can develop the skill of playing blind even without realising it. The nature of the game is to run through possible moves in the mind to see how they play out. From this, regular players develop a memory for the patterns the pieces make, the defences and attacks. 'You recreate it in your mind,' said Gareyev. 'A lot of players are capable of doing what I'm doing.' The real mental challenge comes from playing multiple games at once in the head. Not only must the positions of each piece on every board be memorised, they must be recalled faithfully when needed, updated with each player's moves, and then reliably stored again, so the brain can move on to the next board. First moves can be tough to remember because they are fairly uninteresting. But the ends of games are taxing too, as exhaustion sets in. When Gareyev is tired, his recall can get patchy. He sometimes makes moves based on only a fragmented memory of the pieces' positions.</span></p>
<p><span style="font-size: large;"><strong>F</strong></span></p>
<p><span style="font-size: large;">The scientists first had Gareyev perform some standard memory tests. These assessed his ability to hold numbers, pictures and words in mind. One classic test measures how many numbers a person can repeat, both forwards and backwards, soon after hearing them. Most people manage about seven. 'He was not exceptional on any of these standard tests,' said Rissman. 'We didn't find anything other than playing chess that he seems to be supremely gifted at.' But next came the brain scans. With Gareyev lying down in the machine, Rissman looked at how well connected the various regions of the chess player's brain were. Though the results are tentative and as yet unpublished, the scans found much greater than average communication between parts of Gareyev's brain that make up what is called the frontoparietal control network. Of 63 people scanned alongside the chess player, only one or two scored more highly on the measure. 'You use this network in almost any complex task. It helps you to allocate attention, keep rules in mind, and work out whether you should be responding or not,' said Rissman.</span></p>
<p><span style="font-size: large;"><strong>G</strong></span></p>
<p><span style="font-size: large;">It was not the only hint of something special in Gareyev's brain. The scans also suggest that Gareyev's visual network is more highly connected to other brain parts than usual. Initial results suggest that the areas of his brain that process visual images – such as chess boards – may have stronger links to other brain regions, and so be more powerful than normal. While the analyses are not finalised yet, they may hold the first clues to Gareyev's extraordinary ability.</span></p>
<p><span style="font-size: large;"><strong>H</strong></span></p>
<p><span style="font-size: large;">For the world record attempt, Gareyev hopes to play 47 blindfold games at once in about 16 hours. He will need to win 80% to claim the title. 'I don't worry too much about the winning percentage, that's never been an issue for me,' he said. 'The most important part of blindfold chess for me is that I have found the one thing that I can fully dedicate myself to. I miss having an obsession.'</span></p>
                `,
                questions: [
                    {
                        type: 'paragraph-matching',
                        startQuestionNumber: 27,
                        title: 'Questions 27-32',
                        instruction: 'Reading Passage 3 has eight paragraphs, A-H. Which paragraph contains the following information?',
                        paragraphRange: 'A-H',
                        note: 'You may use any letter more than once.',
                        items: [
                            { description: 'a reference to earlier examples of blindfold chess' },
                            { description: 'an outline of what blindfold chess involves' },
                            { description: 'a claim that Gareyev\'s skill is limited to chess' },
                            { description: 'why Gareyev\'s skill is of interest to scientists' },
                            { description: 'an outline of Gareyev\'s priorities' },
                            { description: 'a reason why the last part of a game may be difficult' }
                        ]
                    },
                    {
                        type: 'true-false-not-given',
                        startQuestionNumber: 33,
                        title: 'Questions 33-36',
                        instruction: 'Do the following statements agree with the information given in Reading Passage 3?',
                        options: [
                            { value: 'TRUE', description: 'if the statement agrees with the information' },
                            { value: 'FALSE', description: 'if the statement contradicts the information' },
                            { value: 'NOT GIVEN', description: 'if there is no information on this' }
                        ],
                        items: [
                            { statement: 'In the forthcoming games, all the participants will be blindfolded.' },
                            { statement: 'Gareyev has won competitions in BASE jumping.' },
                            { statement: 'UCLA is the first university to carry out research into blindfold chess players.' },
                            { statement: 'Good chess players are likely to be able to play blindfold chess.' }
                        ]
                    },
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 37,
                        title: 'Questions 37-40',
                        instruction: 'Complete the summary below.',
                        wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                        sectionTitle: 'How the research was carried out',
                        items: [
                            {
                                prefix: 'The researchers started by testing Gareyev\'s',
                                suffix: '; for example, he was required to recall a string of'
                            },
                            {
                                prefix: '',
                                suffix: 'in order and also in reverse order.'
                            },
                            {
                                prefix: 'Although his performance was normal, scans showed an unusual amount of',
                                suffix: 'within the areas of Gareyev\'s brain that are concerned with directing attention.'
                            },
                            {
                                prefix: 'In addition, the scans raised the possibility of unusual strength in the parts of his brain that deal with',
                                suffix: 'input.'
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
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
    },
    {
        id: 10,
        explanation: "https://drive.google.com/file/d/1o-aAPp0dF1AcWe8I-k7YR78AqtikVKd-/view?usp=sharing",
        title: 'Reading CAM 16 Test 2',
        image: 'https://ieltstrainingonline.com/wp-content/uploads/2021/07/cam-16-test-2.jpg',
        correctAnswers: [
            // Q1-8: True/False/Not Given
            "TRUE", "NOT GIVEN", "TRUE", "FALSE", "FALSE", "TRUE", "TRUE", "NOT GIVEN",
            // Q9-13: Fill in blanks
            "Ridgeway", "documents", "soil", "fertility", "Rhiannon",
            // Q14-16: Multiple choice
            "D", "C", "A",
            // Q17-20: Summary completion
            "G", "B", "H", "E",
            // Q21-26: Yes/No/Not Given
            "YES", "NO", "NOT GIVEN", "YES", "NOT GIVEN", "NO",
            // Q27-30: Multiple choice
            "B", "C", "B", "D",
            // Q31-35: Summary completion
            "D", "A", "C", "F", "G",
            // Q36-40: True/False/Not Given
            "FALSE", "NOT GIVEN", "NOT GIVEN", "TRUE", "TRUE"
        ],
        passages: [
            {
                title: "Reading Passage 1",
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on </span><strong style="font-size: large;">Questions</strong><span style="font-size: large;"> </span><strong style="font-size: large;">1-13</strong><span style="font-size: large;">&nbsp;which are&nbsp;based on Reading Passage 1 below.</span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>The White Horse of Uffington</strong></span></h2>
                <p><span style="font-size: large;">The cutting of huge figures or 'geoglyphs' into the earth of English hillsides has taken place for more than 3,000 years. There are 56 hill figures scattered around England, with the vast majority on the chalk downlands of the country's southern counties. The figures include giants, horses, crosses and regimental badges. Although the majority of these geoglyphs date within the last 300 years or so, there are one or two that are much older.</span></p>
                <p><span style="font-size: large;">The most famous of these figures is perhaps also the most mysterious – the Uffington White Horse in Oxfordshire. The White Horse has recently been re-dated and shown to be even older than its previously assigned ancient pre-Roman Iron Age* date. More controversial is the date of the enigmatic Long Man of Wilmington in Sussex. While many historians are convinced the figure is prehistoric, others believe that it was the work of an artistic monk from a nearby priory and was created between the 11th and 15th centuries.</span></p>
                <p><span style="font-size: large;">The method of cutting these huge figures was simply to remove the overlying grass to reveal the gleaming white chalk below. However, the grass would soon grow over the geoglyph again unless it was regularly cleaned or scoured by a fairly large team of people. One reason that the vast majority of hill figures have disappeared is that when the traditions associated with the figures faded, people no longer bothered or remembered to clear away the grass to expose the chalk outline. Furthermore, over hundreds of years the outlines would sometimes change due to people not always cutting in exactly the same place, thus creating a different shape to the original geoglyph. That fact that any ancient hill figures survive at all in England today is testament to the strength and continuity of local customs and beliefs which, in one case at least, must stretch back over millennia.</span></p>
                <p><span style="font-size: large;">The Uffington White Horse is a unique, stylised representation of a horse consisting of a long, sleek back, thin disjointed legs, a streaming tail, and a bird-like beaked head. The elegant creature almost melts into the landscape. The horse is situated 2.5 km from Uffington village on a steep close to the Late Bronze Age* (c. 7th century BCE) hillfort of Uffington Castle and below the Ridgeway, a long-distance Neolithic** track.</span></p>
                <p><span style="font-size: large;">The Uffington Horse is also surrounded by Bronze Age burial mounds. It is not far from the Bronze Age cemetery of Lambourn Seven Barrows, which consists of more than 30 well-preserved burial mounds. The carving has been placed in such a way as to make it extremely difficult to see from close quarters, and like many geoglyphs is best appreciated from the air. Nevertheless, there are certain areas of the Vale of the White Horse, the valley containing and named after the enigmatic creature, from which an adequate impression may be gained. Indeed on a clear day the carving can be seen from up to 30 km away.</span></p>
                <p><span style="font-size: large;">The earliest evidence of a horse at Uffington is from the 1070s CE when 'White Horse Hill' is mentioned in documents from the nearby Abbey of Abingdon, and the first reference to the horse itself is soon after, in 1190 CE. However, the carving is believed to date back much further than that. Due to the similarity of the Uffington White Horse to the stylised depictions of horses on 1st century BCE coins, it had been thought that the creature must also date to that period.</span></p>
                <p><span style="font-size: large;">However, in 1995 Optically Stimulated Luminescence (OSL) testing was carried out by the Oxford Archaeological Unit on soil from two of the lower layers of the horse's body, and from another cut near the base. The result was a date for the horse's construction somewhere between 1400 and 600 BCE – in other words, it had a Late Bronze Age or Early Iron Age origin.</span></p>
                <p><span style="font-size: large;">The latter end of this date range would tie the carving of the horse in with occupation of the nearby Uffington hillfort, indicating that it may represent a tribal emblem making the land of the inhabitants of the hillfort. Alternatively, the carving may have been carried out during a Bronze or Iron Age ritual. Some researchers see the horse as representing the Celtic*** horse goddess Epona, who was worshipped as a protector of horses, and for her associations with fertility. However, the cult of Epona was not imported from Gaul (France) until around the first century CE. This date is at least six centuries after the Uffington Horse was probably carved. Nevertheless, the horse had great ritual and economic significance during the Bronze and Iron Ages, as attested by its depictions on jewellery and other metal objects. It is possible that the carving represents a goddess in native mythology, such as Rhiannon, described in later Welsh mythology as a beautiful woman dressed in gold and riding a white horse.</span></p>
                <p><span style="font-size: large;">The fact that geoglyphs can disappear easily, along with their associated rituals and meaning, indicates that they were never intended to be anything more than temporary gestures. But this does not lessen their importance. These giant carving are a fascinating glimpse into the minds of their creators and how they viewed the landscape in which they lived.</span></p>
                <p><span style="font-size: large;">———-</span></p>
                <p><span style="font-size: medium;">*Iron Age: a period (in Britain 800 BCE – 43 CE) that is characterised by the use of iron tools</span></p>
                <p><span style="font-size: medium;">*Bronze Age: a period (in Britain c. 2,500 BCE – 800 BCE) that is characterised by the development of bronze tools</span></p>
                <p><span style="font-size: medium;">**Neolithic: a period (in Britain c. 4,000 BCE – c. 2,500 BCE) that is significant for the spread of agricultural practices, and the use of stone tools</span></p>
                <p><span style="font-size: medium;">***Celtic: an ancient people who migrated from Europe to Britain before the Romans</span></p>
                `,
                questions: [
                    {
                        type: 'true-false-not-given',
                        startQuestionNumber: 1,
                        title: 'Questions 1-8',
                        instruction: 'Do the following statements agree with the information given in Reading Passage 1?',
                        items: [
                            { statement: 'Most geoglyphs in England are located in a particular area of the country.' },
                            { statement: 'There are more geoglyphs in the shape of a horse than any other creature.' },
                            { statement: 'A recent dating of the Uffington White Horse indicates that people were mistaken about its age.' },
                            { statement: 'Historians have come to an agreement about the origins of the Long Man of Wilmington.' },
                            { statement: 'Geoglyphs were created by people placing white chalk on the hillside.' },
                            { statement: 'Many geoglyphs in England are no longer visible.' },
                            { statement: 'The shape of some geoglyphs has been altered over time.' },
                            { statement: 'The fame of the Uffington White Horse is due to its size.' }
                        ]
                    },
                    {
                        type: 'fill-in-blanks',
                        startQuestionNumber: 9,
                        title: 'Questions 9-13',
                        instruction: 'Complete the summary below.',
                        wordLimit: 'Choose ONE WORD ONLY from the passage for each answer.',
                        sectionTitle: 'The Uffington White Horse',
                        items: [
                            {
                                prefix: 'The location of the Uffington White Horse: a distance of 2.5 km from Uffington village, near an ancient road known as the',
                                suffix: '.'
                            },
                            {
                                prefix: 'Dating the Uffington White Horse: first reference to White Horse Hill appears in',
                                suffix: 'from the 1070s.'
                            },
                            {
                                prefix: 'According to analysis of the surrounding',
                                suffix: ', the Horse is Late Bronze Age / Early Iron Age.'
                            },
                            {
                                prefix: 'Possible reasons for creation: was a representation of goddess Epona – associated with protection of horses and',
                                suffix: '.'
                            },
                            {
                                prefix: 'Was a representation of a Welsh goddess called',
                                suffix: '.'
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Reading Passage 2',
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 14-26</strong>&nbsp;which are based on Reading Passage 2 below.</span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>I contain multitudes</strong></span></h2>
                <p><span style="font-size: large;"><em>Wendy Moore reviews Ed Yong's book about microbes</em></span></p>
                <p><span style="font-size: large;">Microbes, most of them bacteria, have populated this planet since long before animal life developed and they will outlive us. Invisible to the naked eye, they are ubiquitous. They inhabit the soil, air, rocks and water and are present within every form of life, from seaweed and coral to dogs and humans. And, as Yong explains in his utterly absorbing and hugely important book we mess with them at our peril.</span></p>
                <p><span style="font-size: large;">Every species has its own colony of microbes, called a 'microbiome', and these microbes vary not only between species but also between individuals and within different parts of each individual. What is amazing is that while the number of human cells in the average person is about 30 trillion, the number of microbial ones is higher – about 39 trillion. At best, Yong informs us, we are only 50 per cent human. Indeed, some scientists even suggest we should think of each species and its microbes as a single unit, dubbed a 'holobiont'.</span></p>
                <p><span style="font-size: large;">In each human there are microbes that live only in the stomach, the mouth or the armpit and by and large they do so peacefully. So 'bad' microbes are just microbes out of context. Microbes that sit contentedly in the human gut (where there are more microbes than there are stars in the galaxy) can become deadly if they find their way into the bloodstream. These communities are constantly changing too. The right hand shares just one sixth of its microbes with the left hand. And, of course, we are surrounded by microbes. Every time we eat, we swallow a million microbes in each gram of food; we are continually swapping microbes with other humans, pets and the world at large.</span></p>
                <p><span style="font-size: large;">It's a fascinating topic and Yong, a young British science journalist, is an extraordinarily adept guide. Writing with lightness and panache, he has a knack of explaining complex science in terms that are both easy to understand and totally enthralling. Yong is on a mission. Leading us gently by the hand, he takes us into the world of microbes – a bizarre, alien planet – in a bid to persuade us to love them as much as he does. By the end, we do.</span></p>
                <p><span style="font-size: large;">For most of human history we had no idea that microbes existed. The first man to see these extraordinarily potent creatures was a Dutch lens-maker called Antony van Leeuwenhoek in the 1670s. Using microscopes of his own design that could magnify up to 270 times, he examined a drop of water from a nearby lake and found it teeming with tiny creatures he called 'animalcules'. It wasn't until nearly two hundred years later that the research of French biologist Louis Pasteur indicated that some microbes caused disease. It was Pasteur's 'germ theory' that gave bacteria the poor image that endures today.</span></p>
                <p><span style="font-size: large;">Yong's book is in many ways a plea for microbial tolerance, pointing out that while fewer than one hundred species of bacteria bring disease, many thousands more play a vital role in maintaining our health. The book also acknowledges that our attitude towards bacteria is not a simple one. We tend to see the dangers posed by bacteria, yet at the same time we are sold yoghurts and drinks that supposedly nurture 'friendly' bacteria. In reality, says Yong, bacteria should not be viewed as either friends or foes, villains or heroes. Instead we should realise we have a symbiotic relationship, that can be mutually beneficial or mutually destructive.</span></p>
                <p><span style="font-size: large;">What then do these millions of organisms do? The answer is pretty much everything. New research is now unravelling the ways in which bacteria aid digestion, regulate our immune systems, eliminate toxins, produce vitamins, affect our behaviour and even combat obesity. 'They actually help us become who we are,' says Yong. But we are facing a growing problem. Our obsession with hygiene, our overuse of antibiotics and our unhealthy, low-fibre diets are disrupting the bacterial balance and may be responsible for soaring rates of allergies and immune problems, such as inflammatory bowel disease (IBD).</span></p>
                <p><span style="font-size: large;">The most recent research actually turns accepted norms upside down. For example, there are studies indicating that the excessive use of household detergents and antibacterial products actually destroys the microbes that normally keep the more dangerous germs at bay. Other studies show that keeping a dog as a pet gives children early exposure to a diverse range of bacteria, which may help protect them against allergies later.</span></p>
                <p><span style="font-size: large;">The readers of Yong's book must be prepared for a decidedly unglamorous world. Among the less appealing case studies is one about a fungus that is wiping out entire populations of frogs and that can be halted by a rare microbial bacterium. Another is about squid that carry luminescent bacteria that protect them against predators. However, if you can overcome your distaste for some of the investigations, the reasons for Yong's enthusiasm become clear. The microbial world is a place of wonder. Already, in an attempt to stop mosquitoes spreading dengue fever – a disease that infects 400 million people a year – mosquitoes are being loaded with a bacterium to block the disease. In the future, our ability to manipulate microbes means we could construct buildings with useful microbes built into their walls to fight off infections. Just imagine a neonatal hospital ward coated in a specially mixed cocktail of microbes so that babies get the best start in life.</span></p>
                `,
                questions: [
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 14,
                        title: 'Questions 14-16',
                        instruction: 'Choose the correct letter, A, B, C or D.',
                        items: [
                            {
                                question: 'What point does the writer make about microbes in the first paragraph?',
                                options: [
                                    { value: 'A', text: 'They adapt quickly to their environment.' },
                                    { value: 'B', text: 'The risk they pose has been exaggerated.' },
                                    { value: 'C', text: 'They are more plentiful in animal life than plant life.' },
                                    { value: 'D', text: 'They will continue to exist for longer than the human race.' }
                                ]
                            },
                            {
                                question: 'In the second paragraph, the writer is impressed by the fact that',
                                options: [
                                    { value: 'A', text: 'each species tends to have vastly different microbes.' },
                                    { value: 'B', text: 'some parts of the body contain relatively few microbes.' },
                                    { value: 'C', text: 'the average individual has more microbial cells than human ones.' },
                                    { value: 'D', text: 'scientists have limited understanding of how microbial cells behave.' }
                                ]
                            },
                            {
                                question: 'What is the writer doing in the fifth paragraph?',
                                options: [
                                    { value: 'A', text: 'explaining how a discovery was made' },
                                    { value: 'B', text: 'comparing scientists\' theories about microbes' },
                                    { value: 'C', text: 'describing confusion among scientists' },
                                    { value: 'D', text: 'giving details of how microbes cause disease' }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'summary-completion',
                        startQuestionNumber: 17,
                        title: 'Questions 17-20',
                        instruction: 'Complete the summary using the list of words, A-H, below.',
                        sectionTitle: 'We should be more tolerant of microbes',
                        options: [
                            { value: 'A', text: 'solution' },
                            { value: 'B', text: 'partnership' },
                            { value: 'C', text: 'destruction' },
                            { value: 'D', text: 'exaggeration' },
                            { value: 'E', text: 'cleanliness' },
                            { value: 'F', text: 'regulations' },
                            { value: 'G', text: 'illness' },
                            { value: 'H', text: 'nutrition' }
                        ],
                        items: [
                            {
                                text: 'Yong\'s book argues that we should be more tolerant of microbes. Many have a beneficial effect, and only a relatively small number lead to',
                                suffix: '.'
                            },
                            {
                                text: 'And although it is misleading to think of microbes as \'friendly\', we should also stop thinking of them as the enemy. In fact, we should accept that our relationship with microbes is one based on',
                                suffix: '.'
                            },
                            {
                                text: 'New research shows that microbes have numerous benefits for humans. Amongst other things, they aid digestion, remove poisons, produce vitamins and may even help reduce obesity. However, there is a growing problem. Our poor',
                                suffix: ', our overuse of antibiotics, and our excessive focus on'
                            },
                            {
                                text: '',
                                suffix: 'are upsetting the bacterial balance and may be contributing to the huge increase in allergies and immune system problems.'
                            }
                        ]
                    },
                    {
                        type: 'yes-no-not-given',
                        startQuestionNumber: 21,
                        title: 'Questions 21-26',
                        instruction: 'Do the following statements agree with the claims of the writer in Reading Passage 2?',
                        items: [
                            { statement: 'It is possible that using antibacterial products in the home fails to have the desired effect.' },
                            { statement: 'It is a good idea to ensure that children come into contact with as few bacteria as possible.' },
                            { statement: 'Yong\'s book contains more case studies than are necessary.' },
                            { statement: 'The case study about bacteria that prevent squid from being attacked may have limited appeal.' },
                            { statement: 'Efforts to control dengue fever have been surprisingly successful.' },
                            { statement: 'Microbes that reduce the risk of infection have already been put inside the walls of some hospital wards.' }
                        ]
                    }
                ]
            },
            {
                title: 'Reading Passage 3',
                content: `
                <p><span style="font-size: large;">You should spend about 20 minutes on <strong>Questions 27-40</strong> which are based on Reading Passage 3 below.</span></p>
                <h2 style="text-align: center;"><span style="font-size: x-large;"><strong>How to make wise decisions</strong></span></h2>
                <p><span style="font-size: large;">Across cultures, wisdom has been considered one of the most revered human qualities. Although the truly wise may seem few and far between, empirical research examining wisdom suggests that it isn't an exceptional trait possessed by a small handful of bearded philosophers after all – in fact, the latest studies suggest that most of us have the ability to make wise decisions, given the right context.</span></p>
                <p><span style="font-size: large;">'It appears that experiential, situational, and cultural factors are even more powerful in shaping wisdom than previously imagined,' says Associate Professor Igor Grossmann of the University of Waterloo in Ontario, Canada. 'Recent empirical findings from cognitive, developmental, social, and personality psychology cumulatively suggest that people's ability to reason wisely varies dramatically across experiential and situational contexts. Understanding the role of such contextual factors offers unique insights into understanding wisdom in daily life, as well as how it can be enhanced and taught.'</span></p>
                <p><span style="font-size: large;">It seems that it's not so much that some people simply possess wisdom and others lack it, but that our ability to reason wisely depends on a variety of external factors. 'It is impossible to characterize thought processes attributed to wisdom without considering the role of contextual factors,' explains Grossmann. 'In other words, wisdom is not solely an "inner quality" but rather unfolds as a function of situations people happen to be in. Some situations are more likely to promote wisdom than others.'</span></p>
                <p><span style="font-size: large;">Coming up with a definition of wisdom is challenging, but Grossmann and his colleagues have identified four key characteristics as part of a framework of wise reasoning. One is intellectual humility or recognition of the limits of our own knowledge, and another is appreciation of perspectives wider than the issue at hand. Sensitivity to the possibility of change in social relations is also key, along with compromise or integration of different attitudes and beliefs.</span></p>
                <p><span style="font-size: large;">Grossmann and his colleagues have also found that one of the most reliable ways to support wisdom in our own day-to-day decisions is to look at scenarios from a third-party perspective, as though giving advice to a friend. Research suggests that when adopting a first-person viewpoint we focus on 'the focal features of the environment' and when we adopt a third-person, 'observer' viewpoint we reason more broadly and focus more on interpersonal and moral ideals such as justice and impartiality. Looking at problems from this more expansive viewpoint appears to foster cognitive processes related to wise decisions.</span></p>
                <p><span style="font-size: large;">What are we to do, then, when confronted with situations like a disagreement with a spouse or negotiating a contract at work, that require us to take a personal stake? Grossmann argues that even when we aren't able to change the situation, we can still evaluate these experiences from different perspectives.</span></p>
                <p><span style="font-size: large;">For example, in one experiment that took place during the peak of a recent economic recession, graduating college seniors were asked to reflect on their job prospects. The students were instructed to imagine their career either 'as if you were a distant observer' or 'before your own eyes as if you were right there'. Participants in the group assigned to the 'distant observer' role displayed more wisdom-related reasoning (intellectual humility and recognition of change) than did participants in the control group.</span></p>
                <p><span style="font-size: large;">In another study, couples in long-term romantic relationships were instructed to visualize an unresolved relationship conflict either through the eyes of an outsider or from their own perspective. Participants then discussed the incident with their partner for 10 minutes, after which they wrote down their thoughts about it. Couples in the 'other's eyes' condition were significantly more likely to rely on wise reasoning – recognizing others' perspectives and searching for a compromise – compared to the couples in the egocentric condition.</span></p>
                <p><span style="font-size: large;">'Ego-decentering promotes greater focus on others and enables a bigger picture, conceptual view of the experience, affording recognition of intellectual humility and change,' says Grossmann.</span></p>
                <p><span style="font-size: large;">We might associate wisdom with intelligence or particular personality traits, but research shows only a small positive relationship between wise thinking and crystallized intelligence and the personality traits of openness and agreeableness. 'It is remarkable how much people can vary in their wisdom from one situation to the next, and how much stronger such contextual effects are for understanding the relationship between wise judgment and its social and affective outcomes as compared to the generalized "traits",' Grossmann explains. 'That is, knowing how wisely a person behaves in a given situation is more informative for understanding their emotions or likelihood to forgive [or] retaliate as compared to knowing whether the person may be wise "in general".'</span></p>
                `,
                questions: [
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 27,
                        title: 'Questions 27-30',
                        instruction: 'Choose the correct letter, A, B, C or D.',
                        items: [
                            {
                                question: 'What point does the writer make in the first paragraph?',
                                options: [
                                    { value: 'A', text: 'Wisdom appears to be unique to the human race.' },
                                    { value: 'B', text: 'A basic assumption about wisdom may be wrong.' },
                                    { value: 'C', text: 'Concepts of wisdom may depend on the society we belong to.' },
                                    { value: 'D', text: 'There is still much to be discovered about the nature of wisdom.' }
                                ]
                            },
                            {
                                question: 'What does Igor Grossmann suggest about the ability to make wise decisions?',
                                options: [
                                    { value: 'A', text: 'It can vary greatly from one person to another.' },
                                    { value: 'B', text: 'Earlier research into it was based on unreliable data.' },
                                    { value: 'C', text: 'The importance of certain influences on it was underestimated.' },
                                    { value: 'D', text: 'Various branches of psychology define it according to their own criteria.' }
                                ]
                            },
                            {
                                question: 'According to the third paragraph, Grossmann claims that the level of wisdom an individual shows',
                                options: [
                                    { value: 'A', text: 'can be greater than they think it is.' },
                                    { value: 'B', text: 'will be different in different circumstances.' },
                                    { value: 'C', text: 'may be determined by particular aspects of their personality.' },
                                    { value: 'D', text: 'should develop over time as a result of their life experiences.' }
                                ]
                            },
                            {
                                question: 'What is described in the fifth paragraph?',
                                options: [
                                    { value: 'A', text: 'a difficulty encountered when attempting to reason wisely' },
                                    { value: 'B', text: 'an example of the type of person who is likely to reason wisely' },
                                    { value: 'C', text: 'a controversial view about the benefits of reasoning wisely' },
                                    { value: 'D', text: 'a recommended strategy that can help people to reason wisely' }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'summary-completion',
                        startQuestionNumber: 31,
                        title: 'Questions 31-35',
                        instruction: 'Complete the summary using the list of words, A-J, below.',
                        sectionTitle: 'The characteristics of wise reasoning',
                        options: [
                            { value: 'A', text: 'opinions' },
                            { value: 'B', text: 'confidence' },
                            { value: 'C', text: 'view' },
                            { value: 'D', text: 'modesty' },
                            { value: 'E', text: 'problems' },
                            { value: 'F', text: 'objectivity' },
                            { value: 'G', text: 'fairness' },
                            { value: 'H', text: 'experiences' },
                            { value: 'I', text: 'range' },
                            { value: 'J', text: 'reasons' }
                        ],
                        items: [
                            {
                                text: 'Igor Grossmann and colleagues have established four characteristics which enable us to make wise decisions. It is important to have a certain degree of',
                                suffix: 'regarding the extent of our knowledge, and to take into account'
                            },
                            {
                                text: '',
                                suffix: 'which may not be the same as our own. We should also be able to take a broad'
                            },
                            {
                                text: '',
                                suffix: 'of any situation. Another key characteristic is being aware of the likelihood of alterations in the way that people relate to each other.'
                            },
                            {
                                text: 'Grossmann also believes that it is better to regard scenarios with',
                                suffix: '. By avoiding the first-person perspective, we focus more on'
                            },
                            {
                                text: '',
                                suffix: 'and on other moral ideals, which in turn leads to wiser decision-making.'
                            }
                        ]
                    },
                    {
                        type: 'true-false-not-given',
                        startQuestionNumber: 36,
                        title: 'Questions 36-40',
                        instruction: 'Do the following statements agree with the information given in Reading Passage 3?',
                        items: [
                            { statement: 'Students participating in the job prospects experiment could choose one of two perspectives to take.' },
                            { statement: 'Participants in the couples experiment were aware that they were taking part in a study about wise reasoning.' },
                            { statement: 'In the couples experiments, the length of the couples\' relationships had an impact on the results.' },
                            { statement: 'In both experiments, the participants who looked at the situation from a more detached viewpoint tended to make wiser decisions.' },
                            { statement: 'Grossmann believes that a person\'s wisdom is determined by their intelligence to only a very limited extent.' }
                        ]
                    }
                ]
            }
        ]
    }
];