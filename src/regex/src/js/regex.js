// На '.', символы

const regex1 = str => {
  return str.match(/a.b/g);
};

const regex2 = str => {
  return str.match(/a.{2}a/g);
};

const regex3 = str => {
  return str.match(/ab[be]a/g);
};

// На '+', '*', '?', ()

const regex4 = str => {
  return str.match(/ab+a/g);
};

const regex5 = str => {
  return str.match(/ab*a/g);
};
const regex6 = str => {
  return str.match(/ab?a/g);
};
const regex7 = str => {
  return str.match(/a(b*)a/g);
};
const regex8 = str => {
  return str.match(/(ab)+/g);
};

// На экранировку

const regex9 = str => {
  return str.match(/a\.a/g);
};
const regex10 = str => {
  return str.match(/2\+3/g);
};
const regex11 = str => {
  return str.match(/2(\+)+3/g);
};
const regex12 = str => {
  return str.match(/2(\+)*3/g);
};
const regex13 = str => {
  return str.match(/\*q+\+/g);
};

// На жадность
const regex14 = str => {
  str = str.replace(/\s/g, '\n');
  str = str.replace(/^a|a$/gm, '!');
  return str.replace(/\n/g, ' ');
};

// На {}
const regex15 = str => {
  return str.match(/ab{2,4}a/g);
};
const regex16 = str => {
  return str.match(/ab{1,3}a/g);
};
const regex17 = str => {
  return str.match(/ab{4,}a/g);
};

// На \s, \S, \w, \W, \d, \D

const regex18 = str => {
  return str.match(/a\da/g);
};
const regex19 = str => {
  return str.match(/a\d+a/g);
};
const regex20 = str => {
  return str.match(/a\d*a/g);
};
const regex21 = str => {
  return str.match(/a\Db/g);
};
const regex22 = str => {
  return str.match(/a\Wb/g);
};
const regex23 = str => {
  return str.replace(/\s/g, '!');
};

// На [], '^' - не, [a-zA-Z], кириллицу

const regex24 = str => {
  return str.match(/a[b|e|x]a/g);
};
const regex25 = str => {
  return str.match(/a[b|.|+|*]a/g);
};
const regex26 = str => {
  return str.match(/a[3-7]a/g);
};
const regex27 = str => {
  return str.match(/a[a-g]a/g);
};
const regex28 = str => {
  return str.match(/a[a-fj-z]a/g);
};
const regex29 = str => {
  return str.match(/a[a-fA-Z]a/g);
};
const regex30 = str => {
  str = str.replace(/\s/g, '\n');
  return str.match(/^a[^ex]a$/gm);
};
const regex31 = str => {
  return str.match(/w[а-яёА-ЯЁ]w/g);
};

// На [a-zA-Z] и квантификаторы

const regex32 = str => {
  return str.match(/a[a-z]+a/g);
};
const regex33 = str => {
  return str.match(/a[a-zA-Z]+a/g);
};
const regex34 = str => {
  return str.match(/a[a-z0-9]+a/g);
};
const regex35 = str => {
  return str.match(/[а-яёА-ЯЁ]+/g);
};

// На '^', '$'
const regex36 = str => {
  return str.replace(/^aaa/g, '!');
};
const regex37 = str => {
  return str.replace(/aaa$/g, '!');
};

// На '|'
const regex38 = str => {
  return str.match(/a[e|x]+a/g);
};
const regex39 = str => {
  return str.match(/a[e]{2}a|a[x]+a/g);
};

// На обратный слеш \

const regex40 = str => {
  return str.replace(/a\\\\a/, '!');
};
const regex41 = str => {
  return str.replace(/a(\\\\){3}a/, '!');
};

// На экранировку посложнее
const regex42 = str => {
  return str.replace(/\/...\\\\/g, '!');
};

// На карманы при замене
const regex43 = str => {
  return str.replace(/(\w+)@(\w+)/g, '$2@$1');
};
const regex44 = str => {
  return str.replace(/(\d)/g, '$1$1');
};

