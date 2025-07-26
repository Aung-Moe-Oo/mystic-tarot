export interface TarotCard {
  type: string;
  name_short: string;
  name: string;
  img: string;
  value: string;
  value_int: number;
  meaning: string;
  suggestion: string;
  meaning_up: string;
  meaning_rev: string;
  desc: string;
  suit?: string;
}

export const tarotCards: TarotCard[] = [
  {
    type: "major",
    name_short: "ar01",
    name: "The Magician",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar01.jpg`,
    value: "1",
    value_int: 1,
    meaning:
      "As a tarot reader, I see that the cards are indicating a need for skill, diplomacy and tact in your current situation. It may also be important to address any issues with subtlety and finesse. Unfortunately, the cards also show the possibility of sickness, pain, loss, and even disaster. It's also possible that there may be snares or obstacles set by enemies or rivals. However, it is also important to keep in mind that the cards are showing a strong sense of self-confidence and determination within you. This card specifically indicates a male figure, possibly referring to yourself. It's important to keep in mind that the cards are just a guide and the final outcome is always up to the choices you make.",
    suggestion:
      "you have the power to create your own reality and should use your skills to manifest your goals.",
    meaning_up:
      "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
    meaning_rev: "Physician, Magus, mental disease, disgrace, disquiet.",
    desc: "A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician's right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change unto the Ogdoad. The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ.",
  },
  {
    type: "major",
    name_short: "ar02",
    name: "The High Priestess",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar02.jpg`,
    value: "2",
    value_int: 2,
    meaning:
      "The cards you have chosen represent secrets, mysteries and the future yet to be revealed. The woman who interests you, if you are a man, or yourself, if you are a woman, is also represented by these cards. They speak of silence and tenacity, of wisdom and science that is hidden. These cards are here to guide you in uncovering the mystery that surrounds you and help you to gain understanding and insights about the future.",
    suggestion:
      "You should tap into your intuition and listen to your inner voice. Trust your instincts and pay attention to your dreams and symbols.",
    meaning_up:
      "Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.",
    meaning_rev:
      "Passion, moral or physical ardour, conceit, surface knowledge.",
    desc: "She has the lunar crescent at her feet, a horned diadem on her head, with a globe in the middle place, and a large solar cross on her breast. The scroll in her hands is inscribed with the word Tora, signifying the Greater Law, the Secret Law and the second sense of the Word. It is partly covered by her mantle, to shew that some things are implied and some spoken. She is seated between the white and black pillars--J. and B.--of the mystic Temple, and the veil of the Temple is behind her: it is embroidered with palms and pomegranates. The vestments are flowing and gauzy, and the mantle suggests light--a shimmering radiance. She has been called occult Science on the threshold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God and man. She represents also the Second Marriage of the Prince who is no longer of this world; she is the spiritual Bride and Mother, the daughter of the stars and the Higher Garden of Eden. She is, in fine, the Queen of the borrowed light, but this is the light of all. She is the Moon nourished by the milk of the Supernal Mother. In a manner, she is also the Supernal Mother herself--that is to say, she is the bright reflection. It is in this sense of reflection that her truest and highest name in bolism is Shekinah--the co-habiting glory. According to Kabalism, there is a Shekinah both above and below. In the superior world it is called Binah, the Supernal Understanding which reflects to the emanations that are beneath. In the lower world it is MaIkuth--that world being, for this purpose, understood as a blessed Kingdom that with which it is made blessed being the Indwelling Glory. Mystically speaking, the Shekinah is the Spiritual Bride of the just man, and when he reads the Law she gives the Divine meaning. There are some respects in which this card is the highest and holiest of the Greater Arcana.",
  },
  {
    type: "major",
    name_short: "ar03",
    name: "The Empress",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar03.jpg`,
    value: "3",
    value_int: 3,
    meaning:
      "As a tarot reader, I see that the cards are indicating a time of fruitfulness, action and initiative in your life. The cards suggest that you will have the opportunity to take the initiative and make things happen, and that this period in your life will be long-lasting. However, there are also indications of uncertainty and secrecy surrounding certain aspects of your life. It is important to be aware that this period may also come with some difficulties and doubts, and there may be certain areas of ignorance that you will need to overcome. Trust in your ability to take action and overcome any obstacles that may come your way.",
    suggestion:
      "You should nurture yourself and those around you. Focus on creating a comfortable and harmonious home environment.",
    meaning_up:
      "Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.",
    meaning_rev:
      "Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.",
    desc: "A stately figure, seated, having rich vestments and royal aspect, as of a daughter of heaven and earth. Her diadem is of twelve stars, gathered in a cluster. The symbol of Venus is on the shield which rests near her. A field of corn is ripening in front of her, and beyond there is a fall of water. The sceptre which she bears is surmounted by the globe of this world. She is the inferior Garden of Eden, the Earthly Paradise, all that is symbolized by the visible house of man. She is not Regina coeli, but she is still refugium peccatorum, the fruitful mother of thousands. There are also certain aspects in which she has been correctly described as desire and the wings thereof, as the woman clothed with the sun, as Gloria Mundi and the veil of the Sanctum Sanctorum; but she is not, I may add, the soul that has attained wings, unless all the symbolism is counted up another and unusual way. She is above all things universal fecundity and the outer sense of the Word. This is obvious, because there is no direct message which has been given to man like that which is borne by woman; but she does not herself carry its interpretation. In another order of ideas, the card of the Empress signifies the door or gate by which an entrance is obtained into this life, as into the Garden of Venus; and then the way which leads out therefrom, into that which is beyond, is the secret known to the High Priestess: it is communicated by her to the elect. Most old attributions of this card are completely wrong on the symbolism--as, for example, its identification with the Word, Divine Nature, the Triad, and so forth.",
  },
  {
    type: "major",
    name_short: "ar04",
    name: "The Emperor",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar04.jpg`,
    value: "4",
    value_int: 4,
    meaning:
      "As a tarot reader, I see that the cards are indicating a sense of stability and power for you. You will have protection and the ability to realize your goals. This card is also suggesting that you may have the help of a great person in your life, who will provide you with aid and guidance. You will have the reason and conviction to move forward in your decision making and it also indicates that you have authority and strong willpower. This card indicates that you are in a position of power and control, and you will be able to make things happen.",
    suggestion:
      "You should assert your authority and take control of your life. Be assertive in your decisions and take charge of your destiny.",
    meaning_up:
      "Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.",
    meaning_rev:
      "Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.",
    desc: "He has a form of the Crux ansata for his sceptre and a globe in his left hand. He is a crowned monarch--commanding, stately, seated on a throne, the arms of which axe fronted by rams' heads. He is executive and realization, the power of this world, here clothed with the highest of its natural attributes. He is occasionally represented as seated on a cubic stone, which, however, confuses some of the issues. He is the virile power, to which the Empress responds, and in this sense is he who seeks to remove the Veil of Isis; yet she remains virgo intacta. It should be understood that this card and that of the Empress do not precisely represent the condition of married life, though this state is implied. On the surface, as I have indicated, they stand for mundane royalty, uplifted on the seats of the mighty; but above this there is the suggestion of another presence. They signify also--and the male figure especially--the higher kingship, occupying the intellectual throne. Hereof is the lordship of thought rather than of the animal world. Both personalities, after their own manner, are full of strange experience, but theirs is not consciously the wisdom which draws from a higher world. The Emperor has been described as (a) will in its embodied form, but this is only one of its applications, and (b) as an expression of virtualities contained in the Absolute Being--but this is fantasy.",
  },
  {
    type: "major",
    name_short: "ar05",
    name: "The Hierophant",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar05.jpg`,
    value: "5",
    value_int: 5,
    meaning:
      "As a tarot reader, I see that the cards are indicating a potential for marriage or alliance in your near future. However, there is also a sense of captivity or servitude that may be present. On the other hand, the cards also show a sense of mercy and goodness coming into play. It is also possible that this card is indicating a sense of inspiration and guidance, possibly from a person who is important to you. It is important to keep in mind that tarot readings are open to interpretation and it's always best to rely on your intuition and the context of the question.",
    suggestion:
      "You should seek guidance from a spiritual teacher or mentor. Follow your spiritual path and align yourself with your higher purpose.",
    meaning_up:
      "Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.",
    meaning_rev:
      "Society, good understanding, concord, overkindness, weakness.",
    desc: "He wears the triple crown and is seated between two pillars, but they are not those of the Temple which is guarded by the High Priestess. In his left hand he holds a sceptre terminating in the triple cross, and with his right hand he gives the well-known ecclesiastical sign which is called that of esotericism, distinguishing between the manifest and concealed part of doctrine. It is noticeable in this connexion that the High Priestess makes no sign. At his feet are the crossed keys, and two priestly ministers in albs kneel before him. He has been usually called the Pope, which is a particular application of the more general office that he symbolizes. He is the ruling power of external religion, as the High Priestess is the prevailing genius of the esoteric, withdrawn power. The proper meanings of this card have suffered woeful admixture from nearly all hands. Grand Orient says truly that the Hierophant is the power of the keys, exoteric orthodox doctrine, and the outer side of the life which leads to the doctrine; but he is certainly not the prince of occult doctrine, as another commentator has suggested. He is rather the summa totius theologiæ, when it has passed into the utmost rigidity of expression; but he symbolizes also all things that are righteous and sacred on the manifest side. As such, he is the channel of grace belonging to the world of institution as distinct from that of Nature, and he is the leader of salvation for the human race at large. He is the order and the head of the recognized hierarchy, which is the reflection of another and greater hierarchic order; but it may so happen that the pontiff forgets the significance of this his symbolic state and acts as if he contained within his proper measures all that his sign signifies or his symbol seeks to shew forth. He is not, as it has been thought, philosophy-except on the theological side; he is not inspiration; and he is not religion, although he is a mode of its expression.",
  },
  {
    type: "major",
    name_short: "ar06",
    name: "The Lovers",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar06.jpg`,
    value: "6",
    value_int: 6,
    meaning:
      "As a tarot reader, I see that the cards are indicating a strong focus on attraction and love in your near future. The cards are also indicating that there is a strong emphasis on beauty and grace in the situations that are coming your way. You are also going to face some trials and obstacles but you will be able to overcome them with your strength and determination. Overall, the cards are telling us that love and beauty will be a central theme in the upcoming period.",
    suggestion:
      "You should focus on relationships, whether it be romantic, familial or platonic. Be open to new possibilities and take the time to understand the people around you.",
    meaning_up: "Attraction, love, beauty, trials overcome.",
    meaning_rev:
      "Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.",
    desc: "The sun shines in the zenith, and beneath is a great winged figure with arms extended, pouring down influences. In the foreground are two human figures, male and female, unveiled before each other, as if Adam and Eve when they first occupied the paradise of the earthly body. Behind the man is the Tree of Life, bearing twelve fruits, and the Tree of the Knowledge of Good and Evil is behind the woman; the serpent is twining round it. The figures suggest youth, virginity, innocence and love before it is contaminated by gross material desire. This is in all simplicity the card of human love, here exhibited as part of the way, the truth and the life. It replaces, by recourse to first principles, the old card of marriage, which I have described previously, and the later follies which depicted man between vice and virtue. In a very high sense, the card is a mystery of the Covenant and Sabbath. The suggestion in respect of the woman is that she signifies that attraction towards the sensitive life which carries within it the idea of the Fall of Man, but she is rather the working of a Secret Law of Providence than a willing and conscious temptress. It is through her imputed lapse that man shall arise ultimately, and only by her can he complete himself. The card is therefore in its way another intimation concerning the great mystery of womanhood. The old meanings fall to pieces of necessity with the old pictures, but even as interpretations of the latter, some of them were of the order of commonplace and others were false in symbolism.",
  },
  {
    type: "major",
    name_short: "ar07",
    name: "The Chariot",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar07.jpg`,
    value: "7",
    value_int: 7,
    meaning:
      "As a tarot reader, I want to convey to you that the cards are showing a mix of energies. On one hand, there is a sense of support and protection, as if someone or something is guiding you. On the other hand, there may be a sense of conflict, struggle or war. The cards also show a potential for triumph and victory, but also a hint of overconfidence or presumption. Additionally, there may be a sense of seeking revenge or seeking justice. These energies can manifest in different ways, but overall it's important to be aware of them and navigate through them with caution and balance.",
    suggestion:
      "You should focus on your goals and take action towards achieving them. Stay determined and stay the course, even in the face of obstacles.",
    meaning_up:
      "Succour, providence also war, triumph, presumption, vengeance, trouble.",
    meaning_rev: "Riot, quarrel, dispute, litigation, defeat.",
    desc: "An erect and princely figure carrying a drawn sword and corresponding, broadly speaking, to the traditional description which I have given in the first part. On the shoulders of the victorious hero are supposed to be the Urim and Thummim. He has led captivity captive; he is conquest on all planes--in the mind, in science, in progress, in certain trials of initiation. He has thus replied to the sphinx, and it is on this account that I have accepted the variation of Éliphas Lévi; two sphinxes thus draw his chariot. He is above all things triumph in the mind. It is to be understood for this reason (a) that the question of the sphinx is concerned with a Mystery of Nature and not of the world of Grace, to which the charioteer could offer no answer; (b) that the planes of his conquest are manifest or external and not within himself; (c) that the liberation which he effects may leave himself in the bondage of the logical understanding; (d) that the tests of initiation through which he has passed in triumph are to be understood physically or rationally; and (e) that if he came to the pillars of that Temple between which the High Priestess is seated, he could not open the scroll called Tora, nor if she questioned him could he answer. He is not hereditary royalty and he is not priesthood.",
  },
  {
    type: "major",
    name_short: "ar08",
    name: "Fortitude",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar08.jpg`,
    value: "8",
    value_int: 8,
    meaning:
      "As a tarot reader, I see that you are currently experiencing a strong sense of power and energy. This energy is pushing you to take action and be courageous in your endeavors. You possess a sense of magnanimity, which will help you to overcome any obstacle. This energy is leading towards complete success and honours in the near future. Trust your intuition and keep pushing forward, the universe is aligning in your favor.",
    suggestion:
      "You should tap into your inner strength and courage. Believe in yourself and your abilities, and don't be afraid to be vulnerable.",
    meaning_up:
      "Power, energy, action, courage, magnanimity; also complete success and honours.",
    meaning_rev:
      "Despotism, abuse if power, weakness, discord, sometimes even disgrace.",
    desc: "A woman, over whose head there broods the same symbol of life which we have seen in the card of the Magician, is closing the jaws of a lion. The only point in which this design differs from the conventional presentations is that her beneficent fortitude has already subdued the lion, which is being led by a chain of flowers. For reasons which satisfy myself, this card has been interchanged with that of justice, which is usually numbered eight. As the variation carries nothing with it which will signify to the reader, there is no cause for explanation. Fortitude, in one of its most exalted aspects, is connected with the Divine Mystery of Union; the virtue, of course, operates in all planes, and hence draws on all in its symbolism. It connects also with innocentia inviolata, and with the strength which resides in contemplation. These higher meanings are, however, matters of inference, and I do not suggest that they are transparent on the surface of the card. They are intimated in a concealed manner by the chain of flowers, which signifies, among many other things, the sweet yoke and the light burden of Divine Law, when it has been taken into the heart of hearts. The card has nothing to do with self-confidence in the ordinary sense, though this has been suggested--but it concerns the confidence of those whose strength is God, who have found their refuge in Him. There is one aspect in which the lion signifies the passions, and she who is called Strength is the higher nature in its liberation. It has walked upon the asp and the basilisk and has trodden down the lion and the dragon.",
  },
  {
    type: "major",
    name_short: "ar09",
    name: "The Hermit",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar09.jpg`,
    value: "9",
    value_int: 9,
    meaning:
      "hAs a tarot reader, I would advise to be cautious and considerate when making decisions, particularly when it comes to matters of trust and loyalty. The cards are indicating potential for deceit, dishonesty, and shady behavior from those around you. It may be necessary to protect yourself and be extra vigilant in any dealings you may have. It's important to be aware of the possibility of corruption and to take steps to guard yourself against it.",
    suggestion:
      "You should take some time for yourself and reflect on your life and your goals.",
    meaning_up:
      "Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.",
    meaning_rev: "Concealment, disguise, policy, fear, unreasoned caution.",
    desc: "The variation from the conventional models in this card is only that the lamp is not enveloped partially in the mantle of its bearer, who blends the idea of the Ancient of Days with the Light of the World It is a star which shines in the lantern. I have said that this is a card of attainment, and to extend this conception the figure is seen holding up his beacon on an eminence. Therefore the Hermit is not, as Court de Gebelin explained, a wise man in search of truth and justice; nor is he, as a later explanation proposes, an especial example of experience. His beacon intimates that where I am, you also may be. It is further a card which is understood quite incorrectly when it is connected with the idea of occult isolation, as the protection of personal magnetism against admixture. This is one of the frivolous renderings which we owe to Éliphas Lévi. It has been adopted by the French Order of Martinism and some of us have heard a great deal of the Silent and Unknown Philosophy enveloped by his mantle from the knowledge of the profane. In true Martinism, the significance of the term Philosophe inconnu was of another order. It did not refer to the intended concealment of the Instituted Mysteries, much less of their substitutes, but--like the card itself--to the truth that the Divine Mysteries secure their own protection from those who are unprepared.",
  },
  {
    type: "major",
    name_short: "ar10",
    name: "Wheel Of Fortune",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar10.jpg`,
    value: "10",
    value_int: 10,
    meaning:
      "As a tarot reader, I can see that your cards are pointing towards a bright future. The cards are showing elements of destiny, fortune, success, elevation and luck. These elements are indicators of a positive change in your life and are leading you towards a path of felicity. Your future looks promising and it's time to trust the journey and embrace the opportunities that come your way.",
    suggestion:
      " You should be open to the changes that life brings and ride the wave of change. Trust that the universe is working in your favor.",
    meaning_up: "Destiny, fortune, success, elevation, luck, felicity.",
    meaning_rev: "Increase, abundance, superfluity.",
    desc: "In this symbol I have again followed the reconstruction of Éliphas Lévi, who has furnished several variants. It is legitimate--as I have intimated--to use Egyptian symbolism when this serves our purpose, provided that no theory of origin is implied therein. I have, however, presented Typhon in his serpent form. The symbolism is, of course, not exclusively Egyptian, as the four Living Creatures of Ezekiel occupy the angles of the card, and the wheel itself follows other indications of Lévi in respect of Ezekiel's vision, as illustrative of the particular Tarot Key. With the French occultist, and in the design itself, the symbolic picture stands for the perpetual motion of a fluidic universe and for the flux of human life. The Sphinx is the equilibrium therein. The transliteration of Taro as Rota is inscribed on the wheel, counterchanged with the letters of the Divine Name--to shew that Providence is imphed through all. But this is the Divine intention within, and the similar intention without is exemplified by the four Living Creatures. Sometimes the sphinx is represented couchant on a pedestal above, which defrauds the symbolism by stultifying the essential idea of stability amidst movement. Behind the general notion expressed in the symbol there lies the denial of chance and the fatality which is implied therein. It may be added that, from the days of Lévi onward, the occult explanations of this card are--even for occultism itself--of a singularly fatuous kind. It has been said to mean principle, fecundity, virile honour, ruling authority, etc. The findings of common fortune-telling are better than this on their own plane.",
  },
  {
    type: "major",
    name_short: "ar11",
    name: "Justice",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar11.jpg`,
    value: "11",
    value_int: 11,
    meaning:
      "The card represents fairness, justice and honesty. It suggests that the deserving party will emerge victorious in any legal matters. It may also symbolize that you will have a successful outcome in any decision making process, and that you should be just and ethical in your actions.",
    suggestion:
      "You should focus on fairness and balance in your life. Make sure that your actions align with your values.",
    meaning_up:
      "Equity, rightness, probity, executive; triumph of the deserving side in law.",
    meaning_rev:
      "Law in all its departments, legal complications, bigotry, bias, excessive severity.",
    desc: "As this card follows the traditional symbolism and carries above all its obvious meanings, there is little to say regarding it outside the few considerations collected in the first part, to which the reader is referred. It will be seen, however, that the figure is seated between pillars, like the High Priestess, and on this account it seems desirable to indicate that the moral principle which deals unto every man according to his works--while, of course, it is in strict analogy with higher things;--differs in its essence from the spiritual justice which is involved in the idea of election. The latter belongs to a mysterious order of Providence, in virtue of which it is possible for certain men to conceive the idea of dedication to the highest things. The operation of this is like the breathing of the Spirit where it wills, and we have no canon of criticism or ground of explanation concerning it. It is analogous to the possession of the fairy gifts and the high gifts and the gracious gifts of the poet: we have them or have not, and their presence is as much a mystery as their absence. The law of Justice is not however involved by either alternative. In conclusion, the pillars of Justice open into one world and the pillars of the High Priestess into another.",
  },
  {
    type: "major",
    name_short: "ar12",
    name: "The Hanged Man",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar12.jpg`,
    value: "12",
    value_int: 12,
    meaning:
      "The cards are indicating themes of wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, and prophecy. These themes suggest that you should be looking to gain insight, knowledge and understanding through careful consideration, making wise choices, and listening to your inner voice. They may also indicate that you will be facing some challenges and sacrifices in the near future. Trusting your intuition, and using divination and prophecy for guidance can help you navigate through this time.",
    suggestion:
      "You should be open to new perspectives and be willing to let go of old patterns. Be patient and wait for the right time to act.",
    meaning_up:
      "Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.",
    meaning_rev: "Selfishness, the crowd, body politic.",
    desc: "The gallows from which he is suspended forms a Tau cross, while the figure--from the position of the legs--forms a fylfot cross. There is a nimbus about the head of the seeming martyr. It should be noted (1) that the tree of sacrifice is living wood, with leaves thereon; (2) that the face expresses deep entrancement, not suffering; (3) that the figure, as a whole, suggests life in suspension, but life and not death. It is a card of profound significance, but all the significance is veiled. One of his editors suggests that Éliphas Lévi did not know the meaning, which is unquestionable nor did the editor himself. It has been called falsely a card of martyrdom, a card a of prudence, a card of the Great Work, a card of duty; but we may exhaust all published interpretations and find only vanity. I will say very simply on my own part that it expresses the relation, in one of its aspects, between the Divine and the Universe. He who can understand that the story of his higher nature is imbedded in this symbolism will receive intimations concerning a great awakening that is possible, and will know that after the sacred Mystery of Death there is a glorious Mystery of Resurrection.",
  },
  {
    type: "major",
    name_short: "ar13",
    name: "Death",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar13.jpg`,
    value: "13",
    value_int: 13,
    meaning:
      "This card is pointing towards the themes of endings, mortality, and the potential for destruction or corruption. It may indicate that a man may experience the loss of a benefactor or support system, while a woman may face many challenges or contrarieties. For a young woman, it may suggest that marriage plans or relationships may not come to fruition.",
    suggestion:
      "You should embrace change and let go of what no longer serves you. Embrace the cycle of life and rebirth.",
    meaning_up:
      "End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many contrarieties; for a maid, failure of marriage projects.",
    meaning_rev:
      "Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed.",
    desc: "The veil or mask of life is perpetuated in change, transformation and passage from lower to higher, and this is more fitly represented in the rectified Tarot by one of the apocalyptic visions than by the crude notion of the reaping skeleton. Behind it lies the whole world of ascent in the spirit. The mysterious horseman moves slowly, bearing a black banner emblazoned with the Mystic Rose, which signifies life. Between two pillars on the verge of the horizon there shines the sun of immortality. The horseman carries no visible weapon, but king and child and maiden fall before him, while a prelate with clasped hands awaits his end. There should be no need to point out that the suggestion of death which I have made in connection with the previous card is, of course, to be understood mystically, but this is not the case in the present instance. The natural transit of man to the next stage of his being either is or may be one form of his progress, but the exotic and almost unknown entrance, while still in this life, into the state of mystical death is a change in the form of consciousness and the passage into a state to which ordinary death is neither the path nor gate. The existing occult explanations of the 13th card are, on the whole, better than usual, rebirth, creation, destination, renewal, and the rest.",
  },
  {
    type: "major",
    name_short: "ar14",
    name: "Temperance",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar14.jpg`,
    value: "14",
    value_int: 14,
    meaning:
      "As a tarot reader, I have come across certain cards that indicate that the energies around you are currently focused on economy, moderation, frugality, management and accommodation. This could mean that you are being called to be mindful of your financial situation and to be frugal with your resources. It is also important to be able to manage your finances well and to look for opportunities to accommodate your current situation. This could be a time for you to be more mindful of how you spend your money and to be more mindful of your spending habits. Remember, all this is not just about being thrifty but also about being wise with your resources.",
    suggestion:
      "You should focus on balance and moderation in your life. Take the time to find inner peace and harmony.",
    meaning_up: "Economy, moderation, frugality, management, accommodation.",
    meaning_rev:
      "Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent; also disunion, unfortunate combinations, competing interests.",
    desc: "A winged angel, with the sign of the sun upon his forehead and on his breast the square and triangle of the septenary. I speak of him in the masculine sense, but the figure is neither male nor female. It is held to be pouring the essences of life from chalice to chalice. It has one foot upon the earth and one upon waters, thus illustrating the nature of the essences. A direct path goes up to certain heights on the verge of the horizon, and above there is a great light, through which a crown is seen vaguely. Hereof is some part of the Secret of Eternal Life, as it is possible to man in his incarnation. All the conventional emblems are renounced herein. So also are the conventional meanings, which refer to changes in the seasons, perpetual movement of life and even the combination of ideas. It is, moreover, untrue to say that the figure symbolizes the genius of the sun, though it is the analogy of solar light, realized in the third part of our human triplicity. It is called Temperance fantastically, because, when the rule of it obtains in our consciousness, it tempers, combines and harmonises the psychic and material natures. Under that rule we know in our rational part something of whence we came and whither we are going.",
  },
  {
    type: "major",
    name_short: "ar15",
    name: "The Devil",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar15.jpg`,
    value: "15",
    value_int: 15,
    meaning:
      "As a tarot reader, I see in your cards a theme of ravage, violence, vehemence, and the use of extraordinary efforts and force. It may indicate that there is a sense of fatality or predestination in your current situation. However, it is important to understand that this does not necessarily mean that it is an evil or negative outcome. It may simply be a natural course of events that must unfold. It's important to approach this with a clear mind and to consider all options before making any decisions. It's also important to understand that any force used should be used with caution and consideration.",
    suggestion:
      "You should be aware of your shadow self and the negative patterns that hold you back. Take responsibility for your actions and be mindful of your choices.",
    meaning_up:
      "Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.",
    meaning_rev: "Evil fatality, weakness, pettiness, blindness.",
    desc: "The design is an accommodation, mean or harmony, between several motives mentioned in the first part. The Horned Goat of Mendes, with wings like those of a bat, is standing on an altar. At the pit of the stomach there is the sign of Mercury. The right hand is upraised and extended, being the reverse of that benediction which is given by the Hierophant in the fifth card. In the left hand there is a great flaming torch, inverted towards the earth. A reversed pentagram is on the forehead. There is a ring in front of the altar, from which two chains are carried to the necks of two figures, male and female. These are analogous with those of the fifth card, as if Adam and Eve after the Fall. Hereof is the chain and fatality of the material life. The figures are tailed, to signify the animal nature, but there is human intelligence in the faces, and he who is exalted above them is not to be their master for ever. Even now, he is also a bondsman, sustained by the evil that is in him and blind to the liberty of service. With more than his usual derision for the arts which he pretended to respect and interpret as a master therein, Éliphas Lévi affirms that the Baphometic figure is occult science and magic. Another commentator says that in the Divine world it signifies predestination, but there is no correspondence in that world with the things which below are of the brute. What it does signify is the Dweller on the Threshold without the Mystical Garden when those are driven forth therefrom who have eaten the forbidden fruit.",
  },
  {
    type: "major",
    name_short: "ar16",
    name: "The Tower",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar16.jpg`,
    value: "16",
    value_int: 16,
    meaning:
      "As a tarot reader, I see that the card you have drawn represents a difficult time in your life. This card is associated with feelings of misery, distress, indigence, adversity, and even calamity. It may also indicate a sense of disgrace or deception, and the potential for ruin. This card is particularly associated with unforeseen catastrophe, so it's important to be aware that unexpected challenges may arise in the future. However, remember that tarot cards are not a prediction of future and it's important to take steps to overcome any difficulties that may come your way. It is a reminder to be prepared for the unexpected and to have a plan in place to handle any difficult situations that may arise.",
    suggestion:
      "You should be prepared for sudden changes and challenges. Trust that these changes are for your highest good.",
    meaning_up:
      "Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.",
    meaning_rev:
      "According to one account, the same in a lesser degree also oppression, imprisonment, tyranny.",
    desc: "Occult explanations attached to this card are meagre and mostly disconcerting. It is idle to indicate that it depicts min in all its aspects, because it bears this evidence on the surface. It is said further that it contains the first allusion to a material building, but I do not conceive that the Tower is more or less material than the pillars which we have met with in three previous cases. I see nothing to warrant Papus in supposing that it is literally the fall of Adam, but there is more in favour of his alternative--that it signifies the materialization of the spiritual word. The bibliographer Christian imagines that it is the downfall of the mind, seeking to penetrate the mystery of God. I agree rather with Grand Orient that it is the ruin of the House of We, when evil has prevailed therein, and above all that it is the rending of a House of Doctrine. I understand that the reference is, however, to a House of Falsehood. It illustrates also in the most comprehensive way the old truth that except the Lord build the house, they labour in vain that build it. There is a sense in which the catastrophe is a reflection from the previous card, but not on the side of the symbolism which I have tried to indicate therein. It is more correctly a question of analogy; one is concerned with the fall into the material and animal state, while the other signifies destruction on the intellectual side. The Tower has been spoken of as the chastisement of pride and the intellect overwhelmed in the attempt to penetrate the Mystery of God; but in neither case do these explanations account for the two persons who are the living sufferers. The one is the literal word made void and the other its false interpretation. In yet a deeper sense, it may signify also the end of a dispensation, but there is no possibility here for the consideration of this involved question.",
  },
  {
    type: "major",
    name_short: "ar17",
    name: "The Star",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar17.jpg`,
    value: "17",
    value_int: 17,
    meaning:
      "During this reading, we see some themes of loss, theft, privation, and abandonment. However, it's important to remember that tarot readings are not set in stone and can change with time and circumstances. There is also a glimmer of hope and bright prospects in your future, so don't lose faith. Keep in mind that this reading is just one interpretation of the cards and it's important to trust your own intuition and inner guidance as well.",
    suggestion:
      "You should trust in your own inner light and the guidance of the universe. Have faith in yourself and your abilities.",
    meaning_up:
      "Loss, theft, privation, abandonment; another reading says-hope and bright prospects,",
    meaning_rev: "Arrogance, haughtiness, impotence.",
    desc: "A great, radiant star of eight rays, surrounded by seven lesser stars--also of eight rays. The female figure in the foreground is entirely naked. Her left knee is on the land and her right foot upon the water. She pours Water of Life from two great ewers, irrigating sea and land. Behind her is rising ground and on the right a shrub or tree, whereon a bird alights. The figure expresses eternal youth and beauty. The star is l'étoile flamboyante, which appears in Masonic symbolism, but has been confused therein. That which the figure communicates to the living scene is the substance of the heavens and the elements. It has been said truly that the mottoes of this card are Waters of Life freely and Gifts of the Spirit. The summary of several tawdry explanations says that it is a card of hope. On other planes it has been certified as immortality and interior light. For the majority of prepared minds, the figure will appear as the type of Truth unveiled, glorious in undying beauty, pouring on the waters of the soul some part and measure of her priceless possession. But she is in reality the Great Mother in the Kabalistic Sephira Binah, which is supernal Understanding, who communicates to the Sephiroth that are below in the measure that they can receive her influx.",
  },
  {
    type: "major",
    name_short: "ar18",
    name: "The Moon",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar18.jpg`,
    value: "18",
    value_int: 18,
    meaning:
      "The cards are indicating the presence of hidden enemies or adversaries in your life, as well as potential danger or threat. It could also indicate that there may be calumny or false accusations being made against them. The cards are also showing a sense of darkness or secrecy, and a sense of fear or terror. There is also a possibility of deception or manipulation, as well as the influence of occult or unseen forces. It is also important to be aware of potential errors or mistakes that could be made. It's important to keep in mind that the cards are not set in stone and the interpretation may vary depending on the context of the reading and the reader's intuition. ",
    suggestion:
      "You should tap into your intuition and emotions. Be open to the subconscious and pay attention to your dreams.",
    meaning_up:
      "Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.",
    meaning_rev:
      "Instability, inconstancy, silence, lesser degrees of deception and error.",
    desc: "The distinction between this card and some of the conventional types is that the moon is increasing on what is called the side of mercy, to the right of the observer. It has sixteen chief and sixteen secondary rays. The card represents life of the imagination apart from life of the spirit. The path between the towers is the issue into the unknown. The dog and wolf are the fears of the natural mind in the presence of that place of exit, when there is only reflected light to guide it. The last reference is a key to another form of symbolism. The intellectual light is a reflection and beyond it is the unknown mystery which it cannot shew forth. It illuminates our animal nature, types of which are represented below--the dog, the wolf and that which comes up out of the deeps, the nameless and hideous tendency which is lower than the savage beast. It strives to attain manifestation, symbolized by crawling from the abyss of water to the land, but as a rule it sinks back whence it came. The face of the mind directs a calm gaze upon the unrest below; the dew of thought falls; the message is: Peace, be still; and it may be that there shall come a calm upon the animal nature, while the abyss beneath shall cease from giving up a form.",
  },
  {
    type: "major",
    name_short: "ar19",
    name: "The Sun",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar19.jpg`,
    value: "19",
    value_int: 19,
    meaning:
      "As a tarot reader, I am sensing that you are on the path towards material happiness and prosperity. There may be some positive developments in your financial and professional life. Additionally, I am picking up on a strong energy surrounding a fortunate marriage or partnership. This could indicate a happy and fulfilling relationship, or perhaps the potential for one in the near future. Overall, I am sensing a sense of contentment and fulfillment in your life. You are on the right path and things are aligning for you. Keep your positive energy flowing and trust in the journey that is unfolding for you.",
    suggestion:
      "You should focus on self-expression and creativity. Embrace your individuality and radiate your light.",
    meaning_up: "Material happiness, fortunate marriage, contentment.",
    meaning_rev: "The same in a lesser sense.",
    desc: "The naked child mounted on a white horse and displaying a red standard has been mentioned already as the better symbolism connected with this card. It is the destiny of the Supernatural East and the great and holy light which goes before the endless procession of humanity, coming out from the walled garden of the sensitive life and passing on the journey home. The card signifies, therefore, the transit from the manifest light of this world, represented by the glorious sun of earth, to the light of the world to come, which goes before aspiration and is typified by the heart of a child. But the last allusion is again the key to a different form or aspect of the symbolism. The sun is that of consciousness in the spirit - the direct as the antithesis of the reflected light. The characteristic type of humanity has become a little child therein--a child in the sense of simplicity and innocence in the sense of wisdom. In that simplicity, he bears the seal of Nature and of Art; in that innocence, he signifies the restored world. When the self-knowing spirit has dawned in the consciousness above the natural mind, that mind in its renewal leads forth the animal nature in a state of perfect conformity.",
  },
  {
    type: "major",
    name_short: "ar20",
    name: "The Last Judgment",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar20.jpg`,
    value: "20",
    value_int: 20,
    meaning:
      "As a tarot reader, I see that there is a change of position or a shift in the current situation, indicating the possibility of a renewal or fresh start. The outcome of this change may be positive, but there is also a warning of a possible loss through a lawsuit. It is important to take caution and consider all options before making any decisions. This card is not a definite outcome, but rather a reminder to be prepared for unexpected changes and to be mindful of potential legal matters.",
    suggestion:
      " You should reflect on your past actions and take responsibility for them. Make amends where necessary and move forward with a clear conscience.",
    meaning_up:
      "Change of position, renewal, outcome. Another account specifies total loss though lawsuit.",
    meaning_rev:
      "Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.",
    desc: "I have said that this symbol is essentially invariable in all Tarot sets, or at least the variations do not alter its character. The great angel is here encompassed by clouds, but he blows his bannered trumpet, and the cross as usual is displayed on the banner. The dead are rising from their tombs--a woman on the right, a man on the left hand, and between them their child, whose back is turned. But in this card there are more than three who are restored, and it has been thought worth while to make this variation as illustrating the insufficiency of current explanations. It should be noted that all the figures are as one in the wonder, adoration and ecstacy expressed by their attitudes. It is the card which registers the accomplishment of the great work of transformation in answer to the summons of the Supernal--which summons is heard and answered from within. Herein is the intimation of a significance which cannot well be carried further in the present place. What is that within us which does sound a trumpet and all that is lower in our nature rises in response--almost in a moment, almost in the twinkling of an eye? Let the card continue to depict, for those who can see no further, the Last judgment and the resurrection in the natural body; but let those who have inward eyes look and discover therewith. They will understand that it has been called truly in the past a card of eternal life, and for this reason it may be compared with that which passes under the name of Temperance.",
  },
  {
    type: "major",
    name_short: "ar00",
    name: "The Fool",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar00.jpg`,
    value: "ZERO",
    value_int: 0,
    meaning:
      "As a tarot reader, I see new beginnings on the horizon for you. This new chapter in your life brings with it a sense of innocence and purity, as if you are starting fresh and unencumbered by the past. You may feel a sense of excitement and adventure as you embark on this new journey, ready to embrace new opportunities and experiences. Allow yourself to let go of old patterns and habits and embrace the new possibilities that are coming your way. This is a time of growth and change, so stay open and receptive to all that the universe has in store for you.",
    suggestion:
      "You should take a leap of faith and trust that the universe will support you in your new venture. Embrace your inner child and let go of your fears.",
    meaning_up: "New beginnings, innocence, adventure.",
    meaning_rev:
      "Negligence, absence, distribution, carelessness, apathy, nullity, vanity.",
    desc: "With light step, as if earth and its trammels had little power to restrain him, a young man in gorgeous vestments pauses at the brink of a precipice among the great heights of the world; he surveys the blue distance before him-its expanse of sky rather than the prospect below. His act of eager walking is still indicated, though he is stationary at the given moment; his dog is still bounding. The edge which opens on the depth has no terror; it is as if angels were waiting to uphold him, if it came about that he leaped from the height. His countenance is full of intelligence and expectant dream. He has a rose in one hand and in the other a costly wand, from which depends over his right shoulder a wallet curiously embroidered. He is a prince of the other world on his travels through this one-all amidst the morning glory, in the keen air. The sun, which shines behind him, knows whence he came, whither he is going, and how he will return by another path after many days. He is the spirit in search of experience. Many symbols of the Instituted Mysteries are summarized in this card, which reverses, under high warrants, all the confusions that have preceded it. In his Manual of Cartomancy, Grand Orient has a curious suggestion of the office of Mystic Fool, as apart of his process in higher divination; but it might call for more than ordinary gifts to put it into operation. We shall see how the card fares according to the common arts of fortune-telling, and it will be an example, to those who can discern, of the fact, otherwise so evident, that the Trumps Major had no place originally in the arts of psychic gambling, when cards are used as the counters and pretexts. Of the circumstances under which this art arose we know, however, very little. The conventional explanations say that the Fool signifies the flesh, the sensitive life, and by a peculiar satire its subsidiary name was at one time the alchemist, as depicting folly at the most insensate stage.",
  },
  {
    type: "major",
    name_short: "ar21",
    name: "The World",
    img: `https://www.sacred-texts.com/tarot/pkt/img/ar21.jpg`,
    value: "21",
    value_int: 21,
    meaning:
      "Based on the cards, I see that you have a strong likelihood of achieving success and reaping the rewards of your efforts. The cards also indicate a potential journey or change of location in your near future. This could be a physical voyage or a metaphorical one in terms of your career or personal growth. It's possible that you may be considering emigrating or relocating to a new place. This change of place may bring new opportunities and possibilities for you. Overall, the cards are pointing towards a time of movement and change in your life.",
    suggestion:
      "You should celebrate your accomplishments and feel a sense of completion. Trust that everything is coming together for your highest good.",
    meaning_up:
      "Assured success, recompense, voyage, route, emigration, flight, change of place.",
    meaning_rev: "Inertia, fixity, stagnation, permanence.",
    desc: "As this final message of the Major Trumps is unchanged--and indeed unchangeable--in respect of its design, it has been partly described already regarding its deeper sense. It represents also the perfection and end of the Cosmos, the secret which is within it, the rapture of the universe when it understands itself in God. It is further the state of the soul in the consciousness of Divine Vision, reflected from the self-knowing spirit. But these meanings are without prejudice to that which I have said concerning it on the material side. It has more than one message on the macrocosmic side and is, for example, the state of the restored world when the law of manifestation shall have been carried to the highest degree of natural perfection. But it is perhaps more especially a story of the past, referring to that day when all was declared to be good, when the morning stars sang together and all the Sons of God shouted for joy. One of the worst explanations concerning it is that the figure symbolizes the Magus when he has reached the highest degree of initiation; another account says that it represents the absolute, which is ridiculous. The figure has been said to stand for Truth, which is, however, more properly allocated to the seventeenth card. Lastly, it has been called the Crown of the Magi.",
  },
  {
    name: "Page of Wands",
    name_short: "wapa",
    img: `https://www.sacred-texts.com/tarot/pkt/img/wapa.jpg`,
    value: "page",
    value_int: 11,
    suit: "wands",
    type: "minor",
    meaning:
      "As a tarot reader, I see that you have a lot of enthusiasm and inspiration in your near future. You will have the energy and drive to pursue your passions and make things happen. In addition, communication will play a big role in your upcoming experiences. You will have the ability to express yourself clearly and effectively, and you will also be able to listen and understand others better. Keep in mind that communication can be in different forms, it can be verbal or non-verbal, so be aware of the signs and messages that are around you. This energy will help you to connect with others, build strong relationships and accomplish your goals.",
    suggestion:
      "You should be open to new opportunities and explore new horizons. This card suggests that you should be open to new experiences and be ready to take on new challenges. It may also indicate that you should be willing to take risks and pursue your dreams.",
    meaning_up:
      "Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.",
    meaning_rev:
      "Anecdotes, announcements, evil news. Also indecision and the instability which accompanies it.",
    desc: "In a scene similar to the former, a young man stands in the act of proclamation. He is unknown but faithful, and his tidings are strange.",
  },
  {
    name: "Knight of Wands",
    name_short: "wakn",
    img: `https://www.sacred-texts.com/tarot/pkt/img/wakn.jpg`,
    value: "knight",
    value_int: 12,
    suit: "wands",
    type: "minor",
    meaning:
      "The cards are indicating a theme of departure, absence, flight, and emigration. It may also be symbolized by a dark young man who is friendly. This is likely to be a period of change of residence, indicating that the person may be leaving your current place and moving to somewhere new. It could be a change of job, relationship, or other major life event that is causing this shift in location. It's important to keep in mind that this might not be a negative change, it could be a good opportunity for growth and development but it's important to be open and flexible to adapt to the changes that are coming.",
    suggestion:
      "You should be confident and take action to achieve your goals. This card suggests that you should be confident in your abilities and take action to achieve your goals. It may also indicate that you should be willing to take risks and be ready to make a commitment.",
    meaning_up:
      "Departure, absence, flight, emigration. A dark young man, friendly. Change of residence.",
    meaning_rev: "Rupture, division, interruption, discord.",
    desc: "He is shewn as if upon a journey, armed with a short wand, and although mailed is not on a warlike errand. He is passing mounds or pyramids. The motion of the horse is a key to the character of its rider, and suggests the precipitate mood, or things connected therewith.",
  },
  {
    name: "Queen of Wands",
    name_short: "waqu",
    img: `https://www.sacred-texts.com/tarot/pkt/img/waqu.jpg`,
    value: "queen",
    value_int: 13,
    suit: "wands",
    type: "minor",
    meaning:
      "As a tarot reader, I see that you are currently experiencing a strong sense of confidence and leadership in your life. Your intuition and creativity are also highlighted, allowing you to take bold and decisive actions towards your goals. This is a time for you to trust yourself and your abilities, and to step into a leadership role in your personal and professional life. Your creativity is also flowing, giving you the ability to come up with unique and innovative ideas. Embrace this energy and use it to your advantage.",
    suggestion:
      "You should be confident in your abilities and take a leadership role in your endeavors. This card suggests that you should use your creativity, intuition, and passion to inspire others and achieve your goals. It may also indicate that you should be confident in your abilities, assertive, and take charge of your life.",
    meaning_up:
      "A dark woman, countrywoman, friendly, chaste, loving, honourable. If the card beside her signifies a man, she is well disposed towards him; if a woman, she is interested in the Querent. Also, love of money, or a certain success in business.",
    meaning_rev:
      "Good, economical, obliging, serviceable. Signifies also--but in certain positions and in the neighbourhood of other cards tending in such directions--opposition, jealousy, even deceit and infidelity.",
    desc: "The Wands throughout this suit are always in leaf, as it is a suit of life and animation. Emotionally and otherwise, the Queen's personality corresponds to that of the King, but is more magnetic.",
  },
  {
    name: "King of Wands",
    name_short: "waki",
    img: `https://www.sacred-texts.com/tarot/pkt/img/waki.jpg`,
    value: "king",
    value_int: 14,
    suit: "wands",
    type: "minor",
    meaning:
      "The cards are indicating that you possess a strong drive to achieve your goals, you are determined to succeed, and you have the potential to be a leader in your chosen field. These energies can be channeled to manifest your ambitions, so you should trust your instincts and take charge to reach your desired outcome.",
    suggestion:
      "You should be a visionary leader and inspire others to follow your lead. This card suggests that you should be a strong leader, with a clear vision for the future, and the ability to inspire and motivate others. It may also indicate that you should be confident in your abilities, ambitious, and take charge of your life.",
    meaning_up:
      "Dark man, friendly, countryman, generally married, honest and conscientious. The card always signifies honesty, and may mean news concerning an unexpected heritage to fall in before very long.",
    meaning_rev: "Good, but severe; austere, yet tolerant.",
    desc: "The physical and emotional nature to which this card is attributed is dark, ardent, lithe, animated, impassioned, noble. The King uplifts a flowering wand, and wears, like his three correspondences in the remaining suits, what is called a cap of maintenance beneath his crown. He connects with the symbol of the lion, which is emblazoned on the back of his throne.",
  },
  {
    name: "Ace of Wands",
    name_short: "waac",
    img: `https://www.sacred-texts.com/tarot/pkt/img/waac.jpg`,
    value: "ace",
    value_int: 1,
    suit: "wands",
    type: "minor",
    meaning:
      "I see a strong indication of new beginnings, a time of renewed energy and a chance to start anew. The cards also suggest a strong passion and inspiration, a drive to pursue your goals and passions with renewed vigor. It's a time to let go of the past and embrace the future with open arms.",
    suggestion:
      "You should focus on new beginnings, inspiration, and creativity. This card suggests that new opportunities are on the horizon and that you should take action to pursue them. It may also indicate a new project or idea that you should pursue.",
    meaning_up:
      "Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance.",
    meaning_rev:
      "Fall, decadence, ruin, perdition, to perish also a certain clouded joy.",
    desc: "A hand issuing from a cloud grasps a stout wand or club.",
  },
  {
    name: "Two of Wands",
    name_short: "wa02",
    img: `https://www.sacred-texts.com/tarot/pkt/img/wa02.jpg`,
    value: "two",
    value_int: 2,
    suit: "wands",
    type: "minor",
    meaning:
      "As a tarot reader, I see that the cards are indicating that you are currently in a phase of planning and decision making. The cards are also showing that you have a clear vision for the future and you are considering the different options available to you. It's important to stay focused on your goals, and weigh the pros and cons of each decision you make. Trust your intuition and listen to your inner voice as you move forward with your plans. Remember that you are in charge of your own destiny and the cards are here to guide you and help you make the best decision for yourself.",
    suggestion:
      "You should consider the future and plan accordingly. This card suggests that you have the ability to shape your future, but you should take action to make your plans a reality. It may also indicate that you should be aware of the decisions you make and how they will affect your future.",
    meaning_up:
      "Between the alternative readings there is no marriage possible; on the one hand, riches, fortune, magnificence; on the other, physical suffering, disease, chagrin, sadness, mortification. The design gives one suggestion; here is a lord overlooking his dominion and alternately contemplating a globe; it looks like the malady, the mortification, the sadness of Alexander amidst the grandeur of this world's wealth.",
    meaning_rev: "Surprise, wonder, enchantment, emotion, trouble, fear.",
    desc: "A tall man looks from a battlemented roof over sea and shore; he holds a globe in his right hand, while a staff in his left rests on the battlement; another is fixed in a ring. The Rose and Cross and Lily should be noticed on the left side.",
  },
  {
    name: "Three of Wands",
    name_short: "wa03",
    img: `https://www.sacred-texts.com/tarot/pkt/img/wa03.jpg`,
    value: "three",
    value_int: 3,
    suit: "wands",
    type: "minor",
    meaning:
      "As a tarot reader, I see that the cards are indicating that you are currently in a phase of exploration and expansion. This could mean that you are open to new experiences and ideas, and are ready to take on new challenges. The cards also suggest that this is a time of growth, both in terms of personal development and in terms of achieving your goals. You may be on the verge of a new chapter in your life, one that is filled with opportunities for growth and success. It's important to keep an open mind and be willing to take risks during this time, as they may lead to exciting new possibilities.",
    suggestion:
      "You should look ahead to new opportunities and be ready to take advantage of them. This card suggests that you should be proactive and think about the future. It may also indicate that you should be open to new experiences and be ready to seize opportunities as they arise.",
    meaning_up:
      "He symbolizes established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea. The card also signifies able co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you.",
    meaning_rev:
      "The end of troubles, suspension or cessation of adversity, toil and disappointment.",
    desc: "A calm, stately personage, with his back turned, looking from a cliff's edge at ships passing over the sea. Three staves are planted in the ground, and he leans slightly on one of them.",
  },
  {
    name: "Four of Wands",
    name_short: "wa04",
    img: `https://www.sacred-texts.com/tarot/pkt/img/wa04.jpg`,
    value: "four",
    value_int: 4,
    suit: "wands",
    type: "minor",
    meaning:
      "As a tarot reader, I see in your reading that celebration, harmony, and stability are on the horizon for you. These cards indicate that you will be experiencing joy, contentment, and balance in your life. You may also be experiencing a sense of stability and security in your relationships and in your career. The cards are telling me that you should embrace these positive energies and enjoy the good times that are coming your way.",
    suggestion:
      "You should celebrate your successes and enjoy the fruits of your labor. This card suggests that you should take time to appreciate your accomplishments and enjoy the rewards of your hard work. It may also indicate that you should focus on building a strong foundation for future success.",
    meaning_up:
      "They are for once almost on the surface--country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work of these.",
    meaning_rev:
      "The meaning remains unaltered; it is prosperity, increase, felicity, beauty, embellishment.",
    desc: "From the four great staves planted in the foreground there is a great garland suspended; two female figures uplift nosegays; at their side is a bridge over a moat, leading to an old manorial house.",
  },
  {
    name: "Five of Wands",
    name_short: "wa05",
    img: `https://www.sacred-texts.com/tarot/pkt/img/wa05.jpg`,
    value: "five",
    value_int: 5,
    suit: "wands",
    type: "minor",
    meaning:
      "As a tarot reader, I see that you may be facing some challenges related to competition and conflict in your near future. It's important to remember that these struggles can often bring about growth and opportunities for personal development. It's important for you to stay focused and be willing to take action in order to overcome any obstacles that may come your way. Remember to trust in yourself and your abilities, and know that you have the strength to handle any situation that arises.",
    suggestion:
      "You should be prepared to face competition and strive for success. This card suggests that you should be ready to compete and work hard to achieve your goals. It may also indicate that you should be willing to take risks and put in the effort to succeed.",
    meaning_up:
      "Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life. Hence some attributions say that it is a card of gold, gain, opulence.",
    meaning_rev: "Litigation, disputes, trickery, contradiction.",
    desc: "A posse of youths, who are brandishing staves, as if in sport or strife. It is mimic warfare, and hereto correspond the",
  },
  {
    name: "Six of Wands",
    name_short: "wa06",
    img: `https://www.sacred-texts.com/tarot/pkt/img/wa06.jpg`,
    value: "six",
    value_int: 6,
    suit: "wands",
    type: "minor",
    meaning:
      "As a tarot reader, I see that your reading is indicating that you will soon experience victory, success, and recognition in your endeavors. The cards are showing that your hard work and determination will pay off and you will achieve the success you have been striving for. You will receive recognition for your efforts and be acknowledged for your achievements. This is a time of triumph and victory, so be confident and stay focused on your goals.",
    suggestion:
      "You should be proud of your accomplishments and share them with others. This card suggests that you should take pride in your achievements and let others know about them. It may also indicate that you should be prepared to take on new responsibilities and lead others.",
    meaning_up:
      "The card has been so designed that it can cover several significations; on the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King's courier; it is expectation crowned with its own desire, the crown of hope, and so forth.",
    meaning_rev:
      "Apprehension, fear, as of a victorious enemy at the gate; treachery, disloyalty, as of gates being opened to the enemy; also indefinite delay.",
    desc: "A laurelled horseman bears one staff adorned with a laurel crown; footmen with staves are at his side.",
  },
  {
    name: "Seven of Wands",
    name_short: "wa07",
    img: `https://www.sacred-texts.com/tarot/pkt/img/wa07.jpg`,
    value: "seven",
    value_int: 7,
    suit: "wands",
    type: "minor",
    meaning:
      "The cards are indicating that you may be called to defend yourself or your beliefs in the near future. It is important for you to stand up for yourself and make your voice heard. There may also be a sense of competition or challenges present in your situation, but with determination and self-assurance, you will be able to rise above them.",
    suggestion:
      "You should defend your position and stand up for yourself. This card suggests that you should be prepared to defend your beliefs and stand up for what you believe in. It may also indicate that you should be ready to face challenges and overcome obstacles.",
    meaning_up:
      "It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife; in business--negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him.",
    meaning_rev:
      "Perplexity, embarrassments, anxiety. It is also a caution against indecision.",
    desc: "A young man on a craggy eminence brandishing a staff; six other staves are raised towards him from below.",
  },
  {
    name: "Eight of Wands",
    name_short: "wa08",
    img: `https://www.sacred-texts.com/tarot/pkt/img/wa08.jpg`,
    value: "eight",
    value_int: 8,
    suit: "wands",
    type: "minor",
    meaning:
      "Based on the cards that have come up in your reading, it seems that swift action and clear communication are key to making progress in the near future. The cards are indicating that you should take decisive steps towards your goals and be open to new ideas and opportunities. Clear and honest communication with others will also be important in helping you achieve what you desire.",
    suggestion:
      "You should be ready for new opportunities and take action quickly. This card suggests that you should be open to new opportunities and take advantage of them as they arise. It may also indicate that you should be prepared to move quickly and make decisions quickly.",
    meaning_up:
      "Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love.",
    meaning_rev:
      "Arrows of jealousy, internal dispute, stingings of conscience, quarrels; and domestic disputes for persons who are married.",
    desc: "The card represents motion through the immovable-a flight of wands through an open country; but they draw to the term of their course. That which they signify is at hand; it may be even on the threshold.",
  },
  {
    name: "Nine of Wands",
    name_short: "wa09",
    img: `https://www.sacred-texts.com/tarot/pkt/img/wa09.jpg`,
    value: "nine",
    value_int: 9,
    suit: "wands",
    type: "minor",
    meaning:
      "As a tarot reader, I see that the cards are indicating that you should focus on developing resilience, determination and preparation in your life. Resilience will help you to bounce back from any obstacle or disappointment that comes your way. Determination will give you the drive to achieve your goals, even in the face of adversity. And preparation will ensure that you are ready for any challenges or opportunities that come your way. Overall, these three qualities will help you to navigate through any difficult situation with grace and confidence.",
    suggestion:
      "You should be prepared for the final stretch and finish strong. This card suggests that you should be ready for the final push to achieve your goals. It may also indicate that you should be prepared for the challenges that come with success.",
    meaning_up:
      "The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts--delay, suspension, adjournment.",
    meaning_rev: "Obstacles, adversity, calamity.",
    desc: "The figure leans upon his staff and has an expectant look, as if awaiting an enemy. Behind are eight other staves--erect, in orderly disposition, like a palisade.",
  },
  {
    name: "Ten of Wands",
    name_short: "wa10",
    img: `https://www.sacred-texts.com/tarot/pkt/img/wa10.jpg`,
    value: "ten",
    value_int: 10,
    suit: "wands",
    type: "minor",
    meaning:
      "It appears that you may be feeling overwhelmed and overburdened at this time, as if you are carrying a heavy load that is weighing you down. It's important to be mindful of the stress and demands on your life and make sure you are taking care of yourself, to prevent burnout.",
    suggestion:
      "You should be prepared to take on new responsibilities and move forward. This card suggests that you should be ready to take on new responsibilities and move forward with your plans. It may also indicate that you should be prepared to overcome any obstacles that stand in your way.",
    meaning_up:
      "A card of many significances, and some of the readings cannot be harmonized. I set aside that which connects it with honour and good faith. The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false-seeming, disguise, perfidy. The place which the figure is approaching may suffer from the rods that he carries. Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss.",
    meaning_rev: "Contrarieties, difficulties, intrigues, and their analogies.",
    desc: "A man oppressed by the weight of the ten staves which he is carrying.",
  },
  {
    name: "Page of Cups",
    name_short: "cupa",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cupa.jpg`,
    value: "page",
    value_int: 11,
    suit: "cups",
    type: "minor",
    meaning:
      "As a tarot reader, I see that the cards are indicating a strong emphasis on emotionality, imagination, and creativity in your current situation. This suggests that it may be a good time for you to tap into your emotions and allow them to guide you in your decision-making and actions. It is also a time to let your imagination run wild and allow yourself to be creative in finding solutions and manifesting your desires. It is important to trust and follow your intuition, as it may lead you to unexpected opportunities and growth. Keep in mind that all your emotions, imagination, and creativity are valuable assets that you can use to navigate through your current situation.",
    suggestion:
      "You should be open to new emotions and be willing to express them. This card suggests that you should be open to new emotions and be willing to express them in a healthy and balanced way. It may also indicate that you should be open to new relationships and be willing to form new connections.",
    meaning_up:
      "Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, meditation; also these things directed to business.",
    meaning_rev:
      "Taste, inclination, attachment, seduction, deception, artifice.",
    desc: "A fair, pleasing, somewhat effeminate page, of studious and intent aspect, contemplates a fish rising from a cup to look at him. It is the pictures of the mind taking form.",
  },
  {
    name: "Knight of Cups",
    name_short: "cukn",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cukn.jpg`,
    value: "knight",
    value_int: 12,
    suit: "cups",
    type: "minor",
    meaning:
      "The cards are indicating that there is an arrival or approach in your near future. This could be the arrival of a messenger or someone who brings news. There may also be advances or propositions coming your way. The cards also suggest a positive attitude or demeanour, as well as an invitation or incitement to take action.",
    suggestion:
      "You should be open to new emotions and be willing to follow your heart. This card suggests that you should be open to new emotions and be willing to follow your heart in matters of love and relationships. It may also indicate that you should be open to new experiences and be willing to take risks.",
    meaning_up:
      "Arrival, approach--sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement.",
    meaning_rev: "Trickery, artifice, subtlety, swindling, duplicity, fraud.",
    desc: "Graceful, but not warlike; riding quietly, wearing a winged helmet, referring to those higher graces of the imagination which sometimes characterize this card. He too is a dreamer, but the images of the side of sense haunt him in his vision.",
  },
  {
    name: "Queen of Cups",
    name_short: "cuqu",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cuqu.jpg`,
    value: "queen",
    value_int: 13,
    suit: "cups",
    type: "minor",
    meaning:
      "The card they have drawn represents a good and fair woman who is honest and devoted. This woman will be of great service to them and is characterized by her loving intelligence, which grants her the gift of vision. This card also indicates that you will experience success, happiness, and pleasure in your life. Additionally, this card symbolizes wisdom and virtue and represents the perfect spouse and a good mother. Overall, this card is a positive sign and bodes well for your future.",
    suggestion:
      "You should be open to new emotions and be willing to nurture them. This card suggests that you should be open to new emotions and be willing to nurture them in a healthy and balanced way. It may also indicate that you should be open to new relationships and be willing to nurture them.",
    meaning_up:
      "Good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother.",
    meaning_rev:
      "The accounts vary; good woman; otherwise, distinguished woman but one not to be trusted; perverse woman; vice, dishonour, depravity.",
    desc: "Beautiful, fair, dreamy--as one who sees visions in a cup. This is, however, only one of her aspects; she sees, but she also acts, and her activity feeds her dream.",
  },
  {
    name: "King of Cups",
    name_short: "cuki",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cuki.jpg`,
    value: "king",
    value_int: 14,
    suit: "cups",
    type: "minor",
    meaning:
      "As a tarot reader, I see that you are a fair man, someone who is involved in business, law, or divinity. You are responsible and disposed to oblige others. This card also represents equity, art, and science, including those who are involved in these fields. It shows that you possess a creative intelligence. These are the messages that the card is conveying to me, and I hope this gives you some insight and guidance.",
    suggestion:
      "You should be open to new emotions and be willing to balance them. This card suggests that you should be open to new emotions and be willing to balance them in a healthy and balanced way. It may also indicate that you should be open to new relationships and be willing to balance them.",
    meaning_up:
      "Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence.",
    meaning_rev:
      "Dishonest, double-dealing man; roguery, exaction, injustice, vice, scandal, pillage, considerable loss.",
    desc: "He holds a short sceptre in his left hand and a great cup in his right; his throne is set upon the sea; on one side a ship is riding and on the other a dolphin is leaping. The implicit is that the Sign of the Cup naturally refers to water, which appears in all the court cards.",
  },
  {
    name: "Ace of Cups",
    name_short: "cuac",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cuac.jpg`,
    value: "ace",
    value_int: 1,
    suit: "cups",
    type: "minor",
    meaning:
      "As I read the cards, I am sensing a strong energy surrounding new emotions and feelings. It appears that this may be a time of new love and compassion in your life. Whether it is the beginning of a new romantic relationship, or a deeper connection with friends and family, it seems that love and compassion will play a significant role in your upcoming journey. Embrace these new emotions and allow yourself to fully experience the love and compassion that is coming your way.",
    suggestion:
      "You should open yourself to new emotions, feelings, and relationships. This card suggests that new emotional experiences and relationships are on the horizon, and you should be open to them. It may also indicate that you should be open to new ways of expressing and experiencing emotions.",
    meaning_up:
      "House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof.",
    meaning_rev: "House of the false heart, mutation, instability, revolution.",
    desc: "The waters are beneath, and thereon are water-lilies; the hand issues from the cloud, holding in its palm the cup, from which four streams are pouring; a dove, bearing in its bill a cross-marked Host, descends to place the Wafer in the Cup; the dew of water is falling on all sides. It is an intimation of that which may lie behind the Lesser Arcana.",
  },
  {
    name: "Two of Cups",
    name_short: "cu02",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cu02.jpg`,
    value: "two",
    value_int: 2,
    suit: "cups",
    type: "minor",
    meaning:
      "As a tarot reader, I see that love, partnership, and harmony are strong themes in your reading. These cards indicate that you may be in a positive and loving relationship, or that one may be on the horizon. Your partnership may be strong and in harmony. It's also possible that you are working on achieving harmony within yourself and your relationships. These cards suggest that you should focus on building and maintaining healthy relationships, being open to new love and opportunities for partnership, and finding balance and harmony in all aspects of your life.",
    suggestion:
      "You should focus on your relationships and emotions. This card suggests that you should pay attention to your relationships and emotions, and make sure they are healthy and balanced. It may also indicate that you should be willing to work on building new relationships or strengthening existing ones.",
    meaning_up:
      "Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and--as a suggestion apart from all offices of divination--that desire which is not in Nature, but by which Nature is sanctified.",
    meaning_rev:
      "Lust, cupidity, jealousy, wish, desire, but the card may also give, says W., that desire which is not in nature, but by which nature is sanctified.",
    desc: "A youth and maiden are pledging one another, and above their cups rises the Caduceus of Hermes, between the great wings of which there appears a lion's head. It is a variant of a sign which is found in a few old examples of this card. Some curious emblematical meanings are attached to it, but they do not concern us in this place.",
  },
  {
    name: "Three of Cups",
    name_short: "cu03",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cu03.jpg`,
    value: "three",
    value_int: 3,
    suit: "cups",
    type: "minor",
    meaning:
      "Dear client, the reading indicates a positive outcome in all aspects. You can expect abundance, perfection and joy in the situation. The cards show a successful conclusion, victory, and satisfaction. You will find comfort and healing in the end. It seems that everything will fall into place and you will find peace and happiness in the end.",
    suggestion:
      "You should celebrate and enjoy your relationships and emotions. This card suggests that you should take the time to celebrate and enjoy your relationships and emotions. It may also indicate that you should be open to new experiences and be willing to share them with others.",
    meaning_up:
      "The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing,",
    meaning_rev:
      "Expedition, dispatch, achievement, end. It signifies also the side of excess in physical enjoyment, and the pleasures of the senses.",
    desc: "Maidens in a garden-ground with cups uplifted, as if pledging one another.",
  },
  {
    name: "Four of Cups",
    name_short: "cu04",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cu04.jpg`,
    value: "four",
    value_int: 4,
    suit: "cups",
    type: "minor",
    meaning:
      "As I see in your reading, it seems that you are currently in a period of contemplation and introspection. It's likely that you are taking time to reflect on your inner self, your beliefs and your emotions. This may be a time of dissatisfaction as you may not be satisfied with certain aspects of your life. It's important to remember that this is a natural part of the process of self-discovery and growth. Allow yourself to go through this phase and trust that it will lead to a greater understanding and clarity.",
    suggestion:
      "You should take the time to reflect on your emotions and relationships. This card suggests that you should take the time to reflect on your emotions and relationships, and think about what you want from them. It may also indicate that you should be open to new opportunities and be willing to change.",
    meaning_up:
      "Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure.",
    meaning_rev: "Novelty, presage, new instruction, new relations.",
    desc: "A young man is seated under a tree and contemplates three cups set on the grass before him; an arm issuing from a cloud offers him another cup. His expression notwithstanding is one of discontent with his environment.",
  },
  {
    name: "Five of Cups",
    name_short: "cu05",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cu05.jpg`,
    value: "five",
    value_int: 5,
    suit: "cups",
    type: "minor",
    meaning:
      "As a tarot reader, I am sensing that there may be some challenging emotions and experiences coming up for you. The cards I have drawn indicate that you may be facing a sense of loss, disappointment, and grief. It's important to remember that these emotions are a natural part of the human experience and that they will pass in time. It's also important to be gentle with yourself and to seek support from loved ones during this difficult time. It may also indicate that you should be open to new opportunities and learning from these experiences and find ways to heal and move forward.",
    suggestion:
      "You should come to terms with your emotions and relationships. This card suggests that you should accept and come to terms with your emotions and relationships, and be willing to let go of the past. It may also indicate that you should be open to new experiences and be willing to move on.",
    meaning_up:
      "ure, looking sideways at three prone cups two others stand upright behind him; a bridge is in the background, leading to a small keep or holding. Divanatory Meanings: It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration.",
    meaning_rev:
      "News, alliances, affinity, consanguinity, ancestry, return, false projects.",
    desc: "A dark, cloaked figure, looking sideways at three prone cups two others stand upright behind him; a bridge is in the background, leading to a small keep or holding. Divanatory Meanings: It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration. Reversed: News, alliances, affinity, consanguinity, ancestry, return, false projects",
  },
  {
    name: "Six of Cups",
    name_short: "cu06",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cu06.jpg`,
    value: "six",
    value_int: 6,
    suit: "cups",
    type: "minor",
    meaning:
      "As a tarot reader, I sense that the cards are indicating a theme of nostalgia and a connection to your childhood and innocence. This could be a reminder of fond memories from the past, or a longing for a simpler time in your life. It could also suggest that you should tap into your inner child and find ways to reconnect with your sense of wonder and curiosity. It's important to be aware that this may be a sign to let go of things that are holding you back from your past and move forward with a new perspective and point of view.",
    suggestion:
      "You should focus on the past and the memories it holds. This card suggests that you should focus on the past and the memories it holds, and be willing to learn from them. It may also indicate that you should be open to new opportunities and be willing to let go of the past.",
    meaning_up:
      "A card of the past and of memories, looking back, as--for example--on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct.",
    meaning_rev: "The future, renewal, that which will come to pass presently.",
    desc: "Children in an old garden, their cups filled with flowers.",
  },
  {
    name: "Seven of Cups",
    name_short: "cu07",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cu07.jpg`,
    value: "seven",
    value_int: 7,
    suit: "cups",
    type: "minor",
    meaning:
      "As a tarot reader, I see that the cards are indicating that you are currently facing a lot of choices and options. It seems that you are feeling pulled in different directions and are struggling to make a decision. Additionally, there is a sense of temptation around you, as if you are being tempted by something or someone. It's important to remember that with every choice comes a consequence. So, it's important to be mindful of your choices and the potential consequences before making a decision.",
    suggestion:
      "You should be open to new opportunities and be willing to take risks. This card suggests that you should be open to new opportunities and be willing to take risks. It may also indicate that you should be open to new experiences and be willing to explore them.",
    meaning_up:
      "Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.",
    meaning_rev: "Desire, will, determination, project.",
    desc: "Strange chalices of vision, but the images are more especially those of the fantastic spirit.",
  },
  {
    name: "Eight of Cups",
    name_short: "cu08",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cu08.jpg`,
    value: "eight",
    value_int: 8,
    suit: "cups",
    type: "minor",
    meaning:
      "As I see it, the cards are indicating that it is time for you to let go of the past and move forward. This could mean releasing any lingering emotions or attachments, and embracing a new chapter in your life. The cards also suggest that you may be seeking something new, whether it be in terms of a relationship, career or personal growth. It's time to open yourself up to new possibilities and opportunities.",
    suggestion:
      "You should leave behind what no longer serves you and move on. This card suggests that you should leave behind what no longer serves you and move on. It may also indicate that you should be open to new experiences and be willing to let go of the past.",
    meaning_up:
      "The card speaks for itself on the surface, but other readings are entirely antithetical--giving joy, mildness, timidity, honour, modesty. In practice, it is usually found that the card shews the decline of a matter, or that a matter which has been thought to be important is really of slight consequence--either for good or evil.",
    meaning_rev: "Great joy, happiness, feasting.",
    desc: "A man of dejected aspect is deserting the cups of his felicity, enterprise, undertaking or previous concern.",
  },
  {
    name: "Nine of Cups",
    name_short: "cu09",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cu09.jpg`,
    value: "nine",
    value_int: 9,
    suit: "cups",
    type: "minor",
    meaning:
      "As a tarot reader, I can see that the cards are indicating a sense of harmony and contentment in your life. This can manifest in a variety of ways, such as feeling physically well and comfortable in your body. Additionally, the cards are indicating that you will experience victory, success and advantage in your endeavors. This could bring a sense of satisfaction and fulfillment for you. These are positive indicators for the person for whom the consultation is made. It's important to keep a positive attitude and keep working towards your goals.",
    suggestion:
      "You should be satisfied with your emotions and relationships. This card suggests that you should be satisfied with your emotions and relationships and enjoy the fruits of your labor. It may also indicate that you should be open to new experiences and be willing to share them with others.",
    meaning_up:
      "Concord, contentment, physical bien-être; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.",
    meaning_rev:
      "Truth, loyalty, liberty; but the readings vary and include mistakes, imperfections, etc.",
    desc: "A goodly personage has feasted to his heart's content, and abundant refreshment of wine is on the arched counter behind him, seeming to indicate that the future is also assured. The picture offers the material side only, but there are other aspects.",
  },
  {
    name: "Ten of Cups",
    name_short: "cu10",
    img: `https://www.sacred-texts.com/tarot/pkt/img/cu10.jpg`,
    value: "ten",
    value_int: 10,
    suit: "cups",
    type: "minor",
    meaning:
      "This card represents a feeling of contentment and inner peace. It suggests that your heart is at ease and in a state of perfection. It also represents perfect love and friendship in your relationships. If there are other cards present in the spread, it may indicate someone who is looking out for your best interests. It could also symbolize the town or community where you currently reside.",
    suggestion:
      "You should focus on your emotional and spiritual well-being. This card suggests that you should focus on your emotional and spiritual well-being and strive for balance and harmony in your relationships. It may also indicate that you should be open to new experiences and be willing to share them with others",
    meaning_up:
      "Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; if with several picture-cards, a person who is taking charge of the Querent's interests; also the town, village or country inhabited by the Querent.",
    meaning_rev: "Repose of the false heart, indignation, violence.",
    desc: "Appearance of Cups in a rainbow; it is contemplated in wonder and ecstacy by a man and woman below, evidently husband and wife. His right arm is about her; his left is raised upward; she raises her right arm. The two children dancing near them have not observed the prodigy but are happy after their own manner. There is a home-scene beyond.",
  },
  {
    name: "Page of Pentacles",
    name_short: "pepa",
    img: `https://www.sacred-texts.com/tarot/pkt/img/pepa.jpg`,
    value: "page",
    value_int: 11,
    suit: "pentacles",
    type: "minor",
    meaning:
      "As a tarot reader, I see that the cards are indicating a focus on application, study, and scholarship in your life. It's a good time to reflect on your experiences and learning's. Another reading suggests that you may be receiving news or messages, and the person or situation that brings it to you. This card also relates to rule and management, which might be related to your work or personal life. It's important for you to be alert and pay attention to the information you receive. It could bring valuable opportunities for you to improve your skills and knowledge.",
    suggestion:
      "You should be open to new opportunities for material and financial success. This card suggests that you should be open to new opportunities for material and financial success and be willing to learn and grow in these areas. It may also indicate that you should be willing to be persistent and hardworking in order to achieve your goals.",
    meaning_up:
      "Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management.",
    meaning_rev:
      "Prodigality, dissipation, liberality, luxury; unfavourable news.",
    desc: "A youthful figure, looking intently at the pentacle which hovers over his raised hands. He moves slowly, insensible of that which is about him.",
  },
  {
    name: "Knight of Pentacles",
    name_short: "pekn",
    img: `https://www.sacred-texts.com/tarot/pkt/img/pekn.jpg`,
    value: "knight",
    value_int: 12,
    suit: "pentacles",
    type: "minor",
    meaning:
      "The cards are showing themes of utility, serviceableness, interest, responsibility, and rectitude. These themes are all on the normal and external plane, meaning that you pertain to practical matters and external situations in your life. You may be getting advice on how to be of use to others, how to be responsible and reliable, or how to be fair and just in your actions. It is important to keep in mind that tarot card readings are a form of guidance and insight and the ultimate decision is always in the hands of the person receiving the reading.",
    suggestion:
      "You should be focused and dedicated to achieving material and financial success. This card suggests that you should be focused and dedicated to achieving material and financial success. It may also indicate that you should be willing to be responsible and plan for the future, and be willing to take action to achieve your goals.",
    meaning_up:
      "Utility, serviceableness, interest, responsibility, rectitude-all on the normal and external plane.",
    meaning_rev:
      "inertia, idleness, repose of that kind, stagnation; also placidity, discouragement, carelessness.",
    desc: "He rides a slow, enduring, heavy horse, to which his own aspect corresponds. He exhibits his symbol, but does not look therein.",
  },
  {
    name: "Queen of Pentacles",
    name_short: "pequ",
    img: `https://www.sacred-texts.com/tarot/pkt/img/pequ.jpg`,
    value: "queen",
    value_int: 13,
    suit: "pentacles",
    type: "minor",
    meaning:
      "As a tarot reader, when I see the cards that indicate opulence, generosity, magnificence, security, and liberty, I interpret that as a sign of abundance and prosperity in your life. The cards suggest that you have the means and resources to live a luxurious and comfortable life, and that you have the generosity to share that wealth with others. It also indicates that you have a strong sense of security, both financially and emotionally, and that you have the freedom to pursue your goals and aspirations. This is a time of abundance and opportunity for you, and I encourage you to embrace it and make the most of it.",
    suggestion:
      "You should be practical and resourceful in achieving material and financial success. This card suggests that you should be practical and resourceful in achieving material and financial success. It may also indicate that you should be willing to be nurturing and supportive of others in these areas.",
    meaning_up: "Opulence, generosity, magnificence, security, liberty.",
    meaning_rev: "Evil, suspicion, suspense, fear, mistrust.",
    desc: "The face suggests that of a dark woman, whose qualities might be summed up in the idea of greatness of soul; she has also the serious cast of intelligence; she contemplates her symbol and may see worlds therein.",
  },
  {
    name: "King of Pentacles",
    name_short: "peki",
    img: `https://www.sacred-texts.com/tarot/pkt/img/peki.jpg`,
    value: "king",
    value_int: 14,
    suit: "pentacles",
    type: "minor",
    meaning:
      "As a tarot reader, I see that you possess great valor and are able to realize your intelligence. You have a strong aptitude for business and the ability to understand and use your intellect to your advantage. Additionally, I see that you may have a talent or interest in math or other intellectually-based subjects. This combination of traits and talents will lead to success in these areas. It's likely that you will excel in your chosen field, using your skills and abilities to achieve your goals.",
    suggestion:
      "You should be a responsible and successful leader in material and financial matters. This card suggests that you should be a responsible and successful leader in material and financial matters. It may also indicate that you should be willing to be stable and secure, and take charge of your own financial future.",
    meaning_up:
      "Valour, realizing intelligence, business and normal intellectual aptitude, sometimes mathematical gifts and attainments of this kind; success in these paths.",
    meaning_rev: "Vice, weakness, ugliness, perversity, corruption, peril.",
    desc: "The figure calls for no special description the face is rather dark, suggesting also courage, but somewhat lethargic in tendency. The bull's head should be noted as a recurrent symbol on the throne. The sign of this suit is represented throughout as engraved or blazoned with the pentagram, typifying the correspondence of the four elements in human nature and that by which they may be governed. In many old Tarot packs this suit stood for current coin, money, deniers. I have not invented the substitution of pentacles and I have no special cause to sustain in respect of the alternative. But the consensus of divinatory meanings is on the side of some change, because the cards do not happen to deal especially with questions of money.",
  },
  {
    name: "Ace of Pentacles",
    name_short: "peac",
    img: `https://www.sacred-texts.com/tarot/pkt/img/peac.jpg`,
    value: "ace",
    value_int: 1,
    suit: "pentacles",
    type: "minor",
    meaning:
      "As a tarot reader, when I see the cards that indicate Perfect contentment, felicity, ecstasy in your reading, it means that you are likely to experience a deep sense of happiness and fulfillment in your life. This could manifest in many ways, such as in your relationships, career, or personal pursuits. Additionally, the cards suggest that you may receive some kind of news or information that brings you joy and pleasure. Furthermore, this card also symbolizes prosperity and abundance, which could be in the form of money, gold or any financial gain. This is a time for you to be grateful for what you have and enjoy the fruits of your labor.",
    suggestion:
      "You should focus on material possessions, money, and physical well-being. This card suggests that new opportunities for material success are on the horizon and you should be open to them. It may also indicate that you should focus on building a strong foundation for future success in these areas.",
    meaning_up:
      "Perfect contentment, felicity, ecstasy; also speedy intelligence; gold.",
    meaning_rev:
      "The evil side of wealth, bad intelligence; also great riches. In any case it shews prosperity, comfortable material conditions, but whether these are of advantage to the possessor will depend on whether the card is reversed or not.",
    desc: "A hand--issuing, as usual, from a cloud--holds up a pentacle.",
  },
  {
    name: "Two of Pentacles",
    name_short: "pe02",
    img: `https://www.sacred-texts.com/tarot/pkt/img/pe02.jpg`,
    value: "two",
    value_int: 2,
    suit: "pentacles",
    type: "minor",
    meaning:
      "As a tarot reader, I see that the cards are indicating a focus on balance, adaptability and change in your current situation. This suggests that it's important for you to find a balance within yourself and in your external circumstances, to be adaptable and open to change, and to embrace the changes that are happening in your life. It's a reminder to stay flexible, be open-minded and to be willing to adapt to new situations and ideas as they arise. It's a time for you to trust the flow of life and to be open to the new opportunities that come your way.",
    suggestion:
      "You should balance your material and financial needs with other aspects of your life. This card suggests that you should be able to balance your material and financial needs with other aspects of your life, such as relationships, emotions and spiritual well-being. It may also indicate that you should be able to manage your resources effectively and efficiently.",
    meaning_up:
      "On the one hand it is represented as a card of gaiety, recreation and its connexions, which is the subject of the design; but it is read also as news and messages in writing, as obstacles, agitation, trouble, embroilment.",
    meaning_rev:
      "Enforced gaiety, simulated enjoyment, literal sense, handwriting, composition, letters of exchange.",
    desc: "A young man, in the act of dancing, has a pentacle in either hand, and they are joined by that endless cord which is like the number 8 reversed.",
  },
  {
    name: "Three of Pentacles",
    name_short: "pe03",
    img: `https://www.sacred-texts.com/tarot/pkt/img/pe03.jpg`,
    value: "three",
    value_int: 3,
    suit: "pentacles",
    type: "minor",
    meaning:
      "As a tarot reader, I see that the cards are indicating that you will be focusing on developing your skills, working well in a team and possibly taking on an apprenticeship or mentorship. It seems that you will be honing your abilities and learning from others in order to achieve your goals. This is a time for you to be open to new opportunities for growth and to be willing to put in the hard work to improve yourself. Keep in mind that it's not just about working hard but also working smart and in harmony with others.",
    suggestion:
      "You should focus on your skills and talents to achieve material success. This card suggests that you should focus on developing and utilizing your skills and talents to achieve material success. It may also indicate that you should be willing to collaborate and work with others to achieve your goals.",
    meaning_up:
      "Métier, trade, skilled labour; usually, however, regarded as a card of nobility, aristocracy, renown, glory.",
    meaning_rev:
      "Mediocrity, in work and otherwise, puerility, pettiness, weakness.",
    desc: "A sculptor at his work in a monastery. Compare the design which illustrates the Eight of Pentacles. The apprentice or amateur therein has received his reward and is now at work in earnest.",
  },
  {
    name: "Four of Pentacles",
    name_short: "pe04",
    img: `https://www.sacred-texts.com/tarot/pkt/img/pe04.jpg`,
    value: "four",
    value_int: 4,
    suit: "pentacles",
    type: "minor",
    meaning:
      "As a tarot reader, I can see that the cards are indicating a strong focus on security, stability, and materialism in your near future. This may mean that you will be working towards achieving financial security and stability, as well as focusing on material possessions and wealth. It's important to keep in mind that these cards are not necessarily predicting a specific outcome, but rather indicating a potential focus or theme in your life. It's important to take this information and reflect on how it may apply to your current situation and goals, and consider taking actions towards achieving stability and security in your material life.",
    suggestion:
      "You should focus on security and stability in your material and financial life. This card suggests that you should focus on achieving security and stability in your material and financial life. It may also indicate that you should be willing to be cautious and protect what you have already achieved.",
    meaning_up:
      "The surety of possessions, cleaving to that which one has, gift, legacy, inheritance.",
    meaning_rev: "Suspense, delay, opposition.",
    desc: "A crowned figure, having a pentacle over his crown, clasps another with hands and arms; two pentacles are under his feet. He holds to that which he has.",
  },
  {
    name: "Five of Pentacles",
    name_short: "pe05",
    img: `https://www.sacred-texts.com/tarot/pkt/img/pe05.jpg`,
    value: "five",
    value_int: 5,
    suit: "pentacles",
    type: "minor",
    meaning:
      "The card is indicating a potential for challenges in the area of finances. This may manifest as experiences of poverty, hardship, or financial struggles. It's important to remember that the tarot is a tool for gaining insight and understanding, and that these potential difficulties can be overcome with effort, planning and hard work. You have the power to change your fate and the cards are just a way to understand the current situation and make the best of it.",
    suggestion:
      "You should focus on overcoming financial difficulties and material scarcity. This card suggests that you should focus on overcoming financial difficulties and material scarcity. It may also indicate that you should be willing to be resourceful and adapt to changes in order to overcome these difficulties.",
    meaning_up:
      "The card foretells material trouble above all, whether in the form illustrated--that is, destitution--or otherwise. For some cartomancists, it is a card of love and lovers-wife, husband, friend, mistress; also concordance, affinities. These alternatives cannot be harmonized.",
    meaning_rev: "Disorder, chaos, ruin, discord, profligacy.",
    desc: "Two mendicants in a snow-storm pass a lighted casement.",
  },
  {
    name: "Six of Pentacles",
    name_short: "pe06",
    img: `https://www.sacred-texts.com/tarot/pkt/img/pe06.jpg`,
    value: "six",
    value_int: 6,
    suit: "pentacles",
    type: "minor",
    meaning:
      "I see that the cards are indicating a strong emphasis on the concepts of charity, generosity, and balance. It seems that the universe is encouraging you to focus on giving back to others and being generous with your resources, whether that be your time, money, or energy. At the same time, it's important to maintain balance in all aspects of your life, making sure that you are taking care of yourself and your own needs while also being of service to others. This balance will bring you inner peace and a sense of fulfillment.",
    suggestion:
      "You should focus on balance and fairness in your material and financial dealings. This card suggests that you should focus on balance and fairness in your material and financial dealings. It may also indicate that you should be willing to be generous and charitable with what you have.",
    meaning_up:
      "Presents, gifts, gratification another account says attention, vigilance now is the accepted time, present prosperity, etc.",
    meaning_rev: "Desire, cupidity, envy, jealousy, illusion.",
    desc: "A person in the guise of a merchant weighs money in a pair of scales and distributes it to the needy and distressed. It is a testimony to his own success in life, as well as to his goodness of heart.",
  },
  {
    name: "Seven of Pentacles",
    name_short: "pe07",
    img: `https://www.sacred-texts.com/tarot/pkt/img/pe07.jpg`,
    value: "seven",
    value_int: 7,
    suit: "pentacles",
    type: "minor",
    meaning:
      "As a tarot reader, I see that the cards are indicating that in order to achieve your goals and desires, it will require hard work, patience, and investment on your part. This may mean putting in extra effort and time to reach your objectives, being patient and persistent in the face of obstacles and challenges, and being willing to invest both your energy and resources to make it happen. Remember that success doesn't come overnight, it takes time, effort and patience to achieve it. Keep your focus on your goals, be determined and you will reach them eventually.",
    suggestion:
      "You should focus on the results of your efforts in your material and financial life. This card suggests that you should focus on the results of your efforts in your material and financial life and evaluate your progress. It may also indicate that you should be willing to be patient and persistent in your efforts.",
    meaning_up:
      "These are exceedingly contradictory; in the main, it is a card of money, business, barter; but one reading gives altercation, quarrels--and another innocence, ingenuity, purgation.",
    meaning_rev:
      "Cause for anxiety regarding money which it may be proposed to lend.",
    desc: "A young man, leaning on his staff, looks intently at seven pentacles attached to a clump of greenery on his right; one would say that these were his treasures and that his heart was there.",
  },
  {
    name: "Eight of Pentacles",
    name_short: "pe08",
    img: `https://www.sacred-texts.com/tarot/pkt/img/pe08.jpg`,
    value: "eight",
    value_int: 8,
    suit: "pentacles",
    type: "minor",
    meaning:
      "As a tarot reader, I see that you are currently going through a phase of skill development and focus. You are putting in the effort to hone your craft and improve your abilities. This is a positive sign and it shows that you are dedicated to mastering your skills and becoming a true master of your craft. This may require a lot of hard work and focus, but the end result will be worth it as you will see your progress and growth. Keep up the good work and let your skills and craftsmanship shine.",
    suggestion:
      "You should focus on mastering your skills and talents to achieve material success. This card suggests that you should focus on mastering your skills and talents to achieve material success. It may also indicate that you should be willing to be dedicated and hardworking in order to achieve your goals.",
    meaning_up:
      "Work, employment, commission, craftsmanship, skill in craft and business, perhaps in the preparatory stage.",
    meaning_rev:
      "Voided ambition, vanity, cupidity, exaction, usury. It may also signify the possession of skill, in the sense of the ingenious mind turned to cunning and intrigue.",
    desc: "An artist in stone at his work, which he exhibits in the form of trophies.",
  },
  {
    name: "Nine of Pentacles",
    name_short: "pe09",
    img: `https://www.sacred-texts.com/tarot/pkt/img/pe09.jpg`,
    value: "nine",
    value_int: 9,
    suit: "pentacles",
    type: "minor",
    meaning:
      "As a tarot reader, I see that the cards are indicating a sense of comfort and luxury in your near future. This may manifest in various forms such as a comfortable living situation, financial stability, or even a sense of ease in your relationships. Additionally, the cards show that you are becoming increasingly self-sufficient and able to rely on yourself for your needs and wants. Overall, it seems that the universe is aligning for you to experience a time of comfort and abundance.",
    suggestion:
      "You should focus on enjoying the fruits of your labor in your material and financial life. This card suggests that you should focus on enjoying the fruits of your labor in your material and financial life. It may also indicate that you should be willing to be self-sufficient and independent, and take pride in your accomplishments.",
    meaning_up:
      "Prudence, safety, success, accomplishment, certitude, discernment.",
    meaning_rev: "Roguery, deception, voided project, bad faith.",
    desc: "A woman, with a bird upon her wrist, stands amidst a great abundance of grapevines in the garden of a manorial house. It is a wide domain, suggesting plenty in all things. Possibly it is her own possession and testifies to material well-being.",
  },
  {
    name: "Ten of Pentacles",
    name_short: "pe10",
    img: `https://www.sacred-texts.com/tarot/pkt/img/pe10.jpg`,
    value: "ten",
    value_int: 10,
    suit: "pentacles",
    type: "minor",
    meaning:
      "As a tarot reader, I can sense that family, tradition, and inheritance are playing a significant role in your current situation. The cards are indicating that you may be focused on your family connections and the importance of maintaining and upholding traditional values and customs. Additionally, there may be themes of inheritance or passing down of assets or knowledge from older generations to the newer ones. It's important for you to consider the impact of these themes on your current situation and how you can use them to your advantage.",
    suggestion:
      "You should focus on achieving long-term stability and security in your material and financial life. This card suggests that you should focus on achieving long-term stability and security in your material and financial life. It may also indicate that you should be willing to be responsible and plan for the future, and be willing to share what you have with others.",
    meaning_up:
      "Gain, riches; family matters, archives, extraction, the abode of a family.",
    meaning_rev:
      "Chance, fatality, loss, robbery, games of hazard; sometimes gift, dowry, pension.",
    desc: "A man and woman beneath an archway which gives entrance to a house and domain. They are accompanied by a child, who looks curiously at two dogs accosting an ancient personage seated in the foreground. The child's hand is on one of them.",
  },
  {
    name: "Page of Swords",
    name_short: "swpa",
    img: `https://www.sacred-texts.com/tarot/pkt/img/swpa.jpg`,
    value: "page",
    value_int: 11,
    suit: "swords",
    type: "minor",
    meaning:
      "As a tarot reader, the cards are showing me that intelligence, communication, and analysis are going to play a big role in your near future. It's important for you to use your intellect and be open to new ideas. Your ability to communicate effectively will also be crucial, whether it's in your personal or professional life. And lastly, analyzing the situation before making any decisions will be vital for your success. These elements will help you navigate the path ahead with clarity and confidence.",
    suggestion:
      "You should be open to new ideas and be willing to communicate them effectively. This card suggests that you should be open to new ideas and be willing to communicate them effectively. It may also indicate that you should be willing to be curious and inquisitive, and seek knowledge and information.",
    meaning_up:
      "Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.",
    meaning_rev:
      "More evil side of these qualities; what is unforeseen, unprepared state; sickness is also intimated.",
    desc: "A lithe, active figure holds a sword upright in both hands, while in the act of swift walking. He is passing over rugged land, and about his way the clouds are collocated wildly. He is alert and lithe, looking this way and that, as if an expected enemy might appear at any moment.",
  },
  {
    name: "Knight of Swords",
    name_short: "swkn",
    img: `https://www.sacred-texts.com/tarot/pkt/img/swkn.jpg`,
    value: "knight",
    value_int: 12,
    suit: "swords",
    type: "minor",
    meaning:
      "It appears that the cards are highlighting the need for action and impulsiveness in your current situation. This may require you to step out of your comfort zone and take bold, courageous steps towards your goals. Remember that while taking risks can be scary, they are often necessary in order to achieve the outcome you desire.",
    suggestion:
      "You should be willing to be bold, confident and assertive in your communication and ideas. This card suggests that you should be willing to be bold, confident and assertive in your communication and ideas. It may also indicate that you should be willing to take action and be decisive in your decisions.",
    meaning_up:
      "Skill, bravery, capacity, defence, address, enmity, wrath, war, destruction, opposition, resistance, ruin. There is therefore a sense in which the card signifies death, but it carries this meaning only in its proximity to other cards of fatality.",
    meaning_rev: "Imprudence, incapacity, extravagance.",
    desc: "He is riding in full course, as if scattering his enemies. In the design he is really a prototypical hero of romantic chivalry. He might almost be Galahad, whose sword is swift and sure because he is clean of heart.",
  },
  {
    name: "Queen of Swords",
    name_short: "swqu",
    img: `https://www.sacred-texts.com/tarot/pkt/img/swqu.jpg`,
    value: "queen",
    value_int: 13,
    suit: "swords",
    type: "minor",
    meaning:
      "As a tarot reader, I can see that the cards you have drawn indicate a strong emphasis on rationality, clarity, and intelligence. It seems that your thoughts and decisions are guided by logic and reason, and you are able to see things clearly and make wise choices. Trust yourself, as your intellect and analytical abilities will help you navigate through any challenges that may come your way. This is a time for you to be confident in your ability to think critically and make sound decisions.",
    suggestion:
      "You should be willing to be analytical, rational and objective in your communication and ideas. This card suggests that you should be willing to be analytical, rational and objective in your communication and ideas. It may also indicate that you should be willing to be honest and direct in your communication and be able to see things from different perspectives.",
    meaning_up:
      "Widowhood, female sadness and embarrassment, absence, sterility, mourning, privation, separation.",
    meaning_rev: "Malice, bigotry, artifice, prudery, bale, deceit.",
    desc: "Her right hand raises the weapon vertically and the hilt rests on an arm of her royal chair the left hand is extended, the arm raised her countenance is severe but chastened; it suggests familiarity with sorrow. It does not represent mercy, and, her sword notwithstanding, she is scarcely a symbol of power.",
  },
  {
    name: "King of Swords",
    name_short: "swki",
    img: `https://www.sacred-texts.com/tarot/pkt/img/swki.jpg`,
    value: "king",
    value_int: 14,
    suit: "swords",
    type: "minor",
    meaning:
      "As a tarot reader, I see the card of Justice appearing in your reading. This card often represents fairness, balance, and making the right decision. It suggests that you should be looking for truth and fairness in your current situation and making choices that align with your values. It may also indicate that you should be willing to be honest and direct in your communication and be able to see things from different perspectives. This card can also indicate that there is a legal matter that needs to be resolved, or that a decision needs to be made that will have a long-term impact. Overall, this card is a reminder to make choices that are in alignment with your values and to seek truth and fairness in your current situation.",
    suggestion:
      "Dear client, the cards that have come up for you today are Justice, truth and decision making. These cards indicate that you will be faced with situations where you will be required to make decisions that are fair and just. The truth is important in these decisions, and you should be aware of the facts in order to make the right choice. Remember, the universe is guiding you to make the best decision for yourself and those around you.",
    meaning_up:
      "Whatsoever arises out of the idea of judgment and all its connexions-power, command, authority, militant intelligence, law, offices of the crown, and so forth.",
    meaning_rev: "Cruelty, perversity, barbarity, perfidy, evil intention.",
    desc: "He sits in judgment, holding the unsheathed sign of his suit. He recalls, of course, the conventional Symbol of justice in the Trumps Major, and he may represent this virtue, but he is rather the power of life and death, in virtue of his office.",
  },
  {
    name: "Ace of Swords",
    name_short: "swac",
    img: `https://www.sacred-texts.com/tarot/pkt/img/swac.jpg`,
    value: "ace",
    value_int: 1,
    suit: "swords",
    type: "minor",
    meaning:
      "As a tarot reader, I am sensing that the cards are indicating new ideas and opportunities for growth and clarity in your decision making process. It may be a time for you to cut through any confusion and gain a clear understanding of your thoughts and options. The cards are encouraging you to trust your intuition and make decisions that align with your values and goals. This could be a time of fresh starts and new beginnings in your life. So, be open to new ideas and trust yourself to make the right choices.",
    suggestion:
      "You should be open to new ideas, thoughts, and communication. This card suggests that new opportunities for intellectual growth and communication are on the horizon, and you should be open to them. It may also indicate that you should be able to cut through confusion and find clarity in your thoughts and ideas.",
    meaning_up:
      "Triumph, the excessive degree in everything, conquest, triumph of force. It is a card of great force, in love as well as in hatred. The crown may carry a much higher significance than comes usually within the sphere of fortune-telling.",
    meaning_rev:
      "The same, but the results are disastrous; another account says--conception, childbirth, augmentation, multiplicity.",
    desc: "A hand issues from a cloud, grasping as word, the point of which is encircled by a crown.",
  },
  {
    name: "Two of Swords",
    name_short: "sw02",
    img: `https://www.sacred-texts.com/tarot/pkt/img/sw02.jpg`,
    value: "two",
    value_int: 2,
    suit: "swords",
    type: "minor",
    meaning:
      "Based on the cards that have come up in your reading, it seems that you may be currently facing some indecision or uncertainty in certain areas of your life. The cards also suggest that it's important for you to find a balance and strive for harmony in your relationships and decisions. It's also possible that you may need to make some compromises or concessions in order to achieve this balance.",
    suggestion:
      "You should be aware of the balance and harmony between your thoughts and emotions. This card suggests that you should be aware of the balance and harmony between your thoughts and emotions, and be able to make decisions based on both. It may also indicate that you should be able to maintain balance and harmony in your relationships.",
    meaning_up:
      "Conformity and the equipoise which it suggests, courage, friendship, concord in a state of arms; another reading gives tenderness, affection, intimacy. The suggestion of harmony and other favourable readings must be considered in a qualified manner, as Swords generally are not symbolical of beneficent forces in human affairs.",
    meaning_rev: "Imposture, falsehood, duplicity, disloyalty.",
    desc: "A hoodwinked female figure balances two swords upon her shoulders.",
  },
  {
    name: "Three of Swords",
    name_short: "sw03",
    img: `https://www.sacred-texts.com/tarot/pkt/img/sw03.jpg`,
    value: "three",
    value_int: 3,
    suit: "swords",
    type: "minor",
    meaning:
      "As a tarot reader, I can sense that you have been experiencing some difficult emotions related to your heart. It appears that you may have recently gone through a painful experience, possibly involving betrayal or heartache. These emotions can be incredibly difficult to process, but it's important to remember that healing and moving forward is possible. The tarot can offer guidance and insight on how to navigate these difficult emotions and find peace and understanding. It's important to keep an open mind and be willing to take the steps necessary to heal and move forward, with time and effort you will overcome this difficult time.",
    suggestion:
      "You should be willing to face and overcome emotional pain and heartache. This card suggests that you should be willing to face and overcome emotional pain and heartache, and find ways to heal and move on. It may also indicate that you should be able to communicate your feelings and thoughts in a healthy and balanced way.",
    meaning_up:
      "Removal, absence, delay, division, rupture, dispersion, and all that the design signifies naturally, being too simple and obvious to call for specific enumeration.",
    meaning_rev:
      "Mental alienation, error, loss, distraction, disorder, confusion.",
    desc: "Three swords piercing a heart; cloud and rain behind.",
  },
  {
    name: "Four of Swords",
    name_short: "sw04",
    img: `https://www.sacred-texts.com/tarot/pkt/img/sw04.jpg`,
    value: "four",
    value_int: 4,
    suit: "swords",
    type: "minor",
    meaning:
      "As a Tarot reader, I see that the cards are indicating a need for rest, recovery and contemplation for you. The cards are telling you that it's important to take a step back and focus on yourself. This is a time to take care of your physical and emotional well-being, recharge your batteries and reflect on what's truly important to you. This is a time for you to focus on your inner self, to heal and rejuvenate. It's important to take time to relax and rejuvenate your mind, body and soul. This time of rest and recovery will help you to gain a new perspective on life, and will lead you to a deeper understanding of yourself.",
    suggestion:
      "You should take the time to rest, reflect and meditate on your thoughts and emotions. This card suggests that you should take the time to rest, reflect and meditate on your thoughts and emotions, and find ways to balance them. It may also indicate that you should be able to communicate your feelings and thoughts in a healthy and balanced way.",
    meaning_up:
      "Vigilance, retreat, solitude, hermit's repose, exile, tomb and coffin. It is these last that have suggested the design.",
    meaning_rev:
      "Wise administration, circumspection, economy, avarice, precaution, testament.",
    desc: "The effigy of a knight in the attitude of prayer, at full length upon his tomb.",
  },
  {
    name: "Five of Swords",
    name_short: "sw05",
    img: `https://www.sacred-texts.com/tarot/pkt/img/sw05.jpg`,
    value: "five",
    value_int: 5,
    suit: "swords",
    type: "minor",
    meaning:
      "Based on the cards that have come up in your reading, it seems that you may be facing some conflicts or challenges in your life. The cards also indicate that there may be a sense of victory or success, but it may come at a cost. Additionally, there may be power struggles or challenges related to authority or control in your life.",
    suggestion:
      "You should be willing to face and overcome conflicts, competition, and defeat. This card suggests that you should be willing to face and overcome conflicts, competition, and defeat, and find ways to move on. It may also indicate that you should be able to communicate your feelings and thoughts in a healthy and balanced way.",
    meaning_up:
      "Degradation, destruction, revocation, infamy, dishonour, loss, with the variants and analogues of these.",
    meaning_rev: "The same; burial and obsequies.",
    desc: "A disdainful man looks after two retreating and dejected figures. Their swords lie upon the ground. He carries two others on his left shoulder, and a third sword is in his right hand, point to earth. He is the master in possession of the field.",
  },
  {
    name: "Six of Swords",
    name_short: "sw06",
    img: `https://www.sacred-texts.com/tarot/pkt/img/sw06.jpg`,
    value: "six",
    value_int: 6,
    suit: "swords",
    type: "minor",
    meaning:
      "Based on the cards that have been drawn, it appears that you are currently at a stage in your life where you need to focus on moving on from past experiences, letting go of old patterns and emotions, and allowing yourself to heal and grow. It's important to remember that healing and growth can be difficult and painful, but it's necessary in order to move forward and create a brighter future for yourself.",
    suggestion:
      "You should be willing to move on from the past and find a new direction. This card suggests that you should be willing to move on from the past and find a new direction, and find ways to heal and move on. It may also indicate that you should be able to communicate your feelings and thoughts in a healthy and balanced way.",
    meaning_up:
      "journey by water, route, way, envoy, commissionary, expedient.",
    meaning_rev:
      "Declaration, confession, publicity; one account says that it is a proposal of love.",
    desc: "A ferryman carrying passengers in his punt to the further shore. The course is smooth, and seeing that the freight is light, it may be noted that the work is not beyond his strength.",
  },
  {
    name: "Seven of Swords",
    name_short: "sw07",
    img: `https://www.sacred-texts.com/tarot/pkt/img/sw07.jpg`,
    value: "seven",
    value_int: 7,
    suit: "swords",
    type: "minor",
    meaning:
      "The cards that have been drawn for you today speak of design, attempting to manifest your desires, wishing for positive outcomes and having confidence in the future. However, it also suggests that there may be some quarreling or conflicts that could arise, and a plan you have in mind may not come to fruition as you wish. It's important to keep in mind that even though there may be some challenges and setbacks, it's important to stay hopeful and maintain confidence in yourself and your abilities. Remember that even if a plan doesn't work out as you hoped, it's an opportunity to reassess and come up with a new approach.",
    suggestion:
      "You should be willing to be strategic, cunning and resourceful in difficult situations. This card suggests that you should be willing to be strategic, cunning and resourceful in difficult situations, and find ways to overcome them. It may also indicate that you should be able to communicate your feelings and thoughts in a healthy and balanced way",
    meaning_up:
      "Design, attempt, wish, hope, confidence; also quarrelling, a plan that may fail, annoyance. The design is uncertain in its import, because the significations are widely at variance with each other.",
    meaning_rev: "Good advice, counsel, instruction, slander, babbling.",
    desc: "A man in the act of carrying away five swords rapidly; the two others of the card remain stuck in the ground. A camp is close at hand.",
  },
  {
    name: "Eight of Swords",
    name_short: "sw08",
    img: `https://www.sacred-texts.com/tarot/pkt/img/sw08.jpg`,
    value: "eight",
    value_int: 8,
    suit: "swords",
    type: "minor",
    meaning:
      "Based on the cards that have been drawn, it appears that you are currently facing some difficult challenges and negative situations. The cards indicate that there may be bad news or unexpected events coming your way, as well as feelings of violent chagrin or anger. There may also be a crisis or difficult situation that you will have to navigate through, as well as potential censure or criticism from others. Additionally, it seems that you may be feeling limited in terms of your power or ability to make decisions. You may also be experiencing conflicts or struggles with others, and possibly even facing calumny or false accusations. Additionally, there is a possibility of sickness or health concerns. It's important to remember that these challenges are temporary and with strength, perseverance and positivity, you will overcome them.",
    suggestion:
      "You should be willing to break free from limitations and find a new path. This card suggests that you should be willing to break free from limitations and find a new path, and find ways to overcome them. It may also indicate that you should be able to communicate your feelings and thoughts in a healthy and balanced way.",
    meaning_up:
      "Bad news, violent chagrin, crisis, censure, power in trammels, conflict, calumny; also sickness.",
    meaning_rev:
      "Disquiet, difficulty, opposition, accident, treachery; what is unforeseen; fatality.",
    desc: "A woman, bound and hoodwinked, with the swords of the card about her. Yet it is rather a card of temporary durance than of irretrievable bondage.",
  },
  {
    name: "Nine of Swords",
    name_short: "sw09",
    img: `https://www.sacred-texts.com/tarot/pkt/img/sw09.jpg`,
    value: "nine",
    value_int: 9,
    suit: "swords",
    type: "minor",
    meaning:
      "Based on the cards that have been drawn, it appears that you are currently experiencing feelings of fear and anxiety, and possibly dealing with nightmares. This can be a difficult and overwhelming time, but it's important to remember that these feelings are temporary and will pass. It's also important to address the root cause of these emotions, whether it's by seeking professional help, talking to a friend or loved one, or finding ways to take care of yourself. Remember to take things one day at a time and have faith that you will overcome this challenge.",
    suggestion:
      "You should be willing to face and overcome fears and anxieties. This card suggests that you should be willing to face and overcome fears and anxieties, and find ways to heal and move on. It may also indicate that you should be able to communicate your feelings and thoughts in a healthy and balanced way.",
    meaning_up:
      "Death, failure, miscarriage, delay, deception, disappointment, despair.",
    meaning_rev: "Imprisonment, suspicion, doubt, reasonable fear, shame.",
    desc: "One seated on her couch in lamentation, with the swords over her. She is as one who knows no sorrow which is like unto hers. It is a card of utter desolation.",
  },
  {
    name: "Ten of Swords",
    name_short: "sw10",
    img: `https://www.sacred-texts.com/tarot/pkt/img/sw10.jpg`,
    value: "ten",
    value_int: 10,
    suit: "swords",
    type: "minor",
    meaning:
      "The cards indicate that you are currently experiencing or will experience a significant ending or completion. This may relate to a relationship, a job, a project, or any other aspect of your life. This ending or completion may be difficult and painful, but it's important to understand that it is necessary for new beginnings. This period marks the end of an old chapter, and the beginning of a new one. This is a time of finality and it's important to let go of the past and embrace the future. Remember that endings are not always negative, they are often a chance for growth and evolution.",
    suggestion:
      "You should be willing to accept endings and find closure. This card suggests that you should be willing to accept endings and find closure, and find ways to heal and move on. It may also indicate that you should be able to communicate your feelings and thoughts in a healthy and balanced way",
    meaning_up:
      "Whatsoever is intimated by the design; also pain, affliction, tears, sadness, desolation. It is not especially a card of violent death.",
    meaning_rev:
      "Advantage, profit, success, favour, but none of these are permanent; also power and authority.",
    desc: "A prostrate figure, pierced by all the swords belonging to the card.",
  },
];
