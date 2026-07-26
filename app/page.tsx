"use client";

import { useEffect, useState } from "react";

const benefits = [
  {
    number: "01",
    mockup: "book",
    title: "E-book completo",
    description: (
      <>
        <strong>30 reflexões devocionais</strong> baseadas na{" "}
        <strong>Palavra de Deus</strong> para orientar os momentos de leitura,
        conversa e oração do casal.
      </>
    ),
  },
  {
    number: "02",
    mockup: "audio",
    title: "30 áudios narrados",
    description:
      "Uma forma prática de acompanhar cada devocional no carro, em casa ou durante a caminhada, ajudando vocês a manterem a constância mesmo nos dias mais corridos.",
  },
  {
    number: "03",
    mockup: "challenge",
    title: "Desafio diário para o casal",
    description: (
      <>
        Atividades simples para transformar a reflexão em atitude e criar{" "}
        <strong>pequenas experiências de reconexão</strong> ao longo dos{" "}
        <strong>30 dias</strong>.
      </>
    ),
  },
  {
    number: "04",
    mockup: "film",
    title: "Sugestão de filme semanal",
    description:
      "Uma indicação especial para vocês assistirem juntos e usarem a história como ponto de partida para novas conversas.",
  },
  {
    number: "05",
    mockup: "music",
    title: "Música da semana",
    description: (
      <>
        Uma canção escolhida para acompanhar a jornada,{" "}
        <strong>fortalecer a atmosfera de fé</strong> e criar um momento de
        adoração a dois.
      </>
    ),
  },
  {
    number: "06",
    mockup: "bonus",
    title: "Bônus surpresa",
    description:
      "Quem adquirir dentro das primeiras 48 horas da condição de lançamento recebe um conteúdo complementar para enriquecer a experiência do casal.",
  },
];

const transformationItems = [
  "Mais presença e conexão emocional nos momentos a dois.",
  "Um espaço diário para colocar Deus no centro do casamento.",
  "Conversas mais sinceras, profundas e significativas.",
  "Momentos especiais criados com intenção, mesmo dentro da rotina.",
  "Mais leveza, parceria e propósito na caminhada do casal.",
  "Um ritual simples de cuidado que pode continuar depois dos 30 dias.",
];

const marqueeItems = [
  "Devocional de 30 dias",
  "Fé",
  "Conexão",
  "Presença",
  "Propósito",
  "Casal",
];

const testimonials = [
  {
    quote:
      "“Nunca imaginei que 10 minutinhos por dia poderiam mudar tanto nossa relação. Obrigada por esse presente!”",
    author: "— Ana Paula, casada há 8 anos",
  },
  {
    quote:
      "“Meu marido resistia no início, mas depois do terceiro dia ele mesmo me chamava para fazer o devocional. Incrível!”",
    author: "— Fernanda, casada há 5 anos",
  },
  {
    quote:
      "“A sugestão dos filmes e músicas foi o que mais nos surpreendeu. Criamos momentos que não tínhamos há anos.”",
    author: "— Juliana, casada há 12 anos",
  },
];

const faqs = [
  {
    question: "Como vou receber o produto?",
    answer: (
      <>
        Após a confirmação da compra, você receberá{" "}
        <strong>acesso imediato</strong> aos conteúdos digitais do “Dois em Um”,
        incluindo o e-book, os áudios e os materiais complementares.
      </>
    ),
  },
  {
    question: "Meu marido precisa participar?",
    answer:
      "A experiência foi criada para ser vivida a dois, mas você pode dar o primeiro passo e convidá-lo a participar no ritmo de vocês. Muitos casais precisam apenas de uma forma simples para começar.",
  },
  {
    question: "Quanto tempo por dia preciso?",
    answer:
      "Os conteúdos foram pensados para caber na rotina. A proposta é separar um momento breve e intencional para a leitura ou o áudio, a conversa e a atividade do dia.",
  },
  {
    question: "Funciona no celular?",
    answer:
      "Sim. Por ser um produto digital, o material pode ser acompanhado pelo celular, permitindo que vocês acessem os conteúdos onde estiverem.",
  },
];

