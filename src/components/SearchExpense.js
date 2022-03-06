import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const SearchExpense = () => {
    const { expenses } = useContext(AppContext);

    const searchExpense = expenses.filter((expenses) => {
        return expenses.expense
    }, [])

    const onSubmit = (event) => {
		event.preventDefault();
    }

    
    const [name, setName] = useState('');


    return (
        <form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id={name}
						value={searchExpense}
						onChange={(event) => setName(event.target.value)}
					></input>
				</div>
            </div>
        </form>
    )
}

export default SearchExpense;