import dotenv from 'dotenv';
dotenv.config();

const config = {
	SESSION_ID: process.env.SESSION_ID || '',
	SUDO: process.env.SUDO || '254104916091',
	BOT_INFO: process.env.BOT_INFO || 'Astro;Xstro_Bot',
	STICKER_PACK: process.env.STICKER_PACK || 'Xstro;Md',
	WARN_COUNT: process.env.WARN_COUNT || '2',
	CAPTION: 'ʙʏ xsᴛʀᴏ ᴍᴅ 𝟸𝟶𝟸𝟺',
	TIME_ZONE: process.env.TZ || process.env.TIME_ZONE || 'Africa/Nairobi',
	VERSION: '1.1.8',
};

export default config;
