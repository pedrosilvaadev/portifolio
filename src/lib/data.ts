export const data = {
  mySkills: [
    "typescript",
    "javascript",
    "react",
    "next",
    "tailwind",
    "styledcomponents",
    "jest",
    "materialui",
    "sass",
    "nodejs",
    "express",
    "mongodb",
    "sequelize",
    "firebase",
    "supabase",
    "docker",
    "azure",
    "git",
    "figma",
    "vercel",
  ],
  projects: [
    {
      title: "Nu Finance App",
      description:
        "This project is an application to help us control our finances.You can register your account using login social with Google, you can register a finance with a different type like: withdrawal or deposit. You can see the balance of theses transactions and delete a financial item.",
      github: "https://github.com/Dev-Pedrosv/nu-finance",
      view: "https://nu-finance-application.vercel.app/",
      stack: [
        "Next.js",
        "Prisma",
        "Typescript",
        "React Hook Form",
        "React Toastify",
        "Tailwind CSS",
        "Lucide",
      ],
      image: [
        {
          url: "/images/nu-finance-app.png",
        },
      ],
    },
    {
      title: "Translate App",
      description:
        "This project is an application to help us improve our English skills. You can register a card with a word and its translation in my case into Portuguese. I can see all the cards I have recorded, study and memorize these words.",
      github: "https://github.com/Dev-Pedrosv/translate-app",
      view: "https://translate-app-dev.vercel.app/",
      stack: [
        "Next.js",
        "Next Auth",
        "Prisma",
        "Mongodb",
        "Typescript",
        "React Hook Form",
        "React Toastify",
        "Tailwind CSS",
        "React Icons",
      ],
      image: [
        {
          url: "/images/translate-app.png",
        },
      ],
    },
    {
      title: "Trips App",
      description:
        "This project is an application designed to facilitate trip reservations. Users can log in using social login via Google, browse a list of available trips, view trip details, simulate a purchase of a trip, and see their reservations.",
      github: "https://github.com/Dev-Pedrosv/trips-app",
      view: "https://trips-app-dev.vercel.app/",

      stack: [
        "Next.js",
        "Next Auth",
        "Typescript",
        "Prisma",
        "Stripe",
        "Date-fns",
        "React Currency Input Field",
        "React Hook Form",
        "React Toastify",
        "Tailwind CSS",
        "Lucide",
      ],
      image: [
        {
          url: "/images/trips-project.png",
        },
      ],
    },
  ],
  experience: [
    {
      title: "Frontend Developer at PH DA SILVA SOLUÇÕES EM TI",
      period: "Set 2023 - Current",
      description:
        "I specialize in developing dynamic and efficient systems, focusing on user experience and business outcomes. I’ve built administrative BackOffice systems for Human Resources, streamlining employee management, bonus allocation, and payroll processes using React.js and Tailwind CSS. I’ve successfully migrated systems from Azure Auth to AWS Cognito, enhancing security and user authentication, and implemented i18n to internationalize a financial platform, helping secure global contracts. My work on customized checkouts and payment gateway integration in the fitness and beauty sectors optimized purchase flows, with sales exceeding R$1M. Additionally, I improved a cinema chain's loyalty integration, enhancing both customer experience and sales efficiency.",
      active: true,
      last: false,
    },
    {
      title: "Frontend Developer at Pureskills",
      period: "Fev 2023 - Set 2023",
      description:
        "I worked on a course-selling platform, similar to Hotmart, where I implemented tracking with Facebook Pixel and Google Ads, created customizations for the checkout, and migrated from Sass to Tailwind CSS, optimizing the development workflow. I redesigned the sales page, boosting conversion rates, and migrated applications to Next.js 13, improving security and performance. Additionally, I fixed 90% of unit tests, introduced reusable design patterns, and implemented color customization in the checkout, increasing conversion rates by 18%.",
      active: false,
      last: false,
    },
    {
      title: "Instructor Full Stack at Dev Club",
      period: "Abr 2022 - Mar 2023",
      description:
        "I recorded over 50 video lessons, developing applications with React, Node, MongoDB, and TypeScript, guiding students through each step. I provided technical support to over 2,000 students, helping them resolve issues, improve their code, and complete real-world projects. By addressing challenges and enhancing the learning experience, I contributed to higher course and project completion rates.",
      active: false,
      last: false,
    },
    {
      title: "Frontend Developer at MB Labs Applications",
      period: "Jan 2022 - Mar 2023",
      description:
        "I developed a new system and migrated a critical legacy system to ReactJS, enhancing performance, reliability, and maintainability. For one of the largest exchanges in Brazil, I refactored a system handling daily multi-million dollar transactions. I implemented unit and E2E tests to ensure stability, introduced Storybook for reusable components, and integrated LogRocket, Keycloak, and Sonarqube for monitoring, authentication, and code quality. I also utilized CI/CD with Azure DevOps and Git for seamless continuous delivery.",
      active: false,
      last: true,
    },
  ],
};
