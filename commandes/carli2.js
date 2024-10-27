

require('dotenv').config(); // Load environment variables
const { zokou } = require("../framework/zokou");
const yts = require('yt-search');

// Load sensitive data from environment variables
const BaseUrl = process.env.GITHUB_GIT;
const giftedapikey = process.env.BOT_OWNER;

// Function to validate configuration
function validateConfig() {
  if (!BaseUrl || !giftedapikey) {
    throw new Error("Configuration error: Missing BaseUrl or API key.");
  }
}
validateConfig();

// Zokou Command: Video Search and Download
zokou({
  nomCom: "video",
  categorie: "Search",
  reaction: "🎥"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
  if (!arg[0]) return repondre("Please insert a song/video name.");

  try {
    const search = await yts(arg.join(" "));
    const videos = search.videos;
    if (videos.length === 0) return repondre("No videos found.");

    const videoUrl = videos[0].url;
    const response = await fetch(`${BaseUrl}/api/download/ytmp4?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
    const result = await response.json();

    if (result.status === 200 && result.success) {
      const videoDlUrl = result.result.download_url;

      await zk.sendMessage(dest, {
        image: { url: videos[0].thumbnail },
        caption: `╭─────═━┈┈━═──━┈⊷\n┇ 『 *SPARK-X* 』\n┇ *CYBERION MEDIA* \n┇ *🕵CARLTECH* \n╰─────═━┈┈━═──━┈⊷`
      }, { quoted: ms });

      await zk.sendMessage(dest, {
        video: { url: videoDlUrl },
        mimetype: 'video/mp4'
      }, { quoted: ms });

      repondre('Downloaded Successfully by🕵');
    } else {
      repondre('Failed to download the video.');
    }
  } catch (error) {
    console.error('Error:', error);
    repondre('An error occurred while processing your request.');
  }
});

// Zokou Command: Play Audio Download
zokou({
  nomCom: "play",
  categorie: "Download",
  reaction: "🎧"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
  if (!arg[0]) return repondre("Please insert a song name.");

  try {
    const search = await yts(arg.join(" "));
    const videos = search.videos;
    if (videos.length === 0) return repondre("No audio found.");

    const videoUrl = videos[0].url;
    const response = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
    const result = await response.json();

    if (result.status === 200 && result.success) {
      const audioDlUrl = result.result.download_url;

      await zk.sendMessage(dest, {
        image: { url: videos[0].thumbnail },
        caption: `╭─────═━┈┈━═──━┈⊷\n┇ 『 *SPARK-X* 』\n┇ *CYBERION MEDIA* \n┇ *🕵CARLTECH* \n╰─────═━┈┈━═──━┈⊷`
      }, { quoted: ms });

      await zk.sendMessage(dest, {
        audio: { url: audioDlUrl },
        mimetype: 'audio/mp4'
      }, { quoted: ms });

      repondre('Downloaded Successfully by🕵');
    } else {
      repondre('Failed to download audio. Try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    repondre('An error occurred while processing your request.');
  }
});

// Zokou Command: Song Download
zokou({
  nomCom: "song",
  categorie: "Download",
  reaction: "🎸"
}, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg } = commandeOptions;
  if (!arg[0]) return repondre("Please insert a song name.");

  try {
    const search = await yts(arg.join(" "));
    const videos = search.videos;
    if (videos.length === 0) return repondre("No audio found.");

    const videoUrl = videos[0].url;
    const response = await fetch(`${BaseUrl}/api/download/ytmp3?url=${encodeURIComponent(videoUrl)}&apikey=${giftedapikey}`);
    const result = await response.json();

    if (result.status === 200 && result.success) {
      const audioDlUrl = result.result.download_url;

      await zk.sendMessage(dest, {
        image: { url: videos[0].thumbnail },
        caption: `╭─────═━┈┈━═──━┈⊷\n┇ 『 *SPARK-X* 』\n┇ *CYBERION MEDIA* \n┇ *🕵CARLTECH* \n╰─────═━┈┈━═──━┈⊷`
      }, { quoted: ms });

      await zk.sendMessage(dest, {
        audio: { url: audioDlUrl },
        mimetype: 'audio/mp4'
      }, { quoted: ms });

      repondre('Downloaded Successfully by🕵');
    } else {
      repondre('Failed to download audio. Try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    repondre('An error occurred while processing your request.');
  }
});
