const http = require("http")
const url = require("url")
const host = "localhost"
const port = 3000

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'image/svg+xml'})
    const query = url.parse(req.url, true).query;

    let kind = query.kind ?? "flat"
    let icon = query.icon ?? "otlanguage"
    const iconColor = query.iconColor
    const background = query.backgroundColor
    const text = query.textColor

    kind = kind.toLowerCase()
    icon = icon.toLowerCase()

    if (icon === 'poison') {
        if (kind === 'for-the-badge') res.end(poison_for_the_badge(iconColor, background, text))
        else if (kind === 'flat-square') res.end(poison_flat_square(iconColor, background, text))
        else if (kind === 'plastic') res.end(poison_plastic(iconColor, background, text))
        else if (kind === 'social') res.end(poison_social(iconColor, background, text))
        else res.end(poison_flat(iconColor, background, text))
    } else if (icon === 'music') {
        if (kind === 'for-the-badge') res.end(music_for_the_badge(iconColor, background, text))
        else if (kind === 'flat-square') res.end(music_flat_square(iconColor, background, text))
        else if (kind === 'plastic') res.end(music_plastic(iconColor, background, text))
        else if (kind === 'social') res.end(music_social(iconColor, background, text))
        else res.end(music_flat(iconColor, background, text))
    } else {
        if (kind === 'for-the-badge') res.end(otl_for_the_badge(iconColor, background, text))
        else if (kind === 'flat-square') res.end(otl_flat_square(iconColor, background, text))
        else if (kind === 'plastic') res.end(otl_plastic(iconColor, background, text))
        else if (kind === 'social') res.end(otl_social(iconColor, background, text))
        else res.end(otl_flat(iconColor, background, text))
    }
}).listen(port, host, () => {
    console.log(`Server start http://${host}:${port}`)
})

const otl_flat = (icon, background, text) => {
    const iconColor = icon ?? "FFFFFF";
    const backGroundColor = background ?? "A900FF";
    const textColor = text ?? "FFFFFF";
    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="97" height="20" role="img" aria-label="OTLanguage">
    <title>OTLanguage</title>
    <linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
    <stop offset="1" stop-opacity=".1"/>
    </linearGradient>
    <clipPath id="r">
    <rect width="97" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)">
        <rect width="0" height="20" fill="#555"/>
        <rect x="0" width="97" height="20" fill="#${backGroundColor}"/>
        <rect width="97" height="20" fill="url(#s)"/>
    </g>
    <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
    <svg width="30" height="30" viewBox="5 3 6.4307136 6.4307136">
        <g transform="matrix(0.02479747,0,0,0.02808422,6.0717857,3.6216356)">
    <path style="fill:#${iconColor};stroke-width:0.264583" d="M 3.7292978,23.80759 C 18.983847,16.10208 50.440752,0.32723207 50.440752,0.32723207 60.991294,-1.9464859 64.774534,8.1386921 58.190794,14.812412 L 17.226318,35.38692 29.404943,82.34844 81.164104,89.91395 102.75349,44.70542 77.381354,23.57734 55.791974,42.21433 68.800954,59.00607 80.518274,48.76496 c 7.94997,-3.12172 14.86071,2.01256 10.70243,11.90184 l -19.00604,17.34531 c -2.42552,1.5501 -5.8324,1.59751 -9.22623,-0.27678 L 37.339503,44.79768 c -1.588292,-2.89089 -1.873696,-5.78177 0.553575,-8.67266 L 73.690864,5.8629721 c 2.18354,-1.69 4.36708,-0.8742 6.55062,-0.0923 L 118.34582,36.03272 c 3.21033,3.29069 3.17431,6.58138 1.75298,9.87207 l -27.032856,57.11037 c -1.6666,1.99461 -3.00301,4.23687 -7.93456,3.78276 L 22.577531,97.75621 C 20.273448,97.48126 18.022833,97.64475 15.012022,91.57463 L 0.32756575,34.12847 c -0.898363,-4.25623 -0.0075,-7.80707 3.40173205,-10.32088 z"/>
    </g></svg>
    <text aria-hidden="true" x="575" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="690">
    OTLanguage</text>
    <text x="575" y="140" transform="scale(.1)" fill="#${textColor}" textLength="690">OTLanguage</text></g></svg>`;
}

const otl_for_the_badge = (icon, background, text) => {
    const iconColor = icon ?? "FFFFFF";
    const backGroundColor = background ?? "A900FF";
    const textColor = text ?? "FFFFFF";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="132.5" height="28" role="img" aria-label="OTLANGUAGE"><title>OTLANGUAGE</title><g shape-rendering="crispEdges"><rect width="132.5" height="28" fill="#${backGroundColor}"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100">
            <svg width="40" height="40" viewBox="5 3 6.4307136 6.4307136">
            <g transform="matrix(0.02479747,0,0,0.02808422,6.0717857,3.6216356)">
            <path style="fill:#${iconColor};stroke-width:0.264583" d="M 3.7292978,23.80759 C 18.983847,16.10208 50.440752,0.32723207 50.440752,0.32723207 60.991294,-1.9464859 64.774534,8.1386921 58.190794,14.812412 L 17.226318,35.38692 29.404943,82.34844 81.164104,89.91395 102.75349,44.70542 77.381354,23.57734 55.791974,42.21433 68.800954,59.00607 80.518274,48.76496 c 7.94997,-3.12172 14.86071,2.01256 10.70243,11.90184 l -19.00604,17.34531 c -2.42552,1.5501 -5.8324,1.59751 -9.22623,-0.27678 L 37.339503,44.79768 c -1.588292,-2.89089 -1.873696,-5.78177 0.553575,-8.67266 L 73.690864,5.8629721 c 2.18354,-1.69 4.36708,-0.8742 6.55062,-0.0923 L 118.34582,36.03272 c 3.21033,3.29069 3.17431,6.58138 1.75298,9.87207 l -27.032856,57.11037 c -1.6666,1.99461 -3.00301,4.23687 -7.93456,3.78276 L 22.577531,97.75621 C 20.273448,97.48126 18.022833,97.64475 15.012022,91.57463 L 0.32756575,34.12847 c -0.898363,-4.25623 -0.0075,-7.80707 3.40173205,-10.32088 z"/></g></svg>
            <text transform="scale(.1)" x="762.5" y="175" textLength="885" fill="#${textColor}" font-weight="bold">OTLANGUAGE</text></g></svg>`;
}

