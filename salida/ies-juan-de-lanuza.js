(function() {
  var DATOS = {"nombre":"IES Juan de Lanuza","color":"#1a5276","respuesta_saludo":"¡Hola! Soy el asistente virtual del IES Juan de Lanuza. Pregúntame sobre departamentos, programaciones, criterios de evaluación o cualquier duda del centro.","respuesta_derivacion":"No encuentro esa información. Puedes contactar con el centro en la sección de contacto de la web o llamar al 976 123 456.","preguntas":[{"tema":"geografia e historia","entidades":{"asignaturas":["geografia","historia","arte"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"geografia","peso":6,"sinonimos":["geo","geografia e historia","historia","arte"]},{"texto":"historia","peso":5,"sinonimos":["historia de españa","historia del arte"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum","contenido","didactica"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota","examen","correccion"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","maestros","profesorado","equipo"]}],"respuesta":"El Departamento de Geografía e Historia tiene disponibles las programaciones didácticas, criterios de evaluación y el listado de profesores. Puedes consultarlo aquí: https://iesjuandelanuza.catedu.es/departamentos/departamento-de-geografia-historia/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/departamento-de-geografia-historia/"},{"tema":"ciencias naturales","entidades":{"asignaturas":["ciencias","biologia","geologia","naturales"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"ciencias","peso":6,"sinonimos":["biologia","geologia","naturales","ciencias naturales"]},{"texto":"biologia","peso":5,"sinonimos":["bio","ciencias naturales"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum","contenido"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota","examen"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","maestros","profesorado"]}],"respuesta":"El Departamento de Ciencias Naturales (Biología y Geología) publica sus programaciones, criterios de calificación y profesorado aquí: https://iesjuandelanuza.catedu.es/departamentos/ciencias-naturales/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/ciencias-naturales/"},{"tema":"economia","entidades":{"asignaturas":["economia","empresa","emprendimiento"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"economia","peso":6,"sinonimos":["eco","empresa","emprendimiento","economia de la empresa"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Economía tiene sus programaciones y criterios de evaluación disponibles en: https://iesjuandelanuza.catedu.es/departamentos/economia/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/economia/"},{"tema":"educacion fisica","entidades":{"asignaturas":["educacion fisica","deporte","gimnasia","ef"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"educacion fisica","peso":6,"sinonimos":["ef","deporte","gimnasia","fisica"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado","entrenador"]}],"respuesta":"El Departamento de Educación Física publica sus programaciones didácticas y criterios de calificación aquí: https://iesjuandelanuza.catedu.es/departamentos/educacion-fisica/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/educacion-fisica/"},{"tema":"filosofia","entidades":{"asignaturas":["filosofia","etica","valores","ciudadania"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"filosofia","peso":6,"sinonimos":["filo","etica","valores","ciudadania"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Filosofía (incluye Ética y Valores) tiene sus documentos en: https://iesjuandelanuza.catedu.es/departamentos/filosofia/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/filosofia/"},{"tema":"fisica y quimica","entidades":{"asignaturas":["fisica","quimica","fyq"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"fisica","peso":6,"sinonimos":["fyq","quimica","fisica y quimica"]},{"texto":"quimica","peso":5,"sinonimos":["fisica y quimica","fyq"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Física y Química tiene sus programaciones y criterios disponibles en: https://iesjuandelanuza.catedu.es/departamentos/fisica-y-quimica/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/fisica-y-quimica/"},{"tema":"frances","entidades":{"asignaturas":["frances","idioma","francia"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"frances","peso":6,"sinonimos":["francia","idioma frances"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Francés publica sus documentos en: https://iesjuandelanuza.catedu.es/departamentos/frances/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/frances/"},{"tema":"ingles","entidades":{"asignaturas":["ingles","idioma","english"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"ingles","peso":6,"sinonimos":["english","idioma ingles","bilingue"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Inglés tiene sus programaciones y criterios en: https://iesjuandelanuza.catedu.es/departamentos/ingles/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/ingles/"},{"tema":"latin","entidades":{"asignaturas":["latin","griego","clasicas"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"latin","peso":6,"sinonimos":["griego","clasicas","cultura clasica"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Latín y Griego publica sus documentos aquí: https://iesjuandelanuza.catedu.es/departamentos/latin/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/latin/"},{"tema":"lengua y literatura","entidades":{"asignaturas":["lengua","literatura","castellano","español"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"lengua","peso":6,"sinonimos":["castellano","español","literatura","lengua y literatura"]},{"texto":"literatura","peso":5,"sinonimos":["lengua y literatura","lectura"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Lengua y Literatura tiene sus programaciones en: https://iesjuandelanuza.catedu.es/departamentos/lengua-y-literatura/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/lengua-y-literatura/"},{"tema":"matematicas","entidades":{"asignaturas":["matematicas","mates","algebra","calculo"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"matematicas","peso":6,"sinonimos":["mates","algebra","calculo","geometria"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Matemáticas publica sus programaciones y criterios aquí: https://iesjuandelanuza.catedu.es/departamentos/departamento-de-matematicas/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/departamento-de-matematicas/"},{"tema":"musica","entidades":{"asignaturas":["musica","instrumento","canto"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"musica","peso":6,"sinonimos":["instrumento","canto","musical"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Música tiene sus documentos en: https://iesjuandelanuza.catedu.es/departamentos/musica/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/musica/"},{"tema":"orientacion","entidades":{"asignaturas":["orientacion","tutor","psicologo","pedagogia"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"orientacion","peso":6,"sinonimos":["tutoria","psicologia","pedagogia","apoyo"]},{"texto":"tutor","peso":5,"sinonimos":["tutoria","orientador","orientadora"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","orientador"]}],"respuesta":"El Departamento de Orientación publica sus documentos y recursos aquí: https://iesjuandelanuza.catedu.es/departamentos/orientacion/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/orientacion/"},{"tema":"plastica","entidades":{"asignaturas":["plastica","dibujo","artes","visual"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"plastica","peso":6,"sinonimos":["dibujo","artes","visual","artistica"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Plástica (Educación Plástica, Visual y Audiovisual) tiene sus documentos en: https://iesjuandelanuza.catedu.es/departamentos/plastica/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/plastica/"},{"tema":"religion","entidades":{"asignaturas":["religion","catolica","valores","alternativa"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"religion","peso":6,"sinonimos":["catolica","valores","alternativa","reli"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Religión tiene sus documentos disponibles en: https://iesjuandelanuza.catedu.es/departamentos/religion/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/religion/"},{"tema":"tecnologia","entidades":{"asignaturas":["tecnologia","informatica","tic","robotica"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"tecnologia","peso":6,"sinonimos":["tecno","informatica","tic","robotica","programacion"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Tecnología publica sus programaciones y criterios aquí: https://iesjuandelanuza.catedu.es/departamentos/tecnologia/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/tecnologia/"},{"tema":"hosteleria","entidades":{"asignaturas":["hosteleria","cocina","restauracion","servicios"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"hosteleria","peso":6,"sinonimos":["cocina","restauracion","bar","cafeteria"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado","chef"]}],"respuesta":"El Departamento de Hostelería tiene sus documentos en: https://iesjuandelanuza.catedu.es/departamentos/hosteleria/","enlace":"https://iesjuandelanuza.catedu.es/departamentos/hosteleria/"},{"tema":"energias renovables","entidades":{"asignaturas":["energias","renovables","solar","eolica"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"energias","peso":6,"sinonimos":["renovables","solar","eolica","energia"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Energías Renovables publica sus documentos aquí: https://iesjuandelanuza.catedu.es/energias-renovables/","enlace":"https://iesjuandelanuza.catedu.es/energias-renovables/"},{"tema":"formacion y orientacion laboral","entidades":{"asignaturas":["fol","orientacion laboral","formacion","trabajo"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"fol","peso":6,"sinonimos":["formacion","orientacion laboral","trabajo","empleo"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Formación y Orientación Laboral tiene sus documentos en: https://iesjuandelanuza.catedu.es/formacion-y-orientacion-laboral/","enlace":"https://iesjuandelanuza.catedu.es/formacion-y-orientacion-laboral/"},{"tema":"servicios a la comunidad","entidades":{"asignaturas":["servicios","comunidad","dependencia","social"],"documentos":["programacion","criterios","calificacion","evaluacion","profesores","departamento"]},"tokens":[{"texto":"servicios","peso":6,"sinonimos":["comunidad","dependencia","social","atencion"]},{"texto":"programacion","peso":4,"sinonimos":["plan","temario","curriculum"]},{"texto":"criterios","peso":3,"sinonimos":["evaluacion","calificacion","nota"]},{"texto":"profesores","peso":2,"sinonimos":["docentes","profesorado"]}],"respuesta":"El Departamento de Servicios a la Comunidad (Dependencia) publica sus documentos aquí: https://iesjuandelanuza.catedu.es/servicios-a-la-comunidad-dependencia/","enlace":"https://iesjuandelanuza.catedu.es/servicios-a-la-comunidad-dependencia/"}]};

  var css = `
    .cw-3301, .cw-3301 * { margin:0; padding:0; box-sizing:border-box; }
    .cw-3301 { position:fixed; bottom:24px; right:24px; z-index:9999; font-family:'Inter',-apple-system,sans-serif; }

    .cw-burbuja {
      width:62px; height:62px; border-radius:50%; background:${DATOS.color};
      cursor:pointer; display:flex; align-items:center; justify-content:center;
      font-size:28px; box-shadow:0 6px 28px rgba(0,0,0,0.3);
      transition:transform 0.3s, box-shadow 0.3s;
      position:relative; z-index:2;
    }
    .cw-burbuja:hover { transform:scale(1.06); box-shadow:0 8px 34px ${DATOS.color}66; }

    .cw-ventana {
      display:none; position:absolute; bottom:78px; right:0; width:370px; height:520px;
      background:#fff; border-radius:20px; box-shadow:0 20px 60px rgba(0,0,0,0.2);
      overflow:hidden; flex-direction:column;
      animation:cw-fadeIn 0.3s ease;
    }
    .cw-ventana.abierta { display:flex; }
    @keyframes cw-fadeIn { from{opacity:0;transform:translateY(14px);} to{opacity:1;transform:translateY(0);} }

    .cw-header {
      background:${DATOS.color}; color:#fff; padding:18px 22px; font-weight:700;
      font-size:15px; display:flex; justify-content:space-between; align-items:center;
      letter-spacing:0.3px;
    }
    .cw-header span { display:flex; align-items:center; gap:8px; }
    .cw-header span::before { content:'🤖'; font-size:18px; }
    .cw-cerrar {
      background:rgba(255,255,255,0.15); border:none; color:#fff;
      width:30px; height:30px; border-radius:50%; cursor:pointer;
      font-size:16px; display:flex; align-items:center; justify-content:center;
      transition:background 0.2s;
    }
    .cw-cerrar:hover { background:rgba(255,255,255,0.25); }

    .cw-body {
      flex:1; padding:18px; overflow-y:auto; display:flex; flex-direction:column; gap:14px;
      background:#f8f9fb;
    }

    .cw-mensaje { display:flex; gap:10px; align-items:flex-end; animation:cw-fadeIn 0.3s ease; }
    .cw-mensaje.bot { align-self:flex-start; }
    .cw-mensaje.usuario { align-self:flex-end; flex-direction:row-reverse; }
    .cw-avatar {
      font-size:24px; flex-shrink:0; width:34px; height:34px;
      background:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center;
      box-shadow:0 2px 8px rgba(0,0,0,0.06);
    }
    .cw-mensaje.usuario .cw-avatar { display:none; }

    .cw-burbuja-msg {
      padding:11px 16px; border-radius:16px; font-size:13.5px; max-width:82%;
      line-height:1.55; word-break:break-word;
    }
    .cw-mensaje.bot .cw-burbuja-msg {
      background:#fff; color:#1a1a2e; border-bottom-left-radius:4px;
      box-shadow:0 2px 10px rgba(0,0,0,0.04);
    }
    .cw-mensaje.usuario .cw-burbuja-msg {
      background:${DATOS.color}; color:#fff; border-bottom-right-radius:4px;
    }
    .cw-burbuja-msg a {
      color:${DATOS.color}; font-weight:600; text-decoration:underline;
    }
    .cw-mensaje.usuario .cw-burbuja-msg a { color:#fff; }

    .cw-input-area {
      display:flex; padding:14px; border-top:1px solid #eef0f2; gap:10px; background:#fff;
    }
    .cw-input-area input {
      flex:1; border:2px solid #eef0f2; border-radius:14px; padding:11px 16px;
      font-size:13.5px; outline:none; font-family:inherit; transition:border-color 0.2s;
    }
    .cw-input-area input:focus { border-color:${DATOS.color}; }
    .cw-input-area button {
      background:${DATOS.color}; color:#fff; border:none; width:44px; height:44px;
      border-radius:14px; cursor:pointer; font-size:18px; transition:opacity 0.2s;
      display:flex; align-items:center; justify-content:center; flex-shrink:0;
    }
    .cw-input-area button:hover { opacity:0.85; }

    .cw-footer {
      text-align:center; padding:8px; font-size:10px; color:#bbb; background:#fff;
      border-top:1px solid #f0f0f0;
    }
  `;

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  var html = `
    <div class="cw-3301">
      <div class="cw-burbuja" id="cwBurbuja">💬</div>
      <div class="cw-ventana" id="cwVentana">
        <div class="cw-header"><span>${DATOS.nombre}</span><button class="cw-cerrar" id="cwCerrar">✕</button></div>
        <div class="cw-body" id="cwBody"></div>
        <div class="cw-input-area">
          <input type="text" id="cwInput" placeholder="Escribe tu mensaje...">
          <button id="cwEnviar">➤</button>
        </div>
        <div class="cw-footer">Powered by Chatbot3301</div>
      </div>
    </div>`;

  var div = document.createElement('div');
  div.innerHTML = html;
  document.body.appendChild(div);

  // ========== MOTOR ==========
  function normalizar(texto) {
    return texto.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9ñ\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  var raicesVerbales = {
    "empiezo":"empezar","empiezas":"empezar","empieza":"empezar","empiezan":"empezar","empezamos":"empezar",
    "abro":"abrir","abres":"abrir","abre":"abrir","abren":"abrir","abrimos":"abrir",
    "quiero":"querer","quieres":"querer","quiere":"querer","quieren":"querer","queremos":"querer",
    "necesito":"necesitar","necesitas":"necesitar","necesita":"necesitar","necesitan":"necesitar",
    "tengo":"tener","tienes":"tener","tiene":"tener","tienen":"tener","tenemos":"tener",
    "hay":"haber","saben":"saber","se":"saber","puedo":"poder","puedes":"poder",
    "puede":"poder","podemos":"poder","pueden":"poder","dan":"dar","da":"dar","doy":"dar"
  };

  function reducirVerbo(palabra) { return raicesVerbales[palabra] || palabra; }

  var _contexto = { ultimoTema: null, ultimaAsignatura: null, ultimoCurso: null };

  function heredarContexto(mensaje) {
    var msg = normalizar(mensaje);
    if (msg.length < 20 && _contexto.ultimoTema) {
      return msg + " " + (_contexto.ultimaAsignatura || "") + " " + (_contexto.ultimoCurso || "");
    }
    return msg;
  }

  function buscarRespuesta(mensajeOriginal) {
    var mensaje = heredarContexto(mensajeOriginal);
    var msgNormalizado = normalizar(mensaje);
    var textoReducido = msgNormalizado.split(" ").map(reducirVerbo).join(" ");
    var mejor = null, mejorScore = 0;

    for (var i = 0; i < DATOS.preguntas.length; i++) {
      var p = DATOS.preguntas[i], score = 0;
      if (p.entidades) {
        for (var tipo in p.entidades) {
          for (var j = 0; j < p.entidades[tipo].length; j++) {
            if (textoReducido.includes(p.entidades[tipo][j])) score += 10;
          }
        }
      }
      if (p.tokens) {
        for (var k = 0; k < p.tokens.length; k++) {
          var tk = p.tokens[k];
          if (textoReducido.includes(tk.texto)) { score += (tk.peso || 1) * 3; continue; }
          if (tk.sinonimos) {
            for (var s = 0; s < tk.sinonimos.length; s++) {
              if (textoReducido.includes(tk.sinonimos[s])) { score += (tk.peso || 1) * 2; break; }
            }
          }
          if (tk.raiz && textoReducido.includes(tk.raiz)) score += (tk.peso || 1) * 1.5;
        }
      }
      if (score > mejorScore) { mejorScore = score; mejor = p; }
    }

    if (mejorScore >= 3) {
      _contexto.ultimoTema = mejor.tema || null;
      if (mejor.entidades) {
        _contexto.ultimaAsignatura = (mejor.entidades.asignaturas || [null])[0];
        _contexto.ultimoCurso = (mejor.entidades.cursos || [null])[0];
      }
      return mejor;
    }
    return null;
  }

  function renderRespuesta(respuesta) {
    var texto = respuesta.respuesta;
    if (respuesta.enlace) {
      texto = texto.replace(respuesta.enlace, '<a href="' + respuesta.enlace + '" target="_blank">' + respuesta.enlace + '</a>');
    }
    return texto;
  }

  // ========== EVENTOS ==========
  var cwBody = document.getElementById('cwBody');
  var cwInput = document.getElementById('cwInput');
  var cwBurbuja = document.getElementById('cwBurbuja');
  var cwVentana = document.getElementById('cwVentana');
  var cwEnviar = document.getElementById('cwEnviar');
  var cwCerrar = document.getElementById('cwCerrar');
  var primerMensaje = true;

  function enviarMensaje() {
    var texto = cwInput.value.trim();
    if (!texto) return;

    cwBody.innerHTML += '<div class="cw-mensaje usuario"><div class="cw-burbuja-msg">' + texto + '</div></div>';
    cwInput.value = '';
    cwBody.scrollTop = cwBody.scrollHeight;

    if (primerMensaje) {
      primerMensaje = false;
    }

    setTimeout(function() {
      var resultado = buscarRespuesta(texto);
      var respuestaHTML = resultado ? renderRespuesta(resultado) : DATOS.respuesta_derivacion;
      cwBody.innerHTML += '<div class="cw-mensaje bot"><span class="cw-avatar">🤖</span><div class="cw-burbuja-msg">' + respuestaHTML + '</div></div>';
      cwBody.scrollTop = cwBody.scrollHeight;
    }, 500);
  }

  cwBurbuja.addEventListener('click', function() {
    cwVentana.classList.add('abierta');
    if (primerMensaje) {
      primerMensaje = false;
      setTimeout(function() {
        cwBody.innerHTML += '<div class="cw-mensaje bot"><span class="cw-avatar">🤖</span><div class="cw-burbuja-msg">' + DATOS.respuesta_saludo + '</div></div>';
        cwBody.scrollTop = cwBody.scrollHeight;
      }, 500);
    }
  });

  cwEnviar.addEventListener('click', enviarMensaje);
  cwInput.addEventListener('keydown', function(e) { if (e.key === 'Enter') enviarMensaje(); });
  cwCerrar.addEventListener('click', function() { cwVentana.classList.remove('abierta'); });
})();