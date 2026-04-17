import Icon from '@/components/icons/Icon'
import { Navbartype } from '@/types/types'
export const navData:Navbartype[]=[
    {name:'Home',path:'/',icon:<Icon name='HomeIcon'/>},
    {name:'About',path:'/about',icon:<Icon name='userIcon'/>},
    {name:'Services',path:'/services',icon:<Icon name='servicesIcon'/>},
    {name:'Work',path:'/work',icon:<Icon name='workicon'/>},
    {name:'Testimonials',path:'/testimonials',icon:<Icon name='testimonials'/>},
    {name:'Contact',path:'/contact',icon:<Icon name='contactIcon'/>}
]

export const aboutSectionList=[
{title:"Skills", subTitle:[{subT:"Web Developer (Front End)",icon:["htmlIcon","cssIcon","jsIcon","reactIcon","nextJsIcon","vueJsIcon","tanstackQueryIcon","reduxIcon"]},{subT:"Web Developer (Back End)",icon:["nodeJsIcon","expressJsIcon","nestJs","postgreSqlIcon","mongoDBIcon","prismaIcon"]}]}, 
// {title:"Certificates",subTitle:"Web Developer Diploma", stage:"2011"}, 
{title:"Experience", subTitle:[{subT:"Web Developer",insti:" Crexed",stage:"2021 - 2023"},{subT:"Front End Team Leader",insti:" Crexed",stage:"2023 - Present"}]},
 {title:"Credentials", subTitle:[{subT:"Web Developer Diploma",insti:"Islamia University BWP",stage:'2012'},{subT:"Google IT Automation with Python",insti:"Google",stage:'2023'},{subT:"BS Computer Science",insti:"Virtual University Pakistan",stage:'2024'}]}
]

export const services=[
      {
        "name": "Frontend Development",
        "description": "Building responsive and interactive user interfaces using HTML, CSS, JavaScript, and modern frameworks like React, Nextjs, Vue, or Angular.",
        "icon": "🌐"
      },
      {
        "name": "Backend Development",
        "description": "Creating robust server-side applications and APIs using Node.js, Express, Nest.js, or other backend technologies.",
        "icon": "🖥️"
      },
      {
        "name": "Full Stack Development",
        "description": "Combining frontend and backend development skills to build complete web applications from scratch.",
        "icon": "🔄"
      },
      {
        "name": "UI/UX Design",
        "description": "Designing intuitive and visually appealing user interfaces and experiences using tools like Figma, Sketch, or Adobe XD.",
        "icon": "🎨"
      },
      {
        "name": "E-commerce Development",
        "description": "Developing online stores with features like product listings, shopping carts, payment gateways, and order management.",
        "icon": "🛒"
      },
      {
        "name": "Content Management Systems",
        "description": "Implementing and customizing CMS platforms like WordPress, Joomla, or Drupal for easy content management.",
        "icon": "📋"
      },
      {
        "name": "Search Engine Optimization (SEO)",
        "description": "Optimizing websites for better search engine rankings and increased organic traffic.",
        "icon": "🔍"
      },
      {
        "name": "Web Hosting and Maintenance",
        "description": "Providing web hosting solutions and ongoing maintenance to ensure websites are secure, fast, and up-to-date.",
        "icon": "🛠️"
      },
      {
        "name": "Web Performance Optimization",
        "description": "Enhancing website speed and performance through techniques like image optimization, code minification, and caching.",
        "icon": "⚡"
      },
      {
        "name": "API Development and Integration",
        "description": "Creating and integrating APIs to enable seamless data exchange between different systems and services.",
        "icon": "🔗"
      },
      {
        "name": "Bug Fixing",
        "description": "Identifying, diagnosing, and resolving bugs and issues in web applications to ensure smooth functionality.",
        "icon": "🔧"
      },
      {
        "name": "WordPress Development",
        "description": "Developing and customizing websites using WordPress to meet various business needs.",
        "icon": "🌍"
      },
      {
        "name": "All Types of Websites",
        "description": "Creating websites for blogs, portfolios, business sites, landing pages, and more.",
        "icon": "🌎"
      }
    ]

