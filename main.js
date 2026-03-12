import "@fontsource/syne/latin-700.css";
import "@fontsource/manrope/latin-400.css";
import "@fontsource/manrope/latin-500.css";
import "@fontsource/manrope/latin-700.css";
import "./styles.css";

const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

const slides = [
  {
    id: "intro",
    number: "01",
    kicker: "Presentación web",
    title: "Reorganización de Marca y Plataforma Digital",
    text: "Para centralizar la comunicación de la empresa y sus productos bajo una arquitectura de marca clara que permita posicionar a CyC del Sureste como la empresa matriz.",
    layout: "intro",
  },
  {
    id: "arquitectura",
    number: "02",
    kicker: "brand architecture",
    title: "Arquitectura de marca",
    text: "La solución consiste en reorganizar la arquitectura de marca utilizando un modelo Endorsed Brand, donde CyC del Sureste se posiciona como la empresa matriz, mientras que Blue Drop y Green Drone se presentan como tecnologías desarrolladas por la empresa. De esta forma, cada solución mantiene su identidad, pero al mismo tiempo construye el valor y reconocimiento de CyC del Sureste.",
    layout: "architecture",
  },
  {
    id: "modelo",
    number: "03",
    kicker: "recognition strategy",
    title: "Reconocimiento Digital",
    text: "La estrategia digital busca posicionar a CyC del Sureste como la empresa detrás de sus tecnologías, mediante una plataforma web centralizada y una estructura SEO que conecte Blue Drop y Green Drone con la marca corporativa. De esta forma, cada solución contribuye a fortalecer la visibilidad, autoridad y posicionamiento digital de CyC del Sureste.",
    layout: "model",
  },
  {
    id: "plataforma",
    number: "04",
    kicker: "Cotización",
    title: "Cotización",
    text: "Propuesta dividida en tres frentes principales para ordenar dominios, construir el sitio y definir la arquitectura de marca de CyC del Sureste.",
    layout: "platform",
  },
  {
    id: "cierre",
    number: "05",
    meta: "Leveling",
    kicker: "El Futuro de CyC del Sureste",
    title: "La marca detrás de la tecnología",
    text: "El objetivo no es solo construir un sitio web, sino posicionar a CyC del Sureste como la empresa que desarrolla la tecnología.",
    layout: "closing",
  },
];

slides[0].text =
  "Una reorganización pensada para <strong>centralizar la comunicación</strong>, ordenar las marcas y <strong>posicionar a CyC del Sureste como la empresa matriz</strong> que respalda cada solución.";
slides[1].text =
  "La propuesta reorganiza la marca bajo un modelo Endorsed Brand, donde <strong>CyC del Sureste gana protagonismo como empresa matriz</strong> y Blue Drop con Green Drone se presentan como tecnologías desarrolladas por la compañía. Así, cada solución conserva su identidad mientras <strong>transfiere valor, confianza y reconocimiento</strong> a la marca principal.";
slides[2].text =
  "La estrategia digital está diseñada para <strong>conectar cada tecnología con la marca corporativa</strong> mediante una plataforma centralizada y una arquitectura SEO clara. El resultado es <strong>más visibilidad, más autoridad y una presencia digital unificada</strong> para CyC del Sureste.";
slides[3].text =
  "La cotización se organiza en <strong>tres frentes clave</strong> para ordenar dominios, construir el sitio y definir una arquitectura de marca lista para crecer. Cada etapa está pensada para <strong>convertir la estructura digital en un activo comercial</strong> para CyC del Sureste.";
slides[4].text =
  "La meta no es solo lanzar un sitio web, sino <strong>posicionar a CyC del Sureste como la marca detrás de la tecnología</strong>. Es una base para <strong>vender con más claridad, respaldar sus soluciones y elevar su percepción de valor</strong>.";

slides[0].text =
  "Una reorganización pensada para centralizar la comunicación, ordenar las marcas y posicionar a CyC del Sureste como la empresa matriz que respalda cada solución.";
slides[1].text =
  "La propuesta reorganiza la marca bajo un modelo Endorsed Brand, donde CyC del Sureste gana protagonismo como empresa matriz y Blue Drop con Green Drone se presentan como tecnologías desarrolladas por la compañía. Así, cada solución conserva su identidad mientras transfiere valor, confianza y reconocimiento a la marca principal.";
slides[2].text =
  "La estrategia digital está diseñada para conectar cada tecnología con la marca corporativa mediante una plataforma centralizada y una arquitectura SEO clara. El resultado es más visibilidad, más autoridad y una presencia digital unificada para CyC del Sureste.";
slides[3].text =
  "La cotización se organiza en tres frentes clave para ordenar dominios, construir el sitio y definir una arquitectura de marca lista para crecer. Cada etapa está pensada para convertir la estructura digital en un activo comercial para CyC del Sureste.";
slides[4].text =
  "La meta no es solo lanzar un sitio web, sino posicionar a CyC del Sureste como la marca detrás de la tecnología. Es una base para vender con más claridad, respaldar sus soluciones y elevar su percepción de valor.";

slides[0].text =
  "Una reorganización pensada para <b>centralizar la comunicación</b>, ordenar las marcas y <b>posicionar a CyC del Sureste como la empresa matriz</b> que respalda cada solución.";
slides[1].text =
  "La propuesta reorganiza la marca bajo un modelo Endorsed Brand, donde <b>CyC del Sureste gana protagonismo como empresa matriz</b> y Blue Drop con Green Drone se presentan como tecnologías desarrolladas por la compañía. Así, cada solución conserva su identidad mientras <b>transfiere valor, confianza y reconocimiento</b> a la marca principal.";
slides[2].text =
  "La estrategia digital está diseñada para <b>conectar cada tecnología con la marca corporativa</b> mediante una plataforma centralizada y una arquitectura SEO clara. El resultado es <b>más visibilidad, más autoridad y una presencia digital unificada</b> para CyC del Sureste.";
slides[3].text =
  "La cotización se organiza en <b>tres frentes clave</b> para ordenar dominios, construir el sitio y definir una arquitectura de marca lista para crecer. Cada etapa está pensada para <b>convertir la estructura digital en un activo comercial</b> para CyC del Sureste.";
slides[4].text =
  "La meta no es solo lanzar un sitio web, sino <b>posicionar a CyC del Sureste como la marca detrás de la tecnología</b>. Es una base para <b>vender con más claridad, respaldar sus soluciones y elevar su percepción de valor</b>.";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="deck">
    <div class="progress"><span id="progress-indicator"></span></div>
    <header class="topbar">
      <span class="topbar__brand">CyC del Sureste</span>
      <div class="topbar__status">
        <span id="slide-count">01 / ${String(slides.length).padStart(2, "0")}</span>
        <span id="slide-name">${slides[0].title}</span>
      </div>
    </header>
    <nav class="dots" aria-label="Navegación de diapositivas">
      ${slides
        .map(
          (slide, index) => `
            <a href="#${slide.id}" class="dots__item ${index === 0 ? "is-active" : ""}" data-dot="${slide.id}">
              <span>${slide.number}</span>
            </a>
          `,
        )
        .join("")}
    </nav>
    <main class="slides">
      ${slides.map(renderSlide).join("")}
    </main>
  </div>
