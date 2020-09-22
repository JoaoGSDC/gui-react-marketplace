import { createUseStyles } from "react-jss";

const Styles = createUseStyles({
    '@global': {
        '@import': "url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap')",

        html: {
            margin: 0,
            padding: 0,
            backgroundColor: '#0272cc',
            fontFamily: "'Roboto', sans-serif",
        },
    
        body: {
            margin: 0,
            padding: 0,
            backgroundColor: '#0272cc',
            fontFamily: "'Roboto', sans-serif",
        },
        
        input: {
            height: '40px',
            color: '#030303',
            fontSize: '16px',
            borderRadius: '3px',
            padding: '0 10px 0 10px',
            border: '2px solid #ffa850',
            backgroundColor: '#ffffff',
        },
        
        button: {
            height: '40px',
            width: '150px',
            transition: '0.2s',
            fontWeight: 700,
            borderRadius: '3px',
            border: '1px solid #c6c6c6',
            color: 'rgba(0, 0, 0, 0.7)',
            backgroundColor: '#ff8000',
    
            '&:hover': {
                cursor: 'pointer',
                backgroundColor: '#e87500',
            }
        },
    },   
});

export default Styles;
