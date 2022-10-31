// export {default as Ring} from './components/Ring'
import Ring from './components/Ring/index.vue'
const components = {Ring}

const plugin = {
    install(Vue) {
        for(const prop in components) {
            if(components.hasOwnProperty(prop)) {
                const component = components[prop]
                Vue.component(component.name, component)
            }

        }
    }
}

export default plugin