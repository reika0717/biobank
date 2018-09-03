<template>
	<div id="wrapper" class="wrapper">
		<p>利用規約</p>
		<label>
			<input type="checkbox" v-model="checked">
			利用規約に同意します。
		</label>
		<br>
		<button id="button" class="off" @click="closeModal">すすむ</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked: false
			}
		},
		methods: {
			closeModal () {
				document.getElementById("wrapper").style.display = "none"
				this.$router.push('/main/')
			}
		},
		watch: {
			checked: function() {
				if(this.checked) {
					this.$store.dispatch('isConfirmedTerms', true);
					document.getElementById("button").classList.remove('off')
				} else {
					this.$store.dispatch('isConfirmedTerms', false);
				}
			}
		}
	}
</script>

<style lang="sass">
	.wrapper
		width: 300px
		height: 500px
		background: white
		position: absolute
		z-index: 9999
		top: 50%
		left: 50%
		transform: translate(-50%, -50%)

	.off
		opacity: .3
		pointer-events: none
</style>