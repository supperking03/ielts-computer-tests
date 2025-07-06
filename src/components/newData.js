export const newTests = [
    {
        id: 1,
        explanation: "https://drive.google.com/file/d/1uTgGk6K3tP8pmojyWCQA0K_BOA3AgR9w/view?usp=sharing",
        title: 'Reading CAM 18 Test 1',
        image: 'https://ieltstrainingonline.com/wp-content/uploads/2023/06/cam-18-test-1.jpg',
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
    }
];
