const requestIp = require('request-ip');
const geoip = require('geoip-lite');

export default (req, res) => {

    const clientIp = requestIp.getClientIp(req)
        .replace('::1', '')
        .replace('127.0.0.1', '') || '72.1.69.153' // <-- default location `KY`
    const geo = geoip.lookup(clientIp)
    res.status(200).json({ geo })

}