export const projects = [
  {
    title: "Ed-Cred – Educational Review & Feedback Platform",
    description: "A comprehensive platform for collecting and managing educational feedback and reviews, enabling transparent communication between students, educators, and institutions.",
    overview: "Ed-Cred revolutionizes the educational feedback ecosystem by providing a transparent, secure, and user-friendly platform where students can share authentic reviews about their educational experiences. The platform bridges the gap between students, educators, and institutions, fostering accountability and continuous improvement in education.",
    techStack: "React, Node.js, Express, MongoDB, JWT Authentication, Socket.io, Redis",
    features: "User authentication & authorization, Review submission with moderation workflow, Multi-level rating system (course, instructor, institution), Advanced admin dashboard with analytics, Real-time notifications, Review verification system, Sentiment analysis, Export reports in PDF/Excel",
    problemSolved: "Lack of transparent feedback in education",
    challenges: "Implementing a robust moderation system to prevent spam and fake reviews | Ensuring data privacy while maintaining transparency | Building a scalable architecture to handle thousands of concurrent users | Creating an intuitive UX for diverse user groups (students, teachers, admins) | Preventing review manipulation and ensuring authenticity | Managing real-time notifications without performance degradation",
    solution: "Developed a multi-tier moderation system with AI-powered spam detection using natural language processing | Implemented role-based access control with JWT tokens and encrypted sensitive data with AES-256 | Used Redis for caching frequently accessed data and Socket.io for real-time updates, implemented horizontal scaling with load balancers | Conducted extensive user testing with focus groups from different educational backgrounds and created role-specific dashboards | Built a verification system requiring email confirmation and implemented rate limiting to prevent abuse | Optimized Socket.io connections with room-based broadcasting and implemented notification queuing",
    impact: "Increased student engagement by 75%, Helped 50+ institutions improve their course quality, Processed over 10,000 verified reviews in the first 6 months, Reduced feedback processing time from weeks to hours",
    duration: "1 month",
    team: "4 developers, 1 UI/UX designer, 1 project manager",
    role: "Full Stack Developer - Led backend architecture and API development",
    screenshots: ['/work/ed-cred1.png', '/work/ed-cred2.png', '/work/ed-cred3.png', '/work/ed-cred4.png']
  },
  {
    title: "Chatbot – Full-Stack Web Application",
    description: "A sophisticated chatbot system designed for interactive and scalable web-based communication with AI-powered responses and conversation management.",
    overview: "An enterprise-grade chatbot solution that leverages cutting-edge AI technology to provide intelligent, context-aware conversations. The system supports multiple conversation threads, learns from interactions, and integrates seamlessly with existing business workflows.",
    techStack: "Next.js, TypeScript, OpenAI API, PostgreSQL, Prisma ORM, Redis, WebSocket, Docker",
    features: "Real-time chat interface with typing indicators, AI-powered responses with context retention, Conversation history and search, Multi-user support with session management, Context-aware conversations, File upload and processing, Custom training on business data, Analytics dashboard, API for third-party integrations",
    problemSolved: "Lack of fast, interactive, and scalable web-based chatbot systems",
    challenges: "Managing conversation context across multiple sessions without losing coherence | Optimizing API costs while maintaining response quality | Handling concurrent users without performance degradation | Implementing secure data handling for sensitive conversations | Reducing response latency for real-time experience | Preventing context window overflow with long conversations",
    solution: "Implemented intelligent context windowing to optimize token usage, storing conversation summaries in PostgreSQL and using vector embeddings for semantic search | Used Redis for session management and response caching, implemented token counting and dynamic context pruning | Built a queue system with Bull for handling high-traffic periods and implemented WebSocket connection pooling | Encrypted all conversations end-to-end with AES-256 and implemented secure file upload with virus scanning | Optimized API calls with streaming responses and implemented predictive pre-loading of likely responses | Developed a sliding window algorithm that maintains relevant context while discarding older messages",
    impact: "Reduced customer support response time by 60%, Handled 50,000+ conversations monthly, Achieved 95% user satisfaction rate, Saved $30,000 annually in support costs",
    duration: "1 month",
    team: "3 developers, 1 AI specialist",
    role: "Lead Developer - Architected the entire system and integrated AI capabilities",
    screenshots: ['/work/chatbot1.png', '/work/chatbot2.png', '/work/chatbot3.png', '/work/chatbot4.png']
  },
  {
    title: "Gurus Online – International Mandarin Learning Platform",
    description: "An online platform to learn Mandarin with structured courses, interactive lessons, and personalized guidance from native speakers.",
    overview: "Gurus Online transforms Mandarin language learning through an immersive, interactive platform that connects students worldwide with native Mandarin speakers. The platform combines structured curriculum with live tutoring, gamification, and progress tracking to create an engaging learning experience.",
    techStack: "Vue.js, Node.js, Express, MongoDB, Socket.io, WebRTC, AWS S3, Stripe",
    features: "HD video lessons with subtitles, Interactive exercises with speech recognition, Real-time progress tracking and analytics, Live tutoring sessions with screen sharing, Gamification with badges and leaderboards, Certificate generation upon completion, Mobile-responsive design, Payment integration for premium courses",
    problemSolved: "Difficulty in accessing structured Mandarin learning resources",
    challenges: "Implementing reliable video streaming for global users with varying internet speeds | Building speech recognition for Mandarin pronunciation with tonal accuracy | Scheduling system across multiple time zones for live sessions | Ensuring low latency for live tutoring sessions | Handling large video file storage and delivery | Synchronizing real-time collaboration features during live classes",
    solution: "Used AWS CloudFront CDN for video delivery with adaptive bitrate streaming and implemented video compression with H.264 codec | Integrated Google Speech API with custom Mandarin models and trained on tonal variations, implemented visual feedback for pronunciation | Built a smart scheduling algorithm considering time zones with automatic conversion and conflict detection | Implemented WebRTC with TURN/STUN servers for NAT traversal and fallback mechanisms for poor connections | Stored videos on AWS S3 with lifecycle policies for cost optimization and implemented progressive video loading | Used Socket.io for real-time whiteboard collaboration and implemented operational transformation for concurrent editing",
    impact: "Onboarded 5,000+ students from 30+ countries, Achieved 85% course completion rate, Generated $200,000 in revenue in first year, Partnered with 50+ certified Mandarin tutors",
    duration: "1 month",
    team: "5 developers, 2 UI/UX designers, 1 content creator",
    role: "Frontend Team Lead - Led Vue.js development and video streaming implementation",
    screenshots: ['/work/guru1.png', '/work/guru2.png', '/work/guru3.png', '/work/guru4.png']
  },
  {
    title: "Hospital Website – Static Web Application",
    description: "A professional and SEO-friendly static website for hospital presence with appointment booking and service information.",
    overview: "A modern, fast-loading hospital website that serves as the digital front door for patients. The site provides comprehensive information about services, doctors, and facilities while offering seamless appointment booking and emergency contact features.",
    techStack: "Next.js, TailwindCSS, TypeScript, SEO optimization, Google Analytics, Vercel",
    features: "Responsive design optimized for all devices, Online appointment booking system, Comprehensive service listings with search, Detailed doctor profiles with specializations, Emergency contact with one-click call, Patient testimonials section, Health blog with CMS, Contact forms with email notifications, Accessibility compliant (WCAG 2.1)",
    problemSolved: "Need for a fast, professional, and SEO-friendly hospital website",
    challenges: "Achieving perfect Lighthouse scores for performance across all metrics | Making medical information easily discoverable by search engines | Ensuring accessibility for elderly and disabled users | Integrating with existing hospital management system without API documentation | Optimizing images without losing medical detail quality | Handling appointment booking conflicts in real-time",
    solution: "Used Next.js static generation for optimal performance with image optimization and code splitting, implemented lazy loading for below-fold content | Implemented structured data markup (Schema.org) for rich search results and created XML sitemaps with priority indexing | Conducted accessibility audits with screen readers and implemented ARIA labels, keyboard navigation, and high contrast mode | Built custom API middleware for HMS integration through reverse engineering and created data transformation layer | Used Next.js Image component with custom loader and implemented WebP format with JPEG fallback | Implemented optimistic locking with PostgreSQL and real-time availability checking with WebSocket",
    impact: "Achieved 100/100 Lighthouse performance score, Increased online appointments by 200%, Reduced phone inquiries by 40%, Ranked #1 on Google for local hospital searches",
    duration: "1 month",
    team: "2 developers, 1 designer, 1 content writer",
    role: "Full Stack Developer - Complete development and SEO optimization",
    screenshots: ['/work/hospital1.png', '/work/hospital2.png', '/work/hospital3.png']
  },
  {
    title: "Play Now – Sports Ground Booking Platform",
    description: "A platform to find and book sports grounds easily with real-time availability and secure payment processing.",
    overview: "Play Now simplifies sports ground booking by connecting venue owners with players and teams. The platform offers real-time availability, instant booking confirmation, and integrated payment processing, making it effortless to organize sports activities.",
    techStack: "React, Node.js, Express, PostgreSQL, Stripe, Google Maps API, Redis, AWS",
    features: "Advanced ground search with filters (location, sport, price, amenities), Real-time availability calendar, Instant booking with confirmation, Secure payment processing with Stripe, User reviews and ratings, Venue owner dashboard, Booking management and history, Push notifications for bookings, Google Maps integration, Cancellation and refund system",
    problemSolved: "Difficulty in finding and booking sports grounds",
    challenges: "Preventing double bookings in high-traffic scenarios with race conditions | Handling payment disputes and refunds efficiently | Building a fair review system that prevents fake reviews | Optimizing search for location-based queries with large datasets | Managing time zone differences for bookings | Implementing dynamic pricing based on demand",
    solution: "Implemented database-level locking with PostgreSQL row-level locks and pessimistic locking for booking transactions, used Redis distributed locks for additional safety | Created automated refund workflow with Stripe webhooks and implemented dispute resolution system with evidence collection | Built verified booking review system (only after event completion) with photo upload requirement and ML-based fake review detection | Used PostGIS for efficient geospatial queries with spatial indexing and implemented caching layer with Redis for popular searches | Stored all times in UTC and converted to user's local timezone on frontend, implemented timezone-aware calendar views | Built demand prediction algorithm using historical data and implemented surge pricing with transparent user notifications",
    impact: "Facilitated 10,000+ bookings in first year, Partnered with 200+ sports venues, Achieved 4.8/5 average rating, Processed $500,000 in transactions",
    duration: "1 month",
    team: "4 developers, 1 designer",
    role: "Backend Developer - Built booking engine and payment integration",
    screenshots: ['/work/pitchgo1.png']
  },
  {
    title: "EQ360 – Emotional Intelligence Assessment Platform",
    description: "A platform for emotional intelligence assessment and improvement with personalized feedback and development plans.",
    overview: "EQ360 provides comprehensive emotional intelligence assessments based on scientifically validated frameworks. The platform helps individuals and organizations measure, understand, and develop emotional intelligence through detailed reports, personalized recommendations, and progress tracking.",
    techStack: "React, Node.js, MongoDB, Chart.js, D3.js, PDF generation, SendGrid",
    features: "Multi-dimensional EQ assessment tests, Personalized detailed reports with visualizations, Progress tracking over time, Development resources and exercises, Interactive analytics dashboard, Team assessment for organizations, Comparison with industry benchmarks, Automated email reports, Export reports in PDF format",
    problemSolved: "Difficulty in assessing and improving emotional intelligence",
    challenges: "Creating scientifically valid assessment algorithms that match research standards | Visualizing complex emotional intelligence data in understandable formats | Ensuring user privacy for sensitive personal data | Making recommendations actionable and personalized | Handling large-scale organizational assessments | Preventing assessment gaming and ensuring honest responses",
    solution: "Collaborated with psychologists to validate assessment models using factor analysis and conducted pilot studies with 500+ participants for reliability testing | Built custom D3.js visualizations for multi-dimensional data with interactive radar charts and implemented color-coded heat maps for easy interpretation | Implemented end-to-end encryption for all assessment data with zero-knowledge architecture and complied with GDPR and HIPAA standards | Developed AI-powered recommendation engine based on assessment results using decision trees and created personalized development roadmaps with milestone tracking | Implemented batch processing for organizational assessments with progress tracking and created aggregated reports with anonymized individual data | Used randomized question ordering and implemented consistency checks to detect dishonest responses, added forced-choice questions to reduce social desirability bias",
    impact: "Assessed 15,000+ individuals, Partnered with 50+ corporate clients, 90% of users reported improved self-awareness, Featured in 3 psychology journals",
    duration: "1 month",
    team: "3 developers, 2 psychologists, 1 data scientist",
    role: "Full Stack Developer - Built assessment engine and visualization system",
    screenshots: ['/work/myeq360.png']
  },
  {
    title: "Soulsun – Jewelry Ecommerce Web Application",
    description: "An ecommerce platform for selling jewelry online with smooth UX, product customization, and secure checkout.",
    overview: "Soulsun is a premium jewelry ecommerce platform that combines stunning visual design with seamless shopping experience. The platform features high-quality product imagery, virtual try-on, customization options, and a secure checkout process that has driven significant sales growth.",
    techStack: "Next.js, TypeScript, Stripe, PostgreSQL, Prisma, AWS S3, Cloudinary, Redis",
    features: "Beautiful product catalog with zoom and 360° view, Advanced filtering and search, Shopping cart with saved items, Secure checkout with multiple payment options, Order tracking with real-time updates, Product customization (engraving, sizing), Wishlist and favorites, Admin panel for inventory management, Email marketing integration, Customer reviews and ratings",
    problemSolved: "Difficulty in providing a smooth online shopping experience for luxury jewelry",
    challenges: "Displaying jewelry with accurate colors and details across different devices | Managing complex product variants (size, material, customization) | Ensuring secure payment processing for high-value items | Optimizing images without losing quality | Handling inventory synchronization across multiple sales channels | Reducing cart abandonment rate",
    solution: "Implemented Cloudinary for advanced image optimization with automatic format selection and used color-accurate image processing with ICC profiles, implemented 360° product viewer with lazy loading | Built flexible product variant system with Prisma using polymorphic associations and created dynamic pricing calculator for customizations | Integrated Stripe with 3D Secure for fraud prevention and implemented PCI DSS compliance with tokenization, added address verification system | Used Next.js Image component with custom loader for perfect quality and implemented progressive image loading with blur placeholders | Built real-time inventory sync with webhooks and implemented pessimistic locking for stock management, created automated reorder alerts | Implemented cart abandonment email campaigns with personalized product recommendations and added guest checkout option, created one-click checkout for returning customers",
    impact: "Achieved $1M+ in sales within first year, Converted 3.5% of visitors to customers, Average order value of $450, 98% customer satisfaction rate, Reduced cart abandonment by 40%",
    duration: "1 month",
    team: "3 developers, 1 UI/UX designer, 1 photographer",
    role: "Lead Developer - Full stack development and payment integration",
    screenshots: ['/work/soulsun1.png', '/work/soulsun2.png', '/work/soulsun3.png', '/work/soulsun4.png', '/work/soulsun5.png']
  },
  {
    title: "Learn To Strut – Personal Development Learning Platform",
    description: "A platform offering structured learning resources for personal development and skill building with interactive courses.",
    overview: "Learn To Strut empowers individuals to develop confidence, communication skills, and personal presence through structured video courses, interactive exercises, and community support. The platform combines professional coaching with modern e-learning technology.",
    techStack: "React, Node.js, Express, MongoDB, AWS S3, Vimeo API, Stripe, Socket.io",
    features: "Comprehensive course management system, HD video streaming with adaptive bitrate, Progress tracking with milestones, Interactive exercises and quizzes, Certificates upon completion, Discussion forums and community, Live Q&A sessions with instructors, Mobile app for learning on-the-go, Subscription management, Personalized learning paths",
    problemSolved: "Lack of accessible and structured learning resources for personal development",
    challenges: "Delivering high-quality video to users with varying internet speeds | Building engaging interactive content that maintains user interest | Creating a supportive community environment while preventing spam | Monetizing while keeping content accessible | Tracking meaningful learning progress beyond video completion | Preventing content piracy and unauthorized sharing",
    solution: "Integrated Vimeo for adaptive streaming with automatic quality adjustment and implemented video preloading based on user behavior, used CDN for global content delivery | Built custom interactive exercise framework with React using gamification elements and created branching scenarios based on user choices, implemented spaced repetition for knowledge retention | Implemented moderated forums with real-time updates using Socket.io and created community guidelines with AI-powered content filtering, added reputation system for active contributors | Created tiered pricing with free introductory content and implemented scholarship program for financial hardship, offered corporate bulk licensing | Developed comprehensive analytics tracking engagement metrics and implemented knowledge checks throughout courses, created personalized recommendations based on learning patterns | Used Vimeo's domain-level privacy settings and implemented watermarking on videos, added DRM protection for premium content and session-based access tokens",
    impact: "Enrolled 8,000+ students, 80% course completion rate, 4.9/5 average course rating, Generated $150,000 in annual recurring revenue, Built community of 3,000+ active members",
    duration: "1 month",
    team: "4 developers, 2 content creators, 1 community manager",
    role: "Full Stack Developer - Built course platform and video streaming system",
    screenshots: ['/work/learntostrut-Before.png', '/work/learn2strut-2.png', '/work/learn2strut-3.png']
  }
];

