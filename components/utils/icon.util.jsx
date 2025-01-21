import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faCircleNotch,faFingerprint,faSeedling,faEarListen,faWindowRestore ,faQrcode,faCube,faLayerGroup,faSolarPanel,faDiagramProject,faTableCells,faLaptopCode,faArrowUpRightFromSquare,faTwitter,faWhatsapp,faLinkedin,faSquareGithub} from '@fortawesome/free-solid-svg-icons';

//<FontAwesomeIcon icon={faFingerprint} />

// Map icon names to imports
const iconMap = {
  'fa-arrow-right-from-bracket': faArrowRightFromBracket,
  'fa-circle-notch': faCircleNotch,
  'ear-listen': faEarListen,
  'fingerprint':faFingerprint,
  'faSeedling':faSeedling,
  'faQrcode':faQrcode,
  'faWindowRestore':faWindowRestore,
  'faCube':faCube,
  'faLayerGroup':faLayerGroup,
  'faSolarPanel':faSolarPanel,
  'faDiagramProject':faDiagramProject,
  'faTableCells':faTableCells,
  'faLaptopCode':faLaptopCode,
  'faArrowUpRightFromSquare':faArrowUpRightFromSquare,
'faGithub':faSquareGithub,
'faLinkedin':faLinkedin,
'faWhatsapp':faWhatsapp,
'faTwitter':faTwitter
};

export default function Icon({ iconName }) {
	console.log(`the value of icon is ${JSON.stringify( iconMap[iconName])} and ico name is ${iconName}`)
  const resolvedIcon = iconMap[iconName] || faCircleNotch; // Default to circle-notch
  return <FontAwesomeIcon icon={resolvedIcon} />;
}

// Usage:
// <Icon iconName="fa-arrow-right-from-bracket" />