const otl_flat_square = (icon, background, text) => {
    const iconColor = icon ?? "FFFFFF";
    const backGroundColor = background ?? "A900FF";
    const textColor = text ?? "FFFFFF";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="97" height="20" role="img" aria-label="OTLanguage"><title>OTLanguage</title><g shape-rendering="crispEdges"><rect width="0" height="20" fill="#555"/><rect x="0" width="97" height="20" fill="#${backGroundColor}"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><svg width="30" height="30" viewBox="5 3.1 6.4307136 6.4307136">
    <g transform="matrix(0.02479747,0,0,0.02808422,6.0717857,3.6216356)">
    <path style="fill:#${iconColor};stroke-width:0.264583" d="M 3.7292978,23.80759 C 18.983847,16.10208 50.440752,0.32723207 50.440752,0.32723207 60.991294,-1.9464859 64.774534,8.1386921 58.190794,14.812412 L 17.226318,35.38692 29.404943,82.34844 81.164104,89.91395 102.75349,44.70542 77.381354,23.57734 55.791974,42.21433 68.800954,59.00607 80.518274,48.76496 c 7.94997,-3.12172 14.86071,2.01256 10.70243,11.90184 l -19.00604,17.34531 c -2.42552,1.5501 -5.8324,1.59751 -9.22623,-0.27678 L 37.339503,44.79768 c -1.588292,-2.89089 -1.873696,-5.78177 0.553575,-8.67266 L 73.690864,5.8629721 c 2.18354,-1.69 4.36708,-0.8742 6.55062,-0.0923 L 118.34582,36.03272 c 3.21033,3.29069 3.17431,6.58138 1.75298,9.87207 l -27.032856,57.11037 c -1.6666,1.99461 -3.00301,4.23687 -7.93456,3.78276 L 22.577531,97.75621 C 20.273448,97.48126 18.022833,97.64475 15.012022,91.57463 L 0.32756575,34.12847 c -0.898363,-4.25623 -0.0075,-7.80707 3.40173205,-10.32088 z"/></g></svg>
    <text x="575" y="140" transform="scale(.1)" fill="#${textColor}" textLength="690">OTLanguage</text></g></svg>`;
}

const otl_plastic = (icon, background, text) => {
    const iconColor = icon ?? "FFFFFF";
    const backGroundColor = background ?? "A900FF";
    const textColor = text ?? "FFFFFF";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="97" height="18" role="img" aria-label="OTLanguage"><title>OTLanguage</title><linearGradient id="s" x2="0" y2="100%">
    <stop offset="0" stop-color="#fff" stop-opacity=".7"/><stop offset=".1" stop-color="#aaa" stop-opacity=".1"/><stop offset=".9" stop-color="#000" stop-opacity=".3"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></linearGradient><clipPath id="r"><rect width="97" height="18" rx="4" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="0" height="18" fill="#555"/><rect x="0" width="97" height="18" fill="#${backGroundColor}"/><rect width="97" height="18" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
    <svg width="30" height="30" viewBox="5 3 6.4307136 6.4307136">
    <g transform="matrix(0.02479747,0,0,0.02808422,6.0717857,3.6216356)"><path style="fill:#${iconColor};stroke-width:0.264583"
       d="M 3.7292978,23.80759 C 18.983847,16.10208 50.440752,0.32723207 50.440752,0.32723207 60.991294,-1.9464859 64.774534,8.1386921 58.190794,14.812412 L 17.226318,35.38692 29.404943,82.34844 81.164104,89.91395 102.75349,44.70542 77.381354,23.57734 55.791974,42.21433 68.800954,59.00607 80.518274,48.76496 c 7.94997,-3.12172 14.86071,2.01256 10.70243,11.90184 l -19.00604,17.34531 c -2.42552,1.5501 -5.8324,1.59751 -9.22623,-0.27678 L 37.339503,44.79768 c -1.588292,-2.89089 -1.873696,-5.78177 0.553575,-8.67266 L 73.690864,5.8629721 c 2.18354,-1.69 4.36708,-0.8742 6.55062,-0.0923 L 118.34582,36.03272 c 3.21033,3.29069 3.17431,6.58138 1.75298,9.87207 l -27.032856,57.11037 c -1.6666,1.99461 -3.00301,4.23687 -7.93456,3.78276 L 22.577531,97.75621 C 20.273448,97.48126 18.022833,97.64475 15.012022,91.57463 L 0.32756575,34.12847 c -0.898363,-4.25623 -0.0075,-7.80707 3.40173205,-10.32088 z"/></g></svg>
    <text aria-hidden="true" x="575" y="140" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="690">
    OTLanguage</text><text x="575" y="130" transform="scale(.1)" fill="#${textColor}" textLength="690">OTLanguage</text></g></svg>`;
}