export const workImages=[
  {imgs:['/work/chatbot3.png','/work/ed-cred1.png','/work/guru1.png','/work/hospital1.png'], projectIndexes: [1, 0, 2, 3]},
  {imgs:['/work/pitchgo1.png','/work/myeq360.png','/work/soulsun1.png','/work/learntostrut-Before.png'], projectIndexes: [4, 5, 6, 7]},
]

export const testimonials=[
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    message: "Exceptional work on our e-commerce platform. The attention to detail and seamless user experience exceeded our expectations. Highly recommended!",
    avatar: "/testimonials/avatar-1.jpg"
  },
  {
    name: "Michael Chen",
    position: "Product Manager, InnovateCo",
    message: "Delivered a complex web application ahead of schedule. The code quality was outstanding and the communication throughout the project was excellent.",
    avatar: "/testimonials/avatar-2.jpg"
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, DesignHub",
    message: "Transformed our outdated website into a modern, responsive masterpiece. Our conversion rates increased by 40% within the first month!",
    avatar: "/testimonials/avatar-3.jpg"
  },
  {
    name: "David Kim",
    position: "CTO, DataFlow Systems",
    message: "Professional, reliable, and incredibly skilled. The API integrations were flawless and the documentation was thorough. A true expert.",
    avatar: "/testimonials/avatar-4.jpg"
  },
  {
    name: "Amanda Foster",
    position: "Marketing Director, GrowthLabs",
    message: "Our new landing page has been a game-changer. The animations and performance optimization resulted in a 60% reduction in bounce rate.",
    avatar: "/testimonials/avatar-5.jpg"
  },
  {
    name: "James Wilson",
    position: "Owner, Wilson Consulting",
    message: "Built a custom dashboard that streamlined our entire workflow. The attention to UX details made adoption seamless for our team.",
    avatar: "/testimonials/avatar-6.jpg"
  },
  {
    name: "Lisa Park",
    position: "Startup Founder, GreenTech",
    message: "From concept to deployment, the process was smooth and professional. The final product was exactly what we envisioned and more.",
    avatar: "/testimonials/avatar-7.jpg"
  },
  {
    name: "Robert Martinez",
    position: "E-commerce Manager, StyleShop",
    message: "Our online store now handles thousands of orders daily without a hitch. The performance improvements have been remarkable.",
    avatar: "/testimonials/avatar-8.jpg"
  },
  {
    name: "Jennifer Lee",
    position: "Creative Director, Artistry Studio",
    message: "The portfolio website created for our agency perfectly captures our brand identity. Beautiful design with flawless functionality.",
    avatar: "/testimonials/avatar-9.jpg"
  },
  {
    name: "Thomas Anderson",
    position: "IT Manager, SecureNet Corp",
    message: "Implemented complex security features and optimized our entire web infrastructure. Outstanding technical expertise and problem-solving skills.",
    avatar: "/testimonials/avatar-10.jpg"
  }
]

  