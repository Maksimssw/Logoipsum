import { cva, type VariantProps } from 'class-variance-authority'

export { default as ButtonFilter } from './ButtonFilter.vue'

export const buttonFilterVariants = cva('cursor-pointer flex items-center justify-center ease-linear duration-200', {
	variants: {
		variant: {
			default: 'bg-primary-light text-primary-active hover:bg-primary-20',
			active: 'bg-primary text-white'
		},
		size: {
			default: 'rounded-[20px] h-[32px] gap-[6px] py-[6px] px-[14px] max-md:text-[14px]'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
})

export type ButtonFilterVariants = VariantProps<typeof buttonFilterVariants>
