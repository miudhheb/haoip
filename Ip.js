// if ($response.statusCode != 200) {
//   $done(Null);
// }

// var body = $response.body;
// var obj = JSON.parse(body);

if ($response.statusCode != 200) {
  $done(Null);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var body = $response.body;
var obj = JSON.parse(body);
var title =obj['country'];
var description =obj['country'];
var subtitle ='李小强的QUAN X';
var ip = obj['query'];
var description = obj['country'] + '-' + obj['city'] + '\n' + obj['isp'] + '\n' + obj['ipType']+ '\n' + ip;

$done({title, subtitle, ip, description});

