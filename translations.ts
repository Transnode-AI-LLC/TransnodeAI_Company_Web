
import { ShieldCheck, BookOpen, Globe, UserCheck, Network, Lock, Zap, Layers } from "lucide-react";

export type Language = 'en' | 'zh' | 'es' | 'ko';

export interface ContentType {
  nav: {
    focus: string;
    products: string;
    team: string;
    contact: string;
  };
  hero: {
    badge: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    ctaCrowdfund: string;
  };
  aiModels: {
    title: string;
    partnerWith: string;
  };
  features: {
    title: string;
    items: {
      title: string;
      description: string;
      challenge: string;
      solution: string;
    }[];
  };
  trust: {
    title: string;
    points: string[];
    nda: string;
    collaborationTitle: string;
    collaborationBadge: string;
  };
  audience: {
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  products: {
    label: string;
    title: string;
    roadmapBtn: string;
    items: {
      name: string;
      tagline: string;
      points: string[];
      betaLink?: string;
      betaLinkText?: string;
      disclaimer?: string;
      status?: string;
    }[];
    waitlistBtn: string;
    quoteBtn: string;
    earlyAccessBtn: string;
    roadmapTitle: string;
    roadmapDesc: string;
    pastProjectsTitle: string;
    pastProjects: {
      name: string;
      desc: string;
      link: string;
      url: string;
    }[];
  };
  team: {
    hero: {
      title: string;
      subheading: string;
    };
    philosophy: {
      title: string;
      items: {
        title: string;
        description: string;
        icon: 'compass' | 'rocket' | 'shield';
      }[];
    };
    founding: {
      title: string;
      intro: string;
      bullets: string[];
      closing: string;
    };
    advisors: {
      title: string;
      description: string;
      areas: string[];
      closing: string;
    };
    opportunities: {
      title: string;
      description: string;
      roles: string[];
      closing: string;
      button: string;
    };
  };
  careers: {
    title: string;
    description: string;
    btnApply: string;
    btnStudent: string;
  };
  contact: {
    tagline: string;
    title: string;
    description: string;
    emailTitle: string;
    emailDesc: string;
    locationTitle: string;
    locationDesc: string;
    socialTitle: string;
    socialDesc: string;
    socialPlatforms: {
      linkedin: string;
      twitter: string;
      instagram: string;
      tiktok: string;
      youtube: string;
      discord: string;
      other: string;
    };
    discordFeedback: string;
    discordJoin: string;
    discordTitle: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formButton: string;
    sentTitle: string;
    sentDesc: string;
    investorTitle: string;
    investorDesc: string;
    newsletterTitle: string;
    newsletterSubtitle: string;
  };
  faq: {
    title: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  legalPage: {
    title: string;
    updated: string;
    sidebar: {
      privacy: string;
      terms: string;
      confidentiality: string;
    };
    privacy: {
      title: string;
      content: string[];
    };
    terms: {
      title: string;
      content: string[];
    };
    confidentiality: {
      title: string;
      content: string[];
    };
  };
  footer: {
    tagline: string;
    company: string;
    legal: string;
    rights: string;
  }
}

const en: ContentType = {
  nav: {
    focus: "Focus Areas",
    products: "Products",
    team: "Team",
    contact: "Contact Us"
  },
  hero: {
    badge: "AI for Global Impact",
    headlineStart: "Building",
    headlineHighlight: "Intelligent Tools",
    headlineEnd: "for Modern Collaboration.",
    subheadline: "Transnode AI, LLC develops cross-border AI products that enhance credibility, accelerate research, and streamline workflows—trusted by students, researchers, and global SMEs.",
    ctaPrimary: "Join Early Access",
    ctaSecondary: "Investor Inquiry",
    ctaCrowdfund: "1 Dollar Crowdfunding Appreciation"
  },
  aiModels: {
    title: "BUILT ON LEADING AI MODELS",
    partnerWith: "Partner With"
  },
  features: {
    title: "Our Focus Areas",
    items: [
      {
        title: "AI Verification Tech",
        description: "Leveraging computer vision and NLP to validate credentials, skills, and professional milestones with high accuracy.",
        challenge: "Resume fraud and unverified skills cost companies billions annually.",
        solution: "Our multi-modal AI models instantly verify documents and assess practical skills."
      },
      {
        title: "AI Edu",
        description: "Creating adaptive learning environments that personalize content delivery based on real-time student performance metrics.",
        challenge: "Traditional one-size-fits-all education models fail to address individual learning gaps.",
        solution: "Adaptive AI tutors analyze performance patterns to provide personalized curriculum."
      },
      {
        title: "AI Integrations",
        description: "We use current cutting-edge AI integrations and multi-modal models to provide fastest delivery and high-performance technical solutions.",
        challenge: "Fragmented systems and outdated architectures slow down development cycles and prevent real-time intelligence.",
        solution: "Integrating state-of-the-art LLMs and vision models to accelerate time-to-market and operational speed."
      },
      {
        title: "AI Workflow Optimization",
        description: "Automating complex operational workflows in cross-border commerce and academic administration using autonomous agents.",
        challenge: "Cross-border operations are often bogged down by language barriers and compliance.",
        solution: "Autonomous agents handle translation, scheduling, and compliance workflows."
      }
    ]
  },
  trust: {
    title: "Why Students, Researchers, and Businesses Trust Us",
    points: [
      "U.S.-based company founded by UCSD and University of Waterloo alumni",
      "Bridging U.S.–China technical and research ecosystems",
      "AI-first product philosophy with ethical safeguards",
      "Commitment to strict data privacy & confidentiality"
    ],
    nda: "All project collaborations include NDA (Confidentiality Agreements) and secure data handling practices.",
    collaborationTitle: "Collaborative Excellence",
    collaborationBadge: "Verified Partnerships"
  },
  audience: {
    title: "Who We Help",
    subtitle: "Empowering the next generation of researchers, professionals, and global innovators.",
    items: [
      { title: "Students", text: "Undergraduate students seeking research experience" },
      { title: "Job Seekers", text: "Early career professionals improving resume credibility" },
      { title: "HR Professionals", text: "Streamlining recruitment with AI-verified candidate credentials" },
      { title: "SMEs", text: "Cross-border businesses expanding into the U.S." }
    ]
  },
  products: {
    label: "Innovation Pipeline",
    title: "What We're Building (Preview)",
    roadmapBtn: "View Roadmap",
    items: [
      {
        name: "AuthenlyUSA",
        tagline: "Credibility Engine",
        points: ["AI credibility scoring", "Skill-based verification tasks", "Personalized career insight"],
        betaLink: "https://www.authenlyusa.com",
        betaLinkText: "Visit Beta Website",
        disclaimer: "Beta and still in development"
      },
      {
        name: "Transeed",
        tagline: "iOS App to Solve Parent's Headache of Kid's Screentime Problem",
        points: ["Apple Screen Time API for secure monitoring", "Incentivized digital detox with real rewards", "Parent-child collaborative habit building"],
        betaLink: "https://apps.apple.com/us/app/transeed/id6758642616",
        betaLinkText: "Download Beta on App Store",
        disclaimer: "Recently Launched",
        status: "Recently Launched"
      },
      {
        name: "Web Development Service & Digital Solutions",
        tagline: "Business Growth",
        points: ["Shopify", "B2B landing page", "local business", "Website Marketing Services"]
      }
    ],
    waitlistBtn: "Join Waitlist",
    quoteBtn: "Request a Quote",
    earlyAccessBtn: "Current MVP Presentation",
    roadmapTitle: "Product Roadmap",
    roadmapDesc: "Our intelligent tools are designed to empower the next generation of professionals with verification, collaboration, and market access.",
    pastProjectsTitle: "Client Success Portfolio",
    pastProjects: [
      {
        name: "Kergle Electronics Ecommerce Store",
        desc: "",
        link: "https://www.kergle.us",
        url: "www.kergle.us"
      },
      {
        name: "OnPrime Global Enterprise Company Site",
        desc: "",
        link: "https://www.onprimeglobal.com",
        url: "www.onprimeglobal.com"
      }
    ]
  },
  team: {
    hero: {
      title: "Our Team",
      subheading: "Our founding team brings global perspectives and academic backgrounds from top U.S., Canadian, and Chinese institutions such as Cornell University, UC San Diego, University of Waterloo, and Fudan University. We combine expertise in AI systems, backend engineering, and research operations to build reliable, intelligent tools for modern work and verification."
    },
    philosophy: {
      title: "How We Work",
      items: [
        {
          title: "User-Obsessed",
          description: "We build products that solve real problems for students, researchers, and professionals navigating complex workflows.",
          icon: "compass"
        },
        {
          title: "Engineering-Driven",
          description: "Our team brings technical backgrounds from leading universities and hands-on experience building scalable, production-grade systems.",
          icon: "rocket"
        },
        {
          title: "Global & Cross-Disciplinary",
          description: "We operate across the U.S. and China, combining AI, design, and operations expertise to move fast and deliver impact.",
          icon: "shield"
        }
      ]
    },
    founding: {
      title: "Founding Team",
      intro: "Our founding team comes from:",
      bullets: [
        "Cornell University",
        "UC San Diego (Computer Engineering & Economics)",
        "Fudan University (Computer Science)",
        "University of Waterloo",
        "Experience in AI engineering, backend systems, product development, and research workflows",
        "Previously worked on machine learning, distributed systems, user research, and cross-border tech products"
      ],
      closing: "We are expanding our core team as we develop AuthenlyUSA and our broader product ecosystem."
    },
    advisors: {
      title: "Advisors & Collaborators",
      description: "We actively collaborate with researchers, engineers, and industry professionals across:",
      areas: [
        "Artificial intelligence",
        "Verification and compliance",
        "Research methodology",
        "Cross-border operations",
        "UI/UX and product strategy"
      ],
      closing: "This network helps us validate ideas quickly, refine product direction, and ensure we build solutions that truly matter."
    },
    opportunities: {
      title: "Join Our Team",
      description: "We work with talented students and early-career developers who want hands-on experience in:",
      roles: [
        "AI product development",
        "Backend engineering",
        "Research operations",
        "Product design and UX",
        "Global tech operations (U.S. + China)"
      ],
      closing: "Interns contribute directly to our MVPs, learn rapidly, and help shape the future of Transnode.",
      button: "Join Us"
    }
  },
  careers: {
    title: "Interns & Contributors Welcome",
    description: "We offer hands-on experience in AI, data, software engineering, and product design. Perfect for students seeking real-world projects and portfolio development. Remote-friendly, project-based, flexible schedules.",
    btnApply: "Apply as Intern",
    btnStudent: "For UCSD Students → Direct Contact"
  },
  contact: {
    tagline: "Get in Touch",
    title: "Contact Us",
    description: "Whether you are a student looking for opportunities, a researcher seeking collaboration, or an investor interested in our vision, we would love to hear from you.",
    emailTitle: "Email Us",
    emailDesc: "For general inquiries, partnerships, and support.",
    locationTitle: "Headquarters",
    locationDesc: "San Diego, California",
    socialTitle: "Connect on Social Media",
    socialDesc: "Follow our journey, get the latest updates on our product launches, and join our growing community of innovators.",
    socialPlatforms: {
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
      discord: "Discord",
      other: "Other"
    },
    discordFeedback: "Join our Discord for internal feedback as our beloved users and stay tuned for fans events",
    discordJoin: "Join Discord",
    discordTitle: "Discord Community",
    formTitle: "Send a Message",
    formName: "Your Name",
    formEmail: "Email Address",
    formSubject: "Subject",
    formMessage: "Message",
    formButton: "Send Message",
    sentTitle: "Message Sent!",
    sentDesc: "We'll get back to you shortly.",
    investorTitle: "Investors?",
    investorDesc: "Subscribe to us on",
    newsletterTitle: "Subscribe to our Newsletter",
    newsletterSubtitle: "Stay updated with our latest news and products.",
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How do you ensure data privacy with AI models?",
        answer: "We strictly adhere to GDPR and CCPA standards. Data is anonymized and encrypted at rest and in transit to ensure user privacy is never compromised."
      },
      {
        question: "Do you offer API access for developers?",
        answer: "We are currently in private beta. You can request early access via our Products page to integrate our technology into your own platforms."
      },
      {
        question: "How accurate is the verification model?",
        answer: "Our multi-modal verification system achieves over 98% accuracy in document verification and deepfake detection benchmarks."
      },
      {
        question: "Can I use your tools for academic research?",
        answer: "Yes, we offer special licenses and collaborative opportunities for academic institutions and individual researchers."
      },
      {
        question: "What is the current status of the startup and how can volunteers get involved?",
        answer: "We are currently in the beta testing phase with live pilot programs. We welcome volunteers and interns to join our engineering and research teams to help scale our impact and refine our core algorithms."
      },
      {
        question: "What is the long-term impact vision for investors?",
        answer: "Our goal is to become the global standard for AI-verified academic and professional identity. By bridging the gap between education and employment, we aim to reduce hiring friction and unlock billions in economic value."
      }
    ]
  },
  legalPage: {
    title: "Legal Information",
    updated: "Last Updated: November 28, 2025",
    sidebar: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      confidentiality: "Confidentiality"
    },
    privacy: {
      title: "Privacy Policy",
      content: [
        "TRANSNODE AI, LLC PRIVACY POLICY",
        "1. INTRODUCTION",
        "Transnode AI, LLC ('Transnode', 'we', 'us', or 'our') respects your privacy and is committed to protecting your personal data. This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our website, transnode.ai, and our associated products including AuthenlyUSA and AI Edu (collectively, the 'Services'). By accessing or using our Services, you agree to the collection and use of information in accordance with this policy.",
        "2. INFORMATION WE COLLECT",
        "We collect several different types of information for various purposes to provide and improve our Services to you:",
        "a. Personal Identification Information: When you register for our Services, request information, or subscribe to our materials, we may ask you to provide certain personally identifiable information, including but not limited to: Email address, First and last name, Phone number, Address, State, Province, ZIP/Postal code, City.",
        "b. Verification Data (AuthenlyUSA): To provide credibility and verification services, we may collect and process sensitive information such as government-issued identification documents, academic transcripts, professional certifications, and biometric data (specifically facial scans for identity matching). This data is processed strictly for the purpose of verification and is handled with the highest level of security.",
        "c. Academic and Career Data (AI Edu): We collect information regarding your learning interests, academic history, and goals to facilitate accurate matching and personalized learning paths.",
        "d. Account and Authentication Data (Earnie): When you access or interact with Earnie or related services, we may collect account-related information necessary to authenticate and manage your access. This may include your username, email address, and securely stored authentication credentials. If you choose to sign in using third-party authentication providers such as Google or Apple (OAuth), we may receive limited profile information (such as your name, email address, and unique account identifier) as permitted by those providers. We do not receive or store your third-party account passwords. All authentication data is processed securely and used solely for account access, security, and service functionality.",
        "e. Usage Data: We may also collect information on how the Service is accessed and used ('Usage Data'). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.",
        "3. HOW WE USE YOUR INFORMATION",
        "Transnode AI, LLC uses the collected data for the following purposes:",
        "• To provide and maintain our Services, including the verification of credentials and facilitation of learning tools.",
        "• To notify you about changes to our Services.",
        "• To allow you to participate in interactive features of our Services when you choose to do so.",
        "• To provide customer support and respond to your inquiries.",
        "• To gather analysis or valuable information so that we can improve our Services.",
        "• To monitor the usage of our Services.",
        "• To detect, prevent, and address technical issues and fraud.",
        "4. DATA RETENTION",
        "Transnode AI, LLC will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies. Verification data is retained only for the duration required to complete the verification process and for audit trails as mandated by law, after which it is securely archived or deleted.",
        "5. TRANSFER OF DATA",
        "Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. Specifically, as a company bridging U.S. and global markets, data may be transferred between our operating regions. Transnode takes all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.",
        "6. DISCLOSURE OF DATA",
        "We may disclose your Personal Data in the good faith belief that such action is necessary to:",
        "• To comply with a legal obligation.",
        "• To protect and defend the rights or property of Transnode AI, LLC.",
        "• To prevent or investigate possible wrongdoing in connection with the Service.",
        "• To protect the personal safety of users of the Service or the public.",
        "• To protect against legal liability.",
        "7. SECURITY OF DATA",
        "The security of your data is important to us. We utilize industry-standard encryption protocols (TLS/SSL) for data in transit and AES-256 encryption for data at rest. However, please remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
        "8. YOUR DATA PROTECTION RIGHTS",
        "Depending on your location, you may have the following rights regarding your personal data:",
        "• The right to access, update, or delete the information we have on you.",
        "• The right of rectification.",
        "• The right to object.",
        "• The right of restriction.",
        "• The right to data portability.",
        "• The right to withdraw consent.",
        "If you wish to exercise any of these rights, please contact us at legal@transnode.ai.",
        "9. CONTACT US",
        "If you wish to exercise any of these rights, including requesting deletion of your data, please contact us at legal@transnode.ai.",
        "Upon receiving a verified request, we will delete or anonymize your personal data within a reasonable timeframe, unless retention is required to comply with legal obligations, resolve disputes, enforce agreements, or maintain security and fraud prevention measures."
      ]
    },
    terms: {
      title: "Terms of Service",
      content: [
        "TRANSNODE AI, LLC LICENSED APPLICATION END USER LICENSE AGREEMENT",
        "1. ACKNOWLEDGMENT: This license is between you and Transnode AI, LLC. Apple is not responsible for the application or its content.",
        "2. SCOPE OF LICENSE: We grant you a non-transferable license to use the application on any Apple-branded products that you own or control as permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions.",
        "3. CONSENT TO USE OF DATA: You agree that we may collect and use technical data and related information to facilitate the provision of software updates, product support, and other services to you.",
        "4. TERMINATION: The license is effective until terminated by you or us. Your rights under this license will terminate automatically if you fail to comply with any of its terms.",
        "5. EXTERNAL SERVICES: The application may enable access to our and/or third-party services and websites. Use of External Services requires Internet access and acceptance of additional terms.",
        "6. NO WARRANTY: TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APPLICATION IS PROVIDED 'AS IS' AND 'AS AVAILABLE', WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND.",
        "7. LIMITATION OF LIABILITY: TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR PERSONAL INJURY OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER.",
        "8. LEGAL COMPLIANCE: You represent and warrant that (i) you are not located in a country that is subject to a U.S. Government embargo, and (ii) you are not listed on any U.S. Government list of prohibited or restricted parties.",
        "9. GOVERNING LAW: The laws of the State of California, excluding its conflicts of law rules, govern this license and your use of the application.",
        "10. COMPANY-WIDE POLICY: These terms and policies apply to all products developed by Transnode AI, LLC, including but not limited to AuthenlyUSA, AI Edu, Transeed, and the Earnie app.",
        "11. SUBSCRIPTIONS AND IN-APP PURCHASES: Transnode offers optional in-app purchases and subscription plans. All purchases are processed through either the Apple App Store or Google Play, depending on your device. By making a purchase, you agree to the store’s terms and billing policies. To manage or cancel your subscription, use your App Store or Google Play account settings.",
        "12. CONTACT: For questions regarding these Terms, please contact legal@transnode.ai."
      ]
    },
    confidentiality: {
      title: "Confidentiality & Security Agreement",
      content: [
        "1. DEFINITION OF CONFIDENTIAL INFORMATION",
        "'Confidential Information' means all non-public information disclosed by Transnode AI, LLC ('Disclosing Party') to the user or partner ('Receiving Party'), or vice versa, whether orally or in writing, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.",
        "Transnode's Confidential Information specifically includes, but is not limited to: proprietary AI algorithms, model weights, training datasets, source code, product roadmaps, business plans, financial projections, customer lists, and industry-specific insights generated via our products.",
        "2. OBLIGATIONS OF THE RECEIVING PARTY",
        "The Receiving Party agrees to: (i) hold all Confidential Information in strict confidence and not disclose it to any third party except as specifically authorized herein; (ii) use the Confidential Information solely for the purpose of using the Service or evaluating a potential business relationship with Transnode; and (iii) use at least the same degree of care to protect the Confidential Information as it uses to protect its own most confidential information, but in no event less than a reasonable degree of care.",
        "3. PROTECTION OF USER DATA",
        "Transnode AI, LLC acknowledges that students and professionals using our platform may upload data, credentials, and portfolios. Transnode agrees to treat all such user-generated content as Confidential Information. We will not sell, license, or share this data with third parties for marketing purposes. We not use this data to train public-facing foundational models without explicit, written consent from the user.",
        "4. EXCEPTIONS",
        "Confidential Information shall not include any information that: (i) is or becomes generally known to the public without breach of any obligation owed to the Disclosing Party; (ii) was known to the Receiving Party prior to its disclosure by the Disclosing Party; (iii) is received from a third party without breach of any obligation owed to the Disclosing Party; or (iv) was independently developed by the Receiving Party without use of or reference to the Disclosing Party's Confidential Information.",
        "5. COMPELLED DISCLOSURE",
        "The Receiving Party may disclose Confidential Information to the extent compelled by law, regulation, or court order, provided the Receiving Party gives the Disclosing Party prior notice of the compelled disclosure (to the extent legally permitted) and reasonable assistance, at the Disclosing Party's cost, if the Disclosing Party wishes to contest the disclosure.",
        "6. RETURN OR DESTRUCTION OF INFORMATION",
        "Upon termination of the user's account or upon written request by the Disclosing Party, the Receiving Party shall promptly return or destroy all copies of the Confidential Information in its possession or control and certify in writing that it has done so.",
        "7. REMEDIES",
        "The Receiving Party acknowledges that disclosure of Confidential Information may cause substantial harm to the Disclosing Party for which damages alone may not be a sufficient remedy. Therefore, the Disclosing Party shall be entitled to seek appropriate equitable relief, including injunctions, in addition to whatever other remedies it might have at law.",
        "8. DURATION",
        "The obligations of confidentiality under this Agreement shall survive the termination of your use of the Service and remain in effect for a period of five (5) years from the date of disclosure, or for trade secrets, for as long as such information remains a trade secret under applicable law."
      ]
    }
  },
  footer: {
    tagline: "Building the future of learning and career credibility through intelligent systems.",
    company: "Company",
    legal: "Legal",
    rights: "Transnode AI™, LLC. All rights reserved."
  }
};

