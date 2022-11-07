import React, { useState } from 'react'
import { nanoid } from 'nanoid'
//COMPONENTS
import css from './ContactForm.module.css'

const initialState = {
		name: '',
		number: '',
}

export default function ContactForm({ onSubmit }) {
	const [state, setState] = useState(initialState);
	const nameId = nanoid()
	const numberId = nanoid()

	const handleChange = e => {
		const { name, value } = e.target;

		setState((prev) => {
			return {
				...prev,
				[name]: value,
			}
		}) 
	}
	const handelSubmit = e => {
		e.preventDefault()
		const { name, number } = state;
		onSubmit({ name, number })
		setState(initialState);
	}
	return (
		<>
		      <h1>Phonebook</h1>

				<fieldset>
					<form onSubmit={handelSubmit}>
						<label>
							<h2 className={css.title}>Name</h2>
							<input
								id={nameId}
								type="text"
								value={state.name}
								name="name"
								onChange={handleChange}
								placeholder="Please enter your full name "
								pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
								title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
								required
							/>
						</label>

						<label>
							<h2 className={css.title}>Number</h2>
							<input
								id={numberId}
								type="tel"
								name="number"
								onChange={handleChange}
								value={state.number}
								placeholder="Please enter your number"
								pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
								title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
								required
							/>
						</label>
						<button className={css.addBtn}>Add Contact</button>
					</form>
			</fieldset>
			</>
	)
};