const identificationItems = [
  {
    image: "/assets/identification-routine.webp",
    alt: "Casal em um momento silencioso da rotina em casa",
    text: "A rotina tomou conta do casamento e as conversas ficaram cada vez mais rápidas e superficiais?",
  },
  {
    image: "/assets/identification-distance.webp",
    alt: "Casal sentado no sofá refletindo sobre a conexão no relacionamento",
    text: "Vocês estão juntos, mas sentem que cada um vive no próprio mundo?",
  },
  {
    image: "/assets/identification-faith.webp",
    alt: "Casal compartilhando um momento de fé em casa",
    text: "A fé faz parte da vida de vocês, mas falta um momento para colocar Deus no centro do relacionamento?",
  },
  {
    image: "/assets/identification-reconnection.webp",
    alt: "Casal conversando com presença em um momento de reconexão",
    text: "Existe vontade de se reconectar, mas vocês não sabem como começar ou manter a constância?",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function DownArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v15M6 13l6 6 6-6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6.5 12.5 3.3 3.3 7.7-8" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.04 3C8.85 3 3 8.77 3 15.86c0 2.27.6 4.49 1.75 6.43L3 28.61l6.53-1.7a13.2 13.2 0 0 0 6.5 1.69h.01C23.23 28.6 29 22.83 29 15.74 29 8.65 23.23 3 16.04 3Zm7.65 18.17c-.32.9-1.84 1.7-2.58 1.81-.66.1-1.5.15-2.42-.15-.56-.18-1.29-.42-2.22-.82-3.9-1.67-6.45-5.55-6.64-5.8-.2-.26-1.59-2.09-1.59-3.99 0-1.9 1.01-2.84 1.37-3.23.35-.39.78-.49 1.04-.49h.75c.24.01.56-.09.88.66.32.76 1.11 2.68 1.2 2.87.1.2.17.43.04.69-.13.26-.2.42-.39.65-.2.23-.41.51-.59.68-.2.2-.4.41-.17.8.23.39 1.02 1.66 2.19 2.69 1.5 1.32 2.77 1.73 3.16 1.93.39.19.62.16.85-.1.23-.26.98-1.13 1.24-1.52.26-.39.52-.32.88-.19.36.13 2.28 1.06 2.67 1.25.39.19.65.29.75.45.1.16.1.94-.22 1.84Z"
      />
    </svg>
  );
}

function IdentificationIcon({ index }: { index: number }) {
  const icons = [
    <>
      <path d="M5.5 7.5h9a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H10l-3.5 3v-3h-1a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3Z" />
      <path d="M8 10.8h.01M11 10.8h.01M14 10.8h.01" />
    </>,
    <>
      <path d="M8.5 6.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" />
      <path d="M15.5 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Z" />
    </>,
    <>
      <path d="M4 6.5c3.5 0 6 .8 8 2.4v9.3c-2-1.6-4.5-2.4-8-2.4V6.5Z" />
      <path d="M20 6.5c-3.5 0-6 .8-8 2.4v9.3c2-1.6 4.5-2.4 8-2.4V6.5ZM12 4v2" />
    </>,
    <>
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" />
    </>,
  ];

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[index]}
    </svg>
  );
}

const benefitMockupAssets: Record<string, string> = {
  book: "/assets/benefit-ebook.png",
  audio: "/assets/benefit-audios.png",
  challenge: "/assets/benefit-desafio.png",
  film: "/assets/benefit-filme.png",
  music: "/assets/benefit-musica.png",
  bonus: "/assets/benefit-bonus.png",
};

function BenefitMockup({ type }: { type: string }) {
  return <img className="benefit-mockup-image" src={benefitMockupAssets[type]} alt="" />;
}

function BenefitIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    book: <><path d="M5 5.5c2.8 0 5 .6 7 2v11c-2-1.4-4.2-2-7-2v-11Z" /><path d="M19 5.5c-2.8 0-5 .6-7 2v11c2-1.4 4.2-2 7-2v-11Z" /><path d="M12 7.5v11" /></>,
    audio: <><path d="M5 14v-2a7 7 0 0 1 14 0v2" /><path d="M5 13h3v5H6.5A1.5 1.5 0 0 1 5 16.5V13ZM19 13h-3v5h1.5a1.5 1.5 0 0 0 1.5-1.5V13Z" /><path d="M10 19.5h4" /></>,
    challenge: <><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M8 9h.01M11 9h5M8 14h.01M11 14h5" /><path d="m7.4 9 1 1 1.6-2M7.4 14l1 1 1.6-2" /></>,
    film: <><path d="M5 8.5h14v10H5zM5 8.5l2.5-4h3l-2.5 4M11.5 8.5l2.5-4h3l-2.5 4" /><path d="m11 12 3 1.5-3 1.5v-3Z" /></>,
    music: <><path d="M9 18.5a2.5 2.5 0 1 1-2.5-2.5A2.5 2.5 0 0 1 9 18.5Zm9-3a2.5 2.5 0 1 1-2.5-2.5 2.5 2.5 0 0 1 2.5 2.5Z" /><path d="M9 18.5V7l9-2.5v11" /><path d="M9 10.5 18 8" /></>,
    bonus: <><path d="M5 10h14v10H5zM4 7h16v3H4zM12 7v13" /><path d="M12 7H9.5a2 2 0 1 1 2-2v2ZM12 7h2.5a2 2 0 1 0-2-2v2Z" /></>,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{icons[type]}</svg>;
}

