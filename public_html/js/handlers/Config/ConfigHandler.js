import ServerHandler from '../Server/ServerHandler.js';

export default function ConfigHandler(props){
	/* props: {server:{serverURL}, RENDER, DARK_THEME} */

	this.server = new ServerHandler({
		serverURL: "http://localhost:3000",
	});

	this.components = {
		header:
		{
			check: 11,
			darkTheme: true,
		},

		banner:
		{
			h1Title: "Глонасс/Видеонаблюдение на все виды транспортных средств",
			h2Title: "Профессиональное обслуживание и установка глонасс / видео",
			buts:
			[
				{
					id: 'TODO_but_catalog_cam_id', 
					title: 'Каталог камер', 
					req: 'getCatalog&name=taho_catalog_cameras',
				},
				{
					id: 'TODO_but_catalog_glonass_id',
					title: 'Каталог устройств глонасс',
					req: 'getCatalog&name=taho_catalog_glonass', 
				},
			],
			// 1920x1080
			pic: '/assets/truck-pic.jpg',
		},

		main:
		{
			check: 1234,
		},
	};

	// TODO:
	this.RENDER = true;
	this.DARK_THEME = true;
}
