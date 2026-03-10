# Matrix Elektrotech - 样品站完整规划

## 1. 站点地图 (Sitemap)

```
Home (首页)
├── Chargers (充电设备)
│   ├── Overview (产品概览)
│   ├── Nova Series (Nova系列)
│   └── Atlas IP65 Series (Atlas IP65系列)
├── Batteries (电池系统)
├── OEM / Engineering (OEM工程服务)
├── Applications (应用场景)
├── Downloads (资料下载)
├── About (关于我们)
├── Contact (联系我们)
└── FAQ (常见问题) [可选第11页]
```

---

## 2. 全局设计系统

### 色彩方案
- **主色**: #1A237E (深蓝 - 专业/信任)
- **辅助色**: #FF6B35 (能源橙 - 活力/行动)
- **背景**: #F5F7FA (浅灰蓝)
- **文字**: #212529 (深灰)
- **边框**: #E0E0E0

### 字体
- **标题**: Inter, Roboto (粗体 700)
- **正文**: Inter, Open Sans (常规 400)
- **技术数据**: monospace (等宽字体)

### 组件规范
- **按钮**: 圆角 4px, 主色填充/白色文字
- **卡片**: 阴影 0 2px 8px rgba(0,0,0,0.1)
- **间距**: 8px 基准倍数
- **容器**: 最大宽度 1200px

---

## 3. 各页面详细规划

---

### Page 1: Home (首页)

**线框结构:**
```
[导航栏: Logo | Chargers | Batteries | OEM | Applications | Downloads | About | Contact]

[Hero Section]
- 全宽背景图 (工业设备/太阳能/充电站)
- 大标题: "Powering the Future of Energy"
- 副标题: "Advanced charging solutions & battery systems for industrial applications"
- CTA按钮: "Explore Products" + "Contact Sales"

[Features Grid - 3列]
- 图标 + Chargers + "High-efficiency AC/DC charging stations"
- 图标 + Batteries + "Industrial-grade energy storage"
- 图标 + OEM + "Custom engineering solutions"

[Stats Bar]
- 15+ Years Experience
- 500+ Projects Delivered
- 50+ Countries Served
- 24/7 Technical Support

[Featured Products - 2列]
- Nova Series Card (图片 + 简介 + "Learn More")
- Atlas IP65 Series Card (图片 + 简介 + "Learn More")

[Applications Preview - 4列图标]
- EV Charging
- Industrial Automation
- Renewable Energy
- Grid Storage

[Why Choose Us - 左文右图]
- 标题: "Engineered for Reliability"
- 要点列表:
  * German engineering standards
  * IP65-rated outdoor solutions
  * Modular & scalable architecture
  * Full OEM customization
- 大图: 工厂/设备照片

[Trust Bar - Logo轮播]
- "Trusted by industry leaders"
- [客户Logo占位符 x 6]

[CTA Section - 深蓝背景]
- 标题: "Ready to Power Your Next Project?"
- 按钮: "Get a Quote" + "Download Catalog"

[Footer]
- 4列: Company | Products | Resources | Contact
- 底部: Copyright | Privacy Policy | Terms
```

**英文文案:**

**Hero:**
- Headline: "Powering the Future of Energy"
- Subheadline: "Advanced charging solutions and battery systems engineered for industrial reliability. From EV infrastructure to grid-scale storage, we deliver power you can trust."
- CTA Primary: "Explore Products"
- CTA Secondary: "Contact Sales Team"

**Features:**
- "Industrial Chargers": "High-efficiency AC/DC charging stations designed for commercial fleets, public infrastructure, and industrial applications. Power outputs from 7kW to 350kW."
- "Battery Systems": "Industrial-grade lithium-ion energy storage with smart BMS integration. Modular designs for seamless scaling from kWh to MWh."
- "OEM Solutions": "Custom engineering and manufacturing for your specific requirements. Hardware, firmware, and branding tailored to your needs."

**Stats:**
- "15+ Years" / "Industry Experience"
- "500+ Projects" / "Successfully Delivered"
- "50+ Countries" / "Global Reach"
- "24/7 Support" / "Technical Service"

**Why Choose Us:**
- Headline: "Engineered for Reliability"
- Body: "Every Matrix Elektrotech product is built to German engineering standards. Our IP65-rated outdoor solutions withstand the harshest environments, while modular architecture ensures your system grows with your needs. From concept to deployment, we provide full OEM customization and lifetime technical support."

