import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWind
} from 'unocss'

import presetAutoprefixer from 'unocss-preset-autoprefixer'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
	transformers: [transformerDirectives(), transformerVariantGroup()],
	presets: [
		presetAttributify(),
		presetIcons({
			autoInstall: true,
		}),
		presetWind(),
		presetTypography(),
		presetAutoprefixer(['defaults', 'not IE 11']),
	],
})
