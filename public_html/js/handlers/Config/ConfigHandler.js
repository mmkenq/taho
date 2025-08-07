import ServerHandler from '../Server/ServerHandler.js';
import ElementsComponent from '../../components/ElementsComponent/ElementsComponent.js';
import CardComponent from '../../components/CardComponent/CardComponent.js';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent.js';
import SliderComponent from '../../components/SliderComponent/SliderComponent.js';

export default function ConfigHandler(props) {
    /* props: {server:{serverURL}, RENDER, DARK_THEME} */
    this.domApp = document.createElement('div');

    this.server = new ServerHandler({
        serverURL: 'http://192.168.0.100:3000',
    });

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
                  h1Title:
                      'Глонасс/Видеонаблюдение на все виды транспортных средств',
                  h2Title:
                      'Профессиональное обслуживание и установка глонасс / видео',
                  buts: [
                      {
                          id: 'TODO_but_catalog_glonass_id',
                          title: 'Каталог приборов',
                          type: 'getPage',
                          ajax: true,
                          req: 'getCatalog&name=taho_catalog_glonass',
                      },
                      {
                          id: 'TODO_but_glonass_subscription',
                          title: 'Абонентское обслуживание ГЛОНАСС',
                          type: 'getPage',
                          ajax: false,
                          req: 'glonass',
                      },
                  ],
                  links: [
                      {
                          id: 'TODO_link_tg',
                          title: 'Мы в Telegram',
                          href: 'https://t.me/tahografexp',
                          innerHTML:
                              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="24px" height="24px"><circle style="fill:#29B6F6;" cx="24" cy="24" r="20"/><path style="fill:#FFFFFF;" d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733  l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468  c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"/><path style="fill:#B0BEC5;" d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043  l0.964-5.965L23,30.505z"/><path style="fill:#CFD8DC;" d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912  c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"/></svg><span class="link-text">Мы в Telegram</span>',
                      },
                      {
                          id: 'TODO_link_vk',
                          title: 'Мы во Вконтакте',
                          href: 'https://vk.com/tahografexp',
                          innerHTML:
                              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" width="24px" height="24px"><path style="fill:#1976D2;" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5  V37z"/><path style="fill:#FFFFFF;" d="M35.937,18.041c0.046-0.151,0.068-0.291,0.062-0.416C35.984,17.263,35.735,17,35.149,17h-2.618  c-0.661,0-0.966,0.4-1.144,0.801c0,0-1.632,3.359-3.513,5.574c-0.61,0.641-0.92,0.625-1.25,0.625C26.447,24,26,23.786,26,23.199  v-5.185C26,17.32,25.827,17,25.268,17h-4.649C20.212,17,20,17.32,20,17.641c0,0.667,0.898,0.827,1,2.696v3.623  C21,24.84,20.847,25,20.517,25c-0.89,0-2.642-3-3.815-6.932C16.448,17.294,16.194,17,15.533,17h-2.643  C12.127,17,12,17.374,12,17.774c0,0.721,0.6,4.619,3.875,9.101C18.25,30.125,21.379,32,24.149,32c1.678,0,1.85-0.427,1.85-1.094  v-2.972C26,27.133,26.183,27,26.717,27c0.381,0,1.158,0.25,2.658,2c1.73,2.018,2.044,3,3.036,3h2.618  c0.608,0,0.957-0.255,0.971-0.75c0.003-0.126-0.015-0.267-0.056-0.424c-0.194-0.576-1.084-1.984-2.194-3.326  c-0.615-0.743-1.222-1.479-1.501-1.879C32.062,25.36,31.991,25.176,32,25c0.009-0.185,0.105-0.361,0.249-0.607  C32.223,24.393,35.607,19.642,35.937,18.041z"/></svg><span class="link-text">Мы во Вконтакте</span>',
                      },
                  ],
                  // 1920x1080
                  pic: '/assets/truck-pic.jpg',
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
                                  classes: ['elTitle', 'centrElement'],
                              },
                          ],
                          // TODO: ListItemsComponent
                          texts: [],
                          classes: [],
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
                                          classes: ['centrElement'],
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
                                                          hideContact: () => {
                                                              this.components.contact.tabs[0].hide();
                                                              this.components.contact.data.hide();
                                                          },
                                                          showContact: () => {
                                                              this.components.contact.data.show();
                                                              this.components.contact.tabs[0].show();
                                                          },
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
                                          classes: ['centrElement'],
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
                                                          hideContact: () => {
                                                              this.components.contact.tabs[0].hide();
                                                              this.components.contact.data.hide();
                                                          },
                                                          showContact: () => {
                                                              this.components.contact.data.show();
                                                              this.components.contact.tabs[0].show();
                                                          },
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
                                  classes: ['elTitle'],
                              },
                          ],
                          texts: [
                              {
                                  id: '',
                                  class: null,
                                  data: 'Мы являемся официальным представителем компании FTNet.\
									Лицензия №0006189 Рег. № 16 Н от 26 июля 2018г.',
                                  //Нажмите на кнопку, чтобы выполнить проверку на сайте Минтранса РФ',
                              },
                          ],
                          classes: [],
                          components: [
                              {
                                  id: 'TODO_slider',
                                  data: new SliderComponent({
                                      id: 'TODO_sliderComponent',
                                      domParent: this.domApp,
                                      cards: [
                                          new CardComponent({
                                              id: 'sliderCard1',
                                              type: 'sliderCard',
                                              classes: 'appSliderCard',
                                              icon: '/assets/exprerience.png',
                                              titles: [
                                                  {
                                                      text: 'Более 5 лет',
                                                      classes: ['sliderTitle'],
                                                  },
                                                  {
                                                      text: 'работаем на рынке',
                                                      classes: ['sliderTitle sliderSubTitle'],
                                                  },
                                              ],
                                          }),
                                          new CardComponent({
                                              id: 'sliderCard2',
                                              type: 'sliderCard',
                                              classes: 'appSliderCard',
                                              icon: '/assets/warranty.png',
                                              titles: [
                                                  {
                                                      text: 'Обслуживание',
                                                      classes: ['sliderTitle'],
                                                  },
                                                  {
                                                      text: 'гарантийное и постгарантийное',
                                                      classes: ['sliderTitle sliderSubTitle'],
                                                  },
                                              ],
                                          }),
                                          new CardComponent({
                                              id: 'sliderCard3',
                                              type: 'sliderCard',
                                              classes: 'appSliderCard',
                                              icon: '/assets/clients.png',
                                              titles: [
                                                  {
                                                      text: 'Более 400',
                                                      classes: ['sliderTitle'],
                                                  },
                                                  {
                                                      text: 'довольных клиентов',
                                                      classes: ['sliderTitle sliderSubTitle'],
                                                  },
                                              ],
                                          }),
                                          new CardComponent({
                                              id: 'sliderCard4',
                                              type: 'sliderCard',
                                              classes: 'appSliderCard',
                                              icon: '/assets/visit.png',
                                              titles: [
                                                  {
                                                      text: '24/7',
                                                      classes: ['sliderTitle'],
                                                  },
                                                  {
                                                      text: 'выезд специалиста',
                                                      classes: ['sliderTitle sliderSubTitle'],
                                                  },
                                              ],
                                          }),
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
                                  classes: ['elTitle', 'centrElement'],
                              },
                          ],
                          texts: [],
                          classes: ['contactsElement'],
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
                                          classes: ['centrElement'],
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
                          classes: ['centrElement'],
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
                                                  data: new ButtonComponent(
                                                      {
                                                          id: '',
                                                          domParent:
                                                              this.domApp,
                                                          server: this.server,
                                                      },
                                                      {
                                                          type: 'uploadFile',
                                                          text: 'Выбрать файл',
                                                      },
                                                  ),
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
                          classes: ['centrElement'],
                          components: [],
                      }, // ElementsData 2
                  ],
              }
            : { elementsData: [] },

        // TODO:
        catalog: props.componentsEnabled.catalogEnabled
            ? {
                  callbacks: {
                      hideContact: () => {
                          this.components.contact.tabs[0].hide();
                          this.components.contact.data.hide();
                      },
                      showContact: () => {
                          this.components.contact.data.show();
                          this.components.contact.tabs[0].show();
                      },
                  },

                  /* data for Creating CatalogComponent */
                  /* filled with getCatalog() reqs */
                  // TODO
                  catalogsData: [
                      /*
				title: ...,
				active: ...,
				elementsData: ...,
			*/
                  ],

                  /* Component */
                  /* filled while creating CatalogComponent() */
                  /* At the same time catalogsData deleted */
                  catalogs: [],
              }
            : { catalogsData: [] },

        contact: props.componentsEnabled.contactEnabled
            ? {
                  id: 'contact-0',

                  /* Components */
                  /* filled while creating ContactComponent() */
                  /* At the same time tabsData deleted */
                  tabs: [],

                  /* data for creating tabs in ContactComponent */
                  tabsData: [
                      {
                          id: 'tab-dmUs',
                          title: 'Оставьте заявку, чтобы мы с вами связались :D',
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
                          title: 'Оставить заявку на активацию ГЛОНАСС',
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
                          title: 'Оплата абонентской платы',
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
                          classes: ['centrElement'],
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
                                          classes: [],
                                          components: [
                                              {
                                                  id: 'TODO',
                                                  data: new ButtonComponent(
                                                      {
                                                          id: '',
                                                          domParent:
                                                              this.domApp,
                                                          server: this.server,
                                                      },
                                                      {
                                                          id: 'TODO_but_sendGNSSActivationReq',
                                                          text: 'Оставить',
                                                          type: 'callback',
                                                          ajax: false,
                                                          req: 'glonass',
                                                          callbacks: {
                                                              hideContact:
                                                                  () => {
                                                                      this.components.contact.tabs[1].hide();
                                                                      this.components.contact.data.hide();
                                                                  },
                                                              showContact:
                                                                  () => {
                                                                      this.components.contact.data.show();
                                                                      this.components.contact.tabs[1].show();
                                                                  },
                                                          },
                                                      },
                                                  ),
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
                                          classes: [],
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
                          classes: ['centrElement'],
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
                                          classes: [],
                                          components: [
                                              {
                                                  id: 'TODO',
                                                  data: new ButtonComponent(
                                                      {
                                                          id: '',
                                                          domParent:
                                                              this.domApp,
                                                          server: this.server,
                                                      },
                                                      {
                                                          id: 'TODO_but_payGNSSActivation',
                                                          text: 'Оплатить',
                                                          type: 'callback',
                                                          ajax: false,
                                                          req: 'glonass',
                                                          callbacks: {
                                                              hideContact:
                                                                  () => {
                                                                      this.components.contact.tabs[2].hide();
                                                                      this.components.contact.data.hide();
                                                                  },
                                                              showContact:
                                                                  () => {
                                                                      this.components.contact.data.show();
                                                                      this.components.contact.tabs[2].show();
                                                                  },
                                                          },
                                                      },
                                                  ),
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
                                          classes: [],
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
                                          classes: [],
                                          components: [],
                                      },
                                  ), // new ElementsComponent
                              },
                          ],
                      }, // ElementsData 2
                  ],
              }
            : { elementsData: [] },
    };

    this.components.header.enabled = props.componentsEnabled.headerEnabled;
    this.components.main.enabled = props.componentsEnabled.mainEnabled;
    this.components.banner.enabled = props.componentsEnabled.bannerEnabled;
    this.components.admin.enabled = props.componentsEnabled.adminEnabled;
    this.components.catalog.enabled = props.componentsEnabled.catalogEnabled;
    this.components.contact.enabled = props.componentsEnabled.contactEnabled;
    this.components.glonass.enabled = props.componentsEnabled.glonassEnabled;

    // TODO:
    this.RENDER = true;
    this.DARK_THEME = true;
}
