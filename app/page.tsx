"use client";


import { useState } from "react";
import { Check, ChevronRight, Mail, MessageSquare, Calendar, Star, Quote, Target, Workflow, Rocket, Users, Layers, Sparkles, FileText, PieChart } from "lucide-react";

// ========== Palette (from screenshot) ==========
// Primary Navy: #080F5B | Blue: #0D19A3 | Accent Green: #15DB95
// Light Beige: #F4E4C1 | Sand: #E4C580

// ========== Helper Components ==========
const Section = ({ id, eyebrow, title, subtitle, children }: any) => (
  <section id={id} className="py-20 sm:py-28" aria-label={title}>
    <div className="mx-auto max-w-6xl px-4">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold tracking-widest text-[#E4C580] uppercase">{eyebrow}</p>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F4E4C1] mb-4">{title}</h2>
      )}
      {subtitle && (
        <p className="max-w-3xl text-[#F4E4C1]/80 text-lg leading-relaxed mb-8">{subtitle}</p>
      )}
      {children}
    </div>
  </section>
);

const Badge = ({ children }: any) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium border-[#15DB95]/40 text-[#F4E4C1] bg-[#0D19A3]/40 shadow-sm">
    {children}
  </span>
);

const Card = ({ children, className = "" }: any) => (
  <div className={`rounded-2xl border border-white/10 bg-[#0D19A3]/15 backdrop-blur-sm shadow-sm ${className}`}>{children}</div>
);

const CardBody = ({ children, className = "" }: any) => (
  <div className={`p-6 sm:p-8 ${className}`}>{children}</div>
);

const CTAButton = ({ href, children, className = "" }: any) => (
  <a
    href={href}
    className={`inline-flex items-center gap-2 rounded-full bg-[#15DB95] px-6 py-3 text-[#080F5B] font-semibold shadow-lg hover:brightness-110 transition ${className}`}
  >
    {children} <ChevronRight className="h-4 w-4" />
  </a>
);

