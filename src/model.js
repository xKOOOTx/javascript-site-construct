import image from './assets/image.png'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock, MainBlock} from './classes/blocks'


export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            'text-align': 'center',
            padding: '10px',
        }
    }),
    new ImageBlock( image, {
        styles: {
            transform: 'scale(0.98)',
            'justify-content': 'center',
        },
        imageStyles: {
            width: '500px',
            height: 'auto',
        },
        alt: 'image'
    }),
    new TextBlock( 'here will be some text', {
        tag: 'h3',
        styles: {
            color: 'red',
            'text-align': 'center'
        }
    }),
    new ColumnsBlock([
        'Колонка №1',
        'Колонка №2',
        'Колонка №3'
    ], {
        tag: 'p',
        styles: {
            border: '1px solid #ccc',
            padding: '5px',
            "text-align": "center",
            color: 'blue',
        }
    }),
    new ColumnsBlock([
        'Какой-то очень супер пупер важный текст в первой колонке. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
        'magna aliqua.',
        'Какой-то очень супер пупер важный текст во второй колонке. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
        'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat.',
        'Какой-то очень супер пупер важный текст в третьей колонке. ' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ' +
        'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
        'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
        'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id ' +
        'est laborum.'
    ], {
        tag: 'p',
        styles: {
            'border-right': '1px solid #ccc',
            'flex-wrap': 'wrap',
            'overflow-wrap': 'break-word',
            color: 'darkgreen'
        }
    }),
    new MainBlock('main main main main main main main main main main main main', {
        tag: 'p',
        styles: {
            'font-weight': 'bold',
            'text-align': 'center',
            'text-transform': 'capitalize',
            'margin-top': '30px'
        }
    }),
]