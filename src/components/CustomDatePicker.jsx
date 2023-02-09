import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';
import range from 'lodash.range';

const CustomDatePicker = ({ value, onChange }) => {
    const years = range(1960, getYear(new Date()) + 1, 1);
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return (
        <DatePicker
            renderCustomHeader={({
                date,
                changeYear,
                changeMonth,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => (
                <div
                    style={{
                        margin: 1,
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                        {'<'}
                    </button>
                    <select value={getYear(date)} onChange={({ target: { value } }) => changeYear(value)}>
                        {years.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <select
                        value={months[getMonth(date)]}
                        onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
                    >
                        {months.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>

                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                        {'>'}
                    </button>
                </div>
            )}
            selected={value}
            onChange={onChange}
            required
        />
    );
};

export default CustomDatePicker;