const GhostButton = ({
  href,
  children,
  className = "",
  target,
  rel,
}: any) => (
  <a
    href={href}
    target={target}
    rel={rel}
    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 border border-[#15DB95] text-[#15DB95] hover:bg-[#15DB95]/10 transition ${className}`}
  >
    {children}
  </a>
);


const MonoLogo = ({ label = "LOGO" }: { label?: string }) => (
  <div className="h-10 md:h-12 w-28 md:w-32 shrink-0 rounded-xl bg-white/80 text-[#080F5B] grid place-content-center text-xs tracking-widest">
    {label}
  </div>
);

// ========== Page ==========
export default function ConsultantSite() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#080F5B] text-[#F4E4C1]">
      {/* Decorative gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_0%,rgba(13,25,163,0.35),transparent_70%)]" />
      </div>

      {/* Header */}
<header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-[#080F5B]/80">
  <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
    {/* Лого + подпись */}
    <a href="#top" className="flex items-center gap-3">
      <div className="h-9 w-9 rounded-xl bg-[#15DB95] text-[#080F5B] grid place-content-center font-bold">ET</div>
      <div className="leading-tight">
        <div className="font-extrabold">Евгений Тимонов</div>
        <div className="text-xs text-[#F4E4C1]/70">Консультант по управлению продажами</div>
      </div>
    </a>

    {/* Меню */}
    <nav className="hidden md:flex items-center gap-6 text-sm">
      {[
        ["#services","Услуги"],
        ["#cases","Кейсы"],
        ["#process","Процесс"],
        ["#about","Обо мне"],
        ["#testimonials","Отзывы"],
        ["#faq","FAQ"],
        ["#contact","Контакты"],
      ].map(([href, label]) => (
        <a key={href} href={href as string} className="hover:text-white text-[#F4E4C1]/80 whitespace-nowrap">
          {label}
        </a>
      ))}
    </nav>

    {/* Кнопки действий */}
    <div className="hidden md:flex items-center gap-3 ml-6">
      <a
        href="https://t.me/evgeniy_sales" target="_blank" rel="noopener noreferrer"

        className="inline-flex items-center gap-2 rounded-full px-5 py-0 h-10 border border-[#15DB95] text-[#15DB95] hover:bg-[#15DB95]/10 text-sm whitespace-nowrap"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z"/>
        </svg>
        Telegram
      </a>

      <a
        href="#contact"
        className="inline-flex items-center gap-2 rounded-full bg-[#15DB95] px-5 py-0 h-10 text-[#080F5B] font-semibold shadow-lg hover:brightness-110 text-sm whitespace-nowrap"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
        </svg>
        Забронировать встречу
      </a>
    </div>
  </div>
</header>


      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 pt-16 sm:pt-24 pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge>
                <Sparkles className="h-3.5 w-3.5 text-[#15DB95]"/> 12+ лет в B2B продажах • РФ и международные проекты
              </Badge>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
                Строю удаленные отделы продаж и вывожу B2B‑компании на <span className="underline decoration-4 decoration-[#15DB95] underline-offset-4">предсказуемый рост</span>
              </h1>
              <p className="mt-4 text-lg text-[#F4E4C1]/80 max-w-xl">
                Консультирование собственников и руководителей. Внедрение CRM и процессов, обучение команды, внешний РОП. От первых продаж в стартапе до масштабирования действующего отдела.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                <CTAButton href="https://calendly.com/jenekvteme/30min" target="_blank" rel="noopener noreferrer"><Calendar className="h-4 w-4"/>Забронировать встречу (30 минут)</CTAButton>
                <GhostButton href="#services"><ChevronRight className="h-4 w-4"/>Смотреть услуги</GhostButton>
                <a href="/files/checklist_sales_audit_30min.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full px-5 py-3 border border-white/20 bg-white/10 text-white hover:bg-white/20 transition"><FileText className="h-4 w-4"/>Скачать чек‑лист</a>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <Badge><Check className="h-4 w-4"/> Предсказуемость</Badge>
                <Badge><Check className="h-4 w-4"/> Прозрачность</Badge>
                <Badge><Check className="h-4 w-4"/> Контроль</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
  <img
    src="/hero-1.png"
    alt="Евгений Тимонов"
    className="w-full aspect-[3/4] object-contain bg-transparent"
  />
</div>
              <div className="absolute -bottom-6 -left-6 hidden md:block">
                <Card>
                  <CardBody className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#15DB95] grid place-content-center"><Star className="h-5 w-5 text-[#080F5B]"/></div>
                    <div className="text-sm">
                      <div className="font-semibold text-[#15DB95]">ТОП‑результаты клиентов</div>
                      <div className="text-[#F4E4C1]/80">рост выручки, быстрее сделки, порядок в CRM</div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust — auto marquee with seamless loop */}
      <Section id="trust" subtitle="Среди моих клиентов">
        <div className="py-2 overflow-hidden relative">
          <div className="flex items-center gap-10 min-w-max marquee-track" style={{animationDuration: "28s"}}>
            {(["BITRIX24","РИВ ГОШ","ПОДРУЖКА","WILDBERRIES","БАНК СПБ","СИНЕРГИЯ","ЛЕНТА","МИКСИТ","ГАЗПРОМНЕФТЬ"]).map((l)=> (
              <MonoLogo key={`a-`+l} label={l} />
            ))}
            {(["BITRIX24","РИВ ГОШ","ПОДРУЖКА","WILDBERRIES","БАНК СПБ","СИНЕРГИЯ","ЛЕНТА","МИКСИТ","ГАЗПРОМНЕФТЬ"]).map((l)=> (
              <MonoLogo key={`b-`+l} label={l} />
            ))}
          </div>
        </div>
        <style>{`
          @keyframes marqueeLinear { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .marquee-track { display:inline-flex; animation: marqueeLinear linear infinite; }
        `}</style>
      </Section>

      {/* Services */}
      <Section id="services" eyebrow="Услуги" title="Как я помогаю" subtitle="Выберите формат под вашу задачу: от диагностики до полного ведения как внешний РОП.">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: <Users className="h-6 w-6"/>, title: "Обучение отдела продаж", text: "Практическая программа: база и продвинутые навыки, OSINT, выход на ЛПР, холодный заход, отработка возражений.", bullets: ["12 модулей на выбор + задания","Разборы коммуникаций и ролевые игры","Кейсы под вашу нишу"] },
            { icon: <Rocket className="h-6 w-6"/>, title: "Внешний РОП (part‑time)", text: "Ежедневные разборы, KPI, контроль SLA, обучение и автоматизация. Даю результат, оставляю работающую систему.", bullets: ["Спринты, отчёты собственнику","Пересборка мотивации «больше результата»","Масштабирование и закрепление"] },
            { icon: <Target className="h-6 w-6"/>, title: "Диагностика и план роста", text: "Проблемные интервью, срез воронки и скорости ответа, узкие места. План быстрых улучшений на 4–6 недель.", bullets: ["Отчёт «было → стало», KPI и гипотезы","Рекомендации по мотивации и ролям","Карта процессов и ответственность"] },
            { icon: <Check className="h-6 w-6"/>, title: "Отчётность и юнит‑экономика", text: "Прозрачная отчётность, маржинальность и контроль ключевых показателей.", bullets: ["Дашборды и отчёты","Анализ маржинальности","Прозрачность для собственника"] },
            { icon: <PieChart className="h-6 w-6"/>, title: "Разработка системы мотивации", text: "Справедливая и стимулирующая схема под цели компании.", bullets: ["Диагностика текущей схемы","Проектирование новой модели","Тестирование и внедрение"] },
            { icon: <Workflow className="h-6 w-6"/>, title: "Найм отдела продаж", text: "Найм менеджеров и РОПа - от вакансий до онбординга.", bullets: ["Конверсионная продающая вакансия", "Собеседования и выводы для собственника", "Онбординг, чек‑листы и регламенты"] }
            
          ].map((s) => (
            <Card key={s.title}>
              <CardBody>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-[#15DB95] text-[#080F5B] grid place-content-center">{s.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#15DB95]">{s.title}</h3>
                    <p className="mt-1 text-[#F4E4C1]/80">{s.text}</p>
                    <ul className="mt-3 space-y-2 text-sm text-[#F4E4C1]/90">
                      {s.bullets.map((b: string) => (<li key={b} className="flex gap-2"><Check className="h-4 w-4 mt-[3px] text-[#15DB95]"/>{b}</li>))}
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

     {/* Cases */}
<Section
  id="cases"
  eyebrow="Кейсы"
  title="Результаты клиентов"
  subtitle="Формат: задача → решения → измеримый результат. Подробности на консультации (часть проектов под NDA)."
>
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        title: "Аналитика для маркетплейсов: запуск с нуля",
        bullets: [
          "Регламенты и скрипты + контроль",
          "Определение ключевого этапа воронки",
          "Обучение отдела, OSINT и холодный выход на ЛПР",
          "Перебор гипотез → рабочая модель",
        ],
        result: "работа с топ-10 компаниями в нишах, средний чек ×12 от стартового",
      },
      {
        title: "Импорт товаров из Европы: реорганизация отдела",
        bullets: [
          "Разделили воронки: подбор и выкуп/доставка",
          "SLA ответа ≤ 15 мин",
          "Unit-экономика в сделке, видно маржу",
          "Рост конверсии на ключевых этапах",
        ],
        result: "+38% выручки за 3 месяца",
      },
      {
        title: "Производство снековой продукции: запуск с нуля",
        bullets: [
          "Сегментация и выбор доступного сегмента для старта",
          "Холодные прозвоны + тестовые образцы",
          "Базовые маркет-материалы",
          "CRM и контроль взаимодействий с нуля",
        ],
        result: "За 1,5 года выход в 22 региона РФ + Беларусь, затем федеральные сети"
      },
      {
        title: "Студия графического дизайна: рост среднего чека",
        bullets: [
          "Доработка процессов работы с клиентами",
          "Сегментация услуг и клиентов",
          "Выход на корп. заказы 2+ млн ₽",
          "Экспансия на международные рынки",
        ],
        result: "утроение выручки за 3 месяца",
      },
      {
        title: "MedTech стартап: навести фокус и масштабировать",
        bullets: [
          "Диагностика воронки, выделение узкого места",
          "Две роли: генерация лидов и встречи",
          "Настройка мотивации на целевые встречи",
        ],
        result: "портфель 250 млн ₽ за 3 мес., 40% конверсии со встречи, рост оценки инвесторов с 150 млн ₽ до 1 млрд ₽ за 6 мес.",
      },
      {
        title: "Продажа готового бизнеса: запуск офиса в Москве",
        bullets: [
          "Найм команды менеджеров",
          "Онбординг, адаптация и мотивация",
          "Прозрачные процессы и контроль",
        ],
        result: "выход на план на 4-й месяц",
      },
      
    ].map((c) => (
      <Card
        key={c.title}
        className="transition-all hover:shadow-lg hover:-translate-y-1"
      >
        <CardBody>
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 grid place-content-center">
              <FileText className="h-5 w-5 text-[#E4C580]" />
            </div>
            <div>
              <div className="font-bold text-lg text-[#E4C580]">{c.title}</div>
              <ul className="mt-2 space-y-1 text-sm text-[#F4E4C1]/85">
                {c.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <Check className="h-4 w-4 mt-[3px] text-[#15DB95]" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-3 text-sm font-semibold text-[#15DB95]">
                Результат: {c.result}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    ))}
  </div>
</Section>


      {/* Process */}
      <Section id="process" eyebrow="Подход" title="Как я работаю" subtitle="Прозрачный процесс по шагам. Сроки и формат зависят от масштаба задач.">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Layers, title: "1. Диагностика", text: "Интервью собственника и команды, аудит CRM и коммуникаций, срез конверсий и сроков."},
            { icon: Target, title: "2. План действий", text: "Гипотезы, KPI, матрица ответственности, план быстрых улучшений на 4–6 недель."},
            { icon: Workflow, title: "3. Внедрение", text: "CRM, регламенты, мотивация, обучение, дашборды и SLA 10–15 минут."},
            { icon: Rocket, title: "4. Закрепление", text: "Спринты, контроль качества, масштабирование. Итоговый отчёт «было → стало»."},
          ].map((s) => (
            <Card key={s.title}><CardBody>
              <div className="h-10 w-10 rounded-xl bg-[#15DB95] text-[#080F5B] grid place-content-center mb-3">{<s.icon className="h-5 w-5"/>}</div>
              <div className="font-bold text-[#15DB95]">{s.title}</div>
              <div className="text-sm text-[#F4E4C1]/85 mt-1">{s.text}</div>
            </CardBody></Card>
          ))}
        </div>
      </Section>



      <Section id="about" eyebrow="Эксперт" title="Евгений Тимонов" subtitle="Руководитель отдела продаж • 12+ лет практики в активных B2B-продажах (РФ и международка)">
  <div className="mt-6 grid md:grid-cols-2 gap-10 items-start">
    {/* ЛЕВО: пункты и кнопки */}
    <div>
      <ul className="space-y-2 text-[#F4E4C1]">
        {[
          "Опыт: ритейл (вывод FMCG-продукта), IT-проекты (медстрахование, EdTech, маркетплейсы)",
          "Специализация: построение отделов продаж, внешний РОП, обучение менеджеров, холодный выход на ЛПР",
          "Инструменты: amoCRM/Bitrix24, OSINT, аналитика, unit-экономика, регламенты, онбординг",
          "География: РФ + русскоговорящие проекты по миру",
        ].map((t) => (
          <li key={t} className="flex gap-2">
            <Check className="h-4 w-4 mt-[3px] text-[#15DB95]" />
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <a
          href="https://calendly.com/jenekvteme/30min"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#15DB95] px-6 py-3 text-[#080F5B] font-semibold shadow-lg hover:brightness-110 transition"
        >
          <Calendar className="h-4 w-4" />
          Консультация
        </a>

        {/* Коммерческое предложение — как просил */}
        <GhostButton href="/files/offer.pdf" target="_blank" rel="noopener noreferrer">
          <FileText className="h-4 w-4" />
          Коммерческое предложение
        </GhostButton>
      </div>
    </div>

    {/* ПРАВО: карточка прижата вверх и ПРИПОДНЯТА на десктопе */}
    <aside className="md:justify-self-end md:self-start md:-mt-28 lg:-mt-34">
      <div className="w-[420px] max-w-full rounded-3xl border border-white/10 bg-[#0D19A3]/30 shadow-sm">
        <div className="p-6 sm:p-8">
          <img
            src="/about_me.png"
            alt="Евгений Тимонов"
            className="w-full h-auto object-contain rounded-3xl"
          />
          <div className="mt-4 font-semibold text-[#E4C580]">
            Программа обучения (адаптация под отдел)
          </div>
          <ul className="mt-2 space-y-1 text-sm text-[#F4E4C1]/85">
            {[
              "12 модулей на выбор + задания",
              "OSINT, LinkedIn, холодный выход на ЛПР",
              "Практика: скрипты, разбор переписок, KPI и отчётность",
            ].map((b) => (
              <li key={b} className="flex gap-2">
                <Check className="h-4 w-4 mt-[2px] text-[#15DB95]" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  </div>
</Section>



     {/* Testimonials */}
<Section id="testimonials" eyebrow="Отзывы" title="Что говорят клиенты">
  {/* Ряд 1 — всегда виден */}
  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        quote:
          "Выходили на рынок без кредитов и инвестиций, оборотные средства были ограничены. Евгений помог выбрать стратегию и сегмент, чётко выстроил работу с клиентами и систему контроля. За 1,5 года органически выросли и вышли в 22 региона и попали на полки федеральной сети.",
        name: "Роман",
        role: "Директор компании, производство снеков",
      },
      {
        quote:
          "До прихода Евгения продажи носили случайный характер. Он выстроил систему, обучил и пробустил наш рост. За полгода компания вышла в лидеры по темпам роста.",
        name: "Анастасия",
        role: "CEO MedTech-компании",
      },
      {
        quote:
          "Евгений оптимизировал процесс продаж, сегментировал услуги и вывел студию на корпоративных заказчиков и на международный рынок.",
        name: "Наталья",
        role: "Операционный директор дизайн-студии",
      },
    ].map((t) => (
      <Card
        key={t.name + t.role}
        className="bg-[#0D19A3]/40 border border-white/10 rounded-3xl transition-all hover:-translate-y-1 hover:shadow-2xl"
      >
        <CardBody>
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 grid place-content-center shrink-0">
              <Quote className="h-5 w-5 text-[#E4C580]" />
            </div>
            <div>
              <p className="text-sm leading-relaxed text-[#F4E4C1]/85">«{t.quote}»</p>
              <div className="mt-4 h-px bg-white/10" />
              <div className="mt-3 text-sm font-semibold text-white/90">{t.name}</div>
              <div className="text-xs text-white/60">{t.role}</div>
            </div>
          </div>
        </CardBody>
      </Card>
    ))}
  </div>

  {/* Раскрывашка на <details> */}
  <details className="group mt-6 flex flex-col">
  {/* 1) Контент, который раскрывается */}
  <div
    className="order-1 overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out
               max-h-0 opacity-0 group-open:max-h-[1200px] group-open:opacity-100"
    aria-hidden="true"
  >
    <div className="grid md:grid-cols-3 gap-6">
      {[
        {
          quote:
            "Запуск продаж происходил с нуля. Евгений сам работал с клиентами, закатав рукава. После тестирования гипотез вышли на работу с нашими клиентами. Растём третий год подряд.",
          name: "Диана",
          role: "Основатель и CEO сервиса аналитики маркетплейсов",
        },
        {
          quote:
            "При открытии московского офиса организовал найм, обучение и мотивацию, а также контроль ключевых показателей. Сам участвовал в сделках и помогал менеджерам закрывать. Благодаря этому офис вышел на план в срок.",
          name: "Богдан",
          role: "Собственник компании по продаже готового бизнеса",
        },
      ].map((t) => (
        <Card
          key={t.name + t.role}
          className="bg-[#0D19A3]/40 border border-white/10 rounded-3xl transition-all hover:-translate-y-1 hover:shadow-2xl"
        >
          <CardBody>
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/10 grid place-content-center shrink-0">
                <Quote className="h-5 w-5 text-[#E4C580]" />
              </div>
              <div>
                <p className="text-sm leading-relaxed text-[#F4E4C1]/85">«{t.quote}»</p>
                <div className="mt-4 h-px bg-white/10" />
                <div className="mt-3 text-sm font-semibold text-white/90">{t.name}</div>
                <div className="text-xs text-white/60">{t.role}</div>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  </div>

  {/* 2) Кнопка — ВСЕГДА после контента */}
  <summary className="order-2 list-none mt-8 flex justify-center">
    {/* Показать ещё */}
    <span className="inline-flex items-center gap-2 rounded-full border border-[#15DB95] text-[#15DB95] px-5 py-2
                      hover:bg-[#15DB95]/10 transition group-open:hidden cursor-pointer">
      Показать ещё
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </span>

    {/* Свернуть */}
    <span className="hidden group-open:inline-flex items-center gap-2 rounded-full border border-[#15DB95]
                      text-[#15DB95] px-5 py-2 hover:bg-[#15DB95]/10 transition cursor-pointer">
      Свернуть
      <svg className="h-4 w-4 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </span>
  </summary>
</details>

</Section>




      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Частые вопросы">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {q: "Сколько стоит консалтинг?", a: "Зависит от масштаба и задач. На первичном звонке сориентирую по вилке и ожидаемому ROI."},
            {q: "Работаете ли вы по NDA?", a: "Да. Подписываем NDA до передачи доступов и данных."},
            {q: "Какие сроки?", a: "Диагностика 2–4 недели, внедрение 1–3 недели, обучение 1–1.5 недели. Внешний РОП — от 2–3 месяцев."},
            {q: "Можно ли обучить мой отдел под нишу?", a: "Да. Адаптирую программу под продукт, аудиторию и цикл сделки."},
          ].map((f)=> (
            <Card key={f.q}><CardBody>
              <div className="font-semibold text-[#15DB95]">{f.q}</div>
              <div className="text-[#F4E4C1]/85 mt-1 text-sm">{f.a}</div>
            </CardBody></Card>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" eyebrow="Контакты" title="Заявка на консультацию" subtitle="Оставьте контакты — вернусь с предложением первого шага в течение рабочего дня.">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <Card className="md:col-span-2">
            <CardBody>
              <form action="#" onSubmit={(e)=> e.preventDefault()} className="grid sm:grid-cols-2 gap-4">
                <input required placeholder="Имя" className="rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#15DB95]"/>
                <input required placeholder="Компания" className="rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#15DB95]"/>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Email" className="rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#15DB95]"/>
                <textarea placeholder="Кратко о задаче" className="sm:col-span-2 rounded-xl border border-white/20 bg-white/5 text-white placeholder:text-white/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#15DB95] min-h-[120px]"/>
                <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#15DB95] px-6 py-3 text-[#080F5B] font-semibold hover:brightness-110">
                  <Calendar className="h-4 w-4"/> Забронировать встречу (30 минут)
                </button>
                <div className="sm:col-span-2 flex gap-3">
                  <a href="https://t.me/evgeniy_sales" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-[#15DB95] text-[#15DB95] hover:bg-[#15DB95]/10"><MessageSquare className="h-4 w-4"/> Telegram</a>
                  <a href="https://wa.me/79536639992" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-[#15DB95] text-[#15DB95] hover:bg-[#15DB95]/10"><MessageSquare className="h-4 w-4"/> WhatsApp</a>
                  <a href="mailto:jenekvteme@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/20 text-white hover:bg-white/10"><Mail className="h-4 w-4"/> Email</a>
                </div>
                <p className="sm:col-span-2 text-xs text-white/60">Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных и политикой конфиденциальности.</p>
              </form>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div className="text-sm font-semibold text-[#E4C580]">Онлайн‑запись</div>
              <div className="mt-2 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <iframe src="https://calendly.com/jenekvteme/30min" className="w-full h-[420px]" />
              </div>
              <a href="https://calendly.com/jenekvteme/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-3 text-sm font-semibold underline underline-offset-4"><Calendar className="h-4 w-4"/> Открыть в Calendly</a>
            </CardBody>
          </Card>
        </div>
      </Section>

      {/* Footer */}
<footer className="border-t border-white/10 bg-[#080F5B]">
  <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6 items-center">
    <div className="text-sm text-[#F4E4C1]/80">
      © {new Date().getFullYear()} Евгений Тимонов. Все права защищены.
    </div>
    <div className="text-sm text-[#F4E4C1]/70">
      <a
        href="/files/privacy.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4"
      >
        Политика конфиденциальности
      </a>
    </div>
    <div className="text-right">
      <a href="#top" className="text-sm underline underline-offset-4">
        Наверх
      </a>
    </div>
  </div>
</footer>


     {/* SEO JSON-LD */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Евгений Тимонов",
      "jobTitle": "Консультант по управлению продажами",
      "url": "https://www.timonov.pro",
      "image": "https://www.timonov.pro/hero-1.png",
      "email": "mailto:jenekvteme@gmail.com",
      "telephone": "+7-953-663-99-92",
      "sameAs": [
        "https://t.me/evgeniy_sales",
        "https://wa.me/79536639992",
        "https://calendly.com/jenekvteme/30min"
      ],
      "knowsAbout": [
        "Sales Management",
        "B2B Sales",
        "CRM Implementation",
        "Cold Outreach",
        "OSINT"
      ],
      "areaServed": ["Россия", "СНГ", "Европа", "США"],
      "availableService": [
        { "@type": "Service", "name": "Диагностика продаж" },
        { "@type": "Service", "name": "Внедрение CRM и регламентов" },
        { "@type": "Service", "name": "Обучение отдела продаж" },
        { "@type": "Service", "name": "Внешний РОП (part-time)" }
      ]
    }),
  }}
/>

    </div>
  );
}
