import Vue from 'vue'

const content = {
  development: [
    { title: "Enforce linter rules", stage: "seed", value: false },
    { title: "Do code review", stage: "seed", value: false },
    { title: "Enforce a project management methodology", description: "Sprint/Kanban whatever but enforce a way for your team to keep deadlines.", stage: "seed", value: false },
    { title: "Define a technical lead", description: "You need someone to be your shadow on the battlefield", stage: "serie A", value: false },
    { title: "Hire a DevOps", description: "Your team probably needs more time on the code and less on the ops.", stage: "serie A", value: false },
    { title: "Hire a QA Engineer", description: "Your team probably needs more time on the code and less on the quality.", stage: "serie A", value: false },
  ],
  devops: [
    { title: "Deploy from CI", stage: "seed", value: false },
    { title: "Create a staging environment", stage: "seed", value: false },
    { title: "Create a demo environment", stage: "seed", value: false },
    { title: "Ensure blue/green deployment", description: "You don't want your production environment to be down while releasing.", stage: "seed", value: false },
    { title: "Create a disaster recovery protocol", description: "This would reduce the amount of time you spend down in case of a disaster.", stage: "seed", value: false },
    { title: "Setup monitoring/alerting", stage: "seed", value: false },
    { title: "Build a (more) scalable infrastructure", stage: "serie A", value: false },
  ],
  security: [
    { title: "Ensure your domain names are secured", stage: "seed", value: false },
    { title: "Be honest and transparent about any data you collect", stage: "seed", value: false },
    { title: "Make sure all your critical services are secured", stage: "seed", value: false },
    { title: "Make sure your email is secured", stage: "seed", value: false },
    { title: "Do not share WiFi", stage: "seed", value: false },
    { title: "Accustom everyone to security practices", stage: "seed", value: false },
    { title: "Require 2FA in your services", stage: "seed", value: false },
    { title: "Encrypt all employee laptops & phones", stage: "seed", value: false },
    { title: "Accustom your team to locking their machines while away", stage: "seed", value: false },
    { title: "Use a password manager to ensure you only use strong passwords", stage: "seed", value: false },
    { title: "Use SSL certificates to secure people using your website", stage: "seed",  value: false },
    { title: "Check your website’s basic security", stage: "seed",  value: false },
    { title: "Isolate assets at the network level", stage: "seed",  value: false },
    { title: "Keep your OS up to date", stage: "seed",  value: false },
    { title: "Enforce a password policy", stage: "seed",  value: false },
    { title: "Enforce a secure code review checklist", stage: "seed",  value: false },
    { title: "Use a static security code analysis tool", stage: "seed",  value: false },
    { title: "Maintain a backlog of security concerns in your issue tracking tool", stage: "seed",  value: false },
    { title: "Never do cryptography yourself", stage: "seed",  value: false },
    { title: "Keep secrets away from code", stage: "seed",  value: false },
    { title: "Backup, then backup again", stage: "seed",  value: false },
    { title: "Follow an onboarding / offboarding checklist", stage: "seed",  value: false },
    { title: "Run it unprivileged", stage: "seed",  value: false },
    { title: "Monitor your dependencies", stage: "seed",  value: false },
    { title: "Use a real-time protection service", stage: "serie A",  value: false },
    { title: "Do not share accounts", stage: "serie A",  value: false },
    { title: "Restrict internal services by IP addresses (your company’s ISP, VPNs, etc.)", stage: "serie A",  value: false },
    { title: "Centralize and archive your logs and make them meaningful", stage: "serie A",  value: false },
    { title: "Protect your application from DDoS attacks", stage: "serie A",  value: false },
    { title: "Keep a list of your servers", stage: "serie A",  value: false },
    { title: "Watch for unusual patterns in your metrics", stage: "serie A",  value: false },
    { title: "Use centralized account management", stage: "serie A",  value: false },
    { title: "Encourage your users to use 2FA", stage: "serie A",  value: false },
    { title: "Monitor your users’ suspicious activities", stage: "serie A",  value: false },
    { title: "Take special care of your non-tech employees", stage: "serie A",  value: false },
    { title: "Have a public security policy", stage: "serie A",  value: false },
    { title: "Have an internal security policy", stage: "post serie A",  value: false },
    { title: "Set up a bug bounty program", stage: "post serie A",  value: false },
    { title: "Make an inventory of your company’s assets", stage: "post serie A",  value: false },
    { title: "Have a security incident response plan", stage: "post serie A",  value: false },
    { title: "Know how to redeploy infrastructure from scratch", stage: "post serie A",  value: false },
    { title: "Perform security oriented test sessions", stage: "post serie A",  value: false },
    { title: "Use a secure development life cycle", stage: "post serie A",  value: false },
    { title: "Hire an external penetration testing team", stage: "post serie A",  value: false },
  ],
  quality: [
    { title: "Write unit tests and use them before release", stage: "seed", value: false },
    { title: "Make manual test before release", stage: "seed", value: false },
    { title: "Deploy e2e tests", stage: "serie A", value: false },
    { title: "Create acceptability criterias in User Stories", stage: "serie A", value: false },
    { title: "Monitor your bugs, and resolution time", stage: "serie A", value: false },
    { title: "Define a Service Level Agreement (SLA) policy", stage: "serie A", value: false },
  ],
  people: [
    { title: "Create a hiring process", description: "The more you test your candidates, the better they are.", stage: "seed", value: false },
    { title: "Create scorecard before hiring someone", description: "Don't hire without behing crystal clear with what you need.", stage: "seed", value: false },
    { title: "Create a salary framework and share it among your team", description: "The more you test your candidates, the better they are.", stage: "serie A", value: false },
    { title: "Plan salary raise", description: "Expose to your team what they need to do to get promoted.", stage: "serie A", value: false },
    { title: "Recruite a VP Eng or a CTO", description: "Are you more a manager or a tech guru ? Hire who you are not.", stage: "serie A", value: false },
    { title: "Build a 1 to 1 culture", description: "Don't let frustration get over your team. Make 1 to 1 at least once a month with every team member.", stage: "serie A", value: false },
  ],
}

content.data = function () {
  const c = content;

  Object.keys(c).forEach((key) => {
    if (typeof c[key] === 'function') {
      delete c[key]
    }
  })
  return c
}

content.install = function () {
  Object.defineProperty(Vue.prototype, '$content', {
    get() { return content }
  })
}

export default content
