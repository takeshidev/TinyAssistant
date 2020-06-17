function crearTitulo(titulo) {
    var title2 = document.createElement('h2');
    title2.textContent = titulo;
    return title2
}

function crearParrafo(parrafo) {
    var txt = document.createElement('p');
    txt.textContent = parrafo;
    return txt;
}

function generateAdventure1() {
    var contenedor = document.getElementById('adventure');
    contenedor.innerHTML = '';
    var title1 = document.createElement('h1');
    var img1 = document.createElement('img');
    img1.src = "img/icecity.png"
    title1.textContent = "La Ciudad Sumergida"
    contenedor.appendChild(title1);
    contenedor.appendChild(img1);
    contenedor.appendChild(crearTitulo("Introduccion"));
    contenedor.appendChild(crearParrafo("Cuenta la leyenda que hace mucho, mucho tiempo, más allá de las tierras heladas del norte, existió una misteriosa ciudad que atesoraba maravillas y conocimientos que hoy en día dejarían a los más sabios boquiabiertos. Pero, aunque era una ciudad próspera y pacífica, se dice que en aquella época se desató la mayor tormenta que se haya visto jamás, muchos reinos sufrieron inundaciones y, en cuanto a esta ciudad, se dice que fue engullida por el gélido océano, perdiéndose sus secretos para siempre en las profundidades..."));
    contenedor.appendChild(crearTitulo("Detalles del Escenario"));
    contenedor.appendChild(crearParrafo("Los Aventureros se embarcan en una expedición en busca de los restos de esta ciudad, viajando en barco hasta el polo norte y explorando sus glaciares hasta que, por fin, encuentren los restos flotantes de una embarcación de “los antiguos” que les conducirá a las profundidades del océano, hacia la ciudad sumergida"));
    contenedor.appendChild(crearTitulo("Viajar por Mar"));
    contenedor.appendChild(crearParrafo("El viaje en sí mismo ya es toda una aventura, aunque también es muy peligrosa. Se necesita un barco lo bastante grande como para adentrarse en el océano y hay que asegurarse de llenar la bodega con provisiones para varios meses, ya que nadie sabe cuánto tiempo durará el viaje. Además, los Aventureros que no estén adaptados al frío extremo tendrán que usar ropas de abrigo para sobrevivir. Durante el viaje tendrán que enfrentarse a peligros como las tormentas, pero además también podrían encontrarse con piratas, monstruos marinos gigantes y quién sabe qué más. Los aventureros no estarán solos, ya que un barco tan grande necesitará un capitán y a su tripulación. Alinicio del viaje todos podrían estar entusiasmados con esta aventura pero, a medidaque vayan adentrándose entre los glaciares, el frío y los constantes peligros podrían hacer que la moral de la tripulación vaya bajando. Es tarea de los aventureros intentarayudar a mantener la moral alta, no solo protegiéndoles de los monstruos o piratas queles ataquen, sino intentando animarles cuando parezca que la misión está perdida tras varios días pasando frío y hambre sin encontrar nada interesante."));
    contenedor.appendChild(crearTitulo("El Cementerio de Barcos"));
    contenedor.appendChild(crearParrafo("La clave para acceder a la ciudad sumergida está en un enorme iceberg en el que se encuentran los restos de varios barcos, algunos encallados o incluso semienterrados en el hielo, otros destrozados y con sus fragmentos flotando a la deriva. Entre ellos hay un barco muy extraño, más bien pequeño (tan solo caben unos pocos tripulantes) y en bastante buen estado: este “barco” está fabricado totalmente en metal y sus formas redondeadas recuerdan a un caparazón de tortuga. Parece tener una pequeña cúpula de cristal, algunos de los marineros suponen que será una especie de vela para impulsar el barco, pero en realidad su propósito es sellar la cubierta ya que, efectivamente, se trata de un submarino. Está dotado de hélices que le permiten desplazarse y, junto al timón, tiene varias palancas para controlar sus exóticos mecanismos."));
    contenedor.appendChild(crearParrafo("No es nada fácil para los aventureros aprender a usar este “barco” pero, una vez que lo consigan, podrán usarlo para explorar las profundidades marinas, donde se encuentra la ciudad sumergida"));
    contenedor.appendChild(crearTitulo("El Fondo Marino"));
    contenedor.appendChild(crearParrafo("Si en la superficie el viaje es peligroso, explorar las profundidades marinas es mucho peor. Los monstruos marinos son más abundantes y desde el submarino resulta imposible combatirlos, de modo que hay que tener mucho cuidado para evitar llamar su atención. En el fondo marino también hay algunos barcos hundidos, probablemente con los tesoros que transportasen, pero no es posible salir del submarino mientras estén sumergidos."));
    contenedor.appendChild(crearParrafo("Una vez en el fondo, la ciudad sumergida es fácil de encontrar, gracias a su enorme tamaño. Su forma exterior es muy diferente a lo que cabría esperar: tan solo se ve una especie de gigantesca pirámide de hielo cristalino, blanca y resplandeciente"));
    contenedor.appendChild(crearTitulo("Entradas a la Ciudad"));
    contenedor.appendChild(crearParrafo("En la base de la pirámide hay cuatro puertas (una por cada lado) y tres de ellas están abiertas. Son lo bastante grandes como para entrar con el submarino e incluso barcos mayores, si no fuese porque ahora la ciudad entera está sumergida en las profundidades del mar. "));
    contenedor.appendChild(crearParrafo("De hecho, parecen ser entradas a los puertos de la ciudad y, aunque ahora están completamente inundados, aún pueden verse restos de lo que eran los embarcaderos, los almacenes, las posadas y las plazas de mercado de cada puerto. Estos barrios periféricos recuerdan a las ciudades portuarias de cualquier otra ciudad y, según cuentan las leyendas, eran las únicas zonas en las que se permitía la entrada a los visitantes extranjeros, que normalmente acudían para comerciar. Un dato revelador es que el techo, a tan solo unos 20 metros de altura desde las entradas, no está inundado. De hecho, los aventureros pueden subir aquí para respirar aire fresco."));
    contenedor.appendChild(crearTitulo("El Pilar Central"));
    contenedor.appendChild(crearParrafo("Al explorar el interior inundado de la ciudad, enseguida llama la atención una gran torre con forma de pilar, aparentemente hecha de hielo, cuya altura parece no tener fin. En su base tiene una gran puerta pero, además de estar cerrada, no es lo bastante grande como para entrar con el submarino. En su zona exterior tiene una escalera de caracol que recorre sus paredes en espiral hasta el techo y, si van subiendo con el submarino, aparte de encontrar algunas zonas en las que la escalera está rota, al llegar a la zona superior (la que no está inundada) verán que tanto la torre como su escalera siguen subiendo más allá del techo por una enorme abertura circular. En este punto sí es posible salir del submarino y seguir subiendo por las escaleras para acceder a las zonas superiores de esta ciudad-pirámide."));
    contenedor.appendChild(crearTitulo("La Ciudadela Interior"));
    contenedor.appendChild(crearParrafo("Las áreas superiores de la ciudad son completamente diferentes: todas sus estructuras parecen estar hechas del mismo hielo que el pilar central y los muros exteriores de la pirámide, y sus formas son extrañas, con multitud de escaleras y plataformas que se elevan hasta donde alcanza la vista, muchas de las cuales parece imposible que se sostengan, casi da la impresión de que flotasen en el aire pero, al fijarse bien, todas las estructuras están unidas a otras en algún punto. En este lugar, los sonidos del océano alrededor de la pirámide crean ecos lejanos muy peculiares, a veces inquietantes. Aunque a esta profundidad el fondo marino está casi a oscuras, en este lugar todo parece estar iluminado por una luz tenue que causa infinidad de pequeños destellos al refl ejarse en las estructuras cristalinas y, aunque todo parece estar hecho de hielo, aquí dentro la temperatura es cálida y acogedora."));
    contenedor.appendChild(crearParrafo("No todas las zonas son accesibles, ya que muchas escaleras están rotas y la mayoría de edificios están en un estado ruinoso, con algunos accesos bloqueados por los derrumbes. En cualquier caso, la ciudadela interior dentro de la pirámide es lo bastante extensa como para que merezca la pena explorarla durante semanas y, ¿quién sabe qué maravillas aguardarán en los pisos superiores?"));
    contenedor.appendChild(crearTitulo("Tecnología arcana"));
    contenedor.appendChild(crearParrafo("Lo primero que llama la atención al llegar a la ciudadela interior es el pilar central. Las escaleras de caracol terminan al llegar a este lugar, pero hay otra pierta que permite entrar en la torre. En su interior hay una especie de tubo cristalino y transparente, junto a un panel con botones que, al tocarlo, activa una maquinaria que hace que el lugar vibre y retumbe durante unos minutos para, finalmente, hacer llegar una especie de plataforma elevadora que hay dentro del tubo y abrir la puerta de acceso a él. Con esta plataforma elevadora es posible subir a cualquiera de los pisos superiores de la ciudadela, o al menos acceder a la zona central de estos, pero la zona inferior está inundada. "));
    contenedor.appendChild(crearParrafo("En diferentes zonas de la ciudadela se pueden encontrar otras máquinas extrañas, la mayoría no se sabe para qué sirven o simplemente ya no funcionan, pero algunas siguen siendo utilizables: una de las máquinas parece convertir el agua en aire; otra parece ser que controla la temperatura ambiental; otras máquinas generan luz y la distribuyen por las paredes cristalinas de la ciudad; otras máquinas, al activarse, proyectan hologramas y hacen sonar voces o música, con escenas e historias de tiempos pasados..."));
    contenedor.appendChild(crearParrafo("Sobre estas últimas máquinas, funcionan con tarjetas holográficas, hechas de cristal y con dibujos laberínticos muy complicados: es posible encontrar más de esas tarjetas,que son especialmente útiles para descubrir conocimientos perdidos y aprender mássobre la antigua historia de esta civilización, aunque solo pueden verse usando lasenormes máquinas de esta ciudad. También existen otros pequeños inventos quelos aventureros podrían llevarse consigo, como pulseras, cascos, e incluso armas quedisparan rayos de luz."));
    contenedor.appendChild(crearParrafo("Una de las máquinas, totalmente estropeada, parece ser que servía para controlar el clima y las mareas. ¿Es posible que los antiguos habitantes de esta ciudad cometiesen un error y provocasen por accidente el cataclismo que les llevó a su extinción y causó tormentas e inundaciones por todo el mundo?"));
    contenedor.appendChild(crearTitulo("¿Quiénes Eran “los Antiguos”?"));
    contenedor.appendChild(crearParrafo("Los seres que crearon esta ciudad, apenas mencionados en las viejas leyendas como “los antiguos”, eran de un linaje actualmente desconocido, ya que los escasos supervivientes que huyeron de la ciudad antes del gran desastre, por algún motivo que hoy en día se desconoce, no volvieron a verse. Quizá se mezclaron con los otros pueblos y terminaron adaptándose a sus nuevas vidas hasta que sus conocimientos se perdieron bajo el océano, junto con los restos de su ciudad. O tal vez su sociedad permanezca en algún rincon del mundo, ocultándose para preservar su modo de vida... o tal vez, desprovistos de su avanzada tecnología, simplemente no lograron subsistir"));
    contenedor.appendChild(crearTitulo("No estamos solos"));
    contenedor.appendChild(crearParrafo("Aunque inicialmente la ciudad parece ser un lugar totalmente desierto, existen formas de vida que habitan estas ruinas. Desde sabandijas y animales marinos hasta dinosaurios, muchas criaturas quedaron aquí atrapadas cuando se hundió la ciudad y, con el paso de los siglos, se adaptaron a la vida en este extraño lugar. Incluso es posible que, en alguna parte de la ciudadela, aún existan algunos descendientes de los habitantes que no pudieron escapar... quizá un Linaje descendiente de las Grandes Bestias acuáticas, como Bestiales Tiburón, Bestiales Delfín o incluso Fey Marinos."));
}

