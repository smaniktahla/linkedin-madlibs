// Post templates for linkedinmadlibs.com. Shared by the site (loaded as a
// classic script in index.html) and the TRMNL endpoint (functions/api/trmnl.js,
// bundled by Pages, which picks up the module.exports below).
// Each field `id` matches a key in wordBank (wordbank.js).
const an = (w) => (/^[aeiou]/i.test(w) ? 'an ' : 'a ') + w;

const templates = [
  {
    label: '"The most effective..."',
    fields: [
      { id: 'trait', label: 'A leadership trait', placeholder: 'e.g. habit' },
      { id: 'role', label: 'Your role', placeholder: 'e.g. founder' },
      { id: 'jargon1', label: 'Business jargon #1', placeholder: 'e.g. alignment' },
      { id: 'jargon2', label: 'Business jargon #2', placeholder: 'e.g. leverage' },
      { id: 'buzzword', label: 'Inspirational buzzword', placeholder: 'e.g. impact' },
    ],
    render: (v) => `The most effective ${v.trait||'[TRAIT]'} I've seen in a ${v.role||'[ROLE]'} isn't what most people think.\n\nIt's not about ${v.jargon1||'[JARGON 1]'}.\nIt's not about ${v.jargon2||'[JARGON 2]'}.\n\nIt's about ${v.buzzword||'[BUZZWORD]'}.\n\nAnd the best ones do it every single day.`
  },
  {
    label: '"This event..."',
    fields: [
      { id: 'event', label: 'Event name', placeholder: 'e.g. Summit 2025' },
      { id: 'topic', label: 'Vague topic discussed', placeholder: 'e.g. the future of work' },
      { id: 'takeaway', label: 'Humble takeaway', placeholder: 'e.g. so much to learn' },
      { id: 'cta', label: 'Call to action', placeholder: 'e.g. drop a comment below' },
    ],
    render: (v) => `This event changed everything.\n\n${v.event||'[EVENT]'} brought together some of the sharpest minds in the industry to talk about ${v.topic||'[TOPIC]'}.\n\nI left the room with pages of notes and one reminder: ${v.takeaway||'[HUMBLE TAKEAWAY]'}.\n\nIf you were there, ${v.cta||'[CTA]'}, I'd love to connect.`
  },
  {
    label: '"Please join me in congratulating..."',
    fields: [
      { id: 'name', label: "Person's name", placeholder: 'e.g. Alex Chen' },
      { id: 'achievement', label: 'Their achievement', placeholder: 'e.g. new role at Google' },
      { id: 'quality', label: 'Vague quality they have', placeholder: 'e.g. passion for impact' },
      { id: 'org', label: 'Their new organization', placeholder: 'e.g. Google' },
    ],
    render: (v) => `Please join me in congratulating ${v.name||'[NAME]'} on ${v.achievement||'[ACHIEVEMENT]'}!\n\nI've had the privilege of watching ${v.name||'[NAME]'} grow and I can say with confidence that their ${v.quality||'[QUALITY]'} is truly remarkable.\n\n${v.org||'[ORG]'} is lucky to have them. Wishing you all the best on this exciting new chapter!`
  },
  {
    label: '"We are proud to announce..."',
    fields: [
      { id: 'org', label: 'Your organization', placeholder: 'e.g. Acme Corp' },
      { id: 'announcement', label: "The thing you're announcing", placeholder: 'e.g. our Series A' },
      { id: 'mission', label: 'Your mission (vague)', placeholder: 'e.g. empowering humans' },
      { id: 'investors', label: 'Impressive names to drop', placeholder: 'e.g. a16z, Sequoia' },
    ],
    render: (v) => `We are proud to announce that ${v.org||'[ORG]'} has ${v.announcement||'[ANNOUNCEMENT]'}.\n\nThis is a huge milestone in our journey to ${v.mission||'[MISSION]'} and we couldn't have done it without the support of ${v.investors||'[IMPRESSIVE NAMES]'}.\n\nThe best is yet to come. Stay tuned.`
  },
  {
    label: '"So proud of our team at..."',
    fields: [
      { id: 'org', label: 'Your organization', placeholder: 'e.g. Acme Corp' },
      { id: 'metric', label: 'Impressive metric', placeholder: 'e.g. 10x growth' },
      { id: 'timeframe', label: 'Timeframe', placeholder: 'e.g. Q3' },
      { id: 'secret', label: 'Your "secret"', placeholder: 'e.g. psychological safety' },
    ],
    render: (v) => `So proud of our team at ${v.org||'[ORG]'}.\n\nWe hit ${v.metric||'[METRIC]'} in ${v.timeframe||'[TIMEFRAME]'}. Not because we worked harder than everyone else. But because we worked differently.\n\nThe secret? ${v.secret||'[SECRET]'}.\n\nThank you to every single person who made this possible. You know who you are.`
  },
  {
    label: '"Everyone wants to..."',
    fields: [
      { id: 'hotThing', label: 'The hot thing everyone wants', placeholder: 'e.g. build AI' },
      { id: 'layer1', label: 'Sexy top layer', placeholder: 'e.g. AI Tools' },
      { id: 'layer1desc', label: 'Why people love it', placeholder: 'e.g. New models and demos every day' },
      { id: 'layer2', label: 'Middle layer', placeholder: 'e.g. Data Analysis' },
      { id: 'layer2desc', label: 'Why it matters', placeholder: 'e.g. Understanding what the data actually says' },
      { id: 'layer3', label: 'Unglamorous foundation', placeholder: 'e.g. Data Cleaning' },
      { id: 'layer3desc', label: 'Why it determines everything', placeholder: 'e.g. Fixing errors and inconsistencies' },
      { id: 'irony1', label: 'What teams waste time on', placeholder: 'e.g. which model to use' },
      { id: 'irony2', label: 'What they should focus on', placeholder: 'e.g. whether the data can be trusted' },
      { id: 'punchline1', label: 'Closing line 1', placeholder: 'e.g. AI gets the spotlight.' },
      { id: 'punchline2', label: 'Closing line 2', placeholder: 'e.g. Data gets the results.' },
    ],
    render: (v) => `Everyone wants to ${v.hotThing||'[HOT THING]'}.\n\nAlmost nobody wants to do the work that comes before it.\n\n1. ${v.layer1||'[LAYER 1]'}\n\nThis is where the excitement is.\n${v.layer1desc||'[WHY PEOPLE LOVE IT]'}.\n\n2. ${v.layer2||'[LAYER 2]'}\n\nThis is where reality begins.\n${v.layer2desc||'[WHY IT MATTERS]'} takes far more effort than it looks.\n\n3. ${v.layer3||'[LAYER 3]'}\n\nThis is where most value is created.\n${v.layer3desc||'[WHY IT DETERMINES EVERYTHING]'} isn't exciting, but it determines everything that follows.\n\nThe irony?\n\nMost teams spend weeks debating ${v.irony1||'[WHAT TEAMS WASTE TIME ON]'}.\n\nAnd only hours discussing ${v.irony2||'[WHAT THEY SHOULD FOCUS ON]'}.\n\n${v.punchline1||'[CLOSING LINE 1]'}\n\n${v.punchline2||'[CLOSING LINE 2]'}`
  },
  {
    label: '"Exciting news!..."',
    fields: [
      { id: 'org', label: 'Organization', placeholder: 'e.g. Acme Federal Solutions LLC' },
      { id: 'contract', label: 'Lucrative contract', placeholder: 'e.g. a $50M IDIQ award' },
      { id: 'vehicles', label: 'Contract vehicles no one cares about', placeholder: 'e.g. OASIS+, Alliant 3, CIO-SP4' },
      { id: 'program', label: 'Award program', placeholder: 'e.g. governmentwide acquisition contract' },
      { id: 'adjective', label: 'Superlative adjective', placeholder: 'e.g. mission-critical' },
    ],
    render: (v) => `Exciting news! ${v.org||'[ORGANIZATION]'} has been awarded ${v.contract||'[LUCRATIVE CONTRACT]'} for ${v.vehicles||'[LIST OF CONTRACT VEHICLES NO ONE CARES ABOUT EXCEPT FOR THEIR CAPACITY TO FUND A BMW PURCHASE]'}, joining an elite pool of awardees on one of the federal government's premier ${v.program||'[AWARD PROGRAM]'}.\n\nWe're proud to bring our proven track record supporting ${v.adjective||'[SUPERLATIVE ADJECTIVE]'} federal missions to even more agencies through this vehicle.`
  },
  {
    label: '"I recently had the opportunity..."',
    fields: [
      { id: 'myOrg', label: 'My organization', placeholder: 'e.g. Smith & Partners' },
      { id: 'kissup', label: 'Name to kiss up to', placeholder: 'e.g. Jane Doe' },
      { id: 'kissupAdj', label: 'Adjective to describe them', placeholder: 'e.g. visionary' },
      { id: 'timeframe', label: 'Timeframe', placeholder: 'e.g. the last three years' },
      { id: 'org', label: 'Their organization', placeholder: 'e.g. Y Combinator' },
      { id: 'jargon', label: 'Business jargon insight', placeholder: 'e.g. velocity beats perfection' },
      { id: 'term1', label: 'Business term', placeholder: 'e.g. unit economics' },
      { id: 'term2', label: 'General business success term', placeholder: 'e.g. long-term vision' },
    ],
    render: (v) => `I recently had the opportunity to share insights about my practice at ${v.myOrg||'[MY ORG]'} and what I've learned from working alongside the ${v.kissupAdj||'[ADJECTIVE]'} ${v.kissup||'[NAME]'} over the past ${v.timeframe||'[TIMEFRAME]'} with ${v.org||'[ORGANIZATION]'}.\n\nOne topic that came up repeatedly: ${v.jargon||'[BUSINESS JARGON]'}. Founders are making fast-moving decisions with real business consequences, and my role is always to help them understand the ${v.term1||'[BUSINESS TERM]'} while keeping their ${v.term2||'[GENERAL BUSINESS SUCCESS TERM]'} in focus.`
  },
  {
    label: '"Spending time with the [Family]..."',
    fields: [
      { id: 'dynasty', label: 'The important family/group', placeholder: 'e.g. Packard family' },
      { id: 'dynastyDesc', label: 'What makes them special', placeholder: 'e.g. third-generation Culligan leaders' },
      { id: 'partners', label: 'Agency/partner names to drop', placeholder: 'e.g. Tinuiti and Range Digital' },
      { id: 'fancyPlace', label: 'Fancy location', placeholder: 'e.g. Lake Minnetonka' },
      { id: 'virtue', label: 'What great partnerships are built on', placeholder: 'e.g. trust, shared values and human connections' },
      { id: 'legacy', label: 'What you\'re preserving', placeholder: 'e.g. a remarkable legacy' },
      { id: 'company', label: 'The company / brand', placeholder: 'e.g. Culligan International' },
      { id: 'namelist', label: 'Wall of names to thank', placeholder: 'e.g. Derek, John, Lauren, Kelly...' },
    ],
    render: (v) => `Spending time with the ${v.dynasty||'[FAMILY/GROUP]'}—${v.dynastyDesc||'[WHAT MAKES THEM SPECIAL]'}—and our agency partners ${v.partners||'[PARTNER NAMES]'} at ${v.fancyPlace||'[FANCY LOCATION]'} was a reminder that the best partnerships are built on ${v.virtue||'[VIRTUE]'}.\n\nTogether, we're preserving ${v.legacy||'[LEGACY]'} while shaping the future of ${v.company||'[COMPANY]'}.\n\nThanks to ${v.namelist||'[WALL OF NAMES]'} for the enjoyable time together.`
  },
  {
    label: '"Surprised, humbled, and grateful..."',
    fields: [
      { id: 'award', label: 'Award name', placeholder: 'e.g. FY26 Five Star Winner' },
      { id: 'awardOrg', label: "Company (award giver)", placeholder: 'e.g. FedEx' },
      { id: 'team', label: 'Broader team / business area', placeholder: 'e.g. Global Air Freight' },
      { id: 'subteam', label: 'Your specific team', placeholder: 'e.g. Solution Design Implementation' },
      { id: 'challenge', label: 'Vague challenge you tackle', placeholder: 'e.g. complex customer needs' },
      { id: 'outcome', label: 'Vague outcome you deliver', placeholder: 'e.g. scalable solutions' },
      { id: 'timeframe', label: 'Timeframe to look forward to', placeholder: 'e.g. FY26' },
      { id: 'thankYouList', label: 'Mandatory thank-you list (optional)', placeholder: 'e.g. my incredible team, visionary leadership, the barista at Terminal C' },
    ],
    render: (v) => {
      const thanks = v.thankYouList ? `\n\nNone of this would have been possible without ${v.thankYouList}.` : '';
      return `Surprised, humbled, and grateful to be recognized as a ${v.award||'[AWARD]'}, ${v.awardOrg||'[COMPANY]'}'s highest honor!\n\nSupporting the growth of ${v.team||'[TEAM]'} on the ${v.subteam||'[SUBTEAM]'} team has been one of the most rewarding experiences of my career. As demand continues to grow, I've had the opportunity to work with talented teams across the globe to turn ${v.challenge||'[CHALLENGE]'} into ${v.outcome||'[OUTCOME]'}.\n\nThis recognition is especially meaningful, and I'm grateful for the support of my team, leadership, and colleagues who make the work both challenging and rewarding every day.${thanks}\n\nLooking forward to what we can accomplish in ${v.timeframe||'[TIMEFRAME]'}!`;
    }
  },
  {
    label: '"I got let go last month..."',
    fields: [
      { id: 'org', label: 'Company you got let go from', placeholder: 'e.g. Meridian Digital' },
      { id: 'timeframe', label: 'Timeframe', placeholder: 'e.g. last month' },
      { id: 'excuse', label: 'The corporate euphemism for why', placeholder: 'e.g. a restructuring' },
      { id: 'lesson', label: "The lesson you 'learned'", placeholder: 'e.g. hustle culture was quietly killing me' },
      { id: 'gratitude', label: 'Who gets the thank-you', placeholder: 'e.g. my former team' },
      { id: 'openRole', label: "The role you're 'open to'", placeholder: 'e.g. Head of Growth' },
    ],
    render: (v) => `I got let go from ${v.org||'[COMPANY]'} ${v.timeframe||'[TIMEFRAME]'}.\n\nHere's why it might be the best thing that's ever happened to me.\n\nFor years I told myself ${v.excuse||'[EUPHEMISM]'} was just part of the job. It wasn't until I had the time to sit with it that I realized ${v.lesson||'[LESSON]'}.\n\nGrateful beyond words for ${v.gratitude||'[GRATITUDE]'} and everyone who reached out.\n\nIf you're hiring for a ${v.openRole||'[OPEN ROLE]'}, my DMs are open.`
  },
  {
    label: '"I don\'t usually post about this, but..."',
    fields: [
      { id: 'modesty', label: 'Reason for your reluctance', placeholder: "e.g. I'm not one to toot my own horn" },
      { id: 'boast', label: 'The actual boast', placeholder: 'e.g. we just crossed 8 figures in ARR' },
      { id: 'humbleBrag', label: 'What "really" made it happen', placeholder: 'e.g. years of 80-hour weeks' },
      { id: 'cta', label: 'Call to action', placeholder: 'e.g. drop a comment below' },
    ],
    render: (v) => `I don't usually post about this, but ${v.modesty||'[REASON FOR RELUCTANCE]'}.\n\nToday ${v.boast||'[THE ACTUAL BOAST]'}.\n\nIt wasn't luck. It was ${v.humbleBrag||'[WHAT REALLY MADE IT HAPPEN]'}.\n\n${v.cta||'[CTA]'}`
  },
  {
    label: '"I don\'t hire for [skill]. I hire for..."',
    fields: [
      { id: 'skillNot', label: "The skill you claim not to hire for", placeholder: 'e.g. credentials' },
      { id: 'qualityInstead', label: 'The vague quality you hire for instead', placeholder: 'e.g. grit' },
      { id: 'example', label: 'A supporting anecdote', placeholder: 'e.g. the best engineer on my team never finished college' },
      { id: 'punchline', label: 'Closing hot take', placeholder: "e.g. talent doesn't care about your pedigree" },
    ],
    render: (v) => `I don't hire for ${v.skillNot||'[SKILL]'}.\n\nI hire for ${v.qualityInstead||'[VAGUE QUALITY]'}.\n\n${v.example||'[SUPPORTING ANECDOTE]'}.\n\n${v.punchline||'[PUNCHLINE]'}`
  },
  {
    label: '"[N] years, [N] lessons"',
    fields: [
      { id: 'years', label: 'Number of years', placeholder: 'e.g. 10' },
      { id: 'lesson1', label: 'Lesson 1', placeholder: 'e.g. consistency beats intensity' },
      { id: 'lesson2', label: 'Lesson 2', placeholder: "e.g. say yes before you're ready" },
      { id: 'lesson3', label: 'Lesson 3', placeholder: 'e.g. your network is your net worth' },
      { id: 'lesson4', label: 'Lesson 4', placeholder: 'e.g. done is better than perfect' },
      { id: 'lesson5', label: 'Lesson 5', placeholder: 'e.g. nobody is coming to save you' },
      { id: 'closingLine', label: 'Closing line', placeholder: 'e.g. Onward.' },
    ],
    render: (v) => `${v.years||'[N]'} years, ${v.years||'[N]'} lessons.\n\n1. ${v.lesson1||'[LESSON 1]'}\n2. ${v.lesson2||'[LESSON 2]'}\n3. ${v.lesson3||'[LESSON 3]'}\n4. ${v.lesson4||'[LESSON 4]'}\n5. ${v.lesson5||'[LESSON 5]'}\n\n${v.closingLine||'[CLOSING LINE]'}`
  },
  {
    label: '"I almost didn\'t send that message..."',
    fields: [
      { id: 'channel', label: 'How you nearly reached out', placeholder: 'e.g. a cold LinkedIn DM' },
      { id: 'name', label: 'Who you reached out to', placeholder: 'e.g. Alex Chen' },
      { id: 'doubt', label: 'The hesitation', placeholder: "e.g. I told myself they'd never respond" },
      { id: 'networkOutcome', label: 'What happened next', placeholder: 'e.g. it turned into a mentorship that changed my career' },
      { id: 'moral', label: 'The moral', placeholder: 'e.g. send the message' },
    ],
    render: (v) => `I almost didn't send that message.\n\nI'd drafted and deleted ${v.channel||'[CHANNEL]'} to ${v.name||'[NAME]'} probably five times. ${v.doubt||'[DOUBT]'}.\n\nI sent it anyway. ${v.networkOutcome||'[WHAT HAPPENED NEXT]'}.\n\nThe moral? ${v.moral||'[MORAL]'}`
  },
  {
    label: '"Today, I am proud to announce..."',
    fields: [
      { id: 'org', label: 'Company name', placeholder: 'e.g. JetStream' },
      { id: 'product', label: 'Product / platform name', placeholder: 'e.g. Security-first AI Governance Platform (SAIG)' },
      { id: 'certification', label: 'Certification achieved', placeholder: 'e.g. FedRAMP High certification' },
      { id: 'certDesc', label: 'Why the certification matters', placeholder: 'e.g. one of the most rigorous publicly available third-party baselines for cloud services' },
      { id: 'superlative1', label: 'Superlative claim #1', placeholder: 'e.g. We are the first purpose-built AI control plane to reach it' },
      { id: 'superlative2', label: 'Superlative claim #2', placeholder: 'e.g. one of the fastest companies to achieve High certification' },
      { id: 'tension', label: 'The false dichotomy your customers face', placeholder: 'e.g. Federal agencies are being told to move fast on AI while answering to the highest standards of security.' },
      { id: 'resolution', label: 'The false choice, resolved', placeholder: "e.g. You shouldn't have to choose between speed and trust. We help you get both." },
      { id: 'offer', label: 'The sales pitch CTA', placeholder: 'e.g. build a 90-day AI action plan to cement your AI governance' },
    ],
    render: (v) => `Today, I am proud to announce that ${v.org||'[COMPANY]'}'s ${v.product||'[PRODUCT]'} has achieved ${v.certification||'[CERTIFICATION]'}.\n\nIt's ${v.certDesc||'[WHY IT MATTERS]'}. ${v.superlative1||'[SUPERLATIVE CLAIM 1]'}, and ${v.superlative2||'[SUPERLATIVE CLAIM 2]'}.\n\n${v.tension||'[FALSE DICHOTOMY]'} ${v.resolution||'[FALSE CHOICE, RESOLVED]'}\n\nWork with us to ${v.offer||'[SALES PITCH]'}: linkedinmadlibs.com`
  },
  {
    label: '"LinkedIn CEO Mode" 🔥',
    fields: [
      { id: 'product', label: 'Product / platform name', placeholder: 'e.g. AI-powered Quantum Synergy Fabric™' },
      { id: 'certification', label: 'Certification achieved', placeholder: 'e.g. USDA Organic certification' },
    ],
    render: (v) => `Today, I'm incredibly humbled to announce that our ${v.product||'[PRODUCT]'} has achieved ${v.certification||'[CERTIFICATION]'}.\n\nThis milestone represents not only a paradigm shift, but a paradigm shift of paradigm shifts.\n\nTo everyone who said this couldn't be done:\n\nThank you.\n\nYou were the fuel.\n\n#leadership #innovation #humble #blessed #disruption #ai #gratitude #family #grind #synergy`
  },
  {
    label: '"My kid taught me more than any MBA..."',
    fields: [
      { id: 'childWho', label: 'The child / person', placeholder: 'e.g. 8-year-old' },
      { id: 'childAct', label: 'Mundane thing they did', placeholder: 'e.g. refused to put on their shoes' },
      { id: 'childInsight', label: 'Profound interpretation', placeholder: "e.g. this wasn't stubbornness. It was exclusion from the decision" },
      { id: 'childPrinciple', label: 'Business principle', placeholder: 'e.g. why 70% of digital transformations fail' },
      { id: 'childMoral', label: 'Closing moral', placeholder: "e.g. Leadership isn't about getting people to put on their shoes. It's about helping them understand why the shoes matter." },
    ],
    render: (v) => `My ${v.childWho||'[CHILD]'} taught me more about leadership than any MBA ever could.\n\nThis morning, they ${v.childAct||'[MUNDANE THING]'}.\n\nAt first, I saw a problem.\n\nThen I realized: ${v.childInsight||'[PROFOUND INTERPRETATION]'}.\n\nAnd suddenly I understood ${v.childPrinciple||'[BUSINESS PRINCIPLE]'}.\n\n${v.childMoral||'[CLOSING MORAL]'}\n\nMy ${v.childWho||'[CHILD]'} has never managed a P&L.\nBut today they taught me more about change management than most executives ever will.`
  },
  {
    label: '"My flight was delayed. Here\'s what it taught me about leadership."',
    fields: [
      { id: 'flightTrouble', label: 'The inconvenience', placeholder: 'e.g. my flight was delayed 6 hours' },
      { id: 'flightPerson', label: 'Unlikely hero', placeholder: 'e.g. a gate agent named Dave' },
      { id: 'flightAct', label: 'Tiny act', placeholder: 'e.g. handed out phone chargers' },
      { id: 'flightBuzz', label: 'Business jargon', placeholder: 'e.g. radical ownership' },
    ],
    render: (v) => `Yesterday ${v.flightTrouble||'[INCONVENIENCE]'}.\n\nEveryone at the gate was frustrated.\n\nThen ${v.flightPerson||'[PERSON]'} did something remarkable: ${v.flightAct||'[TINY ACT]'}.\n\nNo title. No authority. No playbook.\n\nJust ${v.flightBuzz||'[BUZZWORD]'}.\n\nIt reminded me that leadership isn't a position.\nIt's what you do when nobody has given you permission to lead.\n\nAirlines lose luggage.\nGreat leaders deliver clarity.`
  },
  {
    label: '"I fired my best employee."',
    fields: [
      { id: 'fireSuperlative', label: 'Employee superlative', placeholder: 'e.g. our top salesperson' },
      { id: 'fireMetric', label: 'Impressive metric', placeholder: 'e.g. beat quota by 140%' },
      { id: 'fireFlaw', label: 'Fatal flaw', placeholder: 'e.g. used Reply All' },
      { id: 'fireValue', label: 'Violated company value', placeholder: 'e.g. radical humility' },
    ],
    render: (v) => `I fired my best employee yesterday.\n\nThey were ${v.fireSuperlative||'[SUPERLATIVE]'}.\nThey ${v.fireMetric||'[METRIC]'}.\n\nEvery quarter. Without fail.\n\nBut they ${v.fireFlaw||'[FATAL FLAW]'}.\n\nAnd that violated one of our most important values: ${v.fireValue||'[COMPANY VALUE]'}.\n\nPerformance gets you a seat at the table.\nCharacter determines whether you stay there.\n\nCulture isn't what you put on the wall.\nIt's who you're willing to fire.`
  },
  {
    label: '"I rejected a candidate who was perfect on paper."',
    fields: [
      { id: 'rejCredentials', label: 'Their credentials', placeholder: 'e.g. an MBA, 3 patents, and a TEDx talk' },
      { id: 'rejQuestion', label: 'Interview question', placeholder: 'e.g. What does ownership mean to you?' },
      { id: 'rejAnswer', label: 'The disqualifying answer', placeholder: 'e.g. I prefer to be told what to do' },
      { id: 'rejVague', label: 'The vague quality you can\'t teach', placeholder: 'e.g. Humility' },
      { id: 'rejQuality', label: 'Quality your eventual hire had twice of', placeholder: 'e.g. hunger' },
    ],
    render: (v) => `Yesterday I interviewed someone with ${v.rejCredentials||'[CREDENTIALS]'}.\n\nOn paper, they were perfect.\n\nBut when I asked "${v.rejQuestion||'[INTERVIEW QUESTION]'}", they said:\n\n"${v.rejAnswer||'[BAD ANSWER]'}"\n\nI ended the interview 10 minutes later.\n\nBecause skills can be taught.\n${v.rejVague||'[VAGUE QUALITY]'} can't.\n\nWe didn't hire them.\n\nThree months later, we hired someone with half the experience and twice the ${v.rejQuality||'[QUALITY]'}.\n\nBest decision we ever made.`
  },
  {
    label: '"I stopped taking meetings before 10 AM."',
    fields: [
      { id: 'habit', label: 'The thing you stopped doing', placeholder: 'e.g. taking meetings before 10 AM' },
      { id: 'habitResult', label: 'Impressive result', placeholder: 'e.g. our revenue grew 40%' },
    ],
    render: (v) => `Six months ago, I stopped ${v.habit||'[HABIT]'}.\n\nPeople thought I was crazy.\n\nMy calendar opened up.\nMy thinking got sharper.\nMy team became more autonomous.\n\nAnd ${v.habitResult||'[METRIC]'}.\n\nCoincidence? Maybe.\n\nBut here's what I've learned:\n\nYour calendar isn't a scheduling tool.\nIt's a statement of priorities.\n\nProtect it accordingly.`
  },
  {
    label: '"Everyone is using AI wrong."',
    fields: [
      { id: 'aiWrongQ', label: 'The wrong question', placeholder: 'e.g. Which model should we use?' },
      { id: 'aiDeepQ', label: 'The supposedly deep question', placeholder: 'e.g. Where does judgment actually create value?' },
      { id: 'aiThing1', label: 'What AI isn\'t', placeholder: 'e.g. tool' },
      { id: 'aiThing2', label: 'What AI is', placeholder: 'e.g. operating model' },
      { id: 'aiOutcome', label: 'What the winners will do', placeholder: 'e.g. redefine their industries' },
    ],
    render: (v) => `Everyone is using AI wrong.\n\nThey're asking:\n"${v.aiWrongQ||'[WRONG QUESTION]'}"\n\nThe real question is:\n"${v.aiDeepQ||'[DEEP QUESTION]'}"\n\nAI isn't ${an(v.aiThing1||'[THING 1]')}.\nIt's ${an(v.aiThing2||'[THING 2]')}.\n\nThe companies that understand this will ${v.aiOutcome||'[WINNER OUTCOME]'}.\n\nThe ones that don't?\nThey'll spend the next 5 years wondering what happened.`
  },
  {
    label: '"We turned down $X in revenue."',
    fields: [
      { id: 'revAmount', label: 'Absurd amount', placeholder: 'e.g. $4.2M' },
      { id: 'revDemand', label: 'What the customer demanded', placeholder: 'e.g. asked for a discount' },
      { id: 'revPrinciple', label: 'The principle you chose', placeholder: 'e.g. focus' },
    ],
    render: (v) => `Last quarter, we walked away from ${v.revAmount||'[AMOUNT]'} in revenue.\n\nNot because we couldn't deliver.\n\nBecause the customer ${v.revDemand||'[CUSTOMER DEMAND]'}.\n\nIt would have been easy to say yes.\n\nBut every yes is also a no to something else.\n\nWe chose ${v.revPrinciple||'[PRINCIPLE]'}.\n\nShort-term revenue is temporary.\nTrust compounds.`
  },
  {
    label: '"What [ridiculous activity] taught me about B2B sales."',
    fields: [
      { id: 'activity', label: 'Ridiculous activity', placeholder: 'e.g. smoking a brisket for 14 hours' },
      { id: 'actMoment', label: 'The specific moment', placeholder: 'e.g. hour nine' },
      { id: 'actLesson1', label: 'Lesson 1', placeholder: 'e.g. Patience closes deals' },
      { id: 'actLesson2', label: 'Lesson 2', placeholder: 'e.g. Nobody reads the instructions' },
      { id: 'actLesson3', label: 'Lesson 3', placeholder: 'e.g. The champion matters more than the contract' },
      { id: 'actPunchline', label: 'Activity punchline', placeholder: 'e.g. Low and slow wins' },
    ],
    render: (v) => `I spent this weekend ${v.activity||'[ACTIVITY]'}.\n\nSomewhere around ${v.actMoment||'[SPECIFIC MOMENT]'}, it hit me:\n\nThis is exactly like B2B sales.\n\n${v.actLesson1||'[LESSON 1]'}.\n${v.actLesson2||'[LESSON 2]'}.\n${v.actLesson3||'[LESSON 3]'}.\n\nThe parallels are impossible to ignore.\n\n${v.actPunchline||'[PUNCHLINE]'}.\n\nSales is no different.`
  }
];

// Fields filled with a list of N-M picks instead of a single value: [min, max].
const MULTI_PICK_FIELDS = { thankYouList: [3, 5] };

if (typeof module !== 'undefined') module.exports = { templates, MULTI_PICK_FIELDS };
