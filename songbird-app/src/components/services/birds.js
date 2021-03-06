const birdsData = [
  [       
    {
      id: 1,
      name: 'Гобой',
      species: 'Oboe',
      description: 'Гобой считается одним из самых сложных духовых инструментов, поскольку игра на нем требует особого мастерства. Известен с 17 в.Тембр гобоя обладает особой и легко узнаваемой индивидуальностью за счет теплого и насыщенного звучания и необычного «гнусавого» оттенка, напоминающего звук пастушьей дудочки.',
      image: 'https://i.ibb.co/Nt8kcKh/oboe.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/wind/oboe.mp3'
    },
    {
      id: 2,
      name: 'Кларнет',
      species: 'Сlarinet ',
      description: 'Кларнет был изобретён около 1700 года в Нюрнберге.Свое имя кларнет получил за счет пронзительного звучания в верхних регистрах, которое напоминало звук трубы, ведь в переводе его название означает «маленькая труба».',
      image: 'https://i.ibb.co/gF3Y1xV/clarinet.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/wind/clarinet.mp3'
    },
    {
      id: 3,
      name: 'Флейта',
      species: 'Flute',
      description: 'Виртуозный инструмент с легким, воздушным, как бы «порхающим» звуком, напоминающим пение птиц, относится к группе деревянных духовых. Согласно древнегреческим мифам его изобретение - заслуга сына Гефеста – Ардала.',
      image: 'https://i.ibb.co/DfkZ8bT/flute.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/wind/flute.mp3'
    },
    {
      id: 4,
      name: 'Саксофон',
      species: 'Saxophone',
      description: 'Саксофон - инструмент для души, как его называют многие меломаны. Звукообразующий элемент на инструменте - трость, которую исполнитель заставляет колебаться, вдувая в саксофон воздух. Принцип извлечения звука близок к звукоизвлечению на кларнете, а вот аппликатура саксофона похожа на аппликатуру гобоя.',
      image: 'https://i.ibb.co/VH9DNfT/saxophone.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/wind/saxophone.mp3'
    },
    {
      id: 5,
      name: 'Туба',
      species: 'Tuba',
      description: 'Туба — это массивный медный духовой музыкальный инструмент, который имеет самый низкий звук по регистру. Мало кто знает, что она является самой молодой в своём семействе. Своим появлением туба завершила формирование симфонического оркестра, это случилось порядка двухсот лед назад. С тех пор состав оркестра является неизменным.',
      image: 'https://i.ibb.co/tYtRy1R/tuba.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/wind/tuba.mp3'
    },
    {
      id: 6,
      name: 'Фанфара',
      species: 'Fanfare',
      description: 'Фанфа́ра — медный духовой музыкальный инструмент, используется в основном для подачи сигналов, представляет собой удлинённую трубу с узкой мензурой, обычно без вентилей. Также фанфара — музыкальная фраза торжественного или воинственного характера, подаваемая с помощью этого инструмента.',
      image: 'https://i.ibb.co/z6htpjf/fanfare.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/wind/fanfare.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Кастаньеты',
      species: 'Сastanets',
      description: 'Ударный музыкальный инструмент, представляющий собой две вогнутые пластинки-ракушки, в верхних частях связанные между собой шнурком. Кастаньеты получили наибольшее распространение в Испании, Южной Италии и Латинской Америке.В мировой культуре кастаньеты прочнее всего ассоциируются с образом испанской музыки, особенно с музыкой испанских цыган и стилем фламенко, поэтому данный инструмент часто используют в классической музыке для создания «испанского колорита»',
      image: 'https://i.ibb.co/FxmjZSX/castanets.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/drums/castanets.mp3'
    },
    {
      id: 2,
      name: 'Барабаны',
      species: 'Drums',
      description: 'Набор барабанов, тарелок и других ударных инструментов, приспособлены для удобной игры музыканта-барабанщика. Обычно используется в джазе, блюзе, роке и поп-музыке.По отдельным инструментам установки играют барабанными палочками, различными щётками и колотушками. Для игры на хай-хэте и бас-барабане используются педали, поэтому барабанщик играет, сидя на специальном стуле или табурете.',
      image: 'https://i.ibb.co/xMj0d5n/drums.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/drums/drums.mp3'
    },
    {
      id: 3,
      name: 'Металлофон',
      species: 'Glockenspiel',
      description: 'Металлофоны - род музыкальных инструментов, основной элемент которых пластины-клавиши, по которым бьют молоточком. Его прародителем является пришедший из Азии инструмент глокеншпиль, что в переводе означает «колокольчики». В XIX в. колокольчики были заменены на металлические пластинки. Так появился современный металлофон.',
      image: 'https://i.ibb.co/c2zPHy3/glockenspiel.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/drums/glockenspiel.mp3'
    },
    {
      id: 4,
      name: 'Литавры',
      species: 'Kettle drums',
      description: 'Литавры имеют более сложную конструкцию, чем барабаны и представляют собой корпус из металла в виде котла с натянутым пластиком или кожей, в днище имеется резонаторное отверстие. Литавры имеют звуковысотность, то есть на них можно сыграть ноты.',
      image: 'https://i.ibb.co/M62LMNw/kettle-drums.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/drums/kettle-drums.mp3'
    },
    {
      id: 5,
      name: 'Маракасы',
      species: 'Maracas',
      description: 'Маракас - древнейший ударно-шумовой инструмент коренных жителей Антильских островов — индейцев таино, разновидность погремушки, издающей при потряхивании характерный шуршащий звук. В настоящее время мараки популярны на всей территории Латинской Америки и являются одним из символов латиноамериканской музыки. Как правило, музыкант, играющий на мараках, использует пару погремушек — по одной в каждой руке.',
      image: 'https://i.ibb.co/sPf2b35/maracas.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/drums/maracas.mp3'
    },
    {
      id: 6,
      name: 'Ксилофон',
      species: 'Xylohone',
      description: 'Ксилофон - ударный музыкальный инструмент с определённой высотой звучания. Представляет собой ряд деревянных брусков разной величины, настроенных на определённые ноты. По брускам ударяют палочками с шарообразными наконечниками (малетами) или специальными молоточками, похожими на небольшие ложки.',
      image: 'https://i.ibb.co/5r4b8Vh/xylophone.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/drums/xylophone.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Аккордеон',
      species: 'Accordion',
      description: 'Аккордео́н — хроматическая ручная гармоника с клавиатурой мелодии фортепианного (наиболее часто) типа.Звук на аккордеоне возникает из-за свободного колебания металлических язычков под воздействием воздушной струи, образующейся при движении меховой камеры.Наличие меха – это ценнейшее качество аккордеона, при его помощи можно управлять и влиять на окраску тембра, делать звук мягким, прозрачным или, наоборот, жестким и грубоватым.',
      image: 'https://i.ibb.co/9pHZVh2/accordion.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/reed/accordion.mp3'
    },
    {
      id: 2,
      name: 'Волынка',
      species: 'Bagpipes',
      description: 'Волы́нка — традиционный музыкальный духовой язычковый[2] инструмент многих народов Европы. В Шотландии — главный национальный инструмент[2]. Представляет собой мешок, который обыкновенно делается из воловьей, телячьей или козьей шкуры, снятой целиком, в виде бурдюка, зашитой наглухо и снабжённой сверху трубкой для наполнения меха воздухом, с прикреплёнными снизу одной, двумя или тремя игральными язычковыми трубами, клавишами и ступками, служащими для создания многоголосия.',
      image: 'https://i.ibb.co/5WdmQZR/bagpipes.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/reed/bagpipes.mp3'
    },
    {
      id: 3,
      name: 'Ручная гармоника',
      species: 'Harmonic',
      description: 'Ручные гармоники — музыкальные инструменты, составляющие основу семейства гармоник. Отличительными конструктивными особенностями подобных инструментов является наличие двух полукорпусов с клавиатурами, между которыми находится мех. Первая ручная гармоника сконструирована в 1822 году берлинским мастером Христианом Фридрихом Людвигом Бушманом (1805—1864).',
      image: 'https://i.ibb.co/0JJwnvp/harmonic.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/reed/harmonic.mp3'
    },
    {
      id: 4,
      name: 'Губная гармошка',
      species: 'Harmonica',
      description: 'Губная гармошка, относящаяся к духовым язычковым музыкальным инструментам, обладает густым и насыщенным звуком, который возникает под напором воздушной струи, заставляющей колебаться звуковые язычки. У гармоники нет клавиатуры, для выбора соответствующего нужной ноте отверстия используются губы и язык.',
      image: 'https://i.ibb.co/SrGCzWr/harmonica.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/reed/harmonica.mp3'
    },
    {
      id: 5,
      name: 'Варган',
      species: `Jew's harp`,
      description: 'Варган относится к разновидности самозвучащих язычковых музыкальных инструментов. Он обладает приятным для слуха необычайно бархатным, но в то же время «металлическим звучанием», который успокаивает и настраивает на размышление. Неимоверно красивые звуки и обертоны, да иногда ещё в сочетании с горловым пением – это просто невообразимое волшебство, которое действует завораживающе и уводит от жизненных реалий.',
      image: `https://i.ibb.co/vhKfXdp/jew's-harp.jpg`,
      audio: `https://raw.githubusercontent.com/Mikisum/music-data/master/audio/reed/jew's-harp.mp3`
    },
    {
      id: 6,
      name: 'Казу',
      species: 'Kazoo',
      description: 'Казу́ — американский народный музыкальный инструмент, применяемый в музыке стиля скиффл. Казу представляет собой небольшой металлический, пластмассовый или деревянный цилиндр, сужающийся к концу. В середину цилиндра сверху вставлена металлическая пробка с мембраной из папиросной бумаги. Чтобы исполнять музыку на казу, нужно в него петь, при этом бумажная мембрана значительно изменяет голос.',
      image: 'https://i.ibb.co/m45rGBh/kazoo.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/reed/kazoo.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Банджо',
      species: 'Banjo',
      description: 'Банджо звучит очень жизнерадостно и задорно. Но если описывать голос инструмента, иначе как резким, звенящим и острым его назвать нельзя. Из-за особенной мембраны он очень чистый и звонкий. Источник звука на банджо – это струны, зажимая их на ладах пальцами левой руки, исполнитель получает нужную высоту звука.Этот инструмент является музыкальным символом и неотъемлемой ценностью американского народа, среди которого он очень популярен',
      image: 'https://i.ibb.co/VQTSLxp/banjo.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/strings/banjo.mp3'
    },
    {
      id: 2,
      name: 'Виолончель',
      species: 'Cello',
      description: 'Виолончель – это струнно-смычковый инструмент, обязательный участник симфонического оркестра и струнного ансамбля, обладающий богатой техникой исполнения. Благодаря своему сочному и певучему звучанию зачастую применяется как солирующий инструмент. Виолончель широко используется, когда нужно выразить в музыке печаль, отчаяние или глубокую лирику, и в этом ей нет равных.',
      image: 'https://i.ibb.co/RDTLQpk/cello.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/strings/cello.mp3'
    },
    {
      id: 3,
      name: 'Домра',
      species: 'Domra',
      description: 'До́мра — русский, украинский и белорусский народный струнный щипковый музыкальный инструмент. Домра имеет корпус полусферической формы. Звук струн производится при помощи медиатора.Домра широко применялась скоморохами на Руси в XVI—XVII веках как сольный и ансамблевый («басистая» домра) инструмент, но начиная с XVII века, после выхода ряда церковных и государственных указов, согласно которым скоморошество подвергалось гонениям, инструмент не использовался. С исчезновением скоморохов исчезла и домра.',
      image: 'https://i.ibb.co/gWqKvns/domra.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/strings/domra.mp3'
    },
    {
      id: 4,
      name: 'Гитара',
      species: 'Guitar',
      description: 'Гита́ра — струнный щипковый музыкальный инструмент. Применяется в качестве аккомпанирующего или сольного инструмента во многих стилях и направлениях музыки, среди которых романс, блюз, кантри, фламенко, рок, джаз. В Испании известна с 13 века, в 17-18 веках распространилась в странах Европы и Америки, в том числе как народный инструмент. С 18 века общеупотребительной стала 6-струнная гитара, 7-струнная получила распространение преимущественно в России.',
      image: 'https://i.ibb.co/KXxxjWH/guitar.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/strings/guitar.mp3'
    },
    {
      id: 5,
      name: 'Арфа',
      species: 'Harp',
      description: 'А́рфа — струнный щипковый музыкальный инструмент, состоит из двух расположенных под углом рам, между которыми натянуто множество струн. Один из древнейших инструментов, символ Ирландии. В XVIII столетии была изобретена педальная арфа, ставшая стандартом в классической музыке.',
      image: 'https://i.ibb.co/6gQQ47n/harp.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/strings/harp.mp3'
    },
    {
      id: 6,
      name: 'Скрипка',
      species: 'Violin',
      description: 'Скри́пка — струнный смычковый музыкальный инструмент высокого регистра. Имеет народное происхождение, современный вид приобрела в XVI веке, получила широкое распространение в XVII веке.Самый высокий по регистру в скрипичном семействе, которое составило основу симфонического оркестра классического состава и струнного квартета.',
      image: 'https://i.ibb.co/sbvPFZ8/violin.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/strings/violin.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Аккордеон',
      species: 'Accordion',
      description: 'Аккордео́н — хроматическая ручная гармоника с клавиатурой мелодии фортепианного (наиболее часто) типа.Звук на аккордеоне возникает из-за свободного колебания металлических язычков под воздействием воздушной струи, образующейся при движении меховой камеры.Наличие меха – это ценнейшее качество аккордеона, при его помощи можно управлять и влиять на окраску тембра, делать звук мягким, прозрачным или, наоборот, жестким и грубоватым.',
      image: 'https://i.ibb.co/9pHZVh2/accordion.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/keyboards/accordion.mp3'
    },
    {
      id: 2,
      name: 'Челеста',
      species: 'Celesta',
      description: 'Челе́ста — клавишный металлофон, по технике игры и внешне напоминающий небольшое пианино или фисгармонию.  Изобретён французским музыкальным мастером Огюстом Мюстелем в 1886 году. Впервые представлен на Всемирной выставке в Париже в 1889 году. Челеста нашла применение не только как академический инструмент, но используется и в джазе, рок-музыке, других направлениях популярной музыки.',
      image: 'https://i.ibb.co/D7Z8thF/celesta.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/keyboards/celesta.mp3'
    },
    {
      id: 3,
      name: 'Фисгармония',
      species: 'Harmonium',
      description: 'Фисгармо́ния или Фисгармонь — клавишно-пневматический музыкальный инструмент семейства гармоник, отличающийся наличием фортепианной клавиатуры и напольным или настольным расположением.Фисгармония была популярна среди немецких поселенцев на территории Российской империи. Этот инструмент находился почти в каждом доме в немецких деревнях.Звучание фисгармонии имитируют многие современные синтезаторы (и другие электронные клавишные инструменты).',
      image: 'https://i.ibb.co/YB5KzsQ/harmonium.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/keyboards/harmonium.mp3'
    },
    {
      id: 4,
      name: 'Клавесин',
      species: 'Harpsichord',
      description: 'Клавеси́н — клавишный струнный музыкальный инструмент со щипковым способом звукоизвлечения. Музыканта, исполняющего произведения на клавесине и его разновидностях, называют клавесини́стом.Звук клавесина — блестящий, но мало певучий, отрывистый, не поддающийся динамическим изменениям, то есть плавное увеличение и уменьшение громкости на клавесине невозможно. Тем не менее, разнообразных динамических эффектов можно добиться, умело управляя количеством и скоростью взятия звуков, взаимодействием с резонансом.',
      image: 'https://i.ibb.co/vv2Yytn/harpsichord.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/keyboards/harpsichord.mp3'
    },
    {
      id: 5,
      name: 'Орган',
      species: 'Organ',
      description: 'Орга́н  — клавишный духовой музыкальный инструмент. Большие концертные органы превосходят по габаритам все прочие музыкальные инструменты.Орган — один из древнейших музыкальных инструментов. Его история насчитывает несколько тысяч лет.Искусство строить органы развилось и в Италии, откуда в IX веке они выписывались во Францию. Позднее это искусство развилось в Германии. Повсеместное распространение в западной Европе орган получил начиная с XIV века. ',
      image: 'https://i.ibb.co/p4z39Fq/organ.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/keyboards/organ.mp3'
    },
    {
      id: 6,
      name: 'Фортепиано',
      species: 'Piano',
      description: 'Фортепьяно - общее название клавишных музыкальных инструментов с молоточковой механикой (рояль, пианино). Фортепьяно было изобретено в нач. 18 в. Появление современного типа фортепьяно — с т.н. двойной репетицией — относится к 1820-м гг. Расцвет фортепьянного исполнительства — 19-20 вв.',
      image: 'https://i.ibb.co/fqDy9sq/piano.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/keyboards/piano.mp3'
    }
  ],
  [
    {
      id: 1,
      name: 'Балалайка',
      species: 'Balalaika',
      description: 'Балала́йка — русский народный трёхструнный щипковый музыкальный инструмент с корпусом треугольной формы. Характерными приёмами звукоизвлечения являются бряцание и тремоло — удары указательным пальцем по всем струнам одновременно.Самый известный русский инструмент, ставший, наряду с гармонью и гуслями, одним из символов музыкального творчества русского народа.',
      image: 'https://i.ibb.co/dr0Fpqf/12345.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/super-game/balalaika.mp3'
    },
    {
      id: 2,
      name: 'Контрабас',
      species: 'Contrabass',
      description: 'Густой, богатый, сочный, бархатный, мягкий – так можно описать характер контрабасового тона, который порой может звучать как человеческий голос. Звук контрабаса самый низкий в струнной группе симфонического оркестра, совместно с фаготами и тубой он выстраивает гармонический фундамент в произведениях, которые исполняются музыкальным коллективом.',
      image: 'https://i.ibb.co/ph0gLZc/37847.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/super-game/contrabass.mp3'
    },    
    {
      id: 3,
      name: 'Электрогитара',
      species: 'Electric guitar',
      description: 'Электрогита́ра — разновидность гитары с электромагнитными звукоснимателями, преобразующими колебания металлических струн в колебания электрического тока. Сигнал со звукоснимателей может быть обработан для получения различных звуковых эффектов и усилен — для воспроизведения через акустическую систему. Слово «электрогитара» возникло от словосочетания «электрическая гитара».',
      image: 'https://i.ibb.co/Twk267Z/electric-guitar.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/super-game/electric-guitar.mp3'
    },
    {
      id: 4,
      name: 'Гусли',
      species: 'Gusli',
      description: 'Гусли - русский струнный щипковый музыкальный инструмент. Крыловидные гусли («звончатые») имеют 4-14 и более струн, шлемовидные — 11-36, прямоугольные (столообразные) — 55-66 струн.Музыкантов, играющих на гуслях, называют гуслярами',
      image: 'https://i.ibb.co/XWYhmDz/gusli.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/super-game/gusli.mp3'
    },
    {
      id: 5,
      name: 'Укулеле',
      species: 'Ukulele',
      description: 'Укулеле, как все гитары, является струнно-щипковым инструментом и звук на нем является результатом колебания струн. Укулеле является известной достопримечательностью гавайских островов. Из-за своих маленьких размеров инструмент, больше напоминающий детскую игрушку, в короткое время завоевал популярность у многих меломанов во всех уголках Земного шара. ',
      image: 'https://i.ibb.co/ph8MqDp/ukulele.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/super-game/ukulele.mp3'
    },
    {
      id: 6,
      name: 'Валтрона',
      species: 'Valtrona',
      description: 'Представьте себе средневековую королевскую охоту со сворой собак, лошадьми и, конечно же, специальными охотничьими сигнальными рогами. Для того чтобы звук был громче и сильнее, эти инструменты совершенствовали и делали длиннее. Со временем, они достигли таких размеров, что было невозможно нормально играть, не говоря уже о передвижении с ними, поэтому мастерам пришла в голову идея свернуть трубку, в несколько витков. Так собственно и возникла валторна, которая в переводе означает «лесной рог». Если ее распрямить, то получится труба длиною около пяти метров.',
      image: 'https://i.ibb.co/1KFRbjz/valtrona.jpg',
      audio: 'https://raw.githubusercontent.com/Mikisum/music-data/master/audio/super-game/valtrona.mp3'
    }
  ]
];

export default birdsData;