import { FaReact, FaJava, FaPython} from 'react-icons/fa';
import { SiPostgresql, SiMysql, SiHtml5, SiChakraui, SiCss3, SiJavascript} from "react-icons/si";
import { DiDjango} from "react-icons/di";

const TechStackBar = ({ icons }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {icons.map((icon, index) => {
        const IconComponent = icon.component;
        return (
          <IconComponent
            key={index}
            size={icon.size || 40}
            style={{ marginRight: index === icons.length - 1 ? 0 : '20px' }}
          />
        );
      })}
    </div>
  );
};

TechStackBar.defaultProps = {
  icons: [
      { component: FaPython, size: 40 },
      { component: FaJava, size: 40 },
      { component: SiHtml5, size: 40 },
      { component: SiCss3, size: 40 },
      { component: SiJavascript, size: 40 },
      { component: FaReact, size: 40 },
      { component: SiChakraui, size: 40 },
    { component: SiMysql, size: 40 },
    { component: SiPostgresql, size: 40 },
    { component: DiDjango, size: 40 },
  ],
};

export default TechStackBar;