const zh: ContentType = {
  nav: {
    focus: "核心领域",
    products: "产品",
    team: "团队",
    contact: "联系我们"
  },
  hero: {
    badge: "AI 助力全球影响力",
    headlineStart: "构建",
    headlineHighlight: "智能工具",
    headlineEnd: "赋能现代协作",
    subheadline: "Transnode AI, LLC 开发跨境 AI 产品，提升可信度、加速研究并在全球范围内简化工作流程——深受学生、研究人员和全球中小企业的信赖。",
    ctaPrimary: "加入早期体验",
    ctaSecondary: "投资者咨询",
    ctaCrowdfund: "1美元众筹致谢"
  },
  aiModels: {
    title: "基于领先的 AI 模型构建",
    partnerWith: "合作伙伴"
  },
  features: {
    title: "我们的核心领域",
    items: [
      {
        title: "AI 验证技术",
        description: "利用计算机视觉和 NLP 高精度验证证书、技能和职业里程碑。",
        challenge: "简历欺诈和未经验证的技能每年给公司造成数十亿美元的损失。",
        solution: "我们的多模态 AI 模型可即时验证文档并评估实践技能。"
      },
      {
        title: "AI 教育",
        description: "创建自适应学习环境，根据实时学生表现指标个性化内容交付。",
        challenge: "传统的“一刀切”教育模式无法有效解决个体学习差距。",
        solution: "自适应 AI 导师分析表现模式，提供个性化课程调整。"
      },
      {
        title: "AI 集成",
        description: "我们利用尖端的 AI 集成和多模态模型，确保为复杂的技术工作流程提供快速交付和高性能解决方案。",
        challenge: "零散的系统和过时的架构减慢了开发周期并阻碍了实时情报。",
        solution: "集成最先进的 LLM 和视觉模型，以加速上市时间和运营速度。"
      },
      {
        title: "AI 工作流优化",
        description: "利用自主代理自动化跨境商务和学术管理中的复杂运营工作流。",
        challenge: "跨境运营经常因语言障碍和复杂的合规文件而受阻。",
        solution: "自主代理处理翻译、调度和合规工作流。"
      }
    ]
  },
  trust: {
    title: "为什么学生、研究人员和企业信任我们",
    points: [
      "总部位于美国加州的 UCSD 和滑铁卢大学校友创立公司",
      "连接中美技术和研究生系统",
      "AI 优先的产品理念，具备道德保障",
      "承诺严格的数据隐私和保密性"
    ],
    nda: "所有项目合作均包含 NDA（保密协议）和安全数据处理实践。",
    collaborationTitle: "卓越协作",
    collaborationBadge: "已验证合作伙伴"
  },
  audience: {
    title: "我们服务于谁",
    subtitle: "赋能下一代研究人员、专业人士和全球创新者。",
    items: [
      { title: "学生", text: "寻求研究经验的本科生" },
      { title: "求职者", text: "提高简历可信度的早期职业人士" },
      { title: "HR 专业人士", text: "通过 AI 验证的候选人证书简化招聘流程" },
      { title: "中小企业", text: "拓展美国市场的跨境企业" }
    ]
  },
  products: {
    label: "创新管道",
    title: "我们正在构建什么（预览）",
    roadmapBtn: "查看路线图",
    items: [
      {
        name: "AuthenlyUSA",
        tagline: "可信度引擎",
        points: ["AI 可信度评分", "基于技能的验证任务", "个性化职业洞察"],
        betaLink: "https://www.authenlyusa.com",
        betaLinkText: "访问 Beta 网站",
        disclaimer: "Beta 版，仍在开发中"
      },
      {
        name: "Transeed",
        tagline: "解决家长对孩子屏幕时间问题困扰的 iOS 应用",
        points: ["集成 Apple Screen Time API 实现安全监控", "通过真实奖励激励数字化排毒", "家长与孩子协作的习惯养成模式"],
        betaLink: "https://apps.apple.com/us/app/transeed/id6758642616",
        betaLinkText: "在 App Store 下载 Beta 版",
        disclaimer: "最近发布",
        status: "最近发布"
      },
      {
        name: "网站开发服务与数字解决方案",
        tagline: "业务增长",
        points: ["Shopify", "B2B 落地页", "当地业务", "网站营销服务"]
      }
    ],
    waitlistBtn: "加入候补名单",
    quoteBtn: "索取报价",
    earlyAccessBtn: "当前 MVP 演示",
    roadmapTitle: "产品路线图",
    roadmapDesc: "我们的智能工具旨在通过验证、协作和市场准入赋能下一代专业人士。",
    pastProjectsTitle: "Client Success Portfolio",
    pastProjects: [
      {
        name: "Kergle Electronics Ecommerce Store",
        desc: "",
        link: "https://www.kergle.us",
        url: "www.kergle.us"
      },
      {
        name: "OnPrime Global Enterprise Company Site",
        desc: "",
        link: "https://www.onprimeglobal.com",
        url: "www.onprimeglobal.com"
      }
    ]
  },
  team: {
    hero: {
      title: "我们的团队",
      subheading: "我们的创始团队带来全球视野和来自康奈尔大学 (Cornell University)、加州大学圣地亚哥分校、滑铁卢大学和复旦大学等中美加顶尖机构的学术背景。我们结合 AI 系统、后端工程和研究运营方面的专业知识，为现代工作和验证构建可靠的智能工具。"
    },
    philosophy: {
      title: "我们的工作方式",
      items: [
        {
          title: "用户至上",
          description: "我们构建产品以解决学生、研究人员和专业人士在复杂工作流中遇到的实际问题。",
          icon: "compass"
        },
        {
          title: "工程驱动",
          description: "我们的团队拥有顶尖大学的技术背景，并在构建可扩展的生产级系统方面拥有实践经验。",
          icon: "rocket"
        },
        {
          title: "全球与跨学科",
          description: "我们跨中美运营，结合 AI、设计和运营专业知识，快速行动并交付影响力。",
          icon: "shield"
        }
      ]
    },
    founding: {
      title: "创始团队",
      intro: "我们的创始团队来自：",
      bullets: [
        "康奈尔大学 (Cornell University)",
        "加州大学圣地亚哥分校 (计算机工程与经济学)",
        "复旦大学 (计算机科学)",
        "滑铁卢大学 (University of Waterloo)",
        "在 AI 工程、后端系统、产品开发和研究工作流方面拥有经验",
        "曾从事机器学习、分布式 systems、用户研究和跨境科技产品工作"
      ],
      closing: "我们正在扩充核心团队，以开发 AuthenlyUSA 等产品。"
    },
    advisors: {
      title: "顾问与合作者",
      description: "我们积极与以下领域的研究人员、工程师 and 行业专业人士合作：",
      areas: [
        "人工智能",
        "验证与合规",
        "研究方法论",
        "跨境运营",
        "UI/UX 与产品战略"
      ],
      closing: "这个网络帮助我们快速验证想法，完善产品方向，并确保我们构建真正重要的解决方案。"
    },
    opportunities: {
      title: "加入我们的团队",
      description: "我们与有才华的学生和早期职业开发者合作，提供以下方面的实践经验：",
      roles: [
        "AI 产品开发",
        "后端工程",
        "研究运营",
        "产品设计与 UX",
        "全球科技运营 (美国 + 中国)"
      ],
      closing: "实习生直接参与我们的 MVP，快速学习，并帮助塑造 Transnode 的未来。",
      button: "加入我们"
    }
  },
  careers: {
    title: "欢迎实习生与贡献者",
    description: "我们提供 AI、数据、软件工程和 product 设计方面的实践经验。非常适合寻求真实项目和作品集发展的学生。支持远程、基于项目、灵活的时间安排。",
    btnApply: "申请实习",
    btnStudent: "UCSD 学生通道 → 直接联系"
  },
  contact: {
    tagline: "取得联系",
    title: "联系我们",
    description: "无论您是寻找机会的学生、寻求合作的研究人员，还是对我们愿景感兴趣的投资者，我们都希望能听到您的声音。",
    emailTitle: "给我们发邮件",
    emailDesc: "用于一般咨询、合作 and 支持。",
    locationTitle: "总部",
    locationDesc: "美国加利福尼亚州圣地亚哥",
    socialTitle: "在社交媒体上联系",
    socialDesc: "关注我们的旅程，获取产品发布的最新更新，并加入我们要不断壮大的创新者社区。",
    socialPlatforms: {
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
      discord: "Discord",
      other: "其他"
    },
    discordFeedback: "作为我们亲爱的用户加入我们的 Discord 进行内部反馈，并关注粉丝活动",
    discordJoin: "加入 Discord",
    discordTitle: "Discord 社区",
    formTitle: "Send a Message",
    formName: "您的姓名",
    formEmail: "电子邮件地址",
    formSubject: "主题",
    formMessage: "消息",
    formButton: "发送消息",
    sentTitle: "消息已发送！",
    sentDesc: "我们会尽快回复您。",
    investorTitle: "投资者？",
    investorDesc: "在 Crunchbase 上关注我们",
    newsletterTitle: "订阅我们的通讯",
    newsletterSubtitle: "随时了解我们的最新动态和产品。",
  },
  faq: {
    title: "常见问题",
    items: [
      {
        question: "你们如何利用 AI 模型确保数据隐私？",
        answer: "我们严格遵守 GDPR 和 CCPA 标准。数据在静态和传输过程中均经过匿名化和加密处理，以确保用户隐私不受侵犯。"
      },
      {
        question: "你们为开发者提供 API 访问权限吗？",
        answer: "我们目前处于内测阶段。您可以通过我们的产品页面申请早期访问，将我们的技术集成到您自己的平台中。"
      },
      {
        question: "验证模型的准确性如何？",
        answer: "我们的多模态验证系统在文档验证和深度伪造检测基准测试中达到了超过 98% 的准确率。"
      },
      {
        question: "我可以将你们的工具用于学术研究吗？",
        answer: "可以，我们为学术机构和个人研究人员提供特别许可和合作机会。"
      },
      {
        question: "初创公司目前的状况如何，志愿者如何参与？",
        answer: "我们目前处于带有现场试点项目的 Beta 测试阶段。我们欢迎志愿者和实习生加入我们的工程和研究团队，帮助扩大我们的影响力并完善我们的核心算法。"
      },
      {
        question: "对投资者的长期影响愿景是什么？",
        answer: "我们的目标是成为 AI 验证的学术和职业身份的全球标准。通过弥合教育和就业之间的差距，我们旨在减少招聘摩擦并释放数十亿美元的经济价值。"
      }
    ]
  },
  legalPage: {
    title: "法律信息",
    updated: "最后更新：2025年11月28日",
    sidebar: {
      privacy: "隐私政策",
      terms: "服务条款",
      confidentiality: "保密协议"
    },
    privacy: {
      title: "隐私政策",
      content: ["请参阅英文版以获取完整的法律约束条款。", "Transnode AI, LLC 尊重您的隐私..."]
    },
    terms: {
      title: "服务条款",
      content: [
        "请参阅英文版以获取完整的法律约束条款。",
        "Transnode AI, LLC 许可应用程序最终用户许可协议：",
        "1. 确认：本许可由您与 Transnode AI, LLC 签署。Apple 不对应用程序及其内容负责。",
        "2. 许可范围：我们授予您在您拥有或控制的任何 Apple 品牌产品上使用该应用程序的不可转让许可。",
        "3. 数据使用同意：您同意我们可以收集和使用技术数据及相关信息，以方便为您提供软件更新和产品支持。",
        "4. 终止：本许可在您或我们终止前一直有效。如果您未能遵守任何条款，您的权利将自动终止。",
        "5. 外部服务：应用程序可能允许访问我们和/或第三方的服务和网站。",
        "6. 无担保：在适用法律允许的最大范围内，应用程序按“原样”和“可用”状态提供。",
        "7. 责任限制：在法律不禁止的范围内，在任何情况下，我们均不对人身伤害或任何附带的、特殊的、间接的或后果性的损害负责。",
        "8. 法律合规性：您声明并保证您不在受美国政府禁运的国家，且未被列入任何美国政府禁止或限制方名单。",
        "9. 适用法律：加利福尼亚州法律（不包括其冲突法规则）管辖本许可及您对应用程序的使用。",
        "10. 公司范围政策：这些条款和政策适用于 Transnode AI, LLC 开发的所有产品，包括但不限于 AuthenlyUSA、AI Edu、Transeed 和 Earnie 应用程序。",
        "11. 订阅和应用内购买：Transnode 提供可选的应用内购买和订阅计划。所有购买均通过 Apple App Store 或 Google Play 处理，具体取决于您的设备。通过购买，您同意商店的条款和计费政策。要管理或取消您的订阅，请使用您的 App Store 或 Google Play 帐户设置。",
        "12. 联系方式：如有疑问，请联系 legal@transnode.ai。"
      ]
    },
    confidentiality: {
      title: "保密与安全协议",
      content: ["请参阅英文版以获取完整的法律约束条款。", "1. 保密信息的定义..."]
    }
  },
  footer: {
    tagline: "通过智能系统构建研究和职业可信度的未来。",
    company: "公司",
    legal: "法律",
    rights: "Transnode AI™, LLC. 保留所有权利。"
  }
};