const otl_social = (icon, background, text) => {
    const iconColor = icon ?? "000000";
    const backGroundColor = background ?? "fcfcfc";
    const textColor = text ?? "333";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="107" height="20" role="img" aria-label="OTLanguage">
            <title>OTLanguage</title><style>a:hover #llink{fill:url(#b);stroke:#ccc}a:hover #rlink{fill:#4183c4}</style><linearGradient id="a" x2="0" y2="100%">
            <stop offset="0" stop-color="#${backGroundColor}" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/>
            </linearGradient>
            <linearGradient id="b" x2="0" y2="100%">
            <stop offset="0" stop-color="#ccc" stop-opacity=".1"/>
            <stop offset="1" stop-opacity=".1"/>
            </linearGradient><g stroke="#d5d5d5">
            <rect stroke="none" fill="#${backGroundColor}" x="0.5" y="0.5" width="25" height="19" rx="2"/>
            <rect x="31.5" y="0.5" width="75" height="19" rx="2" fill="#fafafa"/>
            <rect x="31" y="7.5" width="0.5" height="5" stroke="#fafafa"/>
            <path d="M31.5 6.5 l-3 3v1 l3 3" stroke="d5d5d5" fill="#fafafa"/></g>
            <svg width="30" height="30" viewBox="5 3 6.4307136 6.4307136">
            <g transform="matrix(0.02479747,0,0,0.02808422,6.0717857,3.6216356)"><path style="fill:#${iconColor};stroke-width:0.264583"
               d="M 3.7292978,23.80759 C 18.983847,16.10208 50.440752,0.32723207 50.440752,0.32723207 60.991294,-1.9464859 64.774534,8.1386921 58.190794,14.812412 L 17.226318,35.38692 29.404943,82.34844 81.164104,89.91395 102.75349,44.70542 77.381354,23.57734 55.791974,42.21433 68.800954,59.00607 80.518274,48.76496 c 7.94997,-3.12172 14.86071,2.01256 10.70243,11.90184 l -19.00604,17.34531 c -2.42552,1.5501 -5.8324,1.59751 -9.22623,-0.27678 L 37.339503,44.79768 c -1.588292,-2.89089 -1.873696,-5.78177 0.553575,-8.67266 L 73.690864,5.8629721 c 2.18354,-1.69 4.36708,-0.8742 6.55062,-0.0923 L 118.34582,36.03272 c 3.21033,3.29069 3.17431,6.58138 1.75298,9.87207 l -27.032856,57.11037 c -1.6666,1.99461 -3.00301,4.23687 -7.93456,3.78276 L 22.577531,97.75621 C 20.273448,97.48126 18.022833,97.64475 15.012022,91.57463 L 0.32756575,34.12847 c -0.898363,-4.25623 -0.0075,-7.80707 3.40173205,-10.32088 z"/></g></svg>
            <g aria-hidden="true" fill="#${textColor}" text-anchor="middle" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" text-rendering="geometricPrecision" font-weight="700" font-size="110px" line-height="14px">
            <rect id="llink" stroke="#d5d5d5" fill="url(#a)" x=".5" y=".5" width="25" height="19" rx="2"/>
            <text aria-hidden="true" x="195" y="150" fill="#fff" transform="scale(.1)" textLength="10"></text>
            <text x="195" y="140" transform="scale(.1)" textLength="10"></text>
            <text aria-hidden="true" x="685" y="150" fill="#fff" transform="scale(.1)" textLength="670">
            OTLanguage</text><text id="rlink" x="685" y="140" transform="scale(.1)" textLength="670">OTLanguage</text></g></svg>`;
}

// Poison
const poison_flat = (icon, background, text) => {
    const iconColor = icon ?? "FFFFFF";
    const backGroundColor = background ?? "A900FF";
    const textColor = text ?? "FFFFFF";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="63" height="20" role="img" aria-label="Poison">
            <title>Poison</title><linearGradient id="s" x2="0" y2="100%">
            <stop offset="0" stop-color="#${backGroundColor}" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/>
            </linearGradient><clipPath id="r"><rect width="63" height="20" rx="3" fill="#fff"/></clipPath>
            <g clip-path="url(#r)"><rect width="0" height="20" fill="#555"/>
            <rect x="0" width="63" height="20" fill="#${backGroundColor}"/><rect width="63" height="20" fill="url(#s)"/>
            </g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
            <svg width="17" height="17" viewBox="-2 -1 13.229166 13.229167">
            <g transform="matrix(0.067795,0,0,0.067795,-0.36292193,-3.3320779)">
            <path style="fill:#${iconColor};stroke-width:0.264583" d="m 104.33842,60.476284 c -6.674347,-0.07634 -7.381359,2.518193 -8.773443,4.809769 L 82.355263,95.806362 c -2.093121,6.968838 0.418251,8.401648 2.355338,10.534228 l 24.308009,21.15994 c 5.20759,4.01012 8.57532,2.8833 11.71571,1.10525 l 27.84483,-16.838 c 2.19991,-1.74312 4.67717,-2.94568 4.24571,-9.74912 l -7.78253,-32.79942 c -0.50062,-3.866848 -2.71122,-6.322734 -8.02644,-6.212301 l -32.01431,-2.51541 c -0.22795,-0.0081 -0.44786,-0.01279 -0.66316,-0.01525 z m 3.9713,16.212961 22.33379,2.05044 5.03845,21.784975 -19.26957,11.95201 L 99.421939,97.612883 Z M 94.482588,124.44392 c -0.572273,-0.002 -1.198059,0.0642 -1.882746,0.19819 l -21.076087,1.33393 c -5.465118,0.78843 -6.540923,3.84174 -7.508118,6.95168 l -4.504871,18.24053 c -1.05856,6.24557 0.801944,9.24889 3.727381,11.0678 l 18.187177,11.06781 c 3.466692,0.97715 6.902325,1.73917 9.787231,-1.50163 l 16.243455,-13.62894 c 1.67629,-2.59436 3.26215,-5.2445 1.16623,-10.45039 l -8.12553,-19.30005 c -1.3543,-2.11311 -2.923844,-3.96727 -6.014122,-3.97893 z m -6.219923,16.04527 3.674024,9.34513 -7.675812,6.39524 -7.896863,-5.28236 2.332471,-9.51282 z m 37.197575,18.37774 c -1.0894,-0.004 -2.32127,0.27863 -3.78073,1.03665 l -13.92623,7.08126 c -4.16427,2.29453 -3.25381,5.09224 -3.46059,7.78253 l 2.16477,14.3607 c 0.59982,4.93996 3.41438,6.46796 6.49434,7.58435 l 13.52223,2.08855 c 3.21196,-0.0688 6.35956,0.74013 9.87108,-3.42248 l 7.20322,-14.31497 c 0.90201,-2.75116 1.89895,-5.49188 -1.18148,-8.65149 l -11.60138,-11.60137 c -1.66016,-0.87129 -3.22543,-1.93639 -5.30523,-1.94373 z m -1.50162,17.98899 2.4773,2.27912 -1.60834,3.22429 -3.2243,-0.54881 -0.59455,-3.30052 z m -23.218,18.74362 c -1.08654,0.0475 -2.207598,0.30358 -3.369121,0.83847 l -10.61808,5.976 c -3.273613,2.07973 -3.949553,5.53115 -3.460594,9.59667 l 2.561145,11.17452 c 1.654399,5.15528 3.996295,4.40047 6.136076,5.38146 l 11.639484,1.18148 c 3.08099,-0.006 6.21222,0.19721 8.37708,-3.57494 l 5.50341,-12.31026 c 0.61509,-2.51695 0.63881,-5.03691 -1.14336,-7.55385 l -10.4199,-9.47471 c -1.6749,-0.80482 -3.39523,-1.31406 -5.20614,-1.23484 z" /></g></svg>
            <text aria-hidden="true" x="405" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">Poison</text>
            <text x="405" y="140" transform="scale(.1)" fill="#${textColor}" textLength="350">Poison</text></g></svg>`;
}

