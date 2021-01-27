import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import {
  TDropdown,
  TInput
} from 'vue-tailwind/dist/components'

const settings = {
  // components
  't-dropdown': {
    component: TDropdown,
    props: {
      fixedClasses: {
        button: 'flex items-center text-gray-900 block transition duration-100 ease-in-out border border-transparent focus:border-transparent focus:ring-2 focus:ring-transparent focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
        wrapper: '',
        dropdownWrapper: 'relative z-10',
        dropdown: 'origin-top-left absolute left-0 w-56 rounded shadow mt-1',
        enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
        enterToClass: 'transform opacity-100 scale-100',
        leaveClass: 'transition ease-in transform opacity-100 scale-100',
        leaveToClass: 'transform opacity-0 scale-95 duration-75'
      },
      classes: {
        button: '',
        dropdown: 'bg-white'
      },
      variants: {
        danger: {
          button: 'bg-red-500 hover:bg-red-600',
          dropdown: 'bg-red-50'
        },
        right: {
          wrapper: 'inline-flex flex'
        },
        bottom: {
          wrapper: 'inline-flex flex-col'
        }
      }
    }
  },
  't-dropdown-x': {
    component: TDropdown,
    props: {
      fixedClasses: {
        button: 'flex items-center text-gray-900 block transition duration-100 ease-in-out border border-transparent focus:border-transparent focus:ring-2 focus:ring-transparent focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed',
        wrapper: 'inline-flex flex',
        dropdownWrapper: 'relative z-10',
        dropdown: 'origin-top-left absolute left-0 w-56 rounded shadow ml-1',
        enterActiveClass: 'transition ease-out duration-100 transform opacity-0 scale-95',
        enterToClass: 'transform opacity-100 scale-100',
        leaveClass: 'transition ease-in transform opacity-100 scale-100',
        leaveToClass: 'transform opacity-0 scale-95 duration-75'
      },
      classes: {
        button: '',
        dropdown: 'bg-white'
      },
      variants: {
        danger: {
          button: 'bg-red-500 hover:bg-red-600',
          dropdown: 'bg-red-50'
        }
      }
    }
  },
  't-input': {
    component: TInput,
    props: {
      fixedClasses: 'block w-full px-3 py-2 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed',
      classes: 'text-black placeholder-gray-400 bg-white border-gray-300 focus:border-green-500 ',
      variants: {
        danger: 'border-red-300 bg-red-50 placeholder-red-200 text-red-900',
        success: 'border-green-300 bg-green-50 placeholder-gray-400 text-green-900'
      }
    }
  }
}

Vue.use( VueTailwind, settings )
