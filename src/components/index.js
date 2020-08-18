import Vue from "vue"
import Finput from "./Finput.vue"
import Fmodal from "./Fmodal.vue"

const Components = {
	Finput,
	Fmodal
}

Object.keys(Components).forEach(name => {
	Vue.Components(name, Components[name])
})

export default Components