function generateAdventure2() {
    var contenedor = document.getElementById('adventure');
    contenedor.innerHTML = '';
    var title1 = document.createElement('h1');
    var img1 = document.createElement('img');
    img1.src = "img/abyss.png";
    title1.textContent = "Las Minas de Cristal";
    contenedor.appendChild(title1);
    contenedor.appendChild(img1);
    contenedor.appendChild(crearParrafo("No hay nadie que recuerde los días antiguos, los días mejores, los días de luz y oro. Cuando el cielo era azul y las monedas podían comprarte una comida caliente o un lugar acogedor para dormir por la noche ... eso y mucho más. Pero todo eso está perdido y olvidado. Estos son los días oscuros, los días rojos, los días de las tormentas psíquicas y las lluvias de fuego"));
    contenedor.appendChild(crearParrafo("La leyenda dice que fueron los Archimagos los que quemaron el mundo, con su alta magia, sus gemas extrañas y su infinita sed de poder. Claro, no hay forma de saber qué sucedió exactamente en aquel entonces, pero no hay duda de que fueron ellos quienes iniciaron la Tormenta Psíquica. Y la prueba de ello es que la magia ahora es extravagante y peligrosa."));
    contenedor.appendChild(crearParrafo("Pero no tan peligroso como el Sobremundo. ¡Oh no! Ahí arriba se fríen en un abrir y cerrar de ojos, se queman con las gotas de las lluvias ardientes, son fulminados por un rayo plateado ... o pueden terminar en las entrañas de una Psymera, en una pieza o en varias ..."));
    contenedor.appendChild(crearParrafo("Por todo esto, prefieres quedarte en el Inframundo, intentando vivir día a día. A menos que tengas mala suerte y te termines como esclavo de un Esclavista, obligado a trabajar en la superficie, extrayendo esos raros y extraños cristales con que traen locos a todos. En ese caso, prepárate para una corta existencia, allí en las Minas de Cristal."));
    contenedor.appendChild(crearTitulo("El Escenario"));
    contenedor.appendChild(crearParrafo("Las Minas de Cristal es un microentorno de fantasía post-apocalíptica, en el que los supervivientes se ven obligados a vivir bajo tierra, donde pueden protegerse de las duras condiciones del mundo de la superficie en el que alguna vez vivieron. Su nuevo hogar, sin embargo, es una tierra de nadie. No hay leyes ni reinos, y los pocos asentamientos están bajo el dominio de los Esclavistas."));
    contenedor.appendChild(crearParrafo("Este es un mundo de “toma-lo-que-quieras” y si puedes mantenerlo, es legítimamente tuyo."));
    contenedor.appendChild(crearParrafo("A menudo, la gente se reúne en pequeños grupos para cazar en las oscuras cavernas del inframundo o robarles a aquellos más débiles que ellos. Algunos, lo suficientemente locos, suben para saquear las ruinas de los antiguos reinos, encontrando alguna reliquia mágica en un buen día - y llevándose un relámpago, o siendo devorados, la mayoría de los otros."));
    contenedor.appendChild(crearParrafo("A menudo se dice que la unión hace la fuerza y estos pequeños grupos están juntos más por necesidad que por camaradería. Los jugadores pueden jugar uno de estos grupos, luchando por sobrevivir, día tras día. Por lo tanto, sugeriré que llaméis Supervivientes a los personajes jugadores en lugar de Aventureros en las Minas de Cristal. Y también sugeriré que seais despiadados, que pegues primero y que lo hagáis fuerte"));
    contenedor.appendChild(crearTitulo("El Sobremundo"));
    contenedor.appendChild(crearParrafo("El mundo de la superficie, conocido como el Sobremundo, ha sido destruido por lo que la gente llama la Tormenta Psíquica: una tormenta interminable de propiedades sobrenaturales. El cielo siempre está cubierto por rojas nubes que brillan constantemente y rugen con temibles truenos. Las nubes vierten lluvias de fuego a intervalos extraños; estas lluvias, hechas de lava líquida, pueden caer durante días o minutos, deteniéndose repentinamente y comenzando de nuevo cuando menos se espera. En el mejor de los días, cae ceniza en lugar de fuego. Esta ceniza negra ha cubierto el mundo de la superficie durante años y años, convirtiéndolo en un yermo oscuro conocido como el Desierto Negro."));
    contenedor.appendChild(crearParrafo("La tormenta también descarga relámpagos plateados que hacen que agujas de cristal broten del suelo al que golpean. Estos cristales tienen tamaños que van desde el de un árbol o tan altos como una torre. En algunos lugares, las agujas de cristal comienzan a acumularse una al lado de la otra, formando un Bosque de Cristal. Es a esos lugares donde los Esclavistas envían a sus esclavos a recolectar los cristales, que se dice que aumentan los poderes de un psíquico."));
    contenedor.appendChild(crearTitulo("Psymeras"));
    contenedor.appendChild(crearParrafo("Por extraño que parezca, de vez en cuando, los rayos caen sobre una aguja de cristal ya formada – al contrario de la creencia popular, los rayos caen dos veces en el mismositio en el Sobremundo. Cuando esto sucede, la aguja de cristal se “fertiliza” conuna extraña energía psíquica pulsante que se incuba durante un período de tiempoaleatorio. Durante este período, la energía psíquica comienza a absorber las pesadillasde los más pobres, creciendo y creciendo hasta que llega el momento adecuado, y laaguja de cristal se rompe, dando a luz a una Psymera, una bestia terrible formada por las pesadillas que la alimentaron. Ninguna Psymera es igual a otra. Estas entidades pueden variar desde pequeñas criaturas parecidas a los humanoides hasta enormes monstruosidades. Como Director de Juego, tienes total libertad para diseñar la apariencia y el nivel de amenaza de estas criaturas, al igual que con otros enemigos en Tiny Dungeon 2e: tu imaginación es el único límite."));
    contenedor.appendChild(crearTitulo("El Inframundo"));
    contenedor.appendChild(crearParrafo("El mundo bajo la superficie tampoco es un juego de niños. Además de las amenazas subterráneas naturales - piensa en los habitual en cualquier juego de fantasía - , las gentes que viven en él no son amigables entre sí, y las pequeñas bandas luchan constantemente, ya sea por refugio o comida. A todo esto añádele a los despiadados Esclavistas, que gobiernan un asentamiento de tamaño considerable, gracias a sus poderes psíquicos en constante crecimiento. Son ellos (o mejor dicho sus esclavos) los que extraen los cristales del Sobremundo, para alimentarse de ellos y desarrollar su poder. Permiten que algunos de sus lugartenientes también consuman los cristales, para que ganen en poder y puedan mantener bajo control a los esbirros bajo su mando. ¿Que cómo consumen el cristal, dices? Bueno, usa tu imaginación. Sin embargo, consumir los cristales no es algo placentero y, a la larga, comienzan a alterarte y corromperte el cuerpo. Algunos de los Esclavistas más poderosos son seres desfigurados con cuerpos arqueados llenos de protuberancias cristalinas, con una fragilidad física inversamente proporcional al poder de su mente. Hay rumores de muy pocos Esclavistas que han completado un ritual de transformación, convirtiéndose en terribles Psymeras. Pero esos rumores son solo eso, rumores."));
    contenedor.appendChild(crearParrafo(""));
    contenedor.appendChild(crearTitulo("El Paisaje"));
    contenedor.appendChild(crearParrafo("Lo que lleva a los asentamientos. Los Esclavistas están empezando a entender que si la gente no tienen nada que perder, ellos no tienen nada que temer, así que están comenzando a ofrecerles un mínimo de dignidad: un techo bajo el que para vivir, algo que comer y, lo que es más importante, algo que hacer. Tareas como constructor, recolector y soldado son algunas de las más comunes. Por supuesto, eres libre de añadir más, de acorde con tu campaña. Los asentamientos están comenzando a crear cierta estructura en el Inframundo; Sin embargo, están lejos de ser una sociedad justa y civilizada"));
}

