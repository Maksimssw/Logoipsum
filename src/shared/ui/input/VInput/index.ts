import { cva, type VariantProps } from 'class-variance-authority'

export { default as VInput } from './VInput.vue'

export const inputVariants = cva('text-[13px] border border-gray-100', {
	variants: {
		variant: {
			default: 'bg-gray-100 text-gray-900 placeholder:text-gray-400 hover:border-primary'
		},
		size: {
			default: 'rounded-md w-[400px] h-[40px] gap-[10px] py-[13px] pl-[34px] pr-[10px]'
		}
	},
	defaultVariants: {
		variant: 'default',
		size: 'default'
	}
})

export type InputVariants = VariantProps<typeof inputVariants>
