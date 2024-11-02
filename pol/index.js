const btn = document.querySelector('#btn');
const btnBox = document.querySelector('#btn-container');
const content = document.querySelector('#words');
const counter = document.querySelector('#counter');
const time = document.querySelector('#timer');
const trans = document.querySelector('#trans');
const header = document.querySelector('#header');
const box = document.querySelector('#box');

var ukrIm = ['Ранок', 'День', 'Ніч', 'Вечір', 'Час', 'Рік', 'Час', 'Місяць', 'Тиждень', 'Хвилина', 'Питання', 'Відповідь', 'Зустріч', 'Річ (штука)', 'Голова', 'Рука', 'Нога', 'Очі', 'Голос', 'Місто', 'Країна', 'Вулиця', 'Площа', 'Проспект', 'Місце', 'Світ', 'Гроші', 'Родич', "Сім'я", 'Дитина', 'Дівчинка', 'Хлопчик', 'Чоловік', 'Жінка', 'Дівчина', 'Молода людина, хлопець', 'Чоловік', 'Дружина', 'Людина', 'Люди', 'Народ', 'Будинок', 'Дорога', 'Друг', 'Подруга', 'Дочка', 'Син', 'Брат', 'Сестра', 'Батько', 'Мати', 'Звук', 'Їжа', 'Вода', 'Життя', 'Земля', 'Небо', 'Сонце', 'Гра', "Ім'я", 'Квартира', 'Картина', 'Ключ', 'Книга', 'Кімната', 'Шматок', 'Частина', 'Магазин', 'Машина', 'Новини', 'Ручка', 'Олівець', 'Папір', 'Одяг', 'Взуття', 'Помилка', 'Пісня', 'Музика', 'Погода', 'Допомога', 'Причина', 'Подорож', 'Робота', 'Слово', 'Спосіб', 'Сумка', 'Світло (освітлення)', 'Ціна', 'Колір', 'Годинники', 'Жарт', 'Мова', 'Різниця'];
var polIm = ['rano / рано', 'dzień / джєнь', 'noc / ноц', 'wieczór / вєчур', 'czas / час', 'rok / рок', 'godzina / ґодзіна', 'miesiąc / мєсьонц', 'tydzień / тидзєнь', 'minuta / мінута', 'pytanie / питанє', 'odpowiedź / одповєдзь', 'spotkanie / спотканє', 'rzecz / жеч', 'głowa / ґўова', 'ręka / ренка', 'noga / ноґа', 'oczy / очи', 'głos / ґўос', 'miasto / място', 'kraj / край', 'ulica / уліца', 'plac / пляц', 'prospekt / проспект', 'miejsce / мєйсце', 'świat / свят', 'pieniądze / пєньондзе', 'krewny / кревни', "rodzina / родзіна", 'dziecko / дзєцко', 'dziewczynka / дзєвчінка', 'chłopiec / хўопєц', 'mężczyzna, pan / менжчизна, пан', 'kobieta, pani / кобєта, пані', 'dziewczyna, pani / дзєвчіна, пані', 'młodzieniec, chłopak / мўодзєнєц, хўопак', 'mąż / монж', 'żona / жона', 'człowiek / чўовєк', 'ludzie / людзє', 'naród, nacja / наруд, нацья', 'dom / дом', 'droga / дроґа', 'przyjaciel / пшиячєль', 'przyjaciółka / пшиячуўка', 'córka / цурка', 'syn / син', 'brat / брат', 'siostra / сьостра', 'ojciec / ойчец', 'matka / матка', 'dźwięk / дзвєнк', 'jedzenie / єдзенє', 'woda / вода', 'życie / жичє', 'ziemia / зємя', 'niebo / нєбо', 'słońce / сўоньце', 'gra / ґра', "imię / імє", 'mieszkanie / мєшканє', 'obraz / образ', 'klucz / ключ', 'książka / ксьонжка', 'pokój / покуй', 'kawałek / каваўек', 'część / ченсць', 'sklep / склеп', 'samochód / самохуд', 'nowości / новосьці', 'długopis / дўуґопіс', 'ołówek / оўувек', 'papier / папєр', 'ubranie / убранє', 'buty / бути', 'błąd / бўонд', 'piosenka / пьосенка', 'muzyka / музика', 'pogoda / поґода', 'pomoc / помоц', 'przyczyna, powód / пшичина, повуд', 'podróż / подруж', 'praca / праца', 'słowo (усне), wyraz (написане) / сўово, вираз', 'sposób / спосуб', 'torba, torebka / торба, торебка', ' światło / святўо', 'cena / цена', 'kolor / кольор', 'zegar, zegarek / зеґар, зеґарек', 'żart, kawał / жарт, каваў', 'język / єнзик', 'różnica / ружніца'];
var ukrPrk = ['Різний', 'Весь, цілий', 'Інший', 'Багато', 'Кожен, будь-який', 'Який', 'Такий', 'Великий (сласнозвісний)', 'Малий', 'Добрий; хороший', 'Злий; поганий', 'Лівий', 'Правий', 'Молодий', 'Старий, древній', 'Новий', 'Звичайний', 'Високий', 'Низький', 'Довгий, довгий', 'Короткий', 'Товстий', 'Худий', 'Швидкий', 'Повільний', 'Легкий', 'Важкий', 'Твердий', "М'який", 'Важкий', 'Живий', 'Мертвий', 'Повний', 'Порожній', 'Простий', 'Складний', 'Перший', 'Останній', 'Попередній', 'Наступний', 'Дешевий', 'Дорогий', 'Сильний', 'Слабкий', 'Ясний', 'Темний', 'Дурний', 'Розумний', 'Тихий', 'гучний', 'Жаркий, гарячий', 'Теплий', 'Холодний', 'гарний', "Обов'язковий", 'Потрібний', 'Важливий', 'Великий', 'Вірний, правильний', 'Веселий', 'Сумний', 'Смішний', 'голодний', 'Брудний', 'Чистий', 'Хворий', 'Здоровий', 'Відомий', 'Іноземний', 'Рідна (мова)', 'Цікавий', 'Нудний', 'Вільний', 'Спокійний', 'Дивний', 'Щасливий', 'Зрозумілий'];
var polPrk = ['różny / ружни', 'cały / цаўи', 'inny / інни', 'wielu, wiele / вєлю, вєле', 'każdy / кажди', 'jaki / які', 'taki / такі', 'wielki, duży / вєлькі, дужи', 'mały / маўи', 'dobry / добри', 'zły / зўи', 'lewy / лівий', 'prawy / прави', 'młody / мўоди', 'stary / стари', 'nowy / нови', 'zwykły, zwyczajny / звикўи, звичайни', 'wysoki / високі', 'niski / ніскі', 'długi / дўуґі', 'krótki / круткі', 'gruby / ґруби', 'chudy, szczupły / худи, щупўи', 'szybki / шибкі', 'powolny, wolny / повольни, вольни', 'lekki / леккі', 'ciężki / цєнжкі', 'twardy / тварди', 'miękki / мєнккі', 'ciężki / цєнжкі', 'żywy / живи', 'martwy / мартви', 'pełny / пеўни', 'pusty / пусти', 'prosty / прости', 'złożony / зўожони', 'pierwszy / пєрвши', 'ostatni / остатні', 'poprzedni / попшедні', 'następny / настемпни', 'tani / тані', 'drogi / дроґі', 'silny / сільни', 'słaby / сўаби', 'jasny / ясни', 'ciemny / чємни', 'głupi / ґўупі', 'mądry / мондри', 'cichy / ціхи', 'głośny / ґўосьни', 'gorący / ґоронци', 'ciepły / чєпўи', 'chłodny (прохолодний), zimny (холодний) / хўодни, зімни', 'ładny, piękny (про чоловіків - przystojny) / ўадни, пєнкни, пшистойни', 'konieczny / конєчни', 'potrzebny / потшебни', 'ważny / важни', 'wielki / вєлькі', 'poprawny / поправни', 'wesoły / весоўи', 'smutny / смутни', 'zabawny, śmieszny / забавни, смєшни', 'głodny / ґўодни', 'brudny / брудни', 'czysty / чисти', 'chory / хори', 'zdrowy / здрови', 'znany / знани', 'zagraniczny / заґранічни', 'ojczysty / ойчисти', 'ciekawy, interesujący / чєкави, інтересуйонци', 'nudny / нудни', 'wolny / вольни', 'spokojny / спокойни', 'dziwny / дзівни', 'szczęśliwy / щенсліви', 'jasny, zrozumiały / ясни, зрозумяўи'];
var ukrPrs = ['Дуже', 'Добре', 'Погано', 'Багато', 'Мало', 'Трохи', 'Більше', 'Менше', 'Швидко', 'Довго', 'Близько', 'Далеко', 'Скрізь', 'Завжди', 'Зверху', 'Знизу', 'Вниз', 'Вгору', 'Вище', 'Нижче', 'Додому', 'Будинки', 'Досить, вистачить', 'Сьогодні', 'Вчора', 'Завтра', 'Вперед', 'Позаду', 'Попереду', 'Інакше', 'Звичайно, очевидно', 'Ймовірно', 'Напевно, може бути', 'Здається', 'Зліва', 'Праворуч', 'Ліворуч', 'Направо', 'Просто', 'Складно', 'Зазвичай', 'Рідко', 'Часто', 'Іноді', 'Знову, знову', 'Потім', 'Зараз', 'Скоро', 'Майже', 'Занадто', 'Ледве', 'Тільки що', 'Повністю', 'Спочатку', 'Нарешті', 'Точно', 'Всередині', 'Зовні', 'Разом', 'Окремо']
var polPrs = ['bardzo / бардзо', 'dobrze / добже', 'źle / зле', 'dużo / дужо', 'mało / маўо', 'trochę / трохе', 'więcej / вєнцей', 'mniej / мнєй', 'szybko / шибко', 'długo / дўуґо', 'blisko / бліско', 'daleko / далеко', 'wszędzie / вшендзє', 'zawsze / завше', 'z góry, na górze / з ґури, на ґуже', 'od dołu, na dole / од доўу, на доле', 'do dołu, na dół / до доўу, на дуў', 'do góry (від низу до верху: od dołu do góry) / до ґури, од доўу до ґури', 'wyżej / вижей', 'niżej / ніжей', 'do domu / до дому', 'w domu / в дому', 'dość, wystarczy / досць, встарчи', 'dzisiaj, dziś / дзісяй, дзісь', 'wczoraj / вчорай', 'jutro / ютро', 'naprzód, do przodu / напшуд, до пшоду', 'z tyłu / з тиўу', 'z przodu / з пшоду', 'inaczej / іначей', 'oczywiście, na pewno, owszem / очивисьчє, на певно, овшем', 'prawdopodobnie / правдоподобнє', 'na pewno, może być / на певно, може биць', 'wydaje się / видає шє', 'od lewej / од левей', 'od prawej / од правей', 'w lewo / в лево', 'w prawo / в право', 'prosto / просто', 'trudno / трудно', 'zwykle / звикле', 'rzadko / жадко', 'często / ченсто', 'czasem / часем', 'znów, znowu / знув, знову', 'dalej, potem / далей, потем', 'teraz / тераз', 'wkrótce / вкрутце', 'prawie / правє', 'zbyt / збит', 'ledwo, zaledwie / ледво, заледвє', 'dopiero co / допєро цо', 'całkowicie / цаўковічє', 'najpierw / найпєрв', 'w końcu, wreszcie / в коньцу, врешчє', 'dokładnie, akurat / докўаднє, акурат', 'w środku (наріччя), wewnątrz (привід) / в сьродку, вевнонтж', 'na zewnątrz / на зевнонтш', 'razem / разем', 'oddzielnie / оддзєльнє'];
var ukrVst = ['Так', 'Ні', 'Привіт, пака', 'Привіт, добрий день', 'До побачення', 'Спасибі', 'Будь ласка', 'Вибачте', 'Ще, поки', 'Тільки (в зн. «Лише»)', 'Все', 'Все', 'Також', 'Але, проте', 'А', 'І', 'Або', 'Або ... або', 'Щоб', 'Чому', 'Як', 'Так', 'Хто', 'Ніхто', 'Ніщо', 'Що', 'Де', 'Ніде, нікуди', 'Куди', 'Туди, там', 'Сюди, тут', 'Коли', 'Ніколи', 'Тоді', 'Звідки', 'звідти; звідси', 'Чому', 'Тому', 'Тому що, бо', 'Оскільки', 'Хоча, хоча б', 'Якщо', 'Чим', 'Без', 'З', 'До', 'Після', 'На', 'В, по', 'З', 'Від', 'До', 'Під', 'Над', 'За', 'Перед', 'Між', 'Крім', 'По (по поверхні)', 'По (параметру)', 'Можливо', 'Можна', 'Не можна', 'У той час як', 'По-моєму', 'На щастя', 'На жаль', 'Швидше', 'Перш ніж', 'Незважаючи на', 'Навіть', 'Вже', 'Особливо', 'Ну', 'Блять!'];
var polVst = ['tak (jest) / так (єст)', 'nie / нє', 'cześć / чесць', 'dzień dobry / дзєнь добри', 'do widzenia, do zobaczenia / до відзеня, до зобаченя', 'dziękuję, dzięki / дзєнкує, дзєнкі', 'proszę / проше', 'przepraszam / пшепрашам', 'jeszcze / єшче', 'tylko / тилько', 'wszyscy (про чоловіків), wszystkie (про жінок, дітей) / вшисци, вшисткє', 'wszystko / вшистко', 'także, oraz ( «а також») / также, ораз', 'ale, lecz, jednak / але, леч, єднак', 'a / а', 'i / і', 'lub, albo / люб, альбо', 'ani ... ani / ані ... ані', 'żeby, aby / жеби, аби', 'dlaczego / длячеґо', 'jak / як', 'tak / так', 'kto / кто', 'nikt / нікт', 'nic / ніц', 'co / цо', 'gdzie / ґдзє', 'nigdzie / ніґдзє', 'gdzie, dokąd / ґдзє, доконд', 'tam / там', 'tutaj, tu / тутай, ту', 'kiedy / кєди', 'nigdy / ніґди', 'wtedy / втеди', 'skąd / сконд', 'stąd / стонд', 'dlaczego / длячеґо', 'więc / вєнц', 'bo / бо', 'ponieważ / понєваж', 'chociaż / хоцяж', 'jeśli / єслі', 'niż / ніж', 'bez / без', 'z / з', 'do, k (ku) / до, к (ку)', 'po / по', 'na / на', 'w (we) / в (ве)', 'z / з', 'od / од', 'k (ku), do / к (ку), до', 'pod / под', 'nad / над', 'za / за', 'przed / пшед', 'między / мєндзи', 'oprócz / опруч', 'po, / по,', 'według + Н. в. / ведўуг', 'możliwe / можліве', 'można, wolno / можна, вольно', 'nie wolno / нє вольно', 'natomiast, podczas gdy / натомяст, подчас ґди', 'według mnie / ведўуґ мнє', 'na szczęście / на щенсьчє', 'na nieszczęście, niestety / на нєщенсьчє, нєстети', 'raczej / рачей', 'zanim / занім', 'mimo, pomimo + Н. в. / мімо, помімо + Н. в.', 'nawet, aż / навет, аж', 'już / юж', 'szczególnie / щеґульнє', 'no / но', 'Kurwa! / Курва!'];
var ukrDie = ["Боятися", "Бігати", "Хворіти", "Брати", "Бути", "Цілувати", "Хотіти", "Ходити", "Захищати, Охороняти", "Радіти", "Тренуватися", "Чекати", "Відчувати", "Читати", "Дати", "Доробити", "Отримати", "Добратися", "Довідатися", "Дратувати", "Діяти", "Дякувати", "Дзвонити", "Фарбувати", "Готувати", "Грати", "Цікавитися", "Дратувати", "Їхати", "Їсти", "Їздити", "Керувати", "Кохати", "Закінчити", "Користуватися", "Коштувати", "Різати", "Купити", "Купувати", "Ловити", "Лежати", "Рахувати, Розраховувати", "Любити", "Малювати", "Хвилюватися", "Мріяти", "Мати", "Мешкати", "Могти", "Говорити", "Мусіти, Бути Змушеним", "Думати", "Написати", "Навчити", "Називатися", "Нести", "Носити", "Нудьгувати", "Віддати", "Передзвонити", "Забрати", "Відійти", "Віднайти", "Відпочивати", "Відповісти", "Надати", "Розказувати", "Організувати", "Відкрити", "Оженитися", "Курити", "Пам’ятати", "Дивитися", "Пити", "Писати", "Платити", "Планувати", "Плавати", "Одружитися", "Піднести", "Подобатися", "Подорожувати", "Піти", "Показати", "Рекомендувати", "Покласти", "Допомогти", "Подумати", "Попрости", "Потребувати", "Сказати", "Притримати", "Повторювати", "Повторити", "Пізнати, Дізнатися", "Залишитися", "Дозволити", "Працювати", "Пропонувати", "Просити"];
var polDie = ['bać się / бачь шє', 'biegać / бегачь', 'boleć / болечь', 'brać / брачь', 'być / бичь', 'całować / цаўовачь', 'chcieć / хцечь', 'chodzić / ходзічь', 'chronić / хронічь', 'cieszyć się / чєшічь шє', 'ćwiczyć / чьвічічь', 'czekać / чекачь', 'czuć / чучь', 'czytać / чітачь', 'dać / дачь', 'dokonać / доконачь', 'dostać / достачь', 'dotrzeć / дотшечь', 'dowiedzieć się / доведзечь шє', 'drażnić / дражнічь', 'działać / дзяўачь', 'dziękować / дзенковачь', 'dzwonić / дзвонічь', 'farbować / фарбовачь', 'gotować / готовачь', 'grać / грачь', 'interesować się /  інтересовачь шє', 'irytować / іритовачь', 'jechać / єхачь', 'jeść / єсчь', 'jeździć / єзьдзічь', 'kierować / кєровачь', 'kochać / кохачь', 'kończyć / коньчічь', 'korzystać / кожистачь', 'kosztować / коштовачь', 'kroić / кроічь', 'kupić / купічь', 'kupować / куповачь', 'łapać / ўапачь', 'leżeć / лежечь', 'liczyć / лічічь', 'lubić / любічь', 'malować / мальовачь', 'martwić się / мартвічь шє', 'marzyć / мажичь', 'mieć / мєчь', 'mieszkać / мєшкачь', 'móc / муц', 'mówić / мувічь', 'musieć / мусєчь', 'myśleć / мислєчь', 'napisać / напісачь', 'nauczyć / научичь', 'nazywać się / називачь шє', 'nieść / нєсчь', 'nosić / носічь', 'nudzić się / нудзічь шє', 'oddać / оддачь', 'oddzwonić / оддзвонічь', 'odebrać / одебрачь', 'odejść / одейсчь', 'odnaleźć / одналезчь', 'odpoczywać / одпочивачь', 'odpowiedzieć / одповєдзєчь', 'okazać / оказачь', 'opowiedzieć / оповєдзєчь', 'organizować / організовачь', 'otworzyć / отвожічь', 'ożenić się / оженічь шє', 'palić / палічь', 'pamiętać / паментачь', 'patrzeć / патшечь', 'pić / пічь', 'pisać / пісачь', 'płacić / плацічь', 'planować / пляновачь', 'pływać / пливачь', 'pobrać się / побрачь шє', 'podnieść / поднесчь', 'podobać się / подобачь шє', 'podróżować / подружовачь', 'pójść / пуйсчь', 'pokazać / показачь', 'polecać / полецачь', 'położyć / положічь', 'pomóc / помуц', 'pomyśleć / помислечь', 'poprosić / попросічь', 'potrzebować / потшебовачь', 'powiedzieć / поведзечь', 'powstrzymać / повстшімачь', 'powtarzać / повтажачь', 'powtórzyć / повтужічь', 'poznać / позначь', 'pozostać / позостачь', 'pozwolić / позволічь', 'pracować / працовачь', 'proponować / пропоновачь', 'prosić / просічь'];

