import React from 'react';
import './App.css';
import ChampionComponent from './components/ChampionComponent';
import Champion from './components/ChampionObject';
import ChampPool from './components/ChampPoolComponent';
import TeamComponent from './components/TeamComponent';
import Team from './components/TeamObject'
import TopBarComponent from './components/TopBarComponent'
import Timer from './Timer'
import StatsComponent from './components/StatsComponent'


class App extends React.Component {
  constructor(props){
    super(props);

    //List of champions in [apiName, actualName] format, will be read from a file later.
    this.champDict = [["Aatrox","Aatrox"],["Ahri","Ahri"],["Akali","Akali"],["Alistar","Alistar"],["Amumu","Amumu"],["Anivia","Anivia"],["Annie","Annie"],["Aphelios","Aphelios"],
    ["Ashe","Ashe"],["AurelionSol","Aurelion Sol"],["Azir","Azir"],["Bard","Bard"],["Blitzcrank","Blitzcrank"],["Brand","Brand"],
    ["Braum","Braum"],["Caitlyn","Caitlyn"],["Camille","Camille"],["Cassiopeia","Cassiopeia"],["Chogath","Cho'gath"],["Corki","Corki"],["Darius","Darius"],["Diana","Diana"],
    ["Draven","Draven"],["DrMundo","Dr. Mundo"],["Ekko","Ekko"],["Elise","Elise"],["Evelynn","Evelynn"],["Ezreal","Ezreal"],["Fiddlesticks","Fiddlesticks"],["Fiora","Fiora"],
    ["Fizz","Fizz"],["Galio","Galio"],["Gangplank","Gangplank"],["Garen","Garen"],["Gnar","Gnar"],["Gragas","Gragas"],["Graves","Graves"],["Hecarim","Hecarim"],["Heimerdinger","Heimerdinger"],
    ["Illaoi","Illaoi"],["Irelia","Irelia"],["Ivern","Ivern"],["Janna","Janna"],["JarvanIV","Jarvan IV"],["Jax","Jax"],["Jayce","Jayce"],["Jhin","Jhin"],["Jinx","Jinx"],
    ["Kaisa","Kai'Sa"],["Kalista","Kalista"],["Karma","Karma"],["Karthus","Karthus"],["Kassadin","Kassadin"],["Katarina","Katarina"],["Kayle","Kayle"],["Kayn","Kayn"],
    ["Kennen","Kennen"],["Khazix","Kha'Zix"],["Kindred","Kindred"],["Kled","Kled"],["KogMaw","Kog'Maw"],["Leblanc","Leblanc"],["LeeSin","Lee Sin"],["Leona","Leona"],
    ["Lillia","Lillia"],["Lissandra","Lissandra"],["Lucian","Lucian"],["Lulu","Lulu"],["Lux","Lux"],["Malphite","Malphite"],["Malzahar","Malzahar"],["Maokai","Maokai"],
    ["MasterYi","Master Yi"],["MissFortune","Miss Fortune"],["MonkeyKing","Wukong"],["Mordekaiser","Mordekaiser"],["Morgana","Morgana"],["Nami","Nami"],["Nasus","Nasus"],
    ["Nautilus","Nautilus"],["Neeko","Neeko"],["Nidalee","Nidalee"],["Nocturne","Nocturne"],["Nunu","Nunu & Willump"],["Olaf","Olaf"],["Orianna","Orianna"],["Ornn","Ornn"],
    ["Pantheon","Pantheon"],["Poppy","Poppy"],["Pyke","Pyke"],["Qiyana","Qiyana"],["Quinn","Quinn"],["Rakan","Rakan"],["Rammus","Rammus"],["RekSai","Rek'Sai"],["Rell","Rell"],
    ["Renekton","Renekton"],["Rengar","Rengar"],["Riven","Riven"],["Rumble","Rumble"],["Ryze","Ryze"],["Samira","Samira"],["Sejuani","Sejuani"],["Senna","Senna"],
    ["Seraphine","Seraphine"],["Sett","Sett"],["Shaco","Shaco"],["Shen","Shen"],["Shyvana","Shyvana"],["Singed","Singed"],["Sion","Sion"],["Sivir","Sivir"],["Skarner","Skarner"],
    ["Sona","Sona"],["Soraka","Soraka"],["Swain","Swain"],["Sylas","Sylas"],["Syndra","Syndra"],["TahmKench","Tahm Kench"],["Taliyah","Taliyah"],["Talon","Talon"],["Taric","Taric"],
    ["Teemo","Teemo"],["Thresh","Thresh"],["Tristana","Tristana"],["Trundle","Trundle"],["Tryndamere","Tryndamere"],["TwistedFate","Twisted Fate"],["Twitch","Twitch"],
    ["Udyr","Udyr"],["Urgot","Urgot"],["Varus","Varus"],["Vayne","Vayne"],["Veigar","Veigar"],["Velkoz","Vel'Koz"],["Vi","Vi"],["Viego","Viego"],["Viktor","Viktor"],
    ["Vladimir","Vladimir"],["Volibear","Volibear"],["Warwick","Warwick"],["Xayah","Xayah"],["Xerath","Xerath"],["XinZhao","Xin Zhao"],["Yasuo","Yasuo"],["Yone","Yone"],
    ["Yorick","Yorick"],["Yuumi","Yuumi"],["Zac","Zac"],["Zed","Zed"],["Ziggs","Ziggs"],["Zilean","Zilean"],["Zoe","Zoe"],["Zyra","Zyra"]];

    //Initializing an array here to populate the ChampPool component with 
    this.champs = [];

    //Parsing the list, making all of the array objects into a champion object that we can use later
    for(let i = 0; i < this.champDict.length; i++){
      this.champs.push(new Champion(this.champDict[i][1],this.champDict[i][0]));
    }

    //These were just used for testing purposes
    this.testChamp = new Champion('Ryze','Ryze');
    this.testChamp2 = new Champion('Teemo','Teemo');

    this.state = {
      //Initializes the team objects, the ban objects, the champPool, the state that champ select is in, and the currentChampion is given a default value.
      team1: new Team([0,0,0,0,0]),
      team2: new Team([0,0,0,0,0]),
      currentChamp: new Champion('Draven','Draven'),
      statsIcons: ["http://ddragon.leagueoflegends.com/cdn/11.9.1/img/passive/Draven_passive.png", "http://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/DravenSpinning.png", "http://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/DravenFury.png", "http://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/DravenDoubleShot.png", "http://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/DravenRCast.png"], 
      statsList: ["Draven", "Marksman", 605, 29, 60, 330],
      team1Bans: [0,0,0,0,0],
      team2Bans: [0,0,0,0,0],
      champPool: this.champs,
      champSelectState: 0
    }
    //Binding a bunch of fun handlers to their functions so that they understand state
    this.handleClick = this.handleClick.bind(this);
    this.champSelect = this.champSelect.bind(this);
    this.updateTeam = this.updateTeam.bind(this);
    this.updateBans = this.updateBans.bind(this);
    this.lockIn = this.lockIn.bind(this);
  }

