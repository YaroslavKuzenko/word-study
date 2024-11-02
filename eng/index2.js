const btn = document.querySelector('#btn');
const btnBox = document.querySelector('#btn-container');
const content = document.querySelector('#words');
const counter = document.querySelector('#counter');
const time = document.querySelector('#timer');
const trans = document.querySelector('#trans');
const header = document.querySelector('#header');
const box = document.querySelector('#box');

var ukrIm = ['час', 'інформація', 'люди', 'річ', 'спільнота', 'чоловік', 'жінка', 'шлях', 'життя', 'дитина', 'світ', 'школа', 'держава', 'родина', 'студент', 'група', 'країна', 'проблема', 'рука', 'частина', 'місце', 'справа', 'тиждень', 'компанія', 'система', 'прогама', 'запитання', 'робота', 'уряд', 'число', 'ніч', 'точка', 'дім', 'вода', 'кімната', 'матір', 'площа', 'гроші', 'історія', 'факт', 'місяць', 'багато', 'правильно', 'вивчення', 'книга', 'око', 'робота', 'слово', 'бізнес', 'випуск', 'сторона', 'доброзичливий', 'голова', 'дім', 'сервіс', 'друг', 'батько', 'сила', 'година', 'гра', 'лінія', 'кінець', 'учасник', 'закон', 'машина', 'місто', 'день', 'ім’я', 'президент', 'команда', 'хвилина', 'ідея', 'дитина', 'тіло', 'рік', 'назад', 'батьки', 'обличчя', 'інші', 'рівень', 'офіс', 'двері', 'здоров’я', 'особистість', 'мистецтво', 'війна', 'історія', 'вечірка', 'результат', 'зміна', 'ранок', 'причина', 'дослідження', 'дівчина', 'хлопець', 'момент', 'повітря', 'вчитель', 'сила', 'освіта'];
var engIm = ['time', 'information', 'people', 'thing', 'community', 'man', 'woman', 'way', 'life', 'child', 'world', 'school', 'state', 'family', 'student', 'group', 'country', 'problem', 'hand', 'part', 'place', 'case', 'week', 'company', 'system', 'program', 'question', 'work', 'government', 'number', 'night', 'point', 'home', 'water', 'room', 'mother', 'area', 'money', 'story', 'fact', 'month', 'lot', 'right', 'study', 'book', 'eye', 'job', 'word', 'business', 'issue', 'side', 'kind', 'head', 'house', 'service', 'friend', 'father', 'power', 'hour', 'game', 'line', 'end', 'member', 'law', 'car', 'city', 'day', 'name', 'president', 'team', 'minute', 'idea', 'kid', 'body', 'year', 'back', 'parent', 'face', 'others', 'level', 'office', 'door', 'health', 'person', 'art', 'war', 'history', 'party', 'result', 'change', 'morning', 'reason', 'research', 'girl', 'guy', 'moment', 'air', 'teacher', 'force', 'education'];
var ukrDie = ['бути', 'мати', 'робити', 'казати', 'йти', 'могти', 'отримувати', 'би', 'робити', 'знати', 'бажати', 'думати', 'брати', 'бачити', 'приходити', 'могти', 'хотіти', 'дивитися', 'використовувати', 'знаходити', 'діставати', 'казати', 'працювати', 'могти', 'повинен', 'дзвонити', 'пробувати', 'запитувати', 'потребувати', 'почувати', 'ставати', 'залишати', 'класти', 'означати', 'зберігати', 'дозволяти', 'починати', 'здається', 'допомагати', 'говорити', 'повернути', 'почати', 'могти', 'показувати', 'чути', 'грати', 'бігти', 'рухатися', 'подобатися', 'жити', 'вірити', 'триматися', 'приносити', 'траплятися', 'мусити', 'писати', 'забезпечити', 'сидіти', 'стояти', 'програвати', 'платити', 'зустрічати', 'включати', 'продовжувати', 'встановлювати', 'вивчати', 'міняти', 'приводити', 'розуміти', 'дивитися', 'наслідувати', 'зупиняти', 'творити', 'говорити', 'читати', 'дозволяти', 'додавати', 'витратити', 'рости', 'відкривати', 'гуляти', 'перемагати', 'пропонувати', 'пам’ятати', 'любити', 'розглянути', 'з’являтися', 'купити', 'чекати', 'служити', 'помирати', 'відправити', 'очікувати', 'будувати', 'залишатися', 'падати', 'різати', 'досягати', 'вбивати', 'залишатися'];
var engDie = ['be', 'have', 'do', 'say', 'go', 'can', 'get', 'would', 'make', 'know', 'will', 'think', 'take', 'see', 'come', 'could', 'want', 'look', 'use', 'find', 'give', 'tell', 'work', 'may', 'should', 'call', 'try', 'ask', 'need', 'feel', 'become', 'leave', 'put', 'mean', 'keep', 'let', 'begin', 'seem', 'help', 'talk', 'turn', 'start', 'might', 'show', 'hear', 'play', 'run', 'move', 'like', 'live', 'believe', 'hold', 'bring', 'happen', 'must', 'write', 'provide', 'sit', 'stand', 'lose', 'pay', 'meet', 'include', 'continue', 'set', 'learn', 'change', 'lead', 'understand', 'watch', 'follow', 'stop', 'create', 'speak', 'read', 'allow', 'add', 'spend', 'grow', 'open', 'walk', 'win', 'offer', 'remember', 'love', 'consider', 'appear', 'buy', 'wait', 'serve', 'die', 'send', 'expect', 'build', 'stay', 'fall', 'cut', 'reach', 'kill', 'remain'];
var ukrPryk = ['інші', 'міжнародний', 'добре', 'високий', 'старий', 'чудово', 'великий', 'американець', 'маленький', 'великий', 'національний', 'молодий', 'різні', 'чорний', 'довгий', 'маленький', 'важливий', 'політичний', 'поганий', 'білий', 'реальний', 'найкраще', 'правий', 'соціальний', 'тільки', 'публічно', 'впевнено', 'низький', 'рано', 'здатний', 'людина', 'місцевий', 'пізно', 'тяжко', 'важливіший', 'краще', 'економний', 'сильний', 'можливий', 'цілий', 'вільний', 'військовий', 'правдивий', 'федеральний', 'новий', 'повний', 'спеціальний', 'легкий', 'чистий', 'нещодавно', 'певний', 'персональний', 'відкритий', 'червоний', 'важкий', 'доступний', 'швидшезавсе', 'короткий', 'одинокий', 'медичний', 'сучасний', 'хибний', 'приватний', 'минулий', 'іноземний', 'добре', 'загальний', 'бідний', 'природній', 'значний', 'подібний', 'гарячий', 'мертвий', 'центральний', 'щасливий', 'серйозний', 'готовий', 'простий', 'залишений', 'фізичний', 'загальний', 'екологічний', 'фінансовий', 'синій', 'демократичний', 'темний', 'різноманітний', 'цілком', 'закритий', 'законний', 'релігійний', 'холодний', 'фінальний', 'головний', 'зелений', 'хороший', 'великий', 'популярний', 'традиційний', 'культурний'];
var engPryk = ['other', 'international', 'good', 'high', 'old', 'great', 'big', 'American', 'small', 'large', 'national', 'young', 'different', 'black', 'long', 'little', 'important', 'political', 'bad', 'white', 'real', 'best', 'right', 'social', 'only', 'public', 'sure', 'low', 'early', 'able', 'human', 'local', 'late', 'hard', 'major', 'better', 'economic', 'strong', 'possible', 'whole', 'free', 'military', 'true', 'federal', 'new', 'full', 'special', 'easy', 'clear', 'recent', 'certain', 'personal', 'open', 'red', 'difficult', 'available', 'likely', 'short', 'single', 'medical', 'current', 'wrong', 'private', 'past', 'foreign', 'fine', 'common', 'poor', 'natural', 'significant', 'similar', 'hot', 'dead', 'central', 'happy', 'serious', 'ready', 'simple', 'left', 'physical', 'general', 'environmental', 'financial', 'blue', 'democratic', 'dark', 'various', 'entire', 'close', 'legal', 'religious', 'cold', 'final', 'main', 'green', 'nice', 'huge', 'popular', 'traditional', 'cultural'];
var ukrPop = ['бути', 'там', 'зараз', 'від', 'би', 'потім', 'до', 'все', 'ніж', 'артикль', 'ті', 'воно', 'і', 'що', 'лише', 'це', 'якщо', 'прийти', 'в', 'вгору', 'дивитися', 'артикль', 'вийти', 'над', 'мати', 'отже', 'після', 'я', 'йти', 'також', 'ти', 'хто', 'повернутися', 'котрий', 'йти', 'як', 'для', 'котрий', 'використовувати', 'на', 'про', 'два', 'не', 'могти', 'думати', 'він', 'коли', 'наше', 'як', 'мені', 'добре', 'воно', 'робити', 'перший', 'робити', 'подобатись', 'шлях', 'в', 'час', 'робота', 'це', 'знати', 'тому,що', 'по', 'лише', 'новий', 'її', 'його', 'хотіти', 'але', 'ні', 'навіть', 'з', 'брати', 'день', 'казати', 'люди', 'ці', 'ми', 'твій', 'дати', 'вони', 'рік', 'будь-який', 'його', 'в', 'більш', 'вона', 'добре', 'ми', 'моє', 'їх', 'так', 'могти', 'бажати', 'дещо', 'або', 'бачити', 'один', 'інший'];
var engPop = ['be', 'there', 'now', 'of', 'would', 'then', 'to', 'all', 'than', 'the', 'those', 'it', 'and', 'what', 'only', 'that', 'if', 'come', 'in', 'up', 'look', 'a', 'out', 'over', 'have', 'so', 'after', 'I', 'go', 'also', 'you', 'who', 'back', 'with', 'go', 'how', 'for', 'which', 'use', 'on', 'about', 'two', 'not', 'can', 'think', 'he', 'when', 'our', 'as', 'me', 'well', 'it', 'make', 'first', 'do', 'like', 'way', 'at', 'time', 'work', 'this', 'know', 'because', 'by', 'just', 'new', 'her', 'him', 'want', 'but', 'no', 'even', 'from', 'take', 'day', 'say', 'people', 'these', 'we', 'your', 'give', 'they', 'year', 'any', 'his', 'into', 'most', 'she', 'good', 'us', 'my', 'them', 'yes', 'could', 'will', 'some', 'or', 'see', 'one', 'other'];
var ukrMind = ['я сильно вірю що', 'на мою думку', 'наскільки я це розумію', 'перше що потрібно розглянути ', 'з моєї точки зору', 'мені здається що ', 'як я це бачу', 'виявляється що', 'відповідно до мого переконання', 'я думаю', 'я вважаю', 'так як я думаю', 'я розумію', 'я відчуваю', 'я усвідомлюю ', 'я уявляю'];
var engMind = ['I strongly believe that', 'To my mind, in my opinion, in my view', 'As I see it', 'The first thing to be considered is', 'From my point of view', 'It seems to me that', 'From my perspective', 'It appears that', 'According to me', 'To me, I think', 'I believe, I suppose', 'To my way of thinking', 'I understand', 'I feel', 'I realize', 'I imagine'];
var ukrComp = ['схоже на ', 'спільно ', 'або… або… ', 'ні…. ні…', 'такий як ', 'також ', 'однаково ', 'водночас ', 'нагадуючи ', 'саме, точно'];
var engComp = ['Similar to', 'In common', 'Either…or', 'Neither…nor', 'As…as', 'Also', 'In the same way', 'At the same time', 'Resemble', 'Just as'];
var ukrTime = ['спершу, спочатку', 'по-друге', 'по-третє', 'упродовж ', 'для початку', 'наприкінці', 'тоді', 'спершу', 'раніше', 'пізніше', 'одночасно', 'з тих пір, як', 'у той час, як', 'водночас', 'після цього/того', 'тим часом, між', 'слідом за', 'як тільки, щойно', 'згодом', 'коли'];
var engTime = ['Firstly', 'Secondly', 'Thirdly', 'During', 'To begin with', 'Lastly', 'Then', 'First of all', 'Before', 'After', 'Simultaneously', 'Since', 'While', 'At the same time', 'After this/that', 'Meanwhile', 'Following this', 'As soon as', 'Afterwards', 'When'];