// Frazy
var ukrOsnov = ["Вибачте (звернути увагу)", "Вибачте (просити вибачення)", "До побачення", "Бувай (прощання)", "Я не розмовляю польською [добре]", "Ви володієте українською|російською?", "Чи тут хтось розмовляє українською|англійською?", "Допоможіть!", "Обережно!", "Доброго ранку", "Доброго дня", "Добрий вечір", "Добраніч", "Я не розумію", "Де знаходиться туалет?", "Я не знаю"];
var polOsnov = ['Przepraszam / пшепрашам', 'Proszę mi wybaczyć / проше мі вибачичь', 'Do widzenia / до відзеня', 'Na razie / на ражє', "Nie mówię po polsku dobrze / нє мув'є по польску (добже)", 'Czy mówi Pan|Pani po ukraińsku|rosyjsku? / чи муві пан|пані по украіньску|росийску?', 'Czy ktoś tu mówi po ukraińsku|angielsku? / чи ктошь ту муві по украіньску|анґєльску?', 'Pomocy! / помоци!', 'Uwaga! | Ostrożnie! / уваґа! | острожнє!', 'Dzień dobry / джєнь добри', 'Dzień dobry / джєнь добри', "Dobry wieczór / добри в'єчур", 'Dobranoc / добраноц', "Nie rozumiem / нє розум'єм", 'Gdzie znajduje się toaleta? / ґджє знайдує шєу тоалєта?', "Nie wiem / нє в'єм"];
var ukrProbl = ["Відчепись!", "Не чіпай мене!", "Я викличу поліцію!", "Поліція!", "Тримайте злодія!", "Мені потрібна ваша допомога", "Це терміново!", "Я заблукав", "Я загубив свою сумку", "Я загубив свій гаманець", "Я хворий", "Я поранений", "Мені потрібен лікар", "Можна від вас подзвонити?"];
var polProbl = ['Odczep się! / одчеп шє!', 'Nie dotykaj mnie / нє дотикай мнє', "Zawołam policję! / завоўам поліц'є!", "Policja! / поліц'я!", 'Zatrzymaj złodzieja / затшимай зўоджєя', 'Potrzebuję Pana/Pani/Państwa pomocy / потшебує пана/пані/паньства помоци', 'Jest pilnie / єст пільнє', 'Zgubiłem się / зґубілем шє', 'Zgubiłem swoją torbę / зґубіўем свойо торбе', 'Zgubiłem swój portfel / зґубіўем свуй портфель', 'Jestem chory / єстем хори', 'Jestem ranny / єстем ранни', 'Potrzebuję lekarza / потшебує лєкажа', 'Mogę od Pana/Pani/Państwa zadzwonić / моґе од пана/пані/паньства задзвонічь?'];
var ukrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "30", "40", "50", "60", "70", "80", "90", "100", "150", "200", "300", "400", "500", "600", "700", "800", "900", "1000", "1 000 000", "Номер", "Половина", "Більше", "Менше"];
var polNum = ['jeden / єден', 'dwa / два', 'trzy / тши', 'cztery / чтери', 'pięć / пєньчь', 'sześć / шешчь', 'siedem / шєдем', 'osiem / ошєм', "dziewięć / джєв'єньчь", 'dziesięć / джєшєньчь', 'jedenaście / єденашьчє', 'dwanaście / дванашьчє', 'trzynaście / тшинашьчє', 'czternaście / чтернашьчє', "piętnaście / п'єнтнашьчє", 'szesnaście / шеснашьчє', 'siedemnaście / шєдемнашьчє', 'osiemnaście / ошємнашьчє', "dziewiętnaście / джєв'єнтнашьчє", 'dwadzieścia / дваджєшьчя', 'dwadzieścia jeden / дваджєшьчя єден', 'dwadzieścia dwa / дваджєшьчя два', 'dwadzieścia trzy / дваджєшьчя тши', 'trzydzieści / тшиджєшьчі', 'czterdzieści / чтерджєшьчі', "pięćdziesiąt / п'єньчьджєшьонт", 'sześćdziesiąt / шешьчьджєшьонт', 'siedemdziesiąt / шєдемджешьонт', 'osiemdziesiąt / ошємджєшьонт', "dziewięćdziesiąt / джєв'єньчьджєшьонт", 'sto / сто', "sto pięćdziesiąt / сто п'єньчьджєшьонт", "dwieście / дв'єшьчє", 'trzysta / тшиста', 'czterysta / чтериста', "pięćset / п'єньчьсет", 'sześćset / шещьчьсет', 'siedemset / шєдемсет', 'osiemset / ошємсет', "dziewięćset / джєв'єньчьсет", 'tysiąc / тишьонц', 'milion / мільон', 'numer / нумер', 'pół / пуў', "więcej / в'єнцей", 'mniej / мнєй'];
var ukrHodyna = ["Котра година?", "Половина _____", "Пˈятнадцять хвилин _____", "За пˈятнадцять (хвилин) _____", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "Полудень", "Північ"];
var polHodyna = ['Która godzina? / ктура ґоджіна', 'Pół do / пул до _____', "Piętnaście minut / п'єнтнашьчє мінут _____", "Za piętnaście (minut) / за п'єнтнашьчє (мінут)", 'pierwsza / пєрвша', 'druga / друґа', 'trzecia / тшечя', 'czwarta / чварта', 'piąta / пйонта', 'szósta / шуста', 'siódma / шюдма', 'ósma / усма', 'dziewiąta / джєвьонта', 'dziesiąta / джєшьонта', 'jedenasta / єденаста', 'dwunasta / двунаста', 'Południe / поўуднє', 'Północ / пуўноц'];
var ukrTransp = ["Скільки коштує квиток до _____?", "Один квиток до _____, будь ласка", "Куди їде цей потяг|автобус?", "Де потяг|автобус до _____?", "Цей потяг|автобус зупиняється в _____?", "Коли відходить потяг|автобус до _____?"];
var polTransp = ['Ile kosztuje bilet do _____? / ілє коштує білєт до _?', 'Jeden bilet do _____, proszę / Єден білєт до _, прошеу', 'Gdzie jedzie ten pociąg|autobus? / Гджє єджє тен почьонг|аутобус?', 'Gdzie jest pociąg|autobus do _____? / Гджє єст почьонг|аутобус до _?', 'Czy ten pociąg|autobus zatrzymuje się w _______? / Чи тен почьонг|аутобус затшимує шєу в _?', "Kiedy (o której godzinie) odjeżdża pociąg|autobus do_______? / Кєди (о ктурей годжінє) од'єжджа почьонг|аутобус до _?"];
var ukrMonth = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
var polMonth = ['Styczeń / стичень', 'Luty / люти', 'Marzec / мажец', 'Kwiecień / квєчєнь', 'Maj / май', 'Czerwiec / червєц', 'Lipiec / ліпєц', 'Sierpień / шєрпєнь', 'Wrzesień / вжешєнь', 'Październik / пажьджєрнік', 'Listopad / лістопад', 'Grudzień / ґруджєнь'];
var ukrDays = ["Сьогодні", "Вчора", "Завтра", "Післязавтра", "Цього тижня|місяця|року", "Минулого тижня|місяця|року", "Наступного тижня|місяця|року", "Понеділок", "Вівторок", "Середа", "Четвер", "Пˈятниця", "Субота", "Неділя"];
var polDays = ['Dzisiaj / джішяй', 'Wczoraj / вчорай', 'Jutro / ютро', 'pojutrze / поютше', "W tym tygodniu|miesiącu|roku / в тим тиґодню|м'єшьонцу|року", "W zeszłym tygodniu|miesiącu|roku (рідше: W minionym …) / в зешлим тиґодню|м'єшьонцу|року (в міньоним )", 'W przyszłym tygodniu|miesiącu|roku (W następnym …) / в пшишлим тиґодню|мєсьонцу|року (в настемпним)', 'Poniedziałek / понєджяўек', 'Wtorek / вторек', 'Środa / шьрода', 'Czwartek / чвартек', 'Piątek / пьонтек', 'Sobota / собота', 'Niedziela / нєджєля'];
var ukrColor = ["Чорний", "Білий", "Сірий", "Червоний", "Синій", "Блакитний", "Жовтий", "Зелений", "Помаранчевий", "Фіолетовий", "Рожевий", "Коричневий"];
var polColor = ['Czarny / чарни', "Biały / б'яви", 'Szary / шари', 'Czerwony / червони', 'Granatowy / ґранатови', "Błękitny, niebieski / бвенкітни, нєб'єскі", 'Żółty / жуўти', 'Zielony / Зєльони', 'Pomarańczowy / помараньчови', 'Fioletowy / фіолєтови', 'Różowy / ружови', 'Brązowy / бронзови'];

