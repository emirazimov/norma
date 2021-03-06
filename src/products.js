const products = [
	{
		_id: '1',
		name: 'В Кыргызстане предлагают перенести сроки внедрения ККМ нового образца',
		image: '/images/military.jpg',
		description: `Предлагается продлить сроки обязательного применения ККМ, соответствующих новым техническим требованиям, до 1 апреля 2021 года. Соответствующий проект постановления правительства вынесло на общественное обсуждение Министерство экономики.

В ведомстве отмечают, что с 1 января 2021-го не подлежат регистрации контрольно-кассовые машины (ККМ), не соответствующие новым техническим требованиям, и не могут применяться старые образцы ККМ без функции передачи фискальных данных в режиме реального времени.

На 25 декабря 2020 года включены в реестр операторов фискальных данных 8 субъектов и в реестр ККМ-онлайн 7 моделей, соответствующих новым техническим требованиям (3 программные и 4 аппаратные ККМ). При этом в новых ККМ предусмотрена возможность регистрации кодов маркировки товаров. А Кыргызстан переходит на маркировку алкогольной и табачной продукции с 1 апреля 2021-го.

Кроме того, в Министерстве экономики обратили внимание и на то, что из-за пандемии коронавируса бизнес столкнулся с существенными проблемами. Предпринимателям сейчас нужна дополнительная поддержка государства.

«Для поддержки субъектов предпринимательства в условиях пандемии коронавирусной инфекции COVID-19 и предоставления дополнительного времени для подготовки налогоплательщиков — пользователей контрольно-кассовых машин к переходу на применение ККМ-онлайн, соответствующих новым техническим требованиям, предлагается отсрочить сроки внедрения новых ККМ», — прокомментировали в Минэкономики.`,
		brand: 'Neyle',
		category: 'Watch',
		price: 39990,
		countInStock: 3,
		rating: 5,
		numReviews: 3
	},
	{
		_id: '2',
		name: 'Маркировка товаров. С 1 января 2020 года в Кыргызстане запустят пилотный проект',
		image: '/images/2020-2jpg.jpg',
		description:
			'В Кыргызстане планируют запустить с 1 января 2020 года пилотный проект по добровольной маркировке товаров. Об этом сообщили в Министерстве экономики. По его данным, на первом этапе будут маркировать средствами идентификации обувь, алкогольную и табачную продукции. Делается это для внедрения эффективной системы маркировки.\n' +
			'\n' +
			'Уже инициировали проект постановления правительства «О проведении пилотного (экспериментального) проекта по маркировке отдельных видов товаров средствами цифровой идентификации».\n' +
			'\n' +
			'Ответственным государственным органом по ведению автоматизированной системы маркировки товаров определена Государственная налоговая служба.',
		brand: 'Swiss',
		category: 'Watch',
		price: 49990,
		countInStock: 3,
		rating: 3.5,
		numReviews: 4
	},
	{
		_id: '3',
		name: 'Маркировка! Важную информацию для швейников рассказали в Минэкономики КР',
		image: '/images/orient2.jpg',
		description: `С 1 января 2021 года на территории России вводится обязательная маркировка товаров легкой промышленности, сообщила пресс-служба Министерства экономики Кыргызстана.
			Ведомство рекомендует отечественным экспортерам товаров текстильной отрасли заранее проработать вопрос со своими партнерами в России.Коды маркировки для наименований товаров текстильной промышленности можно узнать на сайте Минэкономики.
			Ранее в Государственной налоговой службе сообщили, что ЗАО "Альфа Телеком" стало оператором (администратором) национальной системы маркировки и прослеживаемости маркированных товаров.`,
		brand: 'Orient',
		category: 'Watch',
		price: 21000,
		countInStock: 2,
		rating: 2.5,
		numReviews: 3
	},
	{
		_id: '4',
		name: 'Россия поможет Кыргызстану с маркировкой товаров',
		image: '/images/orient.jpg',
		description: `Россия выделит Кыргызстану в 2021-2022 годах средства на создание системы маркировки товаров. Об этом говорится в распоряжении правительства, подписанном премьер-министром РФ Михаилом Мишустиным.

			В распоряжении отмечается: "Выделить Минпромторгу России на финансирование расходов, связанных с проведением мероприятий по оказанию Российской Федерацией безвозмездной технической помощи Киргизской Республике в целях создания системы маркировки товаров средствами идентификации…., бюджетные ассигнования федерального бюджета в размере до 623 млн 402 тыс. рублей".
			
			В 2021 году предполагается направить в Кыргызстан на эти цели до 316 млн 253 тыс. рублей, в 2022 году - до 307 млн 149 тыс. рублей.
			
			Министр промышленности и торговли РФ Денис Мантуров недавно заявлял, что Россия продолжит расширять список подлежащей обязательной маркировке продукции, при этом, по его словам, необходимо формировать контур маркировки товаров в рамках ЕАЭС. Армения, Беларусь и Казахстан при поддержке РФ разрабатывают свои системы прослеживаемости товаров. РФ также создает для Кыргызстана цифровую платформу, средства на это выделяются из российского бюджета.
			
			Как сообщила помощник председателя Коллегии Евразийской экономической комиссии Ия Малкина, созданный ЕЭК комитет по устранению спорных ситуаций при перемещении товаров через границы стран ЕАЭС сегодня прорабатывает ряд вопросов, связанных в том числе с маркировкой некоторых товаров. По словам Малкиной, предусмотрен ввоз в Россию уже промаркированной продукции из стран Союза.
			
			"Конечно, эти преобразования требует от участников ее оборота перестройки бизнес-процессов – переоборудования предприятий, а также внедрения новых информационных технологий, что, конечно, влечет за собой определенные затраты, воспринимаются бизнесом неоднозначно. Но стоит отметить, что до введения обязательной маркировки на территории РФ проводятся добровольные эксперименты. В среднем они длятся не менее года. Предприятия стран ЕАЭС, которые экспортируют такую продукцию в РФ и заинтересованы в продолжении торговли, обычно участвуют в них. И быстрей перестраиваются под новые условия ведения бизнеса", - прокомментировала помощник председателя Коллегии ЕЭК.`,
		brand: 'Bulova',
		category: 'Watch',
		price: 57310,
		countInStock: 2,
		rating: 5,
		numReviews: 5
	},
	{
		_id: '5',
		name: 'Seiko Astron',
		image: '/images/military.jpg',
		description:
			'Кварцевые часы. Солнечная батарея. Калибр 8X22. Водостойкость WR 100. Часы, минуты, секунды, дата. Люминесцентные стрелки и метки. Встроенный GPS модуль для корректировки часового пояса и точного времени. Индикатор заряда. Режим летнего времени. Режим - в полете. Корпус выполнен из нержавеющей стали. Диаметр корпуса 45 мм. Сапфировое стекло с супер-прозрачным покрытием. Стальной браслет с раскладывающейся застежкой.',
		brand: 'Seiko',
		category: 'Watch',
		price: 90750,
		countInStock: 2,
		rating: 4.5,
		numReviews: 6
	},
	{
		_id: '6',
		name: 'Seiko Prospex',
		image: '/images/gshock-pink.jpg',
		description:
			'Стрелки и часовые метки имеют покрытие LumiBrite. Циферблат синего цвета. Однонаправлено вращающийся безель. Круглый корпус выполнен из полированной нержавеющей стали с черным PVD покрытием. Диаметр корпуса составляет 44 мм, толщина 14 мм. Завинчивающаяся заводная головка с защитой. Стальной браслет с тройной раскладывающейся застежкой и дополнительным фиксатором. Закаленное минеральное стекло повышенной прочности Hardlex с антибликовым покрытием устойчиво к мелким механическим повреждениям.',
		brand: 'Seiko',
		category: 'watch',
		price: 37500,
		countInStock: 0,
		rating: 4,
		numReviews: 9
	}
]

export default products
