import { cva, type VariantProps } from 'class-variance-authority'

export { default as Title } from './Title.vue'

export const titleVariants = cva('scroll-m-20 tracking-tight', {
	variants: {
		variant: {
			h1: 'text-[32px] font-bold text-gray-900 max-[801px]:text-[22px]',
			h2: 'text-[22px] text-black font-semibold'
		}
	},
	defaultVariants: {
		variant: 'h2'
	}
})

export type TitleVariants = VariantProps<typeof titleVariants>
