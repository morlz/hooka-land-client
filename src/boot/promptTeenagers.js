import { Dialog } from 'quasar'

export default ({ Vue }) => {
	Dialog.create({
		title: 'Подтвердите, что вам больше 18 лет',
		message: '',
		cancel: 'Уйти',
		ok: 'Мне есть 18 лет'
	}).onCancel(() => {
		window
			.open("about:blank", "_self")
			.close()
	}) 
}