**CTA:**
- Headline: "Ready to Power Your Next Project?"
- Body: "Get a customized quote for your charging infrastructure or energy storage project. Our engineers are ready to help."

---

### Page 2: Chargers (产品总览)

**线框结构:**
```
[导航栏 - 当前高亮Chargers]

[Header Section]
- 标题: "Industrial Charging Solutions"
- 副标题: AC/DC chargers for every application
- 背景: 充电站/工业场景

[Product Family Cards - 2列大卡片]
- Nova Series Card:
  * 产品图片
  * 标题: "Nova Series"
  * 描述: "Compact AC chargers for commercial and residential applications"
  * 功率: "7kW - 22kW"
  * 标签: "Indoor | Smart Grid Ready"
  * 按钮: "View Series"

- Atlas IP65 Series Card:
  * 产品图片
  * 标题: "Atlas IP65 Series"
  * 描述: "Heavy-duty DC fast chargers built for outdoor industrial environments"
  * 功率: "60kW - 350kW"
  * 标签: "IP65 | All-Weather | Fleet Ready"
  * 按钮: "View Series"

[Comparison Table Section]
- 标题: "Quick Comparison"
- 表格: 型号 | 功率 | 输入 | 防护等级 | 应用场景 | 查看详情

[Technical Standards]
- 图标列表: CE认证, OCPP兼容, ISO标准, 5年质保

[CTA]
- "Need help selecting the right charger?"
- 按钮: "Talk to an Engineer"
```

**英文文案:**

**Header:**
- H1: "Industrial Charging Solutions"
- Sub: "From compact AC wallboxes to high-power DC fast chargers, our product range covers every charging infrastructure need."

**Nova Series:**
- Title: "Nova Series"
- Tagline: "Smart AC Charging for Commercial Applications"
- Description: "The Nova Series delivers reliable AC charging for workplaces, retail locations, and residential complexes. With OCPP 2.0.1 compatibility and smart load management, Nova chargers integrate seamlessly with your existing energy infrastructure. Available in 7kW, 11kW, and 22kW variants."
- Specs: "Power: 7kW - 22kW | Connection: Type 2 | Protection: IP54 | Installation: Wall/Pedestal"

**Atlas IP65 Series:**
- Title: "Atlas IP65 Series"
- Tagline: "Heavy-Duty DC Fast Charging for Industrial Environments"
- Description: "Engineered for the harshest conditions. The Atlas IP65 Series provides rapid DC charging for commercial fleets, highway stations, and industrial sites. Modular power units allow configuration from 60kW to 350kW. Full IP65 protection ensures reliable operation in extreme temperatures, dust, and rain."
- Specs: "Power: 60kW - 350kW | Connectors: CCS2, CHAdeMO | Protection: IP65 | Cooling: Liquid/Air"

**Comparison:**
- Table Header: Model | Power Range | Installation | Protection | Best For
- Row 1: Nova 7 | 7kW | Wallbox | IP54 | Home/Office
- Row 2: Nova 22 | 22kW | Wall/Pedestal | IP54 | Commercial
- Row 3: Atlas 60 | 60kW | Floor | IP65 | Fleet Depot
- Row 4: Atlas 150 | 150kW | Floor | IP65 | Highway/Commercial
- Row 5: Atlas 350 | 350kW | Floor | IP65 | Heavy Fleet/Hub

---

### Page 3: Nova Series (产品详情)

**线框结构:**
```
[导航栏]

[Breadcrumb: Home > Chargers > Nova Series]

[Hero Section - 左图右文]
- 左侧: 产品大图 + 缩略图选择器
- 右侧:
  * 标题: Nova Series
  * 副标题: Smart AC Charging Solutions
  * 描述文字
  * 关键参数列表
  * 按钮: "Download Datasheet" + "Request Quote"

[Features Grid - 4列]
- 智能负载管理
- OCPP 2.0.1兼容
- 紧凑设计
- 简单安装

[Technical Specs - 标签页]
- Tab: Specifications | Dimensions | Installation | Downloads
- 详细参数表

[Models Table]
- 型号对比表

[Gallery - 产品图片展示]

[Related Products]
- 推荐Atlas系列

[CTA]
```