// Задачи на test и match
const regex45 = str => {
  return /^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/.test(str);
};
const regex46 = str => {
  return str.match(/[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}/g);
};
const regex47 = str => {
  return /^[a-z.-_]+\.[a-z]{2,3}$/.test(str);
};
const regex48 = str => {
  return /^http:\/\/[a-z.-_\D]+\.[a-z]{2,3}$/.test(str);
};
const regex49 = str => {
  return /^(http)s?:\/\/[a-z.-_\D]+\.[a-z]{2,3}$/.test(str);
};
const regex50 = str => {
  return /^(http)s?/.test(str);
};
const regex51 = str => {
  return /\.(php|html|txt)$/.test(str);
};
const regex52 = str => {
  return /\.(jpe?g)$/.test(str);
};
const regex53 = str => {
  return /^\d{1,11}$/.test(str);
};
const regex54 = str => {
  let arr = [];
  let summ = 0;
  arr = str.match(/(\d)+/g);
  if (arr === null) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    summ += parseInt(arr[i], 10);
  }

  return summ;
};

// Задачи на replace
const regex55 = str => {
  return str.replace(/http:\/\/site\.[a-z]{2,3}/g, '<a href="http://site.ru">site.ru</a>');
};
const regex56 = str => {
  return str.replace(/\s{2,}/g, ' ');
};
const regex57 = str => {
  return str.replace(/\/\*.*?\*\//g, '');
};
const regex58 = str => {
  return str.replace(/<!--.*?-->/g, '');
};

// На позитивный и негативный просмотр
const regex59 = str => {
  return str.replace(/a{3}(?=b)/g, '!');
};
const regex60 = str => {
  return str.replace(/a{3}(?!b)/g, '!');
};

// На replace

const regex61 = str => {
  const res = str.replace(/\d+/g, a => {
    return a * a;
  });
  return res;
};
const regex62 = str => {
  const res = str.replace(/\d+(?=')/g, a => {
    return a * 2;
  });
  return res;
};
const regex63 = str => {
  return str.replace(/текст(?=\}\})/g, 'тскет');
};
const regex64 = str => {
  const res = str.replace(/(\d+)\s\+\s(\d+)\s=/g, (a, a1, a2) => {
    const res = parseInt(a1, 10) + parseInt(a2, 10);
    return a + res;
  });
  return res;
};

// Головоломки
const regex65 = str => {
  return /^(19\d\d|20\d\d|2100)$/.test(str);
};
const regex66 = str => {
  return /^(0\d|1\d|2[0-3]):([0-5]\d)$/.test(str);
};
const regex67 = str => {
  return /^(1?\d)\.([0-5]\d\s[ap]m)$/.test(str);
};
const regex68 = str => {
  return str.replace(/\W*\w*(\w)\1\w*\W*/g, ' ');
};
const regex69 = str => {
  return str.replace(/\b(\w+)\s+\1/g, '$1');
};
const regex70 = str => {
  return str.replace(/\b(\w+)\b(?:\s+\1\b)+/g, '$1');
};

module.exports = {
  regex1,
  regex2,
  regex3,
  regex4,
  regex5,
  regex6,
  regex7,
  regex8,
  regex9,
  regex10,
  regex11,
  regex12,
  regex13,
  regex14,
  regex15,
  regex16,
  regex17,
  regex18,
  regex19,
  regex20,
  regex21,
  regex22,
  regex23,
  regex24,
  regex25,
  regex26,
  regex27,
  regex28,
  regex29,
  regex30,
  regex31,
  regex32,
  regex33,
  regex34,
  regex35,
  regex36,
  regex37,
  regex38,
  regex39,
  regex40,
  regex41,
  regex42,
  regex43,
  regex44,
  regex45,
  regex46,
  regex47,
  regex48,
  regex49,
  regex50,
  regex51,
  regex52,
  regex53,
  regex54,
  regex55,
  regex56,
  regex57,
  regex58,
  regex59,
  regex60,
  regex61,
  regex62,
  regex63,
  regex64,
  regex65,
  regex66,
  regex67,
  regex68,
  regex69,
  regex70,
};