const es: ContentType = {
  nav: {
    focus: "Áreas de Enfoque",
    products: "Productos",
    team: "Equipo",
    contact: "Contacto"
  },
  hero: {
    badge: "IA para Impacto Global",
    headlineStart: "Construyendo",
    headlineHighlight: "Herramientas Inteligentes",
    headlineEnd: "para la Colaboración Moderna.",
    subheadline: "Transnode AI, LLC desarrolla productos de IA transfronterizos que mejoran la credibilidad, aceleran la investigación y agilizan los flujos de trabajo, con la confianza de estudiantes, investigadores y PYMES globales.",
    ctaPrimary: "Acceso Anticipado",
    ctaSecondary: "Consulta de Inversores",
    ctaCrowdfund: "Crowdfunding de 1 Dólar"
  },
  aiModels: {
    title: "CONSTRUIDO SOBRE MODELOS DE IA LÍDERES",
    partnerWith: "En asociación con"
  },
  features: {
    title: "Nuestras Áreas de Enfoque",
    items: [
      {
        title: "Tecnología de Verificación IA",
        description: "Aprovechando la visión por computadora y PNL para validar credenciales y habilidades con alta precisión.",
        challenge: "El fraude en currículums y habilidades no verificadas cuestan miles de millones anualmente.",
        solution: "Nuestros modelos de IA multimodales verifican instantáneamente documentos y evalúan habilidades."
      },
      {
        title: "IA Educativa",
        description: "Creando entornos de aprendizaje adaptativos que personalizan la entrega de contenido.",
        challenge: "Los modelos educativos tradicionales no abordan las brechas de aprendizaje individuales.",
        solution: "Tutores de IA adaptativos analizan patrones de rendimiento para proporcionar un plan de estudios personalizado."
      },
      {
        title: "Integraciones de IA",
        description: "Aprovechamos las integraciones de IA de vanguardia y los modelos multimodales para garantizar una entrega rápida y soluciones técnicas de alto rendimiento.",
        challenge: "Los sistemas fragmentados y las arquitecturas obsoletas ralentizan los ciclos de desarrollo y evitan la inteligencia en tiempo real.",
        solution: "Integración de LLM y modelos de visión de última generación para acelerar el tiempo de comercialización y la velocidad operativa."
      },
      {
        title: "Optimización de Flujos de Trabajo",
        description: "Automatizando flujos de trabajo operativos complejos en el comercio transfronterizo y la administración académica.",
        challenge: "Las operaciones transfronterizas a menudo se ven obstaculizadas por barreras lingüísticas.",
        solution: "Agentes autónomos manejan traducción, programación y flujos de trabajo de cumplimiento."
      }
    ]
  },
  trust: {
    title: "Por qué confían en nosotros",
    points: [
      "Empresa con sede en EE. UU. fundada por exalumnos de UCSD y la Universidad de Waterloo",
      "Uniendo ecosistemas técnicos y de investigación de EE. UU. y China",
      "Filosofía de producto primero IA con salvaguardas éticas",
      "Compromiso con la estricta privacidad y confidencialidad de los datos"
    ],
    nda: "Todas las colaboraciones incluyen NDA y prácticas seguras de manejo de datos.",
    collaborationTitle: "Excelencia Colaborativa",
    collaborationBadge: "Asociaciones Verificadas"
  },
  audience: {
    title: "A quién ayudamos",
    subtitle: "Empoderando a la próxima generación de investigadores, profesionales e innovadores globales.",
    items: [
      { title: "Estudiantes", text: "Estudiantes de pregrado que buscan experiencia en investigación" },
      { title: "Buscadores de Empleo", text: "Profesionales que mejoran la credibilidad de su currículum" },
      { title: "Profesionales de RR.HH.", text: "Agilizando la contratación con credenciales verificadas por IA" },
      { title: "PYMES", text: "Empresas transfronterizas que se expanden a los EE. UU." }
    ]
  },
  products: {
    label: "Tubería de Innovación",
    title: "Lo Que Estamos Construyendo",
    roadmapBtn: "Ver Hoja de Ruta",
    items: [
      {
        name: "AuthenlyUSA",
        tagline: "Motor de Credibilidad",
        points: ["Puntuación de credibilidad IA", "Verificación de habilidades", "Información profesional personalizada"],
        betaLink: "https://www.authenlyusa.com",
        betaLinkText: "Visitar Sitio Web Beta",
        disclaimer: "Beta y aún en desarrollo"
      },
      {
        name: "Transeed",
        tagline: "App iOS para resolver el dolor de cabeza de los padres con el tiempo de pantalla de los niños",
        points: ["Integración con Apple Screen Time API para monitoreo seguro", "Desintoxicación digital incentivada con recompensas reales", "Creación de hábitos colaborativos entre padres e hijos"],
        betaLink: "https://apps.apple.com/us/app/transeed/id6758642616",
        betaLinkText: "Descargar Beta en App Store",
        disclaimer: "Lanzado Recientemente",
        status: "Lanzado Recientemente"
      },
      {
        name: "Servicio de Desarrollo Web y Soluciones Digitales",
        tagline: "Crecimiento Empresarial",
        points: ["Shopify", "Página de aterrizaje B2B", "Negocio local", "Servicios de Marketing Web"]
      }
    ],
    waitlistBtn: "Unirse a la Lista de Espera",
    quoteBtn: "Solicitar Presupuesto",
    earlyAccessBtn: "Presentación MVP Actual",
    roadmapTitle: "Hoja de Ruta del Producto",
    roadmapDesc: "Nuestras herramientas inteligentes están diseñadas para empoderar a la próxima generación de profesionales.",
    pastProjectsTitle: "Client Success Portfolio",
    pastProjects: [
      {
        name: "Kergle Electronics Ecommerce Store",
        desc: "",
        link: "https://www.kergle.us",
        url: "www.kergle.us"
      },
      {
        name: "OnPrime Global Enterprise Company Site",
        desc: "",
        link: "https://www.onprimeglobal.com",
        url: "www.onprimeglobal.com"
      }
    ]
  },
  team: {
    hero: {
      title: "Nuestro Equipo",
      subheading: "Nuestro equipo fundador aporta perspectivas globales y antecedentes académicos de las mejores instituciones de EE. UU., Canadá y China, como la Universidad de Cornell, UC San Diego, la Universidad de Waterloo y la Universidad de Fudan."
    },
    philosophy: {
      title: "Cómo Trabajamos",
      items: [
        {
          title: "Obsesionados con el Usuario",
          description: "Construimos productos que resuelven problemas reales.",
          icon: "compass"
        },
        {
          title: "Impulsados por la Ingeniería",
          description: "Nuestro equipo aporta experiencia técnica de universidades líderes.",
          icon: "rocket"
        },
        {
          title: "Global y Multidisciplinario",
          description: "Operamos en EE. UU. y China, combinando experiencia en IA y diseño.",
          icon: "shield"
        }
      ]
    },
    founding: {
      title: "Equipo Fundador",
      intro: "Nuestro equipo fundador proviene de:",
      bullets: [
        "Universidad de Cornell",
        "UC San Diego (Ingeniería Informática y Economía)",
        "Universidad de Fudan (Ciencias de la Computación)",
        "Universidad de Waterloo",
        "Experiencia en ingeniería de IA y sistemas backend",
        "Trabajo previo en aprendizaje automático y productos tecnológicos transfronterizos"
      ],
      closing: "Estamos expandiendo nuestro equipo central."
    },
    advisors: {
      title: "Asesores y Colaboradores",
      description: "Colaboramos activamente con investigadores e ingenieros en:",
      areas: [
        "Inteligencia Artificial",
        "Verificación y cumplimiento",
        "Metodología de investigación",
        "Operaciones transfronterizas",
        "Estrategia de producto"
      ],
      closing: "Esta red nos ayuda a validar ideas rápidamente."
    },
    opportunities: {
      title: "Únete a Nuestro Equipo",
      description: "Trabajamos con estudiantes talentosos y desarrolladores en:",
      roles: [
        "Desarrollo de productos de IA",
        "Ingeniería backend",
        "Operaciones de investigación",
        "Diseño de producto y UX",
        "Operaciones tecnológicas globales"
      ],
      closing: "Los pasantes contribuyen directamente a nuestros MVP.",
      button: "Únete a Nosotros"
    },
  },
  careers: {
    title: "Bienvenidos Pasantes y Colaboradores",
    description: "Ofrecemos experiencia práctica en IA, datos e ingeniería de software. Perfecto para estudiantes.",
    btnApply: "Aplicar como Pasante",
    btnStudent: "Para Estudiantes UCSD"
  },
  contact: {
    tagline: "Ponte en Contacto",
    title: "Contáctanos",
    description: "Ya seas estudiante, investigador o inversor, nos encantaría saber de ti.",
    emailTitle: "Envíanos un Correo",
    emailDesc: "Para consultas generales y asociaciones.",
    locationTitle: "Sede",
    locationDesc: "San Diego, California",
    socialTitle: "Conéctate en Redes Sociales",
    socialDesc: "Sigue nuestro viaje y obtén las últimas actualizaciones.",
    socialPlatforms: {
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
      discord: "Discord",
      other: "Otros"
    },
    discordFeedback: "Únete a nuestro Discord para comentarios internos como nuestros queridos usuarios y mantente atento a los eventos para fans",
    discordJoin: "Unirse a Discord",
    discordTitle: "Comunidad de Discord",
    formTitle: "Send a Message",
    formName: "Tu Nombre",
    formEmail: "Correo Electrónico",
    formSubject: "Asunto",
    formMessage: "Message",
    formButton: "Enviar Mensaje",
    sentTitle: "¡Mensaje Enviado!",
    sentDesc: "Te responderemos en breve.",
    investorTitle: "¿Inversores?",
    investorDesc: "Síguenos en Crunchbase",
    newsletterTitle: "Suscríbete a nuestro boletín",
    newsletterSubtitle: "Mantente al día con nuestras últimas noticias y productos.",
  },
  faq: {
    title: "Preguntas Frecuentes",
    items: [
      {
        question: "¿Cómo garantizan la privacidad de los datos?",
        answer: "Nos adherimos estrictamente a los estándares GDPR y CCPA."
      },
      {
        question: "¿Ofrecen acceso API?",
        answer: "Actualmente estamos en beta privada."
      },
      {
        question: "¿Qué tan preciso es el modelo?",
        answer: "Nuestro sistema logra más del 98% de precisión."
      },
      {
        question: "¿Puedo usar sus herramientas para investigación?",
        answer: "Sí, ofrecemos licencias especiales."
      },
      {
        question: "¿Cuál es el estado actual de la startup?",
        answer: "Estamos en fase de prueba beta."
      },
      {
        question: "¿Cuál es la visión a largo plazo?",
        answer: "Convertirnos en el estándar global para la identidad académica verificada por IA."
      }
    ]
  },
  legalPage: {
    title: "Información Legal",
    updated: "Última Actualización: 28 de Noviembre de 2025",
    sidebar: {
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      confidentiality: "Confidencialidad"
    },
    privacy: {
      title: "Política de Privacidad",
      content: ["Consulte la versión en inglés para conocer los términos legales completos.", "Transnode AI, LLC respeta su privacidad..."]
    },
    terms: {
      title: "Términos de Servicio",
      content: [
        "Consulte la versión en inglés para conocer los términos legales completos.",
        "ACUERDO DE LICENCIA DE USUARIO FINAL DE LA APLICACIÓN LICENCIADA DE TRANSNODE AI, LLC:",
        "1. RECONOCIMIENTO: Esta licencia es entre usted y Transnode AI, LLC. Apple no es responsable de la aplicación ni de su contenido.",
        "2. ALCANCE DE LA LICENCIA: Le otorgamos una licencia no transferible para usar la aplicación en cualquier producto de la marca Apple que posea o controle.",
        "3. CONSENTIMIENTO PARA EL USO DE DATOS: Usted acepta que podemos recopilar y utilizar datos técnicos e información relacionada para facilitar la prestación de actualizaciones de software y soporte de productos.",
        "4. TERMINACIÓN: La licencia es efectiva hasta que usted o nosotros la rescindan. Sus derechos bajo esta licencia terminarán automáticamente si no cumple con cualquiera de sus términos.",
        "5. SERVICIOS EXTERNOS: La aplicación puede permitir el acceso a nuestros servicios y sitios web y/o de terceros.",
        "6. SIN GARANTÍA: EN LA MEDIDA MÁXIMA PERMITIDA POR LA LEY APLICABLE, LA APLICACIÓN SE PROPORCIONA 'TAL CUAL' Y 'SEGÚN DISPONIBILIDAD'.",
        "7. LIMITACIÓN DE RESPONSABILIDAD: EN LA MEDIDA EN QUE LA LEY NO LO PROHÍBA, EN NINGÚN CASO SEREMOS RESPONSABLES POR LESIONES PERSONALES O CUALQUIER DAÑO INCIDENTAL, ESPECIAL, INDIRECTO O CONSECUENTE.",
        "8. CUMPLIMIENTO LEGAL: Usted declara y garantiza que (i) no se encuentra en un país sujeto a un embargo del Gobierno de los EE. UU. y (ii) no figura en ninguna lista del Gobierno de los EE. UU. de partes prohibidas o restringidas.",
        "9. LEY APLICABLE: Las leyes del Estado de California rigen esta licencia y su uso de la aplicación.",
        "10. POLÍTICA DE TODA LA EMPRESA: Estos términos y políticas se aplican a todos los productos desarrollados por Transnode AI, LLC, incluidos, entre otros, AuthenlyUSA, AI Edu, Transeed y la aplicación Earnie.",
        "11. SUSCRIPCIONES Y COMPRAS DENTRO DE LA APLICACIÓN: Transnode ofrece compras opcionales dentro de la aplicación y planes de suscripción. Todas las compras se procesan a través de Apple App Store o Google Play, según su dispositivo. Al realizar una compra, usted acepta los términos y las políticas de facturación de la tienda. Para administrar o cancelar su suscripción, use la configuración de su cuenta de App Store o Google Play.",
        "12. CONTACTO: Para preguntas, contáctenos en legal@transnode.ai."
      ]
    },
    confidentiality: {
      title: "Acuerdo de Confidencialidad",
      content: ["Consulte la versión en inglés para conocer los términos legales completos.", "1. DEFINICIÓN DE INFORMACIÓN CONFIDENCIAL..."]
    }
  },
  footer: {
    tagline: "Construyendo el futuro de la credibilidad investigadora.",
    company: "Empresa",
    legal: "Legal",
    rights: "Transnode AI™, LLC. Todos los derechos reservados."
  }
};

