var write = require('write-file')

var fs = require('fs');
var parse = require('csv-parse');
let wegen;
let json = [];

function toLatLng(x, y) {
  let X0 = 155E3,
    Y0 = 463E3,
    lat0 = 52.1551744,
    lng0 = 5.38720621,
    latpqK = [];
  for (i = 1; 12 > i; i++) latpqK[i] = [];
  latpqK[1].p = 0;
  latpqK[1].q = 1;
  latpqK[1].K = 3235.65389;
  latpqK[2].p = 2;
  latpqK[2].q = 0;
  latpqK[2].K = -32.58297;
  latpqK[3].p = 0;
  latpqK[3].q = 2;
  latpqK[3].K = -0.2475;
  latpqK[4].p = 2;
  latpqK[4].q = 1;
  latpqK[4].K = -0.84978;
  latpqK[5].p = 0;
  latpqK[5].q = 3;
  latpqK[5].K = -0.0665;
  latpqK[6].p = 2;
  latpqK[6].q = 2;
  latpqK[6].K = -0.01709;
  latpqK[7].p = 1;
  latpqK[7].q = 0;
  latpqK[7].K = -0.00738;
  latpqK[8].p = 4;
  latpqK[8].q = 0;
  latpqK[8].K = 0.0053;
  latpqK[9].p = 2;
  latpqK[9].q = 3;
  latpqK[9].K = -3.9E-4;
  latpqK[10].p = 4;
  latpqK[10].q = 1;
  latpqK[10].K = 3.3E-4;
  latpqK[11].p = 1;
  latpqK[11].q = 1;
  latpqK[11].K = -1.2E-4;
  var lngpqL = [];
  for (i = 1; 13 > i; i++) lngpqL[i] = [];
  lngpqL[1].p = 1;
  lngpqL[1].q = 0;
  lngpqL[1].K = 5260.52916;
  lngpqL[2].p = 1;
  lngpqL[2].q = 1;
  lngpqL[2].K = 105.94684;
  lngpqL[3].p = 1;
  lngpqL[3].q = 2;
  lngpqL[3].K = 2.45656;
  lngpqL[4].p = 3;
  lngpqL[4].q = 0;
  lngpqL[4].K = -0.81885;
  lngpqL[5].p = 1;
  lngpqL[5].q = 3;
  lngpqL[5].K = 0.05594;
  lngpqL[6].p = 3;
  lngpqL[6].q = 1;
  lngpqL[6].K = -0.05607;
  lngpqL[7].p = 0;
  lngpqL[7].q = 1;
  lngpqL[7].K = 0.01199;
  lngpqL[8].p = 3;
  lngpqL[8].q = 2;
  lngpqL[8].K = -0.00256;
  lngpqL[9].p = 1;
  lngpqL[9].q = 4;
  lngpqL[9].K = 0.00128;
  lngpqL[10].p = 0;
  lngpqL[10].q = 2;
  lngpqL[10].K = 2.2E-4;
  lngpqL[11].p = 2;
  lngpqL[11].q = 0;
  lngpqL[11].K = -2.2E-4;
  lngpqL[12].p = 5;
  lngpqL[12].q = 0;
  lngpqL[12].K = 2.6E-4;
  var XpqR = [];
  for (i = 1; 10 > i; i++) XpqR[i] = [];
  XpqR[1].p = 0;
  XpqR[1].q = 1;
  XpqR[1].R = 190094.945;
  XpqR[2].p = 1;
  XpqR[2].q = 1;
  XpqR[2].R = -11832.228;
  XpqR[3].p = 2;
  XpqR[3].q = 1;
  XpqR[3].R = -114.221;
  XpqR[4].p = 0;
  XpqR[4].q = 3;
  XpqR[4].R = -32.391;
  XpqR[5].p = 1;
  XpqR[5].q = 0;
  XpqR[5].R = -0.705;
  XpqR[6].p = 3;
  XpqR[6].q = 1;
  XpqR[6].R = -2.34;
  XpqR[7].p = 1;
  XpqR[7].q = 3;
  XpqR[7].R = -0.608;
  XpqR[8].p = 0;
  XpqR[8].q = 2;
  XpqR[8].R = -0.008;
  XpqR[9].p = 2;
  XpqR[9].q = 3;
  XpqR[9].R = 0.148;
  var YpqS = [];
  for (i = 1; 11 > i; i++) YpqS[i] = [];
  YpqS[1].p = 1;
  YpqS[1].q = 0;
  YpqS[1].S = 309056.544;
  YpqS[2].p = 0;
  YpqS[2].q = 2;
  YpqS[2].S = 3638.893;
  YpqS[3].p = 2;
  YpqS[3].q = 0;
  YpqS[3].S = 73.077;
  YpqS[4].p = 1;
  YpqS[4].q = 2;
  YpqS[4].S = -157.984;
  YpqS[5].p = 3;
  YpqS[5].q = 0;
  YpqS[5].S = 59.788;
  YpqS[6].p = 0;
  YpqS[6].q = 1;
  YpqS[6].S = 0.433;
  YpqS[7].p = 2;
  YpqS[7].q = 2;
  YpqS[7].S = -6.439;
  YpqS[8].p = 1;
  YpqS[8].q = 1;
  YpqS[8].S = -0.032;
  YpqS[9].p = 0;
  YpqS[9].q = 4;
  YpqS[9].S = 0.092;
  YpqS[10].p = 1;
  YpqS[10].q = 4;
  YpqS[10].S = -0.054;

  function gps2X(b, c) {
    var a = 0;
    dlat = 0.36 * (b - lat0);
    dlng = 0.36 * (c - lng0);
    for (i = 1; 10 > i; i++) a += XpqR[i].R * Math.pow(dlat, XpqR[i].p) * Math.pow(dlng, XpqR[i].q);
    return X0 + a
  }

  function gps2Y(b, c) {
    var a = 0;
    dlat = 0.36 * (b - lat0);
    dlng = 0.36 * (c - lng0);
    for (i = 1; 11 > i; i++) a += YpqS[i].S * Math.pow(dlat, YpqS[i].p) * Math.pow(dlng, YpqS[i].q);
    return Y0 + a
  }

  function RD2lat(b, c) {
    var a = 0;
    dX = 1E-5 * (b - X0);
    dY = 1E-5 * (c - Y0);
    for (i = 1; 12 > i; i++) a += latpqK[i].K * Math.pow(dX, latpqK[i].p) * Math.pow(dY, latpqK[i].q);
    return lat0 + a / 3600
  }

  function RD2lng(b, c) {
    var a = 0;
    dX = 1E-5 * (b - X0);
    dY = 1E-5 * (c - Y0);
    for (i = 1; 13 > i; i++) a += lngpqL[i].K * Math.pow(dX, lngpqL[i].p) * Math.pow(dY, lngpqL[i].q);
    return lng0 + a / 3600
  };

  return [RD2lat(x, y), RD2lng(x, y)];
}

var parser2 = parse({
  delimiter: ','
}, function(err, data) {
  // 5
  data.forEach((out, i) => {
    const nr = out[5];
    wegen.some((weg) => {
      if (weg[0] == nr) {
        //"shapeid","x","y","HECTOMTRNG","AFSTAND","WVK_ID","WVK_BEGDAT"
        const coor = toLatLng(out[1], out[2])
        const hm = {
          lat: coor[0],
          lng: coor[1],
          hm: out[3],
          aftand: out[4],
          weg: weg[1]
        };
        json.push(hm);
      }
    })

  });
  write('out.txt', json, function(err) {
    if (err) return console.log(err)
    console.log('file is written')
  })
});

getHM = () => {
  fs.createReadStream(__dirname + '/hm.csv').pipe(parser2);
}

var parser = parse({
  delimiter: ','
}, function(err, data) {
  wegen = data;
  getHM();
});

fs.createReadStream(__dirname + '/weg.csv').pipe(parser);
//
