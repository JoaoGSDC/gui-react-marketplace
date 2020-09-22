import { createUseStyles } from "react-jss";

const Styles = createUseStyles({
    imgSize: {
        height: '150px',
    },
    
    card: {
        margin: '15px',
        width: '300px',
        padding: '10px',
        height: '300px',
        display: 'flex',
        textAlign: 'center',
        borderRadius: '3px',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#dadada',
        transition: 'transform 0.2s',
        backgroundImage: 'linear-gradient(#f3f3f3, #e0e0e0)',

        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    
    product: {
        display: 'flex',
        flex: '1 0 21%',
        justifyContent: 'center',
    },
    
    productText: {
        margin: '15px',
    },
    
    textLink: {
        display: 'flex',
        fontSize: '20px',
        alignItems: 'center',
        textDecoration: 'none',
        justifyContent: 'center',
        color: 'rgba(0, 0, 0, 0.6)',

        '&:hover': {
            cursor: 'pointer',
            color: '#ff8000',
        },
    },
    
    '@media (max-width: 600px)': {
        card: {
            width: 'calc(100% - 50px)',
            margin: '15px 10px 15px 7px',
        }
    },
});

export default Styles;
