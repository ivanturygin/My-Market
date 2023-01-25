import {useCurrentDate} from "@kundinos/react-hooks";
import styles from "./Footer.module.css";

function Footer(props) {
	const currentDate = useCurrentDate();
	const fullYear = currentDate.getFullYear();
	return (

			<footer className={styles.footer}>
			<div className={styles.conteiner}>
				<div className={styles.inner}>
						<div>
						<p className={styles.content__top}>© ООО «<span className={styles.content__color}>Мой</span>{`Маркет», 2018-${fullYear}.`}
							</p>
						<p className={styles.content__text}>Для уточненияинформации звоните по номеру
							<a className={styles.content__link} href="tel:+79000000000"> +7 900 000 0000</a>, <br></br>
									предложения по сотрудничеству отправляйте на почту
							<a className={styles.content__link} href="mailto:partner@mymarket.com"> partner@mymarket.com</a>”</p>
						</div>
						<div>
						<a className={styles.up__link} href="#top">Наверх</a>
						</div>
					</div>
				</div>
			</footer>
		
	);
}

export default Footer;