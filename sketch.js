var font;
var clock;
var sampleFactor = 0.15;
let vehicles = [];
let bg;
let contributor;
let ascent;
let img;
let scaleW;
let scaleH;
let contributorTags = ['@helixly', '@michaelj', '@Badmonky', '@RowsdowerSavesUs', '@greglgomez', '@Lightman', '@iamalowdi', '@Chainguys', '@Crypto traveler', '@ardillar', '@mne500', '@michaelj', '@madnank', '@maksimcyupa', '@xiri', '@Ethero', '@freetanga.eth', '@Chainguys', '@Legaste', '@Lightman', '@liliazhen', '@JOMAJO', '@Stephan', '@MashaG', '@NSeven', '@maksimker', '@Atom', '@antonion', '@El-Coco-No', '@vladche', '@Bullkingo', '@Jedi Yoda', '@Inna', '@Grigory', '@MTCH', '@Okval', '@Ana_Rocks', '@FUNBOY1337', '@luckshifter', '@nena', '@johne', '@NSeven', '@pilot_nft', '@ardillar', '@D.Isekai', '@maksimker', '@discordedjerry', '@Legaste', '@iiutebaev', '@Markus', '@Jeremie', '@NotMe', '@middleH', '@maksimcyupa', '@Ana_Rocks', '@n0_mad', '@CryptoKella', '@sadheadcrab', '@viccccccc', '@Lightman', '@NSeven', '@Jeremie', '@sadheadcrab', '@CryptoKella', '@Ana_Rocks', '@MTCH', '@JOMAJO', '@iiutebaev', '@Milky', '@Mithbuster', '@CozyGirl_eth', '@Grigory', '@MTCH', '@FUNBOY1337', '@pandachela', '@sadheadcrab', '@Raw', '@maksimcyupa', '@NSeven', '@Dodgers', '@MAP | buzbechek', '@CryptoKella', '@El-Coco-No', '@D.Isekai', '@Raw', '@Markus.', '@iiutebaev', '@Chin', '@Thor0', '@Ranil', '@nena', '@DPR', '@Crypto traveler', '@Serg', '@leee e', '@iiutebaev', '@maksimker', '@triple_line', '@inny', '@Tata', '@Blackwindow9', '@Raw', '@FUNBOY1337', '@sadheadcrab', '@Ranil', '@inny', '@Dodgers', '@maksimcyupa', '@Ana_Rocks', '@triple_line', '@TayraS', '@nena', '@Mary toujours', '@username2d', '@Serg', '@inny', '@Olllesha', '@MountainRose', '@Boston', '@Silver_vampire', '@FUNBOY1337', '@NSeven', '@JOMAJO', '@sadheadcrab', '@triple_line', '@Raw', '@D.Isekai', '@Chin', '@iiutebaev', '@Ana_Rocks', '@Ranil', '@NSeven', '@JOMAJO', '@Lightman', '@Patch', '@Raw', '@Alexxzed', '@triple_line', '@FUNBOY1337', '@inny'];
let twitterLinks = ['https://twitter.com/helixly/status/1481339491394723841?s=20', 'https://twitter.com/mjaureguizar/status/1481250945011011585', 'https://twitter.com/Badm0nky/status/1481307726424719361?s=20', 'https://twitter.com/SufferMap/status/1481378395443195908', 'https://twitter.com/greglgomez/status/1481411682698207233', 'https://twitter.com/light4eth/status/1481574177354231811', 'https://twitter.com/iamalowdi/status/1481386678598123531', 'https://twitter.com/Chainguys/status/1481835983934922759', 'https://twitter.com/cryptoviajera/status/1481886738326990852', 'https://twitter.com/BedrockSqrl/status/1481935365439111168?t=elGh0vkYF6JS_DIR4B5U8w&s=19', 'https://twitter.com/web3_dude/status/1481607460456706050?s=21', 'https://twitter.com/mjaureguizar/status/1481713539010154498?s=21', 'https://twitter.com/UncleAdnan/status/1481729667300151296?t=bBzwdByb2Moeqlr8UMDuhw&s=19', 'https://twitter.com/maksimcyupa/status/1481613544726671361?s=20', 'https://twitter.com/snottnet/status/1481646143100514316', 'https://twitter.com/Mandang0i/status/1481666712437243908', 'https://twitter.com/iiidddeeelll/status/1481706468160192515', 'https://twitter.com/Chainguys/status/1481838850733318144', 'https://twitter.com/Lykov_/status/1481872721512329216?t=B3h1W7uZg61lfOoF_y-dwg&s=19', 'https://twitter.com/light4eth/status/1481951911112843269', 'https://twitter.com/liliazhen/status/1482125277471911936?s=20', 'https://twitter.com/RArmenov/status/1482131617393123328', 'https://twitter.com/Stephzhe/status/1482160118863175684?s=20', 'https://twitter.com/MashagonM/status/1482161405583319044?s=20', 'https://twitter.com/N1ghtSe7en/status/1482063918524772358?s=20', 'https://twitter.com/maxed8810/status/1482291780158697478?s=20', 'https://twitter.com/AtomAtomo/status/1482279886475886594?s=20', 'https://twitter.com/ry_b_in/status/1482286864446992384?s=20', 'https://twitter.com/ongoingstudy/status/1482166756793884683?s=21', 'https://twitter.com/vladche82/status/1482156875504406529', 'https://twitter.com/bullkinga/status/1482405333557514244', 'https://twitter.com/Yodacryptrader/status/1482585921031659520', 'https://twitter.com/Natsuki08094423/status/1482603853312843776', 'https://twitter.com/lakardamon/status/1482648983445069829?s=21', 'https://twitter.com/M1T1CH/status/1482674509652111364?s=20', 'https://twitter.com/Okval13/status/1482681035984969729?s=20', 'https://twitter.com/mybutter_fly/status/1482635334458482693?s=21', 'https://twitter.com/artemglebov1337/status/1482460455654330377', 'https://twitter.com/luckshifter/status/1482457260039233537', 'https://twitter.com/Kaknakartinke/status/1482488145430163459?s=20', 'https://twitter.com/daomountain/status/1482785511408377860?s=20', 'https://twitter.com/N1ghtSe7en/status/1482826313249529858?s=20', 'https://twitter.com/pilot_NFT/status/1483000547842174979', 'https://twitter.com/BedrockSqrl/status/1482870982813655042', 'https://twitter.com/DvdLm1/status/1482832510732181512', 'https://twitter.com/maxed8810/status/1482840926036938754?s=20', 'https://twitter.com/nikhilbaranwal/status/1482718589777891329?t=hymJ3qV-8_ec58f8aIdkvg&s=19', 'https://twitter.com/Lykov_/status/1483043389713043456?t=oS9zUR845CskRF-7zNt12Q&s=19', 'https://twitter.com/guru_heat/status/1482992089344483331?s=20', 'https://twitter.com/Falcon4951/status/1482777000620302338?s=20', 'https://twitter.com/olivierjeremie/status/1483349815220187138', 'https://twitter.com/EllsonChen1/status/1483360353450807299?s=20', 'https://twitter.com/MiddleH_/status/1483362082527588353?s=20', 'https://twitter.com/maksimcyupa/status/1483404911157170176?s=20', 'https://twitter.com/MyButter_Fly/status/1483407797576507395?s=20', 'https://twitter.com/zolvanoff/status/1483191438917705729', 'https://twitter.com/GluZhanna/status/1483151544887431169?s=20', 'https://twitter.com/fense_/status/1483400294864142338', 'https://twitter.com/viccccx1/status/1483351277455097858/photo/1', 'https://twitter.com/light4eth/status/1483388327025946625', 'https://twitter.com/N1ghtSe7en/status/1483574326754488320?t=zHP8oCrFtFqOyDAFQYdqFg&s=19', 'https://twitter.com/olivierjeremie/status/1483690797455355907', 'https://twitter.com/fense_/status/1483736289052606464', 'https://twitter.com/GluZhanna/status/1483575671972667392?s=20', 'https://twitter.com/mybutter_fly/status/1483593415656882178?s=21', 'https://twitter.com/M1T1CH/status/1483592774809178113?s=20', 'https://twitter.com/RArmenov/status/1483763786846724096', 'https://twitter.com/guru_heat/status/1483767128998170625?s=20', 'https://twitter.com/KaneMil52067143/status/1483749646983995392?s=20', 'https://twitter.com/Mithbuster1/status/1483750901856837634?s=20', 'https://twitter.com/CozyGirl_eth/status/1483957161591988236?s=20', 'https://twitter.com/lakardamon/status/1483820749748154373?s=21', 'https://twitter.com/M1T1CH/status/1484104519881572352?s=20', 'https://twitter.com/artemglebov1337/status/1483855656083992582', 'https://twitter.com/pro_crastinus/status/1483877117112852481?s=21', 'https://twitter.com/fense_/status/1483885912346050562', 'https://twitter.com/rawchenko/status/1483931500806647815', 'https://twitter.com/maksimcyupa/status/1484110363415171076?s=20', 'https://twitter.com/N1ghtSe7en/status/1484121042130030593?t=CGzwzJ7aEhRPCOzKdeHt2g&s=19', 'https://twitter.com/DodgersDAO/status/1483927743024795657?s=20', 'https://twitter.com/dedi_hots/status/1484224045637849098?s=21', 'https://twitter.com/GluZhanna/status/1484322619281182730?s=20', 'https://twitter.com/ongoingstudy/status/1484371803950641172?s=21', 'https://twitter.com/DvdLm1/status/1484426838931877892', 'https://twitter.com/rawchenko/status/1484458671253954562', 'https://twitter.com/Falcon4951/status/1484469193760256005?s=20', 'https://twitter.com/IUtebaev/status/1484470718108778500?s=20', 'https://twitter.com/MeowMeo80676758/status/1484467115134357510', 'https://twitter.com/quinnmu/status/1484491627192328193', 'https://twitter.com/Ranil08870752/status/1484496148220059649?t=j5Tcc9LmvlYSJ_n4VPDiRg&s=19', 'https://twitter.com/Kaknakartinke/status/1484613043975774213?s=20', 'https://twitter.com/pablo35306370/status/1484765827937095681?s=21', 'https://twitter.com/cryptoviajera/status/1484816040508989442', 'https://twitter.com/ai_leery/status/1484836693937205250?s=21', 'https://twitter.com/lee4476600/status/1484838385651154949?s=21', 'https://twitter.com/guru_heat/status/1484849002776604674?s=20', 'https://discord.com/channels/562263648173555742/934054496290627584/934411628743643177', 'https://twitter.com/tripleline_th/status/1484853974830579720/photo/1', 'https://twitter.com/innymonroe/status/1484856158573797381?s=21', 'https://twitter.com/tosy68/status/1484842500099653633?s=20', 'https://twitter.com/captain_paul1/status/1484869150623563777?t=6GhTxhnpO6uLSJZmDvajCg&s=19', 'https://twitter.com/rawchenko/status/1484923949779763207', 'https://twitter.com/artemglebov1337/status/1484964581323718658', 'https://twitter.com/fense_/status/1484986690682990599', 'https://twitter.com/Ranil08870752/status/1485005983512469509?s=20', 'https://twitter.com/innymonroe/status/1485178707211952130?s=21', 'https://twitter.com/DodgersDAO/status/1485183323693539330', 'https://twitter.com/maksimcyupa/status/1485189349570494466?s=20', 'https://twitter.com/MyButter_Fly/status/1485219967859572737?s=20', 'https://twitter.com/tripleline_th/status/1485215804547551239', 'https://twitter.com/_Lakrichka_/status/1485363749003440129?s=20', 'https://twitter.com/Kaknakartinke/status/1485397952130686982?s=20', 'https://twitter.com/WayfarerMuse/status/1485440139878973440', 'https://twitter.com/username2d/status/1485551620746317828?s=20', 'https://twitter.com/ai_leery/status/1485556572281573378?s=21', 'https://twitter.com/innymonroe/status/1485572294726537219?s=21', 'https://twitter.com/troyan21777387/status/1485319208045002757', 'https://twitter.com/MountainRose112/status/1485489479548915715', 'https://twitter.com/keebie15/status/1485468590358908933?s=21', 'https://twitter.com/little_mouse_an/status/1485339261297692677', 'https://twitter.com/artemglebov1337/status/1485639744759508994', 'https://twitter.com/N1ghtSe7en/status/1485695987494629379?t=2B8c0fynvWhjyBZTeI1abA&s=19', 'https://twitter.com/RArmenov/status/1485766710598713346', 'https://twitter.com/fense_/status/1485903629039120385', 'https://twitter.com/tripleline_th/status/1485945053847879685', 'https://twitter.com/rawchenko/status/1485907145984032771', 'https://twitter.com/DvdLm1/status/1485766199497703428', 'https://twitter.com/MeowMeo80676758/status/1485882799660085250', 'https://twitter.com/IUtebaev/status/1485937333295853576?s=20', 'https://twitter.com/MyButter_Fly/status/1485753286024126478?s=20', 'https://twitter.com/Ranil08870752/status/1486410619687481350?t=cibsrRvNGTHDVK7ARhe9sg&s=19', 'https://twitter.com/N1ghtSe7en/status/1486796523371470854?s=20&t=n3xGiXLnA7wUdy4_7E1P2Q', 'https://twitter.com/RArmenov/status/1486902596162007043', 'https://twitter.com/light4eth/status/1486963967943757830', 'https://twitter.com/tagpatch/status/1486975834090921989', 'https://twitter.com/rawchenko/status/1487003251824279555', 'https://twitter.com/88_shults/status/1487009818737000452', 'https://twitter.com/tripleline_th/status/1487028804115595265', 'https://twitter.com/artemglebov1337/status/1487024262703636481', 'https://twitter.com/innymonroe/status/1487011444688306176?s=21']
let contributors = [];

