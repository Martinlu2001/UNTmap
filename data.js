//aca van todos los puntos del a unt
//primero las facultades
/*
ciencias agropecuarias
ciencias biologicas
ciencias economicas
ciencias fisicas
ciencias sociales
derecho
educacion
enfermeria
farmacia
ingenieria
ingenieria quimica
 */
//luego las escuelas
/*administracion
agronomia
antropologia
arquelogia
arquitectura
ciencias politicas
ciencias biologicas
contabilidad y finanzas
derecho y ciencias politicas
economia
educacion inicial
educacion primaria
educacion secundaria
enfermeria
estadistica
farmacia y bioquimica
fisica
informatica
historia
ing agricola
ing agroindustrial
ing ambiental
ing civil
ing industrial
ing materiales
ing mecanica
ing mecatronica
ing metalurgica
ing minas
ing quimica
ing sistemas
microbiologia
matematicas
trabajo social
turismo
zootecnia
*/
//los administrativos
let puntos=[
//     ciencias agropecuarias
// ciencias biologicas
// ciencias economicas
// ciencias fisicas
// ciencias sociales
// derecho
// educacion
// enfermeria
// farmacia
// ingenieria
// ingenieria quimica
    //facultades
    {
        name:"Ciencias agropecuarias",
        lat:-8.11472369865675, 
        lng:-79.03686397776752,
        address: "",
        //phone: 123456,
        image: ['fotos-escuelas/administracion/admin1.jpg', 'fotos-escuelas/administracion/admin2.jpg','fotos-escuelas/administracion/admin3.jpg'],
        cuadro:[ {lat:-8.115127907570512,  lng: -79.03739375072293},
            {lat:-8.114419397107413,   lng:-79.0367535870475},
            {lat:-8.11462436769518,  lng: -79.0365052495681},
            {lat:-8.115312615143287,  lng: -79.03713562858641},
            {lat:-8.115127907570512,  lng: -79.03739375072293}
        ]
    },
    {
        name:"Ciencias biologicas",
        lat:-8.112060579569524, 
        lng:-79.03778493848075,
        address: "",
        //phone: 123456,
        image: ['fotos-escuelas/administracion/admin1.jpg', 'fotos-escuelas/administracion/admin2.jpg','fotos-escuelas/administracion/admin3.jpg'],
        cuadro:[ {lat:-8.111949053983938, lng:  -79.03779969063027},
            {lat:-8.112054604985364,   lng:-79.03766826238926},
            {lat:-8.112164802856654, lng: -79.037769515779  },
            {lat:-8.112058588041483, lng:  -79.037898261811 },
            {lat:-8.111949053983938, lng:  -79.03779969063027},
    
        ]
    },
    {
        name:"Ciencias economicas",
        lat:-8.11277839753441, 
        lng:-79.03695625193264,
        address: " ",
        //phone: 123456,
        image: ['fotos-escuelas/administracion/admin1.jpg', 'fotos-escuelas/administracion/admin2.jpg','fotos-escuelas/administracion/admin3.jpg'],
        cuadro:[{lat:-8.11240233878183, lng: -79.03705362452745 },
            {lat:-8.112584927604136,  lng:-79.03675069089626},
            {lat:-8.112757548472599, lng: -79.03689192431183 },
            {lat:-8.112935457966001,  lng: -79.03671556907042},
            {lat:-8.113262067724431,  lng: -79.03697373168661},
            {lat:-8.11354419992614,   lng: -79.03676787214567},
            {lat:-8.113655061230745,   lng:-79.03686912553566},
            {lat:-8.112959267743088,    lng:-79.03759996078401},
            {lat:-8.11240233878183, lng: -79.03705362452745 }
        ]
    },
    {
        name:"Ciencias fisicas y matematicas",
        lat:-8.11307286931189, 
        lng:-79.03819796801693,
        address: "",
        //phone: 123456,
        image: ['fotos-escuelas/administracion/admin1.jpg', 'fotos-escuelas/administracion/admin2.jpg','fotos-escuelas/administracion/admin3.jpg'],
        cuadro:[ {lat:-8.112610184358417, lng:  -79.03811123537479 },
            {lat:-8.11286120281791,  lng:-79.0377883785054 },
            {lat:-8.113440580627946,lng:  -79.0383254420363  },
            {lat:-8.113151809947073,  lng: -79.03866541202764},
            {lat:-8.112610184358417, lng:  -79.03811123537479 },
    
        ]
    },
    {
        name:"Ciencias sociales",
        lat:-8.11233819866093, 
        lng:-79.03565336404809,
        address: "",
        //phone: 123456,
        image: ['fotos-escuelas/administracion/admin1.jpg', 'fotos-escuelas/administracion/admin2.jpg','fotos-escuelas/administracion/admin3.jpg'],
        cuadro:[  {lat:-8.112035165253172, lng: -79.03575327626734},
            {lat:-8.112333894371586,  lng:-79.0353455804981},
            {lat:-8.112608724960863, lng: -79.03564732901077},
            {lat:-8.112280851781945, lng: -79.0359934276919},
            {lat:-8.112035165253172, lng: -79.03575327626734}
        ]
    },
    {
        name:"Derecho y ciencias politicas",
        lat:-8.114067118040618, 
        lng:-79.03690776342704,
        address: "1 puerta UNT ",
        //phone: 123456,
        image: ['fotos-escuelas/administracion/admin1.jpg', 'fotos-escuelas/administracion/admin2.jpg','fotos-escuelas/administracion/admin3.jpg'],
        cuadro:[ {lat:-8.113986900424218,  lng:  -79.03689361080939},
            {lat:-8.114110374553807,    lng:-79.03669378623869},
            {lat:-8.1144821243881,   lng:-79.03706996605112},
            {lat:-8.114365952601277,   lng: -79.0372248636214},
            {lat:-8.113986900424218,  lng:  -79.03689361080939}
        ]
    },
    {
        name:"Educacion",
        lat:-8.113208199272824, 
        lng:-79.03605424676671,
        address: "",
        //phone: 123456,
        image: ['fotos-escuelas/administracion/admin1.jpg', 'fotos-escuelas/administracion/admin2.jpg','fotos-escuelas/administracion/admin3.jpg'],
        cuadro:[ {lat:-8.113023651492162,  lng:-79.036178298933 },
            {lat:-8.113139159825225,  lng:-79.03591276024193 },
            {lat:-8.11304555824645, lng: -79.03579675470237  },
            {lat:-8.113121899962403,  lng: -79.03570086573029 },
            {lat:-8.113496969912566,   lng:-79.03605089400537},
            {lat:-8.113246702035708,   lng: -79.03640494559417},
            {lat:-8.113023651492162,  lng:-79.036178298933},
        ]
    },
    {
        name:"Enfermeria",
        lat:-8.117485087455822,
        lng: -79.03962674549288,
        address: "3 puerta UNT ",
        //phone: 123456,
        image: ['fotos-escuelas/administracion/admin1.jpg', 'fotos-escuelas/administracion/admin2.jpg','fotos-escuelas/administracion/admin3.jpg'],
        cuadro:[ {lat:-8.117141081335406, lng:  -79.0396530894685},
            {lat:-8.117483619686755,  lng: -79.03917699737038},
            {lat:-8.118037439276588,  lng: -79.03968917941722},
            {lat:-8.11767317631316,  lng: -79.04011382641517},
            {lat:-8.117141081335406, lng:  -79.0396530894685}
        ]
    },
    {
        name:"Farmacia y Bioquimica",
        lat:-8.110906170213948, 
        lng:-79.03800968254228,
        address: "1 y 3 piso de la facultad de Ciencias Economicas, ",
        //phone: 123456,
        image: ['fotos-escuelas/administracion/admin1.jpg', 'fotos-escuelas/administracion/admin2.jpg','fotos-escuelas/administracion/admin3.jpg'],
        cuadro:[  {lat:-8.110515915614423,lng: -79.03774909568293},
            {lat:-8.110982256059122 , lng:-79.03713010270589},
            {lat:-8.111468821845504 ,lng: -79.03762754289194},
            {lat:-8.111004131010322 ,lng: -79.03817605463513},
            {lat:-8.110515915614423,lng: -79.03774909568293}
        ]
    },
    {
        name:"Ingenieria",
        lat:-8.113998984323302,
        lng: -79.03897994518574,
        address: " ",
        //phone: 123456,
        image: ['fotos-escuelas/administracion/admin1.jpg', 'fotos-escuelas/administracion/admin2.jpg','fotos-escuelas/administracion/admin3.jpg'],
        cuadro:[ {lat:-8.113899408389305,  lng: -79.03897860408125 },
            {lat:-8.113999648162773,   lng:-79.038857234124},
            {lat:-8.114119139250796,  lng: -79.03895647585699 },
            {lat:-8.114018235667693,   lng: -79.039079857471},
            {lat:-8.113899408389305,  lng: -79.03897860408125 },
        ]
    },
    {
        name:"Ingeniera Quimica",
        lat:-8.113262691214569, 
        lng:-79.03897467993117,
        address: " ",
        //phone: 123456,
        image: ['fotos-escuelas/administracion/admin1.jpg', 'fotos-escuelas/administracion/admin2.jpg','fotos-escuelas/administracion/admin3.jpg'],
        cuadro:[ {lat:-8.113049598294548,  lng: -79.03906654558946},
            {lat:-8.113310487742439, lng: -79.03874132774806 },
            {lat:-8.113467154097478,  lng: -79.03887476764581 },
            {lat:-8.113214230840388,   lng: -79.03919797383077},
            {lat:-8.113049598294548,  lng: -79.03906654558946},
        ]
    },
    //escuelas
    {
        name:"Administracion",
        lat:-8.113154628494163, 
        lng:-79.03719484519546,
        address: "1 y 3 piso de la facultad de Ciencias Economicas, ",
        //phone: 123456,
        image: ['fotos-escuelas/administracion/admin1.jpg', 'fotos-escuelas/administracion/admin2.jpg','fotos-escuelas/administracion/admin3.jpg'],
        cuadro:[ {lat:-8.11240233878183, lng: -79.03705362452745 },
            {lat:-8.112584927604136,  lng:-79.03675069089626},
            {lat:-8.112757548472599, lng: -79.03689192431183 },
            {lat:-8.112935457966001,  lng: -79.03671556907042},
            {lat:-8.113262067724431,  lng: -79.03697373168661},
            {lat:-8.11354419992614,   lng: -79.03676787214567},
            {lat:-8.113655061230745,   lng:-79.03686912553566},
            {lat:-8.112959267743088,    lng:-79.03759996078401},
            {lat:-8.11240233878183, lng: -79.03705362452745 }
        ]
    },
    {
        name:"Agricola",
        lat:-8.11447700811068, 
        lng:-79.03672182015359,
        address: "1 piso de la facultad de Agropecuarias",
        //phone: 123456,
        image: ['fotos-escuelas/agricola/agricola.jpg'],
        cuadro:[ {lat:-8.115127907570512,  lng: -79.03739375072293},
            {lat:-8.114419397107413,   lng:-79.0367535870475},
            {lat:-8.11462436769518,  lng: -79.0365052495681},
            {lat:-8.115312615143287,  lng: -79.03713562858641},
            {lat:-8.115127907570512,  lng: -79.03739375072293}]
    },
    {
        name:"Agroindustrial",
        lat:-8.114960946230678,
        lng: -79.03702088645865,
        address: "2 piso de la facultad de Agropecuarias",
        //phone: 123456,
        image: ['fotos-escuelas/agroindustrual/agroindustrial1.jpg', 'fotos-escuelas/agroindustrual/agroindustrial2.jpg'],
        cuadro:[{lat:-8.115127907570512,  lng: -79.03739375072293},
            {lat:-8.114419397107413,   lng:-79.0367535870475},
            {lat:-8.11462436769518,  lng: -79.0365052495681},
            {lat:-8.115312615143287,  lng: -79.03713562858641},
            {lat:-8.115127907570512,  lng: -79.03739375072293}]
    },
    {
        name:"Agronomia",
        lat:-8.115131552531812, 
        lng:-79.03720327667064 ,
        address: "2 piso de la facultad de Agropecuarias",
        //phone: 123456,
        image: ['fotos-escuelas/agronomia/agronomia1.jpg', 'fotos-escuelas/agronomia/agronomia2.jpg'],
        cuadro:[ {lat:-8.115127907570512,  lng: -79.03739375072293},
            {lat:-8.114419397107413,   lng:-79.0367535870475},
            {lat:-8.11462436769518,  lng: -79.0365052495681},
            {lat:-8.115312615143287,  lng: -79.03713562858641},
            {lat:-8.115127907570512,  lng: -79.03739375072293}]
    },
    {
        name:"Antropologia",
        lat:-8.112392312482726, 
        lng:-79.03582033149225,
        address: "2 piso de la facultad de Ciencias Sociales",
        //phone: 123456,
        image: ['facebook.png', 'mapa.png'],
        cuadro:[ {lat:-8.112035165253172, lng: -79.03575327626734},
            {lat:-8.112333894371586,  lng:-79.0353455804981},
            {lat:-8.112608724960863, lng: -79.03564732901077},
            {lat:-8.112280851781945, lng: -79.0359934276919},
            {lat:-8.112035165253172, lng: -79.03575327626734}]
    },
    {
        name:"Arqueologia",
        lat:-8.112462679742492, 
        lng:-79.0357190781025,
        address: "2 piso de la facultad de Ciencias Sociales",
        //phone: 123456,
        image: ['facebook.png', 'mapa.png'],
        cuadro:[ {lat:-8.112035165253172, lng: -79.03575327626734},
            {lat:-8.112333894371586,  lng:-79.0353455804981},
            {lat:-8.112608724960863, lng: -79.03564732901077},
            {lat:-8.112280851781945, lng: -79.0359934276919},
            {lat:-8.112035165253172, lng: -79.03575327626734}]
    },
    {
        name:"Arquitectura",
        lat:-8.115416760635805, 
        lng:-79.03995509623508,
        address: "Al costado de Ing civil",
        //phone: 123456,
        image: ['fotos-escuelas/arquitectura/arqui1.jpg', 'fotos-escuelas/arquitectura/arqui2.jpg','fotos-escuelas/arquitectura/arqui3.jpg'],
        cuadro:[ {lat:-8.1151791068681,  lng: -79.04014888583555},
            {lat:-8.115565029924655,  lng:-79.03969333249118 },
            {lat:-8.11564734569065,  lng:-79.03975770550718},
            {lat:-8.115257009485154,lng:  -79.04021971600908 },
            {lat:-8.1151791068681,  lng: -79.04014888583555}]
    },
    {
        name:"Ciencias biologicas",
        lat:-8.112328904868441,
        lng: -79.03862416610252,
        address: "Detras de la facultad de CFM",
        //phone: 123456,
        image: ['fotos-escuelas/cienciasbiol/biologia1.jpg', 'fotos-escuelas/cienciasbiol/biologia2.jpg', 'fotos-escuelas/cienciasbiol/biologia3.jpg'],
        cuadro:[ {lat:-8.112072661682245, lng:  -79.03874285385125},
            {lat:-8.112375373822658,   lng:-79.03836600348632},
            {lat:-8.112534032068819,  lng: -79.03850346669746},
            {lat:-8.11220042534933,  lng: -79.038888873603},
            {lat:-8.112072661682245, lng:  -79.03874285385125}]
    },
    {
        name:"Ciencias politicas y gob.",
        lat:-8.114089795533175,
        lng:  -79.03688489363013,
        address: "Facultad de Derecho y CCPP",
        //phone: 123456,
        image: ['fotos-escuelas/cienciaspoli/cienciapol1.jpg', 'fotos-escuelas/cienciaspoli/cienciapol2.jpg','fotos-escuelas/cienciaspoli/cienciapol3.jpg'],
        cuadro:[ {lat:-8.113986900424218,  lng:  -79.03689361080939},
            {lat:-8.114110374553807,    lng:-79.03669378623869},
            {lat:-8.1144821243881,   lng:-79.03706996605112},
            {lat:-8.114365952601277,   lng: -79.0372248636214},
            {lat:-8.113986900424218,  lng:  -79.03689361080939}]
    },
    {
        name:"Contabilidad",
        lat:-8.113427723658775, 
        lng:-79.03702459062134,
        address: "1 piso de la facultad de Ciencias Economicas, ",
        //phone: 123456,
        image: ['fotos-escuelas/contabilidad/conta1.jpg', 'fotos-escuelas/contabilidad/conta2.jpg','fotos-escuelas/contabilidad/conta3.jpg'],
        cuadro:[ {lat:-8.11240233878183, lng: -79.03705362452745 },
            {lat:-8.112584927604136,  lng:-79.03675069089626},
            {lat:-8.112757548472599, lng: -79.03689192431183 },
            {lat:-8.112935457966001,  lng: -79.03671556907042},
            {lat:-8.113262067724431,  lng: -79.03697373168661},
            {lat:-8.11354419992614,   lng: -79.03676787214567},
            {lat:-8.113655061230745,   lng:-79.03686912553566},
            {lat:-8.112959267743088,    lng:-79.03759996078401},
            {lat:-8.11240233878183, lng: -79.03705362452745 }
        ]
    },
    {
        name:"Economia",
        lat:-8.112612428102, 
        lng:-79.03716964455988,
        address: "2 y 1 piso de la facultad de Ciencias Economicas, ",
        //phone: 123456,
        image: ['fotos-escuelas/economia/eco1.jpg', 'fotos-escuelas/economia/eco2.jpg'],
        cuadro:[ {lat:-8.11240233878183, lng: -79.03705362452745 },
            {lat:-8.112584927604136,  lng:-79.03675069089626},
            {lat:-8.112757548472599, lng: -79.03689192431183 },
            {lat:-8.112935457966001,  lng: -79.03671556907042},
            {lat:-8.113262067724431,  lng: -79.03697373168661},
            {lat:-8.11354419992614,   lng: -79.03676787214567},
            {lat:-8.113655061230745,   lng:-79.03686912553566},
            {lat:-8.112959267743088,    lng:-79.03759996078401},
            {lat:-8.11240233878183, lng: -79.03705362452745 }
        ]
    },
    {
        name:"Derecho y Ciencias politicas",
        lat:-8.114318820038639, 
        lng:  -79.03709947035065,
        address: "Facultad de Derecho y CCPP",
        //phone: 123456,
        image: ['fotos-escuelas/derecho/derecho1.jpg','fotos-escuelas/derecho/derecho2.jpg','fotos-escuelas/derecho/derecho3.jpg'],
        cuadro:[ {lat:-8.113986900424218,  lng:  -79.03689361080939},
            {lat:-8.114110374553807,    lng:-79.03669378623869},
            {lat:-8.1144821243881,   lng:-79.03706996605112},
            {lat:-8.114365952601277,   lng: -79.0372248636214},
            {lat:-8.113986900424218,  lng:  -79.03689361080939}]
    },
    {
        name:"Educacion inicial",
        lat:-8.112475538427548, 
        lng:-79.03604931206866,
        address: "1 piso de la escuela de educacion",
        //phone: 123456,
        image: ['fotos-escuelas/educacioninicial/ini1.jpg', 'fotos-escuelas/educacioninicial/ini2.jpg'],
        cuadro:[ {lat:-8.112284429532881,  lng:  -79.03636508443698},
            {lat:-8.112331562334495, lng:  -79.03602511444595 },
            {lat:-8.112597099141725,   lng: -79.03596007087762},
            {lat:-8.112907776983324, lng: -79.03622359791204 },
            {lat:-8.112701986131688,  lng:  -79.03652936973889},
            {lat:-8.112284429532881,  lng:  -79.03636508443698}]
    },
    {
        name:"Educacion primaria",
        lat:-8.112705227692539, 
        lng:-79.0361163672938 ,
        address: "1 piso de la escuela de educacion",
        //phone: 123456,
        image: ['fotos-escuelas/educacionprima/prim1.jpg', 'fotos-escuelas/educacionprima/prim2.jpg'],
        cuadro:[  {lat:-8.112284429532881,  lng:  -79.03636508443698},
            {lat:-8.112331562334495, lng:  -79.03602511444595 },
            {lat:-8.112597099141725,   lng: -79.03596007087762},
            {lat:-8.112907776983324, lng: -79.03622359791204 },
            {lat:-8.112701986131688,  lng:  -79.03652936973889},
            {lat:-8.112284429532881,  lng:  -79.03636508443698}]
    },
    {
        name:"Educacion secundaria",
        lat:-8.112616936748127, 
        lng:-79.03642951519488 ,
        address: "2 piso de la escuela de educacion",
        //phone: 123456,
        image: ['fotos-escuelas/educacionsecu/secu.jpg'],
        cuadro:[  {lat:-8.112284429532881,  lng:  -79.03636508443698},
            {lat:-8.112331562334495, lng:  -79.03602511444595 },
            {lat:-8.112597099141725,   lng: -79.03596007087762},
            {lat:-8.112907776983324, lng: -79.03622359791204 },
            {lat:-8.112701986131688,  lng:  -79.03652936973889},
            {lat:-8.112284429532881,  lng:  -79.03636508443698}]
    },
    {
        name:"Enfermeria",
        lat:-8.117331182870798, 
        lng:-79.03947899910668 ,
        address: "3 puerta de la UNT",
        //phone: 123456,
        image: ['fotos-escuelas/enfermeria/enfermeria1.jpg', 'fotos-escuelas/enfermeria/enfermeria2.jpg','fotos-escuelas/enfermeria/enfermeria3.jpg'],
        cuadro:[ {lat:-8.117141081335406, lng:  -79.0396530894685},
            {lat:-8.117483619686755,  lng: -79.03917699737038},
            {lat:-8.118037439276588,  lng: -79.03968917941722},
            {lat:-8.11767317631316,  lng: -79.04011382641517},
            {lat:-8.117141081335406, lng:  -79.0396530894685}]
    },
    {
        name:"Estadistica",
        lat:-8.112976783234785, 
        lng:-79.03841416663606 ,
        address: "1 y 2 piso de la facultad de CFM",
        //phone: 123456,
        image: ['fotos-escuelas/estadistica/estadistica1.jpg', 'fotos-escuelas/estadistica/estadistica2.jpg'],
        cuadro:[ {lat:-8.113094946944967,lng:  -79.03859655684806},
            {lat:-8.112765464544053,  lng:-79.03827335110836},
            {lat:-8.112861776829432, lng: -79.03817048321827},
            {lat:-8.113196501313222, lng: -79.03847589718751},
            {lat:-8.113094946944967,lng:  -79.03859655684806}]
    },
    {
        name:"Farmacia y Bioquimica",
        lat:-8.110881802193525, 
        lng:-79.03782835120056,
        address: "1 piso de la facultad de Farmacia y Bioquimica",
        //phone: 123456,
        image: ['facebook.png', 'mapa.png'],
        cuadro:[ {lat:-8.110515915614423,lng: -79.03774909568293},
            {lat:-8.110982256059122 , lng:-79.03713010270589},
            {lat:-8.111468821845504 ,lng: -79.03762754289194},
            {lat:-8.111004131010322 ,lng: -79.03817605463513},
            {lat:-8.110515915614423,lng: -79.03774909568293}]
    },
    {
        name:"Fisica",
        lat:-8.112732489608831,
        lng: -79.0381030303913,
        address: "1 y 2 piso de la facultad CFM",
        //phone: 123456,
        image: ['fotos-escuelas/fisica/fisica1.jpg', 'fotos-escuelas/fisica/fisica2.jpg'],
        cuadro:[ {lat:-8.112536,lng: -79.038207},
            {lat:-8.112673, lng:-79.038333},
            {lat:-8.113055,lng: -79.037878},
            {lat:-8.112917,lng: -79.037751},
            {lat:-8.112536,lng: -79.038207}]
    },
    {
        name:"Historia",
        lat:-8.112191428582737,
        lng: -79.03555958769748,
        address: "2 piso de la facultad de Ciencias Sociales",
        //phone: 123456,
        image: ['facebook.png', 'mapa.png'],
        cuadro:[ {lat:-8.112035165253172, lng: -79.03575327626734},
            {lat:-8.112333894371586,  lng:-79.0353455804981},
            {lat:-8.112608724960863, lng: -79.03564732901077},
            {lat:-8.112280851781945, lng: -79.0359934276919},
            {lat:-8.112035165253172, lng: -79.03575327626734}]
    },
    {
        name:"Ing Ambiental",
        lat:-8.113974458841112, 
        lng:-79.03852281540482,
        address: "Al costado de Matematicas",
        //phone: 123456,
        image: ['fotos-escuelas/ingambiental/ambiental1.jpg', 'fotos-escuelas/ingambiental/ambiental2.jpg'],
        cuadro:[ {lat:-8.11377198773612,  lng: -79.03854762583826},
            {lat:-8.113978441879802,  lng: -79.03825124174367},
            {lat:-8.114167636096068,  lng: -79.03841351538817},
            {lat:-8.113950560616654, lng:  -79.03870051175187},
            {lat:-8.11377198773612,  lng: -79.03854762583826}]
    },
    {
        name:"Ing Civil",
        lat:-8.115229128310796, 
        lng:-79.039919979153,
        address: "Al costado de Arquitectura",
        //phone: 123456,
        image: ['fotos-escuelas/ingcivil/civil1.jpg','fotos-escuelas/ingcivil/civil2.jpg','fotos-escuelas/ingcivil/civil3.jpg'],
        cuadro:[ {lat:-8.11487522039625, lng: -79.04021027528864 },
            {lat:-8.115426104096919,   lng: -79.03956294396413},
            {lat:-8.115504436870163,  lng:  -79.03962999918934},
            {lat:-8.114969564355292,  lng:  -79.04028728964013},
            {lat:-8.11487522039625, lng: -79.04021027528864}]
    },
    {
        name:"Ing Industrial",
        lat:-8.115339234530014,  
        lng:-79.04055118989027,
        address: "",
        //phone: 123456,
        image: ['fotos-escuelas/ingindustrial/indus1.jpg', 'fotos-escuelas/ingindustrial/indus2.jpg','fotos-escuelas/ingindustrial/indus3.jpg'],
        cuadro:[ {lat:-8.114810784214894, lng: -79.04055244021795},
            {lat:-8.115126771045949, lng: -79.04018765979315},
            {lat:-8.115684394263553,  lng: -79.0407764046709},
            {lat:-8.115488562389762,lng:  -79.04105468385535},
            {lat:-8.114810784214894, lng: -79.04055244021795}]
    },
    {
        name:"Ing Materiales",
        lat:-8.115755482369984, 
        lng: -79.03999927822734 ,
        address: "Al costado de arquitectura",
        //phone: 123456,
        image: ['fotos-escuelas/ingmateriales/mate1.jpg', 'fotos-escuelas/ingmateriales/mate2.jpg','fotos-escuelas/ingmateriales/mate3.png'],
        cuadro:[ {lat:-8.115547037629756,  lng:  -79.03993557576341},
            {lat:-8.115678477319454, lng:  -79.03977665488036 },
            {lat:-8.116036285146286,  lng:  -79.04010388437854 },
            {lat:-8.11589156884577, lng:  -79.0402493942171},
            {lat:-8.115547037629756,  lng:  -79.03993557576341}]
    },
    {
        name:"Ing Mecanica",
        lat:-8.114428173662148,
        lng: -79.03915333862932 ,
        address: "",
        //phone: 123456,
        image: ['fotos-escuelas/ingecanica/mecanica1.jpg', 'fotos-escuelas/ingecanica/mecanica2.jpg','fotos-escuelas/ingecanica/mecanica3.jpg'],
        cuadro:[ {lat:-8.114325278639612, lng:  -79.03914126868887},
            {lat:-8.114408922337185, lng: -79.03905007358287 },
            {lat:-8.114748143823233,   lng: -79.03935048099122},
            {lat:-8.114673130094262, lng: -79.03945374603796},
            {lat:-8.114325278639612, lng:  -79.03914126868887}]
    },
    {
        name:"Ing Mecatronica",
        lat:-8.11459413332061, 
        lng:-79.03929080184069,
        address: "",
        //phone: 123456,
        image: ['fotos-escuelas/ingmecatronica/meca1.jpg', 'fotos-escuelas/ingmecatronica/meca2.jpg'],
        cuadro:[ {lat:-8.114325278639612, lng:  -79.03914126868887},
            {lat:-8.114408922337185, lng: -79.03905007358287 },
            {lat:-8.114748143823233,   lng: -79.03935048099122},
            {lat:-8.114673130094262, lng: -79.03945374603796},
            {lat:-8.114325278639612, lng:  -79.03914126868887}]
    },
    {
        name:"Ing Metalurgica",
        lat:-8.11414298454454, 
        lng:-79.03991165869391,
        address: "Detras de Mecanica",
        //phone: 123456,
        image: ['fotos-escuelas/ingmetalurgica/meta1.jpg','fotos-escuelas/ingmetalurgica/meta2.jpg','fotos-escuelas/ingmetalurgica/meta3.jpg'],
        cuadro:[ {lat:-8.11378254874168,lng:   -79.03993173392574 },
            {lat:-8.114005598865484, lng:  -79.03963534983083},
            {lat:-8.114452864539658,  lng: -79.04004284266594 },
            {lat:-8.11423844457,  lng: -79.04033989731352},
            {lat:-8.11378254874168,lng:   -79.03993173392574}]
    },
    {
        name:"Ing Minas",
        lat:-8.115880947465266, 
        lng:-79.04041367951999,
        address: "Al costado de materiales",
        //phone: 123456,
        image: ['fotos-escuelas/ingminas/minas1.jpg', 'fotos-escuelas/ingminas/minas2.jpg'],
        cuadro:[ {lat:-8.11563599176842, lng:   -79.04050956849181 },
            {lat:-8.11585837702827,  lng: -79.04023464206882},
            {lat:-8.115938037389071,  lng: -79.04028895680108  },
            {lat:-8.116088064360552,   lng: -79.0401367414401},
            {lat:-8.11614847343442, lng:  -79.04029767398008},
            {lat:-8.115885260361203,  lng: -79.04069479445496},
            {lat:-8.11563599176842, lng:   -79.04050956849181}]
        
    },
    {
        name:"Ing Quimica",
        lat:-8.113037274560241, 
        lng:-79.03887352962904,
        address: "Al costado de la facultad de Quimica",
        //phone: 123456,
        image: ['fotos-escuelas/ingquimica/quimica1.jpg', 'fotos-escuelas/ingquimica/quimica2.jpg','fotos-escuelas/ingquimica/quimica3.jpg'],
        cuadro:[ {lat:-8.11283347530013,  lng:  -79.03904317934825},
            {lat:-8.113112952434333,  lng: -79.03867974002851 },
            {lat:-8.113171370433529,    lng: -79.0387622179552},
            {lat:-8.11289853175228,  lng: -79.03910889346871},
            {lat:-8.11283347530013,  lng:  -79.03904317934825}]
    },
    {
        name:"Ing Sistemas",
        lat:-8.114251833195592, 
        lng:-79.03790906486695,
        address: "No tiene pabellon xd",
        //phone: 123456,
        image: ['facebook.png', 'mapa.png'],
        cuadro:[ {lat:-8.114485971314267, lng:  -79.03808782470222},
            {lat:-8.114575158221582,   lng: -79.03768100224923 },
            {lat:-8.114742266268317,    lng:  -79.03790859522992},
            {lat:-8.114531034175169,   lng: -79.03811817043298},
            {lat:-8.114485971314267, lng:  -79.03808782470222}]
    },
    {
        name:"Informatica",
        lat:-8.112820,
        lng:-79.037969,
        address: "3 piso de la facultad CFM",
        //phone: 123456,
        image: ['fotos-escuelas/informatica/informatica.jpg'],
        cuadro:[ {lat:-8.112536,lng: -79.038207},
            {lat:-8.112673, lng:-79.038333},
            {lat:-8.113055,lng: -79.037878},
            {lat:-8.112917,lng: -79.037751},
            {lat:-8.112536,lng: -79.038207}]
    },
    {
        name:"Matematicas",
        lat:-8.113715857751195, 
        lng:-79.03828190409035,
        address: "",
        //phone: 123456,
        image: ['fotos-escuelas/matematicas/matematica1.jpg', 'fotos-escuelas/matematicas/matematica2.jpg'],
        cuadro:[ {lat:-8.113554544611707, lng:  -79.03834359489785},
            {lat:-8.113774144266962,   lng:-79.03807150008664},
            {lat:-8.113899609980086,  lng: -79.03819890501421},
            {lat:-8.113689967991931, lng: -79.03846094154184},
            {lat:-8.113554544611707, lng:  -79.03834359489785}]
    },
    {
        name:"Microbiologia y para.",
        lat:-8.11216273451346, 
        lng:-79.03814877549357,
        address: "Al costado de la escuela de ciencias biol.",
        //phone: 123456,
        image: ['fotos-escuelas/microbiologia/micro1.jpg', 'fotos-escuelas/microbiologia/micro2.jpg','fotos-escuelas/microbiologia/micro3.jpg'],
        cuadro:[ {lat:-8.111912150167022,  lng:  -79.03825276823261},
            {lat:-8.112236105386957,   lng:-79.03786585958355},
            {lat:-8.11245052642275,  lng: -79.03801673383981},
            {lat:-8.1121061415007,  lng: -79.0384397618957},
            {lat:-8.111912150167022,  lng:  -79.03825276823261}]
    },
    {
        name:"Trabajo social",
        lat:-8.112539949896286, 
        lng: -79.03563198958793,
        address: "3 piso de la facultad de Ciencias Sociales",
        //phone: 123456,
        image: ['facebook.png', 'mapa.png'],
        cuadro:[ {lat:-8.112035165253172, lng: -79.03575327626734},
            {lat:-8.112333894371586,  lng:-79.0353455804981},
            {lat:-8.112608724960863, lng: -79.03564732901077},
            {lat:-8.112280851781945, lng: -79.0359934276919},
            {lat:-8.112035165253172, lng: -79.03575327626734}]
    },
    {
        name:"Turismo",
        lat:-8.112164879049551, 
        lng: -79.03572921966413,
        address: "1 piso de la facultad de Ciencias Sociales",
        //phone: 123456,
        image: ['facebook.png', 'mapa.png'],
        cuadro:[ {lat:-8.112035165253172, lng: -79.03575327626734},
            {lat:-8.112333894371586,  lng:-79.0353455804981},
            {lat:-8.112608724960863, lng: -79.03564732901077},
            {lat:-8.112280851781945, lng: -79.0359934276919},
            {lat:-8.112035165253172, lng: -79.03575327626734}]
    },
    {
        name:"Zootecnia",
        lat:-8.114355773643513, 
        lng: -79.03649360820812,
        address: "3 piso de la facultad de Agropecuarias",
        //phone: 123456,
        image: ['fotos-escuelas/zootecnia/zootecnia1.jpg', 'fotos-escuelas/zootecnia/zootecnia2.jpg'],
        cuadro:[ {lat:-8.114177864780725,  lng: -79.03650366649168},
            {lat:-8.114266819221578,   lng:-79.03628439590581},
            {lat:-8.114569706774788,  lng: -79.03653943217957},
            {lat:-8.114442249753907,  lng: -79.03669902361554},
            {lat:-8.114177864780725,  lng: -79.03650366649168}]
    },
    // {
    //     name:"aaa",
    //     lat:-8.1132845,
    //     lng:-79.0372698,
    //     address:"nose",
    //     //phone:123456,
    //     image:['mapa.png', 'facebook.png'],
    //     cuadro:[ {lat:-8.113391, lng:-79.037249},
    //         {lat:-8.113858, lng:-79.037821},
    //         {lat:-8.114223, lng:-79.037275},
    //         {lat:-8.113767,lng: -79.036844},
    //         {lat:-8.113391, lng:-79.037249}]
    // },
    // {
    //     name:"copernico",
    //     lat:-8.113352, 
    //     lng:-79.038580,
    //     address:"nose",
    //     //phone:123456,
    //     image:['mapa.png', 'facebook.png'],
    //     cuadro:[ {lat:-8.113371, lng:-79.038719},
    //         {lat:-8.113285,lng: -79.038611            },
    //         {lat:-8.113402,lng: -79.038494            },
    //         {lat:-8.113515,lng: -79.038599            },
    //         {lat:-8.113371, lng:-79.038719}
    //     ]
    // },
    // {
    //     name:"posgrado",
    //     lat:-8.114323, 
    //     lng:-79.037889,
    //     address:"nose",
    //     //phone:123456,
    //     image:['mapa.png', 'facebook.png'],
    //     cuadro:[ {lat:-8.114306, lng:-79.037861},
    //         {lat:-8.114444,lng: -79.037697},
    //         {lat:8.114567,lng: -79.037861},
    //         {lat:-8.114444,lng: -79.038034            },
    //         {lat:-8.114306, lng:-79.037861}]
    // }
]