`;

function renderSlide(slide, index) {
  const layouts = {
    intro: renderIntro,
    architecture: renderArchitecture,
    model: renderModel,
    platform: renderPlatform,
    closing: renderClosing,
  };

  return `
    <section
      id="${slide.id}"
      class="slide slide--${slide.layout}"
      data-slide="${slide.id}"
      data-index="${index + 1}"
    >
      ${slide.id === "intro" || slide.id === "arquitectura" || slide.id === "modelo" || slide.id === "plataforma" || slide.id === "cierre" ? "" : `<div class="slide__ghost">${slide.number}</div>`}
      <div class="slide__card">
        <div class="slide__meta">
          <span>${slide.number}</span>
          <span>${slide.meta ?? slide.kicker}</span>
        </div>
        ${layouts[slide.layout](slide)}
      </div>
    </section>
  `;
}

function renderIntro(slide) {
  return `
    <div class="intro">
      <div class="intro__copy">
        <img
          class="intro__logo"
          src="${asset("iz-logo.png")}"
          alt="CyC del Sureste"
          loading="eager"
        />
        <p class="eyebrow">Propuesta para</p>
        <h1>${slide.title}</h1>
        <p class="lede">${slide.text}</p>
      </div>
    </div>
  `;
}

function renderArchitecture(slide) {
  return `
    <div class="architecture">
      <div class="architecture__header">
        <h2>${slide.title}</h2>
        <p class="body">${slide.text}</p>
      </div>
      <div class="architecture__grid">
        <article class="architecture-block architecture-block--flow">
          <div class="architecture-block__label">Flujo de redirección</div>
          <div class="redirect-flow" data-flow>
            <svg class="redirect-flow__svg" aria-hidden="true">
              <defs>
                <linearGradient id="flowGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                  <stop offset="0%" stop-color="rgba(214, 212, 255, 0.2)"></stop>
                  <stop offset="100%" stop-color="rgba(214, 212, 255, 0.95)"></stop>
                </linearGradient>
              </defs>
              <path data-connection="blue-redirection"></path>
              <path data-connection="green-redirection"></path>
              <path data-connection="cyc-redirection"></path>
              <path data-connection="redirection-target"></path>
            </svg>
            <div class="flow-node flow-node--source" data-node="blue" style="--x: 2%; --y: 43%;">
              <div class="flow-node__handles" aria-hidden="true"><span></span><span></span></div>
              <div class="flow-node__copy"><span>Dominio legado</span><strong>BlueDrop</strong><small>Entrada de tráfico</small></div>
            </div>
            <div class="flow-node flow-node--source" data-node="green" style="--x: 2%; --y: 8%;">
              <div class="flow-node__handles" aria-hidden="true"><span></span><span></span></div>
              <div class="flow-node__copy"><span>Dominio legado</span><strong>GreenDrone</strong><small>Entrada de tráfico</small></div>
            </div>
            <div class="flow-node flow-node--source" data-node="cyc" style="--x: 2%; --y: 70%;">
              <div class="flow-node__handles" aria-hidden="true"><span></span><span></span></div>
              <div class="flow-node__copy"><span>Dominio principal</span><strong>CyC del Sureste</strong><small>Entidad central</small></div>
            </div>
            <div class="flow-node flow-node--hub" data-node="redirection" style="--x: 45%; --y: 47%;">
              <div class="flow-node__handles" aria-hidden="true"><span></span><span></span></div>
              <div class="flow-node__copy"><span>Router</span><strong>Redirección</strong><small>Normaliza el tráfico</small></div>
            </div>
            <div class="flow-node flow-node--target" data-node="target" style="--x: 74%; --y: 49%;">
              <div class="flow-node__handles" aria-hidden="true"><span></span><span></span></div>
              <div class="flow-node__copy"><span>Destino principal</span><strong>cycdelsureste.com</strong><small>Sitio corporativo</small></div>
            </div>
          </div>
        </article>
        <article class="architecture-block architecture-block--site">
          <div class="architecture-block__label">Mapa de sitio</div>
          <div class="site-map" data-site-map>
            <svg class="site-map__svg" viewBox="0 0 320 480" aria-hidden="true">
              <path data-site-path="trunk"></path><path data-site-path="home"></path><path data-site-path="empresa"></path><path data-site-path="empresa-divisiones"></path><path data-site-path="divisiones-blue"></path><path data-site-path="divisiones-green"></path><path data-site-path="proyectos"></path><path data-site-path="articulos"></path><path data-site-path="ventas"></path><path data-site-path="contacto"></path>
            </svg>
            <div class="site-map__item" data-site-node="home" style="--y: 0.6rem; --w: 2.5rem;"><span class="site-map__dot" aria-hidden="true"></span><div class="site-map__node"><span>Home</span><small>Entrada principal</small></div></div>
            <div class="site-map__item" data-site-node="empresa" style="--y: 4.2rem; --w: 2.5rem;"><span class="site-map__dot" aria-hidden="true"></span><div class="site-map__node"><span>Empresa</span><small>Marca matriz</small></div></div>
            <div class="site-map__item site-map__item--branch" data-site-node="divisiones" style="--y: 7.8rem; --x: 4.6rem; --w: 2.2rem;"><span class="site-map__dot" aria-hidden="true"></span><div class="site-map__node"><span>Divisiones</span><small>Soluciones</small></div></div>
            <div class="site-map__item site-map__item--leaf" data-site-node="blueDrop" style="--y: 10.9rem; --x: 7.8rem; --w: 1.8rem;"><span class="site-map__dot" aria-hidden="true"></span><div class="site-map__node"><span>BlueDrop</span><small>Agua</small></div></div>
            <div class="site-map__item site-map__item--leaf" data-site-node="greenDrone" style="--y: 13.9rem; --x: 7.8rem; --w: 1.8rem;"><span class="site-map__dot" aria-hidden="true"></span><div class="site-map__node"><span>GreenDrone</span><small>Agrícola</small></div></div>
            <div class="site-map__item" data-site-node="proyectos" style="--y: 17.6rem; --w: 2.5rem;"><span class="site-map__dot" aria-hidden="true"></span><div class="site-map__node"><span>Proyectos</span><small>Casos y obras</small></div></div>
            <div class="site-map__item" data-site-node="articulos" style="--y: 20.7rem; --w: 2.5rem;"><span class="site-map__dot" aria-hidden="true"></span><div class="site-map__node"><span>Artículos</span><small>Contenido SEO</small></div></div>
            <div class="site-map__item" data-site-node="ventas" style="--y: 23.8rem; --w: 2.5rem;"><span class="site-map__dot" aria-hidden="true"></span><div class="site-map__node"><span>Ventas</span><small>Conversión</small></div></div>
            <div class="site-map__item" data-site-node="contacto" style="--y: 26.9rem; --w: 2.5rem;"><span class="site-map__dot" aria-hidden="true"></span><div class="site-map__node"><span>Contacto</span><small>Captación</small></div></div>
          </div>
        </article>
      </div>
    </div>
  `;
}

function renderModel(slide) {
  return `
    <div class="recognition">
      <div class="recognition__copy">
        <h2>${slide.title}</h2>
        <p class="body">${slide.text}</p>
      </div>
      <div class="recognition__grid">
        <article class="recognition-flow">
          <div class="recognition-flow__label">Branding map</div>
          <div class="recognition-flow__frame recognition-flow__frame--native">
            <img class="recognition-flow__mobile-image" src="${asset("Diagrama%20CyC.drawio.png")}" alt="Diagrama de reconocimiento digital" loading="lazy" />
            <div class="recognition-canvas" data-recognition-flow>
              <svg class="recognition-flow__svg" aria-hidden="true">
                <defs><marker id="recognitionArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z"></path></marker></defs>
                <path data-recognition-path="estrategia-comunicacion"></path><path data-recognition-path="comunicacion-identidad"></path><path data-recognition-path="comunicacion-mision"></path><path data-recognition-path="identidad-cyc"></path><path data-recognition-path="cyc-visibilidad"></path><path data-recognition-path="cyc-sitioweb"></path><path data-recognition-path="sitioweb-bluedrop"></path><path data-recognition-path="sitioweb-greendrone"></path><path data-recognition-path="marketing-cyc"></path><path data-recognition-path="marketing-redes"></path><path data-recognition-path="redes-contenido"></path><path data-recognition-path="redes-engagement"></path><path data-recognition-path="voz-marketing"></path><path data-recognition-path="mision-voz"></path><path data-recognition-path="marketing-publicidad"></path><path data-recognition-path="marketing-blog"></path><path data-recognition-path="publicidad-digital"></path><path data-recognition-path="publicidad-impresa"></path><path data-recognition-path="blog-articulos"></path><path data-recognition-path="mision-articulos"></path><path data-recognition-path="visibilidad-bullets"></path><path data-recognition-path="visibilidad-servicios"></path><path data-recognition-path="visibilidad-bycyc"></path><path data-recognition-path="visibilidad-enlaces"></path><path data-recognition-path="visibilidad-estrategicos"></path><path data-recognition-path="visibilidad-resenas"></path><path data-recognition-path="visibilidad-tienda"></path><path data-recognition-path="bullets-contenido"></path>
              </svg>
              <div class="recognition-module recognition-module--small recognition-module--wide" data-recognition-node="estrategia" style="--x: 53%; --y: 10%;"><strong>Estrategia</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--wide" data-recognition-node="identidad" style="--x: 30%; --y: 23%;"><strong>Identidad</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--wide" data-recognition-node="comunicacion" style="--x: 53%; --y: 22%;"><strong>Comunicación</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--wide" data-recognition-node="mision" style="--x: 79%; --y: 34%;"><strong>Misión/Visión</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--wide" data-recognition-node="voz" style="--x: 67%; --y: 34%;"><strong>"Voz"<br />de marca</strong></div>
              <div class="recognition-module recognition-module--core" data-recognition-node="cyc" style="--x: 30%; --y: 40%;"><strong>CyC</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--wide" data-recognition-node="marketing" style="--x: 53%; --y: 34%;"><strong>Marketing</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--wide" data-recognition-node="visibilidad" style="--x: 3%; --y: 41%;"><strong>Visibilidad</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--wide" data-recognition-node="sitioweb" style="--x: 30%; --y: 56%;"><strong>Sitio Web</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--mid" data-recognition-node="redes" style="--x: 44%; --y: 54%;"><strong>Redes<br />Sociales</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--mid" data-recognition-node="publicidad" style="--x: 56%; --y: 54%;"><strong>Publicidad</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--mid" data-recognition-node="blog" style="--x: 69%; --y: 54%;"><strong>Blog</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--mid" data-recognition-node="bluedrop" style="--x: 25%; --y: 71%;"><strong>Blue Drop</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--mid" data-recognition-node="greendrone" style="--x: 35%; --y: 71%;"><strong>Green<br />Drone</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--mid" data-recognition-node="contenido" style="--x: 38%; --y: 92%;"><strong>Contenido</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--mid" data-recognition-node="engagement" style="--x: 48%; --y: 89%;"><strong>Engagement</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--mid" data-recognition-node="digital" style="--x: 55%; --y: 77%;"><strong>Digital</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--mid" data-recognition-node="impresa" style="--x: 63%; --y: 77%;"><strong>Impresa</strong></div>
              <div class="recognition-module recognition-module--small recognition-module--mid" data-recognition-node="articulos" style="--x: 70%; --y: 75%;"><strong>Artículos</strong></div>
              <div class="recognition-module recognition-module--small recognition-bullet" data-recognition-bullet="servicios" style="--x: 10%; --y: 49%;"><strong>Servicios</strong></div>
              <div class="recognition-module recognition-module--small recognition-bullet" data-recognition-bullet="bycyc" style="--x: 10%; --y: 55.5%;"><strong>By CyC...</strong></div>
              <div class="recognition-module recognition-module--small recognition-bullet" data-recognition-bullet="enlaces" style="--x: 10%; --y: 62%;"><strong>Enlaces</strong></div>
              <div class="recognition-module recognition-module--small recognition-bullet recognition-bullet--tall" data-recognition-bullet="estrategicos" style="--x: 10%; --y: 69.5%;"><strong>Art?culos Estrat?gicos</strong></div>
              <div class="recognition-module recognition-module--small recognition-bullet" data-recognition-bullet="resenas" style="--x: 10%; --y: 78%;"><strong>Reseñas</strong></div>
              <div class="recognition-module recognition-module--small recognition-bullet recognition-bullet--tall" data-recognition-bullet="tienda" style="--x: 10%; --y: 86.5%;"><strong>Tienda en línea</strong></div>
            </div>
          </div>
        </article>
        <article class="seo-config">
          <div class="seo-config__label">Configuración SEO</div>
          <div class="seo-config__stack">
            <div class="seo-config__card seo-config__card--primary"><span>Arquitectura</span><strong>cycdelsureste.com</strong><small>Dominio principal y entidad madre</small></div>
            <div class="seo-config__card"><span>Subdirectorios</span><strong>/blue-drop</strong><small>Tratamiento de aguas con respaldo corporativo</small></div>
            <div class="seo-config__card"><span>Subdirectorios</span><strong>/green-drone</strong><small>Tecnología agrícola alineada al mismo dominio</small></div>
            <div class="seo-config__card"><span>Schema</span><strong>Organization + Product</strong><small>CyC del Sureste como organización, Blue Drop y Green Drone como tecnologías</small></div>
            <div class="seo-config__card"><span>Contenido</span><strong>Blog + Artículos estratégicos</strong><small>Responde dudas, posiciona keywords y refuerza autoridad</small></div>
            <div class="seo-config__card seo-config__card--accent"><span>Objetivo</span><strong>Reconocimiento digital unificado</strong><small>Visibilidad, marca madre y conversión trabajando juntas</small></div>
          </div>
        </article>
      </div>
    </div>
  `;
}

function renderPlatform(slide) {
  return `
    <div class="quote">
      <div class="quote__copy">
        <h2>${slide.title}</h2>
        <p class="body">${slide.text}</p>
      </div>
      <div class="quote__grid">
        <article class="quote-card"><div class="quote-card__top"><span>Auditoría y organización</span><strong>$4,000 MXN</strong></div><h3>Auditoría y Organización de Dominios</h3><p>Revisión de dominios actuales, definición de estructura correcta y plan de redirecciones para concentrar valor digital en una sola base ordenada.</p><small>Entrega final: diagnóstico, mapa de dominios, jerarquía recomendada y plan técnico de implementación.</small></article>
        <article class="quote-card quote-card--featured"><div class="quote-card__top"><span>Diseño y desarrollo</span><strong>$16,000 MXN</strong></div><h3>Diseño y desarrollo de sitio web</h3><p>Diseño visual, estructura de navegación, desarrollo responsive y presentación clara de la empresa, divisiones, proyectos y contacto.</p><small>Entrega final: sitio web funcional, adaptado a móvil, listo para publicar y crecer.</small></article>
        <article class="quote-card"><div class="quote-card__top"><span>Estrategia de marca</span><strong>$12,000 MXN</strong></div><h3>Plan de Arquitectura de marca</h3><p>Definición de marca madre, divisiones, narrativa y sistema de relación entre CyC del Sureste, Blue Drop y Green Drone.</p><small>Entrega final: documento estratégico con estructura de marca, usos recomendados y lineamientos de presentación con material gráfico.</small></article>
      </div>
      <div class="quote__total"><div class="quote__total-copy"><p class="eyebrow">Total</p><h3>$25,600 MXN</h3><small>Precios más IVA</small></div><div class="quote__total-breakdown"><div><span>Subtotal</span><strong>$32,000 MXN</strong></div><div><span>Descuento de amigo</span><strong>-20%</strong></div><div><span>Ahorro aplicado</span><strong>$6,400 MXN</strong></div></div></div>
      <div class="quote__addons"><div class="quote__addons-copy"><p class="eyebrow">Servicios adicionales</p><p class="body">Se pueden contratar por separado, pero complementan muy bien esta propuesta y responden a las necesidades de posicionamiento y captación del proyecto.</p></div><div class="quote__addons-grid"><article class="addon-card"><strong>SEO local</strong><div class="addon-card__price"><span class="addon-card__amount">$2,500 MXN</span><small class="addon-card__period">mensuales</small></div></article><article class="addon-card addon-card--ghost"><strong><span class="addon-card__title-line">Mantenimiento</span><span>web y contenido</span></strong><div class="addon-card__price"><span class="addon-card__amount">$3,500 MXN</span><small class="addon-card__period">mensuales</small></div></article><article class="addon-card"><strong>Generación<br />de leads</strong><div class="addon-card__price"><span class="addon-card__amount">$4,000 MXN</span><small class="addon-card__period">mensuales</small></div></article></div></div>
    </div>
  `;
}

function renderClosing(slide) {
  return `
    <div class="closing">
      <div class="closing__copy"><p class="eyebrow">${slide.kicker}</p><h2>${slide.title}</h2><p class="lede">${slide.text}</p></div>
      <div class="closing__statement"><p>Blue Drop</p><p>Green Drone</p><p>y las tecnologías que están por venir.</p></div>
      <a class="closing__button closing__button--whatsapp" href="https://wa.me/529993567229?text=Hola%20Iv%C3%A1n%2C%20vi%20tu%20presentaci%C3%B3n%2C%20toma%20todo%20mi%20dinero." target="_blank" rel="noreferrer">Confirmar por WhatsApp</a>
    </div>
  `;
}

const nodes = [...document.querySelectorAll("[data-slide]")];
const dots = [...document.querySelectorAll("[data-dot]")];
const slideCount = document.querySelector("#slide-count");
const slideName = document.querySelector("#slide-name");
const progressIndicator = document.querySelector("#progress-indicator");
const flowElements = [...document.querySelectorAll("[data-flow]")];
const siteMaps = [...document.querySelectorAll("[data-site-map]")];
const recognitionFlows = [...document.querySelectorAll("[data-recognition-flow]")];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const index = Number(entry.target.dataset.index);
      const id = entry.target.dataset.slide;

      entry.target.classList.add("is-visible");
      slideCount.textContent = `${String(index).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
      slideName.textContent = slides[index - 1].title;

      dots.forEach((dot) => {
        dot.classList.toggle("is-active", dot.dataset.dot === id);
      });
    });
  },
  {
    threshold: 0.18,
    rootMargin: "-8% 0px -8% 0px",
  },
);

