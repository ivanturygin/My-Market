import './SectionTable.css'

function SectionTable() {
	return (

		<div className="section-table">
			<div className="section-table__conteiner">
				<h3 className="section-table__title">Сравнение моделей</h3>

				<table className="section-table__table">

					<thead className="section-table__head">
						<tr>
							<th className="section-table__cell">Модель</th>
							<th className="section-table__cell">Вес</th>
							<th className="section-table__cell">Высота</th>
							<th className="section-table__cell">Ширина</th>
							<th className="section-table__cell">Толщина</th>
							<th className="section-table__cell">Чип</th>
							<th className="section-table__cell">Объём памяти</th>
							<th className="section-table__cell">Аккумулятор</th>
						</tr>
					</thead>

					<tbody className="section-table__body">
						<tr className="section-table__column-one">
							<td className="section-table__column-item">Iphone11</td>
							<td className="section-table__column-item">194 грамма</td>
							<td className="section-table__column-item">150.9 мм</td>
							<td className="section-table__column-item">75.7 мм</td>
							<td className="section-table__column-item">8.3 мм</td>
							<td className="section-table__column-item">A13 Bionicchip</td>
							<td className="section-table__column-item">до 128 Гб</td>
							<td className="section-table__column-item">До 17 часов</td>
						</tr>

						<tr className="section-table__column-two">
							<td className="section-table__column-item">Iphone12</td>
							<td className="section-table__column-item">164 грамма</td>
							<td className="section-table__column-item">146.7 мм</td>
							<td className="section-table__column-item">71.5 мм</td>
							<td className="section-table__column-item">7.4 мм</td>
							<td className="section-table__column-item">A14 Bionicchip</td>
							<td className="section-table__column-item">до 256 Гб</td>
							<td className="section-table__column-item">До 19 часов</td>
						</tr>

						<tr className="section-table__column-three">
							<td className="section-table__column-item">Iphone13</td>
							<td className="section-table__column-item">174 грамма</td>
							<td className="section-table__column-item">146.7 мм</td>
							<td className="section-table__column-item">71.5 мм</td>
							<td className="section-table__column-item">7.65 мм</td>
							<td className="section-table__column-item">A15 Bionicchip</td>
							<td className="section-table__column-item">до 512 Гб</td>
							<td className="section-table__column-item">До 19 часов</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

			);
}


export default SectionTable;

