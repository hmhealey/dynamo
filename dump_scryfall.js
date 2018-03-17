var fs = require('fs');
var fetch = require('node-fetch');

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve();
        }, time);
    });
}

function padWithZeroes(str, length) {
    str = str.toString();

    while (str.length < length) {
        str = '0' + str;
    }

    return str;
}

try {
    fs.mkdirSync('./cards');
} catch(e) {
    console.error('failed to create cards directory, assuming it already exists');
}

// (async function() {
//     var allCards = [];

//     console.log('start');

//     var page = 0;
//     var attempts = 0;
//     var hasMore = true;

//     while (hasMore) {
//         var succeeded = false;

//         var url = 'https://api.scryfall.com/cards?page=' + page;
//         console.log('getting page ' + page + ': ' + url);

//         for (var attempts = 0; attempts < 5 && !succeeded; attempts++) {
//             if (attempts > 0) {
//                 console.error('retrying...');
//             }

//             try {
//                 var response = await fetch(url);
//                 var data = await response.json();

//                 fs.writeFileSync('./cards/page' + padWithZeroes(page, 3) + '.json', JSON.stringify(data));
//                 allCards.push(...data.data);

//                 hasMore = data.has_more;
//                 succeeded = true;
//             } catch(e) {
//                 console.error('failed to get card page ' + page);
//                 console.error(e);
//             }

//             await sleep(100);
//         }

//         if (succeeded) {
//             page += 1;
//         } else {
//             console.error('failed to get card page ' + page);
//             break;
//         }
//     }

//     try {
//         var allPath = './cards/all' + Math.floor(Math.random() * 1000) + '.json';
//         fs.writeFileSync(allPath, JSON.stringify(allCards));
//         console.log('write all cards to ' + allPath);
//     } catch (e) {
//         console.error('failed to write all cards to file');
//         console.error(e);
//     }

//     console.log('end');
// })();

async function dumpImageUris(imageUris, path) {
    for (var [type, uri] of Object.entries(imageUris)) {
        var imageResponse = await fetch(uri);

        var imagePath = path + '/' + type + '.' + (type === 'png' ? 'png' : 'jpg');
        imageResponse.body.pipe(fs.createWriteStream(imagePath));
        await sleep(50);
    }
}

(async function() {
    var cards = [
        'Gisela, Blade of Goldnight',
        'Tarmogoyf',
        'Archangel Avacyn',
        'Ruric Thar the Unbowed'
    ];

    for (var name of cards) {
        var dir = './cards/' + name;

        try {
            fs.mkdirSync(dir);
        } catch(e) {
            console.error('failed to create card directory for ' + name + ', assuming it already exists');
        }

        try {
            var response = await fetch('https://api.scryfall.com/cards/named/?exact=' + encodeURIComponent(name));
            var data = await response.json();

            fs.writeFileSync(dir + '/card.json', JSON.stringify(data));

            if (data.image_uris) {
                await dumpImageUris(data.image_uris, dir);
            } else if (data.card_faces) {
                for (var i = 0; i < data.card_faces.length; i++) {
                    var face = data.card_faces[i];
                    var faceDir = dir + '/face' + i;

                    try {
                        fs.mkdirSync(faceDir);
                    } catch(e) {
                        console.error('failed to create card face directory, assuming it already exists');
                    }

                    await dumpImageUris(face.image_uris, faceDir);
                }
            }
        } catch(e) {
            console.error('failed to get card ' + name);
            console.error(e);
        }

        await sleep(100);
    }
})();
