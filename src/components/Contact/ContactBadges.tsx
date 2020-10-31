const ContactBadges: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-12 md:grid-cols-6">
      <a href="mailto:hossein98.ahmadi@gmail.com" target="_blank">
        <img
          src="https://img.shields.io/badge/gmail-D14836?&style=for-the-badge&logo=gmail&logoColor=white"
          className="w-full rounded-lg h-full"
          alt="gmail"
        />
      </a>
      <a href="https://twitter.com/Hossein98Ahmadi" target="_blank">
        <img
          src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white"
          className="w-full rounded-lg h-full"
          alt="twitter"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/hossein-ahmadi-46690a116/"
        target="_blank"
      >
        <img
          src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
          className="w-full rounded-lg h-full"
          alt="linkedin"
        />
      </a>
      <a href="https://github.com/hosseinAMD" target="_blank">
        <img
          src="https://img.shields.io/badge/github-%23100000.svg?&style=for-the-badge&logo=github&logoColor=white "
          className="w-full rounded-lg h-full"
          alt="github"
        />
      </a>
      <a
        href="https://stackoverflow.com/users/11752942/hossein-ahmadi"
        target="_blank"
      >
        <img
          src="https://img.shields.io/badge/stack%20overflow-FE7A16?logo=stack-overflow&logoColor=white&style=for-the-badge "
          className="w-full rounded-lg h-full"
          alt="stackoverflow"
        />
      </a>
      <a href="https://medium.com/@hossein98.ahmadi" target="_blank">
        <img
          src="https://img.shields.io/badge/medium-%2312100E.svg?&style=for-the-badge&logo=medium&logoColor=white"
          className="w-full rounded-lg h-full"
          alt="medium"
        />
      </a>
    </div>
  );
};

export default ContactBadges;