**英文文案:**

**Hero:**
- Title: "Nova Series"
- Subtitle: "Smart AC Charging for Commercial and Residential Applications"
- Description: "The Nova Series combines elegant design with intelligent charging technology. Perfect for workplaces, apartment complexes, retail locations, and private residences. With built-in load management and smart grid capabilities, Nova optimizes energy consumption while ensuring your EV is always ready to go."
- Key Specs:
  * "Power Output: 7kW, 11kW, 22kW"
  * "Connector: Type 2 (IEC 62196)"
  * "Protection: IP54 (indoor/outdoor)"
  * "Communication: Ethernet, 4G, WiFi"
  * "Dimensions: 350 x 250 x 150mm"

**Features:**
- "Smart Load Management": "Automatically balances charging power across multiple units to optimize your site's energy consumption without exceeding grid capacity."
- "OCPP 2.0.1 Compliant": "Full compatibility with leading charge point management systems. Remote monitoring, dynamic pricing, and smart scheduling ready."
- "Compact Scandinavian Design": "Minimal footprint with clean aesthetics. Wall-mounted or pedestal installation options available."
- "Plug & Play Installation": "Single-phase or three-phase connection. Integrated RCD protection. Installation completed in under 2 hours."

**Specifications:**
- Table Categories: Electrical | Mechanical | Communication | Environmental | Certifications
- Sample entries: Input Voltage (230V/400V), Cable Length (5m standard), Operating Temp (-25°C to +50°C), Warranty (5 years)

**CTA:**
- "Configure your Nova charging solution"
- "Our sales engineers can help you select the right models and quantities for your project."

---

### Page 4: Atlas IP65 Series (产品详情)

**线框结构:**
类似 Nova Series，突出 IP65 防护和工业特性

**英文文案:**

**Hero:**
- Title: "Atlas IP65 Series"
- Subtitle: "Industrial-Grade DC Fast Chargers for Demanding Environments"
- Description: "Built to perform where other chargers fail. The Atlas IP65 Series delivers high-power DC fast charging in the harshest industrial environments. Full IP65 protection against dust and water jets, combined with robust construction and advanced liquid cooling, ensures 99.5% uptime even in extreme conditions. From desert heat to arctic cold, Atlas keeps charging."
- Key Specs:
  * "Power: 60kW - 350kW (modular)"
  * "Connectors: CCS2, CHAdeMO (dual cable)"
  * "Protection: IP65 (dust-tight, water-jet proof)"
  * "Cooling: Active liquid cooling system"
  * "Operating Temp: -30°C to +55°C"

**Features:**
- "All-Weather Reliability": "Full IP65 rating with marine-grade aluminum enclosure. Tested in salt spray, extreme heat, and freezing conditions."
- "Modular Power Architecture": "Start with 60kW and scale to 350kW by adding power modules. Future-proof your investment."
- "Dynamic Power Sharing": "Dual-cable models intelligently distribute power between two vehicles for maximum throughput."
- "Fleet Management Ready": "API integration with fleet management software. RFID authentication, usage tracking, and detailed reporting."
- "Active Liquid Cooling": "Advanced thermal management maintains full power output even in 50°C ambient temperature."

**Applications List:**
- Commercial EV fleets
- Highway fast-charging hubs
- Mining and construction sites
- Ports and logistics centers
- Remote/off-grid installations

---

### Page 5: Batteries (电池系统)

**线框结构:**
```
[导航栏]

[Header]
- 标题: Industrial Battery Systems
- 副标题: Scalable energy storage solutions

[Product Categories - 3列]
- Stationary Storage
- Mobile/Industrial
- Custom Solutions

[Technical Highlights]
- 锂铁磷酸 (LiFePO4)
- 智能BMS
- 模块化设计
- 10年寿命

[Applications]
- 储能应用列表

[Case Studies - 可选]

[CTA]
```

**英文文案:**

**Header:**
- H1: "Industrial Battery Systems"
- Sub: "High-performance lithium-ion energy storage for industrial, commercial, and grid-scale applications. Modular, scalable, and built to last."

