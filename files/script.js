//Code partialy stolen from https://github.com/punkave/random-words
var wordList = [
    "Ability","Able","Aboard","About","Above","Accept","Accident","According",
    "Account","Accurate","Acres","Across","Act","Action","Active","Activity",
    "Actual","Actually","Add","Addition","Additional","Adjective","Adult","Adventure",
    "Advice","Affect","Afraid","After","Afternoon","Again","Against","Age",
    "Ago","Agree","Ahead","Aid","Air","Airplane","Alike","Alive",
    "All","Allow","Almost","Alone","Along","Aloud","Alphabet","Already",
    "Also","Although","Am","Among","AmongUS","Amount","Ancient","Angle","Angry",
    "Animal","Announced","Another","Answer","Ants","Any","Anybody","Anyone",
    "Anything","Anyway","Anywhere","Apart","Apartment","Appearance","Apple","Applied",
    "Appropriate","Are","Area","Arm","Army","Around","Arrange","Arrangement",
    "Arrive","Arrow","Art","Article","As","Ass","Aside","Ask","Asleep",
    "At","Ate","Atmosphere","Atom","Atomic","Attached","Attack","Attempt",
    "Attention","Audience","Author","Automobile","Available","Average","Avoid","Aware",
    "Away","Baby","Back","Bad","Badly","Bag","Balance","Ball",
    "Balloon","Band","Bank","Bar","Bare","Bark","Barn","Base",
    "Baseball","Basic","Basis","Basket","Bat","Battle","Be","Bean",
    "Bear","Beat","Beautiful","Beauty","Became","Because","Become","Becoming",
    "Bee","Been","Before","Began","Beginning","Begun","Behavior","Behind",
    "Being","Believed","Bell","Belong","Below","Belt","Bend","Beneath",
    "Bent","Beside","Best","Bet","Better","Between","Beyond","Bicycle",
    "Bigger","Biggest","Bill","Birds","Birth","Birthday","Bit","Bite",
    "Black","Blank","Blanket","Blew","Blind","Block","Blood","Blow",
    "Blue","Board","Boat","Body","Bone","Book","Border","Born",
    "Both","Bottle","Bottom","Bound","Bow","Bowl","Box","Boy",
    "Brain","Branch","Brass","Brave","Bread","Break","Breakfast","Breath",
    "Breathe","Breathing","Breeze","Brick","Bridge","Brief","Bright","Bring",
    "Broad","Broke","Broken","Brother","Brought","Brown","Brush","Buffalo",
    "Build","Building","Built","Buried","Burn","Burst","Bus","Bush",
    "Business","Busy","But","Butter","Buy","By","Cabin","Cage",
    "Cake","Call","Calm","Came","Camera","Camp","Can","Canal",
    "Cannot","Cap","Capital","Captain","Captured","Car","Carbon","Card",
    "Care","Careful","Carefully","Carried","Carry","Case","Cast","Castle",
    "Cat","Catch","Cattle","Caught","Cause","Cave","Cell","Cent",
    "Center","Central","Century","Certain","Certainly","Chain","Chair","Chamber",
    "Chance","Change","Changing","Chapter","Character","Characteristic","Charge","Chart",
    "Check","Cheese","Chemical","Chest","Chicken","Chief","Child","Children",
    "Choice","Choose","Chose","Chosen","Church","Circle","Circus","Citizen",
    "City","Class","Classroom","Claws","Clay","Clean","Clear","Clearly",
    "Climate","Climb","Clock","Close","Closely","Closer","Cloth","Clothes",
    "Clothing","Cloud","Club","Coach","Coal","Coast","Coat","Coffee",
    "Cold","Collect","College","Colony","Color","Column","Combination","Combine",
    "Come","Comfortable","Coming","Command","Common","Community","Company","Compare",
    "Compass","Complete","Completely","Complex","Composed","Composition","Compound","Concerned",
    "Condition","Congress","Connected","Consider","Consist","Consonant","Constantly","Construction",
    "Contain","Continent","Continued","Contrast","Control","Conversation","Cook","Cookies",
    "Cool","Copper","Copy","Corn","Corner","Correct","Correctly","Cost",
    "Cotton","Could","Count","Country","Couple","Courage","Course","Court",
    "Cover","Cow","Cowboy","Crack","Cream","Create","Creature","Crew",
    "Crop","Cross","Crowd","Cry","Cup","Curious","Current","Curve",
    "Customs","Cut","Cutting","Daily","Damage","Dance","Danger","Dangerous",
    "Dark","Darkness","Date","Daughter","Dawn","Day","Dead","Deal",
    "Dear","Death","Decide","Declared","Deep","Deeply","Deer","Definition",
    "Degree","Depend","Depth","Describe","Desert","Design","Desk","Detail",
    "Determine","Develop","Development","Diagram","Diameter","Did","Die","Differ",
    "Difference","Different","Difficult","Difficulty","Dig","Dinner","Direct","Direction",
    "Directly","Dirt","Dirty","Disappear","Discover","Discovery","Discuss","Discussion",
    "Disease","Dish","Distance","Distant","Divide","Division","Do","Doctor",
    "Does","Dog","Doing","Doll","Dollar","Done","Donkey","Door",
    "Dot","Double","Doubt","Down","Dozen","Draw","Drawn","Dream",
    "Dress","Drew","Dried","Drink","Drive","Driven","Driver","Driving",
    "Drop","Dropped","Drove","Dry","Duck","Due","Dug","Dull",
    "During","Dust","Duty","Each","Eager","Ear","Earlier","Early",
    "Earn","Earth","Easier","Easily","East","Easy","Eat","Eaten",
    "Edge","Education","Effect","Effort","Egg","Eight","Either","Electric",
    "Electricity","Element","Elephant","Eleven","Else","Empty","End","Enemy",
    "Energy","Engine","Engineer","Enjoy","Enough","Enter","Entire","Entirely",
    "Environment","Equal","Equally","Equator","Equipment","Escape","Especially","Essential",
    "Establish","Even","Evening","Event","Eventually","Ever","Every","Everybody",
    "Everyone","Everything","Everywhere","Evidence","Exact","Exactly","Examine","Example",
    "Excellent","Except","Exchange","Excited","Excitement","Exciting","Exclaimed","Exercise",
    "Exist","Expect","Experience","Experiment","Explain","Explanation","Explore","Express",
    "Expression","Extra","Eye","Face","Facing","Fact","Factor","Factory",
    "Failed","Fair","Fairly","Fall","Fallen","Familiar","Family","Famous",
    "Far","Farm","Farmer","Farther","Fast","Fastened","Faster","Fat",
    "Father","Favorite","Fear","Feathers","Feature","Fed","Feed","Feel",
    "Feet","Fell","Fellow","Felt","Fence","Few","Fewer","Field",
    "Fierce","Fifteen","Fifth","Fifty","Fight","Fighting","Figure","Fill",
    "Film","Final","Finally","Find","Fine","Finest","Finger","Finish",
    "Fire","Fireplace","Firm","First","Fish","Five","Fix","Flag",
    "Flame","Flat","Flew","Flies","Flight","Floating","Floor","Flow",
    "Flower","Fly","Fog","Folks","Follow","Food","Foot","Football",
    "For","Force","Foreign","Forest","Forget","Forgot","Forgotten","Form",
    "Former","Fort","Forth","Forty","Forward","Fought","Found","Four",
    "Fourth","Fox","Frame","Free","Freedom","Frequently","Fresh","Friend",
    "Friendly","Frighten","Frog","From","Front","Frozen","Fruit","Fuel",
    "Full","Fully","Fun","Function","Funny","Fur","Furniture","Further",
    "Future","Gain","Game","Garage","Garden","Gas","Gasoline","Gate",
    "Gather","Gave","General","Generally","Gentle","Gently","Get","Getting",
    "Giant","Gift","Girl","Give","Given","Giving","Glad","Glass",
    "Globe","Go","Goes","Gold","Golden","Gone","Good","Goose",
    "Got","Government","Grabbed","Grade","Gradually","Grain","Grandfather","Grandmother",
    "Graph","Grass","Gravity","Gray","Great","Greater","Greatest","Greatly",
    "Green","Grew","Ground","Group","Grow","Grown","Growth","Guard",
    "Guess","Guide","Gulf","Gun","Habit","Had","Hair","Half",
    "Halfway","Hall","Hand","Handle","Handsome","Hang","Happen","Happened",
    "Happily","Happy","Harbor","Hard","Harder","Hardly","Has","Hat",
    "Have","Having","Hay","He","Headed","Heading","Health","Heard",
    "Hearing","Heart","Heat","Heavy","Height","Held","Hello","Help",
    "Helpful","Her","Herd","Here","Herself","Hidden","Hide","High",
    "Higher","Highest","Highway","Hill","Him","Himself","His","History",
    "Hit","Hold","Hole","Hollow","Home","Honor","Hope","Horn",
    "Horse","Hospital","Hot","Hour","House","How","However","Huge",
    "Human","Hundred","Hung","Hungry","Hunt","Hunter","Hurried","Hurry",
    "Hurt","Husband","Ice","Idea","Identity","If","Ill","Image",
    "Imagine","Immediately","Importance","Important","Impossible","Improve","In","Inch",
    "Include","Including","Income","Increase","Indeed","Independent","Indicate","Individual",
    "Industrial","Industry","Influence","Information","Inside","Instance","Instant","Instead",
    "Instrument","Interest","Interior","Into","Introduced","Invented","Involved","Iron",
    "Is","Island","It","Its","Itself","Jack","Jar","Jet",
    "Job","Join","Joined","Journey","Joy","Judge","Jump","Jungle",
    "Just","Keep","Kept","Key","Kids","Kill","Kind","Kitchen",
    "Knew","Knife","Know","Knowledge","Known","Label","Labor","Lack",
    "Lady","Laid","Lake","Lamp","Land","Language","Large","Larger",
    "Largest","Last","Late","Later","Laugh","Law","Lay","Layers",
    "Lead","Leader","Leaf","Learn","Least","Leather","Leave","Leaving",
    "Led","Left","Leg","Length","Lesson","Let","Letter","Level",
    "Library","Lie","Life","Lift","Light","Like","Likely","Limited",
    "Line","Lion","Lips","Liquid","List","Listen","Little","Live",
    "Living","Load","Local","Locate","Location","Log","Lonely","Long",
    "Longer","Look","Loose","Lose","Loss","Lost","Lot","Loud",
    "Love","Lovely","Low","Lower","Luck","Lucky","Lunch","Lungs",
    "Lying","Machine","Machinery","Mad","Made","Magic","Magnet","Mail",
    "Main","Mainly","Major","Make","Making","Man","Managed","Manner",
    "Manufacturing","Many","Map","Mark","Market","Married","Mass","Massage",
    "Master","Material","Mathematics","Matter","May","Maybe","Me","Meal",
    "Mean","Means","Meant","Measure","Meat","Medicine","Meet","Melted",
    "Member","Memory","Men","Mental","Merely","Met","Metal","Method",
    "Mice","Middle","Might","Mighty","Mile","Military","Milk","Mill",
    "Mind","Mine","Minerals","Minute","Mirror","Missing","Mission","Mistake",
    "Mix","Mixture","Model","Modern","Molecular","Moment","Money","Monkey",
    "Month","Mood","Moon","More","Morning","Most","Mostly","Mother",
    "Motion","Motor","Mountain","Mouse","Mouth","Move","Movement","Movie",
    "Moving","Mud","Muscle","Music","Musical","Must","My","Myself",
    "Mysterious","Nails","Name","Nation","National","Native","Natural","Naturally",
    "Nature","Near","Nearby","Nearer","Nearest","Nearly","Necessary","Neck",
    "Needed","Needle","Needs","Negative","Neighbor","Neighborhood","Nervous","Nest",
    "Never","New","News","Newspaper","Next","Nice","Night","Nine",
    "No","Nobody","Nodded","Noise","None","Noon","Nor","North",
    "Nose","Not","Note","Noted","Nothing","Notice","Noun","Now",
    "Number","Numeral","Nuts","Object","Observe","Obtain","Occasionally","Occur",
    "Ocean","Of","Off","Offer","Office","Officer","Official","Oil",
    "Old","Older","Oldest","On","Once","One","Only","Onto",
    "Open","Operation","Opinion","Opportunity","Opposite","Or","Orange","Orbit",
    "Order","Ordinary","Organization","Organized","Origin","Original","Other","Ought",
    "Our","Ourselves","Out","Outer","Outline","Outside","Over","Own",
    "Owner","Oxygen","Pack","Package","Page","Paid","Pain","Paint",
    "Pair","Palace","Pale","Pan","Paper","Paragraph","Parallel","Parent",
    "Park","Part","Particles","Particular","Particularly","Partly","Parts","Party",
    "Pass","Passage","Past","Path","Pattern","Pay","Peace","Pen",
    "Pencil","People","Per","Percent","Perfect","Perfectly","Perhaps","Period",
    "Person","Personal","Pet","Phrase","Physical","Piano","Pick","Picture",
    "Pictured","Pie","Piece","Pig","Pile","Pilot","Pine","Pink",
    "Pipe","Pitch","Place","Plain","Plan","Plane","Planet","Planned",
    "Planning","Plant","Plastic","Plate","Plates","Play","Pleasant","Please",
    "Pleasure","Plenty","Plural","Plus","Pocket","Poem","Poet","Poetry",
    "Point","Pole","Police","Policeman","Political","Pond","Pony","Pool",
    "Poor","Popular","Population","Porch","Port","Position","Positive","Possible",
    "Possibly","Post","Pot","Potatoes","Pound","Pour","Powder","Power",
    "Powerful","Practical","Practice","Prepare","Present","President","Press","Pressure",
    "Pretty","Prevent","Previous","Price","Pride","Primitive","Principal","Principle",
    "Printed","Private","Prize","Probably","Problem","Process","Produce","Product",
    "Production","Program","Progress","Promised","Proper","Properly","Property","Protection",
    "Proud","Prove","Provide","Public","Pull","Pupil","Pure","Purple",
    "Purpose","Push","Put","Putting","Quarter","Queen","Question","Quick",
    "Quickly","Quiet","Quietly","Quite","Rabbit","Race","Radio","Railroad",
    "Rain","Raise","Ran","Ranch","Range","Rapidly","Rate","Rather",
    "Raw","Rays","Reach","Read","Reader","Ready","Real","Realize",
    "Rear","Reason","Recall","Receive","Recent","Recently","Recognize","Record",
    "Red","Refer","Refused","Region","Regular","Related","Relationship","Religious",
    "Remain","Remarkable","Remember","Remove","Repeat","Replace","Replied","Report",
    "Represent","Require","Research","Respect","Rest","Result","Return","Review",
    "Rhyme","Rhythm","Rice","Rich","Ride","Riding","Right","Ring",
    "Rise","Rising","River","Road","Roar","Rock","Rocket","Rocky",
    "Rod","Roll","Roof","Room","Root","Rope","Rose","Rough",
    "Round","Route","Row","Rubbed","Rubber","Rule","Ruler","Run",
    "Running","Rush","Sad","Saddle","Safe","Safety","Said","Sail",
    "Sale","Salmon","Salt","Same","Sand","Sang","Sat","Satellites",
    "Satisfied","Save","Saved","Saw","Say","Scale","Scared","Scene",
    "School","Science","Scientific","Scientist","Score","Screen","Sea","Search",
    "Season","Seat","Second","Secret","Section","See","Seed","Seeing",
    "Seems","Seen","Seldom","Select","Selection","Sell","Send","Sense",
    "Sent","Sentence","Separate","Series","Serious","Serve","Service","Sets",
    "Setting","Settle","Settlers","Seven","Several","Shade","Shadow","Shake",
    "Shaking","Shall","Shallow","Shape","Share","Sharp","She","Sheep",
    "Sheet","Shelf","Shells","Shelter","Shine","Shinning","Ship","Shirt",
    "Shoe","Shoot","Shop","Shore","Short","Shorter","Shot","Should",
    "Shoulder","Shout","Show","Shown","Shut","Sick","Sides","Sight",
    "Sign","Signal","Silence","Silent","Silk","Silly","Silver","Similar",
    "Simple","Simplest","Simply","Since","Sing","Single","Sink","Sister",
    "Sit","Sitting","Situation","Six","Size","Skill","Skin","Sky",
    "Slabs","Slave","Sleep","Slept","Slide","Slight","Slightly","Slip",
    "Slipped","Slope","Slow","Slowly","Small","Smaller","Smallest","Smell",
    "Smile","Smoke","Smooth","Snake","Snow","So","Soap","Social",
    "Society","Soft","Softly","Soil","Solar","Sold","Soldier","Solid",
    "Solution","Solve","Some","Somebody","Somehow","Someone","Something","Sometime",
    "Somewhere","Son","Song","Soon","Sort","Sound","Source","South",
    "Southern","Space","Speak","Special","Species","Specific","Speech","Speed",
    "Spell","Spend","Spent","Spider","Spin","Spirit","Spite","Split",
    "Spoken","Sport","Spread","Spring","Square","Stage","Stairs","Stand",
    "Standard","Star","Stared","Start","State","Statement","Station","Stay",
    "Steady","Steam","Steel","Steep","Stems","Step","Stepped","Stick",
    "Stiff","Still","Stock","Stomach","Stone","Stood","Stop","Stopped",
    "Store","Storm","Story","Stove","Straight","Strange","Stranger","Straw",
    "Stream","Street","Strength","Stretch","Strike","String","Strip","Strong",
    "Stronger","Struck","Structure","Struggle","Stuck","Student","Studied","Studying",
    "Subject","Substance","Success","Successful","Such","Sudden","Suddenly","Sugar",
    "Suggest","Suit","Sum","Summer","Sun","Sus","Sunlight","Supper","Supply",
    "Support","Suppose","Sure","Surface","Surprise","Surrounded","Swam","Sweet",
    "Swept","Swim","Swimming","Swing","Swung","Syllable","Symbol","System",
    "Table","Tail","Take","Taken","Tales","Talk","Tall","Tank",
    "Tape","Task","Taste","Taught","Tax","Tea","Teach","Teacher",
    "Team","Tears","Teeth","Telephone","Television","Tell","Temperature","Ten",
    "Tent","Term","Terrible","Test","Than","Thank","That","Thee",
    "Them","Themselves","Then","Theory","There","Therefore","These","They",
    "Thick","Thin","Thing","Think","Third","Thirty","This","Those",
    "Thou","Though","Thought","Thousand","Thread","Three","Threw","Throat",
    "Through","Throughout","Throw","Thrown","Thumb","Thus","Thy","Tide",
    "Tie","Tight","Tightly","Till","Time","Tin","Tiny","Tip",
    "Tired","Title","To","Tobacco","Today","Together","Told","Tomorrow",
    "Tone","Tongue","Tonight","Too","Took","Tool","Top","Topic",
    "Torn","Total","Touch","Toward","Tower","Town","Toy","Trace",
    "Track","Trade","Traffic","Trail","Train","Transportation","Trap","Travel",
    "Treated","Tree","Triangle","Tribe","Trick","Tried","Trip","Troops",
    "Tropical","Trouble","Truck","Trunk","Truth","Try","Tube","Tune",
    "Turn","Twelve","Twenty","Twice","Two","Type","Typical","Uncle",
    "Under","Underline","Understanding","Unhappy","Union","Unit","Universe","Unknown",
    "Unless","Until","Unusual","Up","Upon","Upper","Upward","Us",
    "Use","Useful","Using","Usual","Usually","Valley","Valuable","Value",
    "Vapor","Variety","Various","Vast","Vegetable","Verb","Vertical","Very",
    "Vessels","Victory","View","Village","Visit","Visitor","Voice","Volume",
    "Vote","Vowel","Voyage","Wagon","Wait","Walk","Wall","Want",
    "War","Warm","Warn","Was","Wash","Waste","Watch","Water",
    "Wave","Way","We","Weak","Wealth","Wear","Weather","Week",
    "Weigh","Weight","Welcome","Well","Went","Were","West","Western",
    "Wet","Whale","What","Whatever","Wheat","Wheel","When","Whenever",
    "Where","Wherever","Whether","Which","While","Whispered","Whistle","White",
    "Who","Whole","Whom","Whose","Why","Wide","Widely","Wife",
    "Wild","Will","Willing","Win","Wind","Window","Wing","Winter",
    "Wire","Wise","Wish","With","Within","Without","Wolf","Women",
    "Won","Wonder","Wonderful","Wood","Wooden","Wool","Word","Wore",
    "Work","Worker","World","Worried","Worry","Worse","Worth","Would",
    "Wrapped","Write","Writer","Writing","Written","Wrong","Wrote","Yard",
    "Year","Yellow","Yes","Yesterday","Yet","You","Young","Younger",
    "Your","Yourself","Youth","Zero","Zebra","Zipper","Zoo","Zulu"
  ];
  
  function words(options) {
  
    function word() {
      if (options && options.maxLength > 1) {
        return generateWordWithMaxLength();
      } else {
        return generateRandomWord();
      }
    }
  
    function generateWordWithMaxLength() {
      var rightSize = false;
      var wordUsed;
      while (!rightSize) {  
        wordUsed = generateRandomWord();
        if(wordUsed.length <= options.maxLength) {
          rightSize = true;
        }
  
      }
      return wordUsed;
    }
  
    function generateRandomWord() {
      return wordList[randInt(wordList.length)];
    }
  
    function randInt(lessThan) {
      return Math.floor(Math.random() * lessThan);
    }
  
    if (typeof(options) === 'undefined') {
      return word();
    }
  
    if (typeof(options) === 'number') {
      options = { exactly: options };
    }
  
    if (options.exactly) {
      options.min = options.exactly;
      options.max = options.exactly;
    }
    
    if (typeof(options.wordsPerString) !== 'number') {
      options.wordsPerString = 1;
    }
  
    if (typeof(options.formatter) !== 'function') {
      options.formatter = (word) => word;
    }
  
    if (typeof(options.separator) !== 'string') {
      options.separator = ' ';
    }
  
    var total = options.min + randInt(options.max + 1 - options.min);
    var results = [];
    var token = '';
    var relativeIndex = 0;
  
    for (var i = 0; (i < total * options.wordsPerString); i++) {
      if (relativeIndex === options.wordsPerString - 1) {
        token += options.formatter(word(), relativeIndex);
      }
      else {
        token += options.formatter(word(), relativeIndex) + options.separator;
      }
      relativeIndex++;
      if ((i + 1) % options.wordsPerString === 0) {
        results.push(token);
        token = ''; 
        relativeIndex = 0;
      }
     
    }
    if (typeof options.join === 'string') {
      results = results.join(options.join);
    }
  
    return results;
  }

function randomize(string){
    return string[Math.floor(Math.random()*string.length)];
}

document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") {
    cRefresh();
  } else if (event.key === " ") {
    cRefresh();
  }
});
  
function cRefresh() {
    
    var word = words();

    var items = ["Token", "Moon", "Coin", "Cash", "Swap", "Hash", "Pool", "Network", "Mask", "Chain", "Link"];
    var item = randomize(items);

    var charts = [word.charAt(0) + word.charAt(1) + item.charAt(1) + item.charAt(0),
      word.charAt(0) + word.charAt(1) + item.charAt(0),
      word.charAt(0) + word.charAt(1) + item.charAt(1),
      word.charAt(0) + item.charAt(1) + item.charAt(0),
      word.charAt(1) + item.charAt(1) + item.charAt(0)];

    var arg1 = ["", "Wrapped "];
    var arg2 = [""," Classic"];
  
    var final = randomize(arg1) + word + item + randomize(arg2)  + " (" + randomize(charts).toUpperCase() + ")";
    
    console.log(final);
    document.getElementById("Value").innerHTML = final;
}

