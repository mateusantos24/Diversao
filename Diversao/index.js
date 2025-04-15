/* eslint-disable default-case */
/* eslint-disable max-len */
/* Requires */
const fs = require('fs');
const canvas = require('canvas');

/* Global variable */
let envInfo = JSON.parse(fs.readFileSync(`${__dirname}/utils.json`));

/* Importa módulos, ajuste o local conforme onde usar esse sistema */
const Indexer = require('../../index');

function ambientDetails() {
    /* Retorna a envData */
    return envInfo;
}

// Função para criar a imagem "triste realidade"
async function triste(canvaimage, canvaimage2, canvaimage3, canvaimage4, canvaimage5, canvaimage6) {
    try {
        // Load images asynchronously
        const [img, img2, img3, img4, img5, img6, bg] = await Promise.all([
            canvas.loadImage(canvaimage),
            canvas.loadImage(canvaimage2),
            canvas.loadImage(canvaimage3),
            canvas.loadImage(canvaimage4),
            canvas.loadImage(canvaimage5),
            canvas.loadImage(canvaimage6),
            canvas.loadImage(`${__dirname}/Cache/sad.png`),
        ]);

        // Create canvas with the same dimensions as the background image
        const cc = canvas.createCanvas(bg.width, bg.height);
        const ctx = cc.getContext('2d');

        // Draw background image
        ctx.drawImage(bg, 0, 0, cc.width, cc.height);

        // Draw the six images onto the canvas
        ctx.drawImage(img, 0, 0, 269, 182);
        ctx.drawImage(img2, 290, 0, 280, 190);
        ctx.drawImage(img3, 589, 0, 344, 185);
        ctx.drawImage(img4, 0, 257, 270, 171);
        ctx.drawImage(img5, 290, 257, 277, 176);
        ctx.drawImage(img6, 589, 257, 345, 184);

        // Return the buffer of the canvas
        return cc.toBuffer();
    } catch (error) {
        console.error('Error loading images or creating canvas:', error);
        throw error;
    }
}

// Função para criar a imagem "perfeito"
async function perfect(personOne) {
    const background = await canvas.loadImage(`${__dirname}/Cache/perfect.png`);
    const avatar1 = await canvas.loadImage(personOne);
    const memer = canvas.createCanvas(760, 481);
    const context = memer.getContext('2d');
    context.drawImage(background, 5, 5, memer.width - 10, memer.height - 10);
    context.lineWidth = 10;
    context.strokeRect(0, 0, memer.width, memer.height);
    context.drawImage(avatar1, 390, 100, 348, 286);
    return memer.toBuffer();
}

// Função para criar a imagem "GTA"
async function gtav(personOne, personTwo) {
    const background = await canvas.loadImage(`${__dirname}/Cache/gtav.jpg`);
    const avatar1 = await canvas.loadImage(personOne);
    const avatar2 = await canvas.loadImage(personTwo);
    const memer = canvas.createCanvas(760, 481);
    const context = memer.getContext('2d');
    context.drawImage(background, 5, 5, memer.width - 10, memer.height - 10);
    context.lineWidth = 10;
    context.strokeRect(0, 0, memer.width, memer.height);
    context.drawImage(avatar1, 240, 150, 130, 130);
    context.drawImage(avatar2, 453, 15, 130, 130);
    return memer.toBuffer();
}

// Função para criar a imagem "Brazzers"
async function Brazzers(canvaimage, canvaimage2, canvaimage3, canvaimage4, canvaimage5, canvaimage6) {
    const img = await canvas.loadImage(canvaimage6);
    const img2 = await canvas.loadImage(canvaimage2);
    const img3 = await canvas.loadImage(canvaimage3);
    const img4 = await canvas.loadImage(canvaimage4);
    const img5 = await canvas.loadImage(canvaimage5);
    const img6 = await canvas.loadImage(canvaimage);
    const bg = await canvas.loadImage(`${__dirname}/Cache/girl.png`);
    const cc = canvas.createCanvas(bg.width, bg.height);
    const ctx = cc.getContext('2d');
    ctx.drawImage(bg, 0, 0, cc.width, cc.height);
    ctx.drawImage(img, 10, 60, 100, 100);
    ctx.drawImage(img2, 160, 40, 100, 100);
    ctx.drawImage(img3, 290, 40, 100, 100);
    ctx.drawImage(img4, 440, 40, 100, 100);
    ctx.drawImage(img5, 570, 10, 100, 100);
    ctx.drawImage(img6, 350, 200, 90, 90);
    return cc.toBuffer();
}

