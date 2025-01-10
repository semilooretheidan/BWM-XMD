const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nVOXIRBq2aqkUQVLygoKhbW1sRAka5mYSbp/zvW8ylZh72nJ3lKQWk0+nur3+CNMMUWagBw58gJ7iEDLVL1uQIDMGoCENEQBcEkEEwBNiQKq5z6YkujZS0DjOpN3M24vK+Lp6VzaDgph6+VvnxJtAX8OiCvDjF2P8NoKaHh/o6kQXf8hxpJpNYoybd19Ot2+zHNXEGzD0tjv5hv3gBjxYRYoLTaJyfUYIIjC3U2BCT79GXl9JzzzTmVdZBdo3weHXmI8M6hZuNznkbSzqiuzdJHDrZfo++Mas5Ib41I3VidLaT/vICj2gqDTx1sTPyQ3Pq30XjTrBUR2/0KY5SFEwDlDLMmm/rbuq7G6rEUtjX8WgymQns5lfH0513J0eNqsdjYYzFVbhk6fh7xHfusra2WjO2R96cKrnqFldWaNLdUjeRse1no/mVCbfRPKJfidvkIyvX/6M71HY9v9Ru0iCInTXeaxUMV4ReOO1WuHNhXtZWmrqrmcofvkc/b3xLF5C1SzyB6dJtdXfRvbDL/HyR2EbLhPVmr4iaaDfKJ33ICvI7lj2XzrHF9ZkxUUfWRFgGJU/QjeiJbnD1qIeVZnT2qjxx9ctsbJrOeD/zL95yGrm9exoXq3SQ7GifTY+26e3zokylfaS+vN7oipppAIb8owsIijBlBDKcpe07QRK7AAalg3yC2Ku8wNsFYenKgja2O77WuY+dGxGmhpyvdlivipNhJ4tFkW13K+4FdEFOMh9RioIJpiwjzQJRCiNEwfDPv7ogRTV7M649TuS7IMSEsm1a5HEGgw9XPz5C38+KlDlN6mvtAhEw5D5fI8ZwGtFWxyKFxD/jEmlnyCgYhjCm6NEFASqxj1o8IP39lDdWNNu4eCn6fjO4RJ5ZtZTPWfr2C/d8EgRf7j/xzz7/1O9zytNJ9oUnOexzvsSHfREi0AX4fWbaPb+0sBNmVkeNNp0qWYdRpN6P84JkpeeMolcb3rRHBAVgyEiBuuAE/WuRu9kVpb/BVaPbYNpZ4xhezylD2Z034+WEmIPL+gvum6dg+POzp7QsaPE0bzdYW5oNuiB5jSBuby6IfYVTxGdZ5CR5KMl/0B9VqyTM8x8pYi3wu+rtlgAxiGPaoi1DJiPVHNv24Uwq0xz5kapFKvh06SPub3ESZumWuHru7s0OWuXSPCfioSTzSoKpNuhbwlSyRyTnp3v/5V9A2kAWUwZTcTEqehm1ztl5EwlXLTD1fUjU8WTNG6m1avrbAp23VaLIpaMckXK6zYi7I3JQK9f16jCB0ohp8+ewQ3NhbOjVS3vaW1q+HsYGs7VpD8qr4JtjzUsSKCyTeD2ltbPPDvPDfLC2Fztzluhaj1LfPagzNdSVzrrczqNz/2bcJUWYHeKL7Tbb0tyJuk3O74P4WgTxewHj1xH5+Z6tEKPXPkth69F/uvM159yj+wXkvSJ/kaVRgI+8xVXylq/L9HJDjgwHwlxulJWXVyXSGF65FZQDxxDB4/FXF+QxZGFGkrZJ04BkOABdEEPK1M9RdXGCKINJDob8syhLEi+1vZI0ap47DLKPCQdq++jEAY9/AN5kR8r9BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Semiloore",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2348083763056",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'no',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