const poison_flat_square = (icon, background, text) => {
    const iconColor = icon ?? "FFFFFF";
    const backGroundColor = background ?? "A900FF";
    const textColor = text ?? "FFFFFF";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="63" height="20" role="img" aria-label="Poison">
            <title>Poison</title><g shape-rendering="crispEdges">
            <rect width="0" height="20" fill="#555"/><rect x="0" width="63" height="20" fill="#${backGroundColor}"/>
            </g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
            <svg width="17" height="17" viewBox="-2 -1 13.229166 13.229167">
            <g transform="matrix(0.067795,0,0,0.067795,-0.36292193,-3.3320779)">
            <path style="fill:#${iconColor};stroke-width:0.264583" d="m 104.33842,60.476284 c -6.674347,-0.07634 -7.381359,2.518193 -8.773443,4.809769 L 82.355263,95.806362 c -2.093121,6.968838 0.418251,8.401648 2.355338,10.534228 l 24.308009,21.15994 c 5.20759,4.01012 8.57532,2.8833 11.71571,1.10525 l 27.84483,-16.838 c 2.19991,-1.74312 4.67717,-2.94568 4.24571,-9.74912 l -7.78253,-32.79942 c -0.50062,-3.866848 -2.71122,-6.322734 -8.02644,-6.212301 l -32.01431,-2.51541 c -0.22795,-0.0081 -0.44786,-0.01279 -0.66316,-0.01525 z m 3.9713,16.212961 22.33379,2.05044 5.03845,21.784975 -19.26957,11.95201 L 99.421939,97.612883 Z M 94.482588,124.44392 c -0.572273,-0.002 -1.198059,0.0642 -1.882746,0.19819 l -21.076087,1.33393 c -5.465118,0.78843 -6.540923,3.84174 -7.508118,6.95168 l -4.504871,18.24053 c -1.05856,6.24557 0.801944,9.24889 3.727381,11.0678 l 18.187177,11.06781 c 3.466692,0.97715 6.902325,1.73917 9.787231,-1.50163 l 16.243455,-13.62894 c 1.67629,-2.59436 3.26215,-5.2445 1.16623,-10.45039 l -8.12553,-19.30005 c -1.3543,-2.11311 -2.923844,-3.96727 -6.014122,-3.97893 z m -6.219923,16.04527 3.674024,9.34513 -7.675812,6.39524 -7.896863,-5.28236 2.332471,-9.51282 z m 37.197575,18.37774 c -1.0894,-0.004 -2.32127,0.27863 -3.78073,1.03665 l -13.92623,7.08126 c -4.16427,2.29453 -3.25381,5.09224 -3.46059,7.78253 l 2.16477,14.3607 c 0.59982,4.93996 3.41438,6.46796 6.49434,7.58435 l 13.52223,2.08855 c 3.21196,-0.0688 6.35956,0.74013 9.87108,-3.42248 l 7.20322,-14.31497 c 0.90201,-2.75116 1.89895,-5.49188 -1.18148,-8.65149 l -11.60138,-11.60137 c -1.66016,-0.87129 -3.22543,-1.93639 -5.30523,-1.94373 z m -1.50162,17.98899 2.4773,2.27912 -1.60834,3.22429 -3.2243,-0.54881 -0.59455,-3.30052 z m -23.218,18.74362 c -1.08654,0.0475 -2.207598,0.30358 -3.369121,0.83847 l -10.61808,5.976 c -3.273613,2.07973 -3.949553,5.53115 -3.460594,9.59667 l 2.561145,11.17452 c 1.654399,5.15528 3.996295,4.40047 6.136076,5.38146 l 11.639484,1.18148 c 3.08099,-0.006 6.21222,0.19721 8.37708,-3.57494 l 5.50341,-12.31026 c 0.61509,-2.51695 0.63881,-5.03691 -1.14336,-7.55385 l -10.4199,-9.47471 c -1.6749,-0.80482 -3.39523,-1.31406 -5.20614,-1.23484 z" /></g></svg>
            <text x="405" y="140" transform="scale(.1)" fill="#${textColor}" textLength="350">Poison</text></g></svg>`
}

const poison_plastic = (icon, background, text) => {
    const iconColor = icon ?? "FFFFFF";
    const backGroundColor = background ?? "A900FF";
    const textColor = text ?? "FFFFFF";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="63" height="18" role="img" aria-label="Poison">
<title>Poison</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#fff" stop-opacity=".7"/>
<stop offset=".1" stop-color="#aaa" stop-opacity=".1"/><stop offset=".9" stop-color="#000" stop-opacity=".3"/>
<stop offset="1" stop-color="#000" stop-opacity=".5"/>
</linearGradient><clipPath id="r">
<rect width="63" height="18" rx="4" fill="#fff"/>
</clipPath><g clip-path="url(#r)">
<rect width="0" height="18" fill="#555"/>
<rect x="0" width="63" height="18" fill="#${backGroundColor}"/>
<rect width="63" height="18" fill="url(#s)"/>
</g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
<svg width="16" height="16" viewBox="-2 -1 13.229166 13.229167">
<g transform="matrix(0.067795,0,0,0.067795,-0.36292193,-3.3320779)">
<path style="fill:#${iconColor};stroke-width:0.264583"
       d="m 104.33842,60.476284 c -6.674347,-0.07634 -7.381359,2.518193 -8.773443,4.809769 L 82.355263,95.806362 c -2.093121,6.968838 0.418251,8.401648 2.355338,10.534228 l 24.308009,21.15994 c 5.20759,4.01012 8.57532,2.8833 11.71571,1.10525 l 27.84483,-16.838 c 2.19991,-1.74312 4.67717,-2.94568 4.24571,-9.74912 l -7.78253,-32.79942 c -0.50062,-3.866848 -2.71122,-6.322734 -8.02644,-6.212301 l -32.01431,-2.51541 c -0.22795,-0.0081 -0.44786,-0.01279 -0.66316,-0.01525 z m 3.9713,16.212961 22.33379,2.05044 5.03845,21.784975 -19.26957,11.95201 L 99.421939,97.612883 Z M 94.482588,124.44392 c -0.572273,-0.002 -1.198059,0.0642 -1.882746,0.19819 l -21.076087,1.33393 c -5.465118,0.78843 -6.540923,3.84174 -7.508118,6.95168 l -4.504871,18.24053 c -1.05856,6.24557 0.801944,9.24889 3.727381,11.0678 l 18.187177,11.06781 c 3.466692,0.97715 6.902325,1.73917 9.787231,-1.50163 l 16.243455,-13.62894 c 1.67629,-2.59436 3.26215,-5.2445 1.16623,-10.45039 l -8.12553,-19.30005 c -1.3543,-2.11311 -2.923844,-3.96727 -6.014122,-3.97893 z m -6.219923,16.04527 3.674024,9.34513 -7.675812,6.39524 -7.896863,-5.28236 2.332471,-9.51282 z m 37.197575,18.37774 c -1.0894,-0.004 -2.32127,0.27863 -3.78073,1.03665 l -13.92623,7.08126 c -4.16427,2.29453 -3.25381,5.09224 -3.46059,7.78253 l 2.16477,14.3607 c 0.59982,4.93996 3.41438,6.46796 6.49434,7.58435 l 13.52223,2.08855 c 3.21196,-0.0688 6.35956,0.74013 9.87108,-3.42248 l 7.20322,-14.31497 c 0.90201,-2.75116 1.89895,-5.49188 -1.18148,-8.65149 l -11.60138,-11.60137 c -1.66016,-0.87129 -3.22543,-1.93639 -5.30523,-1.94373 z m -1.50162,17.98899 2.4773,2.27912 -1.60834,3.22429 -3.2243,-0.54881 -0.59455,-3.30052 z m -23.218,18.74362 c -1.08654,0.0475 -2.207598,0.30358 -3.369121,0.83847 l -10.61808,5.976 c -3.273613,2.07973 -3.949553,5.53115 -3.460594,9.59667 l 2.561145,11.17452 c 1.654399,5.15528 3.996295,4.40047 6.136076,5.38146 l 11.639484,1.18148 c 3.08099,-0.006 6.21222,0.19721 8.37708,-3.57494 l 5.50341,-12.31026 c 0.61509,-2.51695 0.63881,-5.03691 -1.14336,-7.55385 l -10.4199,-9.47471 c -1.6749,-0.80482 -3.39523,-1.31406 -5.20614,-1.23484 z" /></g></svg>
<text aria-hidden="true" x="405" y="140" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="350">
Poison</text><text x="405" y="130" transform="scale(.1)" fill="#${textColor}" textLength="350">Poison</text></g></svg>`
}

