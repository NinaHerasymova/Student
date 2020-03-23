const reg = require('./regex');

describe('regex1', function() {
  it("find strings ahb, acb, aeb in 'ahb acb aeb aeeb adcb axeb'", function() {
    assert.deepEqual(reg.regex1('ahb acb aeb aeeb asb adcb axeb'), ['ahb', 'acb', 'aeb', 'asb']);
  });
  it("find strings ahb, acb, aeb 'aeeb ahb acb aeb adcb axeb'", function() {
    assert.deepEqual(reg.regex1('ahb acb aeb aeeb adcb axeb'), ['ahb', 'acb', 'aeb']);
  });
  it("find strings ahb, acb, aeb 'aeeb a2b acb a*b adcb axeb'", function() {
    assert.deepEqual(reg.regex1('aeeb a2b acb a*b adcb axeb'), ['a2b', 'acb', 'a*b']);
  });
});
describe('regex2', function() {
  it("find strings abba, adca, abea 'aba aca aea abba adca abea'", function() {
    assert.deepEqual(reg.regex2('aba aca aea abba adca abea'), ['abba', 'adca', 'abea']);
  });
  it("find strings abba, adca, abea 'aba aca aea ab8a adca a+-a'", function() {
    assert.deepEqual(reg.regex2('aba aca aea ab8a adca a+-a'), ['ab8a', 'adca', 'a+-a']);
  });
});
describe('regex3', function() {
  it('find strings abba and abea', function() {
    assert.deepEqual(reg.regex3('aba aca aea abba adca abea'), ['abba', 'abea']);
  });
  it('find strings abba and abea', function() {
    assert.deepEqual(reg.regex3('ab4a aca aea abba ab*a abea'), ['abba', 'abea']);
  });
  it('find strings abba and abea', function() {
    assert.deepEqual(reg.regex3('abbba aca aea abba adca abea'), ['abba', 'abea']);
  });
});
describe('regex4', function() {
  it('find strings aba abba and abbba', function() {
    assert.deepEqual(reg.regex4('aa aba abba abbba abca abea'), ['aba', 'abba', 'abbba']);
  });
  it('find strings aba and abba', function() {
    assert.deepEqual(reg.regex4('aa ab++a aba ab+ba abb8ba abca abba abea'), ['aba', 'abba']);
  });
  it('find strings abba и abbba', function() {
    assert.deepEqual(reg.regex4('aa aaba abba abbba abca abea'), ['aba', 'abba', 'abbba']);
  });
});
describe('regex5', function() {
  it('find strings aa, aba, abba, abbba', function() {
    assert.deepEqual(reg.regex5('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba']);
  });
});
describe('regex6', function() {
  it('find strings aa, aba', function() {
    assert.deepEqual(reg.regex6('aa aba abba abbba abca abea'), ['aa', 'aba']);
  });
});
describe('regex7', function() {
  it('find strings aa, aba, abba, abbba', function() {
    assert.deepEqual(reg.regex7('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba']);
  });
});
describe('regex8', function() {
  it('find strings ab repeats once or more', function() {
    assert.deepEqual(reg.regex8('ab abab abab abababab abea'), [
      'ab',
      'abab',
      'abab',
      'abababab',
      'ab',
    ]);
  });
});
describe('regex9', function() {
  it('find string  a.a', function() {
    assert.deepEqual(reg.regex9('a.a aba aea'), ['a.a']);
  });
});
describe('regex10', function() {
  it('find string  2+3', function() {
    assert.deepEqual(reg.regex10('2+3 223 2223'), ['2+3']);
  });
});
describe('regex11', function() {
  it('find strings  2+3, 2++3, 2+++3', function() {
    assert.deepEqual(reg.regex11('23 2+3 2++3 2+++3 345 567'), ['2+3', '2++3', '2+++3']);
  });
});
describe('regex12', function() {
  it('find strings  23, 2+3, 2++3, 2+++3', function() {
    assert.deepEqual(reg.regex12('23 2+3 2++3 2+++3 445 677'), ['23', '2+3', '2++3', '2+++3']);
  });
});
describe('regex13', function() {
  it('find strings  *q+, *qq+, *qqq+', function() {
    assert.deepEqual(reg.regex13('*+ *q+ *qq+ *qqq+ *qqq qqq+'), ['*q+', '*qq+', '*qqq+']);
  });
});
describe('regex14', function() {
  it("replace 'a' on the ends and begins of the strings to'!'", function() {
    assert.equal(reg.regex14('aba accca azzza wwwwa'), '!b! !ccc! !zzz! wwww!');
  });
});
describe('regex15', function() {
  it('find abba, abbba, abbbba', function() {
    assert.deepEqual(reg.regex15('aa aba abba abbba abbbba abbbbba'), ['abba', 'abbba', 'abbbba']);
  });
});
describe('regex16', function() {
  it("find aba,  where 'b' is 3 or less times ", function() {
    assert.deepEqual(reg.regex16('aa aba abba abbba abbbba abbbbba'), ['aba', 'abba', 'abbba']);
  });
});
describe('regex17', function() {
  it("find aba, where 'b' is 4 or more times ", function() {
    assert.deepEqual(reg.regex17('aa aba abba abbba abbbba abbbbba'), ['abbbba', 'abbbbba']);
  });
});
describe('regex18', function() {
  it("find strings, where 'a' is on borders and there is a digit between them ", function() {
    assert.deepEqual(reg.regex18('a1a a2a a3a a4a a5a aba aca'), [
      'a1a',
      'a2a',
      'a3a',
      'a4a',
      'a5a',
    ]);
  });
});
describe('regex19', function() {
  it("find strings, where 'a' is on borders and there is a few digits between them ", function() {
    assert.deepEqual(reg.regex19('a1a a22a a333a a4444a a55555a aba aca'), [
      'a1a',
      'a22a',
      'a333a',
      'a4444a',
      'a55555a',
    ]);
  });
});
describe('regex20', function() {
  it("find strings, where 'a' is on borders and there is a few (even null) digits between them ", function() {
    assert.deepEqual(reg.regex20('aa a1a a22a a333a a4444a a55555a aba aca'), [
      'aa',
      'a1a',
      'a22a',
      'a333a',
      'a4444a',
      'a55555a',
    ]);
  });
});
describe('regex21', function() {
  it("find strings, where 'a' and 'b' are on borders and between them is some symbol(not digit)", function() {
    assert.deepEqual(reg.regex21('avb a1b a2b a3b a4b a5b abb acb'), ['avb', 'abb', 'acb']);
  });
});
describe('regex22', function() {
  it("find strings, where 'a' and 'b' are on borders and between them is some symbol(not digit, not letter)", function() {
    assert.deepEqual(reg.regex22('ave a#b a2b a$b a4b a5b a-b acb'), ['a#b', 'a$b', 'a-b']);
  });
});
describe('regex23', function() {
  it("replace all backspaces to'!'", function() {
    assert.equal(reg.regex23('ave a#b a2b a$b a4b a5b a-b acb'), 'ave!a#b!a2b!a$b!a4b!a5b!a-b!acb');
  });
});
describe('regex24', function() {
  it('find aba, aea, axa', function() {
    assert.deepEqual(reg.regex24('aba aea aca aza axa'), ['aba', 'aea', 'axa']);
  });
});
describe('regex25', function() {
  it('find aba, a.a, a+a, a*a', function() {
    assert.deepEqual(reg.regex25('aba aea aca aza axa a.a a+a a*a'), ['aba', 'a.a', 'a+a', 'a*a']);
  });
});
describe('regex26', function() {
  it('find a*a, where * - some number, 3-7', function() {
    assert.deepEqual(reg.regex26('ave a#b a2a a$b a4a a5a a-b aca'), ['a4a', 'a5a']);
  });
});
describe('regex27', function() {
  it('find a*a, where * - some letter, a-g', function() {
    assert.deepEqual(reg.regex27('ave a#b a2a a$b a4a afa aea aca'), ['afa', 'aea', 'aca']);
  });
});
describe('regex28', function() {
  it('find a*a, where * - some letter, a-f, j-z', function() {
    assert.deepEqual(reg.regex28('ava ahb axa aoa a2a a$b a4a afa aea aca'), [
      'ava',
      'axa',
      'aoa',
      'afa',
      'aea',
      'aca',
    ]);
  });
});
describe('regex29', function() {
  it('find a*a, where * - some letter, a-f, A-Z', function() {
    assert.deepEqual(reg.regex29('aVa ahb axa aOa a2a a$b a4a aFa aea aca'), [
      'aVa',
      'aOa',
      'aFa',
      'aea',
      'aca',
    ]);
  });
});
describe('regex30', function() {
  it("find a*a, where * - some symbols beside 'e' or 'x'", function() {
    assert.deepEqual(reg.regex30('aba aea aca aza axa a-a a#a'), [
      'aba',
      'aca',
      'aza',
      'a-a',
      'a#a',
    ]);
  });
});
describe('regex31', function() {
  it('find w*w, where * - some cyrillic letter', function() {
    assert.deepEqual(reg.regex31('wйw wяw wёw wqw'), ['wйw', 'wяw', 'wёw']);
  });
});
describe('regex32', function() {
  it("find a*a, where * - small latinic letters'", function() {
    assert.deepEqual(reg.regex32('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza']);
  });
});
describe('regex33', function() {
  it('find a*a, where * - some latinic letters', function() {
    assert.deepEqual(reg.regex33('aAXa aeffa aGha aza ax23a a3sSa'), [
      'aAXa',
      'aeffa',
      'aGha',
      'aza',
    ]);
  });
});
describe('regex34', function() {
  it('find a*a, where * - small latinic letters or digits', function() {
    assert.deepEqual(reg.regex34('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza', 'ax23a']);
  });
});
describe('regex35', function() {
  it('find strings with cyrillic letters', function() {
    assert.deepEqual(reg.regex35('ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'), [
      'ааа',
      'ббб',
      'ёёё',
      'ззз',
      'ййй',
      'ААА',
      'БББ',
      'ЁЁЁ',
      'ЗЗЗ',
      'ЙЙЙ',
    ]);
  });
});
describe('regex36', function() {
  it("replace first 'aaa' to '!'", function() {
    assert.equal(reg.regex36('aaa aaa aaa'), '! aaa aaa');
  });
});
describe('regex37', function() {
  it("replace last 'aaa' to '!'", function() {
    assert.equal(reg.regex37('aaa aaa aaa'), 'aaa aaa !');
  });
});