async function Diversao(kill = envInfo.functions.exec.arguments.kill.value, env = envInfo.functions.exec.arguments.env.value) {
    envInfo.results.value = false;
    envInfo.results.success = false;

    try {
        if (typeof kill === 'object' && typeof env === 'object') {
            const {
                user,
                command,
                prefix,
                quoteThis,
                chatId,
                groupMembersId,
                decryptedMedia,
            } = env.value;

            let FotoPlayer = null;
            if (decryptedMedia) {
                FotoPlayer = { value: [decryptedMedia] };
            } else {
                FotoPlayer = await Indexer('profile').perfil(kill, env);
            }

            /* Define alguns membros aleatórios diferentes */
            // Função auxiliar para obter foto de perfil com fallback
            const getProfilePicture = async (client, userId) => {
                try {
                    return await client.profilePictureUrl(userId, 'image');
                } catch {
                    return 'https://thispersondoesnotexist.com/';
                }
            };

            const getRandomUniqueMembers = (members, count) => {
                const shuffled = [...members].sort(() => 0.5 - Math.random());
                return shuffled.slice(0, count);
            };

            const randomMembers = getRandomUniqueMembers(groupMembersId, 6);
            const [
                RandomPhoto0,
                RandomPhoto1,
                RandomPhoto2,
                RandomPhoto3,
                RandomPhoto4,
                RandomPhoto5,
            ] = await Promise.all(randomMembers.map((member) => getProfilePicture(kill, member)));

            // Comandos de diversão
            switch (command) {
            case 'diversao':
                envInfo.results.value = await kill.sendMessage(chatId, {
                    text: '📝 𝗗𝗜𝗩𝗘𝗥𝗦𝗔̃𝗢\n\n'
                        + `➸ ${prefix}tristerealidade\n`
                        + '> Cria uma triste realidade com os\n'
                        + '> contatos do seu grupo...\n'
                        + '> Nem sempre a vida é justa 😢\n\n'
                        + `➸ ${prefix}perfect\n`
                        + '> Cria uma imagem "Perfect" com\n'
                        + '> sua foto de perfil\n\n'
                        + `➸ ${prefix}gtav\n`
                        + '> Cria uma imagem estilo GTA V com\n'
                        + '> sua foto e a foto marcada\n\n'
                        + `➸ ${prefix}brazzers\n`
                        + '> Cria uma imagem estilo Brazzers com\n'
                        + '> fotos aleatórias do grupo',
                }, { quoted: quoteThis });
                break;

            case 'tristerealidade':
                triste(RandomPhoto0, RandomPhoto1, RandomPhoto2, RandomPhoto3, RandomPhoto4, RandomPhoto5).then(async (buffer) => {
                    envInfo.results.value = await kill.sendMessage(chatId, { image: buffer, mimetype: 'image/png', caption: '' }, { quoted: quoteThis });
                });
                break;

            case 'perfect':
                perfect(FotoPlayer.value[0]).then(async (buffer) => {
                    envInfo.results.value = await kill.sendMessage(chatId, { image: buffer, mimetype: 'image/png', caption: '' }, { quoted: quoteThis });
                });
                break;

            case 'gtav': {
                const YourProfile = await kill.profilePictureUrl(user, 'image').catch(async () => 'https://thispersondoesnotexist.com/');
                gtav(FotoPlayer.value[0], YourProfile).then(async (buffer) => {
                    envInfo.results.value = await kill.sendMessage(chatId, { image: buffer, mimetype: 'image/png', caption: '' }, { quoted: quoteThis });
                });
                break;
            }
            case 'brazzers': {
                const yourProfile = await Indexer('profile').perfil(kill, env);
                const OneGirls = await Brazzers(yourProfile.value[0], RandomPhoto0, RandomPhoto1, RandomPhoto2, RandomPhoto3, RandomPhoto4);
                envInfo.results.value = await kill.sendMessage(chatId, { image: OneGirls, mimetype: 'image/png', caption: '' }, { quoted: quoteThis });
                break;
            }
            }
        }

        envInfo.results.success = true;
    } catch (error) {
        logging.echoError(error, envInfo, __dirname);
        await kill.sendMessage(env.value.chatId, {
            text: Indexer('sql').languages(region, 'S.E.R', error, true, true, {
                command: 'DIVERSAO',
                time: (new Date()).toLocaleString(),
            }).value,
        }, env.value.reply);
    }

    return logging.postResults(envInfo);
}

/* Função que reseta tudo */
function resetAmbient(
    changeKey = {},
) {
    /* Reseta a Success */
    envInfo.results.success = false;

    /* Define o valor padrão */
    let exporting = {
        reset: resetAmbient,
    };

    /* Try-Catch para casos de erro */
    try {
        /* Define a envInfo padrão */
        envInfo = JSON.parse(fs.readFileSync(`${__dirname}/utils.json`));

        /* Define se algum valor deve ser salvo */
        if (Object.keys(changeKey).length !== 0) {
            /* Faz a listagem de keys */
            Object.keys(changeKey).forEach((key) => {
                /* Edita se a key existir */
                if (Object.keys(envInfo).includes(key) && key !== 'developer') {
                    /* Edita a key customizada */
                    envInfo[key] = changeKey[key];
                }
            });
        }

        /* Insere a postResults na envInfo */
        envInfo.functions.poswork.value = logging.postResults;

        /* Insere a ambient na envInfo */
        envInfo.functions.ambient.value = ambientDetails;

        /* Insere a error na envInfo */
        envInfo.functions.messedup.value = logging.echoError;

        /* Insere a revert na envInfo */
        envInfo.functions.revert.value = resetAmbient;

        envInfo.functions.exec.value = Diversao;

        /* Define o local completo na envInfo para usar o reload novamente */
        envInfo.parameters.location.value = __filename;

        /* Gera a module exports */
        module.exports = {
            [envInfo.name]: {
                [envInfo.exports.env]: envInfo.functions.ambient.value,
                [envInfo.exports.messedup]: envInfo.functions.messedup.value,
                [envInfo.exports.poswork]: envInfo.functions.poswork.value,
                [envInfo.exports.reset]: envInfo.functions.revert.value,
                [envInfo.exports.exec]: envInfo.functions.exec.value,
            },
            Developer: 'KillovSky',
            Projects: 'https://github.com/KillovSky',
        };

        /* Determina sucesso */
        envInfo.results.success = true;

        /* Define o valor retornado */
        exporting = module.exports;

        /* Caso de algum erro */
    } catch (error) {
        /* Insere tudo na envInfo */
        logging.echoError(error, envInfo, __dirname);
    }

    /* Retorna o exports */
    return exporting;
}

/* Constrói a envInfo */
resetAmbient();
