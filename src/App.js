import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const expenses = [
		{
			id: "el-1",
			title: "가나다라",
			amount: 1201,
			date: new Date(2023, 0, 12),
		},
		{
			id: "el-2",
			title: "마바사아자",
			amount: 1202,
			date: new Date(2023, 1, 15),
		},
		{
			id: "el-3",
			title: "차카타파하",
			amount: 1203,
			date: new Date(2023, 1, 20),
		},
		{
			id: "el-4",
			title: "우리나라",
			amount: 1204,
			date: new Date(2023, 0, 23),
		},
	];

	const addExpenseData = (expense) => {
		console.log("In App.js");
		console.log(expense);
	};

	return (
		<div>
			<h2>Let's get started!</h2>
			<NewExpense onAddExpenseData={addExpenseData} />
			<Expenses items={expenses} />
		</div>
	);
}

export default App;