nodes.forEach((node) => observer.observe(node));

let ticking = false;

function paint() {
  const viewport = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight - viewport;
  const progress = pageHeight > 0 ? window.scrollY / pageHeight : 0;

  progressIndicator.style.transform = `scaleX(${progress.toFixed(3)})`;

  nodes.forEach((node) => {
    const rect = node.getBoundingClientRect();
    const raw = (viewport - rect.top) / (viewport + rect.height);
    const clamped = Math.min(1, Math.max(0, raw));
    node.style.setProperty("--progress", clamped.toFixed(3));
  });

  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(paint);
    ticking = true;
  }
});

window.addEventListener("resize", paint);

paint();

flowElements.forEach(setupFlowCanvas);
siteMaps.forEach(setupSiteMap);
recognitionFlows.forEach(setupRecognitionFlow);

function setupFlowCanvas(flow) {
  const svg = flow.querySelector(".redirect-flow__svg");
  const nodes = {
    blue: flow.querySelector('[data-node="blue"]'),
    green: flow.querySelector('[data-node="green"]'),
    cyc: flow.querySelector('[data-node="cyc"]'),
    redirection: flow.querySelector('[data-node="redirection"]'),
    target: flow.querySelector('[data-node="target"]'),
  };
  const paths = {
    blue: svg.querySelector('[data-connection="blue-redirection"]'),
    green: svg.querySelector('[data-connection="green-redirection"]'),
    cyc: svg.querySelector('[data-connection="cyc-redirection"]'),
    target: svg.querySelector('[data-connection="redirection-target"]'),
  };
  const pulses = {};

  let pointerX = 0;
  let pointerY = 0;
  let currentX = 0;
  let currentY = 0;
  let pulseFrame = 0;

  Object.entries(paths).forEach(([key, path], index) => {
    const pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pulse.setAttribute("r", key === "target" ? "5.5" : "4.5");
    pulse.setAttribute("class", `flow-pulse flow-pulse--${index + 1}`);
    svg.appendChild(pulse);
    pulses[key] = pulse;
  });

  const updatePaths = () => {
    const flowRect = flow.getBoundingClientRect();
    const svgRect = svg.getBoundingClientRect();
    const svgOffsetX = svgRect.left - flowRect.left;
    const svgOffsetY = svgRect.top - flowRect.top;

    svg.setAttribute("viewBox", `0 0 ${flowRect.width} ${flowRect.height}`);
    svg.setAttribute("width", `${flowRect.width}`);
    svg.setAttribute("height", `${flowRect.height}`);

    const pointFor = (node, anchor) => {
      const rect = node.getBoundingClientRect();
      const xBase = rect.left - flowRect.left - svgOffsetX;
      const yBase = rect.top - flowRect.top - svgOffsetY;
      const handleOffset = 6;

      if (anchor === "right") {
        return {
          x: xBase + rect.width + handleOffset,
          y: yBase + rect.height / 2,
        };
      }

      if (anchor === "left") {
        return {
          x: xBase - handleOffset,
          y: yBase + rect.height / 2,
        };
      }

      if (anchor === "bottom") {
        return { x: xBase + rect.width / 2, y: yBase + rect.height };
      }

      if (anchor === "top") {
        return { x: xBase + rect.width / 2, y: yBase };
      }

      return { x: xBase + rect.width / 2, y: yBase + rect.height / 2 };
    };

    const blueStart = pointFor(nodes.blue, "right");
    const greenStart = pointFor(nodes.green, "right");
    const cycStart = pointFor(nodes.cyc, "right");
    const redirectionLeft = pointFor(nodes.redirection, "left");
    const redirectionBottom = pointFor(nodes.redirection, "bottom");
    const redirectionRight = pointFor(nodes.redirection, "right");
    const targetTop = pointFor(nodes.target, "top");
    const targetLeft = pointFor(nodes.target, "left");

    paths.blue.setAttribute(
      "d",
      sideToHubPath(blueStart, redirectionLeft, 16, 0),
    );
    paths.green.setAttribute(
      "d",
      sideToHubPath(greenStart, redirectionLeft, 14, -24),
    );
    paths.cyc.setAttribute(
      "d",
      sideToHubPath(cycStart, redirectionLeft, 14, 24),
    );
    paths.target.setAttribute(
      "d",
      sideToHubPath(redirectionRight, targetLeft, 16, 0),
    );
  };

  const updatePulses = (time) => {
    pulseFrame = time * 0.00028;

    Object.entries(paths).forEach(([key, path], index) => {
      const pulse = pulses[key];
      const length = path.getTotalLength();
      const progress = (pulseFrame + index * 0.18) % 1;
      const point = path.getPointAtLength(length * progress);
      pulse.setAttribute("cx", `${point.x}`);
      pulse.setAttribute("cy", `${point.y}`);
    });
  };

  const render = (time) => {
    currentX += (pointerX - currentX) * 0.1;
    currentY += (pointerY - currentY) * 0.1;

    Object.entries(nodes).forEach(([key, node]) => {
      const depthMap = {
        blue: 14,
        green: 12,
        cyc: 14,
        redirection: 22,
        target: 18,
      };
      const swayMap = {
        blue: { x: 1, y: 0.8 },
        green: { x: 0.65, y: 1 },
        cyc: { x: -1, y: 0.7 },
        redirection: { x: 0.9, y: 1.1 },
        target: { x: 0.5, y: 1.2 },
      };
      const depth = depthMap[key];
      const sway = swayMap[key];
      const offsetX = currentX * depth * sway.x;
      const offsetY = currentY * depth * sway.y;
      node.style.setProperty("--mx", `${offsetX.toFixed(2)}px`);
      node.style.setProperty("--my", `${offsetY.toFixed(2)}px`);
    });

    updatePaths();
    updatePulses(time);
    window.requestAnimationFrame(render);
  };

  flow.addEventListener("mousemove", (event) => {
    const rect = flow.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    pointerX = x;
    pointerY = y;
  });

  flow.addEventListener("mouseleave", () => {
    pointerX = 0;
    pointerY = 0;
  });

  Object.values(nodes).forEach((node) => enableDragging(flow, node, updatePaths));

  window.addEventListener("resize", updatePaths);
  updatePaths();
  window.requestAnimationFrame(render);
}

