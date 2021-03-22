import React, {useState} from "react";
import FormCheckbox from "../form-checkbox/form-checkbox";
import {getAllTaxes} from "../../common";
import "./form.scss";

type FormProps = {
  onButtonClick: (isOpen: boolean) => void
}

const Form: React.FC<FormProps> = ({onButtonClick}) => {
  const  [value, setValue] = useState<string>(``);
  const [error, setError] = useState<boolean>(false);
  const [taxes, setTaxes] = useState<number[]>([]);

  const handleSubmit = (evt: React.SyntheticEvent): void => {
    evt.preventDefault();
    setValue(``);
    setTaxes([]);
  }

  const handleChange = (evt: React.FormEvent<HTMLInputElement>): void => {
    evt.preventDefault();
    setValue(evt.currentTarget.value);
    if (!Number(evt.currentTarget.value)) {
      setError(true);
    } else {
      setError(false)
    }
  }

  const handlePayment = () => {
    if (value) {
      setTaxes(getAllTaxes(value))
    }
  }

  return (
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <h2 className="form__title">Налоговый вычет</h2>
        <p className="form__text">
          Используйте налоговый вычет чтобы погасить ипотеку
          досрочно. Размер налогового вычета
          составляет не более 13% от своего официального
          годового дохода.
        </p>
        <label className="form__label" htmlFor="text">Ваша зарплата в месяц</label>
        <input
          onChange={handleChange}
          className={`form__field ${error && `form__field--error`}`}
          type="text"
          name=""
          id="text"
          placeholder="Введите данные"
          required
          value={value}
        />
        <button
          className="form__calc-btn"
          type="button"
          onClick={handlePayment}
        >
          Расчитать
        </button>
        {
          taxes.length > 0 ? <FormCheckbox value={taxes}/> : ``
        }
        <div className="form__group radio">
          <p className="radio__text">Что уменьшаем?</p>
          <div className="radio__wrapper">
            <input className="radio__input" type="radio" name="button" id="payment" defaultChecked={true}/>
            <label className="radio__label" htmlFor="payment">Платеж</label>
            <input className="radio__input" type="radio" name="button" id="term"/>
            <label className="radio__label" htmlFor="term">Срок</label>
          </div>
        </div>
        <button className="form__close-btn" data-testid="close" type="button" onClick={() => onButtonClick(false)}/>
        <button className="form__submit-btn" type="submit" disabled={error && true}>Добавить</button>
      </form>
  )
}

export default Form;