**Categories:**
- "Stationary Storage": "Grid-connected energy storage systems from 50kWh to 10MWh. Perfect for peak shaving, load balancing, and backup power. Containerized solutions available."
- "Mobile & Industrial": "Ruggedized battery systems for mobile machinery, port equipment, and off-road vehicles. Vibration-resistant construction with rapid charging capability."
- "Custom Solutions": "Bespoke battery pack design for OEM applications. From concept to production, we engineer cells, BMS, and enclosures to your exact specifications."

**Technical Highlights:**
- "Lithium Iron Phosphate (LiFePO4)": "Superior thermal stability and 6000+ cycle life. Safer chemistry for industrial applications."
- "Intelligent BMS": "Cell-level monitoring, active balancing, and predictive maintenance. Cloud-connected for remote diagnostics."
- "Modular Architecture": "Add capacity as needed. Hot-swappable modules minimize downtime."
- "10-Year Design Life": "Built for industrial duty cycles. Comprehensive warranty and service contracts available."

**Applications:**
- Solar + Storage microgrids
- Industrial UPS and backup power
- EV fleet charging buffers
- Peak demand management
- Remote/off-grid power

---

### Page 6: OEM / Engineering

**线框结构:**
```
[导航栏]

[Header]
- 标题: OEM & Custom Engineering
- 副标题: Your brand, our engineering

[Service Grid - 4列]
- Hardware Design
- Firmware Development
- Industrial Design
- Certification Support

[Process Timeline]
- 流程图: Consult → Design → Prototype → Test → Certify → Produce

[Case Studies - 2列卡片]
- 客户案例1
- 客户案例2

[Capabilities List]
- 技术能力详细列表

[CTA: Start Your Project]
```

**英文文案:**

**Hero:**
- H1: "OEM & Custom Engineering"
- Sub: "White-label charging and battery solutions tailored to your brand and specifications. From concept to mass production."

**Services:**
- "Hardware Engineering": "Custom PCB design, power electronics, thermal management, and mechanical engineering. We design for manufacturability and reliability."
- "Firmware & Software": "Embedded systems, control algorithms, communication protocols (OCPP, Modbus, CAN), and mobile apps. Full-stack development."
- "Industrial Design": "Enclosure design, branding integration, UI/UX for displays, and packaging. Make it look like yours."
- "Certification Management": "CE, UL, FCC, and regional certifications handled end-to-end. Compliance testing and documentation."

**Process:**
1. "Discovery": "We analyze your requirements, target markets, and technical specifications."
2. "Concept Design": "Initial designs, feasibility studies, and cost analysis."
3. "Engineering": "Detailed design, prototyping, and iterative testing."
4. "Validation": "Certification testing, field trials, and production readiness."
5. "Manufacturing": "Volume production with our certified partners. Quality control at every step."
6. "Support": "Technical documentation, training, and ongoing engineering support."

**CTA:**
- "Have a product idea? Let's build it."
- "Schedule a consultation with our engineering team."

---

### Page 7: Applications (应用场景)

**线框结构:**
```
[导航栏]

[Header]
- 标题: Applications
- 副标题: Solutions by industry

[Application Grid - 6列或更多]
- EV Fleet Charging
- Public Infrastructure
- Industrial Automation
- Renewable Energy Storage
- Grid Services
- Off-Grid/Remote

[Each Application Card]
- 大图
- 标题
- 描述
- 推荐产品
- 案例链接

[CTA]
```

**英文文案:**

**Header:**
- H1: "Applications"
- Sub: "Discover how Matrix Elektrotech solutions power applications across industries."

**Application 1: EV Fleet Charging**
- "Optimize your fleet operations with high-power DC charging. Manage energy costs, schedule charging during off-peak hours, and keep your vehicles ready for duty. Compatible with all major EV models."
- Products: Atlas 150/350kW, Fleet Management Software
- Features: Dynamic load balancing, depot management, driver apps

**Application 2: Public Charging Infrastructure**
- "Reliable, user-friendly charging stations for public and semi-public locations. From workplace charging to highway corridors, we provide scalable solutions with full backend integration."
- Products: Nova 22kW, Atlas 60/150kW
- Features: Payment integration, 24/7 monitoring, vandalism protection

**Application 3: Industrial Automation**
- "Power AGVs, forklifts, and automated machinery with our industrial battery systems. Opportunity charging and fast-swap solutions minimize downtime in 24/7 operations."
- Products: Industrial Battery Packs, Opportunity Chargers
- Features: CAN bus integration, fast charging, ruggedized design