function preload() {
    // Avenir = loadFont("fonts/AvenirNextLTPro-Demi.otf");
    // font = loadFont("fonts/BreeSerif-Regular.ttf");
    font = loadFont("fonts/Rokkitt-Bold.ttf");
    logo = loadImage('assets/logo.png')
    img = loadImage('assets/Vector.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = loadImage('assets/bg.jpg');
  textFont(font);
  textSize(16);
  textAlign(CENTER, CENTER);
  ascent = textAscent();
  scaleW = windowWidth/1440;
  scaleH = windowHeight/796;


  var points = font.textToPoints('Year of The DAO', windowWidth*120/1440, windowHeight*380/796, windowWidth*160/1440, {
    sampleFactor: 0.12
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }

for (let i=0; i<contributorTags.length; i++){
  contributor = new Contributor(contributorTags[i], random(width), random(height), twitterLinks[i], img);
  contributors.push(contributor);
}



}

function mouseMoved() {
  for (let i = 0; i < contributors.length; i++) {
    contributors[i].hovering(mouseX, mouseY);
  }
}

function mouseClicked(){
  for (let i = 0; i < contributors.length; i++) {
    contributors[i].clicked(mouseX, mouseY);
  }
}


function draw() {
  background(0, 18, 32);
  
  for (let i = 0; i < contributors.length; i++) {
    contributors[i].show(mouseX, mouseY);
  }

  image(logo, 515*scaleW, 500*scaleH, 368*scaleW, 55*scaleW);

  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }

  
}

class Contributor {
  constructor(tag, x, y, twitter, img) {
    this.tag = tag;
    this.x = x;
    this.y = y;
    this.img = img;
    this.twitter = twitter;
    this.showImage = false;
  }

  hovering(px, py) {
    if (px <= (textWidth(this.tag)/2)+this.x && px >= abs((textWidth(this.tag)/2)-this.x)) {
      if (py <= (ascent/2)+this.y && py >= abs((ascent/2)-this.y)){
        this.showImage=true;
      }
      else{
        this.showImage=false;
        cursor(ARROW);
      }
    }
    else{
      this.showImage=false;
      cursor(ARROW);  
    }
  }

  clicked(px, py){
    if (px <= (textWidth(this.tag)/2)+this.x && px >= abs((textWidth(this.tag)/2)-this.x)) {
      if (py <= (ascent/2)+this.y && py >= abs((ascent/2)-this.y)){
        window.open(this.twitter);
      }
    }
  }

  show(px, py) {
    noStroke();
    fill(36, 69, 95);
    text(this.tag, this.x, this.y);
    if (this.showImage){
      // image(this.img, px, py);
      cursor(HAND);
    }
    
  }

}
