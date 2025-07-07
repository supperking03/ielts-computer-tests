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
<h2 style="text-align: center;"><span style="font-size: x-large;"><strong>Alfred Wegener: science, exploration and the theory of continental drift</strong></span></h2>
<p style="text-align: center;"><span style="font-size: large;"><em>by Mott T Greene</em></span></p>
<p><span style="font-size: large;"><strong>Introduction</strong></span></p>
<p><span style="font-size: large;">This is a book about the life and scientific work of Alfred Wegener, whose reputation today rests with his theory of continental displacements, better known as 'continental drift'. Wegener proposed this theory in 1912 and developed it extensively for nearly 20 years. His book on the subject, <em>The Origin of Continents</em> and <em>Oceans</em>, went through four editions and was the focus of an international controversy in his lifetime and for some years after his death.</span></p>
<p><span style="font-size: large;">Wegener's basic idea was that many mysteries about the Earth's history could be solved if one supposed that the continents moved laterally, rather than supposing that they remained fixed in place. Wegener showed in great detail how such continental movements were plausible and how they worked, using evidence from a large number of sciences including geology, geophysics, paleontology, and climatology. Wegener's idea – that the continents move – is at the heart of the theory that guides Earth sciences today: namely plate tectonics. Plate tectonics is in many respects quite different from Wegener's proposal, in the same way that modern evolutionary theory is very different from the ideas Charles Darwin proposed in the 1850s about biological evolution. Yet plate tectonics is a descendant of Alfred Wegener's theory of continental drift, in quite the same way that modern evolutionary theory is a descendant of Darwin's theory of natural selection.</span></p>
<p><span style="font-size: large;">When I started writing about Wegener's life and work, one of the most intriguing things about him for me was that, although he came up with a theory on continental drift, he was not a geologist. He trained as an astronomer and pursued a career in atmospheric physics. When he proposed the theory of continental displacements in 1912, he was a lecturer in physics and astronomy at the University of Marburg, in southern Germany. However, he was not an 'unknown'. In 1906 he had set a world record (with his brother Kurt) for time aloft in a hot-air balloon: 52 hours. Between 1906 and 1908 he had taken part in a highly publicized and extremely dangerous expedition to the coast of northeast Greenland. He had also made a name for himself amongst a small circle of meteorologists and atmospheric physicists in Germany as the author of a textbook, <em>Thermodynamics of the Atmosphere</em> (1911), and of a number of interesting scientific papers.</span></p>
<p><span style="font-size: large;">As important as Wegener's work on continental drift has turned out to be, it was largely a sideline to his interest in atmospheric physics, geophysics, and paleoclimatology*, and thus I have been at great pains to put Wegener's work on continental drift in the larger context of his other scientific work, and in the even larger context of atmospheric sciences in his lifetime. This is a 'continental drift book' only to the extent that Wegener was interested in that topic and later became famous for it. My treatment of his other scientific work is no less detailed, though I certainly have devoted more attention to the reception of his ideas on continental displacement, as they were much more controversial than his other work.</span></p>
<p><span style="font-size: large;">Readers interested in the specific detail of Wegener's career will see that he often stopped pursuing a given line of investigation (sometimes for years on end), only to pick it up later. I have tried to provide guideposts to his rapidly shifting interests by characterizing different phases of his life as careers in different sciences, which is reflected in the titles of the chapters. Thus, the index should be a sufficient guide for those interested in a particular aspect of Wegener's life but perhaps not all of it. My own feeling, however, is that the parts do not make as much sense on their own as do all of his activities taken together. In this respect I urge readers to try to experience Wegener's life as he lived it, with all the interruptions, changes of mind, and renewed efforts this entailed.</span></p>
<p><span style="font-size: large;">Wegener left behind a few published works but, as was standard practice, these reported the results of his work – not the journey he took to reach that point. Only a few hundred of the many thousands of letters he wrote and received in his lifetime have survived and he didn't keep notebooks or diaries that recorded his life and activities. He was not active (with a few exceptions) in scientific societies, and did not seek to find influence or advance his ideas through professional contacts and politics, spending most of his time at home in his study reading and writing, or in the field collecting observations.</span></p>
<p><span style="font-size: large;">Some famous scientists, such as Newton, Darwin, and Einstein, left mountains of written material behind, hundreds of notebooks and letters numbering in the tens of thousands. Others, like Michael Faraday, left extensive journals of their thoughts and speculations, parallel to their scientific notebooks. The more such material a scientist leaves behind, the better chance a biographer has of forming an accurate picture of how a scientist's ideas took shape and evolved.</span></p>
<p><span style="font-size: large;">I am firmly of the opinion that most of us, Wegener included, are not in any real sense the authors of our own lives. We plan, think, and act, often with apparent freedom, but most of the time our lives 'happen to us', and we only retrospectively turn this happenstance into a coherent narrative of fulfilled intentions. This book, therefore, is a story both of the life and scientific work that Alfred Wegener planned and intended and of the life and scientific work that actually 'happened to him'. These are, as I think you will soon see, not always the same thing.</span></p>
<p><span style="font-size: large;">————-</span></p>
<p><span style="font-size: medium;">* Paleoclimatology – The study of past climates</span></p>
                `,
                questions: [
                    {
                        type: 'yes-no-not-given',
                        startQuestionNumber: 27,
                        title: 'Questions 27-30',
                        instruction: 'Do the following statements agree with the claims of the writer in Reading Passage 3?',
                        options: [
                            { value: 'YES', description: 'if the statement agrees with the claims of the writer' },
                            { value: 'NO', description: 'if the statement contradicts the claims of the writer' },
                            { value: 'NOT GIVEN', description: 'if it is impossible to say what the writer thinks about this' }
                        ],
                        items: [
                            { statement: 'Wegener\'s ideas about continental drift were widely disputed while he was alive.' },
                            { statement: 'The idea that the continents remained fixed in place was defended in a number of respected scientific publications.' },
                            { statement: 'Wegener relied on a limited range of scientific fields to support his theory of continental drift.' },
                            { statement: 'The similarities between Wegener\'s theory of continental drift and modern-day plate tectonics are enormous.' }
                        ]
                    },
                    {
                        type: 'summary-completion',
                        startQuestionNumber: 31,
                        title: 'Questions 31-36',
                        instruction: 'Complete the summary using the list of phrases, A-J, below.',
                        sectionTitle: 'Wegener\'s life and work',
                                                 options: [
                            { value: 'A', text: 'modest fame' },
                            { value: 'B', text: 'vast range' },
                            { value: 'C', text: 'record-breaking achievement' },
                            { value: 'D', text: 'research methods' },
                            { value: 'E', text: 'select group' },
                            { value: 'F', text: 'professional interests' },
                            { value: 'G', text: 'scientific debate' },
                            { value: 'H', text: 'hazardous exploration' },
                            { value: 'I', text: 'biographer\'s perspective' },
                            { value: 'J', text: 'narrow investigation' }
                        ],
                                                 items: [
                             {
                                 prefix: 'One of the remarkable things about Wegener from a',
                                 suffix: 'is that although he proposed a theory of continental drift, he was not a geologist.'
                             },
                             {
                                 prefix: 'His',
                                 suffix: 'were limited to atmospheric physics.'
                             },
                             {
                                 prefix: 'However, at the time he proposed his theory of continental drift in 1912, he was already a person of',
                                 suffix: '.'
                             },
                             {
                                 prefix: 'Six years previously, there had been his',
                                 suffix: 'of 52 hours in a hot-air balloon.'
                             },
                             {
                                 prefix: 'This was followed by his well-publicised but',
                                 suffix: 'of Greenland\'s coast.'
                             },
                             {
                                 prefix: 'With the publication of his textbook on thermodynamics, he had also come to the attention of a',
                                 suffix: 'of German scientists.'
                             }
                         ]
                    },
                    {
                        type: 'multiple-choice',
                        startQuestionNumber: 37,
                        title: 'Questions 37-40',
                        instruction: 'Choose the correct letter, A, B, C or D.',
                        items: [
                            {
                                questionNumber: 37,
                                questionText: 'What is Mott T Greene doing in the fifth paragraph?',
                                options: [
                                    { value: 'A', text: 'describing what motivated him to write the book' },
                                    { value: 'B', text: 'explaining why it is desirable to read the whole book' },
                                    { value: 'C', text: 'suggesting why Wegener pursued so many different careers' },
                                    { value: 'D', text: 'indicating what aspects of Wegener\'s life interested him most' }
                                ]
                            },
                            {
                                questionNumber: 38,
                                questionText: 'What is said about Wegener in the sixth paragraph?',
                                options: [
                                    { value: 'A', text: 'He was not a particularly ambitious person.' },
                                    { value: 'B', text: 'He kept a record of all his scientific observations.' },
                                    { value: 'C', text: 'He did not adopt many of the scientific practices of the time.' },
                                    { value: 'D', text: 'He enjoyed discussing new discoveries with other scientists.' }
                                ]
                            },
                            {
                                questionNumber: 39,
                                questionText: 'What does Greene say about some other famous scientists?',
                                options: [
                                    { value: 'A', text: 'Their published works had a greater impact than Wegener\'s did.' },
                                    { value: 'B', text: 'They had fewer doubts about their scientific ideas than Wegener did.' },
                                    { value: 'C', text: 'Their scientific ideas were more controversial than Wegener\'s.' },
                                    { value: 'D', text: 'They are easier subjects to write about than Wegener.' }
                                ]
                            },
                            {
                                questionNumber: 40,
                                questionText: 'What is Greene\'s main point in the final paragraph?',
                                options: [
                                    { value: 'A', text: 'It is not enough in life to have good intentions.' },
                                    { value: 'B', text: 'People need to plan carefully if they want to succeed.' },
                                    { value: 'C', text: 'People have little control over many aspects of their lives.' },
                                    { value: 'D', text: 'It is important that people ensure they have the freedom to act.' }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
