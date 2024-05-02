/******************************
⚠️如果放远程，请把EFHello.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:EFHello
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
https://w.liupinyike.com/tablet/api/vipIndex url script-response-body zhangshangbeitie.js


[mitm]
hostname = w.liupinyike.com
%¥
*******************************/

var body = $response.body;

body = body.replace(/"is_vip":0/g, '"is_vip":1');

body = body.replace(/"member_time":\d+/g, '"member_time":2222222222');

body = body.replace(/"is_long_vip":0/g, '"is_long_vip":1');

body = body.replace(/"member_day":0/g, '"member_day":99');

body = body.replace(/"is_free":\d+/g, '"is_free":3');

body = body.replace(/"try_status":\d+/g, '"try_status":1');

$done({ body });
