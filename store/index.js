import Vuex from 'vuex'

export const state = {
	IS_FAILED_AUTHORIZATION: 'isFailedAuthorization',
	IS_LOGINED: 'isLogined',
	IS_CONFIRMED_TERMS: 'isConfirmedTerms',
	HISTORY: 'history'
};

const store = () => new Vuex.Store({
	state: {
		isTest: true,
		isFailedAuthorization: (() => {
			return window.location.hash === '#error'
		})(), // AMED ログインからリダイレクトされて認証エラーが起きているか
		isLogined: false,
		isConfirmedTerms: (() => {
			window.localStorage.setItem('confirm-terms', 'ほげ')
			console.log(window.localStorage.getItem('confirm-terms'))
			window.localStorage.getItem('confirm-terms') === 'done'}
		)(),
		history: []
	},
	getters: {
		isFailedAuthorization: state => state.isFailedAuthorization,
		isConfirmedTerms: state => state.isConfirmedTerms,
		isLogined: state => state.isLogined,
		history: state => state.history
	},
	actions: {
		[state.IS_LOGINED] ({commit}, bool) {
			commit(state.IS_LOGINED, bool);
		},
		[state.IS_CONFIRMED_TERMS] ({commit}, bool) {
			commit(state.IS_CONFIRMED_TERMS, bool);
		},
		[state.HISTORY] ({commit}, history) {
			commit(state.HISTORY, history);
		}
	},
	mutations: {
		[state.IS_LOGINED] (state, bool) {
			state.isLogined = bool;
		},
		[state.IS_CONFIRMED_TERMS] (state, bool) {
			state.isConfirmedTerms = bool;
		},
		[state.HISTORY] (state, history) {
			state.history = history;
		}
	}
})

export default store