var ukrWords = [];
var polWords = [];
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
                trans.textContent = polWords[wordIndex];
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
function createArray(ukr, pol, poriadok) {
    if (ukr.length >= 20) {
        var numOfWords = promChek('Кількість слів (max: ' + ukr.length + '):', 15);
        var numOfWordsPrev = numOfWords;
    } else {
        numOfWords = ukr.length;
    }

    var num = random(ukr);
    while (num + numOfWords > ukr.length) {
        num = random(ukr);
    }

    ukrWords = ukr.slice(num, num + numOfWords);
    polWords = pol.slice(num, num + numOfWords);
}

function boss() {
    var chastMovy = promChek('Частини мови:\n1 - іменник\n2 - прикметник\n3 - прислівник\n4 - сполучники, вигуки\n5 - дієслова\n\nФрази:\n6 - основні\n7 - проблеми\n8 - числа\n9 - година\n10 - автобус і потяг\n11 - місяці\n12 - дні тижня\n13 - кольори', 5);
    var t = promChek('Час на згадування перекладу:', 3);
    time.textContent = t;

    switch (chastMovy) {
    case 1:
        createArray(ukrIm, polIm);
        break;
    case 2:
        createArray(ukrPrk, polPrk);
        break;
    case 3:
        createArray(ukrPrs, polPrs);
        break;
    case 4:
        createArray(ukrVst, polVst);
        break;
    case 5:
        createArray(ukrDie, polDie);
        break;

        // Frazy
    case 6:
        createArray(ukrOsnov, polOsnov);
        break;
    case 7:
        createArray(ukrProbl, polProbl);
        break;
    case 8:
        createArray(ukrNum, polNum);
        break;
    case 9:
        createArray(ukrHodyna, polHodyna);
        break;
    case 10:
        createArray(ukrTransp, polTransp);
        break;
    case 11:
        createArray(ukrMonth, polMonth);
        break;
    case 12:
        createArray(ukrDays, polDays);
        break;
    case 13:
        createArray(ukrColor, polColor);
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