const poison_for_the_badge = (icon, background, text) => {
    const iconColor = icon ?? "FFFFFF";
    const backGroundColor = background ?? "A900FF";
    const textColor = text ?? "FFFFFF";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96.5" height="28" role="img" aria-label="POISON">
<title>POISON</title>
<g shape-rendering="crispEdges"><rect width="96.5" height="28" fill="#${backGroundColor}"/>
</g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100">
<svg width="23" height="23" viewBox="-2 -1 13.229166 13.229167">
<g transform="matrix(0.067795,0,0,0.067795,-0.36292193,-3.3320779)">
<path style="fill:#${iconColor};stroke-width:0.264583" d="m 104.33842,60.476284 c -6.674347,-0.07634 -7.381359,2.518193 -8.773443,4.809769 L 82.355263,95.806362 c -2.093121,6.968838 0.418251,8.401648 2.355338,10.534228 l 24.308009,21.15994 c 5.20759,4.01012 8.57532,2.8833 11.71571,1.10525 l 27.84483,-16.838 c 2.19991,-1.74312 4.67717,-2.94568 4.24571,-9.74912 l -7.78253,-32.79942 c -0.50062,-3.866848 -2.71122,-6.322734 -8.02644,-6.212301 l -32.01431,-2.51541 c -0.22795,-0.0081 -0.44786,-0.01279 -0.66316,-0.01525 z m 3.9713,16.212961 22.33379,2.05044 5.03845,21.784975 -19.26957,11.95201 L 99.421939,97.612883 Z M 94.482588,124.44392 c -0.572273,-0.002 -1.198059,0.0642 -1.882746,0.19819 l -21.076087,1.33393 c -5.465118,0.78843 -6.540923,3.84174 -7.508118,6.95168 l -4.504871,18.24053 c -1.05856,6.24557 0.801944,9.24889 3.727381,11.0678 l 18.187177,11.06781 c 3.466692,0.97715 6.902325,1.73917 9.787231,-1.50163 l 16.243455,-13.62894 c 1.67629,-2.59436 3.26215,-5.2445 1.16623,-10.45039 l -8.12553,-19.30005 c -1.3543,-2.11311 -2.923844,-3.96727 -6.014122,-3.97893 z m -6.219923,16.04527 3.674024,9.34513 -7.675812,6.39524 -7.896863,-5.28236 2.332471,-9.51282 z m 37.197575,18.37774 c -1.0894,-0.004 -2.32127,0.27863 -3.78073,1.03665 l -13.92623,7.08126 c -4.16427,2.29453 -3.25381,5.09224 -3.46059,7.78253 l 2.16477,14.3607 c 0.59982,4.93996 3.41438,6.46796 6.49434,7.58435 l 13.52223,2.08855 c 3.21196,-0.0688 6.35956,0.74013 9.87108,-3.42248 l 7.20322,-14.31497 c 0.90201,-2.75116 1.89895,-5.49188 -1.18148,-8.65149 l -11.60138,-11.60137 c -1.66016,-0.87129 -3.22543,-1.93639 -5.30523,-1.94373 z m -1.50162,17.98899 2.4773,2.27912 -1.60834,3.22429 -3.2243,-0.54881 -0.59455,-3.30052 z m -23.218,18.74362 c -1.08654,0.0475 -2.207598,0.30358 -3.369121,0.83847 l -10.61808,5.976 c -3.273613,2.07973 -3.949553,5.53115 -3.460594,9.59667 l 2.561145,11.17452 c 1.654399,5.15528 3.996295,4.40047 6.136076,5.38146 l 11.639484,1.18148 c 3.08099,-0.006 6.21222,0.19721 8.37708,-3.57494 l 5.50341,-12.31026 c 0.61509,-2.51695 0.63881,-5.03691 -1.14336,-7.55385 l -10.4199,-9.47471 c -1.6749,-0.80482 -3.39523,-1.31406 -5.20614,-1.23484 z" />
</g></svg>
<text transform="scale(.1)" x="582.5" y="175" textLength="525" fill="#${textColor}" font-weight="bold">POISON</text></g></svg>`
}

const poison_social = (icon, background, text) => {
    const iconColor = icon ?? "000000";
    const backGroundColor = background ?? "fcfcfc";
    const textColor = text ?? "333";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="77" height="20" role="img" aria-label="Poison">
<title>Poison</title><style>a:hover #llink{fill:url(#b);stroke:#ccc}a:hover #rlink{fill:#4183c4}</style>
<linearGradient id="a" x2="0" y2="100%">
<stop offset="0" stop-color="#${backGroundColor}" stop-opacity="0"/><stop offset="1" stop-opacity=".1"/>
</linearGradient><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#ccc" stop-opacity=".1"/>
<stop offset="1" stop-opacity=".1"/></linearGradient><g stroke="#d5d5d5">
<rect stroke="none" fill="#${backGroundColor}" x="0.5" y="0.5" width="25" height="19" rx="2"/>
<rect x="31.5" y="0.5" width="45" height="19" rx="2" fill="#fafafa"/>
<rect x="31" y="7.5" width="0.5" height="5" stroke="#fafafa"/>
<path d="M31.5 6.5 l-3 3v1 l3 3" stroke="d5d5d5" fill="#fafafa"/></g>
<svg width="17" height="17" viewBox="-2 -1 13.229166 13.229167">
<g transform="matrix(0.067795,0,0,0.067795,-0.36292193,-3.3320779)"><path style="fill:#${iconColor};stroke-width:0.264583"
       d="m 104.33842,60.476284 c -6.674347,-0.07634 -7.381359,2.518193 -8.773443,4.809769 L 82.355263,95.806362 c -2.093121,6.968838 0.418251,8.401648 2.355338,10.534228 l 24.308009,21.15994 c 5.20759,4.01012 8.57532,2.8833 11.71571,1.10525 l 27.84483,-16.838 c 2.19991,-1.74312 4.67717,-2.94568 4.24571,-9.74912 l -7.78253,-32.79942 c -0.50062,-3.866848 -2.71122,-6.322734 -8.02644,-6.212301 l -32.01431,-2.51541 c -0.22795,-0.0081 -0.44786,-0.01279 -0.66316,-0.01525 z m 3.9713,16.212961 22.33379,2.05044 5.03845,21.784975 -19.26957,11.95201 L 99.421939,97.612883 Z M 94.482588,124.44392 c -0.572273,-0.002 -1.198059,0.0642 -1.882746,0.19819 l -21.076087,1.33393 c -5.465118,0.78843 -6.540923,3.84174 -7.508118,6.95168 l -4.504871,18.24053 c -1.05856,6.24557 0.801944,9.24889 3.727381,11.0678 l 18.187177,11.06781 c 3.466692,0.97715 6.902325,1.73917 9.787231,-1.50163 l 16.243455,-13.62894 c 1.67629,-2.59436 3.26215,-5.2445 1.16623,-10.45039 l -8.12553,-19.30005 c -1.3543,-2.11311 -2.923844,-3.96727 -6.014122,-3.97893 z m -6.219923,16.04527 3.674024,9.34513 -7.675812,6.39524 -7.896863,-5.28236 2.332471,-9.51282 z m 37.197575,18.37774 c -1.0894,-0.004 -2.32127,0.27863 -3.78073,1.03665 l -13.92623,7.08126 c -4.16427,2.29453 -3.25381,5.09224 -3.46059,7.78253 l 2.16477,14.3607 c 0.59982,4.93996 3.41438,6.46796 6.49434,7.58435 l 13.52223,2.08855 c 3.21196,-0.0688 6.35956,0.74013 9.87108,-3.42248 l 7.20322,-14.31497 c 0.90201,-2.75116 1.89895,-5.49188 -1.18148,-8.65149 l -11.60138,-11.60137 c -1.66016,-0.87129 -3.22543,-1.93639 -5.30523,-1.94373 z m -1.50162,17.98899 2.4773,2.27912 -1.60834,3.22429 -3.2243,-0.54881 -0.59455,-3.30052 z m -23.218,18.74362 c -1.08654,0.0475 -2.207598,0.30358 -3.369121,0.83847 l -10.61808,5.976 c -3.273613,2.07973 -3.949553,5.53115 -3.460594,9.59667 l 2.561145,11.17452 c 1.654399,5.15528 3.996295,4.40047 6.136076,5.38146 l 11.639484,1.18148 c 3.08099,-0.006 6.21222,0.19721 8.37708,-3.57494 l 5.50341,-12.31026 c 0.61509,-2.51695 0.63881,-5.03691 -1.14336,-7.55385 l -10.4199,-9.47471 c -1.6749,-0.80482 -3.39523,-1.31406 -5.20614,-1.23484 z" /></g></svg>
<g aria-hidden="true" fill="#${textColor}" text-anchor="middle" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" text-rendering="geometricPrecision" font-weight="700" font-size="110px" line-height="14px">
<rect id="llink" stroke="#d5d5d5" fill="url(#a)" x=".5" y=".5" width="25" height="19" rx="2"/>
<text aria-hidden="true" x="195" y="150" fill="#fff" transform="scale(.1)" textLength="10">
</text><text x="195" y="140" transform="scale(.1)" textLength="10">
</text><text aria-hidden="true" x="535" y="150" fill="#fff" transform="scale(.1)" textLength="370">
Poison</text><text id="rlink" x="535" y="140" transform="scale(.1)" textLength="370">Poison</text></g></svg>`
}