**Application 4: Renewable Energy Storage**
- "Store solar and wind energy for when you need it. Our grid-tied battery systems maximize self-consumption, enable peak shaving, and provide backup power during outages."
- Products: Grid Storage Systems, Hybrid Inverters
- Features: Grid services, energy arbitrage, black start capability

**Application 5: Grid Services & Utilities**
- "Utility-scale energy storage for frequency regulation, voltage support, and capacity services. Fast response times and high availability meet the most demanding grid codes."
- Products: Containerized Storage (500kWh - 10MWh)
- Features: Grid code compliance, remote monitoring, 20-year design life

**Application 6: Off-Grid & Remote Power**
- "Reliable power where the grid doesn't reach. Solar-diesel hybrid systems with battery storage for mining camps, remote construction, and island communities."
- Products: Off-Grid Systems, Solar Controllers
- Features: Auto-start generators, fuel savings, modular expansion

---

### Page 8: Downloads (资料下载)

**线框结构:**
```
[导航栏]

[Header]
- 标题: Downloads
- 副标题: Technical documentation and resources

[Filter Bar]
- 分类: All | Datasheets | Manuals | Software | CAD Drawings | Certifications

[Document List - 表格或卡片]
- 文件名 | 产品 | 类型 | 语言 | 下载按钮

[Featured Resources]
- 公司宣传册
- 产品总览
- 安装指南

[Newsletter Signup]
```

**英文文案:**

**Header:**
- H1: "Downloads"
- Sub: "Access technical documentation, datasheets, manuals, and software for our products."

**Document Categories:**
- "Datasheets": "Technical specifications, electrical diagrams, and performance data for all products."
- "User Manuals": "Installation, operation, and maintenance guides."
- "Software & Firmware": "Configuration tools, monitoring software, and firmware updates."
- "CAD Drawings": "2D and 3D mechanical drawings for system integration."
- "Certificates": "CE, UL, and other compliance certificates."

**Sample Document List:**
- "Nova Series Datasheet" | Nova 7/11/22 | Datasheet | EN/DE | Download PDF
- "Atlas IP65 Installation Manual" | Atlas 60-350 | Manual | EN/DE/FR | Download PDF
- "OCPP Configuration Guide" | All Chargers | Software | EN | Download PDF
- "Battery System CAD Package" | All Batteries | CAD | EN | Download ZIP
- "Company Brochure" | General | Brochure | EN/DE | Download PDF

**Newsletter:**
- "Stay Updated"
- "Get the latest product announcements, technical whitepapers, and industry insights."
- Email input + Subscribe button

---

### Page 9: About (关于我们)

**线框结构:**
```
[导航栏]

[Hero - 公司大图]

[Our Story - 左文右图]

[Values - 3列]

[Team - 可选]

[Milestones - 时间线]

[Facilities - 工厂/办公室]

[CTA]
```

**英文文案:**

**Hero:**
- Title: "About Matrix Elektrotech"
- Subtitle: "Engineering excellence in power electronics since 2009"

**Our Story:**
- "Founded in 2009, Matrix Elektrotech began with a simple mission: to build charging and energy storage systems that actually work in the real world. Not just in laboratories, but in deserts, on construction sites, and in busy logistics hubs."
- "What started as a small engineering consultancy has grown into a global provider of industrial power solutions. Today, our products power electric vehicle fleets, store renewable energy, and keep critical operations running across 50+ countries."
- "Headquartered in [Location], we maintain development centers in Germany and China, with manufacturing partners certified to ISO 9001 and ISO 14001 standards."

**Values:**
- "Engineering First": "We design for reliability, not just specifications. Every product undergoes rigorous testing beyond industry standards."
- "Customer Partnership": "We don't just sell products; we solve problems. Our engineers work alongside your team from concept to deployment."
- "Sustainability": "We build products that last. Long lifecycles, repairable designs, and responsible sourcing are core to our philosophy."

**Milestones:**
- 2009: Company founded
- 2012: First commercial charging station deployed
- 2015: IP65-rated outdoor series launched
- 2018: Battery storage division established
- 2020: 500th project delivered
- 2023: Expanded OEM services for global brands

**Facilities:**
- "Our headquarters houses R&D labs, testing facilities, and manufacturing integration centers. From PCB assembly to final burn-in testing, every product is verified before shipment."

---