  //Click on an image with this handler, it'll be passed the click event, then the function will be passed the name of the icon clicked
  //Then we make a new champion object with that 
  async handleClick(e) {
    var tempChamp = new Champion(e,e);
    const getLinks = async () => {
      const newLinks = await (tempChamp.spellLinks());
      return newLinks;
    }
    const getStats = async () => {
      const newStats = await(tempChamp.statInfo());
      return newStats
    }
    var newStatsIcons = await getLinks();
    var newStatsList = await getStats();
    this.setState(state => ({
      currentChamp: new Champion(e,e),
      statsIcons: newStatsIcons,
      statsList: newStatsList
    }));
    //Printing out the icon clicked to the console, will be removed for the final build.
    console.log(e);
    console.log(this.state.statsIcons);
    console.log(newStatsList);
    
  }

  //Sleep function that sleeps the program for the number of ms it's passed, not currently used but hey it's here.
  sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
  }

  //
  updateTeam(teamNumber){
    if(teamNumber == 1){
      var newList = this.state.team1.listChamps();
      var emptySlot = 0
      for(let i = 0; i < 5; i++){
        if(newList[i] == 0){
          emptySlot = i;
          break;
        }
      }
      newList[emptySlot] = this.state.currentChamp;
      this.setState(state => ({
        team1: new Team(newList),
        currentChamp: new Champion('Sion','Sion')
      }))
    }
    else{
      var newList = this.state.team2.listChamps();
      var emptySlot = 0
      for(let i = 0; i < 5; i++){
        if(newList[i] == 0){
          emptySlot = i;
          break;
        }
      }
      newList[emptySlot] = this.state.currentChamp;
      this.setState(state => ({
        team2: new Team(newList),
        currentChamp: new Champion('Sion','Sion')
      }))
    }
  }

  updateBans(teamNumber){
    if(teamNumber == 1){
      var newList = this.state.team1Bans;
      var emptySlot = 0
      for(let i = 0; i < 5; i++){
        if(newList[i] == 0){
          emptySlot = i;
          break;
        }
      }
      newList[emptySlot] = this.state.currentChamp;
      this.setState(state => ({
        team1Bans: newList,
        currentChamp: new Champion('Sion','Sion')
      }))
    }
    else{
      var newList = this.state.team2Bans;
      var emptySlot = 0
      for(let i = 0; i < 5; i++){
        if(newList[i] == 0){
          emptySlot = i;
          break;
        }
      }
      newList[emptySlot] = this.state.currentChamp;
      this.setState(state => ({
        team2Bans: newList,
        currentChamp: new Champion('Sion','Sion')
      }))
    }
  }

  lockIn(){
    //Timer()  // <---- What I'm trying to get to work.
    switch(this.state.champSelectState){
      case(0):
        this.updateBans(1);
        break;
      case(1):
        this.updateBans(2);
        break;
      case(2):
        this.updateBans(1);
        break;
      case(3):
        this.updateBans(2);
        break;
      case(4):
        this.updateBans(1);
        break;
      case(5):
        this.updateBans(2);
        break;
      case(6):
        this.updateTeam(1);
        break;
      case(7):
        this.updateTeam(2);
        break;
      case(8):
        this.updateTeam(2);
        break;
      case(9):
        this.updateTeam(1);
        break;
      case(10):
        this.updateTeam(1);
        break;
      case(11):
        this.updateTeam(2);
        break;
      case(12):
        this.updateBans(2);
        break;
      case(13):
        this.updateBans(1);
        break;
      case(14):
        this.updateBans(2);
        break;
      case(15):
        this.updateBans(1);
        break;
      case(16):
        this.updateTeam(2);
        break;
      case(17):
        this.updateTeam(1);
        break;
      case(18):
        this.updateTeam(1);
        break;
      case(19):
        this.updateTeam(2);
        break;
    }
    this.setState(state => ({
      champSelectState: this.state.champSelectState += 1
    }))
  }

  async champSelect(){
    console.log("1")
    this.state.champSelectState = 0;
    if(this.state.champSelectState < 20){
      console.log("2")
      setInterval(this.lockIn,8000)
      
      console.log("3")
      //await new Promise(() => {setTimeout (() => {},1000)})
      console.log("4")
      console.log(this.state.champSelectState)
    }
  }
  
/*
  champSelect(){
    setInterval(() => {console.log("timer is counting down")

    },2000);
  }
*/
  //<ChampionComponent champ={this.state.currentChamp} key={JSON.stringify(this.state.currentChamp)} handler={this.handleClick}/>
  //<button id="1234" onClick={e => this.handleClick(e.target.id)}>Change Champion</button>
  render(){
    return (
        <div>
          <TopBarComponent team1Bans={this.state.team1Bans} team2Bans={this.state.team2Bans} currentChampion={this.state.currentChamp} key={JSON.stringify(this.state.currentChamp)} ></TopBarComponent>
          <br/>
          <button onClick={this.champSelect}>Begin Champ Select!</button>
          <button onClick={this.lockIn}>Lock In!</button>
          <br></br>
          <TeamComponent team={this.state.team1} key={JSON.stringify(this.state.team1) + '523213'}/>
          
          <ChampPool handler={this.handleClick} champList={this.champs}/>
          <TeamComponent team={this.state.team2} key={JSON.stringify(this.state.team2) + '4643634'} />
          <StatsComponent abilities={this.state.statsIcons} stats={this.state.statsList} key={JSON.stringify(this.state.statsIcons)} />
          
        </div>
    )};
  }


export default App;