// Music
const music_flat = (icon, background, text) => {
    const iconColor = icon ?? "FFFFFF";
    const backGroundColor = background ?? "A900FF";
    const textColor = text ?? "FFFFFF";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="127" height="20" role="img" aria-label="OTLanguageMusic">
<title>OTLanguageMusic</title>
<linearGradient id="s" x2="0" y2="100%">
<stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
<stop offset="1" stop-opacity=".1"/>
</linearGradient><clipPath id="r"><rect width="127" height="20" rx="3" fill="#fff"/>
</clipPath><g clip-path="url(#r)"><rect width="0" height="20" fill="#555"/>
<rect x="0" width="127" height="20" fill="#${backGroundColor}"/>
<rect width="127" height="20" fill="url(#s)"/>
</g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
<svg width="768" height="768" viewBox="0 0 768 768">
  <path style="fill:#${iconColor};stroke-width:0.0233257"
     d="m 10.613198,3.0016027 c -0.333461,-0.01841 -0.6257124,0.120667 -0.8615364,0.475331 l -4.540933,5.934576 c -0.282445,0.388369 -0.274897,0.7569673 -0.01375,1.1082453 l 4.713538,6.184509 C 10.405762,17.2025 10.77355,16.943738 11.138567,16.838693 L 18.26672,14.63387 c 0.381803,-0.148754 0.774724,-0.283741 0.728085,-0.962149 l 0.0035,-7.4242443 c 0.02263,-0.45806 -0.172268,-0.786232 -0.734519,-0.895091 l -7.303928,-2.282033 c -0.11975,-0.03898 -0.235456,-0.06261 -0.34661,-0.06875 z m 0.263267,1.720898 3.815271,1.168489 -3.815271,0.834668 c -0.440065,0.155811 -0.491185,0.460224 -0.553335,0.76044 l 0.0097,2.8656103 c -0.4019904,0.0081 -0.7615914,-0.06116 -1.4367804,0.445141 -0.575889,0.569414 -0.490215,0.864056 -0.495117,1.19632 L 6.8670586,9.9807497 Z m 5.494762,1.692489 0.999929,0.32456 0.01454,6.5055533 -6.518929,2.021725 -1.5630074,-2.068078 c 0.614429,0.247144 1.1993194,0.233351 1.7619954,0.0232 0.498373,-0.205133 0.886384,-0.553165 0.985386,-1.275178 l -0.01459,-2.3926393 2.606612,-0.556415 0.0097,0.449771 c -0.867339,0.02446 -1.621446,0.252753 -1.936791,1.2705033 -0.04452,0.461748 0.03138,0.928038 0.640733,1.414281 0.727989,0.340017 1.482835,0.573592 2.465842,-0.09738 0.191844,-0.237786 0.404477,-0.321917 0.548535,-0.913481 z" />
</svg>
<text aria-hidden="true" x="725" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="990">
OTLanguageMusic</text>
<text x="725" y="140" transform="scale(.1)" fill="#${textColor}" textLength="990">OTLanguageMusic</text></g></svg>`
}

const music_flat_square = (icon, background, text) => {
    const iconColor = icon ?? "FFFFFF";
    const backGroundColor = background ?? "A900FF";
    const textColor = text ?? "FFFFFF";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="127" height="20" role="img" aria-label="OTLanguageMusic">
<title>OTLanguageMusic</title>
<g shape-rendering="crispEdges">
<rect width="0" height="20" fill="#555"/>
<rect x="0" width="127" height="20" fill="#${backGroundColor}"/>
</g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
<svg width="768" height="768" viewBox="0 0 768 768">
  <path style="fill:#${iconColor};stroke-width:0.0233257"
     d="m 10.613198,3.0016027 c -0.333461,-0.01841 -0.6257124,0.120667 -0.8615364,0.475331 l -4.540933,5.934576 c -0.282445,0.388369 -0.274897,0.7569673 -0.01375,1.1082453 l 4.713538,6.184509 C 10.405762,17.2025 10.77355,16.943738 11.138567,16.838693 L 18.26672,14.63387 c 0.381803,-0.148754 0.774724,-0.283741 0.728085,-0.962149 l 0.0035,-7.4242443 c 0.02263,-0.45806 -0.172268,-0.786232 -0.734519,-0.895091 l -7.303928,-2.282033 c -0.11975,-0.03898 -0.235456,-0.06261 -0.34661,-0.06875 z m 0.263267,1.720898 3.815271,1.168489 -3.815271,0.834668 c -0.440065,0.155811 -0.491185,0.460224 -0.553335,0.76044 l 0.0097,2.8656103 c -0.4019904,0.0081 -0.7615914,-0.06116 -1.4367804,0.445141 -0.575889,0.569414 -0.490215,0.864056 -0.495117,1.19632 L 6.8670586,9.9807497 Z m 5.494762,1.692489 0.999929,0.32456 0.01454,6.5055533 -6.518929,2.021725 -1.5630074,-2.068078 c 0.614429,0.247144 1.1993194,0.233351 1.7619954,0.0232 0.498373,-0.205133 0.886384,-0.553165 0.985386,-1.275178 l -0.01459,-2.3926393 2.606612,-0.556415 0.0097,0.449771 c -0.867339,0.02446 -1.621446,0.252753 -1.936791,1.2705033 -0.04452,0.461748 0.03138,0.928038 0.640733,1.414281 0.727989,0.340017 1.482835,0.573592 2.465842,-0.09738 0.191844,-0.237786 0.404477,-0.321917 0.548535,-0.913481 z" />
</svg>
<text x="725" y="140" transform="scale(.1)" fill="#${textColor}" textLength="990">OTLanguageMusic</text></g></svg>`
}

