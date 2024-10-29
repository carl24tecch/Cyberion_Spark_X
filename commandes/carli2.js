
require("dotenv").config();
const {
  zokou
} = require("../framework/zokou");
const yts = require("yt-search");
const BaseUrl = process.env.GITHUB_GIT;
const giftedapikey = process.env.BOT_OWNER;
function validateConfig() {
  if (!BaseUrl || !giftedapikey) {
    throw new Error("Configuration error: Missing BaseUrl or API key.");
  }
}
validateConfig();
zokou({
  'nomCom': "video",
  'categorie': "Search",
  'reaction': '🎥'
}, async (_0x433530, _0x32824a, _0x1ffe1f) => {
  const {
    ms: _0x397389,
    repondre: _0x3d85d1,
    arg: _0x5c1d3a
  } = _0x1ffe1f;
  if (!_0x5c1d3a[0]) {
    return _0x3d85d1("Please insert a song/video name.");
  }
  try {
    const _0x47e637 = await yts(_0x5c1d3a.join(" "));
    const _0x2e5cf2 = _0x47e637.videos;
    if (_0x2e5cf2.length === 0) {
      return _0x3d85d1("No videos found.");
    }
    const _0x5ef4ea = _0x2e5cf2[0].url;
    const _0x1b682a = await fetch(BaseUrl + "/api/download/ytmp4?url=" + encodeURIComponent(_0x5ef4ea) + "&apikey=" + giftedapikey);
    const _0x411ac5 = await _0x1b682a.json();
    if (_0x411ac5.status === 200 && _0x411ac5.success) {
      const _0x2d0c42 = _0x411ac5.result.download_url;
      await _0x32824a.sendMessage(_0x433530, {
        'image': {
          'url': _0x2e5cf2[0].thumbnail
        },
        'caption': "╭─────═━┈┈━═──━┈⊷\n┇ 『 *CYBERION* 』\n┇ *SPARK-X MEDIA* \n┇ *🕵CARLTECH* \n╰─────═━┈┈━═──━┈⊷"
      }, {
        'quoted': _0x397389
      });
      await _0x32824a.sendMessage(_0x433530, {
        'video': {
          'url': _0x2d0c42
        },
        'mimetype': "video/mp4"
      }, {
        'quoted': _0x397389
      });
      _0x3d85d1("Downloaded Successfully by🕵");
    } else {
      _0x3d85d1("Failed to download the video.");
    }
  } catch (_0x148736) {
    console.error("Error:", _0x148736);
    _0x3d85d1("An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "play",
  'categorie': "Download",
  'reaction': '🎧'
}, async (_0x433c49, _0x1252b5, _0x5220de) => {
  const {
    ms: _0x3cb101,
    repondre: _0x922a5a,
    arg: _0x2fda1d
  } = _0x5220de;
  if (!_0x2fda1d[0]) {
    return _0x922a5a("Please insert a song name.");
  }
  try {
    const _0x7003d = await yts(_0x2fda1d.join(" "));
    const _0x361ba3 = _0x7003d.videos;
    if (_0x361ba3.length === 0) {
      return _0x922a5a("No audio found.");
    }
    const _0x1c858b = _0x361ba3[0].url;
    const _0x4359c8 = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x1c858b) + "&apikey=" + giftedapikey);
    const _0x4e4140 = await _0x4359c8.json();
    if (_0x4e4140.status === 200 && _0x4e4140.success) {
      const _0x2161f8 = _0x4e4140.result.download_url;
      await _0x1252b5.sendMessage(_0x433c49, {
        'image': {
          'url': _0x361ba3[0].thumbnail
        },
        'caption': "╭─────═━┈┈━═──━┈⊷\n┇ 『 *CYBERION* 』\n┇ *SPARK-X MEDIA* \n┇ *🕵CARLTECH* \n╰─────═━┈┈━═──━┈⊷"
      }, {
        'quoted': _0x3cb101
      });
      await _0x1252b5.sendMessage(_0x433c49, {
        'audio': {
          'url': _0x2161f8
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x3cb101
      });
      _0x922a5a("Downloaded Successfully by🕵");
    } else {
      _0x922a5a("Failed to download audio. Try again later.");
    }
  } catch (_0x484679) {
    console.error("Error:", _0x484679);
    _0x922a5a("An error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "song",
  'categorie': "Download",
  'reaction': '🎸'
}, async (_0x21e2f1, _0x41a8d6, _0x145b0b) => {
  const {
    ms: _0x50c090,
    repondre: _0x210429,
    arg: _0x3c2124
  } = _0x145b0b;
  if (!_0x3c2124[0]) {
    return _0x210429("Please insert a song name.");
  }
  try {
    const _0x344748 = await yts(_0x3c2124.join(" "));
    const _0x27503a = _0x344748.videos;
    if (_0x27503a.length === 0) {
      return _0x210429("No audio found.");
    }
    const _0x124b13 = _0x27503a[0].url;
    const _0x223f43 = await fetch(BaseUrl + "/api/download/ytmp3?url=" + encodeURIComponent(_0x124b13) + "&apikey=" + giftedapikey);
    const _0x2c47ff = await _0x223f43.json();
    if (_0x2c47ff.status === 200 && _0x2c47ff.success) {
      const _0x35fbf0 = _0x2c47ff.result.download_url;
      await _0x41a8d6.sendMessage(_0x21e2f1, {
        'image': {
          'url': _0x27503a[0].thumbnail
        },
        'caption': "╭─────═━┈┈━═──━┈⊷\n┇ 『 *CYBERION* 』\n┇ *SPARK-X MEDIA* \n┇ *🕵CARLTECH* \n╰─────═━┈┈━═──━┈⊷"
      }, {
        'quoted': _0x50c090
      });
      await _0x41a8d6.sendMessage(_0x21e2f1, {
        'audio': {
          'url': _0x35fbf0
        },
        'mimetype': "audio/mp4"
      }, {
        'quoted': _0x50c090
      });
      _0x210429("Downloaded Successfully by🕵");
    } else {
      _0x210429("Failed to download audio. Try again later.");
    }
  } catch (_0x3e0e11) {
    console.error("Error:", _0x3e0e11);
    _0x210429("An error occurred while processing your request.");
  }
});