const ko: ContentType = {
  nav: {
    focus: "핵심 분야",
    products: "제품",
    team: "팀",
    contact: "문의하기"
  },
  hero: {
    badge: "글로벌 임팩트를 위한 AI",
    headlineStart: "구축",
    headlineHighlight: "지능형 도구",
    headlineEnd: "현대적 협업을 위한",
    subheadline: "Transnode AI, LLC는 신뢰성을 높이고 연구를 가속화하며 워크플로를 간소화하는 국경 간 AI 제품을 개발합니다.",
    ctaPrimary: "초기 액세스 참여",
    ctaSecondary: "투자자 문의",
    ctaCrowdfund: "1달러 크라우드펀딩 감사"
  },
  aiModels: {
    title: "선도적인 AI 모델 기반 구축",
    partnerWith: "협력 파트너"
  },
  features: {
    title: "우리의 핵심 분야",
    items: [
      {
        title: "AI 검증 기술",
        description: "컴퓨터 비전과 NLP를 활용하여 자격 증명, 기술 및 전문 경력을 높은 정확도로 검증합니다.",
        challenge: "이력서 위조 및 검증되지 않은 기술은 기업에 막대한 비용을 초래합니다.",
        solution: "우리의 멀티모달 AI 모델은 문서를 즉시 검증하고 실무 기술을 평가합니다."
      },
      {
        title: "AI 교육",
        description: "실시간 학생 성과 지표를 기반으로 콘텐츠 전달을 개인화하는 적응형 학습 환경을 조성합니다.",
        challenge: "전통적인 교육 모델은 개별 학습 격차를 효과적으로 해결하지 못합니다.",
        solution: "적응형 AI 튜터가 성과 패턴을 분석하여 맞춤형 커리큘럼을 제공합니다."
      },
      {
        title: "AI 통합",
        description: "최첨단 AI 통합 및 멀티모달 모델을 활용하여 가장 빠른 제공과 고성능 기술 솔루션을 보장합니다.",
        challenge: "파편화된 시스템과 오래된 아키텍처는 개발 주기를 늦추고 실시간 지능을 방해합니다.",
        solution: "최신 LLM 및 비전 모델을 통합하여 시장 출시 기간과 운영 속도를 가속화합니다."
      },
      {
        title: "AI 워크플로우 최적화",
        description: "자율 에이전트를 사용하여 국경 간 상거래 및 학사 관리의 복잡한 운영 워크플로를 자동화합니다.",
        challenge: "국경 간 운영은 언어 장벽과 복잡한 규정 준수로 인해 종종 지연됩니다.",
        solution: "자율 에이전트가 번역, 일정 관리 및 규정 준수 워크플로를 처리합니다."
      }
    ]
  },
  trust: {
    title: "신뢰하는 이유",
    points: [
      "캘리포니아 UCSD 및 워털루 대학교(University of Waterloo) 동문이 설립한 미국 기반 회사",
      "미국-중국 기술 및 연구 생태계 연결",
      "윤리적 안전장치를 갖춘 AI 우선 제품 철학",
      "엄격한 데이터 개인 정보 보호 및 기밀 유지 약속"
    ],
    nda: "모든 프로젝트 협업에는 NDA(기밀 유지 계약) 및 보안 데이터 처리 관행이 포함됩니다.",
    collaborationTitle: "협업의 우수성",
    collaborationBadge: "검증된 파트너십"
  },
  audience: {
    title: "우리의 대상",
    subtitle: "차세대 연구원, 전문가 및 글로벌 혁신가에게 권한 부여.",
    items: [
      { title: "학생", text: "연구 경험을 원하는 학부생" },
      { title: "구직자", text: "이력서 신뢰성을 높이는 초기 경력 전문가" },
      { title: "HR 전문가", text: "AI로 검증된 자격 증명을 통해 채용 프로세스 간소화" },
      { title: "중소기업", text: "미국으로 확장하는 국경 간 기업" }
    ]
  },
  products: {
    label: "혁신 파이프라인",
    title: "우리가 만들고 있는 것",
    roadmapBtn: "로드맵 보기",
    items: [
      {
        name: "AuthenlyUSA",
        tagline: "신뢰성 엔진",
        points: ["AI 신뢰성 점수", "기술 기반 검증 과제", "개인화된 진로 통찰력"],
        betaLink: "https://www.authenlyusa.com",
        betaLinkText: "베타 웹사이트 방문",
        disclaimer: "베타 버전이며 아직 개발 중입니다"
      },
      {
        name: "Transeed",
        tagline: "자녀의 스크린 타임 문제로 인한 부모의 고민을 해결하는 iOS 앱",
        points: ["안전한 모니터링을 위한 Apple Screen Time API 통합", "실질적인 보상을 통한 디지털 디톡스 유도", "부모와 자녀가 함께하는 협력적 습관 형성"],
        betaLink: "https://apps.apple.com/us/app/transeed/id6758642616",
        betaLinkText: "App Store에서 베타 다운로드",
        disclaimer: "최근 출시됨",
        status: "최근 출시됨"
      },
      {
        name: "웹 개발 서비스 및 디지털 솔루션",
        tagline: "비즈니스 성장",
        points: ["Shopify", "B2B 랜딩 페이지", "현지 비즈니스", "웹사이트 마케팅 서비스"]
      }
    ],
    waitlistBtn: "대기자 명단 가입",
    quoteBtn: "견적 요청",
    earlyAccessBtn: "현재 MVP 프레젠테이션",
    roadmapTitle: "제품 로드맵",
    roadmapDesc: "우리의 지능형 도구는 차세대 전문가에게 권한을 부여하도록 설계되었습니다.",
    pastProjectsTitle: "Client Success Portfolio",
    pastProjects: [
      {
        name: "Kergle Electronics Ecommerce Store",
        desc: "",
        link: "https://www.kergle.us",
        url: "www.kergle.us"
      },
      {
        name: "OnPrime Global Enterprise Company Site",
        desc: "",
        link: "https://www.onprimeglobal.com",
        url: "www.onprimeglobal.com"
      }
    ]
  },
  team: {
    hero: {
      title: "우리 팀",
      subheading: "창립 팀은 코넬 대학교(Cornell University), UC San Diego, 워털루 대학교(University of Waterloo) 및 복단대학교(Fudan University)와 같은 미국, 캐나다 및 중국 최고의 기관에서 글로벌 관점과 학문적 배경을 제공합니다."
    },
    philosophy: {
      title: "우리의 업무 방식",
      items: [
        {
          title: "사용자 집착",
          description: "우리는 실제 문제를 해결하는 제품을 만듭니다.",
          icon: "compass"
        },
        {
          title: "엔지니어링 주도",
          description: "우리 팀은 선도적인 대학의 기술적 배경을 가지고 있습니다.",
          icon: "rocket"
        },
        {
          title: "글로벌 및 학제 간",
          description: "우리는 미국과 중국 전역에서 운영되며 AI와 디자인 전문 지식을 결합합니다.",
          icon: "shield"
        }
      ]
    },
    founding: {
      title: "창립 팀",
      intro: "창립 팀 출신:",
      bullets: [
        "코넬 대학교 (Cornell University)",
        "UC San Diego (컴퓨터 공학 및 경제학)",
        "Fudan University (컴퓨터 과학)",
        "워털루 대학교 (University of Waterloo)",
        "AI 엔지니어링 및 백엔드 시스템 경험",
        "머신 러닝 및 국경 간 기술 제품 경험"
      ],
      closing: "우리는 핵심 팀을 확장하고 있습니다."
    },
    advisors: {
      title: "자문 및 협력자",
      description: "우리는 다음 분야의 연구원 및 엔지니어와 적극적으로 협력합니다:",
      areas: [
        "인공 지능",
        "검증 및 규정 준수",
        "연구 방법론",
        "국경 간 운영",
        "UI/UX 및 제품 전략"
      ],
      closing: "이 네트워크는 아이디어를 빠르게 검증하는 데 도움이 됩니다."
    },
    opportunities: {
      title: "팀에 합류하세요",
      description: "우리는 재능 있는 학생들과 함께 다음 분야에서 일합니다:",
      roles: [
        "AI 제품 개발",
        "백엔드 엔지니어링",
        "연구 운영",
        "제품 디자인 및 UX",
        "글로벌 기술 운영"
      ],
      closing: "인턴은 MVP에 직접 기여합니다.",
      button: "함께하기"
    }
  },
  careers: {
    title: "인턴 및 기여자 환영",
    description: "AI, 데이터, 소프트웨어 엔지니어링 실무 경험을 제공합니다.",
    btnApply: "인턴 지원",
    btnStudent: "Direct Contact"
  },
  contact: {
    tagline: "연락하기",
    title: "문의하기",
    description: "학생, 연구원, 투자자 모두의 연락을 환영합니다.",
    emailTitle: "이메일 보내기",
    emailDesc: "일반 문의 및 제휴.",
    locationTitle: "본사",
    locationDesc: "캘리포니아 샌디에이고",
    socialTitle: "소셜 미디어 연결",
    socialDesc: "우리의 여정을 팔로우하고 최신 업데이트를 받으세요.",
    socialPlatforms: {
      linkedin: "LinkedIn",
      twitter: "X (Twitter)",
      instagram: "Instagram",
      tiktok: "TikTok",
      youtube: "YouTube",
      discord: "Discord",
      other: "기타"
    },
    discordFeedback: "사랑하는 사용자로써 내부 피드백을 위해 Discord에 가입하고 팬 이벤트를 기대해 주세요",
    discordJoin: "디스코드 가입",
    discordTitle: "디스코드 커뮤니티",
    formTitle: "Send a Message",
    formName: "이름",
    formEmail: "이메일 주소",
    formSubject: "주제",
    formMessage: "메시지",
    formButton: "메시지 보내기",
    sentTitle: "메시지 전송됨!",
    sentDesc: "곧 답변 드리겠습니다.",
    investorTitle: "투자자?",
    investorDesc: "Crunchbase에서 팔로우",
    newsletterTitle: "뉴스레터 구독",
    newsletterSubtitle: "최신 뉴스 및 제품 정보를 받아보세요.",
  },
  faq: {
    title: "자주 묻는 질문",
    items: [
      {
        question: "데이터 개인 정보 보호는 어떻게 보장합니까?",
        answer: "우리는 GDPR 및 CCPA 표준을 엄격히 준수합니다."
      },
      {
        question: "API 액세스를 제공합니까?",
        answer: "현재 비공개 베타 버전입니다."
      },
      {
        question: "모델의 정확도는 얼마나 됩니까?",
        answer: "우리의 시스템은 98% 이상의 정확도를 달성합니다."
      },
      {
        question: "학술 연구에 도구를 사용할 수 있습니까?",
        answer: "예, 특별 라이선스를 제공합니다."
      },
      {
        question: "스타트업의 현재 상태는 어떠합니까?",
        answer: "우리는 현재 베타 테스트 단계에 있습니다."
      },
      {
        question: "장기적인 비전은 무엇입니까?",
        answer: "AI 검증 학술 및 전문 신원의 글로벌 표준이 되는 것입니다."
      }
    ]
  },
  legalPage: {
    title: "법적 정보",
    updated: "마지막 업데이트: 2025년 11월 28일",
    sidebar: {
      privacy: "개인 정보 보호 정책",
      terms: "서비스 약관",
      confidentiality: "기밀 유지"
    },
    privacy: {
      title: "개인 정보 보호 정책",
      content: ["전체 법적 구속력이 있는 조항은 영문 버전을 참조하십시오.", "Transnode AI, LLC는 귀하의 개인 정보를 존중합니다..."]
    },
    terms: {
      title: "서비스 약관",
      content: [
        "전체 법적 구속력이 있는 조항은 영문 버전을 참조하십시오.",
        "TRANSNODE AI, LLC 라이선스 애플리케이션 최종 사용자 라이선스 계약:",
        "1. 승인: 이 라이선스는 귀하와 Transnode AI, LLC 간의 계약입니다. Apple은 애플리케이션이나 그 콘텐츠에 대해 책임을 지지 않습니다.",
        "2. 라이선스 범위: 당사는 귀하가 소유하거나 제어하는 모든 Apple 브랜드 제품에서 애플리케이션을 사용할 수 있는 양도 불가능한 라이선스를 귀하에게 부여합니다.",
        "3. 데이터 사용 동의: 귀하는 당사가 소프트웨어 업데이트 및 제품 지원을 용이하게 하기 위해 기술 데이터 및 관련 정보를 수집하고 사용할 수 있음에 동의합니다.",
        "4. 종료: 라이선스는 귀하 또는 당사가 종료할 때까지 유효합니다. 귀하가 약관을 준수하지 않을 경우 귀하의 권리는 자동으로 종료됩니다.",
        "5. 외부 서비스: 애플리케이션은 당사 및/또는 제3자의 서비스 및 웹사이트에 대한 액세스를 활성화할 수 있습니다.",
        "6. 보증 없음: 관련 법률이 허용하는 최대 범위 내에서 애플리케이션은 '있는 그대로' 및 '사용 가능한 상태로' 제공됩니다.",
        "7. 책임 제한: 법률이 금지하지 않는 범위 내에서 당사는 어떠한 경우에도 인명 피해나 부수적, 특별, 간접적 또는 결과적 손해에 대해 책임을 지지 않습니다.",
        "8. 법적 준수: 귀하는 (i) 미국 정부의 금수 조치 대상 국가에 거주하지 않으며, (ii) 미국 정부의 금지 또는 제한 대상 목록에 올라 있지 않음을 진술하고 보증합니다.",
        "9. 준거법: 캘리포니아 주 법률이 이 라이선스와 귀하의 애플리케이션 사용을 규정합니다.",
        "10. 전사적 정책: 이 약관 및 정책은 AuthenlyUSA, AI Edu, Transeed 및 Earnie 앱을 포함하되 이에 국한되지 않는 Transnode AI, LLC가 개발한 모든 제품에 적용됩니다.",
        "11. 구독 및 인앱 구매: Transnode는 선택적 인앱 구매 및 구독 플랜을 제공합니다. 모든 구매는 장치에 따라 Apple App Store 또는 Google Play를 통해 처리됩니다. 구매함으로써 귀하는 해당 스토어의 약관 및 결제 정책에 동의하게 됩니다. 구독을 관리하거나 취소하려면 App Store 또는 Google Play 계정 설정을 사용하십시오.",
        "12. 문의: 문의 사항은 legal@transnode.ai로 연락주시기 바랍니다."
      ]
    },
    confidentiality: {
      title: "기밀 유지 및 보안 계약",
      content: ["전체 법적 구속력이 있는 조항은 영문 버전을 참조하십시오.", "1. 기밀 정보의 정의..."]
    }
  },
  footer: {
    tagline: "지능형 시스템을 통한 연구 및 경력 신뢰성의 미래 구축.",
    company: "회사",
    legal: "법적",
    rights: "Transnode AI™, LLC. 판권 소유."
  }
};

export const translations = { en, zh, es, ko };