function topToHubPath(start, end, spread) {
  const verticalGap = end.y - start.y;
  const controlOneX = start.x;
  const controlOneY = start.y + verticalGap * 0.28;
  const controlTwoX = end.x + spread;
  const controlTwoY = end.y - verticalGap * 0.34;
  return `M ${start.x} ${start.y} C ${controlOneX} ${controlOneY}, ${controlTwoX} ${controlTwoY}, ${end.x} ${end.y}`;
}

function sideToHubPath(start, end, spread, verticalOffset) {
  const horizontalGap = end.x - start.x;
  const controlOneX = start.x + horizontalGap * 0.28;
  const controlOneY = start.y + verticalOffset;
  const controlTwoX = end.x - spread;
  const controlTwoY = end.y + verticalOffset * 0.6;
  return `M ${start.x} ${start.y} C ${controlOneX} ${controlOneY}, ${controlTwoX} ${controlTwoY}, ${end.x} ${end.y}`;
}

function hubToTargetPath(start, end) {
  const midpoint = start.y + (end.y - start.y) * 0.45;
  return `M ${start.x} ${start.y} C ${start.x} ${midpoint}, ${end.x} ${midpoint}, ${end.x} ${end.y}`;
}

function enableDragging(flow, node, onUpdate) {
  let dragging = false;
  let offsetX = 0;
  let offsetY = 0;
  const padding = 14;
  const isCenteredNode = node.classList.contains("recognition-module");

  node.addEventListener("pointerdown", (event) => {
    dragging = true;
    node.setPointerCapture(event.pointerId);
    node.classList.add("is-dragging");

    const flowRect = flow.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    offsetX = event.clientX - nodeRect.left;
    offsetY = event.clientY - nodeRect.top;

    const move = (moveEvent) => {
      if (!dragging) {
        return;
      }

      if (isCenteredNode) {
        const nextCenterX = moveEvent.clientX - flowRect.left - offsetX + nodeRect.width / 2;
        const nextCenterY = moveEvent.clientY - flowRect.top - offsetY + nodeRect.height / 2;
        const minCenterX = padding + nodeRect.width / 2;
        const maxCenterX = flowRect.width - padding - nodeRect.width / 2;
        const minCenterY = padding + nodeRect.height / 2;
        const maxCenterY = flowRect.height - padding - nodeRect.height / 2;

        const clampedCenterX = Math.min(Math.max(minCenterX, nextCenterX), maxCenterX);
        const clampedCenterY = Math.min(Math.max(minCenterY, nextCenterY), maxCenterY);

        node.style.setProperty("--x", `${(clampedCenterX / flowRect.width) * 100}%`);
        node.style.setProperty("--y", `${(clampedCenterY / flowRect.height) * 100}%`);
      } else {
        const nextX = moveEvent.clientX - flowRect.left - offsetX;
        const nextY = moveEvent.clientY - flowRect.top - offsetY;
        const maxX = flowRect.width - nodeRect.width - padding;
        const maxY = flowRect.height - nodeRect.height - padding;

        const clampedX = Math.min(Math.max(padding, nextX), maxX);
        const clampedY = Math.min(Math.max(padding, nextY), maxY);

        node.style.setProperty("--x", `${(clampedX / flowRect.width) * 100}%`);
        node.style.setProperty("--y", `${(clampedY / flowRect.height) * 100}%`);
      }
      onUpdate();
    };

    const stop = () => {
      dragging = false;
      node.classList.remove("is-dragging");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
  });
}

function setupSiteMap(siteMap) {
  const svg = siteMap.querySelector(".site-map__svg");
  const nodeRefs = {
    home: siteMap.querySelector('[data-site-node="home"]'),
    empresa: siteMap.querySelector('[data-site-node="empresa"]'),
    divisiones: siteMap.querySelector('[data-site-node="divisiones"]'),
    blueDrop: siteMap.querySelector('[data-site-node="blueDrop"]'),
    greenDrone: siteMap.querySelector('[data-site-node="greenDrone"]'),
    proyectos: siteMap.querySelector('[data-site-node="proyectos"]'),
    articulos: siteMap.querySelector('[data-site-node="articulos"]'),
    ventas: siteMap.querySelector('[data-site-node="ventas"]'),
    contacto: siteMap.querySelector('[data-site-node="contacto"]'),
  };
  const paths = {
    trunk: svg.querySelector('[data-site-path="trunk"]'),
    home: svg.querySelector('[data-site-path="home"]'),
    empresa: svg.querySelector('[data-site-path="empresa"]'),
    empresaDivisiones: svg.querySelector('[data-site-path="empresa-divisiones"]'),
    divisionesBlue: svg.querySelector('[data-site-path="divisiones-blue"]'),
    divisionesGreen: svg.querySelector('[data-site-path="divisiones-green"]'),
    proyectos: svg.querySelector('[data-site-path="proyectos"]'),
    articulos: svg.querySelector('[data-site-path="articulos"]'),
    ventas: svg.querySelector('[data-site-path="ventas"]'),
    contacto: svg.querySelector('[data-site-path="contacto"]'),
  };

  const pointAtDot = (node) => {
    const mapRect = siteMap.getBoundingClientRect();
    const svgRect = svg.getBoundingClientRect();
    const dot = node.querySelector(".site-map__dot");
    const rect = dot.getBoundingClientRect();
    const xBase = rect.left - mapRect.left - (svgRect.left - mapRect.left);
    const yBase = rect.top - mapRect.top - (svgRect.top - mapRect.top);

    return {
      x: xBase + rect.width / 2,
      y: yBase + rect.height / 2,
    };
  };

  const updateSiteMap = () => {
    const rect = siteMap.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
    svg.setAttribute("width", `${rect.width}`);
    svg.setAttribute("height", `${rect.height}`);

    const home = pointAtDot(nodeRefs.home);
    const empresa = pointAtDot(nodeRefs.empresa);
    const divisiones = pointAtDot(nodeRefs.divisiones);
    const blue = pointAtDot(nodeRefs.blueDrop);
    const green = pointAtDot(nodeRefs.greenDrone);
    const proyectos = pointAtDot(nodeRefs.proyectos);
    const articulos = pointAtDot(nodeRefs.articulos);
    const ventas = pointAtDot(nodeRefs.ventas);
    const contacto = pointAtDot(nodeRefs.contacto);

    const trunkX = 22;
    paths.trunk.setAttribute("d", `M ${trunkX} ${home.y} L ${trunkX} ${contacto.y}`);
    paths.home.setAttribute("d", `M ${trunkX} ${home.y} L ${home.x} ${home.y}`);
    paths.empresa.setAttribute("d", `M ${trunkX} ${empresa.y} L ${empresa.x} ${empresa.y}`);
    paths.empresaDivisiones.setAttribute(
      "d",
      `M ${empresa.x} ${empresa.y} L ${empresa.x} ${divisiones.y} L ${divisiones.x} ${divisiones.y}`,
    );
    paths.divisionesBlue.setAttribute(
      "d",
      `M ${divisiones.x} ${divisiones.y} L ${divisiones.x} ${blue.y} L ${blue.x} ${blue.y}`,
    );
    paths.divisionesGreen.setAttribute(
      "d",
      `M ${divisiones.x} ${divisiones.y} L ${divisiones.x} ${green.y} L ${green.x} ${green.y}`,
    );
    paths.proyectos.setAttribute("d", `M ${trunkX} ${proyectos.y} L ${proyectos.x} ${proyectos.y}`);
    paths.articulos.setAttribute("d", `M ${trunkX} ${articulos.y} L ${articulos.x} ${articulos.y}`);
    paths.ventas.setAttribute("d", `M ${trunkX} ${ventas.y} L ${ventas.x} ${ventas.y}`);
    paths.contacto.setAttribute("d", `M ${trunkX} ${contacto.y} L ${contacto.x} ${contacto.y}`);
  };

  updateSiteMap();
  window.addEventListener("resize", updateSiteMap);
}

function setupRecognitionFlow(flow) {
  const svg = flow.querySelector(".recognition-flow__svg");
  const layoutNodes = [...flow.querySelectorAll(".recognition-module, .recognition-bullets")];
  const storageKey = "cyc-recognition-flow-layout";
  let layoutMode = window.matchMedia("(max-width: 720px)").matches ? "mobile" : "desktop";
  const nodeRefs = {
    estrategia: flow.querySelector('[data-recognition-node="estrategia"]'),
    identidad: flow.querySelector('[data-recognition-node="identidad"]'),
    comunicacion: flow.querySelector('[data-recognition-node="comunicacion"]'),
    mision: flow.querySelector('[data-recognition-node="mision"]'),
    voz: flow.querySelector('[data-recognition-node="voz"]'),
    cyc: flow.querySelector('[data-recognition-node="cyc"]'),
    visibilidad: flow.querySelector('[data-recognition-node="visibilidad"]'),
    sitioweb: flow.querySelector('[data-recognition-node="sitioweb"]'),
    redes: flow.querySelector('[data-recognition-node="redes"]'),
    marketing: flow.querySelector('[data-recognition-node="marketing"]'),
    blog: flow.querySelector('[data-recognition-node="blog"]'),
    publicidad: flow.querySelector('[data-recognition-node="publicidad"]'),
    articulos: flow.querySelector('[data-recognition-node="articulos"]'),
    bluedrop: flow.querySelector('[data-recognition-node="bluedrop"]'),
    greendrone: flow.querySelector('[data-recognition-node="greendrone"]'),
    contenido: flow.querySelector('[data-recognition-node="contenido"]'),
    engagement: flow.querySelector('[data-recognition-node="engagement"]'),
    digital: flow.querySelector('[data-recognition-node="digital"]'),
    impresa: flow.querySelector('[data-recognition-node="impresa"]'),
  };
  const bulletRefs = {
    servicios: flow.querySelector('[data-recognition-bullet="servicios"]'),
    bycyc: flow.querySelector('[data-recognition-bullet="bycyc"]'),
    enlaces: flow.querySelector('[data-recognition-bullet="enlaces"]'),
    estrategicos: flow.querySelector('[data-recognition-bullet="estrategicos"]'),
    resenas: flow.querySelector('[data-recognition-bullet="resenas"]'),
    tienda: flow.querySelector('[data-recognition-bullet="tienda"]'),
  };
  const paths = Object.fromEntries(
    [...flow.querySelectorAll("[data-recognition-path]")].map((path) => [path.dataset.recognitionPath, path]),
  );
  const pulses = {};
  const draggableModules = [...flow.querySelectorAll(".recognition-module")];
  const defaultLayouts = {
    desktop: {
      estrategia: { x: "53%", y: "10%" },
      identidad: { x: "30%", y: "23%" },
      comunicacion: { x: "53%", y: "22%" },
      mision: { x: "79%", y: "34%" },
      voz: { x: "67%", y: "34%" },
      cyc: { x: "30%", y: "40%" },
      marketing: { x: "53%", y: "34%" },
      visibilidad: { x: "3%", y: "41%" },
      sitioweb: { x: "30%", y: "56%" },
      redes: { x: "44%", y: "54%" },
      publicidad: { x: "56%", y: "54%" },
      blog: { x: "69%", y: "54%" },
      bluedrop: { x: "25%", y: "71%" },
      greendrone: { x: "35%", y: "71%" },
      contenido: { x: "38%", y: "92%" },
      engagement: { x: "48%", y: "89%" },
      digital: { x: "55%", y: "77%" },
      impresa: { x: "63%", y: "77%" },
      articulos: { x: "70%", y: "75%" },
      servicios: { x: "10%", y: "49%" },
      bycyc: { x: "10%", y: "55.5%" },
      enlaces: { x: "10%", y: "62%" },
      estrategicos: { x: "10%", y: "69.5%" },
      resenas: { x: "10%", y: "78%" },
      tienda: { x: "10%", y: "86.5%" },
    },
    mobile: {
      estrategia: { x: "50%", y: "7%" },
      cyc: { x: "50%", y: "16%" },
      identidad: { x: "26%", y: "28%" },
      comunicacion: { x: "50%", y: "28%" },
      marketing: { x: "74%", y: "28%" },
      visibilidad: { x: "22%", y: "42%" },
      sitioweb: { x: "50%", y: "42%" },
      voz: { x: "78%", y: "42%" },
      bluedrop: { x: "40%", y: "55%" },
      greendrone: { x: "60%", y: "55%" },
      redes: { x: "50%", y: "67%" },
      contenido: { x: "38%", y: "80%" },
      engagement: { x: "62%", y: "80%" },
      publicidad: { x: "36%", y: "91%" },
      blog: { x: "66%", y: "91%" },
      digital: { x: "28%", y: "100%" },
      impresa: { x: "44%", y: "100%" },
      articulos: { x: "66%", y: "100%" },
      mision: { x: "82%", y: "56%" },
      servicios: { x: "12%", y: "50%" },
      bycyc: { x: "12%", y: "56%" },
      enlaces: { x: "12%", y: "62%" },
      estrategicos: { x: "12%", y: "69.5%" },
      resenas: { x: "12%", y: "77%" },
      tienda: { x: "12%", y: "85%" },
    },
  };

  const getNodeKey = (node) => node.dataset.recognitionNode || node.dataset.recognitionBullet || null;
  const getStorageKey = () => `${storageKey}-${layoutMode}`;
  const applyLayout = (positions) => {
    draggableModules.forEach((node) => {
      const key = getNodeKey(node);
      const saved = key ? positions[key] : null;
      if (!saved) {
        return;
      }

      if (saved.x) {
        node.style.setProperty("--x", saved.x);
      }

      if (saved.y) {
        node.style.setProperty("--y", saved.y);
      }
    });
  };

  const saveLayout = () => {
    const positions = Object.fromEntries(
      draggableModules
        .map((node) => {
          const key = getNodeKey(node);
          if (!key) {
            return null;
          }

          return [
            key,
            {
              x: node.style.getPropertyValue("--x"),
              y: node.style.getPropertyValue("--y"),
            },
          ];
        })
        .filter(Boolean),
    );

    window.localStorage.setItem(getStorageKey(), JSON.stringify(positions));
  };

  const restoreLayout = () => {
    const raw = window.localStorage.getItem(getStorageKey());
    if (!raw) {
      return false;
    }

    try {
      const positions = JSON.parse(raw);
      applyLayout(positions);
      return true;
    } catch {
      window.localStorage.removeItem(getStorageKey());
      return false;
    }
  };

  const centerLayout = () => {
    const flowRect = flow.getBoundingClientRect();
    if (!flowRect.width || !flowRect.height || !draggableModules.length) {
      return;
    }

    const bounds = draggableModules.reduce(
      (acc, node) => {
        const rect = node.getBoundingClientRect();
        const left = rect.left - flowRect.left;
        const top = rect.top - flowRect.top;
        const right = left + rect.width;
        const bottom = top + rect.height;

        return {
          minX: Math.min(acc.minX, left),
          minY: Math.min(acc.minY, top),
          maxX: Math.max(acc.maxX, right),
          maxY: Math.max(acc.maxY, bottom),
        };
      },
      { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity },
    );

    const shiftX = flowRect.width / 2 - (bounds.minX + bounds.maxX) / 2;
    const shiftY = flowRect.height / 2 - (bounds.minY + bounds.maxY) / 2;

    draggableModules.forEach((node) => {
      const x = Number.parseFloat(node.style.getPropertyValue("--x"));
      const y = Number.parseFloat(node.style.getPropertyValue("--y"));

      if (Number.isNaN(x) || Number.isNaN(y)) {
        return;
      }

      const nextX = ((x / 100) * flowRect.width + shiftX) / flowRect.width;
      const nextY = ((y / 100) * flowRect.height + shiftY) / flowRect.height;

      node.style.setProperty("--x", `${Math.min(Math.max(nextX * 100, 3), 97)}%`);
      node.style.setProperty("--y", `${Math.min(Math.max(nextY * 100, 6), 94)}%`);
    });
  };

  Object.keys(paths).forEach((key, index) => {
    const pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pulse.setAttribute("r", index < 3 ? "4.5" : "3.8");
    pulse.setAttribute("class", "recognition-pulse");
    svg.appendChild(pulse);
    pulses[key] = pulse;
  });

  const pointFor = (node, anchor) => {
    const flowRect = flow.getBoundingClientRect();
    const svgRect = svg.getBoundingClientRect();
    const rect = node.getBoundingClientRect();
    const xBase = rect.left - flowRect.left - (svgRect.left - flowRect.left);
    const yBase = rect.top - flowRect.top - (svgRect.top - flowRect.top);

    const dotOffset = 6;

    if (anchor === "left") return { x: xBase - dotOffset, y: yBase + rect.height / 2 };
    if (anchor === "right") return { x: xBase + rect.width + dotOffset, y: yBase + rect.height / 2 };
    if (anchor === "top") return { x: xBase + rect.width / 2, y: yBase };
    if (anchor === "bottom") return { x: xBase + rect.width / 2, y: yBase + rect.height };
    return { x: xBase + rect.width / 2, y: yBase + rect.height / 2 };
  };

  const elbow = (start, end, options = {}) => {
    const { midX = null, midY = null } = options;

    if (midX !== null) {
      return `M ${start.x} ${start.y} L ${midX} ${start.y} L ${midX} ${end.y} L ${end.x} ${end.y}`;
    }

    if (midY !== null) {
      return `M ${start.x} ${start.y} L ${start.x} ${midY} L ${end.x} ${midY} L ${end.x} ${end.y}`;
    }

    const bend = start.x < end.x ? start.x + (end.x - start.x) * 0.55 : start.x - (start.x - end.x) * 0.55;
    return `M ${start.x} ${start.y} C ${bend} ${start.y}, ${bend} ${end.y}, ${end.x} ${end.y}`;
  };

  const direct = (start, end) => `M ${start.x} ${start.y} L ${end.x} ${end.y}`;

  const update = () => {
    const rect = flow.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);
    svg.setAttribute("width", `${rect.width}`);
    svg.setAttribute("height", `${rect.height}`);

    const estrategia = pointFor(nodeRefs.estrategia, "bottom");
    const identidadBottom = pointFor(nodeRefs.identidad, "bottom");
    const identidadLeft = pointFor(nodeRefs.identidad, "left");
    const identidadRight = pointFor(nodeRefs.identidad, "right");
    const comunicacionLeft = pointFor(nodeRefs.comunicacion, "left");
    const comunicacionRight = pointFor(nodeRefs.comunicacion, "right");
    const comunicacionTop = pointFor(nodeRefs.comunicacion, "top");
    const misionTop = pointFor(nodeRefs.mision, "top");
    const vozTop = pointFor(nodeRefs.voz, "top");
    const vozRight = pointFor(nodeRefs.voz, "right");
    const vozLeft = pointFor(nodeRefs.voz, "left");
    const misionLeft = pointFor(nodeRefs.mision, "left");
    const cycTop = pointFor(nodeRefs.cyc, "top");
    const cycLeft = pointFor(nodeRefs.cyc, "left");
    const cycRight = pointFor(nodeRefs.cyc, "right");
    const cycBottom = pointFor(nodeRefs.cyc, "bottom");
    const sitiowebTop = pointFor(nodeRefs.sitioweb, "top");
    const sitiowebBottom = pointFor(nodeRefs.sitioweb, "bottom");
    const sitiowebRight = pointFor(nodeRefs.sitioweb, "right");
    const blueTop = pointFor(nodeRefs.bluedrop, "top");
    const greenTop = pointFor(nodeRefs.greendrone, "top");
    const redesTop = pointFor(nodeRefs.redes, "top");
    const redesBottom = pointFor(nodeRefs.redes, "bottom");
    const redesLeft = pointFor(nodeRefs.redes, "left");
    const marketingLeft = pointFor(nodeRefs.marketing, "left");
    const marketingRight = pointFor(nodeRefs.marketing, "right");
    const marketingBottom = pointFor(nodeRefs.marketing, "bottom");
    const blogTop = pointFor(nodeRefs.blog, "top");
    const blogBottom = pointFor(nodeRefs.blog, "bottom");
    const blogLeft = pointFor(nodeRefs.blog, "left");
    const publicidadTop = pointFor(nodeRefs.publicidad, "top");
    const publicidadBottom = pointFor(nodeRefs.publicidad, "bottom");
    const articulosTop = pointFor(nodeRefs.articulos, "top");
    const articulosRight = pointFor(nodeRefs.articulos, "right");
    const articulosLeft = pointFor(nodeRefs.articulos, "left");
    const visibilidadRight = pointFor(nodeRefs.visibilidad, "right");
    const visibilidadBottom = pointFor(nodeRefs.visibilidad, "bottom");
    const contenidoTop = pointFor(nodeRefs.contenido, "top");
    const contenidoLeft = pointFor(nodeRefs.contenido, "left");
    const engagementTop = pointFor(nodeRefs.engagement, "top");
    const engagementLeft = pointFor(nodeRefs.engagement, "left");
    const digitalTop = pointFor(nodeRefs.digital, "top");
    const impresaTop = pointFor(nodeRefs.impresa, "top");
    const pointForBullet = (bullet) => pointFor(bullet, "left");
    const serviciosPoint = pointForBullet(bulletRefs.servicios);
    const tiendaPoint = pointForBullet(bulletRefs.tienda);
    const trunkX = visibilidadBottom.x;

    paths["estrategia-comunicacion"].setAttribute("d", direct(estrategia, comunicacionTop));
    paths["comunicacion-identidad"].setAttribute("d", direct(comunicacionLeft, identidadRight));
    paths["comunicacion-mision"].setAttribute(
      "d",
      `M ${comunicacionRight.x} ${comunicacionRight.y} L ${misionTop.x} ${comunicacionRight.y} L ${misionTop.x} ${misionTop.y}`,
    );
    paths["identidad-cyc"].setAttribute("d", direct(identidadBottom, cycTop));
    paths["cyc-visibilidad"].setAttribute("d", direct(cycLeft, visibilidadRight));
    paths["cyc-sitioweb"].setAttribute("d", direct(cycBottom, sitiowebTop));
    paths["sitioweb-bluedrop"].setAttribute(
      "d",
      `M ${sitiowebBottom.x} ${sitiowebBottom.y} L ${sitiowebBottom.x} ${blueTop.y - 8} L ${blueTop.x} ${blueTop.y - 8} L ${blueTop.x} ${blueTop.y}`,
    );
    paths["sitioweb-greendrone"].setAttribute(
      "d",
      `M ${sitiowebBottom.x} ${sitiowebBottom.y} L ${sitiowebBottom.x} ${greenTop.y - 8} L ${greenTop.x} ${greenTop.y - 8} L ${greenTop.x} ${greenTop.y}`,
    );
    paths["marketing-cyc"].setAttribute(
      "d",
      `M ${marketingLeft.x} ${marketingLeft.y} L ${marketingLeft.x - 22} ${marketingLeft.y} L ${marketingLeft.x - 22} ${cycRight.y} L ${cycRight.x} ${cycRight.y}`,
    );
    paths["marketing-redes"].setAttribute("d", direct(marketingBottom, redesTop));
    paths["redes-contenido"].setAttribute("d", direct(redesBottom, contenidoTop));
    paths["redes-engagement"].setAttribute("d", direct(redesBottom, engagementTop));
    paths["voz-marketing"].setAttribute("d", direct(vozLeft, marketingRight));
    paths["mision-voz"].setAttribute("d", direct(misionLeft, vozRight));
    paths["marketing-publicidad"].setAttribute("d", direct(marketingBottom, publicidadTop));
    paths["marketing-blog"].setAttribute("d", direct(marketingBottom, blogTop));
    paths["publicidad-digital"].setAttribute("d", direct(publicidadBottom, digitalTop));
    paths["publicidad-impresa"].setAttribute("d", direct(publicidadBottom, impresaTop));
    paths["blog-articulos"].setAttribute("d", direct(blogBottom, articulosTop));
    const misionBottom = pointFor(nodeRefs.mision, "bottom");
    paths["mision-articulos"].setAttribute(
      "d",
      `M ${misionBottom.x} ${misionBottom.y} L ${misionBottom.x} ${articulosLeft.y} L ${articulosLeft.x} ${articulosLeft.y}`,
    );
    paths["visibilidad-bullets"].setAttribute(
      "d",
      `M ${visibilidadBottom.x} ${visibilidadBottom.y} L ${trunkX} ${tiendaPoint.y + 26}`,
    );
    paths["visibilidad-servicios"].setAttribute(
      "d",
      `M ${trunkX} ${pointForBullet(bulletRefs.servicios).y} L ${pointForBullet(bulletRefs.servicios).x} ${pointForBullet(bulletRefs.servicios).y}`,
    );
    paths["visibilidad-bycyc"].setAttribute(
      "d",
      `M ${trunkX} ${pointForBullet(bulletRefs.bycyc).y} L ${pointForBullet(bulletRefs.bycyc).x} ${pointForBullet(bulletRefs.bycyc).y}`,
    );
    paths["visibilidad-enlaces"].setAttribute(
      "d",
      `M ${trunkX} ${pointForBullet(bulletRefs.enlaces).y} L ${pointForBullet(bulletRefs.enlaces).x} ${pointForBullet(bulletRefs.enlaces).y}`,
    );
    paths["visibilidad-estrategicos"].setAttribute(
      "d",
      `M ${trunkX} ${pointForBullet(bulletRefs.estrategicos).y} L ${pointForBullet(bulletRefs.estrategicos).x} ${pointForBullet(bulletRefs.estrategicos).y}`,
    );
    paths["visibilidad-resenas"].setAttribute(
      "d",
      `M ${trunkX} ${pointForBullet(bulletRefs.resenas).y} L ${pointForBullet(bulletRefs.resenas).x} ${pointForBullet(bulletRefs.resenas).y}`,
    );
    paths["visibilidad-tienda"].setAttribute(
      "d",
      `M ${trunkX} ${pointForBullet(bulletRefs.tienda).y} L ${pointForBullet(bulletRefs.tienda).x} ${pointForBullet(bulletRefs.tienda).y}`,
    );
    paths["bullets-contenido"].setAttribute(
      "d",
      `M ${trunkX} ${tiendaPoint.y + 26} L ${trunkX} ${contenidoLeft.y} L ${contenidoLeft.x} ${contenidoLeft.y}`,
    );
  };

  const animatePulses = (time) => {
    Object.entries(paths).forEach(([key, path], index) => {
      const pulse = pulses[key];
      const length = path.getTotalLength();
      const progress = ((time * 0.00022) + index * 0.09) % 1;
      const point = path.getPointAtLength(length * progress);
      pulse.setAttribute("cx", `${point.x}`);
      pulse.setAttribute("cy", `${point.y}`);
    });
    window.requestAnimationFrame(animatePulses);
  };

  const applyResponsiveLayout = (forceDefault = false) => {
    layoutMode = window.matchMedia("(max-width: 720px)").matches ? "mobile" : "desktop";
    const restored = !forceDefault && restoreLayout();

    if (!restored) {
      applyLayout(defaultLayouts[layoutMode]);
      saveLayout();
    }

    update();
  };

  applyResponsiveLayout();
  centerLayout();
  saveLayout();
  update();
  draggableModules.forEach((node) => enableCenteredDragging(flow, node, update, saveLayout));
  window.addEventListener("resize", () => {
    const nextMode = window.matchMedia("(max-width: 720px)").matches ? "mobile" : "desktop";
    if (nextMode !== layoutMode) {
      applyResponsiveLayout();
      return;
    }

    update();
  });
  if (typeof ResizeObserver !== "undefined") {
    const resizeObserver = new ResizeObserver(() => update());
    resizeObserver.observe(flow);
  }
  window.requestAnimationFrame(animatePulses);
}

