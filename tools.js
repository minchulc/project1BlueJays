const MD5 = function (d) { var r = M(V(Y(X(d), 8 * d.length))); return r.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ };
let shelljs = require('shelljs');
const query = require('st-mysql')({ host: 'localhost', user: 'root', password: '1234', database: 'MLBplayList', flat: true, encode: false });
const csv = require('csv-parser');
const fs = require('fs');
const CSVToJSON = require('csvtojson');
const fetch = require('node-fetch');

async function csvfile(path) {
    let jsonFile = await CSVToJSON().fromFile(path).then(users => {
        return users;
    }).catch(err => {
        console.log(err);
        return err;
    });
    return jsonFile;
}

async function readcsv() {
    let jsonList = await csvfile('/home/ubuntu/server/ALWestBattedBalls2017.csv');
    setHitColor(jsonList);
    let hitInfo = {}
    jsonList.forEach(playerByplayer => {
        let id = playerByplayer["batterid"];
        if (!hitInfo[id]) {
            hitInfo[id] = [];
        }
        hitInfo[id].push(playerByplayer);
    });
    return hitInfo;
}

async function onlyHit(pid) {
    let data = await readcsv();
    if (data === undefined) {
        return null;
    }
    if (data[pid] === undefined) {
        return false;
    }
    let list = data[pid].filter(elem => (elem["result_type"] === "home_run" || elem["result_type"] === "single") || elem["result_type"] === "double" || elem["result_type"] === "triple");
    return list;
}

async function loadDataFromSQL(url) {
    let pidHash = MD5(url);
    let data;
    data = await loadFromDB(pidHash);
    if (!data) {
        data = await fetch(url);
        data = await data.json()
        await saveToDB(pidHash, data);
        console.log("New data. Store data to server ");
    } else {
        console.log("Have one. Load data from sever");
    }
    return data;
}

function getTeamId(pInfo, isPitcher) {
    let teamId;
    if (isPitcher) {
        teamId = pInfo[0]["pitcherteamid"];
    } else {
        let len = pInfo[0]["stats"].length;
        teamId = pInfo[0]["stats"][len];
    }
    let len1 = (pInfo[0]["stats"].length - 1);
    let len2 = (pInfo[0]["stats"][len1]["splits"].length - 1);
    return (pInfo[0]["stats"][len1]["splits"][len2]["team"]["id"]);

}

function getInfoByDemand(dataList, type, req) {
    return dataList.filter(hitInfo => (hitInfo[type] === req));
}

function makeList(data, key) {
    let obj = {};
    data.forEach(elem => {
        let vari = elem[key];
        if (!obj[vari]) {
            obj[vari] = vari;
        }
    })
    return Object.keys(obj);
}

function getZoneRate(data) {
    let infield = 95;
    data.forEach(elem => {
        if (Number(elem["landing_location_y"]) < infield && Number(elem["launch_horiz_ang"]) >= 22.5 && Number(elem["launch_horiz_ang"]) < 45) {
            elem["hitZone"] = "1"
        } else if (Number(elem["landing_location_y"]) < infield && Number(elem["launch_horiz_ang"]) > 0 && Number(elem["launch_horiz_ang"]) < 22.5) {
            elem["hitZone"] = "2"
        } else if (Number(elem["landing_location_y"]) < infield && Number(elem["launch_horiz_ang"]) <= 0 && Number(elem["launch_horiz_ang"]) > -22.5) {
            elem["hitZone"] = "3"
        } else if (Number(elem["landing_location_y"]) < infield && Number(elem["launch_horiz_ang"]) <= -22.5 && Number(elem["launch_horiz_ang"]) > -45) {
            elem["hitZone"] = "4"
        } else if (Number(elem["landing_location_y"]) > infield && Number(elem["launch_horiz_ang"]) >= 22.5 && Number(elem["launch_horiz_ang"]) < 45) {
            elem["hitZone"] = "5";
        } else if (Number(elem["landing_location_y"]) > infield && Number(elem["launch_horiz_ang"]) > 0 && Number(elem["launch_horiz_ang"]) < 22.5) {
            elem["hitZone"] = "6"
        } else if (Number(elem["landing_location_y"]) > infield && Number(elem["launch_horiz_ang"]) <= 0 && Number(elem["launch_horiz_ang"]) > -22.5) {
            elem["hitZone"] = "7"
        } else if (Number(elem["landing_location_y"]) > infield && Number(elem["launch_horiz_ang"]) <= -22.5 && Number(elem["launch_horiz_ang"]) > -45) {
            elem["hitZone"] = "8"
        }
    })


    return data;
}

