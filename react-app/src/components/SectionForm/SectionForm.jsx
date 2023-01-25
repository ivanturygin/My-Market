import { useState } from 'react';
import './SectionForm.css';

function SectionForm() {

	const [name, setName] = useState(() => {
		const savedName = localStorage.getItem('userName');
		return savedName || ''
	});

	const [grade, setGrade] = useState(() => {
		const savedGrade = localStorage.getItem('userGrade');
		return savedGrade || ''
	});

	const [errorName, setErrorName] = useState('');
	const [errorGrade, setErrorGrade] = useState('');

	const [textErrorName, setTextErrorName] = useState('');
	const [textErrorNum, setTextErrorNum] = useState('');

	let dataName = name.length;
	let dataGrade = +grade;

	const handleName = (e) => {
		setName(e.target.value);
		localStorage.setItem('userName', e.target.value);
	};

	const handleGrade = (e) => {
		setGrade(e.target.value)
		localStorage.setItem('userGrade', e.target.value);
	};

	const handleFocusGrade = (e) => {
		setErrorName('');
		setErrorGrade('');
	};

	const handleFocusName = (e) => {
		setErrorName('');
		setErrorGrade('');
	};

	if (errorName && errorGrade) {
		setErrorGrade('')
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		localStorage.removeItem('userName');
		localStorage.removeItem('userGrade');

		if (dataName <= 2) {
			setErrorName('nameNull')
			setTextErrorName('Имя не может быть короче 2-х символов')
		};

		if (dataName === 0) {
			setErrorName('nameNull')
			setTextErrorName("Вы забыли указать имя или фамилию")
		};

		if (dataGrade === 0) {
			setErrorGrade('gradeNull')
			setTextErrorNum("Оценка должна быть от 1 до 5")
		}

		if (!dataGrade) {
			setErrorGrade('gradeNull')
			setTextErrorNum("Оценка должна быть от 1 до 5")
		}

		if (dataGrade < 1 || dataGrade > 5) {
			setErrorGrade('gradeNull');
			setTextErrorNum("Оценка должна быть от 1 до 5");

		};

	};

	return (
		<div>

			<div className="section-form">

				<div className="section-form__conteiner">

					<div className="section-form__inner">

						<form className="section-form__frm" action="#" name="newform" method="get" onSubmit={handleSubmit}>

							<h3 className="section-form__title">Добавить свой отзыв</h3>

							<div className="section-form__top">

								<div className="section-form__inner-input">

									<input className="section-form__input-text" type="text" name="name" placeholder="Имя и фамилия"
										value={name} onInput={handleName} onFocus={handleFocusName} />

									{errorName === 'nameNull' && <div className={`input-error ${errorName ? "section-form_enable" : ""}`}>
										<div className="input-error__text">{`${textErrorName}`}</div>
									</div>
									}

								</div>

								<div className="section-form__inner-num">

									<input className="section-form__input-num" type="text" name="grade" placeholder="Оценка" min="1" max="5"
										value={grade} onInput={handleGrade} onFocus={handleFocusGrade} />

									{errorGrade === 'gradeNull' && <div className={`num-error ${errorGrade ? "section-form_enable" : ""}`}>

										<div className="num-error__text">{`${textErrorNum}`}</div>
									</div>
									}

								</div>

							</div>

							<textarea className="section-form__area" name="review" id="" cols="30" rows="10"
								placeholder="Текст отзыва"></textarea>

							<div className="section-form__button">
								<input className="section-form__btn" type="submit" value="Отправить отзыв" />
							</div>

						</form>
					</div>
				</div>
			</div>

		</div>

	)

};


export default SectionForm;
