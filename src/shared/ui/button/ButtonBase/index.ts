import { cva, type VariantProps } from 'class-variance-authority'

export { default as ButtonBase } from './ButtonBase.vue'

export const buttonBaseVariants = cva(
	'flex items-center justify-center rounded-md font-semibold cursor-pointer ease-linear duration-300',
	{
		variants: {
			variant: {
				default: 'bg-primary text-white hover:bg-primary/90 active:bg-primary/80',
				ghost: 'bg-primary-light text-primary hover:bg-primary-light/90 active:bg-primary-light/80',
				disable: 'bg-gray-100 text-gray-500 cursor-no-drop'
			},
			size: {
				default: 'w-[120px] h-[38px] text-[13px]'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	}
)

export type ButtonBaseVariants = VariantProps<typeof buttonBaseVariants>