function zonePer(data) {
    let obj = { "zone1": 0, "zone2": 0, "zone3": 0, "zone4": 0, "zone5": 0, "zone6": 0, "zone7": 0, "zone8": 0 };
    let returnObj = {}
    data.forEach(elem => {
        if (elem["hitZone"] === "1") {
            obj["zone1"] += 1
        } else if (elem["hitZone"] === "2") {
            obj["zone2"] += 1
        } else if (elem["hitZone"] === "3") {
            obj["zone3"] += 1
        } else if (elem["hitZone"] === "4") {
            obj["zone4"] += 1
        } else if (elem["hitZone"] === "5") {
            obj["zone5"] += 1
        } else if (elem["hitZone"] === "6") {
            obj["zone6"] += 1
        } else if (elem["hitZone"] === "7") {
            obj["zone7"] += 1
        } else if (elem["hitZone"] === "8") {
            obj["zone8"] += 1
        }
    })
    let len = data.length;
    Object.keys(obj).forEach(zone => {
        if (!obj[zone + "per"]) {
            returnObj[zone] = Number((obj[zone] / len * 100).toFixed(2));
        }
    })

    let sum = 0;
    Object.keys(returnObj).forEach(aa => {
        sum += returnObj[aa];
    })
    return returnObj;
}

async function getWhatValue(title) {
    // title = "result_type";
    let jsonList = await csvfile('/home/ubuntu/server/ALWestBattedBalls2017.csv');
    let obj = {}
    jsonList.forEach(elem => {
        let info = elem[title];
        if (!obj[info]) {
            obj[info] = true;
        }
    })
    return Object.keys(obj);

}

async function getPlayerhitInfo(pid) {
    let aa = await readcsv();
    return aa[pid];
}
async function saveToDB(key, value) {
    let data = JSON.stringify(value);
    await query(`insert into cache (pid, data) values (?, ?) ON DUPLICATE KEY UPDATE data=?`, [key, data, data]);
    // cacheDatabase[key] = value;
}
async function loadFromDB(key) {
    let data = (await query(`select data from cache where pid=?`, [key]))[0];
    return data?.data;
    // if(data === undefined) return;
    // return cacheDatabase[key];
}

function setHitColor(data) {
    data.forEach(elem => {
        if (elem["result_type"] === "home_run") {
            elem["hitcolor"] = "0xFF0000";
        } else if (elem["result_type"] === "single") {
            elem["hitcolor"] = "0x000000";
        } else if (elem["result_type"] === "double") {
            elem["hitcolor"] = "0x0300FF";
        } else if (elem["result_type"] === "triple") {
            elem["hitcolor"] = "0xFFC300";
        }
    })
}


/**
    PROJECT 3 
 */

async function getBatterInfo() {
    let jsonList = await csvfile('/home/ubuntu/server/ALWestBattedBalls2017.csv');
    let hitInfo = {}
    jsonList.forEach(playByplay => {
        let id = playByplay["batterid"];
        if (!hitInfo[id]) {
            hitInfo[id] = {};
            hitInfo[id]["playByPlay"] = [];
            hitInfo[id]["pInfo"] = {};

            hitInfo[id]["pInfo"]["name"] = playByplay["battername"];
            hitInfo[id]["pInfo"]["batside"] = playByplay["batside"];
            hitInfo[id]["pInfo"]["batterteamid"] = playByplay["batterteamid"];
            hitInfo[id]["pInfo"]["batterid"] = playByplay["batterid"];
            hitInfo[id]["pInfo"]["batterteamid"] = playByplay["batterteamid"];

            let pid = hitInfo[id]["pInfo"]["batterteamid"];
            let teamId 

            hitInfo[id]["pInfo"]["teamName"] = pid === playByplay["hometeamid"] ? playByplay["hometeamname"] : playByplay["awayteamname"];
            hitInfo[id]["pInfo"]["teamId"] = pid === playByplay["hometeamid"] ? playByplay["hometeamid"] : playByplay["awayteamid"];
            

        }


        hitInfo[id]["playByPlay"].push(playByplay);
    });

    return hitInfo;
}


async function loadData(pId){ 
    let url = "https://statsapi.mlb.com/";
    let endPoint = `api/v1/people/${pId}?hydrate=stats(group=[hitting,pitching,fielding],type=[yearByYear])`
    url += endPoint;
    
    let data = await loadDataFromSQL(url);
    return data;
}

function addImage(data, id) {
    let link = `https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/${id}/headshot/67/current`;
    // let link = `https://content.mlb.com/images/headshots/current/200x200/${id}.png`;
    data.image = link;
    return data;
}

function addTeamLogo(data, id) {
    //"https://www.mlbstatic.com/team-logos/141.svg"
    let link = "https://www.mlbstatic.com/team-logos/"
    if (id === null) {
        data.forEach(team => {
            team.logo = `${link}${team.id}.svg`
        })
    } else {
        data.forEach(team => {
            team.logo = `${link}${id}.svg`
        })
    }
    return data;
}
module.exports = {
    readcsv,
    onlyHit,
    loadDataFromSQL,
    getTeamId,
    getInfoByDemand,
    makeList,
    getZoneRate,
    zonePer,
    getWhatValue,
    getPlayerhitInfo,
    saveToDB,
    loadFromDB,
    setHitColor,
    ///////////////////////
    getBatterInfo,
    loadData,
    addImage,
    addTeamLogo

}

