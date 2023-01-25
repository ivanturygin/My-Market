import './SectionTop.css'

import SectionAside from "../SectionAside/SectionAside";
import SectionColor from "../SectionColor/SectionColor";
import SectionMemory from "./../SectionMemory/SectionMemory";
import SectionTable from '../SectionTable/SectionTable';

function SectionTop() {
	return (
		<div>

			<div className="section-top">

				<div className="section-top__conteiner">

					<div className="section-haracteric">

						<SectionColor />

						<SectionMemory/>

						<div className="section-feature">
							<div className="section-feature__conteiner">
								<h3 className="section-feature__title">Характеристики товара</h3>
								<ul className="section-feature__item">
									<li className="section-feature__list">Экран: <b>6.1</b></li>
									<li className="section-feature__list">Встроенная память: <b>128 ГБ</b></li>
									<li className="section-feature__list">Операционная система: <b>iOS 15</b></li>
									<li className="section-feature__list">Беспроводные интерфейсы: <b>NFC, Bluetooth,<span className='list_indent '>Wi-Fi</span></b></li>
									<li className="section-feature__list">Процессор:<a className="section-feature__link"
										href="https://ru.wikipedia.org" ><b>Apple
											A15 Bionic</b></a></li>
									<li className="section-feature__list">Вес:<b>173 г</b></li>
								</ul>
							</div>
						</div>

						<div className="section-descript">

							<div className="section-descript__conteiner">

								<h3 className="section-descript__title">Описание</h3>

								<div className="section-descript__list">

									<p className="section-descript__item descript-top">
										Наша самая совершенная система двух камер.
										Особый взгляд на прочность дисплея. <br></br>
										Чип, с которым всё супербыстро.<br></br>
										Аккумулятор держится заметно дольше.<br></br>
										<span className="section-descript__text">iPhone 13 - сильный мира всего.</span> </p>

									<p className="section-descript__item">
										Мы разработали совершенно новую схему расположения и развернули
										объективы на 45 градусов. Благодаря этому внутри корпуса поместилась
										наша лучшая система двух камер с увеличенной матрицей широкоугольной
										камеры. Кроме того, мы освободили место для системы оптической
										стабилизации изображения сдвигом матрицы. И повысили скорость работы
										матрицы на сверхширокоугольной камере.</p>

									<p className="section-descript__item">
										Новая сверхширокоугольная камера видит больше деталей в тёмных
										областях
										снимков. Новая широкоугольная камера улавливает на 47% больше света для
										более качественных фотографий и видео. Новая оптическая стабилизация со
										сдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении.</p>

									<p className="section-descript__item">
										Режим «Киноэффект» автоматически добавляет великолепные эффекты
										перемещения фокуса и изменения резкости. Просто начните запись видео.
										Режим «Киноэффект» будет удерживать фокус на объекте съёмки, создавая
										красивый эффект размытия вокруг него. Режим «Киноэффект» распознаёт,
										когда нужно перевести фокус на другого человека или объект, который
										появился в кадре. Теперь ваши видео будут смотреться как настоящее кино.</p>
								</div>
							</div>
						</div>
						<SectionTable/>
					</div>
					<SectionAside />
				</div>
			</div>
		</div>
	)
}

export default SectionTop;

