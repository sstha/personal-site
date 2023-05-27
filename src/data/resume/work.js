/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'LogPoint',
    position: 'Senior Systems Engineer',
    url: 'https://logpoint.com',
    startDate: '2017-03',
    endDate: '2021-06',
    summary: 'Logpoint is a fast-growing company in an ever evolving landscape of cybersecurity.y unifying the foundational cybersecurity tech stack, you can arm the security team with automation and precision to solve complex cybersecurity issues and efficiently mitigate threats, resulting in a safer organization.',
    highlights: [
      'Design, develop and improve a HIPPA,GDPR compliant LogPoint infrastructure in cloud(AWS/Azure) transitioning from hardware-based solution.',
      'Build, scale and secure infrastructure focusing on a fully automated environment in a cloud infrastructure and Manage a multi-origin, highly scalable web infrastructure.',
      'Script the automation of build and deployment process using but not limited to Python,bash,Powershell,Ansible and Code and document repositories management using GIT, SVN, Bitbucket, Confluence.',
      'Integrate Jira, Jenkins, and Atlassian tools to optimize team workflows, leading to 20%cost savings per month and accelerated development of product.',
      'Fully engaged in the implementation of a DevOps system framework and Manage multiple pipeline for production releases using CI/CD tool using Jenkins and Gradle.',
      'Assist with failure analysis and develop resolutions for system issues.',
    ],
  },
  {
    name: 'Classic Tech',
    position: 'Network Engineer',
    url: 'http://classic.com.np',
    startDate: '2015-04',
    endDate: '2016-07',
    summary: 'An internet service provider for reliable and high-speed Internet, dedicated to keeping people connected and empowered in the digital world.',
    highlights: [
      'Build and maintain LAN/WAN infrastructures and VLANS for over 100 clients within budget and timelines.',
      'Accelerate development of Cisco/Juniper Switches and FortiGate routers, resulting in a significant reduction in installation time frames.',
      'Create VPN connections, firewall policies, and associated documentation.',
      'Optimize network operations and uptime through extensive analysis, troubleshooting,resulting in a 2 9’s SLA.',
      'Design comprehensive device plans for field engineers to enable the installation of 10+ switches and routers daily.',
      'Research, recommend and assist in the development of customer support workflows, customer communications mechanisms, hardware and software to provide customer support.',
      'Overall configuration, troubleshooting and monitoring of Linux Servers(DNS, Web, Mail, Proxy, Firewall).',
    ],
  },
];

export default work;
