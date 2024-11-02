(function (_0x10e010, _0x1e574e) {
  const _0x383732 = _0x10e010();
  while (true) {
    try {
      const _0x439118 = -parseInt(_0x13b2(1077, 0x59)) / 1 * (-parseInt(_0x13b2(634, -0xb)) / 2) + parseInt(_0x13b2(500, 0x465)) / 3 + parseInt(_0x13b2(589, 0x88)) / 4 * (parseInt(_0x13b2(851, 0x388)) / 5) + -parseInt(_0x13b2(870, 0x1f8)) / 6 + parseInt(_0x13b2(736, 0x15)) / 7 * (parseInt(_0x13b2(905, 0x33d)) / 8) + -parseInt(_0x13b2(960, 0x47c)) / 9 * (-parseInt(_0x13b2(688, 0x3bb)) / 10) + -parseInt(_0x13b2(968, 0x2e1)) / 11;
      if (_0x439118 === _0x1e574e) {
        break;
      } else {
        _0x383732.push(_0x383732.shift());
      }
    } catch (_0x39b429) {
      _0x383732.push(_0x383732.shift());
    }
  }
})(_0x37c0, 837082);
function _0x13b2(_0x316dde, _0x2eb4cc) {
  const _0x261b2b = _0x37c0();
  _0x13b2 = function (_0x24fd44, _0x578072) {
    _0x24fd44 = _0x24fd44 - 270;
    let _0x1622be = _0x261b2b[_0x24fd44];
    return _0x1622be;
  };
  return _0x13b2(_0x316dde, _0x2eb4cc);
}
const _0x1622be = function () {
  let _0x2899ae = true;
  return function (_0x1714e6, _0x5e73a6) {
    const _0x204095 = _0x2899ae ? function () {
      if (_0x5e73a6) {
        const _0x206bbf = _0x5e73a6.apply(_0x1714e6, arguments);
        _0x5e73a6 = null;
        return _0x206bbf;
      }
    } : function () {};
    _0x2899ae = false;
    return _0x204095;
  };
}();
const _0x578072 = _0x1622be(this, function () {
  return _0x578072.toString().search("(((.+)+)+)+$").toString().constructor(_0x578072).search("(((.+)+)+)+$");
});
_0x578072();
const _0x316dde = function () {
  let _0x3f710b = true;
  return function (_0x132249, _0x4890f6) {
    const _0x131e6a = _0x3f710b ? function () {
      if (_0x4890f6) {
        const _0x1c70fc = _0x4890f6.apply(_0x132249, arguments);
        _0x4890f6 = null;
        return _0x1c70fc;
      }
    } : function () {};
    _0x3f710b = false;
    return _0x131e6a;
  };
}();
function _0x8be6fa(_0x5ad7ba, _0x5eaff9, _0x2a5256, _0x240e63, _0x1609c4) {
  return _0x13b2(_0x5ad7ba + 0x112, _0x5eaff9);
}
(function () {
  _0x316dde(this, function () {
    const _0x1cafda = new RegExp("function *\\( *\\)");
    const _0x2bef4a = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x7f0ebc = _0x562b01("init");
    if (!_0x1cafda.test(_0x7f0ebc + "chain") || !_0x2bef4a.test(_0x7f0ebc + "input")) {
      _0x7f0ebc('0');
    } else {
      _0x562b01();
    }
  })();
})();
function _0x144f5d(_0x5640c4, _0x42e82a, _0x5c3066, _0x52bcc2, _0x1707f0) {
  return _0x13b2(_0x52bcc2 - 0x132, _0x42e82a);
}
const _0x49a2d5 = function () {
  let _0x2fb983 = true;
  return function (_0x20faca, _0x4db439) {
    const _0x3af5e3 = _0x2fb983 ? function () {
      if (_0x4db439) {
        const _0x1e333a = _0x4db439.apply(_0x20faca, arguments);
        _0x4db439 = null;
        return _0x1e333a;
      }
    } : function () {};
    _0x2fb983 = false;
    return _0x3af5e3;
  };
}();
const _0x38fc7c = _0x49a2d5(this, function () {
  const _0xd317b5 = function () {
    let _0x27f1cc;
    try {
      _0x27f1cc = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x164a77) {
      _0x27f1cc = window;
    }
    return _0x27f1cc;
  };
  const _0x24fb29 = _0xd317b5();
  const _0x3734bd = _0x24fb29.console = _0x24fb29.console || {};
  const _0x1b3ac7 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0xf669c9 = 0; _0xf669c9 < _0x1b3ac7.length; _0xf669c9++) {
    const _0x3020e1 = _0x49a2d5.constructor.prototype.bind(_0x49a2d5);
    const _0x332154 = _0x1b3ac7[_0xf669c9];
    const _0x35dc36 = _0x3734bd[_0x332154] || _0x3020e1;
    _0x3020e1.__proto__ = _0x49a2d5.bind(_0x49a2d5);
    _0x3020e1.toString = _0x35dc36.toString.bind(_0x35dc36);
    _0x3734bd[_0x332154] = _0x3020e1;
  }
});
_0x38fc7c();
const {
  zokou
} = require("../framework/zokou");
const s = require("../set");
const fs = require('fs');
function getDescriptionFromEnv(_0x5b6148) {
  const _0x5450a7 = fs.readFileSync("./app.json", "utf-8");
  const _0x31a2c4 = JSON.parse(_0x5450a7);
  return _0x31a2c4.env[_0x5b6148]?.["description"] || "The environment variable description was not found.";
}
const _0x35b910 = {
  nomCom: "anticall",
  categorie: "Developer option"
};
zokou(_0x35b910, async (_0x548dc6, _0x598752, _0x222896) => {
  const {
    ms: _0x145965,
    repondre: _0x4f4c46,
    superUser: _0x28f063,
    auteurMessage: _0x3e5744,
    arg: _0x4395e0
  } = _0x222896;
  if (!_0x28f063) {
    return _0x4f4c46("*This command is restricted to the bot owner. or Alpha owner* 💀,,idiot");
  }
  if (!_0x4395e0[0]) {
    return _0x4f4c46("Instructions:\n\nType \"anticall yes\" to enable or \"anticall no\" to disable.");
  }
  const _0x4e1eca = _0x4395e0.join(" ").toLowerCase();
  switch (_0x4e1eca) {
    case "yes":
      s.ANTICALL = "yes";
      responseMessage = "Anti-call has been enabled.";
      break;
    case 'no':
      s.ANTICALL = 'no';
      responseMessage = "Anti-call has been disabled.";
      break;
    default:
      return _0x4f4c46(".Type 'anticall yes' or 'anticall no'.");
  }
  try {
    const _0x27a4c2 = {
      text: responseMessage
    };
    const _0x436e24 = {
      quoted: _0x145965
    };
    await _0x598752.sendMessage(_0x548dc6, _0x27a4c2, _0x436e24);
  } catch (_0x59129f) {
    console.error("Error processing your request:", _0x59129f);
    const _0x4db098 = {
      text: "Error processing your request."
    };
    const _0x19173d = {
      quoted: _0x145965
    };
    await _0x598752.sendMessage(_0x548dc6, _0x4db098, _0x19173d);
  }
});
/*const _0x54af29 = {
  nomCom: "areact",
  categorie: "HEROKU-CLIENT"
};
zokou(_0x54af29, async (_0x411fee, _0x21d6ff, _0x5cce31) => {
  const {
    ms: _0x4cfd41,
    repondre: _0x1c7704,
    superUser: _0x352e9c,
    auteurMessage: _0x189d74,
    arg: _0xdb3fec
  } = _0x5cce31;
  if (!_0x352e9c) {
    return _0x1c7704("*This command is restricted to the bot owner or Alpha owner.* 💀,,idiot");
  }
  if (!_0xdb3fec[0]) {
    return _0x1c7704("Instructions:\n\nType \"areact yes\" to enable or \"areact no\" to disable.");
  }
  const _0x5428f8 = _0xdb3fec.join(" ").toLowerCase();
  switch (_0x5428f8) {
    case "yes":
      s.AUTO_REACTION = "yes";
      responseMessage = "Areact has been enabled.";
      break;
    case 'no':
      s.AUTO_REACTION = 'no';
      responseMessage = "Autoreaction has been disabled.";
      break;
    default:
      return _0x1c7704("Please don't invent an option. Type 'areact yes' or 'areact no'.");
  }
  try {
    const _0x10c461 = {
      text: responseMessage
    };
    const _0x7e56eb = {
      quoted: _0x4cfd41
    };
    await _0x21d6ff.sendMessage(_0x411fee, _0x10c461, _0x7e56eb);
  } catch (_0xa4e84b) {
    console.error("Error processing your request:", _0xa4e84b);
    const _0x533546 = {
      text: "Error processing your request."
    };
    const _0x356e3e = {
      quoted: _0x4cfd41
    };
    await _0x21d6ff.sendMessage(_0x411fee, _0x533546, _0x356e3e);
  }
});
(function () {
  let _0x1c1847;
  try {
    const _0x2005ad = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x1c1847 = _0x2005ad();
  } catch (_0x27483e) {
    _0x1c1847 = window;
  }
  _0x1c1847.setInterval(_0x562b01, 4000);
})();
const _0x2d78f1 = {*/
  nomCom: "readstatus",
  categorie: "Developer option"
};
zokou(_0x2d78f1, async (_0x42a023, _0x463c9a, _0x57c52d) => {
  const {
    ms: _0x48e47b,
    repondre: _0x19bcae,
    superUser: _0x3a8b4c,
    auteurMessage: _0x4ceb9b,
    arg: _0x213799
  } = _0x57c52d;
  if (!_0x3a8b4c) {
    return _0x19bcae("*This command is restricted to the bot owner or Alpha owner.* 💀,,idiot");
  }
  if (!_0x213799[0]) {
    return _0x19bcae("Instructions:\n\nType \"readstatus yes\" to enable or \"readstatus no\" to disable.");
  }
  const _0x33fa95 = _0x213799.join(" ").toLowerCase();
  switch (_0x33fa95) {
    case "yes":
      s.AUTO_READ_STATUS = "yes";
      responseMessage = " has been enabled successfully.";
      break;
    case 'no':
      s.AUTO_READ_STATUS = 'no';
      responseMessage = " has been disabled successfully.";
      break;
    default:
      return _0x19bcae("Please don't invent an option. Type 'readstatus yes' or 'readstatus no'.");
  }
  try {
    const _0x7394a0 = {
      text: responseMessage
    };
    const _0xfdfc96 = {
      quoted: _0x48e47b
    };
    await _0x463c9a.sendMessage(_0x42a023, _0x7394a0, _0xfdfc96);
  } catch (_0xf1e01d) {
    console.error("Error processing your request:", _0xf1e01d);
    const _0x1934db = {
      text: "Error processing your request."
    };
    const _0x1e7a16 = {
      quoted: _0x48e47b
    };
    await _0x463c9a.sendMessage(_0x42a023, _0x1934db, _0x1e7a16);
  }
});
const _0xe8bdb9 = {};
function _0x37c0() {
  const _0x4a9c93 = ['sypip', 'jOjNy', 'ASQPX', 'gACbi', 'qYYiC', 'sonli', 'mpZdW', 'qdgkG', "or 's", " Type", 'opBVP', 'AsXFK', 'rIKtK', 'QBcCS', 'DYmXk', 'NSgRr', 'ent', 'FbrLk', 'vlrkB', 'kYURZ', 'VNsKR', 'QrkxR', 'NdwbJ', "no'.", "has b", 'klZeB', "s\" to", 'eoALl', 'RobGj', 'MKKrh', "\"priv", 'PRsFX', 'PDjEJ', 'nomCo', " 'dow", '2tHJYRk', "r \"st", 'xSFfP', 'UmmNa', 'ENT', 'lyXjF', "o'.", 'loads', 'retur', 'all', 'BqxRY', 'WUkGB', 'jaCbd', 'xvToh', 'conso', "ble o", 'eAiIM', 'dHKBk', 'nVkjX', 'type', 'ing', 'Xlkpe', 'xQEhL', 'areac', 'wayso', 'ccJtb', '0-9a-', 'env', 'table', "vent ", 'aQrXw', 'rhiRe', 'quote', "\"auto", 'poWYI', 'recor', "to di", 'stkLX', 'antid', 'vHlPD', 'nment', 'ICaEg', " 'pri", 'QeyFz', " \"are", 'JDQYR', 'OAklL', 'WUlez', "' or ", "g no\"", 'autot', 'seAKI', 'aBPMO', 'readm', '1840BwOnHW', 'qrcfP', 'MESSA', 'warn', 'led.', 'MlXwg', 'ABeHD', "t has", 'QMdCo', 'vqrtB', 'trict', "\\( *\\", 'QBHuR', 'FIWFd', 'cArdZ', 'xhYLl', 'antic', 'eZYOZ', 'typin', "ng no", 'MfWiJ', 'RrKSk', 'wSUWA', " to e", 'icmod', 'nline', '__pro', "been ", " or A", " vari", 'REACT', 'CXoYO', 'ING_B', 'cCRsZ', 'reads', "or Al", 'KzHOC', 'nnALq', 'actio', 'ayson', " no'.", 'test', 'uKrqc', "led s", "een e", 'MDKUp', '{}.co', 'VNUvB', '352422nYoDPI', "ll no", 'CpDVi', "es' o", 'jmJWO', 'excep', 'KaMtk', " \"rea", 'cxEBX', 'IjuRB', " has ", 'ZNaiS', 'iYgZP', 'ZVNaZ', 'qUBLd', 'VQbHP', 'tPwyk', 'HEROK', 'rWaMy', 'ZUsZM', 'bMjZr', 'ysonl', 'CaPGB', 'KdEmZ', 'uest.', 'FVTEV', " 'sta", 'tatus', 'DELET', "ed to", 'DOWNL', "or \"a", 'qoFqj', 'lSIly', 'IqPpD', 'IEcrt', 'kXaVb', 'JZhfm', '$]*)', " (tru", 'jjgUz', 'yWWMj', 'yping', 'HkAQN', 'ZLKdv', '(((.+', 'disab', "'down", 'able.', 'cEypT', 'hNZpv', 'uXVWm', 'sable', "\"pm-p", 'lways', 'zA-Z_', " proc", 'PRESE', 'HiUxk', 'oHpKn', " not ", 'KnxDm', 'QnMJb', 'amewo', 'KHsOI', 'bbDJH', 'toStr', 'TlfLc', 'input', 'descr', 'QQJrn', 'zujZY', "ode y", 'lXCGj', 'qlLst', 'SQmnG', 'jYRfa', 'OAD_S', 'kPdqG', "een d", 'ngGjd', 'OlItI', 'kWqKR', 'BZhpN', " or '", 'nQDdd', 'WGZIK', 'init', 'OTkia', " or \"", 'readF', 'ZokUb', 'READ_', 'dcUVs', 'cdPaT', "able ", 'wQtjR', 'tAqfk', 'error', 'nstru', 'mnrPz', 'ytMNY', 'CoBDi', "es\" t", 'nable', 'YvCoS', 'VtEHD', 'xuiog', 'seaBH', 'tion', 'tRZIk', 'permi', 'apply', 'setIn', 'ceYXa', '2245mCAeQx', 'hrNpD', "\\+\\+ ", 'rdHGO', 'pfPHr', 'erCas', 'rapHk', 'szhsE', 'ctor(', 'YrCAj', 'ble.', 'ovFyQ', '*This', 'LSAmh', 'AnqVM', 'ANTI_', 'uxbiM', 'pFRxT', 'aJEXG', '7516704tSiYen', 'uVNic', 'temod', "e no\"", 'fhyLD', 'AHfiL', 'VXzYL', 'jxrxv', 'AoZat', 'pEfxA', 'mHqIS', 'uKOqI', 'XFcvA', "n dis", "e yes", "\"alwa", 'NlqPw', "yes' ", 'licmo', 'JksFP', 'WvLUb', 'text', 'otypi', 'Twjjc', "o dis", 'LnTpM', "\"retu", 'DafVZ', 'ERzdM', 'iXeqy', "ge ye", "ion *", 'OmInr', "wner ", 'WNFsj', '208EfOwgh', 'NCE', 'DVCvf', 'cRApo', 'GcmWr', 'aPmom', '*(?:[', 'YEfZe', './app', 'PUBLI', 'TeCZC', 'join', "ode n", " 'are", 'tgRwa', 'xWTQe', " the ", "d no\"", 'JhqaA', 'MIhZo', 'amyqf', "e) {}", 'HKzqm', 'gCLLn', 'artme', 'CTOPX', 'ccess', 'KpptR', "all n", 'nctio', 'RMIT', 'sMwtQ', 'yes', 'iYpgu', 'SQjqi', "Type ", "ct ye", 'LBBZf', 'eidSg', " \"pri", 'nRyfA', 'NAMsv', "rmit ", 'KSwaT', 'atemo', 'cmode', 'MTpZW', 'synoa', 'akWCS', 'WBVNK', 'nviro', "age y", 'searc', 'UwZxz', 'uAUfi', '68994GDApXO', "n was", 'vatem', 'PwtnI', 'AZoJd', 'ucces', 'START', 'abled', '46940047wrkzlM', 'downl', "\"area", 'jhjOQ', "o ena", 'FaNhy', 'sJlWw', 'chain', 'DYssg', 'WVtGU', 'aMajO', 'idele', 'KGQcL', "us no", 'HkxLl', "de ye", 'aofyF', "rd ye", 'DtXaC', "d yes", 'TQrnD', 'pqbwL', 'dknMG', 'tfTad', 'NwNqm', 'EErLC', 'bicwZ', 'fTAxF', "e don", 'AnQiC', 'debu', " no\" ", "s yes", 'yvron', 'elete', "le or", 'zxGgJ', 'nGBdX', 'KbICr', "rd no", 'NTCKN', 'uctio', 'zuruV', 'toLow', 'uRLED', "and i", 'FblLh', "g you", 'Error', 'onlin', "act n", 'Ygvyw', 'PEoSD', 'ORCFC', 'dJHqw', 'jxeKf', 'dwfaA', 'TATUS', 'WzsAv', 'eqMXx', 'wdDVR', 'log', "on ha", 'tartm', 'ANTIC', 'rsSWf', 'trace', 'csrcG', 'vOVae', 'BpVnR', 'NCxZJ', 'NgpPq', 'LypHq', 'zQkiQ', 'kUsDR', 'kou', "\"publ", "\"star", 'NSelO', 'count', 'uqGeJ', 'gEGax', "r 're", " 'pub", 'BZndb', 'QrBNY', 'apgKx', 'ByzeX', 'PXuxI', "call ", 'tZnTD', 'to__', 'uest:', 'UNiOE', 'rtmes', 'GES', 'gger', 'Areac', 'VVqEQ', 'YiMKT', 'FQNAP', 'VYgpF', 'FgACT', 'PfScs', 'NVWdZ', 'XgGIT', 'wner.', 'RArLG', 'UMACM', '1566311bFlgRz', 'skeEO', 'cfNEi', 'ZLQwN', 'OGkGS', "us ye", 'messa', 'ecord', 'proto', 'OJRgf', 'HlXUw', 'ifAux', 'TbMDY', "mode ", 'NpWIA', 'RNvVJ', 'eDFNK', 'autor', " yes\"", 'wmcbO', 'ION', "s res", 'vkYBJ', 'tTcNU', 'parse', "\"anti", 'YgOVU', 'ZbRMW', 'BeWYh', 'icall', 'pTuTr', "age n", 'hqQdJ', 'herok', 'Autor', 'mWggT', 'ZoJot', 'PiJaI', "pha o", "or 'a", 'VfRXY', 'OEohh', 'OT_ME', "atus ", "ns:\n\n", 'ssage', 'rKPaL', 'tszWh', 'CMWZB', 'URgeg', 'woBot', 'EsbGF', 'LyGRH', 'XduJt', "t yes", 'DqANX', 'U-CLI', 'pm-pe', 'sendM', 'WJsfn', 'EwvlS', 'dCPKn', 'le.', 'utf-8', 'ivate', 'TssEQ', 'HnPGb', 'OTPof', ')+)+)', 'HJofb', 'juBaD', 'BkQlr', "r \"al", 'VzJkx', 'kUhdy', 'ALL', "te no", 'hgpVM', 'SNTCG', 'lengt', 'info', 'pBGJG', 'qRrva', 'TrTbH', 'qgBoo', 'bXKvz', " 'rea", 'IMbjp', 'DFjiK', "\" to ", 'qSMht', 'BNBDf', 'USUjT', 'pKnRi', "'pm-p", 'zLMij', 'zIvLP', " been", 'PkVRF', 'rVTtP', 'lqzdH', 'nmZYZ', 'QcUKU', 'Ekwwv', 'XWRrc', "e or ", 'bkTzG', 'SYzZJ', "o\" to", 'owner', 'SQmbS', 'TDUmw', 'uXqNz', 'SAGE', 'KFrBQ', 'E_MES', 'uvsab', 'yPdvT', "te ye", 'strin', 'PBNcv', 'WVREP', '../fr', 'OMpiT', 'PtpWK', 'nOEBC', 'vvjYT', 'ebDCz', "is\")(", 'a-zA-', 'NzylB', 'EzsHF', 'QMWDl', "bot o", 'AgfPb', 'ermit', 'hHXxU', 'wBuPi', 'aHimy', 'eczny', 'jvMEI', "de no", 'wqjjm', 'Objec', 'Anti-', 'uNnov', 'sCuXr', 'Iiiyi', " disa", 'nnPIG', "eact ", 'whrfZ', "rn th", 'nload', 'GRXdv', 'rk/zo', 'pIRom', " 'alw", 'sKWlD', 'ubRnW', 'STATU', 'ileSy', 'sfull', 'avDNy', 'RlIkK', 'C_MOD', 'CVDgm', 'alway', 'CoFQD', 'bbVYB', 'KNFvs', 'oWbrI', 'OkGzH', "\"down", 'PaBRu', "g yes", 'OyXJF', "line ", 'mohus', "r req", "r 'pr", "'t in", 'guFIu', "ine y", 'oadst', 'wvhVA', '../se', "s no\"", 'idiot', 'OOCgM', 'sCSqT', 'ructo', 'CxaBH', 'yGbLi', 'EzKwt', 'CsBxF', 'nzujB', 'cFNLp', 'delet', 'iofMR', 'PUPTV', 'Pleas', 'YDGlF', 'YUjSS', 'fully', 'YCkmk', 'iptio', 'sIoIT', 'oreco', " yes'", 'AUTO_', 'CXcVN', 'vhXTW', 'GHQrr', 'ed.', 'YTsSm', 'orie', 'DMdJl', " to d", 'funct', 'fRoSf', 'publi', 'found', 'terva', 'eDlPF', "no\" t", 'rPOvo', "yes\" ", 'essin', "lpha ", 'UQXTh', " 'pm-", 'zOjwG', 'bRxZV', 'rmit', 'zdYJQ', "n() ", 'ntica', "sage ", 'start', 'smADt', 'SpRAy', 'statu', "The e", "r 'ar", "ed su", 'BxRXb', 'fqQLA', 'PtKKM', 'BjtDp', 'enabl', '1460313wTEMhe', " comm", 'WvYaB', 'dWKZp', 'Pquxc', 'bAEDg', 'PInkV', "e no'", 'SGzLY', 'BvQpK', 'YqIWl', 'xcvCq', 'AYUTo', 'bhQsR', 'atus', 'wMuaX', 'SRFpL', 'WRtxm', 'tHWDC', 'agrSt', 'Agvqs', 'MGirO', 'PftRM', 'essag', 'ThuwH', 'tmkAA', 'ovYei', 'iCFtO', 'nPFSH', 'cbukv', 'YQjkM', 'fIuZm', 'MRPjJ', 'IPSsO', 'EKKRh', "s' or", 'dstat', 'FLjyd', 'jdAcg', 'XxIce', 'priva', 'admes', 'hHgVr', 'dmess', 'ZEHSK', 'TelyE', 'jGyFI', 'JDTCX', 'nPHpR', 'cLNuW', 'const', "n (fu", 'bind', 'SSAGE', 'NqCeJ', " enab", 'AxVqB', " 'ant", 'while', 'DFzub', 'tion.', 'Hzqet', 'sjZsd', 'Instr', 'GZFKu', 'tJzBn', 'isabl', 'gxmXW', 'jJhQm', "act y", 'OXusH', 'tmess', "\"read", 'FtKfh', 'EzvdQ', "to en", 'categ', 'PM_PE', 'aiSAR', 'state', 'u-cli', 'KqaTQ', " 'aut", 'uaDVb', "* 💀,,", 'yGJyT', 'XLJlP', 'ZYfAs', "an op", '14116SNRfhp', 'Z_$][', "s bee", "ng ye", 'eacti', 'oArdv', '.json', 'lNbDv', 'call', 'aCNGU'];
  _0x37c0 = function () {
    return _0x4a9c93;
  };
  return _0x37c0();
}
_0xe8bdb9.nomCom = "antidelete";
_0xe8bdb9.categorie = "Developer option";
zokou(_0xe8bdb9, async (_0x361633, _0x4a7fd1, _0x4f05de) => {
  const {
    ms: _0x396a3f,
    repondre: _0x47734b,
    superUser: _0x427461,
    auteurMessage: _0x555368,
    arg: _0x40fb78
  } = _0x4f05de;
  if (!_0x427461) {
    return _0x47734b("*This command is for the boss");
  }
  if (!_0x40fb78[0]) {
    return _0x47734b("Instructions:\n\nType \"antidelete yes\" to enable or \"antidelete no\" to disable.");
  }
  const _0x6cb0d4 = _0x40fb78.join(" ").toLowerCase();
  switch (_0x6cb0d4) {
    case "yes":
      s.ANTI_DELETE_MESSAGE = "yes";
      responseMessage = " has been enabled successfully.";
      break;
    case 'no':
      s.ANTI_DELETE_MESSAGE = 'no';
      responseMessage = " has been disabled successfully.";
      break;
    default:
      return _0x47734b("Please don't invent an option. Type 'antidelete yes' or 'antidelete no'.");
  }
  try {
    const _0x5a182e = {
      text: responseMessage
    };
    const _0x2a8f79 = {
      quoted: _0x396a3f
    };
    await _0x4a7fd1.sendMessage(_0x361633, _0x5a182e, _0x2a8f79);
  } catch (_0x12b2aa) {
    console.error("Error processing your request:", _0x12b2aa);
    const _0x51089 = {
      text: "Error processing your request."
    };
    const _0x52c7c9 = {
      quoted: _0x396a3f
    };
    await _0x4a7fd1.sendMessage(_0x361633, _0x51089, _0x52c7c9);
  }
});
const _0x4dfc7d = {
  nomCom: "downloadstatus",
  categorie: "Developer option"
};
zokou(_0x4dfc7d, async (_0x482a04, _0x52f805, _0x4cc0fc) => {
  const {
    ms: _0x52ba14,
    repondre: _0x3da6f2,
    superUser: _0x5ee0d9,
    auteurMessage: _0x5d404d,
    arg: _0x5e770d
  } = _0x4cc0fc;
  if (!_0x5ee0d9) {
    return _0x3da6f2("*This command is for the boss");
  }
  if (!_0x5e770d[0]) {
    return _0x3da6f2("Instructions:\n\nType \"downloadstatus yes\" to enable or \"downloadstatus no\" to disable.");
  }
  const _0x3abf91 = _0x5e770d.join(" ").toLowerCase();
  switch (_0x3abf91) {
    case "yes":
      s.AUTO_DOWNLOAD_STATUS = "yes";
      responseMessage = " has been enabled successfully.";
      break;
    case 'no':
      s.AUTO_DOWNLOAD_STATUS = 'no';
      responseMessage = " has been disabled successfully.";
      break;
    default:
      return _0x3da6f2(".Type 'downloadstatus yes' or 'downloadstatus no'.");
  }
  try {
    const _0x468317 = {
      text: responseMessage
    };
    const _0x290396 = {
      quoted: _0x52ba14
    };
    await _0x52f805.sendMessage(_0x482a04, _0x468317, _0x290396);
  } catch (_0x23739f) {
    console.error("Error processing your request:", _0x23739f);
    const _0x6cede0 = {
      text: "Error processing your request."
    };
    const _0x5576dd = {
      quoted: _0x52ba14
    };
    await _0x52f805.sendMessage(_0x482a04, _0x6cede0, _0x5576dd);
  }
});
const _0x4c0f15 = {
  nomCom: "startmessage",
  categorie: "Developer option"
};
zokou(_0x4c0f15, async (_0x40477b, _0x1d293e, _0x5a8427) => {
  const {
    ms: _0x56a1eb,
    repondre: _0x1f3eb5,
    superUser: _0x13393b,
    auteurMessage: _0x40bb52,
    arg: _0x113738
  } = _0x5a8427;
  if (!_0x13393b) {
    return _0x1f3eb5("*This command is for the boss");
  }
  if (!_0x113738[0]) {
    return _0x1f3eb5("Instructions:\n\nType \"startmessage yes\" to enable or \"startmessage no\" to disable.");
  }
  const _0x25a200 = _0x113738.join(" ").toLowerCase();
  switch (_0x25a200) {
    case "yes":
      s.STARTING_BOT_MESSAGE = "yes";
      responseMessage = " has been enabled successfully.";
      break;
    case 'no':
      s.STARTING_BOT_MESSAGE = 'no';
      responseMessage = " has been disabled successfully.";
      break;
    default:
      return _0x1f3eb5("Please don't invent an option. Type 'startmessage yes' or 'startmessage no'.");
  }
  try {
    const _0x344860 = {
      text: responseMessage
    };
    const _0x5d0250 = {
      quoted: _0x56a1eb
    };
    await _0x1d293e.sendMessage(_0x40477b, _0x344860, _0x5d0250);
  } catch (_0x2383c2) {
    console.error("Error processing your request:", _0x2383c2);
    const _0x2d84af = {
      text: "Error processing your request."
    };
    const _0xe30a78 = {
      quoted: _0x56a1eb
    };
    await _0x1d293e.sendMessage(_0x40477b, _0x2d84af, _0xe30a78);
  }
});
const _0x41cf76 = {
  nomCom: "readmessage",
  categorie: "Developer option"
};
zokou(_0x41cf76, async (_0x25a45f, _0x263da9, _0x16cc3e) => {
  const {
    ms: _0x26e593,
    repondre: _0x69091c,
    superUser: _0x1e1e61,
    auteurMessage: _0x3a3281,
    arg: _0xb86e51
  } = _0x16cc3e;
  if (!_0x1e1e61) {
    return _0x69091c("*This command is for the boss");
  }
  if (!_0xb86e51[0]) {
    return _0x69091c("Instructions:\n\nType \"readmessage yes\" to enable or \"readmessage no\" to disable.");
  }
  const _0x62967a = _0xb86e51.join(" ").toLowerCase();
  switch (_0x62967a) {
    case "yes":
      s.AUTO_READ_MESSAGES = "yes";
      responseMessage = " has been enabled successfully.";
      break;
    case 'no':
      s.AUTO_READ_MESSAGES = 'no';
      responseMessage = " has been disabled successfully.";
      break;
    default:
      return _0x69091c("Type 'readmessage yes' or 'readmessage no'.");
  }
  try {
    const _0x1298a5 = {
      text: responseMessage
    };
    const _0x165c40 = {
      quoted: _0x26e593
    };
    await _0x263da9.sendMessage(_0x25a45f, _0x1298a5, _0x165c40);
  } catch (_0x1cfc51) {
    console.error("Error processing your request:", _0x1cfc51);
    const _0x127812 = {
      text: "Error processing your request."
    };
    const _0x5aeab7 = {
      quoted: _0x26e593
    };
    await _0x263da9.sendMessage(_0x25a45f, _0x127812, _0x5aeab7);
  }
});
const _0x582d94 = {
  nomCom: "pm-permit",
  categorie: "Developer option"
};
zokou(_0x582d94, async (_0x1fce63, _0x4e6991, _0x5a77a6) => {
  const {
    ms: _0x1d9d0d,
    repondre: _0x36d005,
    superUser: _0x50c029,
    auteurMessage: _0x3c56b0,
    arg: _0x38bacb
  } = _0x5a77a6;
  if (!_0x50c029) {
    return _0x36d005("*This command is  for the boss");
  }
  if (!_0x38bacb[0]) {
    return _0x36d005("Instructions:\n\nType \"pm-permit yes\" to enable or \"pm-permit no\" to disable.");
  }
  const _0x53317e = _0x38bacb.join(" ").toLowerCase();
  switch (_0x53317e) {
    case "yes":
      s.PM_PERMIT = "yes";
      responseMessage = " has been enabled successfully.";
      break;
    case 'no':
      s.PM_PERMIT = 'no';
      responseMessage = " has been disabled successfully.";
      break;
    default:
      return _0x36d005("Please don't invent an option. Type 'pm-permit yes' or 'pm-permit no'.");
  }
  try {
    const _0x5c742c = {
      text: responseMessage
    };
    const _0x338b8d = {
      quoted: _0x1d9d0d
    };
    await _0x4e6991.sendMessage(_0x1fce63, _0x5c742c, _0x338b8d);
  } catch (_0x1c97eb) {
    console.error("Error processing your request:", _0x1c97eb);
    const _0x573ceb = {
      text: "Error processing your request."
    };
    const _0x583813 = {
      quoted: _0x1d9d0d
    };
    await _0x4e6991.sendMessage(_0x1fce63, _0x573ceb, _0x583813);
  }
});
const _0x5740da = {
  nomCom: "publicmode",
  categorie: "Developer option"
};
zokou(_0x5740da, async (_0x4d484b, _0x42450d, _0x311045) => {
  const {
    ms: _0x593773,
    repondre: _0x2aa60e,
    superUser: _0x3db1ed,
    auteurMessage: _0x580076,
    arg: _0x1e979d
  } = _0x311045;
  if (!_0x3db1ed) {
    return _0x2aa60e("*This command is for the boss");
  }
  if (!_0x1e979d[0]) {
    return _0x2aa60e("Instructions:\n\nType \"publicmode yes\" to enable or \"publicmode no\" to disable.");
  }
  const _0x14e82f = _0x1e979d.join(" ").toLowerCase();
  switch (_0x14e82f) {
    case "yes":
      s.PUBLIC_MODE = "yes";
      responseMessage = " has been enabled successfully.";
      break;
    case 'no':
      s.PUBLIC_MODE = 'no';
      responseMessage = " has been disabled successfully.";
      break;
    default:
      return _0x2aa60e("Type 'publicmode yes' or 'publicmode no'.");
  }
  try {
    const _0x350192 = {
      text: responseMessage
    };
    const _0x11eba7 = {
      quoted: _0x593773
    };
    await _0x42450d.sendMessage(_0x4d484b, _0x350192, _0x11eba7);
  } catch (_0x2ad8b2) {
    console.error("Error processing your request:", _0x2ad8b2);
    const _0x351f6c = {
      text: "Error processing your request."
    };
    const _0x2614f1 = {
      quoted: _0x593773
    };
    await _0x42450d.sendMessage(_0x4d484b, _0x351f6c, _0x2614f1);
  }
});
const _0x22bac6 = {
  nomCom: "virtualrec",
  categorie: "Developer option"
};
zokou(_0x22bac6, async (_0x5dcc4e, _0x469953, _0x4c269d) => {
  const {
    ms: _0x1c2c26,
    repondre: _0x170d30,
    superUser: _0x5a0edd,
    auteurMessage: _0x228b3b,
    arg: _0x1014f0
  } = _0x4c269d;
  if (!_0x5a0edd) {
    return _0x170d30("*This command is for the boss");
  }
  if (!_0x1014f0[0]) {
    return _0x170d30("Instructions:\n\nType \"autorecord yes\" to enable or \"autorecord no\" to disable.");
  }
  const _0x58b907 = _0x1014f0.join(" ").toLowerCase();
  switch (_0x58b907) {
    case "yes":
      s.PRESENCE = '3';
      responseMessage = " has been enabled successfully.";
      break;
    case 'no':
      s.PRESENCE = 'no';
      responseMessage = " has been disabled successfully.";
      break;
    default:
      return _0x170d30("Please don't invent an option. Type 'autorecord yes' or 'autorecord no'.");
  }
  try {
    const _0x266ec8 = {
      text: responseMessage
    };
    const _0x265f0a = {
      quoted: _0x1c2c26
    };
    await _0x469953.sendMessage(_0x5dcc4e, _0x266ec8, _0x265f0a);
  } catch (_0x543ac2) {
    console.error("Error processing your request:", _0x543ac2);
    const _0x2efe57 = {
      text: "Error processing your request."
    };
    const _0x42ebfb = {
      quoted: _0x1c2c26
    };
    await _0x469953.sendMessage(_0x5dcc4e, _0x2efe57, _0x42ebfb);
  }
});
const _0x1671f4 = {
  nomCom: "autotyping",
  categorie: "Developer option"
};
zokou(_0x1671f4, async (_0x2b753d, _0x17ba3d, _0x4a9a88) => {
  const {
    ms: _0x2ab17b,
    repondre: _0x2cbf8d,
    superUser: _0x4330c0,
    auteurMessage: _0x57a76f,
    arg: _0xe5b31f
  } = _0x4a9a88;
  if (!_0x4330c0) {
    return _0x2cbf8d("*This command is for the boss");
  }
  if (!_0xe5b31f[0]) {
    return _0x2cbf8d("Instructions:\n\nType \"autotyping yes\" to enable or \"autotyping no\" to disable.");
  }
  const _0x378e21 = _0xe5b31f.join(" ").toLowerCase();
  switch (_0x378e21) {
    case "yes":
      s.PRESENCE = '2';
      responseMessage = " has been enabled successfully.";
      break;
    case 'no':
      s.PRESENCE = 'no';
      responseMessage = " has been disabled successfully.";
      break;
    default:
      return _0x2cbf8d("Please don't invent an option. Type 'autotyping yes' or 'autotyping no'.");
  }
  try {
    const _0x54adfd = {
      text: responseMessage
    };
    const _0x2388f2 = {
      quoted: _0x2ab17b
    };
    await _0x17ba3d.sendMessage(_0x2b753d, _0x54adfd, _0x2388f2);
  } catch (_0xe73f01) {
    console.error("Error processing your request:", _0xe73f01);
    const _0x845fa2 = {
      text: "Error processing your request."
    };
    const _0xb4d2fa = {
      quoted: _0x2ab17b
    };
    await _0x17ba3d.sendMessage(_0x2b753d, _0x845fa2, _0xb4d2fa);
  }
});
const _0x57c7b5 = {
  nomCom: "alwaysonline",
  categorie: "Developer option"
};
zokou(_0x57c7b5, async (_0xd8adbf, _0x4d033b, _0x144f5e) => {
  const {
    ms: _0x42f008,
    repondre: _0x403b76,
    superUser: _0x48e19c,
    auteurMessage: _0x2c6bb7,
    arg: _0x4130f
  } = _0x144f5e;
  if (!_0x48e19c) {
    return _0x403b76("*This command is for the boss");
  }
  if (!_0x4130f[0]) {
    return _0x403b76("Instructions:\n\nType \"alwaysonline yes\" to enable or \"alwaysonline no\" to disable.");
  }
  const _0x24492e = _0x4130f.join(" ").toLowerCase();
  switch (_0x24492e) {
    case "yes":
      s.PRESENCE = '1';
      responseMessage = " has been enabled successfully.";
      break;
    case 'no':
      s.PRESENCE = 'no';
      responseMessage = " has been disabled successfully.";
      break;
    default:
      return _0x403b76("Type 'alwaysonline yes' or 'alwaysonline no'.");
  }
  try {
    const _0x303c40 = {
      text: responseMessage
    };
    const _0x359dbd = {
      quoted: _0x42f008
    };
    await _0x4d033b.sendMessage(_0xd8adbf, _0x303c40, _0x359dbd);
  } catch (_0xf7e581) {
    console.error("Error processing your request:", _0xf7e581);
    const _0x4377a8 = {
      text: "Error processing your request."
    };
    const _0x5f5dfd = {
      quoted: _0x42f008
    };
    await _0x4d033b.sendMessage(_0xd8adbf, _0x4377a8, _0x5f5dfd);
  }
});
function _0x3e6a25(_0x54e971, _0x43e3e9, _0x322650, _0x410b92, _0x3e46a6) {
  return _0x13b2(_0x410b92 - 0x36a, _0x3e46a6);
}
function _0x18f101(_0xe10d5, _0x10bd49, _0xb197a4, _0x1d6e0d, _0x482f74) {
  return _0x13b2(_0xe10d5 + 0x2fe, _0x1d6e0d);
}
function _0x4b0503(_0x5c5545, _0x1176fe, _0x315834, _0x1038a2, _0x169e11) {
  return _0x13b2(_0x5c5545 + 0x306, _0x1038a2);
}
const _0x3b5fb1 = {
  nomCom: "privatemode",
  categorie: "Developer option"
};
zokou(_0x3b5fb1, async (_0x2be846, _0x2eb10e, _0x129c10) => {
  const {
    ms: _0x419413,
    repondre: _0xf47818,
    superUser: _0x18aa3c,
    auteurMessage: _0x13f7c8,
    arg: _0x10657e
  } = _0x129c10;
  if (!_0x18aa3c) {
    return _0xf47818("*This command is for the boss");
  }
  if (!_0x10657e[0]) {
    return _0xf47818("Instructions:\n\nType \"privatemode yes\" to enable or \"privatemode no\" to disable.");
  }
  const _0x16d77f = _0x10657e.join(" ").toLowerCase();
  switch (_0x16d77f) {
    case "yes":
      s.PUBLIC_MODE = 'no';
      responseMessage = " has been enabled successfully.";
      break;
    case 'no':
      s.PUBLIC_MODE = "yes";
      responseMessage = " has been disabled successfully.";
      break;
    default:
      return _0xf47818("Type 'privatemode yes' or 'privatemode no'.");
  }
  try {
    const _0x142172 = {
      text: responseMessage
    };
    const _0x36393e = {
      quoted: _0x419413
    };
    await _0x2eb10e.sendMessage(_0x2be846, _0x142172, _0x36393e);
  } catch (_0x437e77) {
    console.error("Error processing your request:", _0x437e77);
    const _0x4a4f61 = {
      text: "Error processing your request."
    };
    const _0x1f7b3a = {
      quoted: _0x419413
    };
    await _0x2eb10e.sendMessage(_0x2be846, _0x4a4f61, _0x1f7b3a);
  }
});
function _0x562b01(_0x442533) {
  function _0x1d8227(_0x23769a) {
    if (typeof _0x23769a === "string") {
      return function (_0x2af552) {}.constructor("while (true) {}").apply("counter");
    } else if (('' + _0x23769a / _0x23769a).length !== 1 || _0x23769a % 20 === 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    _0x1d8227(++_0x23769a);
  }
  try {
    if (_0x442533) {
      return _0x1d8227;
    } else {
      _0x1d8227(0);
    }
  } catch (_0x5a0acc) {}
}
