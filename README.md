# eriuqer

Another way to require?

```javascript
var r = require('eriuqer');

// require 1
var x = r('path');

// require a whole bunch async

r([
    'path',
    'util',
    'os',
    'test'
], function (path, util, os, test) {
    console.log(util.format('Working Directory: [%s]', path.dirname(process.argv[1])));
    console.log(util.format('Host: [%s]', os.hostname()));
    console.log(util.format('Who? %s', test.who()));
});
```
