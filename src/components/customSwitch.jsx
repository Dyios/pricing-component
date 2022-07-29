import Switch from '@mui/material/Switch'
import { styled } from '@mui/material/styles';

const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 22,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 4.7,
        '&.Mui-checked': {
            transform: 'translateX(17px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.primary1,
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 13,
        height: 13,
        borderRadius: '50%',
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: '50rem',
        opacity: 1,
        backgroundColor: theme.palette.neutral4,
        boxSizing: 'border-box',
    },
}));

export default function CSwitch({ onChange }) {
    return <CustomSwitch onChange={onChange} />
}