function LogoMark() {
  return (
    <div className="brand" aria-label="Dois em Um">
      <img src="/assets/logo-dois-em-um-horizontal.svg" alt="Dois em Um" />
    </div>
  );
}

function BuyButton({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "light";
}) {
  return (
    <a className={`button button-${variant}`} href="#oferta">
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);


  return (
    <main>
      <div className="announcement">
        <span>Condição especial de lançamento do devocional Dois em Um</span>
        <span className="announcement-detail">Acesso imediato</span>
      </div>

      <header className="header">
        <div className="container header-inner">
          <LogoMark />
          <a className="header-link" href="#oferta">
            Conhecer o devocional <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              Devocional digital de 30 dias para casais
            </p>
            <h1>
              Vocês ainda se amam, mas sentem que a conexão{" "}
              <em className="keep-together keep-hero">já não é a mesma?</em>
            </h1>
            <p>
              Em{" "}
              <strong>
                <span className="keep-together">30 dias</span>
              </strong>
              , vocês podem criar um novo momento na rotina para conversar com{" "}
              <strong>mais presença, fortalecer a fé</strong> e cuidar do
              casamento de forma intencional.
            </p>
            <p>
              “Dois em Um” é um devocional completo para casais evangélicos que
              desejam ir além da convivência e construir, dia após dia, um
              relacionamento com mais proximidade, propósito e{" "}
              <strong>Deus no centro</strong>.
            </p>
            <BuyButton>Quero começar os 30 dias</BuyButton>
            <div className="trust-line">
              <span>Compra segura</span>
              <span>Acesso imediato</span>
              <span>7 dias de garantia</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="arch-photo">
              <img
                src="/assets/hero-couple-reading.png"
                alt="Casal compartilhando um momento de fé e conexão"
              />
            </div>
            <div className="hero-mockup">
              <img
                src="/assets/hero-mockup-dois-em-um.png"
                alt="Devocional Dois em Um em livro e celular"
              />
            </div>
            <div className="hero-note">
              <b>30</b>
              <span>
                dias de fé,
                <br />
                conversa e conexão
              </span>
            </div>
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>

      <a className="hero-next" href="#identificacao" aria-label="Ir para a próxima seção">
        <DownArrowIcon className="hero-scroll-arrow" />
      </a>

      <section className="section identification" id="identificacao">
        <div className="container narrow">
          <div className="identification-header" data-reveal>
            <div className="section-heading">
              <p className="eyebrow">Talvez isso seja familiar</p>
              <h2>Você se identifica com isso?</h2>
            </div>
            <p className="closing-copy">
              Talvez não esteja faltando amor. Talvez esteja faltando um momento
              intencional para vocês se ouvirem, se aproximarem e caminharem na
              mesma direção. Foi para ajudar nesse começo que o “Dois em Um” foi
              criado.
            </p>
          </div>
          <div className="pain-grid">
            {identificationItems.map((item, index) => (
              <article
                className="pain-card"
                data-reveal
                style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
                key={item.text}
              >
                <img src={item.image} alt={item.alt} />
                <div className="pain-card-shade" />
                <span className="pain-number">0{index + 1}</span>
                <div className="pain-card-content">
                  <span className="pain-icon">
                    <IdentificationIcon index={index} />
                  </span>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section product">
        <div className="container product-grid">
          <div className="product-visual" data-reveal>
            <div className="product-blob" />
            <img
              className="product-mockup"
              src="/assets/product-mockup-dois-em-um.png"
              alt="Conteúdos do devocional Dois em Um"
            />
            <div className="floating-card">
              <span>Jornada guiada</span>
              <b>Um momento por dia</b>
            </div>
          </div>
          <div className="product-copy" data-reveal>
            <p className="eyebrow">
              <span />
              Uma nova rotina a dois
            </p>
            <h2>
              O que é o <span className="keep-together">“Dois em Um”?</span>
            </h2>
            <p>
              “Dois em Um” é um devocional de <strong>30 dias</strong> para
              casais evangélicos que transforma um pequeno momento da rotina em
              uma experiência de <strong>fé, conversa e conexão</strong>.
            </p>
            <p>
              A proposta não é apenas ler um texto. É criar um{" "}
              <strong>espaço diário</strong> para refletir, conversar e colocar
              em prática atitudes que fortaleçam o relacionamento. O devocional
              funciona como um guia simples para ajudar vocês a{" "}
              <strong>manterem esse cuidado com constância</strong>.
            </p>
            <blockquote>
              <span>“</span>
              <p>
                “Por isso, o homem deixará pai e mãe e se unirá à sua mulher, e
                os dois serão uma só carne.”
              </p>
              <cite>Mateus 19:5</cite>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="marquee">
        <div
          className="marquee-track"
          aria-label="Devocional de 30 dias, Fé, Conexão, Presença, Propósito, Casal"
        >
          {Array.from({ length: 8 }, (_, groupIndex) => (
            <div
              className="marquee-group"
              aria-hidden={groupIndex === 0 ? undefined : true}
              key={groupIndex}
            >
              {marqueeItems.map((item) => (
                <span className="marquee-item" key={item}>
                  {item}<i aria-hidden="true">•</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section receive">
        <div className="container">
          <div className="section-heading split-heading" data-reveal>
            <div>
              <p className="eyebrow">
                <span />
                Uma experiência completa
              </p>
              <h2>O que você vai receber</h2>
            </div>
            <p>
              Conteúdo prático e acolhedor para transformar intenção em momentos
              reais de <strong>cuidado, fé e conversa</strong>.
            </p>
          </div>
          <div className="benefit-grid">
            {benefits.map((benefit, index) => (
              <article
                className="benefit-card"
                data-reveal
                style={{ "--delay": `${(index % 3) * 80}ms` } as React.CSSProperties}
                key={benefit.title}
              >
                <div className={`benefit-mockup benefit-mockup-${benefit.mockup}`} aria-hidden="true">
                  <BenefitMockup type={benefit.mockup} />
                </div>
                <div className="benefit-top">
                  <span>{benefit.number}</span>
                  <span className="benefit-icon"><BenefitIcon type={benefit.mockup} /></span>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section transformation">
        <div className="container transformation-grid">
          <div className="transformation-photo" data-reveal>
            <img
              src="/assets/transformation-couple-guided.png"
              alt="Casal vivendo um momento intencional juntos"
            />
            <div className="photo-caption">
              <span>30 dias</span>
              <b>Uma decisão diária de cuidar</b>
            </div>
          </div>
          <div className="transformation-copy" data-reveal>
            <p className="eyebrow light">
              <span />
              Pequenos passos, nova direção
            </p>
            <h2>
              O que vocês serão guiados a construir em{" "}
              <span className="keep-together">30 dias</span>
            </h2>
            <div className="transformation-list">
              {transformationItems.map((item) => (
                <div key={item}>
                  <span><CheckIcon /></span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-heading centered" data-reveal>
            <p className="eyebrow centered-eyebrow">Histórias reais</p>
            <h2>
              Quem <span className="keep-together">já experimentou</span>
            </h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <article
                className="testimonial-card"
                data-reveal
                style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
                key={testimonial.author}
              >
                <span className="quote-mark">“</span>
                <p>{testimonial.quote}</p>
                <div className="stars">★★★★★</div>
                <b>{testimonial.author}</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="testimonial-offer-transition" aria-hidden="true">
        <img src="/assets/offer-transition.png" alt="" />
      </div>

      <section className="section offer-section" id="oferta">
        <div className="offer-orbit orbit-one" />
        <div className="offer-orbit orbit-two" />
        <div className="container offer-grid">
          <div className="offer-copy" data-reveal>
            <p className="eyebrow light">
              <span />
              INVESTIMENTO
            </p>
            <h2>
              Menos de <span className="keep-together">R$ 2,24</span> por dia
              para cuidar do relacionamento durante{" "}
              <span className="keep-together">30 dias</span>
            </h2>
            <p className="offer-intro">
              Um passo simples para criar um espaço de{" "}
              <strong>presença, propósito e fé</strong> dentro da rotina de
              vocês.
            </p>
            <div className="offer-guarantee">
              <div className="mini-seal">7</div>
              <span>
                <b>7 dias de garantia</b>
                Comece com segurança e decida com tranquilidade.
              </span>
            </div>
          </div>
          <div className="price-card" data-reveal>
            <span className="launch-tag">Condição especial de lançamento</span>
            <p className="old-price">De R$ 97,00</p>
            <div className="new-price">
              <small>R$</small>
              <b>67</b>
              <small>,00</small>
            </div>
            <p className="price-condition">Condição especial de lançamento.</p>
            <BuyButton variant="light">Quero começar os 30 dias</BuyButton>
            <div className="secure-list">
              <span><CheckIcon /> Compra 100% segura</span>
              <span><CheckIcon /> Acesso imediato</span>
              <span><CheckIcon /> Garantia de 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section guarantee">
        <div className="container guarantee-card" data-reveal>
          <div className="seal">
            <img src="/assets/guarantee-seal.png" alt="Selo de garantia de 7 dias" />
          </div>
          <div>
            <p className="eyebrow">
              <span />
              Sua decisão protegida
            </p>
            <h2>
              Você pode conhecer o{" "}
              <span className="keep-together">“Dois em Um”</span> sem risco
            </h2>
            <p>
              Você terá <strong>7 dias de garantia incondicional</strong> para
              acessar o material e conhecer a proposta. Se, por qualquer motivo,
              entender que o devocional não faz sentido para vocês, poderá
              solicitar a{" "}
              <strong>devolução de 100% do valor investido</strong>.
            </p>
            <p>
              <strong>Sem perguntas e sem burocracia.</strong> Você começa com
              segurança e decide com tranquilidade.
            </p>
          </div>
        </div>
      </section>

      <section className="section faq">
        <div className="container faq-grid">
          <div className="faq-heading" data-reveal>
            <p className="eyebrow">
              <span />
              Tire suas dúvidas
            </p>
            <h2>Perguntas frequentes</h2>
            <p>
              Tudo o que vocês precisam saber antes de começar{" "}
              <span className="keep-together">essa jornada.</span>
            </p>
          </div>
          <div className="faq-list" data-reveal>
            {faqs.map((faq, index) => (
              <div
                className={`faq-item${openFaqIndex === index ? " is-open" : ""}`}
                key={faq.question}
              >
                <button
                  id={`faq-question-${index}`}
                  className="faq-question"
                  type="button"
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenFaqIndex((current) => (current === index ? null : index))}
                >
                  <span>{faq.question}</span>
                  <i aria-hidden="true" />
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer"
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                >
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-card">
          <div className="final-copy" data-reveal>
            <p className="eyebrow light">
              <span />
              O cuidado pode começar hoje
            </p>
            <h2>
              Seu casamento não precisa esperar{" "}
              <span className="keep-together">uma crise</span> para receber
              cuidado.
            </h2>
            <p>
              Deus tem um <strong>propósito</strong> para a caminhada de vocês.
              Comecem hoje, com um momento por dia, a construir{" "}
              <strong>mais conexão, fé e intencionalidade</strong> no
              relacionamento.
            </p>
            <p className="signature">
              <span>Com amor,</span>
              <b>Equipe Dois em Um</b>
            </p>
            <BuyButton variant="light">Sim, quero começar o “Dois em Um”</BuyButton>
            <p className="final-microcopy">
              Acesso imediato ·{" "}
              <strong>
                <span className="keep-together">R$ 67,00</span>
              </strong>{" "}
              · Garantia de 7 dias
            </p>
          </div>
          <div className="final-visual" data-reveal>
            <img
              className="final-mockup"
              src="/assets/final-mockup-dois-em-um.png"
              alt="Devocional digital Dois em Um"
            />
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <LogoMark />
          <p>© 2026 Dois em Um. Todos os direitos reservados.</p>
          <div>
            <a href="#">Voltar ao início</a>
          </div>
        </div>
      </footer>

      <div className="floating-menu">
        <a
          className="floating-whatsapp"
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          aria-label="Tire suas dúvidas pelo WhatsApp"
        >
          <WhatsAppIcon />
          <span>Tire suas dúvidas</span>
        </a>
      </div>
    </main>
  );
}
