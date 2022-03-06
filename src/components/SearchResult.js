// import React, { useContext } from 'react';
// import ExpenseItem from './ExpenseItem';

// import { AppContext } from '../context/AppContext';

// // const ExpenseList = () => {
// // 	const { expenses } = useContext(AppContext);

// // 	return (
// // 		<ul className='list-group'>
// // 			{expenses.map((expense) => (
// // 				<ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
// // 			))}
// // 		</ul>
// // 	);
// // };

// const ExpenseItem = (props) => {
//     const { dispatch } = useContext(AppContext);

// 	const handleDeleteExpense = () => {
// 		dispatch({
// 			type: 'DELETE_EXPENSE',
// 			payload: props.id,
// 		});
// 	};
// 	return (
// 		<li className='list-group-item d-flex justify-content-between align-items-center'>
// 			{props.name}
// 			<div>
// 				<span className='badge badge-primary badge-pill mr-3'>
// 					${props.cost}
// 				</span>
// 				<TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
// 			</div>
// 		</li>
// 	);
// };


// export default SearchResult