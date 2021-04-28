class Champion{
    constructor(name,apiName){
        this.name = name;
        this.apiName = apiName;
        this.patchNumber = '11.5.1'; //Patch Number that will have to be updated at some point to get most recent patche's icons.
    }
    name(){
        return this.name;
    }
    apiName(){
        return this.apiName;
    }
    icon(){
        //Basically just a concat to provide a link to a spot where images are returned.
        return 'http://ddragon.leagueoflegends.com/cdn/' + this.patchNumber + '/img/champion/' + this.apiName + '.png';
    }
    
    async spellLinks(){
        //This is going to be called everytime you click on the champion, what this block here does is grab the JSON object for that champion and it will be parsed below.
        var url = 'http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/champion/' + this.apiName + '.json'
        var passiveLink = 'http://ddragon.leagueoflegends.com/cdn/11.9.1/img/passive/'
        var spellLink = 'http://ddragon.leagueoflegends.com/cdn/11.9.1/img/spell/'
        const getObj = async () => {
            const response = await fetch(url);
            const json = await response.json();
            return(json.data);
        }
        var jsonObj = await getObj();
        console.log(jsonObj[this.apiName]);
        var jsonObj = jsonObj[this.apiName];
        
        var imageLinkArray = [];
        imageLinkArray.push(passiveLink +  jsonObj.passive.image.full);
        //console.log(imageLinkArray);
        for(let i = 0; i < 4; i++){
            var tempObj = jsonObj.spells[i];
            imageLinkArray.push(spellLink + tempObj.image.full);
        }
        //console.log(imageLinkArray);
        return imageLinkArray
    
    }
    async statInfo(){
        var url = 'http://ddragon.leagueoflegends.com/cdn/11.8.1/data/en_US/champion/' + this.apiName + '.json';
        const getObj = async () => {
            const response = await fetch(url);
            const json = await response.json();
            return(json.data);
        }
        //Return array in this format [name, typetag, health, armor, attack damage, movespeed]
        var jsonObj = await getObj();
        jsonObj = jsonObj[this.apiName];
        var stats = [];
        stats.push(this.name);
        //var tagsArray = jsonObj.tags;
        stats.push(jsonObj.tags[0]);
        stats.push(jsonObj.stats.hp);
        stats.push(jsonObj.stats.armor);
        stats.push(jsonObj.stats.attackdamage);
        stats.push(jsonObj.stats.movespeed);
        return stats;

    }
}
export default Champion;