const music_plastic = (icon, background, text) => {
    const iconColor = icon ?? "FFFFFF";
    const backGroundColor = background ?? "A900FF";
    const textColor = text ?? "FFFFFF";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="127" height="18" role="img" aria-label="OTLanguageMusic">
<title>OTLanguageMusic</title>
<linearGradient id="s" x2="0" y2="100%">
<stop offset="0" stop-color="#fff" stop-opacity=".7"/>
<stop offset=".1" stop-color="#aaa" stop-opacity=".1"/>
<stop offset=".9" stop-color="#000" stop-opacity=".3"/>
<stop offset="1" stop-color="#000" stop-opacity=".5"/>
</linearGradient><clipPath id="r"><rect width="127" height="18" rx="4" fill="#fff"/>
</clipPath><g clip-path="url(#r)"><rect width="0" height="18" fill="#555"/>
<rect x="0" width="127" height="18" fill="#${backGroundColor}"/>
<rect width="127" height="18" fill="url(#s)"/>
</g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110">
<svg width="768" height="768" viewBox="0 1 768 768">
  <path style="fill:#${iconColor};stroke-width:0.0233257" d="m 10.613198,3.0016027 c -0.333461,-0.01841 -0.6257124,0.120667 -0.8615364,0.475331 l -4.540933,5.934576 c -0.282445,0.388369 -0.274897,0.7569673 -0.01375,1.1082453 l 4.713538,6.184509 C 10.405762,17.2025 10.77355,16.943738 11.138567,16.838693 L 18.26672,14.63387 c 0.381803,-0.148754 0.774724,-0.283741 0.728085,-0.962149 l 0.0035,-7.4242443 c 0.02263,-0.45806 -0.172268,-0.786232 -0.734519,-0.895091 l -7.303928,-2.282033 c -0.11975,-0.03898 -0.235456,-0.06261 -0.34661,-0.06875 z m 0.263267,1.720898 3.815271,1.168489 -3.815271,0.834668 c -0.440065,0.155811 -0.491185,0.460224 -0.553335,0.76044 l 0.0097,2.8656103 c -0.4019904,0.0081 -0.7615914,-0.06116 -1.4367804,0.445141 -0.575889,0.569414 -0.490215,0.864056 -0.495117,1.19632 L 6.8670586,9.9807497 Z m 5.494762,1.692489 0.999929,0.32456 0.01454,6.5055533 -6.518929,2.021725 -1.5630074,-2.068078 c 0.614429,0.247144 1.1993194,0.233351 1.7619954,0.0232 0.498373,-0.205133 0.886384,-0.553165 0.985386,-1.275178 l -0.01459,-2.3926393 2.606612,-0.556415 0.0097,0.449771 c -0.867339,0.02446 -1.621446,0.252753 -1.936791,1.2705033 -0.04452,0.461748 0.03138,0.928038 0.640733,1.414281 0.727989,0.340017 1.482835,0.573592 2.465842,-0.09738 0.191844,-0.237786 0.404477,-0.321917 0.548535,-0.913481 z" />
</svg>
<text aria-hidden="true" x="725" y="140" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="990">
OTLanguageMusic</text><text x="725" y="130" transform="scale(.1)" fill="#${textColor}" textLength="990">
OTLanguageMusic</text></g></svg>`
}

const music_for_the_badge = (icon, background, text) => {
    const iconColor = icon ?? "FFFFFF";
    const backGroundColor = background ?? "A900FF";
    const textColor = text ?? "FFFFFF";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="176.75" height="28" role="img" aria-label="OTLANGUAGEMUSIC">
<title>OTLANGUAGEMUSIC</title>
<g shape-rendering="crispEdges">
<rect width="176.75" height="28" fill="#${backGroundColor}"/>
</g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="100">
<svg width="1100" height="1100" viewBox="1 1 768 768">
  <path style="fill:#${iconColor};stroke-width:0.0233257"
     d="m 10.613198,3.0016027 c -0.333461,-0.01841 -0.6257124,0.120667 -0.8615364,0.475331 l -4.540933,5.934576 c -0.282445,0.388369 -0.274897,0.7569673 -0.01375,1.1082453 l 4.713538,6.184509 C 10.405762,17.2025 10.77355,16.943738 11.138567,16.838693 L 18.26672,14.63387 c 0.381803,-0.148754 0.774724,-0.283741 0.728085,-0.962149 l 0.0035,-7.4242443 c 0.02263,-0.45806 -0.172268,-0.786232 -0.734519,-0.895091 l -7.303928,-2.282033 c -0.11975,-0.03898 -0.235456,-0.06261 -0.34661,-0.06875 z m 0.263267,1.720898 3.815271,1.168489 -3.815271,0.834668 c -0.440065,0.155811 -0.491185,0.460224 -0.553335,0.76044 l 0.0097,2.8656103 c -0.4019904,0.0081 -0.7615914,-0.06116 -1.4367804,0.445141 -0.575889,0.569414 -0.490215,0.864056 -0.495117,1.19632 L 6.8670586,9.9807497 Z m 5.494762,1.692489 0.999929,0.32456 0.01454,6.5055533 -6.518929,2.021725 -1.5630074,-2.068078 c 0.614429,0.247144 1.1993194,0.233351 1.7619954,0.0232 0.498373,-0.205133 0.886384,-0.553165 0.985386,-1.275178 l -0.01459,-2.3926393 2.606612,-0.556415 0.0097,0.449771 c -0.867339,0.02446 -1.621446,0.252753 -1.936791,1.2705033 -0.04452,0.461748 0.03138,0.928038 0.640733,1.414281 0.727989,0.340017 1.482835,0.573592 2.465842,-0.09738 0.191844,-0.237786 0.404477,-0.321917 0.548535,-0.913481 z" /></svg>
<text transform="scale(.1)" x="983.75" y="175" textLength="1327.5" fill="#${textColor}" font-weight="bold">OTLANGUAGEMUSIC</text></g></svg>`
}

