// if ($response.statusCode != 200) {
//   $done(Null);
// }

// var body = $response.body;
// var obj = JSON.parse(body);
var flags = new 
var body = $response.body;
var obj = JSON.parse(body);
var title = flags.get(obj['country_iso']) + ' '+ obj['country'];
var subtitle =ValidCheck(obj['city'])+'-'+'('+obj['asn_org']+');
var ip = obj['ip'];
var description = obj['country'] + '-' +ValidCheck(obj['city']) + '\n' + obj['asn'] + '\n' + obj['asn_org']+ '\n' + obj['ip'];

$done({title, subtitle, ip, description});
