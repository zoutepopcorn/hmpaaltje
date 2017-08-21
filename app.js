var write = require('write-file')

var fs = require('fs');
var parse = require('csv-parse');
let wegen;
let json = [];

function Convert() {

}

var parser2 = parse({
  delimiter: ','
}, function(err, data) {
  // 5
  data.forEach((out, i) => {
    const nr = out[5]
    wegen.some((weg) => {
      if (weg[0] == nr) {
        //"shapeid","x","y","HECTOMTRNG","AFSTAND","WVK_ID","WVK_BEGDAT"
        const hm = {
          x: out[1],
          y: out[2],
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