function enableCenteredDragging(container, node, onUpdate, onPersist) {
  const padding = 14;

  node.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    node.setPointerCapture(event.pointerId);
    node.classList.add("is-dragging");

    const containerRect = container.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();

    const offsetX = event.clientX - nodeRect.left;
    const offsetY = event.clientY - nodeRect.top;

    const move = (moveEvent) => {
      const nextLeft = moveEvent.clientX - containerRect.left - offsetX;
      const nextTop = moveEvent.clientY - containerRect.top - offsetY;

      const minLeft = padding;
      const maxLeft = containerRect.width - nodeRect.width - padding;
      const minTop = padding;
      const maxTop = containerRect.height - nodeRect.height - padding;

      const clampedLeft = Math.min(Math.max(minLeft, nextLeft), maxLeft);
      const clampedTop = Math.min(Math.max(minTop, nextTop), maxTop);

      const centerX = clampedLeft + nodeRect.width / 2;
      const centerY = clampedTop + nodeRect.height / 2;

      node.style.setProperty("--x", `${(centerX / containerRect.width) * 100}%`);
      node.style.setProperty("--y", `${(centerY / containerRect.height) * 100}%`);
      onUpdate();
    };

    const stop = () => {
      node.classList.remove("is-dragging");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", stop);
      onPersist?.();
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", stop);
  });
}