function generateAdventure3() {
    var contenedor = document.getElementById('adventure');
    contenedor.innerHTML = '';
    var title1 = document.createElement('h1');
    var img1 = document.createElement('img');
    img1.src = "img/tavern.png"
    title1.textContent = "Héroes de Alquiler ";
    contenedor.appendChild(title1)
    contenedor.appendChild(img1);
    contenedor.appendChild(crearParrafo("Estáis viajando hacia Aurolis, la capital del Viejo Reino. Ha sido un largo viaje, en el que habéis corrido multitud de peripecias, aunque nada os hacía presagiar la increible aventura en la que estábais a punto de meteros."));
    contenedor.appendChild(crearTitulo("Una Petición de Ayuda"));
    contenedor.appendChild(crearParrafo("Hoy hacéis noche en una posada de camino llamada “El Buen Refugio ”. El posadero es amable, el ambiente es acogedor y la comida es buena. Estáis tomando unas jarras al calor de la lumbre y comentando algunas historias de vuestras anteriores aventuras cuando una pareja de jóvenes se os acercan. Apenas tendrán dieciséis o diecisiete años, - ¿Sois aventureros? - pregunta ella tímidamente."));
    contenedor.appendChild(crearParrafo("Al escuchar vuestra respuesta afirmativa, ambos se miran un momento antes. Parece que tienen un cierto reparo en seguir hablando (deja que los jugadores les animen a hablar antes de seguir leyendo)."));
    contenedor.appendChild(crearParrafo("- Mi nombre es Alia y este es mi... amigo Nelos - dice ella, animada por vuestra muestra de confianza -. Estamos buscando unos aventureros para pedirles que ayuden a nuestra aldea con un problema que tenemos. Lo que pasa es que no tenemos mucho dinero... "));
    contenedor.appendChild(crearParrafo("Si los Aventureros les ofrecen su ayuda, incluso si no pueden pagar, continúan con su relato"));
    contenedor.appendChild(crearParrafo("- ¡Gracias! ¡Hemos pedido ayuda a más aventureros y se negaron porque somos pobres - Alia sonríe con optimismo -. Tenemos un problema con los lobos. Están bajando de las montañas y atacando la aldea. Matan nuestros animales y atacan a cualquiera que salga por la noche. Incluso tenemos miedo de ir a los campos de día."));
    contenedor.appendChild(crearParrafo("- Y lo más raro es que no ha habido nada raro que haga que los lobos pasen hambre y se vean obligados a bajar al valle - explica Nelos -. Los lobos no se acercan a los poblados. Creo que algo está pasando en las montañas pero las autoridades se han limitado a enviar a un cazador y no le hemos vuelto a ver."));
    contenedor.appendChild(crearTitulo("¿Qué Ocurre Realmente?"));
    contenedor.appendChild(crearParrafo("Lo que ni Alia, ni Nelos, ni ninguno de los aldeanos saben es que en las montañas se está fraguando un inicio de invasión orca. Un grupo de avanzadilla ha establecido un campamento y su presencia, junto a la de sus bestias de guerra, los Huargos, ha provocado una reducción de los recursos, lo que por un lado provocó que los lobos tuvieran que buscarse la vida más cerca de la aldea. Como siguiente parte de su plan, los orcos están usando a los Huargos para controlar una gran manada de lobos y aterrorizar a los aldeanos para que no se acerquen y descubran accidentalmente su campamento."));
    contenedor.appendChild(crearTitulo("Llegada a la Aldea"));
    contenedor.appendChild(crearParrafo("A la mañana siguiente, los Aventureros acompañados por Alia y Nelos se dirigen hacia la aldea de Ceria. El camino es tranquilo y, durante el mismo, no pueden evitar darse cuenta de que ambos jóvenes se tratan con mucha más familiaridad que si fuesen amigos de la infancia. Alia es una muchacha alegre y optimista que tiene una gran facilidad para hacer amigos. Nelos es algo menos extrovertido pero es paciente y se preocupa mucho por los demás. Aunque es obvio que son de procedencia humilde, comparten sus viandas (tocino, queso y pan) con los Aventureros, interesándose por sus pasadas hazañas y tratándolos con respeto. Nelos buscará la amistad de cualquier personaje de tipo guerrero, haciendo preguntas sobre el uso de la espada, pues quiere hacerse más fuerte para proteger a los suyos (o quizá a cierta chica en particular)."));
    contenedor.appendChild(crearParrafo("A vuestra llegada a la aldea, más o menos a media tarde, los lugareños acuden rápidamente. Un anciano, el líder de los campesinos, se acerca apoyandose en su cayado. Su expresión amistosa se vuelve malhumorada al ver a Alia."));
    contenedor.appendChild(crearParrafo("- Alia, ¿se puede saber en qué pensabas para irte sin decir nada? ¿Y tú, Nelos? ¿Te habéis parado a pensar lo preocupados que estaban tus padres?"));
    contenedor.appendChild(crearParrafo("- Abuelo, hemos encontrado a unos aventureros que se han ofrecido a ayudarnos con nuestros problemas - le anuncia Alia."));
    contenedor.appendChild(crearParrafo("- Los problemas de la aldea son cosa nuestra - responde el anciano -. Además, no tenemos con qué pagarles y nadie hace nada por nada."));
    contenedor.appendChild(crearParrafo("- No pasa nada. ¡Quieren ayudarnos solo porque es lo correcto!"));
    contenedor.appendChild(crearParrafo("Un murmullo de sorpresa recorre las filas de aldeanos que os rodean. Os miran con curiosidad, la mayoría con esperanza y, alguno que otro, con desconfianza. - ¿Es eso cierto? - pregunta el anciano, arqueando una ceja."));
    contenedor.appendChild(crearParrafo("Tan pronto los Aventureros asientan, el anciano les pide que le acompañen a él y a su nieta a su casa. Nelos se excusa, pues debe ir a disculparse con sus padres por lo ocurrido. "));
    contenedor.appendChild(crearTitulo("Aullidos en la Noche"));
    contenedor.appendChild(crearParrafo("El anciano, que se presenta como Laros, os lleva a una humilde casa de madera. Una vez dentro, Alia despeja una mesa, disculpándose por el desorden y la falta de espacio. Traen unos taburetes, encienden el fuego y, poco después, estáis todos sentados a la mesa. - Alia, trae vino y comida para nuestros invitados - le pide Laros con su voz cascada -. No tenemos manjares pero, mientras estén aquí, no permitiremos que pasen hambre. "));
    contenedor.appendChild(crearParrafo("Laros os explica que pueden daros algunos sacos de trigo y unas tinajas de aceite por vuestra ayuda, que podréis vender despues en la ciudad. A eso le añadirá 20 piezas de Oro de un fondo que ponen los vecinos para cuando hay desastres, como sequías, si alguien cae enfermo o si un incendio deja a alguien sin casa. A cambio, os pide que investiguéis qué ocurre en las montañas. Los lobos no actúan de forma natural y sus viejos huesos le dicen que hay algo extraño tras ello."));
    contenedor.appendChild(crearParrafo("Los Aventureros pueden intentar regatear, pero el anciano no ha mentido. En realidad les están dando todo aquello de lo que pueden prescindir. Si les dan más, estarían cambiando un desastre por otro. Mientras están discutiendo los detalles y cenando, se escucha un aullido afuera, seguido de gritos pidiendo ayuda. "));
    contenedor.appendChild(crearParrafo("Al salir, veis a una mujer herida que viene con un bebé en los brazos perseguida por dos lobos grises y que suplica que la ayuden."));
    contenedor.appendChild(crearParrafo("Tan pronto los derroten, la mujer les pedirá que ayuden a su familia, señalándoles una de las casas de las lindes de la aldea. En la casa, encontrarán a otros tres lobos atacando al marido y al otro hijo. Si llegan deprisa podrán salvarlos, aunque el padre está muy herido y deberán curarlo para que sobreviva. Al acabar la pelea, un potente aullido se escuchará en la oscuridad de la noche. Pídeles que hagan una Prueba de percepción. Quienes la pasen, verán a un gran lobo blanco que les observa desde las lindes del pueblo, fuera de distancia de disparo. Al verse descubierto, se da la vuelta y sale corriendo, perdiéndose en la noche. "));
    contenedor.appendChild(crearParrafo("Poco a poco, al reinar la calma, los aldeanos salen de sus casas. Tras los agradecimientos (o las muestras de duelo, si ha habido muertos), Laros les pide a los demás que se encierren y refuercen bien las ventanas, pues entraron por una en la casa atacada. "));
    contenedor.appendChild(crearParrafo("Una Prueba de conocimiento animal les indica que los lobos nunca atacan asentamientos humanos. Como mucho, pueden atacar un establo o un cercado, pero prefieren no enfrentarse al hombre, a no ser que entre en su territorio. Definitivamente, una fuerza externa está controlando a los lobos. Así pues, les tocará adentrarse en el bosque e intentar rastrearlos y sería prudente esperar hasta por la mañana."));
    contenedor.appendChild(crearTitulo("El Misterioso Lobo Blanco"));
    contenedor.appendChild(crearParrafo("Ya sea por la mañana o por la noche, los Aventureros se adentrarán en el bosque para localizar la razón del comportamiento de los lobos. Si alguien o algo los controla, la mejor idea será rastrearlos hasta su guarida. Para hacerlo, basta con hacer una Prueba con Desventaja, a no ser que se posea algún Rasgo o Negocio Familiar relacionado. Apenas se han alejado unos cien metros de la aldea, pídeles una Prueba de percepción para darse cuenta de que algo se mueve entre unos arbustos cercanos. Se trata de Nelos, que quiere que le dejen acompañarlos pues, obviamente, quiere impresionar a Alia. Les dirá que sabe rastrear (cosa que es verdad) ya que su padre era cazador antes de que lo matase un oso. Pueden hacer una Prueba para convencerlo o amenazarlo y mandarlo de vuelta a la aldea o, por otro lado, aceptar su ayuda. "));
    contenedor.appendChild(crearParrafo("El camino a través del bosque requiere de tres Pruebas de Rastrear exitosas (no se requiere que sean consecutivas). Un fallo equivale a tres horas de retraso hasta que localizan otro rastro. Los Aventureros salen de la aldea hacia las 7:00 y anochecerá a las 21:00, así que toma nota del tiempo que necesitan."));
    contenedor.appendChild(crearParrafo("1. El primer rastro. Tras un par de horas, las huellas llevan hasta un río que necesitarán cruzar. Si Nelos va con ellos, les indicará que cerca de allí hay un vado en el que podrán atravesarlo saltando por unas rocas (Prueba de saltar). Si no, necesitarán nadar, requiriendo dos Pruebas para llegar a la otra orilla."));
    contenedor.appendChild(crearParrafo("2. El segundo rastro. Otras cuatro horas de marcha siguiendo huellas, les lleva hasta un lugar donde se pueden ver muchas huellas de lobo, como si una gran manada se hubiera reunido aquí anoche. Unas huellas son las que están siguiendo y van hacia la aldea, pero otras se adentran aún más en el bosque."));
    contenedor.appendChild(crearParrafo("3. La emboscada. Tras otras cuatro horas, los Aventureros escuchan gruñidos y, poco después, pueden ver a tres lobos grises peleando por una liebre que uno de ellos ha cazado. Los lobos los perciben y salen corriendo. Si los siguen, los lobos correrán unos 200 metros antes de darse la vuelta y encararse a ellos. Es posible hacer un disparo de Proyectil con Desventaja a causa de la distancia y los árboles, pero un segundo hará que el personaje quede descolgado del resto (que usarán sus Acciones para correr). Al enfrentarse a los lobos, los Aventureros podrán hacer una Prueba de percepción para darse cuenta de que están rodeados por una manada de otros cinco lobos grises y un Huargo. Si no se dan cuenta y estáis empleando la regla de Zonas, los Aventureros no podrán empezar en la Zona Lejana, a no ser que alguien decida subirse a un árbol. Durante el combate, el lobo blanco aparecerá de improviso y atacará al Huargo. Tan pronto lo derroten, los demás lobos huirán."));
    contenedor.appendChild(crearParrafo("Si alguno de los Aventureros puede comunicarse con el lobo blanco (Rasgo Amo de las Bestias), éste le dirá que “Los dos patas y los no-lobos han venido a las montañas y atacado a las manadas, derrotando a los alfas y haciéndose alfas. Yo ayuda a vosotros dos patas y yo reto a alfa no-lobo”. Si, los animales hablan raro y no tienen los mismos conceptos que los humanos. Si no pueden comunicarse con él, se alejará y se dará la vuelta, mirándolos, esperándolos. Igual quiere que lo sigan. "));
    contenedor.appendChild(crearTitulo("Enfrentamiento en el Claro"));
    contenedor.appendChild(crearParrafo("Siguiendo al lobo blanco, los personajes terminan llegando, ya de noche, a un claro. Acercándose sigilosamente, ven a la luz de la luna a una cincuentena de lobos y ocho Huargos. Subido en una roca, está un un Orco vestido con pieles de animales, que adorna su cuerpo con huesos y cráneos humanos que sujeta con una correa a una extraña criatura mitad mono, mitad rata. El Orco da órdenes a los Huargos para que salgan de caza con sus manadas. El lobo blanco les indica que aguarden se agazapa y aguarda a que los lobos obedezcan. "));
    contenedor.appendChild(crearParrafo("Solo queda en el claro el Orco, su mascota y tres Huargos. Ha llegado el momento de enfrentarlo y acabar con él."));
    contenedor.appendChild(crearParrafo("En el primer asalto del combate, la primera Acción del Orco es hacer sonar un cuerno que lleva en su zurrón. Una vez lo derroten, podrán saquear su zurrón en el que hay: 1 Esmeralda, 1 Perla y 15 monedas de Oro. Además, posee un Anillo de Curación que empleará durante el combate si le es necesario."));
    contenedor.appendChild(crearParrafo("Poco después de derrotarlo, todos los lobos con los cinco Huargos restantes vuelven. El lobo blanco aúlla una orden y los Huargos son despedazados por la manada, pues el lobo blanco ha vuelto a tomar el control de la misma. El lobo blanco les mira, altivo y orgulloso, con sus profundos ojos azules y asiente con la cabeza, como dándoles las gracias. Entonces aúlla y toda la manada sale corriendo."));
    contenedor.appendChild(crearParrafo("Habéis salvado la aldea de la amenaza de los lobos, pero ese Orco os ha dado mala espina. Mientras volvéis a la aldea, os preguntáis: ¿habrá mas Orcos en las montañas? Eso sería un peligro aún mayor para la aldea y, probablemente, para el reino. Hay que hacer algo... pero esa historia, la contaremos otro día"));
    contenedor.appendChild(crearParrafo("Nota: Si estáis usando el sistema de PX, llevar a Nelos vivo a la aldea supone 1PX extra y el agradecimiento tanto del muchacho como de Alia. Si rechazan la recompensa de los campesinos, puedes darles otro PX extra por su nobleza."));
}

function randomAdventure() {
    var randomIndex = Math.floor(Math.random() * 3);
    var functionArray = [generateAdventure1, generateAdventure2, generateAdventure3];
    functionArray[randomIndex]();
}