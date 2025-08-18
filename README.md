
# 🖥️ Logoipsum

---

## 🔧 Технологии

<div align="left">
  <img src="https://img.shields.io/badge/Vue.js-35495E?logo=vue.js&logoColor=4FC08D&style=for-the-badge" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Pinia-FFD43B?logo=pinia&logoColor=black&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/VeeValidate-6E57E0?logo=vee-validate&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Zod-EF4444?logo=zod&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black&style=for-the-badge" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white&style=for-the-badge" />
</div>

---

## 🛠️ Установка и запуск проекта

### 📦 Системные требования

- **Node.js** >= 20.15.0
- **Yarn** >= 1.22.22
- **Docker** >= 17.05 (только для production)

### 📁 Установка зависимостей

```bash
yarn install
```

### 🚀 Скрипты

| Команда                  | Назначение                             |
|--------------------------|----------------------------------------|
| `yarn dev`               | Запуск проекта в dev-режиме (Vite)     |
| `yarn build`             | Сборка production-сборки               |
| `yarn preview`           | Локальный просмотр прод-сборки         |
| `yarn lint`              | Проверка кода с помощью ESLint         |
| `yarn format`            | Форматирование кода через Prettier     |

---

## 🐳 Docker (production)

Docker используется для сборки production-сборки на базе NGINX.

### 🔧 Сборка и запуск

```bash
docker build -t logoipsum .
docker run -p 5252:80 logoipsum
```

## 🧩 Работа с кастомными хуками / `emit` / `props`

### 🪝 Кастомные хуки (`use*`)

**Кастомные хуки** создаются по соглашению `use<Something>` и размещаются в:

- `shared/lib/`
- `shared/ui/`
- `entities/.../model/`
- `features/.../model/`

Хуки могут включать:

- работу с `vue-query`,
- реактивное состояние (`ref`, `reactive`),
- жизненные циклы (`onMounted`, `watch`, и др.),
- бизнес-логику вне компонентов.

#### 📁 Пример: `useRefNumber.ts`

```ts
export const useRefNumber = (init: number): IUseRefNumber => {
    const value = shallowRef<number>(init)
    
    const increment = (num: number = 1): void => {
        value.value += num
    }
    
    const decrement = (num: number = 1): void => {
        value.value -= num
    }
    
    const setValue = (num: number): void => {
        value.value = num
    }
    
    return {
        value,
        decrement,
        setValue,
        increment
    }
}
````

---

### 📤 Работа с `props` и `emit`

Используется:

- `defineProps<T>()` — типизация входных параметров
- `defineEmits<{ (event: string, payload: T): void }>()` — типизация событий

#### 📦 Пример

```vue
<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void
  (event: 'submit'): void
}>()

const onInput = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <input :value="props.modelValue" @input="onInput" />
  <button @click="emit('submit')">Отправить</button>
</template>
```

---

### 🧠 Именование и структура

| Элемент         | Подход              | Пример                                 |
|-----------------|---------------------|----------------------------------------|
| Хуки            | `use<Что-то>`       | `useToggle`, `useForm`                 |
| Props           | `defineProps`       | `defineProps<{ id: string }>()`        |
| Emits           | `defineEmits`       | `defineEmits<{ (e: 'open'): void }>()` |
| События         | `camelCase`         | `'update:modelValue'`, `'openModal'`   |
| Структура       | FSD + MVVM          | `features/.../model/`, `shared/lib`    |

📌 Такой подход делает код типобезопасным, масштабируемым и легко поддерживаемым.


## 🏗 Архитектура проекта: FSD + MVVM

В проекте используется **Feature-Sliced Design (FSD)**, дополненная паттерном **Model–View–ViewModel (MVVM)**. Такая архитектура помогает масштабировать приложение, повышать читаемость и облегчает сопровождение.

---

### 📁 Структура FSD

```text
src/
├── app/                # Инициализация приложения, роутинг, глобальные плагины
├── shared/             # Повторно используемые сущности (утилиты, хуки, компоненты, стили)
│   ├── api/            # Конфигурация axios, запросы к серверу
│   ├── lib/            # Утилиты, хелперы, абстракции, хуки
│   ├── ui/             # UI-компоненты (базовые, стилизованные)
│   ├── config/         # Константы, env, настройки проекта
├── entities/           # Бизнес-сущности (User, Blog, и т.п.)
├── features/           # Фичи — минимальные пользовательские сценарии
│   └── blog/           # Блог: форма, логика, валидация
│       ├── model/      # Состояние, хуки, бизнес-логика
│       ├── ui/         # Компоненты
├── pages/              # Страницы (собирают фичи и сущности)
└── widgets/            # Самодостаточные части интерфейса (шапка, сайдбар)
```

---

### 🔄 Связка MVVM

- **Model** — хранит состояние, бизнес-логику и обращения к API (`model/` в `features/` и `entities/`).
- **View** — Vue-компоненты (`ui/`), получают данные через props/composables.
- **ViewModel** — функции-хуки (`use*`), преобразующие данные из модели в нужный формат для компонентов.

#### Пример:

```
[Model] useBlogStore → useIsBoolean() / useReactiveArray() / useRefString()
    ↓
[ViewModel] useBlogLogic / useBlogStore → объединяет данные, валидацию, запросы к api, и обработчики
    ↓
[View] <BlogPostComments /> / <BlogTagsFilter /> → подписан на реактивные данные, вызывает методы
```

---

### 📌 Принципы

- **Чёткое разделение** логики, состояния и представления
- Использование **composables** (`use*`) как ViewModel
- Вынос логики в хуки и `model/`, а не в компоненты
- Минимум связи между слоями (low coupling)

---

### ✅ Преимущества

- Масштабируемость: легко добавлять новые фичи
- Повторное использование логики через хуки
- Тестируемость: бизнес-логика отделена от UI
- Поддержка и onboarding команды упрощены

