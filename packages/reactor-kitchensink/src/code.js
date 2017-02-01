export default {
	"Grid": [
		{
			"file": "Grid.js",
			"content": "import React, { Component } from 'react';\nimport { Grid } from '@extjs/reactor/modern';\nimport data from './data';\n\nExt.require('Ext.grid.plugin.*')\n\nexport default class GridExample extends Component {\n\n    constructor() {\n        super();\n        this.store = Ext.create('Ext.data.Store', {\n            data\n        });\n    }\n\n    render() {\n        return (\n            <Grid\n                title=\"Grid\" \n                store={this.store}\n                shadow={true} \n                plugins={[\n                    { type: 'columnresizing'}\n                ]}\n                columns={[\n                    { text: 'ID', dataIndex: 'id', width: 80, },\n                    { text: 'First Name', dataIndex: 'first_name', width: 125 },\n                    { text: 'Last Name', dataIndex: 'last_name', width: 125 },\n                    { text: 'Email', dataIndex: 'email', width: 300 },\n                    { text: 'Gender', dataIndex: 'gender', width: 100 },\n                    { text: 'IP Address', dataIndex: 'ip_address', width: 200 },\n                ]}\n            />\n        )\n    }\n}"
		},
		{
			"file": "data.js",
			"content": "export default [{\n  \"id\": 1,\n  \"first_name\": \"Jerry\",\n  \"last_name\": \"Woods\",\n  \"email\": \"jwoods0@hp.com\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"153.116.29.168\"\n}, {\n  \"id\": 2,\n  \"first_name\": \"Todd\",\n  \"last_name\": \"Medina\",\n  \"email\": \"tmedina1@altervista.org\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"232.80.114.75\"\n}, {\n  \"id\": 3,\n  \"first_name\": \"Roy\",\n  \"last_name\": \"Andrews\",\n  \"email\": \"randrews2@berkeley.edu\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"146.231.62.140\"\n}, {\n  \"id\": 4,\n  \"first_name\": \"Russell\",\n  \"last_name\": \"Cooper\",\n  \"email\": \"rcooper3@yandex.ru\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"118.135.35.155\"\n}, {\n  \"id\": 5,\n  \"first_name\": \"Adam\",\n  \"last_name\": \"Gonzales\",\n  \"email\": \"agonzales4@yellowpages.com\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"225.132.24.150\"\n}, {\n  \"id\": 6,\n  \"first_name\": \"Nicholas\",\n  \"last_name\": \"Martinez\",\n  \"email\": \"nmartinez5@nyu.edu\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"63.88.181.86\"\n}, {\n  \"id\": 7,\n  \"first_name\": \"Michael\",\n  \"last_name\": \"Hunter\",\n  \"email\": \"mhunter6@narod.ru\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"201.26.139.28\"\n}, {\n  \"id\": 8,\n  \"first_name\": \"Shirley\",\n  \"last_name\": \"Burton\",\n  \"email\": \"sburton7@i2i.jp\",\n  \"gender\": \"Female\",\n  \"ip_address\": \"249.243.219.143\"\n}, {\n  \"id\": 9,\n  \"first_name\": \"Keith\",\n  \"last_name\": \"Palmer\",\n  \"email\": \"kpalmer8@vistaprint.com\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"18.96.108.188\"\n}, {\n  \"id\": 10,\n  \"first_name\": \"Bruce\",\n  \"last_name\": \"Shaw\",\n  \"email\": \"bshaw9@elpais.com\",\n  \"gender\": \"Male\",\n  \"ip_address\": \"170.3.117.25\"\n}];"
		}
	],
	"List": [
		{
			"file": "List.js",
			"content": "import React, { Component } from 'react';\nimport { List } from '@extjs/reactor/modern';\nimport data from './data';\n\nExt.require([\n    'Ext.Toast',\n    'Ext.MessageBox'\n]);\n\nexport default class ListExample extends Component {\n\n    constructor() {\n        super();\n        this.store = Ext.create('Ext.data.Store', { \n            data,\n            grouper: {\n                groupFn: function(record) {\n                    return record.get('last_name')[0];\n                }\n            },\n            sorters: ['last_name', 'first_name']\n        });\n    }\n\n    render() {\n        return (\n            <List\n                indexBar={true}\n                shadow={true}\n                itemTpl=\"{first_name} {last_name}\"\n                grouped={true}\n                pinHeaders={true}\n                store={this.store}\n                onItemTap={(view, index, target, record) => {\n                    Ext.toast(`You selected ${record.get('first_name')} ${record.get('last_name')}.`)\n                }}\n                onItemDisclosure={(record, btn, index) => {\n                    Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('first_name'), Ext.emptyFn);\n                }}\n            />\n        )\n    }\n    \n}"
		},
		{
			"file": "data.js",
			"content": "export default [{\"id\":1,\"first_name\":\"Catherine\",\"last_name\":\"Alvarez\"},\n{\"id\":2,\"first_name\":\"Linda\",\"last_name\":\"Washington\"},\n{\"id\":3,\"first_name\":\"Eric\",\"last_name\":\"Griffin\"},\n{\"id\":4,\"first_name\":\"Pamela\",\"last_name\":\"Sanders\"},\n{\"id\":5,\"first_name\":\"Marie\",\"last_name\":\"Evans\"},\n{\"id\":6,\"first_name\":\"Rebecca\",\"last_name\":\"Black\"},\n{\"id\":7,\"first_name\":\"Martin\",\"last_name\":\"Woods\"},\n{\"id\":8,\"first_name\":\"Paul\",\"last_name\":\"Stewart\"},\n{\"id\":9,\"first_name\":\"Ruby\",\"last_name\":\"Peterson\"},\n{\"id\":10,\"first_name\":\"Gregory\",\"last_name\":\"Stephens\"},\n{\"id\":11,\"first_name\":\"Irene\",\"last_name\":\"Hawkins\"},\n{\"id\":12,\"first_name\":\"Brandon\",\"last_name\":\"Stephens\"},\n{\"id\":13,\"first_name\":\"Julie\",\"last_name\":\"Ray\"},\n{\"id\":14,\"first_name\":\"Donald\",\"last_name\":\"Kelly\"},\n{\"id\":15,\"first_name\":\"Martha\",\"last_name\":\"Lawrence\"},\n{\"id\":16,\"first_name\":\"Jason\",\"last_name\":\"Franklin\"},\n{\"id\":17,\"first_name\":\"Harold\",\"last_name\":\"Perry\"},\n{\"id\":18,\"first_name\":\"Kathryn\",\"last_name\":\"Stevens\"},\n{\"id\":19,\"first_name\":\"Alice\",\"last_name\":\"Hansen\"},\n{\"id\":20,\"first_name\":\"Christine\",\"last_name\":\"Garza\"},\n{\"id\":21,\"first_name\":\"Christine\",\"last_name\":\"Moore\"},\n{\"id\":22,\"first_name\":\"Susan\",\"last_name\":\"Robinson\"},\n{\"id\":23,\"first_name\":\"Annie\",\"last_name\":\"Mendoza\"},\n{\"id\":24,\"first_name\":\"Laura\",\"last_name\":\"Hall\"},\n{\"id\":25,\"first_name\":\"Barbara\",\"last_name\":\"Jordan\"},\n{\"id\":26,\"first_name\":\"Dorothy\",\"last_name\":\"Cook\"},\n{\"id\":27,\"first_name\":\"James\",\"last_name\":\"Reid\"},\n{\"id\":28,\"first_name\":\"David\",\"last_name\":\"Gutierrez\"},\n{\"id\":29,\"first_name\":\"Lawrence\",\"last_name\":\"Rogers\"},\n{\"id\":30,\"first_name\":\"Maria\",\"last_name\":\"Garza\"},\n{\"id\":31,\"first_name\":\"Robert\",\"last_name\":\"Chavez\"},\n{\"id\":32,\"first_name\":\"Brenda\",\"last_name\":\"Franklin\"},\n{\"id\":33,\"first_name\":\"Janice\",\"last_name\":\"Palmer\"},\n{\"id\":34,\"first_name\":\"Adam\",\"last_name\":\"Gordon\"},\n{\"id\":35,\"first_name\":\"Carol\",\"last_name\":\"Rice\"},\n{\"id\":36,\"first_name\":\"George\",\"last_name\":\"Mendoza\"},\n{\"id\":37,\"first_name\":\"Steve\",\"last_name\":\"Fields\"},\n{\"id\":38,\"first_name\":\"Louis\",\"last_name\":\"Rogers\"},\n{\"id\":39,\"first_name\":\"Ryan\",\"last_name\":\"Andrews\"},\n{\"id\":40,\"first_name\":\"Cheryl\",\"last_name\":\"Fernandez\"},\n{\"id\":41,\"first_name\":\"Lawrence\",\"last_name\":\"Black\"},\n{\"id\":42,\"first_name\":\"Linda\",\"last_name\":\"Clark\"},\n{\"id\":43,\"first_name\":\"Kevin\",\"last_name\":\"Palmer\"},\n{\"id\":44,\"first_name\":\"Evelyn\",\"last_name\":\"Sims\"},\n{\"id\":45,\"first_name\":\"Brenda\",\"last_name\":\"Griffin\"},\n{\"id\":46,\"first_name\":\"Lawrence\",\"last_name\":\"Woods\"},\n{\"id\":47,\"first_name\":\"Amy\",\"last_name\":\"Oliver\"},\n{\"id\":48,\"first_name\":\"Todd\",\"last_name\":\"Simpson\"},\n{\"id\":49,\"first_name\":\"Gloria\",\"last_name\":\"Patterson\"},\n{\"id\":50,\"first_name\":\"Scott\",\"last_name\":\"Greene\"},\n{\"id\":51,\"first_name\":\"Rachel\",\"last_name\":\"Gray\"},\n{\"id\":52,\"first_name\":\"Peter\",\"last_name\":\"Ray\"},\n{\"id\":53,\"first_name\":\"Martin\",\"last_name\":\"Porter\"},\n{\"id\":54,\"first_name\":\"Jean\",\"last_name\":\"Gutierrez\"},\n{\"id\":55,\"first_name\":\"Gary\",\"last_name\":\"Webb\"},\n{\"id\":56,\"first_name\":\"Billy\",\"last_name\":\"Bell\"},\n{\"id\":57,\"first_name\":\"Charles\",\"last_name\":\"Nelson\"},\n{\"id\":58,\"first_name\":\"Annie\",\"last_name\":\"Diaz\"},\n{\"id\":59,\"first_name\":\"Daniel\",\"last_name\":\"Watkins\"},\n{\"id\":60,\"first_name\":\"Terry\",\"last_name\":\"Watson\"},\n{\"id\":61,\"first_name\":\"Teresa\",\"last_name\":\"Dunn\"},\n{\"id\":62,\"first_name\":\"Nancy\",\"last_name\":\"Pierce\"},\n{\"id\":63,\"first_name\":\"Cynthia\",\"last_name\":\"Martinez\"},\n{\"id\":64,\"first_name\":\"Beverly\",\"last_name\":\"Matthews\"},\n{\"id\":65,\"first_name\":\"Keith\",\"last_name\":\"Crawford\"},\n{\"id\":66,\"first_name\":\"Christopher\",\"last_name\":\"Banks\"},\n{\"id\":67,\"first_name\":\"Gregory\",\"last_name\":\"Hansen\"},\n{\"id\":68,\"first_name\":\"Joyce\",\"last_name\":\"Hunt\"},\n{\"id\":69,\"first_name\":\"Nancy\",\"last_name\":\"Rice\"},\n{\"id\":70,\"first_name\":\"Dorothy\",\"last_name\":\"Murray\"},\n{\"id\":71,\"first_name\":\"George\",\"last_name\":\"Griffin\"},\n{\"id\":72,\"first_name\":\"Marie\",\"last_name\":\"Adams\"},\n{\"id\":73,\"first_name\":\"James\",\"last_name\":\"Oliver\"},\n{\"id\":74,\"first_name\":\"Joshua\",\"last_name\":\"Wood\"},\n{\"id\":75,\"first_name\":\"Martha\",\"last_name\":\"Marshall\"},\n{\"id\":76,\"first_name\":\"Shawn\",\"last_name\":\"Sanders\"},\n{\"id\":77,\"first_name\":\"Melissa\",\"last_name\":\"Cook\"},\n{\"id\":78,\"first_name\":\"Shawn\",\"last_name\":\"Martinez\"},\n{\"id\":79,\"first_name\":\"Roy\",\"last_name\":\"Clark\"},\n{\"id\":80,\"first_name\":\"Douglas\",\"last_name\":\"Carroll\"},\n{\"id\":81,\"first_name\":\"Joan\",\"last_name\":\"Jordan\"},\n{\"id\":82,\"first_name\":\"Stephen\",\"last_name\":\"Kennedy\"},\n{\"id\":83,\"first_name\":\"Alan\",\"last_name\":\"Coleman\"},\n{\"id\":84,\"first_name\":\"Patrick\",\"last_name\":\"Morris\"},\n{\"id\":85,\"first_name\":\"Sean\",\"last_name\":\"Fisher\"},\n{\"id\":86,\"first_name\":\"Jeremy\",\"last_name\":\"Hernandez\"},\n{\"id\":87,\"first_name\":\"Irene\",\"last_name\":\"Foster\"},\n{\"id\":88,\"first_name\":\"Larry\",\"last_name\":\"Roberts\"},\n{\"id\":89,\"first_name\":\"Adam\",\"last_name\":\"Gibson\"},\n{\"id\":90,\"first_name\":\"Willie\",\"last_name\":\"Lawson\"},\n{\"id\":91,\"first_name\":\"Marilyn\",\"last_name\":\"Stanley\"},\n{\"id\":92,\"first_name\":\"Emily\",\"last_name\":\"Wilson\"},\n{\"id\":93,\"first_name\":\"Billy\",\"last_name\":\"Gilbert\"},\n{\"id\":94,\"first_name\":\"Keith\",\"last_name\":\"Kelly\"},\n{\"id\":95,\"first_name\":\"Scott\",\"last_name\":\"Daniels\"},\n{\"id\":96,\"first_name\":\"Philip\",\"last_name\":\"Romero\"},\n{\"id\":97,\"first_name\":\"Phillip\",\"last_name\":\"Olson\"},\n{\"id\":98,\"first_name\":\"Diane\",\"last_name\":\"Richards\"},\n{\"id\":99,\"first_name\":\"Wanda\",\"last_name\":\"Gonzales\"},\n{\"id\":100,\"first_name\":\"Julia\",\"last_name\":\"Duncan\"},\n{\"id\":101,\"first_name\":\"Rachel\",\"last_name\":\"Medina\"},\n{\"id\":102,\"first_name\":\"Larry\",\"last_name\":\"Grant\"},\n{\"id\":103,\"first_name\":\"Donald\",\"last_name\":\"Baker\"},\n{\"id\":104,\"first_name\":\"Ryan\",\"last_name\":\"Phillips\"},\n{\"id\":105,\"first_name\":\"Rebecca\",\"last_name\":\"Burke\"},\n{\"id\":106,\"first_name\":\"Donald\",\"last_name\":\"Morris\"},\n{\"id\":107,\"first_name\":\"Susan\",\"last_name\":\"Perry\"},\n{\"id\":108,\"first_name\":\"Emily\",\"last_name\":\"Wright\"},\n{\"id\":109,\"first_name\":\"Annie\",\"last_name\":\"Duncan\"},\n{\"id\":110,\"first_name\":\"Cheryl\",\"last_name\":\"Perez\"},\n{\"id\":111,\"first_name\":\"Aaron\",\"last_name\":\"Robertson\"},\n{\"id\":112,\"first_name\":\"Willie\",\"last_name\":\"Weaver\"},\n{\"id\":113,\"first_name\":\"Russell\",\"last_name\":\"Gomez\"},\n{\"id\":114,\"first_name\":\"Samuel\",\"last_name\":\"Kennedy\"},\n{\"id\":115,\"first_name\":\"Jennifer\",\"last_name\":\"Burton\"},\n{\"id\":116,\"first_name\":\"Kathy\",\"last_name\":\"Sims\"},\n{\"id\":117,\"first_name\":\"James\",\"last_name\":\"Palmer\"},\n{\"id\":118,\"first_name\":\"Thomas\",\"last_name\":\"Williamson\"},\n{\"id\":119,\"first_name\":\"Fred\",\"last_name\":\"Cox\"},\n{\"id\":120,\"first_name\":\"Jacqueline\",\"last_name\":\"Walker\"},\n{\"id\":121,\"first_name\":\"Dennis\",\"last_name\":\"Stanley\"},\n{\"id\":122,\"first_name\":\"Eric\",\"last_name\":\"Stanley\"},\n{\"id\":123,\"first_name\":\"Billy\",\"last_name\":\"Jackson\"},\n{\"id\":124,\"first_name\":\"Michael\",\"last_name\":\"Sanders\"},\n{\"id\":125,\"first_name\":\"Diane\",\"last_name\":\"Knight\"},\n{\"id\":126,\"first_name\":\"Maria\",\"last_name\":\"Gardner\"},\n{\"id\":127,\"first_name\":\"Jeffrey\",\"last_name\":\"Shaw\"},\n{\"id\":128,\"first_name\":\"Justin\",\"last_name\":\"Cole\"},\n{\"id\":129,\"first_name\":\"Terry\",\"last_name\":\"Oliver\"},\n{\"id\":130,\"first_name\":\"Anne\",\"last_name\":\"Harper\"},\n{\"id\":131,\"first_name\":\"Harold\",\"last_name\":\"Wright\"},\n{\"id\":132,\"first_name\":\"Lois\",\"last_name\":\"Bradley\"},\n{\"id\":133,\"first_name\":\"Aaron\",\"last_name\":\"Collins\"},\n{\"id\":134,\"first_name\":\"Walter\",\"last_name\":\"Richards\"},\n{\"id\":135,\"first_name\":\"Paul\",\"last_name\":\"Brown\"},\n{\"id\":136,\"first_name\":\"Billy\",\"last_name\":\"Nichols\"},\n{\"id\":137,\"first_name\":\"Daniel\",\"last_name\":\"Price\"},\n{\"id\":138,\"first_name\":\"Willie\",\"last_name\":\"Rice\"},\n{\"id\":139,\"first_name\":\"Raymond\",\"last_name\":\"Banks\"},\n{\"id\":140,\"first_name\":\"Pamela\",\"last_name\":\"Alvarez\"},\n{\"id\":141,\"first_name\":\"Adam\",\"last_name\":\"Bennett\"},\n{\"id\":142,\"first_name\":\"George\",\"last_name\":\"Dean\"},\n{\"id\":143,\"first_name\":\"Edward\",\"last_name\":\"Powell\"},\n{\"id\":144,\"first_name\":\"Anne\",\"last_name\":\"Carpenter\"},\n{\"id\":145,\"first_name\":\"Paula\",\"last_name\":\"Jordan\"},\n{\"id\":146,\"first_name\":\"Judith\",\"last_name\":\"Lee\"},\n{\"id\":147,\"first_name\":\"Elizabeth\",\"last_name\":\"Boyd\"},\n{\"id\":148,\"first_name\":\"Paula\",\"last_name\":\"Coleman\"},\n{\"id\":149,\"first_name\":\"Christina\",\"last_name\":\"Gilbert\"},\n{\"id\":150,\"first_name\":\"Kimberly\",\"last_name\":\"Stone\"},\n{\"id\":151,\"first_name\":\"Helen\",\"last_name\":\"Gonzalez\"},\n{\"id\":152,\"first_name\":\"Phyllis\",\"last_name\":\"Perkins\"},\n{\"id\":153,\"first_name\":\"Denise\",\"last_name\":\"Shaw\"},\n{\"id\":154,\"first_name\":\"Janice\",\"last_name\":\"Howell\"},\n{\"id\":155,\"first_name\":\"Kathleen\",\"last_name\":\"Moore\"},\n{\"id\":156,\"first_name\":\"Ronald\",\"last_name\":\"Rogers\"},\n{\"id\":157,\"first_name\":\"Tammy\",\"last_name\":\"Smith\"},\n{\"id\":158,\"first_name\":\"Margaret\",\"last_name\":\"Myers\"},\n{\"id\":159,\"first_name\":\"Robin\",\"last_name\":\"Ortiz\"},\n{\"id\":160,\"first_name\":\"Sharon\",\"last_name\":\"Stone\"},\n{\"id\":161,\"first_name\":\"Stephen\",\"last_name\":\"Wood\"},\n{\"id\":162,\"first_name\":\"Gloria\",\"last_name\":\"Davis\"},\n{\"id\":163,\"first_name\":\"Ann\",\"last_name\":\"Simmons\"},\n{\"id\":164,\"first_name\":\"Jeremy\",\"last_name\":\"Robertson\"},\n{\"id\":165,\"first_name\":\"Nicole\",\"last_name\":\"Mccoy\"},\n{\"id\":166,\"first_name\":\"Victor\",\"last_name\":\"Owens\"},\n{\"id\":167,\"first_name\":\"Evelyn\",\"last_name\":\"Perez\"},\n{\"id\":168,\"first_name\":\"Matthew\",\"last_name\":\"Cooper\"},\n{\"id\":169,\"first_name\":\"Robin\",\"last_name\":\"Harvey\"},\n{\"id\":170,\"first_name\":\"Lillian\",\"last_name\":\"Owens\"},\n{\"id\":171,\"first_name\":\"Rebecca\",\"last_name\":\"Elliott\"},\n{\"id\":172,\"first_name\":\"Harry\",\"last_name\":\"Brooks\"},\n{\"id\":173,\"first_name\":\"Harold\",\"last_name\":\"Snyder\"},\n{\"id\":174,\"first_name\":\"Alan\",\"last_name\":\"Hernandez\"},\n{\"id\":175,\"first_name\":\"Betty\",\"last_name\":\"Fernandez\"},\n{\"id\":176,\"first_name\":\"Julie\",\"last_name\":\"Day\"},\n{\"id\":177,\"first_name\":\"Christina\",\"last_name\":\"Dean\"},\n{\"id\":178,\"first_name\":\"James\",\"last_name\":\"Bell\"},\n{\"id\":179,\"first_name\":\"Doris\",\"last_name\":\"Kelley\"},\n{\"id\":180,\"first_name\":\"Jane\",\"last_name\":\"Daniels\"},\n{\"id\":181,\"first_name\":\"Emily\",\"last_name\":\"Brown\"},\n{\"id\":182,\"first_name\":\"Timothy\",\"last_name\":\"Johnston\"},\n{\"id\":183,\"first_name\":\"Rachel\",\"last_name\":\"White\"},\n{\"id\":184,\"first_name\":\"Anna\",\"last_name\":\"Johnston\"},\n{\"id\":185,\"first_name\":\"Lori\",\"last_name\":\"Ramirez\"},\n{\"id\":186,\"first_name\":\"Albert\",\"last_name\":\"Butler\"},\n{\"id\":187,\"first_name\":\"Nancy\",\"last_name\":\"Perry\"},\n{\"id\":188,\"first_name\":\"Jeffrey\",\"last_name\":\"Fox\"},\n{\"id\":189,\"first_name\":\"Mary\",\"last_name\":\"Arnold\"},\n{\"id\":190,\"first_name\":\"Nicholas\",\"last_name\":\"Stephens\"},\n{\"id\":191,\"first_name\":\"Brenda\",\"last_name\":\"Tucker\"},\n{\"id\":192,\"first_name\":\"Janet\",\"last_name\":\"Hanson\"},\n{\"id\":193,\"first_name\":\"Aaron\",\"last_name\":\"George\"},\n{\"id\":194,\"first_name\":\"Joyce\",\"last_name\":\"Hansen\"},\n{\"id\":195,\"first_name\":\"Jessica\",\"last_name\":\"Mendoza\"},\n{\"id\":196,\"first_name\":\"Joan\",\"last_name\":\"Stevens\"},\n{\"id\":197,\"first_name\":\"Lillian\",\"last_name\":\"Adams\"},\n{\"id\":198,\"first_name\":\"Nicholas\",\"last_name\":\"Knight\"},\n{\"id\":199,\"first_name\":\"Judy\",\"last_name\":\"Payne\"},\n{\"id\":200,\"first_name\":\"Patrick\",\"last_name\":\"Torres\"}];"
		}
	],
	"NestedList": [
		{
			"file": "NestedList.js",
			"content": "import React, { Component } from 'react';\nimport { NestedList } from '@extjs/reactor/modern';\nimport root from './data';\n\nExt.require('Ext.Toast');\n\nexport default class ListExample extends Component {\n\n    constructor() {\n        super();\n        this.store = Ext.create('Ext.data.TreeStore', { \n            root \n        });\n    }\n\n    render() {\n        return (\n            <NestedList\n                title=\"Products\"\n                shadow={true}\n                displayField=\"text\"\n                store={this.store}\n                onLeafItemTap={(nestedList, list, index, target, record) => Ext.toast(`You selected ${record.get('text')}`)}\n            />\n        )\n    }\n    \n}"
		},
		{
			"file": "data.js",
			"content": "export default {\n    \"children\": [{\n        \"text\": \"Cars\",\n        \"children\": [{\n            \"text\": \"Asia\",\n            \"children\": [{\n                \"text\": \"Japan\",\n                \"children\": [{\n                    \"text\": \"Acura\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Honda\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Infiniti\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Mitsubishi\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Nissan\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Scion\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Subaru\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Toyota\",\n                    \"leaf\": true\n                }]\n            },{\n                \"text\": \"Korea\",\n                \"children\": [{\n                    \"text\": \"Hyundai\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Kia\",\n                    \"leaf\": true\n                }]\n            }]\n        },{\n            \"text\": \"United Kingdom\",\n            \"children\": [{\n                \"text\": \"Aston Martin\",\n                \"leaf\": true\n            },{\n                \"text\": \"Bentley\",\n                \"leaf\": true\n            },{\n                \"text\": \"TVR\",\n                \"leaf\": true\n            },{\n                \"text\": \"Land Rover\",\n                \"leaf\": true\n            }]\n        },{\n            \"text\": \"Europe\",\n            \"children\": [{\n                \"text\": \"Germany\",\n                \"children\": [{\n                    \"text\": \"Audi\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"BMW\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Opel\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Porsche\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Volkswagen\",\n                    \"leaf\": true\n                }]\n            },{\n                \"text\": \"France\",\n                \"children\": [{\n                    \"text\": \"Citroën\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Renault\",\n                    \"leaf\": true\n                },{\n                    \"text\": \"Peugeot\",\n                    \"leaf\": true\n                }]\n            }]\n        },{\n            \"text\": \"United States\",\n            \"children\": [{\n                \"text\": \"Buick\",\n                \"leaf\": true\n            },{\n                \"text\": \"Cadillac\",\n                \"leaf\": true\n            },{\n                \"text\": \"Chevrolet\",\n                \"leaf\": true\n            },{\n                \"text\": \"Chrysler\",\n                \"leaf\": true\n            },{\n                \"text\": \"Ford\",\n                \"leaf\": true\n            },{\n                \"text\": \"Jeep\",\n                \"leaf\": true\n            },{\n                \"text\": \"Oldsmobile\",\n                \"leaf\": true\n            },{\n                \"text\": \"Saturn\",\n                \"leaf\": true\n            },{\n                \"text\": \"Tesla\",\n                \"leaf\": true\n            }]\n        }]\n    }]\n}"
		}
	],
	"Panel": [
		{
			"file": "Panel.js",
			"content": "import React from 'react';\nimport { Panel } from '@extjs/reactor/modern';\n\nexport default function PanelExample() {\n    return (\n        <Panel \n            shadow={true} \n            title=\"Panel\" \n            html=\"Panel Body\" \n            height={300}\n            width={500}\n        />\n    )\n}"
		}
	],
	"TabPanel": [
		{
			"file": "TabPanel.js",
			"content": "import React from 'react';\nimport { TabPanel, Panel, Component } from '@extjs/reactor/modern';\n\nexport default function TabPanelExample() {\n    return (\n        <TabPanel height={300} width={500} shadow={true}>\n            <Panel title=\"Tab 1\">\n                <Component html=\"Tab 1 content\"/>\n            </Panel>\n            <Panel title=\"Tab 2\">\n                <Component html=\"Tab 2 content\"/>\n            </Panel>\n        </TabPanel>\n    )\n}"
		}
	],
	"Toolbar": [
		{
			"file": "Toolbar.js",
			"content": "import React, { Component } from 'react';\nimport { Toolbar, Panel, Button, SegmentedButton, Spacer } from '@extjs/reactor/modern';\n\nexport default class ToolbarExample extends Component {\n\n    constructor() {\n        super();\n        this.state = { message: '' }\n    }\n\n    tapHandler(button) {\n        this.setState({ message: `User tapped \"${button.getText()}\"` })\n    }\n\n    render() {\n        const { message } = this.state;\n\n        return (\n            <Panel height={300} width={500} shadow={true} bodyPadding={0}>\n                <Toolbar docked=\"top\">\n                    <Button text=\"Default\" onTap={this.tapHandler.bind(this)}/>\n                    <Spacer/>\n                    <SegmentedButton>\n                        <Button text=\"Option 1\" pressed={true}  onTap={this.tapHandler.bind(this)}/>\n                        <Button text=\"Option 2\" onTap={this.tapHandler.bind(this)}/>\n                    </SegmentedButton>\n                    <Spacer/>\n                    <Button ui=\"action\" text=\"Action\" onTap={this.tapHandler.bind(this)}/>\n                </Toolbar>\n               <div style={{padding: '20px'}}>{ message }</div>\n            </Panel>\n        )\n    }\n}"
		}
	],
	"Tree": [
		{
			"file": "Tree.js",
			"content": "import React, { Component } from 'react';\nimport { Tree } from '@extjs/reactor/modern';\nimport data from './data';\n\nExt.require('Ext.app.ViewModel');\n\nexport default class TreeExample extends Component {\n\n    constructor() {\n        super();\n        this.store = Ext.create('Ext.data.TreeStore', {\n            rootVisible: true,\n            root: data\n        })\n    }\n\n    render() {\n        return (\n            <Tree\n                width={350}\n                height={400}\n                store={this.store}\n                shadow={true}\n            />\n        )\n    }\n}"
		},
		{
			"file": "data.js",
			"content": "export default {\n    expanded: true,\n    text: 'All',\n    iconCls: 'x-fa fa-sitemap',\n    children: [{\n        text: 'Home',\n        iconCls: 'x-fa fa-home',\n        children: [{\n            text: 'Messages',\n            iconCls: 'x-fa fa-inbox',\n            leaf: true\n        }, {\n            text: 'Archive',\n            iconCls: 'x-fa fa-database',\n            children: [{\n                text: 'First',\n                iconCls: 'x-fa fa-sliders',\n                leaf: true\n            }, {\n                text: 'No Icon',\n                iconCls: null,\n                leaf: true\n            }]\n        }, {\n            text: 'Music',\n            iconCls: 'x-fa fa-music',\n            leaf: true\n        }, {\n            text: 'Video',\n            iconCls: 'x-fa fa-film',\n            leaf: true\n        }]\n    }, {\n        text: 'Users',\n        iconCls: 'x-fa fa-user',\n        children: [{\n            text: 'Tagged',\n            iconCls: 'x-fa fa-tag',\n            leaf: true\n        }, {\n            text: 'Inactive',\n            iconCls: 'x-fa fa-trash',\n            leaf: true\n        }]\n    }, {\n        text: 'Groups',\n        iconCls: 'x-fa fa-group',\n        leaf: true\n    }, {\n        text: 'Settings',\n        iconCls: 'x-fa fa-wrench',\n        children: [{\n            text: 'Sharing',\n            iconCls: 'x-fa fa-share-alt',\n            leaf: true\n        }, {\n            text: 'Notifications',\n            iconCls: 'x-fa fa-flag',\n            leaf: true\n        }, {\n            text: 'Network',\n            iconCls: 'x-fa fa-signal',\n            leaf: true\n        }]\n    }]\n};"
		}
	],
	"TreeList": [
		{
			"file": "TreeList.js",
			"content": "import React, { Component } from 'react';\nimport { Panel, TreeList, Toolbar, SegmentedButton, Button } from '@extjs/reactor/modern';\nimport data from './data';\n\nexport default class TreeListExample extends Component {\n\n    constructor() {\n        super();\n\n        this.store = Ext.create('Ext.data.TreeStore', {\n            rootVisible: true,\n            root: data\n        });\n\n        this.state = {\n            nav: false,\n            micro: false,\n            width: undefined\n        };\n    }\n\n    toggleNav(button, nav) {\n        this.setState({ nav });\n    }\n\n    toggleMicro(button, micro) {\n        this.setState({ \n            micro, \n            nav: micro || this.state.nav,\n            width: micro ? 56 : undefined\n        });\n    }\n\n    render() {\n        const { micro, nav, width } = this.state;\n\n        return (\n            <Panel title=\"TreeList\" shadow={true} layout=\"fit\">\n                <Toolbar docked=\"top\">\n                    <SegmentedButton allowMultiple={true}>\n                        <Button text=\"Nav\" pressed={nav} onPressedChange={this.toggleNav.bind(this)} disabled={micro}/>\n                        <Button text=\"Micro\" pressed={micro} onPressedChange={this.toggleMicro.bind(this)}/>\n                    </SegmentedButton>\n                </Toolbar>\n\n                <TreeList      \n                    ref=\"tree\"  \n                    width={width}\n                    expanderOnly={false}\n                    store={this.store}\n                    micro={micro}\n                    ui={nav ? 'nav' : null}\n                />\n            </Panel>\n        )\n    }\n}"
		},
		{
			"file": "data.js",
			"content": "export default {\n    expanded: true,\n    text: 'All',\n    iconCls: 'x-fa fa-sitemap',\n    children: [{\n        text: 'Home',\n        iconCls: 'x-fa fa-home',\n        children: [{\n            text: 'Messages',\n            iconCls: 'x-fa fa-inbox',\n            leaf: true\n        }, {\n            text: 'Archive',\n            iconCls: 'x-fa fa-database',\n            children: [{\n                text: 'First',\n                iconCls: 'x-fa fa-sliders',\n                leaf: true\n            }, {\n                text: 'No Icon',\n                iconCls: null,\n                leaf: true\n            }]\n        }, {\n            text: 'Music',\n            iconCls: 'x-fa fa-music',\n            leaf: true\n        }, {\n            text: 'Video',\n            iconCls: 'x-fa fa-film',\n            leaf: true\n        }]\n    }, {\n        text: 'Users',\n        iconCls: 'x-fa fa-user',\n        children: [{\n            text: 'Tagged',\n            iconCls: 'x-fa fa-tag',\n            leaf: true\n        }, {\n            text: 'Inactive',\n            iconCls: 'x-fa fa-trash',\n            leaf: true\n        }]\n    }, {\n        text: 'Groups',\n        iconCls: 'x-fa fa-group',\n        leaf: true\n    }, {\n        text: 'Settings',\n        iconCls: 'x-fa fa-wrench',\n        children: [{\n            text: 'Sharing',\n            iconCls: 'x-fa fa-share-alt',\n            leaf: true\n        }, {\n            text: 'Notifications',\n            iconCls: 'x-fa fa-flag',\n            leaf: true\n        }, {\n            text: 'Network',\n            iconCls: 'x-fa fa-signal',\n            leaf: true\n        }]\n    }]\n};"
		}
	]
}