var ukrWords = [];
var engWords = [];
var cnt = 0;
var index = [];
// масив із використаними індексами

function random(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return rand;
}
;
function createWord(t) {
    btn.addEventListener('click', () => {
        var bool = false;
        while (bool === false && index.length !== ukrWords.length) {
            //із створеного масиву вибирається випадковело слово
            var wordIndex = random(ukrWords);
            if (index.indexOf(wordIndex) === -1) {
                bool = true;
                index.push(wordIndex);
            }
            ;
        }
        ;
        if (cnt < ukrWords.length || cnt === 0) {
            //змінюються слова та рахунок
            content.textContent = ukrWords[wordIndex];
            trans.textContent = "";
            time.textContent = t;
            btnBox.style.opacity = 0;
            btn.disabled = true;

            setTimeout(timer, 1000);
            cnt++;
            counter.textContent = cnt + ' / ' + ukrWords.length;

            if (cnt === ukrWords.length) {
                //змінюємо кнопку на кнопку-перезавантаження сторінки
                btn.textContent = 'Розпочати знову';
                btn.addEventListener('click', () => {
                    location.reload();
                }
                );
            }
        }

        function timer() {
            time.innerHTML--;
            if (time.innerHTML === '0') {
                trans.textContent = engWords[wordIndex];
                btnBox.style.opacity = 1;
                btn.disabled = false;
                setTimeout( () => {}
                , 1000);
            } else {
                setTimeout(timer, 1000);
            }
            ;
        }
        ;
    }
    );
}
;
function promChek(text, num) {
    var value = Number(prompt(text, num));
    while (isNaN(value) || value === 0) {
        value = Number(prompt(text, num));
    }
    return value;
}
;
function createArray(ukr, eng) {
    if (ukr.length >= 20) {
        var numOfWords = promChek('Кількість слів (max: ' + ukr.length + '):', 25);
    } else {
        numOfWords = ukr.length;
    }

    var num = random(ukr);
    while (num + numOfWords > ukr.length) {
        num = random(ukr);
    }

    ukrWords = ukr.slice(num, num + numOfWords);
    engWords = eng.slice(num, num + numOfWords);
}

function boss() {
    var chastMovy = promChek('Частини мови:\n1 - іменник\n2 - дієслова\n3 - прикметник\n\nІнше:\n4 - найпопулярніші слова\n5 - висловлювання думки\n6 - порівняння\n7 - позначаючи час', 2);
    var t = promChek('Час на згадування перекладу:', 3);
    time.textContent = t;

    switch (chastMovy) {
    case 1:
        createArray(ukrIm, engIm);
        break;
    case 2:
        createArray(ukrDie, engDie);
        break;
    case 3:
        createArray(ukrPryk, engPryk);
        break;
    case 4:
        createArray(ukrPop, engPop);
        break;
    case 5:
        createArray(ukrMind, engMind);
        break;
    case 6:
        createArray(ukrComp, engComp);
        break;
    case 7:
        createArray(ukrTime, engTime);
        break;
    }

    header.style.opacity = 1;
    createWord(t);
    btn.dispatchEvent(click);
}

// ***************************************

var click = new Event('click');

window.addEventListener('load', () => {
    boss();
}
);
