import styles from './Footer.module.scss'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import ReactTooltip from 'react-tooltip';

export default function Footer(){
  return (

<>
    <div className={styles.icon}>
    <ReactTooltip effect="solid" />
      <i data-tip="Faça seu orçamento." data-type="dark"><FaWhatsapp /></i>
    </div>
    
</>

  )
}