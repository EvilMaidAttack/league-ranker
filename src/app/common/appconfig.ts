export const regionData = {
    "na1": "North America",
    "euw1": "Europe West",
    "eun1": "Europe Nordic & East",
    "oc1": "Oceania",
    "kr1": "Korea",
    "jp1": "Japan",
    "br1": "Brazil",
    "la1": "LAS",
    "la2": "LAN",
    "ru": "Russia",
    "tr1": "Turkiye",
    "ph2": "Philippines",
    "tw2": "Taiwan",
    "vn2": "Vietnam",
    "th2": "Thailand"
  };

export function getUrlByRegion(regionName: string){
    let regionCode = regionData[regionName];
    return `https://${regionCode}.api.riotgames.com/lol/`;
}