const music_social = (icon, background, text) => {
    const iconColor = icon ?? "000000";
    const backGroundColor = background ?? "fcfcfc";
    const textColor = text ?? "333";

    return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="139" height="20" role="img" aria-label="OTLanguageMusic">
<title>OTLanguageMusic</title><style>a:hover #llink{fill:url(#b);stroke:#ccc}a:hover #rlink{fill:#4183c4}</style>
<linearGradient id="a" x2="0" y2="100%"><stop offset="0" stop-color="#${backGroundColor}" stop-opacity="0"/>
<stop offset="1" stop-opacity=".1"/>
</linearGradient><linearGradient id="b" x2="0" y2="100%">
<stop offset="0" stop-color="#ccc" stop-opacity=".1"/>
<stop offset="1" stop-opacity=".1"/></linearGradient>
<g stroke="#d5d5d5"><rect stroke="none" fill="#${backGroundColor}" x="0.5" y="0.5" width="25" height="19" rx="2"/>
<rect x="31.5" y="0.5" width="107" height="19" rx="2" fill="#fafafa"/>
<rect x="31" y="7.5" width="0.5" height="5" stroke="#fafafa"/>
<path d="M31.5 6.5 l-3 3v1 l3 3" stroke="d5d5d5" fill="#fafafa"/></g>
<svg width="800" height="800" viewBox="0 0 768 768">
  <path style="fill:#${iconColor};stroke-width:0.0233257" d="m 10.613198,3.0016027 c -0.333461,-0.01841 -0.6257124,0.120667 -0.8615364,0.475331 l -4.540933,5.934576 c -0.282445,0.388369 -0.274897,0.7569673 -0.01375,1.1082453 l 4.713538,6.184509 C 10.405762,17.2025 10.77355,16.943738 11.138567,16.838693 L 18.26672,14.63387 c 0.381803,-0.148754 0.774724,-0.283741 0.728085,-0.962149 l 0.0035,-7.4242443 c 0.02263,-0.45806 -0.172268,-0.786232 -0.734519,-0.895091 l -7.303928,-2.282033 c -0.11975,-0.03898 -0.235456,-0.06261 -0.34661,-0.06875 z m 0.263267,1.720898 3.815271,1.168489 -3.815271,0.834668 c -0.440065,0.155811 -0.491185,0.460224 -0.553335,0.76044 l 0.0097,2.8656103 c -0.4019904,0.0081 -0.7615914,-0.06116 -1.4367804,0.445141 -0.575889,0.569414 -0.490215,0.864056 -0.495117,1.19632 L 6.8670586,9.9807497 Z m 5.494762,1.692489 0.999929,0.32456 0.01454,6.5055533 -6.518929,2.021725 -1.5630074,-2.068078 c 0.614429,0.247144 1.1993194,0.233351 1.7619954,0.0232 0.498373,-0.205133 0.886384,-0.553165 0.985386,-1.275178 l -0.01459,-2.3926393 2.606612,-0.556415 0.0097,0.449771 c -0.867339,0.02446 -1.621446,0.252753 -1.936791,1.2705033 -0.04452,0.461748 0.03138,0.928038 0.640733,1.414281 0.727989,0.340017 1.482835,0.573592 2.465842,-0.09738 0.191844,-0.237786 0.404477,-0.321917 0.548535,-0.913481 z" /></svg>
<g aria-hidden="true" fill="#333" text-anchor="middle" font-family="Helvetica Neue,Helvetica,Arial,sans-serif" text-rendering="geometricPrecision" font-weight="700" font-size="110px" line-height="14px">
<rect id="llink" stroke="#d5d5d5" fill="url(#a)" x=".5" y=".5" width="25" height="19" rx="2"/>
<text aria-hidden="true" x="195" y="150" fill="#fff" transform="scale(.1)" textLength="10"></text>
<text x="195" y="140" transform="scale(.1)" textLength="10"></text>
<text aria-hidden="true" x="845" y="150" fill="#${textColor}" transform="scale(.1)" textLength="990">
OTLanguageMusic</text><text id="rlink" x="845" y="140" transform="scale(.1)" textLength="990">
OTLanguageMusic</text></g></svg>`
}