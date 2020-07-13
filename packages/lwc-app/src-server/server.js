/*
    Copyright (c) 2020, salesforce.com, inc.
    All rights reserved.
    SPDX-License-Identifier: BSD-3-Clause
    For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
*/

const HTTPS = true;
const PRODUCTION = process.env.NODE_ENV=='production';
const SERVER = 'localhost';


// -- Libs -----------------------------------------------------------------------------
const fs = require('fs');
const path = require('path');
const express = require('express');
const https = (HTTPS && require('https'));
const useragent = require('useragent');

const compression = require('compression')

// -- Config ----------------------------------------------------------------------------
const template  = fs.readFileSync(path.join(__dirname, '../public/template.html'), 'utf8');
const log = process.stdout.write.bind(process.stdout);
const port = process.env.PORT || 3001;
const portHttps = process.env.PORT_HTTPS || 3002;

const app = express();

if(HTTPS) {
    https.createServer({
        key: fs.readFileSync('ssl/cert.key' ),
        cert: fs.readFileSync('ssl/cert.pem' )
    }, app)
    .listen(portHttps)
}

// Production configuration
if(PRODUCTION) {
    app.use(compression())
}


// -- Helpers ---------------------------------------------------------------------------
function isCompat(req) {
    if(req.query['compat'] || req.query['compat']==="") {
        return req.query['compat']!=="false";
    }
    const userAgent = req.headers['user-agent'];
    const { family, major } = useragent.parse(userAgent);
    const majorVersion = parseInt(major, 10);
    return family === 'IE'
        || (family === 'Chrome'  && majorVersion < 48)
        || (family === 'Firefox' && majorVersion < 52)
        || (family === 'Safari'  && majorVersion < 10);
}

function staticPath(...args) {
    return path.join(__dirname+"/..", 'public', ...args);
}

function renderTemplate(template,isCompat) {
    const lwccomponents = (isCompat ? 'lwc-components-compat' : 'lwc-components') + (PRODUCTION ? ".min.js" : ".js");
    return template
        .replace('{{lwc-components}}', lwccomponents);
}


// -- Middlewares -----------------------------------------------------------------------
app.use('/static', express.static(staticPath()));

app.get('/*', (req, res) => {
    const isCompatMode = isCompat(req);
    res.send(renderTemplate(template,isCompatMode));
});


// -- Server Start -----------------------------------------------------------------------
module.exports.start = () => {
    return new Promise((resolve) => {
        const server = app.listen(port, () => {
            log(`Server ready\n`);
            log(`  http://${SERVER}:${port}\n`);
            if(HTTPS) {
                log(`  https://${SERVER}:${portHttps}\n`);
            }
            resolve(server);
        });
    });
};
