import type { RouteRecordRaw } from 'vue-router'

import { route as blog } from '@/app/providers/router/routes/blog.ts'
import { route as main } from '@/app/providers/router/routes/main.ts'

export const routes: RouteRecordRaw[] = [blog, main]
