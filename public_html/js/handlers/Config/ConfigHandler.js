import ServerHandler from '../Server/ServerHandler.js';
import ElementsComponent from '../../components/ElementsComponent/ElementsComponent.js';
import CardComponent from '../../components/CardComponent/CardComponent.js';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent.js';

export default function ConfigHandler(props) {
    /* props: {server:{serverURL}, RENDER, DARK_THEME} */
    this.domApp = document.createElement('div');

    this.server = new ServerHandler({
        serverURL: 'http://localhost:3000',
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
                                  classes: ['elTitle'],
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
                                          classes: [],
                                          components: [
                                              {
                                                  id: 'TODO',
                                                  data: new CardComponent(
                                                      {
                                                          id: 'glonassElementCard',
                                                          domParent:
                                                              this.domApp,
                                                      },
                                                      {
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
                                                              hideContact:
                                                                  () => {
                                                                      this.components.contact.tabs[0].hide();
                                                                      this.components.contact.data.hide();
                                                                  },
                                                              showContact:
                                                                  () => {
                                                                      this.components.contact.data.show();
                                                                      this.components.contact.tabs[0].show();
                                                                  },
                                                          },
                                                      },
                                                  ),
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
                                          classes: [],
                                          components: [
                                              {
                                                  id: 'TODO',
                                                  data: new CardComponent(
                                                      {
                                                          id: 'videoElementCard',
                                                          domParent:
                                                              this.domApp,
                                                      },
                                                      {
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
                                                              hideContact:
                                                                  () => {
                                                                      this.components.contact.tabs[0].hide();
                                                                      this.components.contact.data.hide();
                                                                  },
                                                              showContact:
                                                                  () => {
                                                                      this.components.contact.data.show();
                                                                      this.components.contact.tabs[0].show();
                                                                  },
                                                          },
                                                      },
                                                  ),
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
                          components: [],
                      },
                      {
                          id: 'contacts',
                          titles: [
                              {
                                  text: 'Контакты',
                                  classes: ['elTitle'],
                              },
                          ],
                          texts: [
                              {
                                  id: 'contacts1Element',
                                  class: 'contactElementText',
                                  data: 'Россия, Удмуртская республика, г. Ижевск, ул. Ленина, д. 146, офис 104\
							<div style="position:relative;overflow:hidden;height: 250px;"><a href="https://yandex.com/maps/org/takhograf_ekspert/218381161146/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Тахограф Эксперт</a><a href="https://yandex.com/maps/44/izhevsk/category/auto_accessories/184105286/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Auto accessories in Izhevsk</a><iframe src="https://yandex.com/map-widget/v1/?ll=53.323761%2C56.813366&mode=search&oid=218381161146&ol=biz&utm_source=share&z=11.47" width="100%" height="100%" allowfullscreen="true" style="position:relative;border:none;"></iframe></div>',
                              },
                              /*{
							id: 'contacts2Element',
							class: 'contactElementText',
							data:'Россия, Респ. Татарстан, Набережные Челны, Мензелинский тракт, 38/1\
							<div style="position:relative;overflow:hidden;"><a href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Yandex Maps</a><a href="https://yandex.com/maps/236/naberezhnie-chelny/house/menzelinskiy_trakt_38_1/YUsYcgdnTEQBQFtvfXtxcXpkbQ==/?ll=52.611688%2C55.686617&utm_medium=mapframe&utm_source=maps&z=10.57" style="color:#eee;font-size:12px;position:absolute;top:14px;">Yandex Maps</a><iframe src="https://yandex.com/map-widget/v1/?ll=52.611688%2C55.686617&mode=whatshere&whatshere%5Bpoint%5D=52.407516%2C55.700679&whatshere%5Bzoom%5D=17&z=10.57" width="100%" height="100%" allowfullscreen="true" style="position:relative;border:none;"></iframe></div>'
						},*/
                              {
                                  id: 'contacts2Element',
                                  class: 'contactElementText',
                                  data: 'Россия, Пермский край, г. Чайковский, ул. Советская, д. 1/12, корпус 6\
							<div style="position:relative;overflow:hidden;height: 250px"><a href="https://yandex.com/maps/20243/chaikovsky/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Chaikovsky</a><a href="https://yandex.com/maps/20243/chaikovsky/house/sovetskaya_ulitsa_1_12/YU0YdwVjSUQGQFtsfXt2d3phZQ==/?ll=54.150532%2C56.770842&utm_medium=mapframe&utm_source=maps&z=13.73" style="color:#eee;font-size:12px;position:absolute;top:14px;">Yandex Maps</a><iframe src="https://yandex.com/map-widget/v1/?ll=54.150532%2C56.770842&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo0MTM5NzM5Mzg2EmLQoNC-0YHRgdC40Y8sINCf0LXRgNC80YHQutC40Lkg0LrRgNCw0LksINCn0LDQudC60L7QstGB0LrQuNC5LCDQodC-0LLQtdGC0YHQutCw0Y8g0YPQu9C40YbQsCwgMS8xMiIKDfd9WEIVQxtjQg%2C%2C&z=13.73" width="100%" height="100%" allowfullscreen="true" style="position:relative;border:none;"></iframe></div>',
                              },
                          ],
                          classes: ['contactsElement'],
                          components: [],
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
                          classes: [],
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
                          classes: [],
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
                      },
                      {
                          id: 'tab-activationReq',
                          title: 'Оставить заявку на активацию ГЛОНАСС',
                          inputs: [
                              { type: 'text', name: 'vin', placeholder: 'VIN' },
                              {
                                  type: 'text',
                                  name: 'email',
                                  placeholder: 'Email',
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
                                  type: 'text',
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
                          classes: [],
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
                          classes: [],
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