describe('regex38', function() {
  it("find a*a, where * - letters 'e' or 'x'", function() {
    assert.deepEqual(reg.regex38('aeeea aeea aea axa axxa axxxa'), [
      'aeeea',
      'aeea',
      'aea',
      'axa',
      'axxa',
      'axxxa',
    ]);
  });
});
describe('regex39', function() {
  it("find a*a, where * - letters 'e' or 'x'", function() {
    assert.deepEqual(reg.regex39('aeeea aeea aea axa axxa axxxa'), [
      'aeea',
      'axa',
      'axxa',
      'axxxa',
    ]);
  });
});
describe('regex40', function() {
  it("in string 'a\\\\a abc' replace 'aa' to '!'", function() {
    assert.equal(reg.regex40('a\\\\a abc'), '! abc');
  });
});
describe('regex41', function() {
  it("in string 'a\\\\a a\\\\\\\\a a\\\\\\\\\\\\a' replace 'a\\\\\\\\\\\\a' to '!'", function() {
    assert.equal(reg.regex41('a\\\\a a\\\\\\\\a a\\\\\\\\\\\\a'), 'a\\\\a a\\\\\\\\a !');
  });
});
describe('regex42', function() {
  it("in string 'bbb /aaa\\\\ bbb /ccc\\\\' replace '/...\\\\' to '!'", function() {
    assert.equal(reg.regex42('bbb /aaa\\\\ bbb /ccc\\\\'), 'bbb ! bbb !');
  });
});
describe('regex43', function() {
  it("in string 'aaa@bbb eee7@kkk' transform 'aaa@bbb' into 'bbb@aaa' etc", function() {
    assert.equal(reg.regex43('aaa@bbb eee7@kkk'), 'bbb@aaa kkk@eee7');
  });
});
describe('regex44', function() {
  it("in string 'a1b2c3' double each digit", function() {
    assert.equal(reg.regex44('a1b2c3'), 'a11b22c33');
  });
});
describe('regex45', function() {
  it('test for e-mail', function() {
    assert.equal(reg.regex45('mymail@mail.ua'), true);
  });
  it('test for e-mail', function() {
    assert.equal(reg.regex45('my.mail@mail.ru'), true);
  });
  it('test for e-mail', function() {
    assert.equal(reg.regex45('my-mail@mail.ru'), true);
  });
  it('test for e-mail', function() {
    assert.equal(reg.regex45('my-mail@mail.ru'), true);
  });
  it('test for e-mail', function() {
    assert.equal(reg.regex45('квеангш'), false);
  });
  it('test for e-mail', function() {
    assert.equal(reg.regex45('квеа@нгш.ytut'), false);
  });
});
describe('regex46', function() {
  it("in string 'mymail@mail.ru gfhf my.mail@mail.ru нонопнно my-mail@mail.ru апоа777рьп'", function() {
    assert.deepEqual(
      reg.regex46('mymail@mail.ru gfhf my.mail@mail.ru нонопнно my-mail@mail.ru апоа777рьп'),
      ['mymail@mail.ru', 'my.mail@mail.ru', 'my-mail@mail.ru'],
    );
  });
});
describe('regex47', function() {
  it('domen test', function() {
    assert.equal(reg.regex47('site.ru'), true);
  });
  it('domen test', function() {
    assert.equal(reg.regex47('site.riluiu'), false);
  });
  it('domen test', function() {
    assert.equal(reg.regex47('siteu'), false);
  });
  it('domen test example site_site.ua', function() {
    assert.equal(reg.regex47('site_site.ua'), true);
  });
});
describe('regex48', function() {
  it('domen test example http://site.ru', function() {
    assert.equal(reg.regex48('http://site.ru'), true);
  });
  it('domen test example http/site.ru', function() {
    assert.equal(reg.regex48('http/site.ru'), false);
  });
  it('domen test example http://sit_uue.ru', function() {
    assert.equal(reg.regex48('http://sit_uue.ru'), true);
  });
});
describe('regex49', function() {
  it('domen test example http', function() {
    assert.equal(reg.regex49('http://site.ru'), true);
  });
  it('domen test example  https', function() {
    assert.equal(reg.regex49('https://site.ru'), true);
  });
  it('domen test example  httph', function() {
    assert.equal(reg.regex49('httph://site.ru'), false);
  });
  it('domen test example  ht', function() {
    assert.equal(reg.regex49('ht/site.ru'), false);
  });
});
describe('regex50', function() {
  it('domen test example http', function() {
    assert.equal(reg.regex50('http://site.ru'), true);
  });
  it('domen test example https', function() {
    assert.equal(reg.regex50('https://site.ru'), true);
  });
  it('domen test example hhtsp', function() {
    assert.equal(reg.regex50('hhtsp://site.ru'), false);
  });
});
describe('regex51', function() {
  it("extension test 'site.txt'", function() {
    assert.equal(reg.regex51('site.txt'), true);
  });
  it("extension test 'site.html'", function() {
    assert.equal(reg.regex51('site.html'), true);
  });
  it("domen test example 'site.php'", function() {
    assert.equal(reg.regex51('site.php'), true);
  });
  it("domen test example 'html.site'", function() {
    assert.equal(reg.regex51('html.site'), false);
  });
  it("domen test example 'sitephp'", function() {
    assert.equal(reg.regex51('sitephp'), false);
  });
});
describe('regex52', function() {
  it("extension test 'jpg '", function() {
    assert.equal(reg.regex52('site.jpg'), true);
  });
  it("extension test 'jpeg'", function() {
    assert.equal(reg.regex52('site.jpeg'), true);
  });
  it("extension test 'jg'", function() {
    assert.equal(reg.regex52('site.jg'), false);
  });
  it("extension test 'jpeg' at start", function() {
    assert.equal(reg.regex52('jpeg.jg'), false);
  });
});
describe('regex53', function() {
  it("string of digits less then 12 characters, '4654'", function() {
    assert.equal(reg.regex53('4654'), true);
  });
  it("string of digits less then 12 characters, '4'", function() {
    assert.equal(reg.regex53('4'), true);
  });
  it("string of digits less then 12 characters, '46511111114'", function() {
    assert.equal(reg.regex53('46511111114'), true);
  });
  it("string of digits less then 12 characters, '465hthh4'", function() {
    assert.equal(reg.regex53('46hthh54'), false);
  });
  it("string of digits less then 12 characters, '4658888888884'", function() {
    assert.equal(reg.regex53('4658888888884'), false);
  });
  it("string of digits less then 12 characters, '4658.,.,.8884'", function() {
    assert.equal(reg.regex53('4658.,.,.8884'), false);
  });
});
describe('regex54', function() {
  it("find the summ of all the digits in 'gfg  45fg 2 5f5f n'", function() {
    assert.equal(reg.regex54('gfg  45fg 2 5f5f n'), 57);
  });
  it("find the summ of all the digits in '23 57'", function() {
    assert.equal(reg.regex54('23 57'), 80);
  });
  it("find the summ of all the digits in 'gfg  fg ff n'", function() {
    assert.equal(reg.regex54('gfg  fg ff n'), null);
  });
  it("find the summ of all the digits in '2 45 2 33'", function() {
    assert.equal(reg.regex54('2 45 2 33'), 82);
  });
  it("find the summ of all the digits in ' '", function() {
    assert.equal(reg.regex54(' '), null);
  });
});
describe('regex55', function() {
  it('replace http://site.ru to <a href="http://site.ru">site.ru</a>"', function() {
    assert.equal(reg.regex55('http://site.ru'), '<a href="http://site.ru">site.ru</a>');
  });
  it('replace  http://site.com to <a href="http://site.ru">site.ru</a>"', function() {
    assert.equal(reg.regex55('http://site.com'), '<a href="http://site.ru">site.ru</a>');
  });
  it('replace  http://site.com to <a href="http://site.com">site.com</a>"', function() {
    assert.equal(
      reg.regex55('http://site.ru 444444 http://site.ru'),
      '<a href="http://site.ru">site.ru</a> 444444 <a href="http://site.ru">site.ru</a>',
    );
  });
});
describe('regex56', function() {
  it("replace repeating backspaces to one in 'http     sit  eru'", function() {
    assert.equal(reg.regex56('http    sit  eru'), 'http sit eru');
  });
  it("replace repeating backspaces to one in 'http sit eru'", function() {
    assert.equal(reg.regex56('http sit eru'), 'http sit eru');
  });
  it("replace repeating backspaces to one in 'httpsiteru'", function() {
    assert.equal(reg.regex56('httpsiteru'), 'httpsiteru');
  });
  it("replace repeating backspaces to one in 'httpsiteru'", function() {
    assert.equal(reg.regex56('https                    iteru'), 'https iteru');
  });
});
describe('regex57', function() {
  it("delete all css comments in 'fgd fhfg /* Комментарий */ bfdb vfdb'", function() {
    assert.equal(reg.regex57('fgd fhfg /* Комментарий */ bfdb vfdb'), 'fgd fhfg  bfdb vfdb');
  });
  it("delete all css comments in 'fgd /* Комментарий */  fhfg /* Комментарий */ bfdb vfdb'", function() {
    assert.equal(
      reg.regex57('fgd /* Комментарий */ fhfg /* Комментарий */ bfdb vfdb'),
      'fgd  fhfg  bfdb vfdb',
    );
  });
});
describe('regex58', function() {
  it("delete all html comments in 'fgd fhfg <!--Комментарий --> bfdb vfdb'", function() {
    assert.equal(reg.regex58('fgd fhfg <!--Комментарий --> bfdb vfdb'), 'fgd fhfg  bfdb vfdb');
  });
  it("delete all html comments in 'fgd fhfg <!--Комментарий --> bfdb <!--Комментарий --> vfdb'", function() {
    assert.equal(
      reg.regex58('fgd fhfg <!--Комментарий --> bfdb <!--Комментарий --> vfdb'),
      'fgd fhfg  bfdb  vfdb',
    );
  });
});
describe('regex59', function() {
  it("replace 'a' to '!' in 'aaab' ", function() {
    assert.equal(reg.regex59('aaab'), '!b');
  });
  it("replace 'a' to '!' in 'aaab aab aaaab aab ", function() {
    assert.equal(reg.regex59('aaab aab aaaab aab'), '!b aab a!b aab');
  });
});
describe('regex60', function() {
  it("replace 'a' to '!' in 'aaa*', where * - some letter, not 'b', 'aaac aaab aaaan aab aal aaau' ", function() {
    assert.equal(reg.regex60('aaac aaab aaaan aab aal aaau'), '!c aaab !an aab aal !u');
  });
  it("replace 'a' to '!' in 'aaa*', where * - some letter, not 'b' , 'aac aaab aaan ab aaal'  ", function() {
    assert.equal(reg.regex60('aac aaab aaan ab aaal'), 'aac aaab !n ab !l');
  });
});
describe('regex61', function() {
  it("replace numbers to their squares '1,2,3,4' ", function() {
    assert.equal(reg.regex61('1,2,3,4'), '1,4,9,16');
  });
  it("replace numbers to their squares '10,4,15,4'", function() {
    assert.equal(reg.regex61('10,4,15,4'), '100,16,225,16');
  });
});
describe('regex62', function() {
  it("double numbers in quots, '2aaa'3'bbb'4'", function() {
    assert.equal(reg.regex62("2aaa'3'bbb'4'"), "2aaa'6'bbb'8'");
  });
  it("double numbers in quots, '2a1aa'31'bb b'4'", function() {
    assert.equal(reg.regex62("2a1aa'31'bb b'4'"), "2a1aa'62'bb b'8'");
  });
  it("double numbers in quots, '2aaa'-3'bbb'4'", function() {
    assert.equal(reg.regex62("2aaa'-3'bbb'4'"), "2aaa'-6'bbb'8'");
  });
});
describe('regex63', function() {
  it("change direction in brackets 'fd g dg {{текст}} gfd {{текст}} gd'", function() {
    assert.equal(
      reg.regex63('fd g dg {{текст}} gfd {{текст}} gd'),
      'fd g dg {{тскет}} gfd {{тскет}} gd',
    );
  });
  it("change direction in brackets ' dg {{текст}} {{текст}}gfd {{текст}} gd'", function() {
    assert.equal(
      reg.regex63(' dg {{текст}} {{текст}}gfd {{текст}} gd'),
      ' dg {{тскет}} {{тскет}}gfd {{тскет}} gd',
    );
  });
});
describe('regex64', function() {
  it("given '23 + 35 =', show the result '23 + 35 = 58'", function() {
    assert.equal(reg.regex64('23 + 35 ='), '23 + 35 =58');
  });
  it("given '83 + 315 =', show the result '83 + 315 = 398'", function() {
    assert.equal(reg.regex64('83 + 315 ='), '83 + 315 =398');
  });
});
describe('regex65', function() {
  it('estimate that year is in interval 1900 - 2100, 1852', function() {
    assert.equal(reg.regex65('1852'), false);
  });
  it('estimate that year is in interval 1900 - 2100, 1952', function() {
    assert.equal(reg.regex65('1952'), true);
  });
  it('estimate that year is in interval 1900 - 2100, 2420', function() {
    assert.equal(reg.regex65('2420'), false);
  });
});
describe('regex66', function() {
  it("estimate that time is correct (xx:xx) '12:59'", function() {
    assert.equal(reg.regex66('12:59'), true);
  });
  it("estimate that time is correct (xx:xx)  '223:41'", function() {
    assert.equal(reg.regex66('223:41'), false);
  });
  it("estimate that time is correct (xx:xx) '12.59'", function() {
    assert.equal(reg.regex66('12.59'), false);
  });
  it("estimate that time is correct (xx:xx) '12:364'", function() {
    assert.equal(reg.regex66('12:364'), false);
  });
});
describe('regex67', function() {
  it("estimate that time is correct (xx.xx am/pm) '9.59 am'", function() {
    assert.equal(reg.regex67('9.59 am'), true);
  });
  it("estimate that time is correct (xx.xx am/pm)'12.30 pm'", function() {
    assert.equal(reg.regex67('12.30 pm'), true);
  });
  it("estimate that time is correct (xx.xx am/pm)'12:30 pm'", function() {
    assert.equal(reg.regex67('12:30 pm'), false);
  });
  it("estimate that time is correct (xx.xx am/pm)'12.80 pm'", function() {
    assert.equal(reg.regex67('12.80 pm'), false);
  });
  it("estimate that time is correct (xx.xx am/pm)'12.020 pm'", function() {
    assert.equal(reg.regex67('12.020 pm'), false);
  });
});
describe('regex68', function() {
  it("delete all repeatable words with one-by-one letters 'hjjj jhjl hhv'", function() {
    assert.equal(reg.regex68('hjjj jhjl hhv'), ' jhjl ');
  });
  it("delete all repeatable words with one-by-one letters 'hjjj yuyl hhv'", function() {
    assert.equal(reg.regex68('hjjj yuyl 25 hhv'), ' yuyl 25 ');
  });
});
describe('regex69', function() {
  it("delete all repeatable words 'hjjj ghg ghg hhv'", function() {
    assert.equal(reg.regex69('hjjj ghg ghg hhv'), 'hjjj ghg hhv');
  });
  it("delete all repeatable words 'hjjj wewew wewew hhv'", function() {
    assert.equal(reg.regex69('hjjj wewew wewew hhv'), 'hjjj wewew hhv');
  });
});
describe('regex70', function() {
  it("delete all repeatable words 'hjjj ghg ghg ghg hhv'", function() {
    assert.equal(reg.regex70('hjjj ghg ghg ghg hhv'), 'hjjj ghg hhv');
  });
  it("delete all repeatable words 'hjjj wewew wewew wewew hhv'", function() {
    assert.equal(reg.regex70('hjjj wewew wewew wewew hhv'), 'hjjj wewew hhv');
  });
});
