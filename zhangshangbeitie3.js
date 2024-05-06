var body = $response.body;

body = body.replace(/"is_vip":0/g, '"is_vip":1');

body = body.replace(/"is_permission":0/g, '"is_permission":2');

body = body.replace(/"member_time":\d+/g, '"member_time":2222222222');

body = body.replace(/"is_long_vip":0/g, '"is_long_vip":1');

body = body.replace(/"member_day":0/g, '"member_day":99');

body = body.replace(/"is_free":\d+/g, '"is_free":3');

body = body.replace(/"try_status":\d+/g, '"try_status":1');

$done({ body });