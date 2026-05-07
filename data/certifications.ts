export interface Certification {
  title: string;
  issuer: {
    name: string;
    websiteUrl: string;
  };
  date: string;
  credentialUrl: string;
  badgeImage: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: {
      name: 'Amazon Web Services',
      websiteUrl: 'https://aws.amazon.com?utm_source=chatgpt.com',
    },
    date: 'May 2026',
    credentialUrl:
      'https://www.credly.com/badges/5a3bec78-7560-4a03-96ba-f4b676344c6f/public_url',
    badgeImage: '/certifications/aws-cloud-practitioner.png',
    description:
      'Passed the AWS Certified Cloud Practitioner (CLF-C02) exam with a score of 881/1000, demonstrating foundational knowledge of AWS Cloud services, security, architecture, pricing, and support. AWS issues digital badges through Credly.',
  },
  {
    title: 'Information Security',
    issuer: {
      name: 'Saylor Academy',
      websiteUrl: 'https://www.saylor.org?utm_source=chatgpt.com',
    },
    date: 'April 2026',
    credentialUrl: 'https://learn.saylor.org/admin/tool/certificate/index.php?code=0179264002SY',
    badgeImage: '/certifications/information-security.jpg',
    description:
      'Completed a 46-hour Information Security course with a final score of 93.88%, covering core cybersecurity concepts, security principles, threats, cryptography, access control, and risk management. Saylor provides course completion certificates for completed coursework.',
  },
];
