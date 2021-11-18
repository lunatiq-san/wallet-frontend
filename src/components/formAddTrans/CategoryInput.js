import React, { useState } from "react";
import styles from "./CategoryInput.module.css";
import categoriesList from '../../redux/categories/categories'



const CategoryInput = ({ type, categoryPick, setCategory }) => {
  const [isCategories, setIsCategories] = useState(false);

  const costsCategory = categoriesList;
  const incomeCategory = "Доход";

  const handleClick = () => {
    setIsCategories(!isCategories);
  };

  const handleCategoryClick = (e) => {
    setCategory(e.currentTarget.value);
    handleClick();
  };

  return (
    <div className={styles.form_input_category_parent}>
      <input
        className={styles.form_input_category}
        autoComplete="off"
        id="category_input"
        type="text"
        readOnly
        value={categoryPick}
        placeholder={
          type === "costs" ? "Категория pacходов" : "Доход"
        }
        onClick={handleClick}
        onFocus={handleClick}
      />
      {!isCategories || (
        <ul className={styles.form_category_list}>
          {type === "costs"
            ? costsCategory.map({_id, name} => (
                <li key={_id}>
                  <label tabIndex={0} className={styles.category_label}>
                    <input
                      onClick={handleCategoryClick}
                      hidden
                      value={costs}
                      readOnly
                      type="radio"
                      name="exp_category"
                      className={styles.radiobutton}
                    />
                    {name}
                  </label>
                </li>
              ))
            : (<label className={styles.category_label}>
                    <input
                      onClick={handleCategoryClick}
                      hidden
                      value={incomeCategory}
                      readOnly
                      type="radio"
                      name="exp_category"
                      className={styles.radiobutton}
                    />
                    {incomeCategory}
                  </label>
              )}
        </ul>
      )}
      {!isCategories ? (
        <span
          // className={styles.arrow_down}
          onClick={handleClick}
          onFocus={handleClick}
          id="arrow"
        ></span>
      ) : (
        <span
          // className={styles.arrow_up}
          onClick={handleClick}
          onFocus={handleClick}
          id="arrow"
        ></span>
      )}
    </div>
  );
};

export default CategoryInput;