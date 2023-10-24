export const Appconfig = {
    "region": 
    [
        {regionName: "North America", regionCode:"na1"},
        {regionName: "Europe West", regionCode:"euw1"},
        {regionName: "Europe Nordic & East", regionCode:"eun1"},
        {regionName: "Oceania", regionCode:"na1"},
        {regionName: "Korea", regionCode:"oc1"},
        {regionName: "Japan", regionCode:"jp1"},
        {regionName: "Brazil", regionCode:"br1"},
        {regionName: "LAS", regionCode:"la1"},
        {regionName: "LAN", regionCode:"la2"},
        {regionName: "Russia", regionCode:"ru"},
        {regionName: "Turkiye", regionCode:"tr1"},
        {regionName: "Philippines", regionCode:"ph2"},
        {regionName: "Taiwan", regionCode:"tw2"},
        {regionName: "Vietnam", regionCode:"vn2"},
        {regionName: "Thailand", regionCode:"th2"},      
    ]
}

export function getUrlByRegion(regionName: string){
    let regionCode = Appconfig.region[regionName];
    return `https://${regionCode}.api.riotgames.com/lol/`;
}