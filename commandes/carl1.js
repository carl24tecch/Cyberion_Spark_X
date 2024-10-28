

const {
  zokou
} = require("../framework/zokou");
const traduire = require("../framework/traduction");
const {
  default: axios
} = require("axios");
zokou({
  'nomCom': "bot",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x38fdae, _0x4cf3a6, _0x16dde5) => {
  const {
    repondre: _0x2124f5,
    ms: _0x530210,
    arg: _0x23fb00
  } = _0x16dde5;
  if (!_0x23fb00 || !_0x23fb00[0]) {
    return _0x2124f5("yes buddy,🕵please say something.");
  }
  try {
    const _0x367849 = await traduire(_0x23fb00.join(" "), {
      'to': 'en'
    });
    console.log(_0x367849);
    fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x367849).then(_0x1ee5c6 => _0x1ee5c6.json()).then(_0xf0d1a1 => {
      const _0x13e01b = _0xf0d1a1.cnt;
      console.log(_0x13e01b);
      traduire(_0x13e01b, {
        'to': 'en'
      }).then(_0x568447 => {
        _0x2124f5(_0x568447);
      })["catch"](_0x4d291f => {
        console.error("Error when translating into French :", _0x4d291f);
        _0x2124f5("Error when translating into French");
      });
    })["catch"](_0x2a1081 => {
      console.error("Error requesting BrainShop :", _0x2a1081);
      _0x2124f5("Error requesting BrainShop");
    });
  } catch (_0x1da7c4) {
    _0x2124f5("oops an error : " + _0x1da7c4);
  }
});
zokou({
  'nomCom': 'ai',
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x4e695e, _0x231fc9, _0x1507bb) => {
  const {
    repondre: _0x42af2a,
    arg: _0x1ee2da,
    ms: _0x3c2cd6
  } = _0x1507bb;
  try {
    if (!_0x1ee2da || _0x1ee2da.length === 0) {
      return _0x42af2a("Please enter the necessary information to generate the image.");
    }
    const _0x226933 = _0x1ee2da.join(" ");
    const _0x3e7166 = await axios.get("https://photooxy.com/effect/create-image?q=" + _0x226933);
    const _0x3b9242 = _0x3e7166.data;
    if (_0x3b9242.status == 200) {
      const _0x13c7c9 = _0x3b9242.result;
      _0x231fc9.sendMessage(_0x4e695e, {
        'image': {
          'url': _0x13c7c9
        },
        'caption': "*powered by Spark-X*"
      }, {
        'quoted': _0x3c2cd6
      });
    } else {
      _0x42af2a("Error during image generation.");
    }
  } catch (_0x3f58da) {
    console.error("Erreur:", _0x3f58da.message || "Une erreur s'est produite");
    _0x42af2a("Oops, an error occurred while processing your request");
  }
});
zokou({
  'nomCom': "gpt1",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x32e862, _0x733fc9, _0x50623f) => {
  const {
    repondre: _0x17365d,
    arg: _0x2662c2,
    ms: _0x3846b6
  } = _0x50623f;
  try {
    if (!_0x2662c2 || _0x2662c2.length === 0) {
      return _0x17365d("Please ask a me any thing.");
    }
    const _0x564b81 = _0x2662c2.join(" ");
    const _0x8dfdb7 = await axios.get("https://api.ibrahimadams.us.kg/api/ai/gpt4?q=" + _0x564b81 + "&apikey=cracker");
    const _0x3c1431 = _0x8dfdb7.data;
    if (_0x3c1431) {
      _0x17365d(_0x3c1431.result);
    } else {
      _0x17365d("Error during response generation.");
    }
  } catch (_0x58bde7) {
    console.error("Erreur:", _0x58bde7.message || "Une erreur s'est produite");
    _0x17365d("Oops, an error occurred while processing your request.");
  }
});
zokou({
  'nomCom': "gpt",
  'reaction': '🤔',
  'categorie': 'IA'
}, async (_0x275336, _0x2e3cf7, _0x25e4bd) => {
  const {
    repondre: _0x2ec435,
    arg: _0x333b5a,
    ms: _0x42c48b
  } = _0x25e4bd;
  try {
    if (!_0x333b5a || _0x333b5a.length === 0) {
      return _0x2ec435("Please ask a question.");
    }
    const _0x31f16a = _0x333b5a.join(" ");
    const _0x17c5e3 = await axios.get("https://api.ibrahimadams.us.kg/api/ai/gpt4?q=" + _0x31f16a + "&apikey=cracker");
    const _0x477e53 = _0x17c5e3.data;
    if (_0x477e53) {
      _0x2ec435(_0x477e53.result);
    } else {
      _0x2ec435("Error during response generation.");
    }
  } catch (_0x58ded7) {
    console.error("Erreur:", _0x58ded7.message || "Une erreur s'est produite");
    _0x2ec435("Oops, an error occurred while processing your request.");
  }
});
