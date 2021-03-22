import React from "react";
import {getEnding} from "../../common";
import "./form-checkbox.scss";

type FormCheckboxProps = {
  value: Array<number>;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({value}) => {


  return (
    <div className="form__checkbox checkbox">
          <p className="checkbox__text">Итого можете внести в качестве досрочных:</p>
          {
            value.map((item, i) => {
              const itemNumber = i + 1;
              return <label className="checkbox__label" key={item + i}>
              <input className="checkbox__input" type="checkbox"/>
              <span className="checkbox__check"></span>
              {item} рублей
              <span> в {itemNumber}-{getEnding(itemNumber)} год</span>
            </label>
            }
            )
          }
        </div>
  )
}

export default FormCheckbox;
