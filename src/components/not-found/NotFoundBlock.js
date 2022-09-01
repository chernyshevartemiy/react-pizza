import React from "react";
import styles from "./NotFoundBlock.module.scss";

function NotFoundBlock() {
	return (
		<>
			<div className={styles.root}>
				<span>😕</span>
				<br />
				<h1>Ничего не найдено</h1>
				<div className={styles.description}>
					К сожалению данная страница отсутствует в нашем
					интернет-магазине
				</div>
			</div>
		</>
	);
}

export default NotFoundBlock;