### Page 10: Contact (联系我们)

**线框结构:**
```
[导航栏]

[Header]
- 标题: Contact Us
- 副标题: Get in touch with our team

[Contact Grid - 2列]
- 左侧: 联系表单
  * 姓名
  * 公司
  * 邮箱
  * 电话
  * 感兴趣的产品/服务
  * 留言
  * 提交按钮
- 右侧: 联系信息
  * 地址
  * 电话
  * 邮箱
  * 工作时间
  * 地图嵌入

[Global Offices - 可选卡片]

[FAQ Teaser - 链接到FAQ页面]
```

**英文文案:**

**Header:**
- H1: "Contact Us"
- Sub: "Have a question or ready to start a project? Our team is here to help."

**Form:**
- Fields:
  * "Full Name" *
  * "Company Name"
  * "Email Address" *
  * "Phone Number"
  * "I'm interested in..." (Dropdown: Charging Solutions, Battery Systems, OEM Services, Other)
  * "Message" (Textarea)
  * "Subscribe to newsletter" (Checkbox)
  * "Send Message" (Button)

**Contact Information:**
- "Headquarters"
- Address: [Company Address], [City], [Country]
- Phone: +[Country Code] [Phone Number]
- Email: info@matrix-elektrotech.com
- Hours: Monday - Friday, 8:00 - 18:00 CET

**Map:**
- Embedded Google Maps or static map image

**Alternative Contact:**
- "For technical support: support@matrix-elektrotech.com"
- "For sales inquiries: sales@matrix-elektrotech.com"
- "For partnership opportunities: partners@matrix-elektrotech.com"

---

### Page 11: FAQ (可选)

**线框结构:**
```
[导航栏]

[Header]

[Category Tabs]

[Accordion FAQ列表]

[Still Have Questions - CTA]
```

**英文文案:**

**Header:**
- H1: "Frequently Asked Questions"
- Sub: "Find answers to common questions about our products and services."

**Categories:**
- General, Products, Technical, Ordering, Support

**Sample Questions:**

**Q: What's the warranty on Matrix Elektrotech chargers?**
A: All our chargers come with a standard 5-year warranty. This covers parts and labor for manufacturing defects. Extended warranty options are available up to 10 years.

**Q: Can Nova chargers be installed outdoors?**
A: Nova chargers have an IP54 rating, meaning they're protected against dust and water splashes from any direction. They're suitable for covered outdoor installations. For fully exposed locations, we recommend our Atlas IP65 series.

**Q: Do you ship internationally?**
A: Yes, we ship to over 50 countries worldwide. We work with certified installation partners in major markets to ensure proper commissioning and local support.

**Q: What's the typical lead time for OEM projects?**
A: Timeline varies by project complexity. Simple branding customization can be ready in 8-12 weeks. Full custom hardware development typically takes 6-9 months from concept to production.

**Q: How do I get technical support?**
A: Our technical support team is available 24/7 for critical issues. Contact us via phone, email, or through your customer portal. Remote diagnostics are available for all connected products.

---

## 4. 技术规范

### 响应式断点
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

### 图片要求
- Hero: 1920x800px
- Product: 800x800px (白底或场景)
- Icons: SVG格式
- 压缩: WebP优先，JPEG fallback

### SEO基础
- Title格式: [Page Name] | Matrix Elektrotech
- Meta description每页唯一
- H1每页唯一
- Alt text所有图片
- Schema.org markup: Product, Organization, FAQ

### 性能目标
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

---

## 5. 交付给 Codex 的内容清单

Codex 需要以下文件来构建前端：

1. ✅ 完整站点地图 (本文档第1节)
2. ✅ 每页线框结构 (本文档第3节)
3. ✅ 全部英文文案 (本文档第3节各页面)
4. ✅ 设计系统规范 (本文档第2节)
5. ✅ 技术规范 (本文档第4节)

**缺少需补充：**
- 图片素材 (产品照片、公司照片、图标)
- 公司实际联系信息
- 实际产品技术参数
- 实际客户案例

**建议工作流：**
1. Codex 先用占位图和示例数据构建完整站点结构
2. 后续替换为实际内容和图片
3. 响应式测试和性能优化

---

*文档版本: 1.0*
*创建时间: 2026-03-10*
*用途: matrix-elektrotech.com 样品站开发*
