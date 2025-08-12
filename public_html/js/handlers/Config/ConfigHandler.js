import ServerHandler from '../Server/ServerHandler.js';
import ElementsComponent from '../../components/ElementsComponent/ElementsComponent.js';
import CardComponent from '../../components/CardComponent/CardComponent.js';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent.js';
import SliderComponent from '../../components/SliderComponent/SliderComponent.js';
import LinksComponent from '../../components/LinksComponent/LinksComponent.js';

export default function ConfigHandler(props) {
    /* props: {server:{serverURL}, RENDER, DARK_THEME} */
    this.domApp = document.createElement('div');

    this.server = new ServerHandler({
        serverURL: 'http://192.168.8.147:3000',
    });

    this.number = '7912xxxYYzz';

    this.links = [
        {
            id: null,
            title: 'Whatsapp',
            href: 'https://api.whatsapp.com/send/?phone=79120072215',
            innerHTML:
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="24px" height="24px"><path style="fill:#FFFFFF;" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"/><g ><path style="fill:#FFFFFF;" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"/><path style="fill:#CFD8DC;" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"/></g><path style="fill:#40C351;" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"/><path  style="fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"/></svg>',
        },
        {
            id: null,
            title: 'Мы в Telegram',
            href: 'https://t.me/tahografexp',
            innerHTML:
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="24px" height="24px"><circle style="fill:#29B6F6;" cx="24" cy="24" r="20"/><path style="fill:#FFFFFF;" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733  l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468  c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"/><path style="fill:#B0BEC5;" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043  l0.964-5.965L23,30.505z"/><path style="fill:#CFD8DC;" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912  c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"/></svg>',
        },
        {
            id: null,
            title: 'Мы во Вконтакте',
            href: 'https://vk.com/tahografexp',
            innerHTML:
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="24px" height="24px"><path style="fill:#1976D2;" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5  V37z"/><path style="fill:#FFFFFF;" d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618  c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199  v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623  C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643  C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094  v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618  c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326  c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607  C32.223,24.393,35.607,19.642,35.937,18.041z"/></svg>',
        },
    ];

    this.components = {
        header: props.componentsEnabled.headerEnabled
            ? {
                  buts: [
                      { id: null, title: 'Главная', anchor: '' },
                      { id: null, title: 'Каталог', anchor: 'el-catalog' },
                      { id: null, title: 'Услуги', anchor: 'el-services' },
                      { id: null, title: 'О нас', anchor: 'el-about' },
                      { id: null, title: 'Контакты', anchor: 'el-contacts' },
                      //TODO:
                      //{id: null, title: 'theme', anchor: 'TODOtheme' },
                  ],
                  logoSrc: '/assets/logo.png',

                  // TODO
                  darkTheme: true,
              }
            : { buts: [], logoSrc: null, buttonTitle: '' },

        banner: props.componentsEnabled.bannerEnabled
            ? {
                  titles: [
                      {
                          id: null,
                          type: 'h1',
                          text: 'Глонасс/Видеонаблюдение<br>на все виды транспортных средств',
                          classes: 'elTitle elTitleWhite',
                      },
                      {
                          id: null,
                          type: 'h2',
                          text: 'Профессиональное обслуживание и установка глонасс / видео',
                          classes: 'elTitle elTitleWhite elSubTitle1',
                      },
                  ],
                  butsWrapperClasses:
                      'centrElement defaultWidthElement bannerButs',
                  buts: [
                      {
                          id: 'banner_but_catalog',
                          title: 'Каталог приборов',
                          ajax: false,
                          req: 'catalog',
                          classes: 'appButton bannerButton',
                      },
                      {
                          id: 'banner_but_glonass_subscription',
                          title: 'Абонентское обслуживание ГЛОНАСС',
                          ajax: false,
                          req: 'glonass',
                          classes: 'appButton bannerButton',
                      },
                  ],
                  links: { links: this.links, linksClasses: 'link bannerLink' },
                  // 1920x1080
                  //pic: '/assets/truck-pic.jpg',
              }
            : { h1Title: '', h2Title: '', buts: [], pic: '' },

        main: props.componentsEnabled.mainEnabled
            ? {
                  elementsData: [
                      {
                          id: 'services',
                          titles: [
                              {
                                  text: 'Услуги',
                                  classes: [
                                      'elTitle',
                                      'centrElement',
                                      'defaultWidthElement',
                                  ],
                              },
                          ],
                          // TODO: ListItemsComponent
                          texts: [],
                          classes: ['sectionElement'],
                          components: [
                              {
                                  id: '',
                                  data: new ElementsComponent(
                                      {
                                          id: 'glonassElement',
                                          domParent: this.domApp,
                                          domSelf:
                                              document.createElement('div'),
                                      },
                                      {
                                          titles: [
                                              {
                                                  text: 'Глонасс',
                                                  classes: [
                                                      'elTitle',
                                                      'elSubTitle1',
                                                  ],
                                              },
                                          ],
                                          titlesGroupId: 'glonassElementTitles',
                                          texts: [
                                              {
                                                  id: 'glonassElementText',
                                                  class: null,
                                                  data: '<div><b>Основные функции</b></div>- Автоматический учёт загруженности автопарка<br>- Повышение качества использования автопарка<br>- Контроль пробега<br>- Контроль расхода топлива<br>- Контроль качества вождения<br>- Контроль соблюдения ПДД<br>- Контроль и защита грузов<br>- Автоматизация бизнес-процессов транспортных компаний<br>- Тепловые карты событий<br>- Удаленное управление транспортом<br>- Противоугонная система<br>- Фото и видео наблюдение в режиме реального времени<br>- Модульная аналитика<br>- Автоматизация планирования доставки<br>- План-фактный анализ<br>',
                                              },
                                          ],
                                          classes: [
                                              'subSectionElement',
                                              'centrElement',
                                              'defaultWidthElement',
                                          ],
                                          components: [
                                              {
                                                  id: 'TODO',
                                                  data: new CardComponent({
                                                      id: 'glonassElementCard',
                                                      type: 'catalogCard',
                                                      classes: 'appCatalogCard',
                                                      domParent: this.domApp,
                                                      imgId: 'glonassElementCardImg',
                                                      imgSrc: 'assets/glonass.png',
                                                      titleId:
                                                          'glonassElementCardTitle',
                                                      title: 'Система мониторинга СКАУТ',
                                                      priceId:
                                                          'glonassElementCardPrice',
                                                      price: 'Цена по запросу',
                                                      butId: 'glonassElementCardBut',
                                                      callbacks: {
                                                          hideContact: () => this.components.contact.callbacks.hideContact(0),
                                                          showContact: () => this.components.contact.callbacks.showContact(0),
                                                      },
                                                  }),
                                              },
                                          ],
                                      },
                                  ),
                              },
                              {
                                  id: '',
                                  data: new ElementsComponent(
                                      {
                                          id: 'videoElement',
                                          domParent: this.domApp,
                                          domSelf:
                                              document.createElement('div'),
                                      },
                                      {
                                          titles: [
                                              {
                                                  text: 'Видеонаблюдение',
                                                  classes: [
                                                      'elTitle',
                                                      'elSubTitle1',
                                                  ],
                                              },
                                          ],
                                          texts: [
                                              {
                                                  id: 'videoElementText',
                                                  class: null,
                                                  data: '<div><b>Основные функции</b></div>\
    -Контроль действий водителя в кабине (нарушения ПДД, режим работы, безопасность)<br>\
    -Мониторинг состояния грузового отсека и целостности груза<br>\
    -Видеофиксация дорожной обстановки, включая слепые зоны и маневрирование<br>\
    -Помощь водителю при парковке и движении за счет камер заднего вида и кругового обзора<br>\
    -Контроль погрузочно-разгрузочных операций для предотвращения повреждений и недостачи груза<br>\
    -Оповещение о подозрительных событиях и вторжениях<br>\
    -Регистрация событий при ДТП или чрезвычайных ситуациях для анализа и доказательств<br>\
    -Удалённый онлайн-доступ к видеопотоку и архивам<br>\
    -Интеграция с GPS/ГЛОНАСС-мониторингом для синхронизации данных о движении и видео<br>\
    -Противоугонная система с возможностью удалённого управления и блокировки<br>\
    -Автоматизация процессов охраны и повышения безопасности автопарка<br>\
												',
                                              },
                                          ],
                                          classes: [
                                              'subSectionElement',
                                              'centrElement',
                                              'defaultWidthElement',
                                          ],
                                          components: [
                                              {
                                                  id: 'TODO',
                                                  data: new CardComponent({
                                                      id: 'videoElementCard',
                                                      type: 'catalogCard',
                                                      classes: 'appCatalogCard',
                                                      domParent: this.domApp,
                                                      imgId: 'videoElementCardImg',
                                                      imgSrc: 'assets/glonass.png',
                                                      titleId:
                                                          'videoElementCardTitle',
                                                      title: 'Система видеонаблюдения',
                                                      priceId:
                                                          'videoElementCardPrice',
                                                      price: 'Цена по запросу',
                                                      butId: 'videoElementCardBut',
                                                      callbacks: {
                                                          hideContact: () => this.components.contact.callbacks.hideContact(0),
                                                          showContact: () => this.components.contact.callbacks.showContact(0),
                                                      },
                                                  }),
                                              },
                                          ],
                                      },
                                  ),
                              },
                          ],
                      },
                      {
                          id: 'about',
                          titles: [
                              {
                                  text: 'О нас',
                                  classes: [
                                      'elTitle',
                                      'centrElement',
                                      'defaultWidthElement',
                                      'elTitleWhite',
                                  ],
                              },
                          ],
                          texts: [
                              {
                                  id: '',
                                  class: 'centrElement defaultWidthElement elSubTitle1White',
                                  data: '\
Мы являемся официальным представителем компании FTNet.<br>\
Лицензия №0006189 Рег. № 16 Н от 26 июля 2018г.<br>\
Нажмите на кнопку, чтобы выполнить проверку на сайте Минтранса РФ\
',
                              },
                          ],
                          classes: ['sectionElement'],
                          components: [
                              {
                                  id: 'checkButton',
                                  data: new ButtonComponent({
                                      id: '',
                                      domParent: this.domApp,
                                      server: this.server,
                                      type: 'callback2',
                                      text: 'Проверить',
                                      classes: 'appCheckUsButton',
                                      funcs: [
                                          function () {
                                              location.href =
                                                  'https://rosavtotransport.ru/ru/activities/tachograph-control-ru/workshops/?action=searchresult&number=&org=%D0%9E%D0%9E%D0%9E+%22%D0%A2%D0%B0%D1%85%D0%BE%D0%B3%D1%80%D0%B0%D1%84%22';
                                          },
                                      ],
                                  }),
                              },
                              {
                                  id: 'slider',
                                  data: new SliderComponent({
                                      id: 'aboutUs',
                                      domParent: this.domApp,
                                      type: 'aboutus',
                                      // classes: 'centrElement',
                                      cards: [
                                          {
                                              type: 'sliderCard',
                                              icon: '/assets/exprerience.png',
                                              titles: [
                                                  {
                                                      text: 'Более 5 лет',
                                                      classes: ['sliderTitle'],
                                                  },
                                                  {
                                                      text: 'работаем на рынке',
                                                      classes: [
                                                          'sliderTitle sliderSubTitle',
                                                      ],
                                                  },
                                              ],
                                          },
                                          {
                                              type: 'sliderCard',
                                              icon: '/assets/warranty.png',
                                              titles: [
                                                  {
                                                      text: 'Обслуживание',
                                                      classes: ['sliderTitle'],
                                                  },
                                                  {
                                                      text: 'гарантийное и постгарантийное',
                                                      classes: [
                                                          'sliderTitle sliderSubTitle',
                                                      ],
                                                  },
                                              ],
                                          },
                                          {
                                              type: 'sliderCard',
                                              icon: '/assets/clients.png',
                                              titles: [
                                                  {
                                                      text: 'Более 400',
                                                      classes: ['sliderTitle'],
                                                  },
                                                  {
                                                      text: 'довольных клиентов',
                                                      classes: [
                                                          'sliderTitle sliderSubTitle',
                                                      ],
                                                  },
                                              ],
                                          },
                                          {
                                              type: 'sliderCard',
                                              icon: '/assets/visit.png',
                                              titles: [
                                                  {
                                                      text: '24/7',
                                                      classes: ['sliderTitle'],
                                                  },
                                                  {
                                                      text: 'выезд специалиста',
                                                      classes: [
                                                          'sliderTitle sliderSubTitle',
                                                      ],
                                                  },
                                              ],
                                          },
                                      ],
                                  }),
                              },
                          ],
                      },
                      {
                          id: 'clients',
                          titles: [
                              {
                                  text: 'Наши клиенты',
                                  classes: [
                                      'elTitle',
                                      'centrElement',
                                      'defaultWidthElement',
                                  ],
                              },
                          ],
                          texts: [
                              {
                                  id: '',
                                  class: 'centrElement defaultWidthElement',
                                  data: 'Мы дорожим своей репутацией и используем индивидуальный подход к каждому клиенту',
                              },
                          ],
                          classes: ['sectionElement'],
                          components: [
                              {
                                  id: 'slider',
                                  data: new SliderComponent({
                                      id: 'trustUs',
                                      domParent: this.domApp,
                                      classes:
                                          'centrElement defaultWidthElement',
                                      type: 'trustus',
                                      cards: [
                                          {
                                              type: 'sliderCard',
                                              icon: '/assets/trustus/gazprom.webp',
                                          },
                                          {
                                              type: 'sliderCard',
                                              icon: '/assets/trustus/econiva.webp',
                                          },
                                          {
                                              type: 'sliderCard',
                                              icon: '/assets/trustus/rwd.webp',
                                          },
                                          {
                                              type: 'sliderCard',
                                              icon: '/assets/trustus/ykvr.webp',
                                          },
                                          {
                                              type: 'sliderCard',
                                              icon: '/assets/trustus/iteco.jpg',
                                          },
                                          {
                                              type: 'sliderCard',
                                              icon: '/assets/trustus/mirat.jpg',
                                          },
                                      ],
                                  }),
                              },
                          ],
                      },
                      {
                          id: 'contacts',
                          titles: [
                              {
                                  text: 'Контакты',
                                  classes: [
                                      'elTitle',
                                      'centrElement',
                                      'defaultWidthElement',
                                  ],
                              },
                          ],
                          texts: [],
                          classes: ['sectionElement'],
                          components: [
                              {
                                  id: 'TODO_mapsComponent',
                                  data: new ElementsComponent(
                                      {
                                          id: 'mapsElement',
                                          domParent: this.domApp,
                                          domSelf:
                                              document.createElement('div'),
                                      },
                                      {
                                          titles: [
                                              {
                                                  text: 'Россия, Удмуртская республика, г. Ижевск, ул. Ленина, д. 146, офис 104',
                                                  classes: [
                                                      'elTitle',
                                                      'elSubTitle1',
                                                  ],
                                                  id: 'contacts1Title',
                                              },
                                              {
                                                  text: 'Россия, Пермский край, г. Чайковский, ул. Советская, д. 1/12, корпус 6',
                                                  classes: [
                                                      'elTitle',
                                                      'elSubTitle1',
                                                  ],
                                                  id: 'contacts2Title',
                                              },
                                          ],
                                          texts: [
                                              {
                                                  id: 'contacts1Element',
                                                  class: '',
                                                  data: '<div style="position:relative;overflow:hidden;height: 250px;"><a href="https://yandex.com/maps/org/takhograf_ekspert/218381161146/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Тахограф Эксперт</a><a href="https://yandex.com/maps/44/izhevsk/category/auto_accessories/184105286/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Auto accessories in Izhevsk</a><iframe src="https://yandex.com/map-widget/v1/?ll=53.323761%2C56.813366&mode=search&oid=218381161146&ol=biz&utm_source=share&z=11.47" width="100%" height="100%" allowfullscreen="true" style="position:relative;border:none;"></iframe></div>',
                                              },
                                              {
                                                  id: 'contacts2Element',
                                                  class: '',
                                                  data: '<div style="position:relative;overflow:hidden;height: 250px"><a href="https://yandex.com/maps/20243/chaikovsky/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Chaikovsky</a><a href="https://yandex.com/maps/20243/chaikovsky/house/sovetskaya_ulitsa_1_12/YU0YdwVjSUQGQFtsfXt2d3phZQ==/?ll=54.150532%2C56.770842&utm_medium=mapframe&utm_source=maps&z=13.73" style="color:#eee;font-size:12px;position:absolute;top:14px;">Yandex Maps</a><iframe src="https://yandex.com/map-widget/v1/?ll=54.150532%2C56.770842&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MTM5NzM5Mzg2EmLQoNC-0YHRgdC40Y8sINCf0LXRgNC80YHQutC40Lkg0LrRgNCw0LksINCn0LDQudC60L7QstGB0LrQuNC5LCDQodC-0LLQtdGC0YHQutCw0Y8g0YPQu9C40YbQsCwgMS8xMiIKDfd9WEIVQxtjQg%2C%2C&z=13.73" width="100%" height="100%" allowfullscreen="true" style="position:relative;border:none;"></iframe></div>',
                                              },
                                          ],
                                          classes: [
                                              'centrElement',
                                              'defaultWidthElement',
                                          ],
                                          components: [],
                                      },
                                  ), // new ElementsComponent
                              },
                          ],
                      },
                  ], // elementsData
              }
            : { elementsData: [] }, // main (enabled/disabled)

        admin: props.componentsEnabled.adminEnabled
            ? {
                  elementsData: [
                      {
                          id: 'adminTools',
                          titles: [
                              {
                                  text: 'Admin Tools',
                                  classes: ['elTitle'],
                              },
                          ],
                          texts: [],
                          classes: [
                              'sectionElement',
                              'centrElement',
                              'defaultWidthElement',
                          ],
                          components: [
                              {
                                  id: 'TODO_updCatalogComponent',
                                  data: new ElementsComponent(
                                      {
                                          id: 'updCatalogElement',
                                          domParent: this.domApp,
                                          domSelf:
                                              document.createElement('div'),
                                      },
                                      {
                                          titles: [
                                              {
                                                  text: 'Загрузка нового каталога',
                                                  classes: [
                                                      'elTitle',
                                                      'elSubTitle1',
                                                  ],
                                              },
                                          ],
                                          texts: [],
                                          classes: [],
                                          components: [
                                              {
                                                  id: 'TODO',
                                                  data: new ButtonComponent({
                                                      id: '',
                                                      domParent: this.domApp,
                                                      server: this.server,
                                                      type: 'uploadFile',
                                                      classes:
                                                          'appButton noSelect',
                                                      text: 'Выбрать файл',
                                                  }),
                                              },
                                          ],
                                      },
                                  ), // new ElementsComponent
                              },
                              {
                                  id: 'TODO_updEmailComponent',
                                  data: new ElementsComponent(
                                      {
                                          id: 'updEmailElement',
                                          domParent: this.domApp,
                                          domSelf:
                                              document.createElement('div'),
                                      },
                                      {
                                          titles: [
                                              {
                                                  text: 'Обновление почты',
                                                  classes: [
                                                      'elTitle',
                                                      'elSubTitle1',
                                                  ],
                                              },
                                          ],
                                          texts: [],
                                          classes: [],
                                          components: [],
                                      },
                                  ), // new ElementsComponent
                              },
                          ],
                      }, // ElementsData 1
                      {
                          id: 'info',
                          titles: [
                              {
                                  text: 'Info',
                                  classes: ['elTitle'],
                              },
                          ],
                          texts: [
                              {
                                  id: 'getCatalog&name=taho_catalog_glonass',
                                  class: null,
                                  data: 'req getCatalogGlonass()',
                              },
                              {
                                  id: 'getCatalog&name=taho_catalog_cameras',
                                  class: null,
                                  data: 'req getCatalogCameras()',
                              },
                          ],
                          classes: [
                              'sectionElement',
                              'centrElement',
                              'defaultWidthElement',
                          ],
                          components: [],
                      }, // ElementsData 2
                  ],
              }
            : { elementsData: [] },

        // TODO:
        catalog: props.componentsEnabled.catalogEnabled
            ? {
                  callbacks: {
                      hideContact: () => this.components.contact.callbacks.hideContact(0),
                      showContact: () => this.components.contact.callbacks.showContact(0),
                  },

                  /* Component */
                  /* filled while creating CatalogComponent() */
                  /* At the same time catalogsData deleted */
                  catalogs: [],
              }
            : { catalogsData: [] },

        contact: props.componentsEnabled.contactEnabled
            ? {
                  id: 'contact-0',
                  callbacks: {
                      hideContact: (i) => {
                          document.body.classList.remove('overflow-hide')
                          this.components.contact.tabs[i].hide()
                          this.components.contact.data.hide()
                      },
                      showContact: (i) => {
                          this.components.contact.data.show()
                          this.components.contact.tabs[i].show()
                          document.body.classList.add('overflow-hide')
                      },
                  },

                  /* Components */
                  /* filled while creating ContactComponent() */
                  /* At the same time tabsData deleted */
                  tabs: [],

                  /* data for creating tabs in ContactComponent */
                  tabsData: [
                      {
                          id: 'tab-dmUs',
                          cards: [
                              {
                                  type: 'contactCard',
                                  icon: '/assets/contact/dmus.svg',
                                  title: 'Оставьте заявку, чтобы мы с вами связались :D',
                              },
                          ],
                          inputs: [
                              {
                                  type: 'text',
                                  name: 'name',
                                  placeholder: 'Имя',
                              },
                              {
                                  type: 'number',
                                  name: 'phone',
                                  placeholder: 'Телефон',
                                  type: 'tel',
                              },
                              {
                                  type: 'email',
                                  name: 'email',
                                  placeholder: 'Email',
                              },
                              {
                                  type: 'text',
                                  name: 'message',
                                  placeholder: 'Ваше сообщение',
                              },
                              {
                                  type: 'checkbox',
                                  name: 'policy',
                                  id: 'policyCheck',
                                  required: '',
                                  checked: '',
                              },
                          ],
                          labels: [
                              {
                                  innerHTML:
                                      'Согласен (-на) с политикой конфиденциальности и обработки персональных данных',
                                  attrs: [{ for: 'policyCheck' }],
                              },
                          ],
                          method: 'sendNotifDmUs',
                      },
                      {
                          id: 'tab-activationReq',
                          cards: [
                              {
                                  type: 'contactCard',
                                  icon: '/assets/contact/sim.svg',
                                  title: 'Оставить заявку на активацию ГЛОНАСС',
                              },
                          ],
                          inputs: [
                              {
                                  type: 'text',
                                  name: 'name',
                                  placeholder: 'ФИО',
                              },
                              {
                                  type: 'text',
                                  name: 'regaddress',
                                  placeholder: 'Адрес регистрации',
                              },
                              {
                                  type: 'text',
                                  name: 'passport_s',
                                  placeholder: 'Серия паспорта',
                              },
                              {
                                  type: 'text',
                                  name: 'passport_n',
                                  placeholder: 'Номер паспорта',
                              },
                              {
                                  type: 'text',
                                  name: 'issued',
                                  placeholder: 'Выдан',
                              },
                              {
                                  type: 'text',
                                  name: 'date',
                                  placeholder: 'Дата выдачи',
                              },
                              {
                                  type: 'text',
                                  name: 'phone',
                                  placeholder: 'Телефон',
                              },
                              {
                                  type: 'text',
                                  name: 'email',
                                  placeholder: 'Email',
                              },
                              {
                                  type: 'text',
                                  name: 'term_id',
                                  placeholder: 'ID абонентского терминала',
                              },
                              {
                                  type: 'text',
                                  name: 'model',
                                  placeholder: 'Марка, модель ТС',
                              },
                              {
                                  type: 'text',
                                  name: 'car_id',
                                  placeholder: 'Госномер ТС',
                              },
                              {
                                  type: 'checkbox',
                                  name: 'policy',
                                  id: 'policyCheck',
                                  required: '',
                                  checked: '',
                              },
                          ],
                          labels: [
                              {
                                  innerHTML:
                                      'Согласен (-на) с политикой конфиденциальности и обработки персональных данных',
                                  attrs: [{ for: 'policyCheck' }],
                              },
                          ],
                          method: 'sendNotifGNSSAct',
                      },
                      {
                          id: 'tab-paymentReq',
                          cards: [
                              {
                                  type: 'contactCard',
                                  icon: '/assets/contact/payment.svg',
                                  title: 'Оплата абонентской платы',
                              },
                          ],
                          inputs: [
                              {
                                  type: 'text',
                                  name: 'name',
                                  placeholder: 'ФИО плательщика',
                              },
                              {
                                  type: 'text',
                                  name: 'orderamount',
                                  placeholder: 'Сумма заказа',
                              },
                              {
                                  type: 'text',
                                  name: 'description',
                                  placeholder: 'Описание заказа',
                              },
                              {
                                  type: 'email',
                                  name: 'paymentemail',
                                  placeholder: 'E-mail',
                              },
                              {
                                  type: 'tel',
                                  name: 'payphone',
                                  placeholder: 'Контактный телефон',
                              },
                              {
                                  type: 'checkbox',
                                  name: 'policy',
                                  id: 'policyCheck',
                                  required: '',
                                  checked: '',
                              },
                          ],
                          labels: [
                              {
                                  innerHTML:
                                      'Согласен (-на) с политикой конфиденциальности и обработки персональных данных',
                                  attrs: [{ for: 'policyCheck' }],
                              },
                          ],
                          method: 'sendNotifPayment',
                      },
                  ],
              }
            : { tabs: [] },

        glonass: props.componentsEnabled.glonassEnabled
            ? {
                  elementsData: [
                      {
                          id: 'activation',
                          titles: [
                              {
                                  text: 'Заявка на активацию',
                                  classes: ['elTitle'],
                              },
                          ],
                          texts: [],
                          classes: [
                              'sectionElement',
                              'centrElement',
                              'defaultWidthElement',
                          ],
                          components: [
                              {
                                  id: 'TODO_sendGNSSActivationReqComponent',
                                  data: new ElementsComponent(
                                      {
                                          id: 'sendGNSSActivationReqElement',
                                          domParent: this.domApp,
                                          domSelf:
                                              document.createElement('div'),
                                      },
                                      {
                                          titles: [
                                              {
                                                  text: 'Оставить заявку на активацию ГЛОНАСС',
                                                  classes: [
                                                      'elTitle',
                                                      'elSubTitle1',
                                                  ],
                                              },
                                          ],
                                          texts: [],
                                          classes: ['subSectionElement'],
                                          components: [
                                              {
                                                  id: 'TODO',
                                                  data: new ButtonComponent({
                                                      id: '',
                                                      domParent: this.domApp,
                                                      server: this.server,
                                                      id: 'TODO_but_sendGNSSActivationReq',
                                                      text: 'Оставить',
                                                      type: 'callback2',
                                                      classes:
                                                          'appButton noSelect',
                                                      ajax: false,
                                                      req: 'glonass',
                                                      funcs: [
                                                          () => this.components.contact.callbacks.showContact(1),
                                                      ],
                                                  }),
                                              },
                                          ],
                                      },
                                  ), // new ElementsComponent
                              },
                              {
                                  id: 'TODO_whatForComponent',
                                  data: new ElementsComponent(
                                      {
                                          id: 'whatForElement',
                                          domParent: this.domApp,
                                          domSelf:
                                              document.createElement('div'),
                                      },
                                      {
                                          titles: [
                                              {
                                                  text: 'Для чего это надо?',
                                                  classes: [
                                                      'elTitle',
                                                      'elSubTitle1',
                                                  ],
                                              },
                                          ],
                                          texts: [
                                              {
                                                  id: 'whatForText',
                                                  class: null,
                                                  data: '<div></div>\
Подача заявки на активацию — это шаг, который переводит установленное оборудование в рабочее состояние, обеспечивая его реальные функции по безопасности и контролю. Оставить заявку на активацию ГЛОНАСС нужно для того, чтобы система экстренного оповещения ЭРА-ГЛОНАСС начала полноценно работать на вашем транспортном средстве. Активация — это обязательный этап после установки оборудования, при котором проверяется корректность монтажа, в систему вносятся данные автомобиля (VIN, модель и др.), и устройство регистрируется в базе. После активации терминал может автоматически или вручную отправлять сигналы тревоги и координаты экстренным службам при авариях, что значительно ускоряет реагирование и повышает безопасность на дороге. Также активация необходима для легализации машины и соблюдения законодательных требований в России.\
',
                                              },
                                          ],
                                          classes: ['subSectionElement'],
                                          components: [],
                                      },
                                  ), // new ElementsComponent
                              },
                          ],
                      }, // ElementsData 1
                      {
                          id: 'payment',
                          titles: [
                              {
                                  text: 'Оплата абонентской платы',
                                  classes: ['elTitle'],
                              },
                          ],
                          texts: [],
                          classes: [
                              'sectionElement',
                              'centrElement',
                              'defaultWidthElement',
                          ],
                          components: [
                              {
                                  id: 'TODO_sendGNSSActivationReqComponent',
                                  data: new ElementsComponent(
                                      {
                                          id: 'sendGNSSActivationReqElement',
                                          domParent: this.domApp,
                                          domSelf:
                                              document.createElement('div'),
                                      },
                                      {
                                          titles: [
                                              {
                                                  text: 'Оплата',
                                                  classes: [
                                                      'elTitle',
                                                      'elSubTitle1',
                                                  ],
                                              },
                                          ],
                                          texts: [],
                                          classes: ['subSectionElement'],
                                          components: [
                                              {
                                                  id: 'TODO',
                                                  data: new ButtonComponent({
                                                      id: '',
                                                      domParent: this.domApp,
                                                      server: this.server,
                                                      id: 'TODO_but_payGNSSActivation',
                                                      text: 'Оплатить',
                                                      type: 'callback2',
                                                      classes:
                                                          'appButton noSelect',
                                                      ajax: false,
                                                      req: 'glonass',
                                                      funcs: [
                                                          () => this.components.contact.callbacks.showContact(2),
                                                      ],
                                                  }),
                                              },
                                          ],
                                      },
                                  ), // new ElementsComponent
                              },
                              {
                                  id: 'TODO_publicOfferContractComponent',
                                  data: new ElementsComponent(
                                      {
                                          id: 'publicOfferContract',
                                          domParent: this.domApp,
                                          domSelf:
                                              document.createElement('div'),
                                      },
                                      {
                                          titles: [
                                              {
                                                  text: 'Публичный догофор оферта',
                                                  classes: [
                                                      'elTitle',
                                                      'elSubTitle1',
                                                  ],
                                              },
                                          ],
                                          texts: [
                                              {
                                                  id: 'publicOfferContractText',
                                                  class: null,
                                                  data: 'на предоставление услуг абонентского обслуживания навигационного оборудования ГЛОНАСС<br>TODO: СКАЧАТЬ button',
                                              },
                                          ],
                                          classes: ['subSectionElement'],
                                          components: [],
                                      },
                                  ), // new ElementsComponent
                              },
                              {
                                  id: 'TODO_organizaionInfoComponent',
                                  data: new ElementsComponent(
                                      {
                                          id: 'organizationInfo',
                                          domParent: this.domApp,
                                          domSelf:
                                              document.createElement('div'),
                                      },
                                      {
                                          titles: [
                                              {
                                                  text: 'Реквизиты организации',
                                                  classes: [
                                                      'elTitle',
                                                      'elSubTitle1',
                                                  ],
                                              },
                                          ],
                                          texts: [
                                              {
                                                  id: 'whatForText',
                                                  class: null,
                                                  data: 'ИП Мель К.В<br>ИНН 183500369500<br>ОГРНИП 324180000065828',
                                              },
                                          ],
                                          classes: ['subSectionElement'],
                                          components: [],
                                      },
                                  ), // new ElementsComponent
                              },
                          ],
                      }, // ElementsData 2
                  ],
              }
            : { elementsData: [] },
        footer: props.componentsEnabled.footerEnabled
            ? {
                  id: 'TODO_footer',
                  data: [
                      new ElementsComponent(
                          {
                              id: 'floor-0',
                              domParent: null,
                              domSelf: document.createElement('div'),
                          },
                          {
                              titles: [],
                              texts: [
                                  {
                                      id: null,
                                      data: '<img width="175.5px" src="assets/logo2.png"><img>',
                                  },
                                  {
                                      id: 'floor-0-number',
                                      data: this.number,
                                      class: 'footerText',
                                  },
                              ],
                              classes: [
                                  'centrElement',
                                  'defaultWidthElement',
                                  'footerFloor',
                              ],
                              components: [
                                  {
                                      id: null,
                                      data: new ButtonComponent({
                                          id: '',
                                          domParent: null,
                                          server: null,
                                          type: 'callback2',
                                          text: 'Заказать звонок',
                                          classes: 'appButton',
                                          funcs: [
                                              () => this.components.contact.callbacks.showContact(0),
                                          ],
                                      }),
                                  },
                              ],
                          },
                      ),
                      new ElementsComponent(
                          {
                              id: 'floor-1',
                              domParent: null,
                              domSelf: document.createElement('div'),
                          },
                          {
                              titles: [],
                              texts: [],
                              classes: ['centrElement', 'defaultWidthElement'],
                              components: [
                                  {
                                      id: null,
                                      data: new LinksComponent({
                                          id: 'floor-1-links',
                                          domParent: null,
                                          data: {
                                              links: this.links,
                                              linksClasses: 'link footerLink',
                                          },
                                          classes: 'footerFloor',
                                      }),
                                  },
                              ],
                          },
                      ),
                      new ElementsComponent(
                          {
                              id: 'floor-3',
                              domParent: null,
                              domSelf: document.createElement('div'),
                          },
                          {
                              titles: [],
                              texts: [
                                  {
                                      id: null,
                                      data: '© 2025 Все права защищены.',
                                      class: 'footerText',
                                  },
                                  {
                                      id: null,
                                      data: 'Сделано вручную. ❤️',
                                      class: 'footerText',
                                  },
                                  {
                                      id: null,
                                      data: '<a class="link footerLink" href="/policy">Политика конфиденциальности.</a>',
                                  },
                              ],
                              classes: [
                                  'centrElement',
                                  'footerFloor',
                                  'defaultWidthElement',
                              ],
                              components: [],
                          },
                      ),
                  ],
                  callbacks: {
                      hideContact: () => this.components.contact.callbacks.hideContact(0),
                      showContact: () => this.components.contact.callbacks.showContact(0),
                  },
              }
            : {},
        policy: props.componentsEnabled.policyEnabled
            ? {
                  titles: [
                      {
                          id: null,
                          classes: ['elTitle'],
                          text: 'Политика конфиденциальности',
                      },
                  ],
                  texts: [],
                  data: [
                      {
                          title: '1. Общие положения',
                          text: '<p><span style="font-size: 15px;">Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных ООО «ТАХОГРАФ ЭКСПЕРТ-ИЖЕВСК» (далее – Оператор).</span></p><ol><li><span style="font-size: 15px;">Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.</span></li><li><span style="font-size: 15px;">Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://tahografizh.ru/.</span></li></ol>',
                      },
                      {
                          title: '2. Основные понятия, используемые в Политике',
                          text: '<ol>\
<li><span style="font-size: 15px;">Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники;</span></li>\
<li><span style="font-size: 15px;">Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);</span></li>\
<li><span style="font-size: 15px;">Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://tahografizh.ru/;</span></li>\
<li><span style="font-size: 15px;">Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;</span></li>\
<li><span style="font-size: 15px;">Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных;</span></li>\
<li><span style="font-size: 15px;">Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;</span></li>\
<li><span style="font-size: 15px;">Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;</span></li>\
<li><span style="font-size: 15px;">Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта https://tahografizh.ru/;</span></li>\
<li><span style="font-size: 15px;">Пользователь – любой посетитель веб-сайта https://tahografizh.ru/;</span></li>\
<li><span style="font-size: 15px;">Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;</span></li>\
<li><span style="font-size: 15px;">Распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;</span></li>\
<li><span style="font-size: 15px;">Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;</span></li>\
<li><span style="font-size: 15px;">Уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) результате которых уничтожаются материальные носители персональных данных.</span></li>\
</ol>',
                      },
                      {
                          title: '3. Оператор может обрабатывать следующие персональные данные Пользователя',
                          text: '<ol>\
<li><span style="font-size: 15px;">Фамилия, имя, отчество;</span></li>\
<li><span style="font-size: 15px;">Электронный адрес;</span></li>\
<li><span style="font-size: 15px;">Номера телефонов;</span></li>\
<li><span style="font-size: 15px;">Год, месяц, дата и место рождения;</span></li>\
<li><span style="font-size: 15px;">Сведения об образовании, профессии, специальности и квалификации, реквизиты документов об образовании;</span></li>\
<li><span style="font-size: 15px;">Cведения о доходах;</span></li>\
<li><span style="font-size: 15px;">Cведения о занимаемых ранее должностях и стаже работы, воинской обязанности, воинском учете;</span></li>\
<li><span style="font-size: 15px;">Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).</span></li>\
<li><span style="font-size: 15px;">Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.</span></li>\
</ol>',
                      },
                      {
                          title: '4. Цели обработки персональных данных',
                          text: '<ol>\
<li><span style="font-size: 15px;">Цель обработки персональных данных Пользователя — информирование Пользователя посредством отправки электронных писем; заключение, исполнение и прекращение гражданско-правовых договоров; предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте.</span></li>\
<li><span style="font-size: 15px;">Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты tahoexp@yandex.ru с пометкой «Отказ от уведомлениях о новых продуктах и услугах и специальных предложениях».</span></li>\
<li><span style="font-size: 15px;">Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.</span></li>\
</ol>',
                      },
                      {
                          title: '5. Правовые основания обработки персональных данных',
                          text: '<ol>\
<li><span style="font-size: 15px;">Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте https://tahografizh.ru/. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.</span></li>\
<li><span style="font-size: 15px;">Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).</span></li>\
</ol>',
                      },
                      {
                          title: '6. Порядок сбора, хранения, передачи и других видов обработки персональных данных',
                          text: '<p><span style="font-size: 15px;">Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.</span></p>\
<ol>\
<li><span style="font-size: 15px;">Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</span></li>\
<li><span style="font-size: 15px;">Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.</span></li>\
<li><span style="font-size: 15px;">В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора tahoexp@yandex.ru с пометкой «Актуализация персональных данных».</span></li>\
<li><span style="font-size: 15px;">Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора tahoexp@yandex.ru с пометкой «Отзыв согласия на обработку персональных данных».</span></li>\
</ol>',
                      },
                      {
                          title: '7. Трансграничная передача персональных данных',
                          text: '\
<ol>\
<li><span style="font-size: 15px;">Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.</span></li>\
<li><span style="font-size: 15px;">Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.</span></li>\
</ol>',
                      },
                      {
                          title: '8. Заключительные положения',
                          text: '\
<ol>\
<li><span style="font-size: 15px;">Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты tahoexp@yandex.ru.</span></li>\
<li><span style="font-size: 15px;">В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.</span></li>\
<li><span style="font-size: 15px;">Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу https://tahografizh.ru/politika-konfidencialnosti/.</span></li>\
</ol>',
                      },
                  ],
              }
            : {},
    };

    this.components.header.enabled = props.componentsEnabled.headerEnabled;
    this.components.main.enabled = props.componentsEnabled.mainEnabled;
    this.components.banner.enabled = props.componentsEnabled.bannerEnabled;
    this.components.admin.enabled = props.componentsEnabled.adminEnabled;
    this.components.catalog.enabled = props.componentsEnabled.catalogEnabled;
    this.components.contact.enabled = props.componentsEnabled.contactEnabled;
    this.components.glonass.enabled = props.componentsEnabled.glonassEnabled;
    this.components.policy.enabled = props.componentsEnabled.policyEnabled;
    this.components.footer.enabled = props.componentsEnabled.footerEnabled;

    // TODO:
    this.RENDER = true;
    this.DARK_THEME = true;
}
