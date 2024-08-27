import {useNavigate} from "react-router-dom";
import {useCallback} from "react";

export default function useNav() {

    const navigate = useNavigate();

    const toHome = useCallback(() => {
        navigate('/');
    }, [navigate]);

    return {
        toHome
    };
}